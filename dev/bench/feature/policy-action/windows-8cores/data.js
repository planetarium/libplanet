window.BENCHMARK_DATA = {
  "lastUpdate": 1721354745863,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3406e0388638865dc65d0e49f17ff8048e89dd10",
          "message": "temp: fix build error due to rebase",
          "timestamp": "2024-07-16T11:02:30+09:00",
          "tree_id": "b8b3773f9ae97678a42355348a63c5c88403d520",
          "url": "https://github.com/planetarium/libplanet/commit/3406e0388638865dc65d0e49f17ff8048e89dd10"
        },
        "date": 1721095958097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 953967.0103092784,
            "unit": "ns",
            "range": "± 68181.91769335652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718425.7142857143,
            "unit": "ns",
            "range": "± 55337.05992985779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1501248.3146067415,
            "unit": "ns",
            "range": "± 82299.43266174654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6721964.285714285,
            "unit": "ns",
            "range": "± 173807.58670370863"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29539.583333333332,
            "unit": "ns",
            "range": "± 964.1972922798094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9439493.333333334,
            "unit": "ns",
            "range": "± 72499.33464390914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23539900,
            "unit": "ns",
            "range": "± 320895.0874395823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58912571.428571425,
            "unit": "ns",
            "range": "± 565146.7017558313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116954906.66666667,
            "unit": "ns",
            "range": "± 960131.5798715646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236954230.76923078,
            "unit": "ns",
            "range": "± 1752113.3893028612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3303573.8020833335,
            "unit": "ns",
            "range": "± 7571.9816309766275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038846.4146205357,
            "unit": "ns",
            "range": "± 3477.5434942781208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722930.9895833334,
            "unit": "ns",
            "range": "± 3744.8352300084603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931314.4140625,
            "unit": "ns",
            "range": "± 4325.778567406496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619992.01171875,
            "unit": "ns",
            "range": "± 2528.872520086818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564148.1515066965,
            "unit": "ns",
            "range": "± 2221.401877133522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128757.1428571427,
            "unit": "ns",
            "range": "± 35304.733051308795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2189045.4545454546,
            "unit": "ns",
            "range": "± 43034.66739040279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621832.2580645164,
            "unit": "ns",
            "range": "± 78139.01452794147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2280326.6666666665,
            "unit": "ns",
            "range": "± 39286.974698395665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2895686.6666666665,
            "unit": "ns",
            "range": "± 49457.02126474008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173975.2808988764,
            "unit": "ns",
            "range": "± 9568.951696394253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165233.89830508476,
            "unit": "ns",
            "range": "± 6496.221983464339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144846.66666666666,
            "unit": "ns",
            "range": "± 3867.2571883596706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2659300,
            "unit": "ns",
            "range": "± 19795.10428985293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2413806.6666666665,
            "unit": "ns",
            "range": "± 23383.95257639816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9434.065934065935,
            "unit": "ns",
            "range": "± 824.2464275822936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49624.67532467532,
            "unit": "ns",
            "range": "± 2283.646428766931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44028,
            "unit": "ns",
            "range": "± 633.4561284466879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47409.183673469386,
            "unit": "ns",
            "range": "± 8430.126226381215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2282.4742268041236,
            "unit": "ns",
            "range": "± 233.63535926664935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8974.725274725275,
            "unit": "ns",
            "range": "± 641.9749746928366"
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
          "id": "62f1624497569651272b9ed26ab5cd93cadcf303",
          "message": "Changelog",
          "timestamp": "2024-07-16T11:26:29+09:00",
          "tree_id": "2df40c8fcf5301123e95d348135c4ba1337cbbab",
          "url": "https://github.com/planetarium/libplanet/commit/62f1624497569651272b9ed26ab5cd93cadcf303"
        },
        "date": 1721097386009,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007657.5757575758,
            "unit": "ns",
            "range": "± 80233.17814779453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1795581.1764705882,
            "unit": "ns",
            "range": "± 93945.22656227688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516289.2857142857,
            "unit": "ns",
            "range": "± 74132.04600755857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6679345.161290322,
            "unit": "ns",
            "range": "± 201610.90221630657"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30145.652173913044,
            "unit": "ns",
            "range": "± 990.3324967435332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9474846.666666666,
            "unit": "ns",
            "range": "± 42739.82529990812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23691760,
            "unit": "ns",
            "range": "± 231991.10758820045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59795320,
            "unit": "ns",
            "range": "± 882338.955115485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124635557.14285715,
            "unit": "ns",
            "range": "± 471640.7037211625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233642126.66666666,
            "unit": "ns",
            "range": "± 1663633.8700338514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3328134.921875,
            "unit": "ns",
            "range": "± 6354.577229361212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054697.3046875,
            "unit": "ns",
            "range": "± 2445.284994969184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743141.8815104166,
            "unit": "ns",
            "range": "± 1651.8145062542985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920141.9401041667,
            "unit": "ns",
            "range": "± 2853.4655736719556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618281.8987165178,
            "unit": "ns",
            "range": "± 578.488705383918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557448.1705729166,
            "unit": "ns",
            "range": "± 2658.043151947086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116160.8695652173,
            "unit": "ns",
            "range": "± 36276.03440202304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320156.25,
            "unit": "ns",
            "range": "± 44254.09915100144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2694041.935483871,
            "unit": "ns",
            "range": "± 81576.00453643847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242000,
            "unit": "ns",
            "range": "± 49203.251925050645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2903807.1428571427,
            "unit": "ns",
            "range": "± 34008.85550481305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170226.8656716418,
            "unit": "ns",
            "range": "± 7922.916169769666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169438.98305084746,
            "unit": "ns",
            "range": "± 7235.092091236524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142835.7142857143,
            "unit": "ns",
            "range": "± 1755.258974036044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2678600,
            "unit": "ns",
            "range": "± 25448.435259222857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2481846.6666666665,
            "unit": "ns",
            "range": "± 23319.54626692462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11094.897959183674,
            "unit": "ns",
            "range": "± 1356.950222744409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51068.131868131866,
            "unit": "ns",
            "range": "± 3813.044252471569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43808.57142857143,
            "unit": "ns",
            "range": "± 1258.9377942328601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51826.80412371134,
            "unit": "ns",
            "range": "± 10160.139798331984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2408.5106382978724,
            "unit": "ns",
            "range": "± 295.361842771167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9136.95652173913,
            "unit": "ns",
            "range": "± 877.8992647040939"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "436c989fe3f04a770351e863bba274304740e9fc",
          "message": "Fixed tests",
          "timestamp": "2024-07-18T13:58:06+09:00",
          "tree_id": "a8052802bcadc662005a819385c53df8d83b860f",
          "url": "https://github.com/planetarium/libplanet/commit/436c989fe3f04a770351e863bba274304740e9fc"
        },
        "date": 1721281515387,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004516.6666666666,
            "unit": "ns",
            "range": "± 73315.36352013737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1812204.8780487804,
            "unit": "ns",
            "range": "± 65246.49780340517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1604681.111111111,
            "unit": "ns",
            "range": "± 99394.6620935156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6810854.838709678,
            "unit": "ns",
            "range": "± 206973.35551339242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35746.93877551021,
            "unit": "ns",
            "range": "± 6026.234810909123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10123646.666666666,
            "unit": "ns",
            "range": "± 124191.84391592749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25044900,
            "unit": "ns",
            "range": "± 226457.35643982576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60137513.333333336,
            "unit": "ns",
            "range": "± 483850.5257185273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121038993.33333333,
            "unit": "ns",
            "range": "± 1036441.1736229665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248521906.66666666,
            "unit": "ns",
            "range": "± 1687717.9209413717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329581.3541666665,
            "unit": "ns",
            "range": "± 8844.105694358375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074221.3151041667,
            "unit": "ns",
            "range": "± 2509.7821302814464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733845.7747395834,
            "unit": "ns",
            "range": "± 1149.9242280595615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977214.7395833333,
            "unit": "ns",
            "range": "± 3744.662110367775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628374.1978236607,
            "unit": "ns",
            "range": "± 1311.1214348571866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568358.7239583334,
            "unit": "ns",
            "range": "± 1182.3054710688205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124397.222222222,
            "unit": "ns",
            "range": "± 63744.04391722127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2276888.888888889,
            "unit": "ns",
            "range": "± 45632.1595689718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727341.1764705884,
            "unit": "ns",
            "range": "± 55188.3486211484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2380121.4285714286,
            "unit": "ns",
            "range": "± 40649.25353787955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3025741.6666666665,
            "unit": "ns",
            "range": "± 21696.39510623967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186344.11764705883,
            "unit": "ns",
            "range": "± 7874.299444848832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181048.57142857142,
            "unit": "ns",
            "range": "± 8800.25926589654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146775.75757575757,
            "unit": "ns",
            "range": "± 4655.308146556353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2854757.1428571427,
            "unit": "ns",
            "range": "± 30888.178328278937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491233.3333333335,
            "unit": "ns",
            "range": "± 32758.437662612025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12823.033707865168,
            "unit": "ns",
            "range": "± 1101.4209876485406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60208.333333333336,
            "unit": "ns",
            "range": "± 5765.444551566947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50879.5918367347,
            "unit": "ns",
            "range": "± 4129.500585956758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69600,
            "unit": "ns",
            "range": "± 12905.982140077524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3215.7894736842104,
            "unit": "ns",
            "range": "± 581.6915519329343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12818.947368421053,
            "unit": "ns",
            "range": "± 1830.4920125033998"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "7c03e1651d680b7542d18e12c29bec3d83846a67",
          "message": "Renamed IsBlockAction to IsPolicyAction for clarification",
          "timestamp": "2024-07-19T10:48:51+09:00",
          "tree_id": "e74a6082a67c212055a96436aace5083dbfff98e",
          "url": "https://github.com/planetarium/libplanet/commit/7c03e1651d680b7542d18e12c29bec3d83846a67"
        },
        "date": 1721354299165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1041847.9591836735,
            "unit": "ns",
            "range": "± 123024.05868939088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767561.224489796,
            "unit": "ns",
            "range": "± 67045.9879993033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567517.857142857,
            "unit": "ns",
            "range": "± 83766.5044492248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6838524.193548387,
            "unit": "ns",
            "range": "± 207210.1444874131"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30929.48717948718,
            "unit": "ns",
            "range": "± 1611.8964368749387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9600913.333333334,
            "unit": "ns",
            "range": "± 93339.61696534915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23812826.666666668,
            "unit": "ns",
            "range": "± 365954.01831898163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60959035.71428572,
            "unit": "ns",
            "range": "± 601617.8784771084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123399452.4590164,
            "unit": "ns",
            "range": "± 5207635.73023967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235798466.66666666,
            "unit": "ns",
            "range": "± 2109612.3793134084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3305618.6458333335,
            "unit": "ns",
            "range": "± 7511.129893998427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083624.676983173,
            "unit": "ns",
            "range": "± 1555.5608811246561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728209.4377790178,
            "unit": "ns",
            "range": "± 1275.6254279609375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916487.4479166667,
            "unit": "ns",
            "range": "± 5568.16744707526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624724.7721354166,
            "unit": "ns",
            "range": "± 1029.7511203158106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566049.9348958334,
            "unit": "ns",
            "range": "± 1102.8053852951234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215100,
            "unit": "ns",
            "range": "± 42036.159037983794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274773.3333333335,
            "unit": "ns",
            "range": "± 35884.347297288004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2737161.111111111,
            "unit": "ns",
            "range": "± 52293.505826574554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2314128.5714285714,
            "unit": "ns",
            "range": "± 64159.52258725386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2906723.076923077,
            "unit": "ns",
            "range": "± 45802.677393469654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176952.23880597015,
            "unit": "ns",
            "range": "± 7947.37155346183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169402,
            "unit": "ns",
            "range": "± 6059.685786964098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143321.73913043478,
            "unit": "ns",
            "range": "± 3557.956068222205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2709873.3333333335,
            "unit": "ns",
            "range": "± 34596.376083272626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2497426.6666666665,
            "unit": "ns",
            "range": "± 44959.56066553693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11798.901098901099,
            "unit": "ns",
            "range": "± 1240.2951714540025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55836.73469387755,
            "unit": "ns",
            "range": "± 5352.220615456344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46479.31034482759,
            "unit": "ns",
            "range": "± 2036.0573028755505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56688.17204301075,
            "unit": "ns",
            "range": "± 10755.896759476369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2857.1428571428573,
            "unit": "ns",
            "range": "± 453.8495140939329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10195.505617977527,
            "unit": "ns",
            "range": "± 951.4235879554803"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "00a84a20430c43ae8aef8f1b47e2439c4208717f",
          "message": "Renamed IsBlockAction to IsPolicyAction for clarification",
          "timestamp": "2024-07-19T10:51:14+09:00",
          "tree_id": "e118203ae6582b70a19ad03a75b1454a5ebf512f",
          "url": "https://github.com/planetarium/libplanet/commit/00a84a20430c43ae8aef8f1b47e2439c4208717f"
        },
        "date": 1721354580270,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962082.7956989247,
            "unit": "ns",
            "range": "± 63141.94606573888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781433.3333333333,
            "unit": "ns",
            "range": "± 78855.10347867644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511597.7272727273,
            "unit": "ns",
            "range": "± 88617.11645110483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6834241.463414635,
            "unit": "ns",
            "range": "± 243472.39779450334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37034,
            "unit": "ns",
            "range": "± 4983.340326335419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9879440,
            "unit": "ns",
            "range": "± 74338.02910643093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23063370,
            "unit": "ns",
            "range": "± 284679.0578880013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58366423.07692308,
            "unit": "ns",
            "range": "± 304481.6939047025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112967900,
            "unit": "ns",
            "range": "± 226966.929909904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234001321.42857143,
            "unit": "ns",
            "range": "± 769294.9991123955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3267128.6783854165,
            "unit": "ns",
            "range": "± 3001.419039065892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054111.146763393,
            "unit": "ns",
            "range": "± 1739.0372951777383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728476.2890625,
            "unit": "ns",
            "range": "± 2076.430625037182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921483.0729166667,
            "unit": "ns",
            "range": "± 2588.699313154323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611427.3577008928,
            "unit": "ns",
            "range": "± 899.0832394232865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565350.7096354166,
            "unit": "ns",
            "range": "± 1495.2890417188694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2131805.263157895,
            "unit": "ns",
            "range": "± 25924.880235107707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2236933.3333333335,
            "unit": "ns",
            "range": "± 45473.464789918966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2625558.3333333335,
            "unit": "ns",
            "range": "± 88235.95020059237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2264820,
            "unit": "ns",
            "range": "± 38417.298930857396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2957212.5,
            "unit": "ns",
            "range": "± 57564.29304120162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170909.3220338983,
            "unit": "ns",
            "range": "± 7376.620070897525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160270.9090909091,
            "unit": "ns",
            "range": "± 6516.2950370667695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146141.17647058822,
            "unit": "ns",
            "range": "± 2895.267436595757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2699169.230769231,
            "unit": "ns",
            "range": "± 22721.73645856117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2422346.6666666665,
            "unit": "ns",
            "range": "± 37189.64653668826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9175,
            "unit": "ns",
            "range": "± 928.1361869947725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48960,
            "unit": "ns",
            "range": "± 2855.1864891177333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43330.769230769234,
            "unit": "ns",
            "range": "± 1038.4678062488913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48327.36842105263,
            "unit": "ns",
            "range": "± 8589.60829495119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2529.1666666666665,
            "unit": "ns",
            "range": "± 468.57379729213625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9588.541666666666,
            "unit": "ns",
            "range": "± 1244.85211902684"
          }
        ]
      }
    ]
  }
}