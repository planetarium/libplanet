window.BENCHMARK_DATA = {
  "lastUpdate": 1680856991117,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680856942092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1433585.4166666667,
            "unit": "ns",
            "range": "± 147806.54068510717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2508225,
            "unit": "ns",
            "range": "± 68405.71094815535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2333221.212121212,
            "unit": "ns",
            "range": "± 154224.8883225649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5733612,
            "unit": "ns",
            "range": "± 378641.64804247726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52086.73469387755,
            "unit": "ns",
            "range": "± 4475.515008206411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7100973.333333333,
            "unit": "ns",
            "range": "± 117185.52730403106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19884712.5,
            "unit": "ns",
            "range": "± 381468.2265056073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49850253.333333336,
            "unit": "ns",
            "range": "± 605528.9162219691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99068086.66666667,
            "unit": "ns",
            "range": "± 1244668.939268974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200847566.66666666,
            "unit": "ns",
            "range": "± 2135636.3965093023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4875578.958333333,
            "unit": "ns",
            "range": "± 28683.092641963958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532232.1514423077,
            "unit": "ns",
            "range": "± 3610.287091311275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1167711.5885416667,
            "unit": "ns",
            "range": "± 3079.660433013693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692779.453125,
            "unit": "ns",
            "range": "± 10527.855930258604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841892.4283854166,
            "unit": "ns",
            "range": "± 2751.1612906995556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763743.9583333334,
            "unit": "ns",
            "range": "± 2942.9102899811214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3151151.2195121953,
            "unit": "ns",
            "range": "± 112635.56303839214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3289899.090909091,
            "unit": "ns",
            "range": "± 140157.72711977197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3998292.592592593,
            "unit": "ns",
            "range": "± 101334.66612371385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4312579.310344827,
            "unit": "ns",
            "range": "± 123924.74784351519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6893076.923076923,
            "unit": "ns",
            "range": "± 236354.95547958597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324468.3333333333,
            "unit": "ns",
            "range": "± 14158.86248982063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268355,
            "unit": "ns",
            "range": "± 11866.966328026236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224063.04347826086,
            "unit": "ns",
            "range": "± 8599.156514078762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5225788.461538462,
            "unit": "ns",
            "range": "± 59808.744322514394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3731544.4444444445,
            "unit": "ns",
            "range": "± 79603.52654190954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22785.416666666668,
            "unit": "ns",
            "range": "± 2531.900853079473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96058.06451612903,
            "unit": "ns",
            "range": "± 7520.686291831365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92798.96907216495,
            "unit": "ns",
            "range": "± 10352.017666109838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 203012.37113402062,
            "unit": "ns",
            "range": "± 22283.51996493129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8141.414141414141,
            "unit": "ns",
            "range": "± 1616.5603507302417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22745.918367346938,
            "unit": "ns",
            "range": "± 3144.8261672361778"
          }
        ]
      }
    ]
  }
}