window.BENCHMARK_DATA = {
  "lastUpdate": 1721007848146,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b596b218868c91141683cb0607890e04dc346ea",
          "message": "Merge pull request #3876 from planetarium/release/5.1.1\n\n🚀 Release 5.1.1",
          "timestamp": "2024-07-15T10:03:11+09:00",
          "tree_id": "e043f8efbe096b33ba463bb49704cfd97c2b42f8",
          "url": "https://github.com/planetarium/libplanet/commit/0b596b218868c91141683cb0607890e04dc346ea"
        },
        "date": 1721007794650,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10655297.785714285,
            "unit": "ns",
            "range": "± 73300.29751558739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26777732.285714287,
            "unit": "ns",
            "range": "± 290023.4660117187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67319153.3076923,
            "unit": "ns",
            "range": "± 78377.22911171822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135635835.57142857,
            "unit": "ns",
            "range": "± 349681.7308827941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273259493.73333335,
            "unit": "ns",
            "range": "± 432104.30041690276"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14333.70588235294,
            "unit": "ns",
            "range": "± 292.4337028938957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109690.35593220338,
            "unit": "ns",
            "range": "± 4488.693123542184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105922.38181818182,
            "unit": "ns",
            "range": "± 4348.872299509504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91875.25,
            "unit": "ns",
            "range": "± 2372.547837058388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3065375.3333333335,
            "unit": "ns",
            "range": "± 156634.72801730872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780354.0729166665,
            "unit": "ns",
            "range": "± 169281.81717213432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5368.5842105263155,
            "unit": "ns",
            "range": "± 701.5522404102463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26635.444444444445,
            "unit": "ns",
            "range": "± 1390.743110714556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22506.40322580645,
            "unit": "ns",
            "range": "± 1023.43977150151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31305.46875,
            "unit": "ns",
            "range": "± 5878.502019988864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1107.0425531914893,
            "unit": "ns",
            "range": "± 251.00304864248108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4673.440476190476,
            "unit": "ns",
            "range": "± 278.9259240605353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675019.5230769231,
            "unit": "ns",
            "range": "± 27426.771339849052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280903.0666666667,
            "unit": "ns",
            "range": "± 43314.23499759949"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1077278.7878787878,
            "unit": "ns",
            "range": "± 62861.22874435771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9332057.97,
            "unit": "ns",
            "range": "± 1199429.3705242889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2168246.1333333333,
            "unit": "ns",
            "range": "± 64826.30758271826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286844.6842105263,
            "unit": "ns",
            "range": "± 94387.80015468819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583372.1764705884,
            "unit": "ns",
            "range": "± 44693.856692272726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2263959.9615384615,
            "unit": "ns",
            "range": "± 21279.96147245645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2919849.28125,
            "unit": "ns",
            "range": "± 121361.36796576915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034088.833984375,
            "unit": "ns",
            "range": "± 50264.964044245935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924888.6361979167,
            "unit": "ns",
            "range": "± 5337.328323344987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609824.562890625,
            "unit": "ns",
            "range": "± 4756.328816654341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1626049.9331752232,
            "unit": "ns",
            "range": "± 7534.934996156485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460410.4279785156,
            "unit": "ns",
            "range": "± 753.4719568048689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423891.0821614583,
            "unit": "ns",
            "range": "± 1212.6384682948317"
          }
        ]
      }
    ]
  }
}