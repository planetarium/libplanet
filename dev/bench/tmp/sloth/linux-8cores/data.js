window.BENCHMARK_DATA = {
  "lastUpdate": 1714441659543,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "470d7d1efe87b185d9b6f32afab59d8a2ae9772e",
          "message": "test: Add CanCreateContextWithLastingEvaluation test",
          "timestamp": "2024-04-30T10:35:51+09:00",
          "tree_id": "8b8c119d64ea3c8c4232716f492c551767bcfa62",
          "url": "https://github.com/planetarium/libplanet/commit/470d7d1efe87b185d9b6f32afab59d8a2ae9772e"
        },
        "date": 1714441636029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2447063.0185185187,
            "unit": "ns",
            "range": "± 68361.17631227334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514112.0681818184,
            "unit": "ns",
            "range": "± 92750.8003642262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3028956.923076923,
            "unit": "ns",
            "range": "± 30916.37417146869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2487932.5263157897,
            "unit": "ns",
            "range": "± 46467.285345437056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3261591.533333333,
            "unit": "ns",
            "range": "± 58876.3340508448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203457.63461538462,
            "unit": "ns",
            "range": "± 8394.06910376477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197214.05555555556,
            "unit": "ns",
            "range": "± 4160.319674117563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167581.5652173913,
            "unit": "ns",
            "range": "± 4092.3942850353174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3135977.2333333334,
            "unit": "ns",
            "range": "± 34221.147197241036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2814438.4285714286,
            "unit": "ns",
            "range": "± 24568.197455761274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12768.49090909091,
            "unit": "ns",
            "range": "± 545.5794362071589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61264.10588235294,
            "unit": "ns",
            "range": "± 3184.0957676714247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52426.46153846154,
            "unit": "ns",
            "range": "± 678.0003214582098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61748.484210526316,
            "unit": "ns",
            "range": "± 8887.445335574961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3164.194736842105,
            "unit": "ns",
            "range": "± 288.20966340216194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14328.87,
            "unit": "ns",
            "range": "± 2238.347648389433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5791441.071428572,
            "unit": "ns",
            "range": "± 19539.30787477578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14428498.6,
            "unit": "ns",
            "range": "± 68816.23856412296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37108611.26923077,
            "unit": "ns",
            "range": "± 202276.53761420853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76952858.35714285,
            "unit": "ns",
            "range": "± 308304.19057772425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154395073.73333332,
            "unit": "ns",
            "range": "± 512781.1870534291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006184.0215053763,
            "unit": "ns",
            "range": "± 78812.96015691318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1899567.3125,
            "unit": "ns",
            "range": "± 57725.37594811147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1672097,
            "unit": "ns",
            "range": "± 86675.73321825059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8239842.961538462,
            "unit": "ns",
            "range": "± 225057.81744333712"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34876.357142857145,
            "unit": "ns",
            "range": "± 2105.5230792316856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3709876.0772879464,
            "unit": "ns",
            "range": "± 6941.13529309294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207560.3455729166,
            "unit": "ns",
            "range": "± 1102.2069517374644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769524.4341517857,
            "unit": "ns",
            "range": "± 2151.9049870218187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926215.329296875,
            "unit": "ns",
            "range": "± 3419.350443811287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616363.3526692708,
            "unit": "ns",
            "range": "± 1644.7934132144596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572399.455078125,
            "unit": "ns",
            "range": "± 951.4131557442643"
          }
        ]
      }
    ]
  }
}