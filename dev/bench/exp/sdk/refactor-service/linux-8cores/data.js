window.BENCHMARK_DATA = {
  "lastUpdate": 1725513736902,
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
          "id": "402015ba6054032ff88319c0a5a93067373a109c",
          "message": "test: Add ValidatorServiceTest",
          "timestamp": "2024-09-05T11:43:37+09:00",
          "tree_id": "3a081c4f64d27f103e92beec9ed59f40563364a4",
          "url": "https://github.com/planetarium/libplanet/commit/402015ba6054032ff88319c0a5a93067373a109c"
        },
        "date": 1725504893324,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205550.35820895524,
            "unit": "ns",
            "range": "± 9658.907308018528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200168.32258064515,
            "unit": "ns",
            "range": "± 6112.274139724083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165840.5625,
            "unit": "ns",
            "range": "± 3204.004264848389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162396.8,
            "unit": "ns",
            "range": "± 40870.83837128164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2912549.4,
            "unit": "ns",
            "range": "± 35363.57521680021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12621.341463414634,
            "unit": "ns",
            "range": "± 627.783347458325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60977.98947368421,
            "unit": "ns",
            "range": "± 3595.896699622516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50706.6,
            "unit": "ns",
            "range": "± 912.4852092734749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58289.5918367347,
            "unit": "ns",
            "range": "± 11060.948293723623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3488.557894736842,
            "unit": "ns",
            "range": "± 382.5856798987723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12186.295454545454,
            "unit": "ns",
            "range": "± 797.2950125208333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2476538.3666666667,
            "unit": "ns",
            "range": "± 31672.565645245428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2556337.8571428573,
            "unit": "ns",
            "range": "± 36067.925098362655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3127549.5714285714,
            "unit": "ns",
            "range": "± 44846.12148175184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2636508.6428571427,
            "unit": "ns",
            "range": "± 25491.70684030138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3259050.8235294116,
            "unit": "ns",
            "range": "± 55197.273504036515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10519076.733333332,
            "unit": "ns",
            "range": "± 71906.72351284252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26684143.866666667,
            "unit": "ns",
            "range": "± 105634.92232473304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69562228.76666667,
            "unit": "ns",
            "range": "± 417672.3708450828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138087401.69230768,
            "unit": "ns",
            "range": "± 356845.6497930594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282733697,
            "unit": "ns",
            "range": "± 2812308.307710412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006886.3974358974,
            "unit": "ns",
            "range": "± 45711.557833804356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1956763.103448276,
            "unit": "ns",
            "range": "± 85835.94069015932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686641.335443038,
            "unit": "ns",
            "range": "± 87295.10498310336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8306568.862068965,
            "unit": "ns",
            "range": "± 243409.39330341681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733862.640066964,
            "unit": "ns",
            "range": "± 9179.831286646739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213421.0050223214,
            "unit": "ns",
            "range": "± 969.096773009745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777775.29609375,
            "unit": "ns",
            "range": "± 921.0471767279316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977529.1213541667,
            "unit": "ns",
            "range": "± 3698.337511878898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629693.7182942708,
            "unit": "ns",
            "range": "± 1048.7829575013748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568551.3535853794,
            "unit": "ns",
            "range": "± 759.0630394385649"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35918.35,
            "unit": "ns",
            "range": "± 6008.088782271493"
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
          "id": "c93be138b6aeb94e6dd62b77e8b13c0df520d77f",
          "message": "test: Add ValidatorServiceTest",
          "timestamp": "2024-09-05T14:09:29+09:00",
          "tree_id": "7149fb4ead882c2a41dbeedad23880f3b27c3672",
          "url": "https://github.com/planetarium/libplanet/commit/c93be138b6aeb94e6dd62b77e8b13c0df520d77f"
        },
        "date": 1725513710435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196876.9111111111,
            "unit": "ns",
            "range": "± 6796.683639240478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200134.8076923077,
            "unit": "ns",
            "range": "± 7547.983730352442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168536.5294117647,
            "unit": "ns",
            "range": "± 3216.8867736844395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3101591.966666667,
            "unit": "ns",
            "range": "± 31602.83634392572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2885423.2666666666,
            "unit": "ns",
            "range": "± 32998.70177850435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12596.560975609756,
            "unit": "ns",
            "range": "± 673.5442481832688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69600.82051282052,
            "unit": "ns",
            "range": "± 3451.6734563373966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50751.583333333336,
            "unit": "ns",
            "range": "± 603.7640204784005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51740.298969072166,
            "unit": "ns",
            "range": "± 7359.648920471892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2497.0315789473684,
            "unit": "ns",
            "range": "± 201.83627516104397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11922.964285714286,
            "unit": "ns",
            "range": "± 637.1529378249791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2389327.769230769,
            "unit": "ns",
            "range": "± 32652.361923638964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523327.6,
            "unit": "ns",
            "range": "± 32434.6996348047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2976788,
            "unit": "ns",
            "range": "± 36942.2733502652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2504030.7666666666,
            "unit": "ns",
            "range": "± 45432.50678670294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3203844.214285714,
            "unit": "ns",
            "range": "± 21404.305936957106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10524884,
            "unit": "ns",
            "range": "± 70945.47711950555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26678010.566666666,
            "unit": "ns",
            "range": "± 368794.32419855194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68589251.43333334,
            "unit": "ns",
            "range": "± 340252.7383889945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138978372.7857143,
            "unit": "ns",
            "range": "± 1027758.4772198467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284546010.6,
            "unit": "ns",
            "range": "± 1362246.65313496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003740.9333333333,
            "unit": "ns",
            "range": "± 41688.66792529249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1916109.6621621621,
            "unit": "ns",
            "range": "± 64598.27085642185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707325.8245614036,
            "unit": "ns",
            "range": "± 73110.41024884477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8230178.521739131,
            "unit": "ns",
            "range": "± 207800.3618723049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3687227.8993389425,
            "unit": "ns",
            "range": "± 4515.14131276215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209998.9208984375,
            "unit": "ns",
            "range": "± 4401.069784778324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751336.1290364583,
            "unit": "ns",
            "range": "± 2141.003215293613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931286.3109375,
            "unit": "ns",
            "range": "± 7377.709230131718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620428.0649038461,
            "unit": "ns",
            "range": "± 1291.7513633755295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561549.2223958333,
            "unit": "ns",
            "range": "± 2036.204540596917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35815.69,
            "unit": "ns",
            "range": "± 5501.696432029127"
          }
        ]
      }
    ]
  }
}