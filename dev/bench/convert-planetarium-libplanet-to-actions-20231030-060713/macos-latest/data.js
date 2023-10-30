window.BENCHMARK_DATA = {
  "lastUpdate": 1698646962803,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f795413e96b97bbafadb36021d87a6c60f43a8a4",
          "message": "Add composite action netcore_test_base",
          "timestamp": "2023-10-30T15:07:18+09:00",
          "tree_id": "7248fb19f55fa82e2171fa9a271971459c665e42",
          "url": "https://github.com/planetarium/libplanet/commit/f795413e96b97bbafadb36021d87a6c60f43a8a4"
        },
        "date": 1698646897492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8170017.666666667,
            "unit": "ns",
            "range": "± 212129.54386815184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20245178.893939395,
            "unit": "ns",
            "range": "± 910563.1187810673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50419250.233333334,
            "unit": "ns",
            "range": "± 2152546.440962274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103034946.86206897,
            "unit": "ns",
            "range": "± 4434971.93189309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205282699.7142857,
            "unit": "ns",
            "range": "± 2997407.1690931143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36891.0632183908,
            "unit": "ns",
            "range": "± 4182.87542609857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268176.4789473684,
            "unit": "ns",
            "range": "± 29216.784557736144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266803.1157894737,
            "unit": "ns",
            "range": "± 29340.486135315867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249859.0344827586,
            "unit": "ns",
            "range": "± 14149.747029909231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972813.2666666666,
            "unit": "ns",
            "range": "± 115681.05572492557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3596964.4615384615,
            "unit": "ns",
            "range": "± 213948.5807606485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15750.22340425532,
            "unit": "ns",
            "range": "± 2936.6366153891427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64463.72340425532,
            "unit": "ns",
            "range": "± 5730.87784077605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61906.12790697674,
            "unit": "ns",
            "range": "± 4798.222026215451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67314.33720930232,
            "unit": "ns",
            "range": "± 9585.59406224406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4579.032608695652,
            "unit": "ns",
            "range": "± 989.7827761584523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14471.96590909091,
            "unit": "ns",
            "range": "± 2240.138939907259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542521.0842105264,
            "unit": "ns",
            "range": "± 300527.44452710607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462858.0760869565,
            "unit": "ns",
            "range": "± 262334.3680710058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746599.847368421,
            "unit": "ns",
            "range": "± 140187.14240893244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8079597.353658536,
            "unit": "ns",
            "range": "± 690642.415572652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2924328,
            "unit": "ns",
            "range": "± 91613.63361452892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042294.346153846,
            "unit": "ns",
            "range": "± 103418.36489194304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3745998.121212121,
            "unit": "ns",
            "range": "± 176530.58981541242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3738082.595959596,
            "unit": "ns",
            "range": "± 302711.91152038414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12855429.072916666,
            "unit": "ns",
            "range": "± 1844515.6580958234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4326641.739955357,
            "unit": "ns",
            "range": "± 46790.09525468642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1358369.9520833334,
            "unit": "ns",
            "range": "± 7776.227333400817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872118.6514322917,
            "unit": "ns",
            "range": "± 8100.746747125041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950933.66015625,
            "unit": "ns",
            "range": "± 63151.083401823795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629417.4053344727,
            "unit": "ns",
            "range": "± 9470.554476270994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559233.7995256697,
            "unit": "ns",
            "range": "± 5358.888923202321"
          }
        ]
      }
    ]
  }
}