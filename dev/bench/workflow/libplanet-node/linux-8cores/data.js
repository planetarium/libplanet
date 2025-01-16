window.BENCHMARK_DATA = {
  "lastUpdate": 1736995449316,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7696284b6c1d71e81f6ec55c381a9001255f9da4",
          "message": "docs: update docs and workflows required for Libplanet.Node",
          "timestamp": "2025-01-16T11:31:02+09:00",
          "tree_id": "37c19a5175dffd6e72760d54aed179d03f9dab44",
          "url": "https://github.com/planetarium/libplanet/commit/7696284b6c1d71e81f6ec55c381a9001255f9da4"
        },
        "date": 1736995304873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11428362.266666668,
            "unit": "ns",
            "range": "± 202942.0765403154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22294574.906976745,
            "unit": "ns",
            "range": "± 272424.5655892055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58363590.733333334,
            "unit": "ns",
            "range": "± 849911.0964080273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109038194.5,
            "unit": "ns",
            "range": "± 1224520.086211737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220965119.57142857,
            "unit": "ns",
            "range": "± 1330340.5200024608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126378.08823529411,
            "unit": "ns",
            "range": "± 21861.115229521834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224588.04255319148,
            "unit": "ns",
            "range": "± 90284.09773465984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156439.4193548387,
            "unit": "ns",
            "range": "± 9046.162335875508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2604799.25,
            "unit": "ns",
            "range": "± 39985.821057708585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2478871.4545454546,
            "unit": "ns",
            "range": "± 60421.512443418826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15619.035294117648,
            "unit": "ns",
            "range": "± 3960.7377993760406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63154.96590909091,
            "unit": "ns",
            "range": "± 9646.03357999601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49870.573033707864,
            "unit": "ns",
            "range": "± 4605.999079480331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82509.59793814433,
            "unit": "ns",
            "range": "± 27706.060184574162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4499.163265306122,
            "unit": "ns",
            "range": "± 1471.2679060661098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15315.747191011236,
            "unit": "ns",
            "range": "± 4052.249833232092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3880133.7472098214,
            "unit": "ns",
            "range": "± 27156.564707810787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919239.301171875,
            "unit": "ns",
            "range": "± 5014.231931155864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719519.2261067708,
            "unit": "ns",
            "range": "± 4896.797507539466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1774243.8479166667,
            "unit": "ns",
            "range": "± 11809.978473154077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462449.19991629466,
            "unit": "ns",
            "range": "± 1596.629651570015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 440037.9556315104,
            "unit": "ns",
            "range": "± 2091.194695364971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3009721.2333333334,
            "unit": "ns",
            "range": "± 44401.279790864886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3236585.8666666667,
            "unit": "ns",
            "range": "± 52906.58335468911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5950751.55882353,
            "unit": "ns",
            "range": "± 118742.26703372654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2255088.234567901,
            "unit": "ns",
            "range": "± 117582.13965025381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2802696.846153846,
            "unit": "ns",
            "range": "± 83572.69475482834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2342876.6,
            "unit": "ns",
            "range": "± 1126910.1518844133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 7082289.1875,
            "unit": "ns",
            "range": "± 135283.74436332882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1957715.1860465116,
            "unit": "ns",
            "range": "± 579707.9148004929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6885744.423728813,
            "unit": "ns",
            "range": "± 216646.24357982387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22831.475308641977,
            "unit": "ns",
            "range": "± 1263.6385259965432"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "5dedafdca6b8f0466605f382bacbc60d27347c31",
          "message": "docs: update docs and workflows required for Libplanet.Node",
          "timestamp": "2025-01-16T11:33:18+09:00",
          "tree_id": "f7764111adeef0737a3565632b4401b3d6cb1711",
          "url": "https://github.com/planetarium/libplanet/commit/5dedafdca6b8f0466605f382bacbc60d27347c31"
        },
        "date": 1736995422479,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11366510.142857144,
            "unit": "ns",
            "range": "± 90843.29059417664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23475421.704918034,
            "unit": "ns",
            "range": "± 670518.356541672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56487956.884615384,
            "unit": "ns",
            "range": "± 740191.2878031977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110382757.28571428,
            "unit": "ns",
            "range": "± 446904.44049245433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222382558.4,
            "unit": "ns",
            "range": "± 2872343.615123615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111532.01111111112,
            "unit": "ns",
            "range": "± 19085.14649839093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172173.55844155845,
            "unit": "ns",
            "range": "± 23219.640837408537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147625.1348314607,
            "unit": "ns",
            "range": "± 8076.6584198920955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2592030.4375,
            "unit": "ns",
            "range": "± 50389.432958334626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506755.0714285714,
            "unit": "ns",
            "range": "± 34259.50273217701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15077.068965517241,
            "unit": "ns",
            "range": "± 5011.606874077887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61988.86781609195,
            "unit": "ns",
            "range": "± 11345.564291638224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46092.67924528302,
            "unit": "ns",
            "range": "± 1666.6137568040924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72615.793814433,
            "unit": "ns",
            "range": "± 16601.24169988131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4201.0360824742265,
            "unit": "ns",
            "range": "± 949.3498988546457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13101.57142857143,
            "unit": "ns",
            "range": "± 3364.809906321583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3792154.9760416667,
            "unit": "ns",
            "range": "± 29892.87399419604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 985634.9,
            "unit": "ns",
            "range": "± 5526.540020798296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719762.0561848958,
            "unit": "ns",
            "range": "± 3276.8705128668066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1728330.0078125,
            "unit": "ns",
            "range": "± 5910.928073584291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463308.3485576923,
            "unit": "ns",
            "range": "± 899.4257111773784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 438593.5488630022,
            "unit": "ns",
            "range": "± 2025.1628055081455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3002869.1666666665,
            "unit": "ns",
            "range": "± 63067.94065436379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516786.36,
            "unit": "ns",
            "range": "± 480535.85291132284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2612354.619047619,
            "unit": "ns",
            "range": "± 524203.1180319393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2369318.22,
            "unit": "ns",
            "range": "± 281073.1602694396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2803039.893939394,
            "unit": "ns",
            "range": "± 87259.10386706772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3387789.4,
            "unit": "ns",
            "range": "± 61851.76200954759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1866031.6511627906,
            "unit": "ns",
            "range": "± 258048.81530884892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3396390.58,
            "unit": "ns",
            "range": "± 1569229.830075561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6880316.654545454,
            "unit": "ns",
            "range": "± 230030.7108620755"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22894.494505494506,
            "unit": "ns",
            "range": "± 1325.5005207562276"
          }
        ]
      }
    ]
  }
}