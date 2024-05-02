window.BENCHMARK_DATA = {
  "lastUpdate": 1714637127143,
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
      },
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
          "id": "e0e4ec0a7db9a5bdb8941c09c604b4f0763f9392",
          "message": "fix: Fix validator set on create context",
          "timestamp": "2024-05-02T16:57:03+09:00",
          "tree_id": "b8ef808ed0b6457a1db58b468a238cafc06796af",
          "url": "https://github.com/planetarium/libplanet/commit/e0e4ec0a7db9a5bdb8941c09c604b4f0763f9392"
        },
        "date": 1714637103869,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2512048.6666666665,
            "unit": "ns",
            "range": "± 25676.280709932234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2465348.0625,
            "unit": "ns",
            "range": "± 51125.68485033059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3044939.095238095,
            "unit": "ns",
            "range": "± 69765.34998973686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2532330.4,
            "unit": "ns",
            "range": "± 94865.40452767805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3256170.6153846155,
            "unit": "ns",
            "range": "± 26051.64191095084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200765.41666666666,
            "unit": "ns",
            "range": "± 4777.47006831264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193443.46153846153,
            "unit": "ns",
            "range": "± 9809.051316298342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168350,
            "unit": "ns",
            "range": "± 1748.5115868162752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163803.1,
            "unit": "ns",
            "range": "± 30715.45166012888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805213.3571428573,
            "unit": "ns",
            "range": "± 24307.14043747748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12953.173913043478,
            "unit": "ns",
            "range": "± 1104.883650666347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61128.45263157895,
            "unit": "ns",
            "range": "± 4486.911883510967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52321.75675675676,
            "unit": "ns",
            "range": "± 1450.0533401186278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59025.565217391304,
            "unit": "ns",
            "range": "± 10603.1566239165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3562.90625,
            "unit": "ns",
            "range": "± 572.5510242143903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12139.279569892473,
            "unit": "ns",
            "range": "± 1249.7512045063331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5652252.928571428,
            "unit": "ns",
            "range": "± 22315.514363379523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14643254.192307692,
            "unit": "ns",
            "range": "± 80684.7846916057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38252612.571428575,
            "unit": "ns",
            "range": "± 115878.54233683599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76867614.36666666,
            "unit": "ns",
            "range": "± 709134.0066958801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154554603.64285713,
            "unit": "ns",
            "range": "± 471161.69072763564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029210.0210526315,
            "unit": "ns",
            "range": "± 72903.80369085894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911269.1219512196,
            "unit": "ns",
            "range": "± 67329.83365277055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1710347.03125,
            "unit": "ns",
            "range": "± 129115.67638406578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8366062.848484849,
            "unit": "ns",
            "range": "± 231469.44899855592"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38657.46153846154,
            "unit": "ns",
            "range": "± 621.5222730501587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748651.7067522323,
            "unit": "ns",
            "range": "± 3836.655126299848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1238169.9388950893,
            "unit": "ns",
            "range": "± 2200.8959362168875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760737.1151646206,
            "unit": "ns",
            "range": "± 894.650369308422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1951115.9842354911,
            "unit": "ns",
            "range": "± 1001.8294845083841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646526.9944010417,
            "unit": "ns",
            "range": "± 539.7255871082971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570208.3672526042,
            "unit": "ns",
            "range": "± 849.3243355001391"
          }
        ]
      }
    ]
  }
}