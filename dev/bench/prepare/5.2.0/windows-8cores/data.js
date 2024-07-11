window.BENCHMARK_DATA = {
  "lastUpdate": 1720673961821,
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
          "id": "7dccf1d6f78638504d5ef461ae43954c29cc7d36",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T13:43:50+09:00",
          "tree_id": "5357d8d956b14e1ac4fcbfb0faeeebf54662bcf0",
          "url": "https://github.com/planetarium/libplanet/commit/7dccf1d6f78638504d5ef461ae43954c29cc7d36"
        },
        "date": 1720673701494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058713.4020618557,
            "unit": "ns",
            "range": "± 112769.35036176161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1830202.0833333333,
            "unit": "ns",
            "range": "± 68046.78143492521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651598.969072165,
            "unit": "ns",
            "range": "± 134072.0456934484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7514385.714285715,
            "unit": "ns",
            "range": "± 420201.3743621895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33684.69387755102,
            "unit": "ns",
            "range": "± 4613.166992331558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10154235.714285715,
            "unit": "ns",
            "range": "± 87061.55962785853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23954280,
            "unit": "ns",
            "range": "± 181359.63954844765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59884093.333333336,
            "unit": "ns",
            "range": "± 581567.8985868001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118263657.14285715,
            "unit": "ns",
            "range": "± 1152798.6946252456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243225973.33333334,
            "unit": "ns",
            "range": "± 2977304.483797063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3357051.8229166665,
            "unit": "ns",
            "range": "± 4693.808848961689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1074922.9427083333,
            "unit": "ns",
            "range": "± 2039.2032399638172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739157.3102678572,
            "unit": "ns",
            "range": "± 1133.8805047753597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942007.212611607,
            "unit": "ns",
            "range": "± 2732.6774869790197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624050.29296875,
            "unit": "ns",
            "range": "± 1087.3719539331858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552027.48046875,
            "unit": "ns",
            "range": "± 765.3360692903052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2212921.7391304346,
            "unit": "ns",
            "range": "± 52497.35020604494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302946.6666666665,
            "unit": "ns",
            "range": "± 37517.3458295658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2785771.794871795,
            "unit": "ns",
            "range": "± 90605.1263471216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2298208.5714285714,
            "unit": "ns",
            "range": "± 72160.63930943391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3043212.5,
            "unit": "ns",
            "range": "± 57204.80020650948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185198.11320754717,
            "unit": "ns",
            "range": "± 7502.960712177297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174360,
            "unit": "ns",
            "range": "± 7853.299869518527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146658.82352941178,
            "unit": "ns",
            "range": "± 2813.3740471916926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796440,
            "unit": "ns",
            "range": "± 31307.570969335837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552750,
            "unit": "ns",
            "range": "± 31001.581845497447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12068.131868131868,
            "unit": "ns",
            "range": "± 1451.5033678438463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56167.36842105263,
            "unit": "ns",
            "range": "± 4991.747276601676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47994.565217391304,
            "unit": "ns",
            "range": "± 2797.540683318266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58130,
            "unit": "ns",
            "range": "± 11213.639868531698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2919.148936170213,
            "unit": "ns",
            "range": "± 618.5791203371933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11004.255319148937,
            "unit": "ns",
            "range": "± 1487.12502411095"
          }
        ]
      }
    ]
  }
}