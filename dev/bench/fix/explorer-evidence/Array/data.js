window.BENCHMARK_DATA = {
  "lastUpdate": 1721191269106,
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
          "id": "ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37",
          "message": "WIP",
          "timestamp": "2024-07-17T13:32:57+09:00",
          "tree_id": "020e5cff39f83f49989c56e5864a833fff8a016b",
          "url": "https://github.com/planetarium/libplanet/commit/ab3745fab1c78d8098cbecc1c3a3fdb39c63ac37"
        },
        "date": 1721191256657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10826422.142857144,
            "unit": "ns",
            "range": "± 138534.17237127238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26569696.785714287,
            "unit": "ns",
            "range": "± 178482.96161050847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67279358.66666667,
            "unit": "ns",
            "range": "± 122748.68326070996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135124050.2142857,
            "unit": "ns",
            "range": "± 231048.3378673351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273024541.4285714,
            "unit": "ns",
            "range": "± 484188.9272345382"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14250.40909090909,
            "unit": "ns",
            "range": "± 351.1810900499314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109564.34042553192,
            "unit": "ns",
            "range": "± 3949.6021609039576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108606.85185185185,
            "unit": "ns",
            "range": "± 4552.6189452508415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92655.14634146342,
            "unit": "ns",
            "range": "± 2981.3093730857217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3006767.4105263157,
            "unit": "ns",
            "range": "± 172214.0868605797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2596071.57,
            "unit": "ns",
            "range": "± 193728.53059086058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4921.076086956522,
            "unit": "ns",
            "range": "± 706.7619589894675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27572.369565217392,
            "unit": "ns",
            "range": "± 1992.1944977500925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22463.048387096773,
            "unit": "ns",
            "range": "± 1423.9982559537518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29190.541666666668,
            "unit": "ns",
            "range": "± 5374.777359240428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1124.8387096774193,
            "unit": "ns",
            "range": "± 218.63868796847882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4834.566666666667,
            "unit": "ns",
            "range": "± 450.576635539818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 700372.6195652174,
            "unit": "ns",
            "range": "± 56672.761369931846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273440.9594594594,
            "unit": "ns",
            "range": "± 37230.550133663826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1084819.335443038,
            "unit": "ns",
            "range": "± 55967.326078207174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9626483.7,
            "unit": "ns",
            "range": "± 1406997.1851377552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166552.224489796,
            "unit": "ns",
            "range": "± 77199.34720855948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277641.4615384615,
            "unit": "ns",
            "range": "± 61515.94251979289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2547556.785714286,
            "unit": "ns",
            "range": "± 22618.66246871433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349572.3720930233,
            "unit": "ns",
            "range": "± 86819.92022298175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3109168.2680412373,
            "unit": "ns",
            "range": "± 268858.4006632067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3030966.891036184,
            "unit": "ns",
            "range": "± 65586.30135007204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919850.1213030134,
            "unit": "ns",
            "range": "± 4267.665617349056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614003.281640625,
            "unit": "ns",
            "range": "± 5324.447633816515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1636749.458170573,
            "unit": "ns",
            "range": "± 7915.312783877732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464182.767578125,
            "unit": "ns",
            "range": "± 899.0690562312959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420720.57962472097,
            "unit": "ns",
            "range": "± 1085.1589772172815"
          }
        ]
      }
    ]
  }
}