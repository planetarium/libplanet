window.BENCHMARK_DATA = {
  "lastUpdate": 1725520460734,
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
          "id": "06c474f68ceb895b5bd1956b99c90499c98b268a",
          "message": "test: Add ValidatorServiceTest",
          "timestamp": "2024-09-05T14:55:55+09:00",
          "tree_id": "7149fb4ead882c2a41dbeedad23880f3b27c3672",
          "url": "https://github.com/planetarium/libplanet/commit/06c474f68ceb895b5bd1956b99c90499c98b268a"
        },
        "date": 1725516359092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237089.15463917525,
            "unit": "ns",
            "range": "± 14285.851819734822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215768.40404040404,
            "unit": "ns",
            "range": "± 12995.861161342158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197266.17,
            "unit": "ns",
            "range": "± 16143.008429429323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3198860.7666666666,
            "unit": "ns",
            "range": "± 29289.981616017903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2946168.3,
            "unit": "ns",
            "range": "± 27785.135204175014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18059.762626262625,
            "unit": "ns",
            "range": "± 5208.566606427238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77617.76,
            "unit": "ns",
            "range": "± 10902.308416592563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53308.42307692308,
            "unit": "ns",
            "range": "± 1461.3713812190772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75163.17525773196,
            "unit": "ns",
            "range": "± 11575.71195255601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4596.567010309278,
            "unit": "ns",
            "range": "± 879.0623189325148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22611.37341772152,
            "unit": "ns",
            "range": "± 1189.260256685002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2595290.066666667,
            "unit": "ns",
            "range": "± 45357.40211045518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2617883.6333333333,
            "unit": "ns",
            "range": "± 48693.228220691846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3134930.8666666667,
            "unit": "ns",
            "range": "± 49763.407367644104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2649236.076923077,
            "unit": "ns",
            "range": "± 19876.037748427705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3317106.4285714286,
            "unit": "ns",
            "range": "± 57054.14504420581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10575315.833333334,
            "unit": "ns",
            "range": "± 136407.90680249475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27247512.333333332,
            "unit": "ns",
            "range": "± 133735.7917423469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69725393.92857143,
            "unit": "ns",
            "range": "± 500987.01525910356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139935166.2142857,
            "unit": "ns",
            "range": "± 306463.46778548404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288177283.85714287,
            "unit": "ns",
            "range": "± 1424777.6368386324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1075394.987804878,
            "unit": "ns",
            "range": "± 54979.93525060159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054346.3055555555,
            "unit": "ns",
            "range": "± 68376.93094513235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1786672.5,
            "unit": "ns",
            "range": "± 87521.98505271971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8379008.2,
            "unit": "ns",
            "range": "± 256470.5014382516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3725195.255408654,
            "unit": "ns",
            "range": "± 12787.765288210916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199543.9729166667,
            "unit": "ns",
            "range": "± 1755.7630763821567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765901.9826171875,
            "unit": "ns",
            "range": "± 2175.484568843828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927681.7735677084,
            "unit": "ns",
            "range": "± 4186.33463717438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636975.7744140625,
            "unit": "ns",
            "range": "± 972.0580810034678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569112.2666015625,
            "unit": "ns",
            "range": "± 1310.95690971988"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32831.04054054054,
            "unit": "ns",
            "range": "± 1072.3144645162681"
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
          "id": "6be41046629c9c9beffd5f41232cdc67c75edcbc",
          "message": "test: Add StoreServiceTest",
          "timestamp": "2024-09-05T16:03:26+09:00",
          "tree_id": "ffba5823c87668b8fbbbe2e531e2475e452e53be",
          "url": "https://github.com/planetarium/libplanet/commit/6be41046629c9c9beffd5f41232cdc67c75edcbc"
        },
        "date": 1725520434239,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203644.33333333334,
            "unit": "ns",
            "range": "± 5931.824898497661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192879.96226415093,
            "unit": "ns",
            "range": "± 7526.292674459688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159721.9375,
            "unit": "ns",
            "range": "± 2960.5143127222564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072917.269230769,
            "unit": "ns",
            "range": "± 22741.94504344284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2882509.3333333335,
            "unit": "ns",
            "range": "± 32661.329477504358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12551.058823529413,
            "unit": "ns",
            "range": "± 597.5667921789272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60366,
            "unit": "ns",
            "range": "± 3008.2750609120276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49537.75,
            "unit": "ns",
            "range": "± 560.111210548243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52738.9081632653,
            "unit": "ns",
            "range": "± 8140.854973067017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2660.223404255319,
            "unit": "ns",
            "range": "± 340.6802541612637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11879.16923076923,
            "unit": "ns",
            "range": "± 559.7240271227078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403866.2666666666,
            "unit": "ns",
            "range": "± 25621.351334571016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2539964.5,
            "unit": "ns",
            "range": "± 30321.74866519714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057122.230769231,
            "unit": "ns",
            "range": "± 30552.545270822215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2492558.0714285714,
            "unit": "ns",
            "range": "± 32607.227911483496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3220656.966666667,
            "unit": "ns",
            "range": "± 58483.38254931501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9976120.92857143,
            "unit": "ns",
            "range": "± 50182.548844523306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26872804.64285714,
            "unit": "ns",
            "range": "± 134133.19206474593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68899359.73333333,
            "unit": "ns",
            "range": "± 402635.8644655537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137437698,
            "unit": "ns",
            "range": "± 366193.6247453563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283214108.1333333,
            "unit": "ns",
            "range": "± 1061493.9751093313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015717.6315789474,
            "unit": "ns",
            "range": "± 50746.118858448564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898856.4090909092,
            "unit": "ns",
            "range": "± 42650.31344484731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708402.219512195,
            "unit": "ns",
            "range": "± 89702.14966598143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8167248.761904762,
            "unit": "ns",
            "range": "± 189193.1110069563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3747432.3270089286,
            "unit": "ns",
            "range": "± 3440.9572387694316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210260.7540364584,
            "unit": "ns",
            "range": "± 1641.1796427869708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776594.0101143973,
            "unit": "ns",
            "range": "± 1875.510097771075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932565.5182291667,
            "unit": "ns",
            "range": "± 2363.1888923600036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603944.9569614956,
            "unit": "ns",
            "range": "± 553.2842578842842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584170.7751953125,
            "unit": "ns",
            "range": "± 761.3223997598648"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32492.96153846154,
            "unit": "ns",
            "range": "± 393.11461759148887"
          }
        ]
      }
    ]
  }
}