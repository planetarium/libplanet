window.BENCHMARK_DATA = {
  "lastUpdate": 1698025755690,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "8ba410942864b26987a6a6745a77f65b18f05d6b",
          "message": "add conditional exports to support cjs",
          "timestamp": "2023-10-23T10:34:47+09:00",
          "tree_id": "7a258ff201260e1e5d6b8bef08db48450bc33a94",
          "url": "https://github.com/planetarium/libplanet/commit/8ba410942864b26987a6a6745a77f65b18f05d6b"
        },
        "date": 1698025724545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4977998.497395833,
            "unit": "ns",
            "range": "± 62851.596603230246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1634998.675502232,
            "unit": "ns",
            "range": "± 5206.115929403484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062790.334263393,
            "unit": "ns",
            "range": "± 1335.4717485978917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2514936.0270647323,
            "unit": "ns",
            "range": "± 9012.092637843078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809562.4230608259,
            "unit": "ns",
            "range": "± 1122.6933003463173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747303.701311384,
            "unit": "ns",
            "range": "± 1201.435371542812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3420670.9615384615,
            "unit": "ns",
            "range": "± 76460.97342172974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623438.5714285714,
            "unit": "ns",
            "range": "± 41002.44916833869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4323387.5,
            "unit": "ns",
            "range": "± 82041.22343797659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3790390.6666666665,
            "unit": "ns",
            "range": "± 70015.10001285096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5875216.266666667,
            "unit": "ns",
            "range": "± 102080.93523730966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48261.54255319149,
            "unit": "ns",
            "range": "± 3543.1812445178534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7552916.285714285,
            "unit": "ns",
            "range": "± 29178.669691900126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19860563.214285713,
            "unit": "ns",
            "range": "± 112687.98957651478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50397538.266666666,
            "unit": "ns",
            "range": "± 483124.6035850477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101707885.28571428,
            "unit": "ns",
            "range": "± 1234362.2481155961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214095396.66666666,
            "unit": "ns",
            "range": "± 4875292.081557743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275170.05263157893,
            "unit": "ns",
            "range": "± 8751.973105557301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263864.6231884058,
            "unit": "ns",
            "range": "± 12654.556552182918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247905.72727272726,
            "unit": "ns",
            "range": "± 16255.412881728756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242295.846153846,
            "unit": "ns",
            "range": "± 44409.87985205949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4009235,
            "unit": "ns",
            "range": "± 59754.56778077025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24915.91304347826,
            "unit": "ns",
            "range": "± 2655.877867128442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107431.07142857143,
            "unit": "ns",
            "range": "± 14279.612623070292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82180.66666666667,
            "unit": "ns",
            "range": "± 9200.646128597353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94910.22916666667,
            "unit": "ns",
            "range": "± 15431.451178120593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6842.333333333333,
            "unit": "ns",
            "range": "± 1245.1144935470052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25056.864583333332,
            "unit": "ns",
            "range": "± 2493.658097611837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1436588.2647058824,
            "unit": "ns",
            "range": "± 46014.80075150315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593893.1142857145,
            "unit": "ns",
            "range": "± 82153.3184248929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897635.0412371133,
            "unit": "ns",
            "range": "± 140605.3801062064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4423178.533333333,
            "unit": "ns",
            "range": "± 131669.72249343753"
          }
        ]
      }
    ]
  }
}