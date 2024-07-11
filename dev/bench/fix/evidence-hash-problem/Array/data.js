window.BENCHMARK_DATA = {
  "lastUpdate": 1720688205916,
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
          "id": "64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e",
          "message": "fix: Fix an issue with the evidence hash changing depending on the version.",
          "timestamp": "2024-07-11T17:10:54+09:00",
          "tree_id": "d2bb4fcb759803a572b4d3bbb8e669c9c9e9e90f",
          "url": "https://github.com/planetarium/libplanet/commit/64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e"
        },
        "date": 1720685929060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10624604.583333334,
            "unit": "ns",
            "range": "± 33012.607939882975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26662562.333333332,
            "unit": "ns",
            "range": "± 178856.16351889295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67261011.66666667,
            "unit": "ns",
            "range": "± 129005.96306132888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135261603.7857143,
            "unit": "ns",
            "range": "± 227468.0482533345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275447908.6666667,
            "unit": "ns",
            "range": "± 2784442.725636385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14208.736842105263,
            "unit": "ns",
            "range": "± 313.3059991810036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109196.4827586207,
            "unit": "ns",
            "range": "± 2175.877107557345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106213.296875,
            "unit": "ns",
            "range": "± 4880.7193936299145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89909.38888888889,
            "unit": "ns",
            "range": "± 1870.4113149059233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026156.21,
            "unit": "ns",
            "range": "± 192947.71130491272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825355.5789473685,
            "unit": "ns",
            "range": "± 162025.09091978782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4771.888888888889,
            "unit": "ns",
            "range": "± 495.1120051341565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28406.934065934067,
            "unit": "ns",
            "range": "± 2298.1328740339422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22627.804347826088,
            "unit": "ns",
            "range": "± 1272.169387428639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28685.58510638298,
            "unit": "ns",
            "range": "± 5068.05220248249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1228.8387096774193,
            "unit": "ns",
            "range": "± 242.96234680199802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5318.3917525773195,
            "unit": "ns",
            "range": "± 1127.0659138213425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678188.947368421,
            "unit": "ns",
            "range": "± 28767.797895051444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280829.941860465,
            "unit": "ns",
            "range": "± 46482.47451884794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1086408.076923077,
            "unit": "ns",
            "range": "± 59186.97609726705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9651176.72,
            "unit": "ns",
            "range": "± 1649627.37237216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171684.1923076925,
            "unit": "ns",
            "range": "± 31329.132417992405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299845.28,
            "unit": "ns",
            "range": "± 91956.97190046916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2589610.5,
            "unit": "ns",
            "range": "± 37503.61421694359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2284233.25,
            "unit": "ns",
            "range": "± 32896.38283825304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2898873.9032258065,
            "unit": "ns",
            "range": "± 88433.43921102652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3047024.978125,
            "unit": "ns",
            "range": "± 32122.231680784163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 931273.9584635417,
            "unit": "ns",
            "range": "± 3488.2597684751254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612309.8149088542,
            "unit": "ns",
            "range": "± 5169.377295954706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632359.5059895834,
            "unit": "ns",
            "range": "± 10811.776102260246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469304.03958565847,
            "unit": "ns",
            "range": "± 646.8768109629294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420293.90021623886,
            "unit": "ns",
            "range": "± 462.7159655956168"
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
          "id": "6e1fe7348b6ded380e6493d0ba9016a96cb71a91",
          "message": "fix: Fix an issue with the evidence hash changing depending on the version.",
          "timestamp": "2024-07-11T17:48:22+09:00",
          "tree_id": "adb2d6ed113ff6e484048258a03174ce20c11253",
          "url": "https://github.com/planetarium/libplanet/commit/6e1fe7348b6ded380e6493d0ba9016a96cb71a91"
        },
        "date": 1720688193570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10973892.583333334,
            "unit": "ns",
            "range": "± 48032.45412210815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26459178.14285714,
            "unit": "ns",
            "range": "± 46832.73402202803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67372316.93333334,
            "unit": "ns",
            "range": "± 125733.15545543646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135737015.23076922,
            "unit": "ns",
            "range": "± 136018.07523276322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274369662.53846157,
            "unit": "ns",
            "range": "± 164539.03146346734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14614.838709677419,
            "unit": "ns",
            "range": "± 443.67789342977136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110318.6551724138,
            "unit": "ns",
            "range": "± 4727.157001581855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105036.5925925926,
            "unit": "ns",
            "range": "± 4405.045882520852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91799.7,
            "unit": "ns",
            "range": "± 2732.179894491223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3030589.5764705883,
            "unit": "ns",
            "range": "± 163402.20666315962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2734514.12,
            "unit": "ns",
            "range": "± 187688.62548834083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4884.698924731183,
            "unit": "ns",
            "range": "± 517.4477664239088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26474.032967032967,
            "unit": "ns",
            "range": "± 1560.2528174807615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23623.58510638298,
            "unit": "ns",
            "range": "± 1997.3559372307302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28617.473684210527,
            "unit": "ns",
            "range": "± 5388.33318845745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1204.1842105263158,
            "unit": "ns",
            "range": "± 203.50248381347365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4864.347368421053,
            "unit": "ns",
            "range": "± 715.3910516458226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676343.734939759,
            "unit": "ns",
            "range": "± 33180.118449443944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272181.3142857142,
            "unit": "ns",
            "range": "± 41196.54037357094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1067979.875,
            "unit": "ns",
            "range": "± 55179.32516422355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9512067,
            "unit": "ns",
            "range": "± 1257094.60709443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167271.1346153845,
            "unit": "ns",
            "range": "± 89151.70428578444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283803.590909091,
            "unit": "ns",
            "range": "± 80806.06284481328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2581182.3076923075,
            "unit": "ns",
            "range": "± 27957.23830955833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2267301.6153846155,
            "unit": "ns",
            "range": "± 27898.558775614383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3133769.16,
            "unit": "ns",
            "range": "± 291120.06520278036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3026228.6080228365,
            "unit": "ns",
            "range": "± 19270.23577399223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922787.2360026041,
            "unit": "ns",
            "range": "± 8443.515048836693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618276.8140625,
            "unit": "ns",
            "range": "± 4264.186570148896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632596.6950520833,
            "unit": "ns",
            "range": "± 16950.172611921193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460239.4629882813,
            "unit": "ns",
            "range": "± 705.3967104927336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426033.3294270833,
            "unit": "ns",
            "range": "± 958.4251268889742"
          }
        ]
      }
    ]
  }
}