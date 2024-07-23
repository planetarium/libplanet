window.BENCHMARK_DATA = {
  "lastUpdate": 1721724089582,
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
          "id": "29be97f6977e2f8c58397246c85b77a815d1c924",
          "message": "Merge pull request #3892 from planetarium/release/5.2.0\n\n🚀 Release 5.2.0",
          "timestamp": "2024-07-23T17:26:04+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/29be97f6977e2f8c58397246c85b77a815d1c924"
        },
        "date": 1721723841556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006011.6161616162,
            "unit": "ns",
            "range": "± 109697.11519942379"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1759688.6363636365,
            "unit": "ns",
            "range": "± 60644.48139508366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519453.0120481928,
            "unit": "ns",
            "range": "± 66405.71224575269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6750495,
            "unit": "ns",
            "range": "± 154998.39549254422"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30069.23076923077,
            "unit": "ns",
            "range": "± 1061.5663318526435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9453642.857142856,
            "unit": "ns",
            "range": "± 40914.01329027114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23546128.57142857,
            "unit": "ns",
            "range": "± 252769.54365152895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59096353.333333336,
            "unit": "ns",
            "range": "± 410481.1407998922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119364057.14285715,
            "unit": "ns",
            "range": "± 1748038.9978550186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234927076.92307693,
            "unit": "ns",
            "range": "± 626435.7803662535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3263300.4464285714,
            "unit": "ns",
            "range": "± 4630.262963646808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056924.7526041667,
            "unit": "ns",
            "range": "± 1390.635591404373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737892.79296875,
            "unit": "ns",
            "range": "± 1536.3655256541017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963059.654017857,
            "unit": "ns",
            "range": "± 3805.4231206592835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620787.34375,
            "unit": "ns",
            "range": "± 1077.0348492352905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555530.859375,
            "unit": "ns",
            "range": "± 661.131924340641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170746.6666666665,
            "unit": "ns",
            "range": "± 33602.22923443933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2192918.867924528,
            "unit": "ns",
            "range": "± 88191.5312012261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727804.761904762,
            "unit": "ns",
            "range": "± 62634.682694099094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2229836.6666666665,
            "unit": "ns",
            "range": "± 29027.15149320587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2866085.714285714,
            "unit": "ns",
            "range": "± 49567.18606160667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173493.33333333334,
            "unit": "ns",
            "range": "± 7771.282787171761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164541.50943396226,
            "unit": "ns",
            "range": "± 6661.382218609685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145213.88888888888,
            "unit": "ns",
            "range": "± 4813.205215284763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2692380,
            "unit": "ns",
            "range": "± 23790.67044032177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520286.6666666665,
            "unit": "ns",
            "range": "± 31592.197650384383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10350,
            "unit": "ns",
            "range": "± 766.5417189537382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51759.13978494624,
            "unit": "ns",
            "range": "± 3790.3262610269308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43507.692307692305,
            "unit": "ns",
            "range": "± 842.8157933608396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53018.47826086957,
            "unit": "ns",
            "range": "± 8104.034124276273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2611.5789473684213,
            "unit": "ns",
            "range": "± 395.6850127807543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9883.695652173914,
            "unit": "ns",
            "range": "± 991.6438981006385"
          }
        ]
      }
    ]
  }
}