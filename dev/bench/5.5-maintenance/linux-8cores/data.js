window.BENCHMARK_DATA = {
  "lastUpdate": 1736910670893,
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
          "id": "79e20a5451de75539aeea33f19e0b51f59f33164",
          "message": "prepare: 5.5.1",
          "timestamp": "2025-01-15T12:02:42+09:00",
          "tree_id": "860edf44725926acf94cf81d1be19f20d09ce560",
          "url": "https://github.com/planetarium/libplanet/commit/79e20a5451de75539aeea33f19e0b51f59f33164"
        },
        "date": 1736910644264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10830616.733333332,
            "unit": "ns",
            "range": "± 78670.65140596012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28078417.214285713,
            "unit": "ns",
            "range": "± 103210.00294334814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71364233.53333333,
            "unit": "ns",
            "range": "± 347842.6434530555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144181665.86666667,
            "unit": "ns",
            "range": "± 1001383.2334105136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292009790.46666664,
            "unit": "ns",
            "range": "± 1674362.7479520536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109138.70289855072,
            "unit": "ns",
            "range": "± 5104.645702920469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195117.25,
            "unit": "ns",
            "range": "± 5875.496701034813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164392.5,
            "unit": "ns",
            "range": "± 1782.5939475433495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2837696.230769231,
            "unit": "ns",
            "range": "± 18133.25216811115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2844284.6333333333,
            "unit": "ns",
            "range": "± 45705.297046664185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12826.189473684211,
            "unit": "ns",
            "range": "± 791.2213867602047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59593.1724137931,
            "unit": "ns",
            "range": "± 3093.115240098965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50118.46153846154,
            "unit": "ns",
            "range": "± 708.2775603985365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49645.48947368421,
            "unit": "ns",
            "range": "± 7235.78243867849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2552.7291666666665,
            "unit": "ns",
            "range": "± 277.1990156877286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11996.261904761905,
            "unit": "ns",
            "range": "± 656.6217964639225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3750475.1553485575,
            "unit": "ns",
            "range": "± 6661.354116771386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204292.0299479167,
            "unit": "ns",
            "range": "± 2574.382076402296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758890.7190755209,
            "unit": "ns",
            "range": "± 1078.1065883856345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968858.33515625,
            "unit": "ns",
            "range": "± 1996.135654926233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617862.8459821428,
            "unit": "ns",
            "range": "± 702.1534347710392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574739.0728236607,
            "unit": "ns",
            "range": "± 756.8379261605111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420985.6666666665,
            "unit": "ns",
            "range": "± 66494.04838549318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528826.066666667,
            "unit": "ns",
            "range": "± 45275.9063622564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3021000.3076923075,
            "unit": "ns",
            "range": "± 21024.363194417314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2575920.3333333335,
            "unit": "ns",
            "range": "± 34368.47346181145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3217258.25,
            "unit": "ns",
            "range": "± 62497.792434079885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006875.7717391305,
            "unit": "ns",
            "range": "± 75883.36163519125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1975644.851851852,
            "unit": "ns",
            "range": "± 82034.22100618038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542886.3205128205,
            "unit": "ns",
            "range": "± 77107.28638275064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7567902.518518519,
            "unit": "ns",
            "range": "± 205246.96751275603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30649.76923076923,
            "unit": "ns",
            "range": "± 832.3613305622653"
          }
        ]
      }
    ]
  }
}