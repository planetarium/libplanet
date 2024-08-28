window.BENCHMARK_DATA = {
  "lastUpdate": 1724834151594,
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
        "date": 1724834083858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961171.1111111111,
            "unit": "ns",
            "range": "± 61797.275028910066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1775608.4507042253,
            "unit": "ns",
            "range": "± 85652.43178347325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512353.4090909092,
            "unit": "ns",
            "range": "± 83283.2832902308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6665320,
            "unit": "ns",
            "range": "± 168764.20434045445"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34302.0618556701,
            "unit": "ns",
            "range": "± 4932.7768418137475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9724036.666666666,
            "unit": "ns",
            "range": "± 81493.46920956012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23964120,
            "unit": "ns",
            "range": "± 367788.65864592866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58501935.71428572,
            "unit": "ns",
            "range": "± 413539.5499775135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119659785.71428572,
            "unit": "ns",
            "range": "± 789265.8573803719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240286042.85714287,
            "unit": "ns",
            "range": "± 1945708.0746782473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313097.3177083335,
            "unit": "ns",
            "range": "± 6974.795750916901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068502.1223958333,
            "unit": "ns",
            "range": "± 2296.7332384992624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724965.1517427885,
            "unit": "ns",
            "range": "± 1250.4457726965315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900728.90625,
            "unit": "ns",
            "range": "± 2344.4355024303404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613522.6106770834,
            "unit": "ns",
            "range": "± 1217.5515845954258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558518.8606770834,
            "unit": "ns",
            "range": "± 1350.203568317035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141591.6666666665,
            "unit": "ns",
            "range": "± 70857.88342066917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211824.1379310344,
            "unit": "ns",
            "range": "± 64082.50070457398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772500,
            "unit": "ns",
            "range": "± 59203.54719102564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2247187.5,
            "unit": "ns",
            "range": "± 43259.72530348908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2905535.714285714,
            "unit": "ns",
            "range": "± 29425.018322792992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174819.11764705883,
            "unit": "ns",
            "range": "± 8304.831489892184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164578.87323943662,
            "unit": "ns",
            "range": "± 6327.195621012467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146326.92307692306,
            "unit": "ns",
            "range": "± 3971.5294476871445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2649228.5714285714,
            "unit": "ns",
            "range": "± 36927.58878111071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2390986.6666666665,
            "unit": "ns",
            "range": "± 36482.14566580415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10287.368421052632,
            "unit": "ns",
            "range": "± 1350.5114953202587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53429.166666666664,
            "unit": "ns",
            "range": "± 4699.5613830423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44998,
            "unit": "ns",
            "range": "± 1551.495657586641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51957.89473684211,
            "unit": "ns",
            "range": "± 8586.3397069572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2531.25,
            "unit": "ns",
            "range": "± 460.0486244323585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9898.958333333334,
            "unit": "ns",
            "range": "± 1318.6512081562469"
          }
        ]
      }
    ]
  }
}