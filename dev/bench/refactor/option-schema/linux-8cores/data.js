window.BENCHMARK_DATA = {
  "lastUpdate": 1724833970033,
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
          "id": "d9f0b980a4dd0d2a39ced5a737d9c6f5b52daf2d",
          "message": "refactor: Add OptionsSchemaGenerator and export enum member as string",
          "timestamp": "2024-08-28T17:21:44+09:00",
          "tree_id": "55d1058db75ee0b5b22dda9e81ecc6eab87ce6a7",
          "url": "https://github.com/planetarium/libplanet/commit/d9f0b980a4dd0d2a39ced5a737d9c6f5b52daf2d"
        },
        "date": 1724833941707,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200732.12121212122,
            "unit": "ns",
            "range": "± 6175.284683506379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191478.94,
            "unit": "ns",
            "range": "± 7696.219056902989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167973.84782608695,
            "unit": "ns",
            "range": "± 4223.9231721738115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070595.066666667,
            "unit": "ns",
            "range": "± 47229.0082795168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2812626,
            "unit": "ns",
            "range": "± 19479.197040261522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12646.87912087912,
            "unit": "ns",
            "range": "± 780.8429894125796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60736.20430107527,
            "unit": "ns",
            "range": "± 3914.756979405923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50409.5,
            "unit": "ns",
            "range": "± 571.2323997686533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53849.969072164946,
            "unit": "ns",
            "range": "± 8572.849633743934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2771.3979591836733,
            "unit": "ns",
            "range": "± 390.08777071547826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11990.779069767443,
            "unit": "ns",
            "range": "± 718.1831267558237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2431516.6666666665,
            "unit": "ns",
            "range": "± 38805.64058717434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2520444.9,
            "unit": "ns",
            "range": "± 45741.04621172167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048309,
            "unit": "ns",
            "range": "± 54429.12094773217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2609354.9411764704,
            "unit": "ns",
            "range": "± 52394.17942203908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3257795.25,
            "unit": "ns",
            "range": "± 61576.531118600695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10527204.333333334,
            "unit": "ns",
            "range": "± 93802.71454621179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26775771.7,
            "unit": "ns",
            "range": "± 191502.6957957213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69028970.92857143,
            "unit": "ns",
            "range": "± 286320.45361137803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137041844.85714287,
            "unit": "ns",
            "range": "± 547577.4295587172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282881078.56666666,
            "unit": "ns",
            "range": "± 1249717.0040140783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013516.5454545454,
            "unit": "ns",
            "range": "± 50396.72665475759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933385.1290322582,
            "unit": "ns",
            "range": "± 58256.022022758545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1689596.125,
            "unit": "ns",
            "range": "± 76517.66965425345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8215286.7727272725,
            "unit": "ns",
            "range": "± 149015.9727823807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3794966.5546875,
            "unit": "ns",
            "range": "± 5825.412677962235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192935.6436941964,
            "unit": "ns",
            "range": "± 1725.7097761527327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755737.2815104167,
            "unit": "ns",
            "range": "± 1810.1436583670236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958880.0633370536,
            "unit": "ns",
            "range": "± 2677.129131060736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616453.949358259,
            "unit": "ns",
            "range": "± 984.3638928605716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571930.8305338542,
            "unit": "ns",
            "range": "± 1092.4024096168314"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32122,
            "unit": "ns",
            "range": "± 457.98908283931837"
          }
        ]
      }
    ]
  }
}