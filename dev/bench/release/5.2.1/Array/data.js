window.BENCHMARK_DATA = {
  "lastUpdate": 1722386522819,
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
          "id": "5a1ee9e64a733b49b91522d397e23a07fbab8a75",
          "message": "Release 5.2.1",
          "timestamp": "2024-07-31T09:27:46+09:00",
          "tree_id": "26877b6a16528547babb7bfadd8a08aca9060b6f",
          "url": "https://github.com/planetarium/libplanet/commit/5a1ee9e64a733b49b91522d397e23a07fbab8a75"
        },
        "date": 1722386471213,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10868781.538461538,
            "unit": "ns",
            "range": "± 141107.9183123183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26511786.14285714,
            "unit": "ns",
            "range": "± 208643.8646497376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67093920,
            "unit": "ns",
            "range": "± 103701.22506063717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135566583.35714287,
            "unit": "ns",
            "range": "± 126641.4906436258"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273894016.2307692,
            "unit": "ns",
            "range": "± 233533.3436832072"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13951.833333333334,
            "unit": "ns",
            "range": "± 292.89894864551337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110850,
            "unit": "ns",
            "range": "± 3047.854111912183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108017.4,
            "unit": "ns",
            "range": "± 3629.151011829994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93479.21428571429,
            "unit": "ns",
            "range": "± 1568.4700741889765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3042435.371794872,
            "unit": "ns",
            "range": "± 156424.92091181976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2718235.36,
            "unit": "ns",
            "range": "± 173504.35679142617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5005,
            "unit": "ns",
            "range": "± 710.4455429976441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27139.8,
            "unit": "ns",
            "range": "± 2083.719131030206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22204.10714285714,
            "unit": "ns",
            "range": "± 579.2961463122944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30349.65263157895,
            "unit": "ns",
            "range": "± 5836.1173204495735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1211.3655913978494,
            "unit": "ns",
            "range": "± 200.201517224099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4813.738636363636,
            "unit": "ns",
            "range": "± 555.6968183212605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669937.859375,
            "unit": "ns",
            "range": "± 26083.15672471303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273919.4411764706,
            "unit": "ns",
            "range": "± 37985.47131525275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1081929.6529411764,
            "unit": "ns",
            "range": "± 57817.98189258332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9659442.45,
            "unit": "ns",
            "range": "± 1469961.4321818887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189326.8048780486,
            "unit": "ns",
            "range": "± 78604.2132809112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303295.440677966,
            "unit": "ns",
            "range": "± 101796.93591287869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585163.6428571427,
            "unit": "ns",
            "range": "± 35498.660388282784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2295621.285714286,
            "unit": "ns",
            "range": "± 54058.57108650103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3093645.7216494847,
            "unit": "ns",
            "range": "± 232683.01968221087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3027808.72421875,
            "unit": "ns",
            "range": "± 36460.573649634876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 929303.2739908855,
            "unit": "ns",
            "range": "± 4513.525269770252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616793.0959635417,
            "unit": "ns",
            "range": "± 5660.908721474427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1662697.0103236607,
            "unit": "ns",
            "range": "± 12375.534953355635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464737.6785016741,
            "unit": "ns",
            "range": "± 889.8774812900866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419457.18681640626,
            "unit": "ns",
            "range": "± 1471.6597671057787"
          }
        ]
      }
    ]
  }
}