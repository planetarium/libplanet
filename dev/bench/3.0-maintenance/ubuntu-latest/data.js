window.BENCHMARK_DATA = {
  "lastUpdate": 1689753098205,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753071809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292240.29411764705,
            "unit": "ns",
            "range": "± 9275.452538267948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281870.3793103448,
            "unit": "ns",
            "range": "± 7231.093191478199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243206.66666666666,
            "unit": "ns",
            "range": "± 8024.45723146738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4575911.666666667,
            "unit": "ns",
            "range": "± 50764.77140226093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174435.066666667,
            "unit": "ns",
            "range": "± 72202.91866327316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21913.290322580644,
            "unit": "ns",
            "range": "± 1585.4549791411896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96389.94680851063,
            "unit": "ns",
            "range": "± 5486.953516261401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77892.94736842105,
            "unit": "ns",
            "range": "± 4593.80998265872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102107.59302325582,
            "unit": "ns",
            "range": "± 9193.412173786577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5749.6082474226805,
            "unit": "ns",
            "range": "± 917.9091793842886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21284.225806451614,
            "unit": "ns",
            "range": "± 2142.2532130660948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480078.7777777778,
            "unit": "ns",
            "range": "± 77415.42627894043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815450.54,
            "unit": "ns",
            "range": "± 113668.8550485549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1907914.530612245,
            "unit": "ns",
            "range": "± 114030.6329064947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5083599.666666667,
            "unit": "ns",
            "range": "± 197819.5553475099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6181964.544270833,
            "unit": "ns",
            "range": "± 22530.23044937188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1944319.986607143,
            "unit": "ns",
            "range": "± 3554.3806864014746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393108.66171875,
            "unit": "ns",
            "range": "± 3291.2872353297603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685214.9596354165,
            "unit": "ns",
            "range": "± 2685.187832567481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842487.0293666294,
            "unit": "ns",
            "range": "± 464.0773280872932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775153.4371744791,
            "unit": "ns",
            "range": "± 340.5076726302806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3513533.6470588236,
            "unit": "ns",
            "range": "± 112901.56384586245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710872.590909091,
            "unit": "ns",
            "range": "± 86281.1075246593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460396.882352941,
            "unit": "ns",
            "range": "± 143185.52933948376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323806.1,
            "unit": "ns",
            "range": "± 168904.05494827346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6625368.322580645,
            "unit": "ns",
            "range": "± 201553.65850254154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8252423.5625,
            "unit": "ns",
            "range": "± 135612.9977393852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22350846.133333333,
            "unit": "ns",
            "range": "± 295745.7934877439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57161501.35714286,
            "unit": "ns",
            "range": "± 539397.934541068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110421930.53333333,
            "unit": "ns",
            "range": "± 1600170.212933963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218473073.0625,
            "unit": "ns",
            "range": "± 4123756.474598251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50407.114583333336,
            "unit": "ns",
            "range": "± 3190.868919341042"
          }
        ]
      }
    ]
  }
}