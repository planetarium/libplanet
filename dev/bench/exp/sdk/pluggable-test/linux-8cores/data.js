window.BENCHMARK_DATA = {
  "lastUpdate": 1724719766089,
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
          "id": "c0d5e06cb475cde26e76fcb5520035b3c9411766",
          "message": "WIP",
          "timestamp": "2024-08-23T18:11:19+09:00",
          "tree_id": "fabe29fc9556d6e076bc96ff80a1b98a9ccde45b",
          "url": "https://github.com/planetarium/libplanet/commit/c0d5e06cb475cde26e76fcb5520035b3c9411766"
        },
        "date": 1724404915452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202079.33333333334,
            "unit": "ns",
            "range": "± 7011.733839685908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196698.02222222224,
            "unit": "ns",
            "range": "± 7441.903832930513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167310.1052631579,
            "unit": "ns",
            "range": "± 3352.0551555846855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3042583.214285714,
            "unit": "ns",
            "range": "± 24577.658564791574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2834258,
            "unit": "ns",
            "range": "± 17975.217392501607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14151.729166666666,
            "unit": "ns",
            "range": "± 1773.9888534579304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60571.23333333333,
            "unit": "ns",
            "range": "± 3871.1109394614336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50864.92307692308,
            "unit": "ns",
            "range": "± 404.969023823317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54083.19387755102,
            "unit": "ns",
            "range": "± 6873.363213830657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2847.381443298969,
            "unit": "ns",
            "range": "± 586.7981169607897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12178.319444444445,
            "unit": "ns",
            "range": "± 610.2197670705453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377403.6428571427,
            "unit": "ns",
            "range": "± 35685.09957651392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554296.7,
            "unit": "ns",
            "range": "± 39129.02672697086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3042745.5,
            "unit": "ns",
            "range": "± 37576.0029344037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2654163.8666666667,
            "unit": "ns",
            "range": "± 47848.93789367096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3264550.588235294,
            "unit": "ns",
            "range": "± 64254.37942375876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10347883.066666666,
            "unit": "ns",
            "range": "± 55863.70513831813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26822624.066666666,
            "unit": "ns",
            "range": "± 249450.52493100186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68523368.06666666,
            "unit": "ns",
            "range": "± 274871.91112211486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136995298.93333334,
            "unit": "ns",
            "range": "± 1293666.1607037282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 312155700.35714287,
            "unit": "ns",
            "range": "± 2805323.4131363085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038058.9494382022,
            "unit": "ns",
            "range": "± 67529.92487358529"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1940820.5652173914,
            "unit": "ns",
            "range": "± 48305.52738354454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1688325.191011236,
            "unit": "ns",
            "range": "± 93059.88166642982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8376306.314285714,
            "unit": "ns",
            "range": "± 268168.88656840764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3800919.2190290177,
            "unit": "ns",
            "range": "± 7176.345765278547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203942.3327287945,
            "unit": "ns",
            "range": "± 3041.630854538094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764437.6824869792,
            "unit": "ns",
            "range": "± 1837.482395089002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973352.9712611607,
            "unit": "ns",
            "range": "± 3662.408752332381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621862.7653245192,
            "unit": "ns",
            "range": "± 532.9617344335734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564246.4762137277,
            "unit": "ns",
            "range": "± 403.6475957014881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33451.98780487805,
            "unit": "ns",
            "range": "± 1776.5577705763249"
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
          "id": "91dcdbdf2064dda8dd0d638643e4984aa2cea960",
          "message": "WIP",
          "timestamp": "2024-08-26T15:20:03+09:00",
          "tree_id": "956bd24e4bc49c32e1f086d3a67ee44f230f6f81",
          "url": "https://github.com/planetarium/libplanet/commit/91dcdbdf2064dda8dd0d638643e4984aa2cea960"
        },
        "date": 1724653750513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206394.48245614034,
            "unit": "ns",
            "range": "± 8857.907342133894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198180.97619047618,
            "unit": "ns",
            "range": "± 7210.758517788425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186513.68181818182,
            "unit": "ns",
            "range": "± 4519.536508435599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3181204.2666666666,
            "unit": "ns",
            "range": "± 42015.957136148485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835776.6,
            "unit": "ns",
            "range": "± 39353.52075155229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13885.296703296703,
            "unit": "ns",
            "range": "± 1088.336983092456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71270.09278350516,
            "unit": "ns",
            "range": "± 8683.524170666627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51803.103896103894,
            "unit": "ns",
            "range": "± 2231.8631559659534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60070.04081632653,
            "unit": "ns",
            "range": "± 9583.2470286286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3019.381443298969,
            "unit": "ns",
            "range": "± 531.6066536786341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12330.955555555556,
            "unit": "ns",
            "range": "± 730.7096736844121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2487679.6875,
            "unit": "ns",
            "range": "± 46723.593393086754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538246.433333333,
            "unit": "ns",
            "range": "± 45159.69152347299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111028.1,
            "unit": "ns",
            "range": "± 36688.269845512514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2619399.76,
            "unit": "ns",
            "range": "± 67447.3538313896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3348619.3333333335,
            "unit": "ns",
            "range": "± 39212.004733730406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10676827,
            "unit": "ns",
            "range": "± 101695.03716645033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27012418.466666665,
            "unit": "ns",
            "range": "± 100631.90559720018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69845789.8,
            "unit": "ns",
            "range": "± 284206.0246738019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139007888.86666667,
            "unit": "ns",
            "range": "± 689584.9798408633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294407344.1,
            "unit": "ns",
            "range": "± 1420986.7127826957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031429.9589041095,
            "unit": "ns",
            "range": "± 50782.125686449945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2024177.1320754718,
            "unit": "ns",
            "range": "± 83060.17332819107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1778576.0652173914,
            "unit": "ns",
            "range": "± 118645.96322435609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8497808.206896551,
            "unit": "ns",
            "range": "± 247114.1203399438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712310.333233173,
            "unit": "ns",
            "range": "± 4127.926981547353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204063.980747768,
            "unit": "ns",
            "range": "± 1676.798110575659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764305.0428989956,
            "unit": "ns",
            "range": "± 1413.3860305642033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956290.31328125,
            "unit": "ns",
            "range": "± 2280.1497629700452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636238.9794224331,
            "unit": "ns",
            "range": "± 1006.3161513235899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590676.5244891827,
            "unit": "ns",
            "range": "± 611.9743397335675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32093.23076923077,
            "unit": "ns",
            "range": "± 419.4123177825042"
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
          "id": "e361b91fe71a6809dbb85ced61ec1f0e20f856b3",
          "message": "WIP",
          "timestamp": "2024-08-26T15:27:40+09:00",
          "tree_id": "63b4f4211119eb76caca6d590ba48c1a38c34132",
          "url": "https://github.com/planetarium/libplanet/commit/e361b91fe71a6809dbb85ced61ec1f0e20f856b3"
        },
        "date": 1724654185393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202181,
            "unit": "ns",
            "range": "± 7916.80785858867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189593.38888888888,
            "unit": "ns",
            "range": "± 6102.191417973325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164593.2,
            "unit": "ns",
            "range": "± 2829.599901046083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048660.1666666665,
            "unit": "ns",
            "range": "± 27321.883836605273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2790557.533333333,
            "unit": "ns",
            "range": "± 23278.57837420081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12475.092592592593,
            "unit": "ns",
            "range": "± 664.419234703846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59556.51298701299,
            "unit": "ns",
            "range": "± 3027.3095511113775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49485.666666666664,
            "unit": "ns",
            "range": "± 464.12700717355244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54328.37113402062,
            "unit": "ns",
            "range": "± 6558.658641317198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2725.3473684210526,
            "unit": "ns",
            "range": "± 189.78160844132287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12230.686567164179,
            "unit": "ns",
            "range": "± 593.5407419820333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405914.1333333333,
            "unit": "ns",
            "range": "± 41263.01379282258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532576.5,
            "unit": "ns",
            "range": "± 35285.06676670414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3140925.8125,
            "unit": "ns",
            "range": "± 59075.837166835816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2524738.5714285714,
            "unit": "ns",
            "range": "± 41193.04661536998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3212729,
            "unit": "ns",
            "range": "± 41388.72757489931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10601711.07142857,
            "unit": "ns",
            "range": "± 29251.686627149673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26735826.785714287,
            "unit": "ns",
            "range": "± 127145.58406511112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69029068.71428572,
            "unit": "ns",
            "range": "± 532560.3969279235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137564702.35714287,
            "unit": "ns",
            "range": "± 505820.3642698595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284923382.9285714,
            "unit": "ns",
            "range": "± 465693.016250713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015971.6058823529,
            "unit": "ns",
            "range": "± 54482.170768676486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1931132.524390244,
            "unit": "ns",
            "range": "± 68494.3161760477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681829.0897435897,
            "unit": "ns",
            "range": "± 85728.09453697133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8158374.919354838,
            "unit": "ns",
            "range": "± 248862.99559312742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3787007.5544084823,
            "unit": "ns",
            "range": "± 6323.216457990878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207862.51484375,
            "unit": "ns",
            "range": "± 2506.300956660087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765235.2352701823,
            "unit": "ns",
            "range": "± 2134.643478418949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2008178.8171875,
            "unit": "ns",
            "range": "± 3828.3343510292584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631309.6161458333,
            "unit": "ns",
            "range": "± 1253.5817533125244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577154.850390625,
            "unit": "ns",
            "range": "± 281.9370337437985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32061.5,
            "unit": "ns",
            "range": "± 407.13478206759834"
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
          "id": "9dcdc985435aa786756ee80b6407fd89a9914d31",
          "message": "WIP",
          "timestamp": "2024-08-27T09:35:59+09:00",
          "tree_id": "48b5632a50d8b70efd12d245dd5280110b299749",
          "url": "https://github.com/planetarium/libplanet/commit/9dcdc985435aa786756ee80b6407fd89a9914d31"
        },
        "date": 1724719739822,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200289.6551724138,
            "unit": "ns",
            "range": "± 8228.427850844395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192890.51666666666,
            "unit": "ns",
            "range": "± 8568.193766684219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171093.54545454544,
            "unit": "ns",
            "range": "± 4968.4244112879305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3167079.566666667,
            "unit": "ns",
            "range": "± 28855.102048156474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2935399.0625,
            "unit": "ns",
            "range": "± 35082.857882387994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13969.670103092783,
            "unit": "ns",
            "range": "± 1563.1508759130381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93215.67204301075,
            "unit": "ns",
            "range": "± 13377.596179257953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53552.188888888886,
            "unit": "ns",
            "range": "± 2023.333049273606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64355.11224489796,
            "unit": "ns",
            "range": "± 11668.949151560486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3416.773195876289,
            "unit": "ns",
            "range": "± 582.1220251723187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19165.831578947367,
            "unit": "ns",
            "range": "± 3332.2908536072764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2480812.0714285714,
            "unit": "ns",
            "range": "± 34855.954541433886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2571887.1428571427,
            "unit": "ns",
            "range": "± 41531.87439111748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3098479.6923076925,
            "unit": "ns",
            "range": "± 40004.58018649159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2643205.275,
            "unit": "ns",
            "range": "± 89989.34238734635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3320637.294117647,
            "unit": "ns",
            "range": "± 67366.64099886967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10632741.933333334,
            "unit": "ns",
            "range": "± 102779.51262044025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26733061.933333334,
            "unit": "ns",
            "range": "± 101726.60335671903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68597857.86666666,
            "unit": "ns",
            "range": "± 652928.7432490916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136504399.8,
            "unit": "ns",
            "range": "± 458748.27983689954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284875617.85714287,
            "unit": "ns",
            "range": "± 673831.2278827527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065668.9493670885,
            "unit": "ns",
            "range": "± 55338.580576789405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2075036.4375,
            "unit": "ns",
            "range": "± 62997.42781637865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1816591.40625,
            "unit": "ns",
            "range": "± 83528.89860073212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8549233.975,
            "unit": "ns",
            "range": "± 296412.8950081321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698842.7497209823,
            "unit": "ns",
            "range": "± 8442.685574958374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217670.249609375,
            "unit": "ns",
            "range": "± 1577.6641413620139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768783.1073567708,
            "unit": "ns",
            "range": "± 1016.5078511066896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904561.99609375,
            "unit": "ns",
            "range": "± 2056.894658039745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621749.9662710336,
            "unit": "ns",
            "range": "± 978.3909765613464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570483.9099469866,
            "unit": "ns",
            "range": "± 585.9581786914952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32107.227272727272,
            "unit": "ns",
            "range": "± 512.0944092476348"
          }
        ]
      }
    ]
  }
}