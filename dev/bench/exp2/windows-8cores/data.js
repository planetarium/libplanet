window.BENCHMARK_DATA = {
  "lastUpdate": 1756280309031,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "7293ec43c8e30269ccf6a8c37839c3d65ef99236",
          "message": "Paralleize kv set",
          "timestamp": "2025-08-27T16:13:55+09:00",
          "tree_id": "b772c224f94a3cd60abc9dd444b354a2b1089483",
          "url": "https://github.com/planetarium/libplanet/commit/7293ec43c8e30269ccf6a8c37839c3d65ef99236"
        },
        "date": 1756280038997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948882.4742268041,
            "unit": "ns",
            "range": "± 72892.04490533312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1740128.2608695652,
            "unit": "ns",
            "range": "± 65494.253057614755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1479167.0212765958,
            "unit": "ns",
            "range": "± 87116.6680202232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6642869.696969697,
            "unit": "ns",
            "range": "± 179329.31732717407"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31711.956521739132,
            "unit": "ns",
            "range": "± 3254.104505076167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10047093.333333334,
            "unit": "ns",
            "range": "± 101314.54885416906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24879346.666666668,
            "unit": "ns",
            "range": "± 162993.6364518858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65028980,
            "unit": "ns",
            "range": "± 485131.732036332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126304364.28571428,
            "unit": "ns",
            "range": "± 895069.0266524295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246968942.85714287,
            "unit": "ns",
            "range": "± 1326870.6769714197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3435983.8448660714,
            "unit": "ns",
            "range": "± 17124.557060399875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059191.0574776786,
            "unit": "ns",
            "range": "± 3051.797827313211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747963.7765066965,
            "unit": "ns",
            "range": "± 1128.6864458055766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984563.28125,
            "unit": "ns",
            "range": "± 10508.511759792247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631750.56640625,
            "unit": "ns",
            "range": "± 850.934256654589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562717.1424278846,
            "unit": "ns",
            "range": "± 485.5091519018388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2286781.8181818184,
            "unit": "ns",
            "range": "± 64514.24481531896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2362950,
            "unit": "ns",
            "range": "± 39061.81984023235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2851550,
            "unit": "ns",
            "range": "± 49465.708483650305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2500836.8421052634,
            "unit": "ns",
            "range": "± 45166.47245378068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3085226.6666666665,
            "unit": "ns",
            "range": "± 49749.60827795054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103842.46575342465,
            "unit": "ns",
            "range": "± 5166.261215494968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177196.42857142858,
            "unit": "ns",
            "range": "± 7536.431860954173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152460,
            "unit": "ns",
            "range": "± 5365.884638036672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720321.4285714286,
            "unit": "ns",
            "range": "± 26520.44722245688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2578350,
            "unit": "ns",
            "range": "± 31598.661120613713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14039.130434782608,
            "unit": "ns",
            "range": "± 1964.5180334318468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63677.551020408166,
            "unit": "ns",
            "range": "± 9846.581180845375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55717.74193548387,
            "unit": "ns",
            "range": "± 6134.917193911999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67267.70833333333,
            "unit": "ns",
            "range": "± 12991.223716045803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2984.375,
            "unit": "ns",
            "range": "± 592.6440531079431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12821.739130434782,
            "unit": "ns",
            "range": "± 1874.5153856928557"
          }
        ]
      }
    ]
  }
}