window.BENCHMARK_DATA = {
  "lastUpdate": 1721097620579,
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
      }
    ]
  }
}