window.BENCHMARK_DATA = {
  "lastUpdate": 1721090224930,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "20de2d8c86ce12c1079fefb7153f47bc58bc2152",
          "message": "add minor adjustments",
          "timestamp": "2024-07-16T09:26:28+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/20de2d8c86ce12c1079fefb7153f47bc58bc2152"
        },
        "date": 1721090172778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10970916.944444444,
            "unit": "ns",
            "range": "± 221339.14537715836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26357571.5,
            "unit": "ns",
            "range": "± 224725.94745840304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67653264.5,
            "unit": "ns",
            "range": "± 169006.16670394468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137068880.64285713,
            "unit": "ns",
            "range": "± 314088.3492433929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274276805.93333334,
            "unit": "ns",
            "range": "± 406630.4315597829"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14124.25,
            "unit": "ns",
            "range": "± 494.0962612534276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110766.66666666667,
            "unit": "ns",
            "range": "± 4268.871805356309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105884.52083333333,
            "unit": "ns",
            "range": "± 4157.847307633999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89953.85,
            "unit": "ns",
            "range": "± 1985.157537829177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2969024.5,
            "unit": "ns",
            "range": "± 209765.8973200719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765331.66,
            "unit": "ns",
            "range": "± 183674.76877755753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4895.038461538462,
            "unit": "ns",
            "range": "± 367.00830471052797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27565.202127659573,
            "unit": "ns",
            "range": "± 1969.9320430928644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22095.172413793105,
            "unit": "ns",
            "range": "± 937.198403191634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31455.177083333332,
            "unit": "ns",
            "range": "± 5179.614379051769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1340.3978494623657,
            "unit": "ns",
            "range": "± 240.3972319427985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4998.510869565217,
            "unit": "ns",
            "range": "± 554.855223064425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684125.2658227849,
            "unit": "ns",
            "range": "± 34441.54082317726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254589.2666666666,
            "unit": "ns",
            "range": "± 22314.23891172459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1088672.8513513512,
            "unit": "ns",
            "range": "± 54314.00579164765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9629934.09,
            "unit": "ns",
            "range": "± 1446067.7101469268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149634.3846153845,
            "unit": "ns",
            "range": "± 24385.54569322594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247670.4166666665,
            "unit": "ns",
            "range": "± 15966.42401734074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2575851,
            "unit": "ns",
            "range": "± 32369.29618130007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2366362.2459016396,
            "unit": "ns",
            "range": "± 106426.59035029038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3120817.86,
            "unit": "ns",
            "range": "± 297760.02452405536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3012825.683333333,
            "unit": "ns",
            "range": "± 52458.79287602909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915120.2147786458,
            "unit": "ns",
            "range": "± 5476.644425442575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616934.8172526042,
            "unit": "ns",
            "range": "± 5522.47433890996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1654770.573828125,
            "unit": "ns",
            "range": "± 19862.031188149307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465572.66462590144,
            "unit": "ns",
            "range": "± 847.0101997899169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419495.5607421875,
            "unit": "ns",
            "range": "± 1042.3922418487412"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "20de2d8c86ce12c1079fefb7153f47bc58bc2152",
          "message": "add minor adjustments",
          "timestamp": "2024-07-16T09:26:28+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/20de2d8c86ce12c1079fefb7153f47bc58bc2152"
        },
        "date": 1721090172778,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10970916.944444444,
            "unit": "ns",
            "range": "± 221339.14537715836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26357571.5,
            "unit": "ns",
            "range": "± 224725.94745840304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67653264.5,
            "unit": "ns",
            "range": "± 169006.16670394468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137068880.64285713,
            "unit": "ns",
            "range": "± 314088.3492433929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274276805.93333334,
            "unit": "ns",
            "range": "± 406630.4315597829"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14124.25,
            "unit": "ns",
            "range": "± 494.0962612534276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110766.66666666667,
            "unit": "ns",
            "range": "± 4268.871805356309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105884.52083333333,
            "unit": "ns",
            "range": "± 4157.847307633999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89953.85,
            "unit": "ns",
            "range": "± 1985.157537829177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2969024.5,
            "unit": "ns",
            "range": "± 209765.8973200719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2765331.66,
            "unit": "ns",
            "range": "± 183674.76877755753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4895.038461538462,
            "unit": "ns",
            "range": "± 367.00830471052797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27565.202127659573,
            "unit": "ns",
            "range": "± 1969.9320430928644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22095.172413793105,
            "unit": "ns",
            "range": "± 937.198403191634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31455.177083333332,
            "unit": "ns",
            "range": "± 5179.614379051769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1340.3978494623657,
            "unit": "ns",
            "range": "± 240.3972319427985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4998.510869565217,
            "unit": "ns",
            "range": "± 554.855223064425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684125.2658227849,
            "unit": "ns",
            "range": "± 34441.54082317726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254589.2666666666,
            "unit": "ns",
            "range": "± 22314.23891172459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1088672.8513513512,
            "unit": "ns",
            "range": "± 54314.00579164765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9629934.09,
            "unit": "ns",
            "range": "± 1446067.7101469268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2149634.3846153845,
            "unit": "ns",
            "range": "± 24385.54569322594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247670.4166666665,
            "unit": "ns",
            "range": "± 15966.42401734074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2575851,
            "unit": "ns",
            "range": "± 32369.29618130007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2366362.2459016396,
            "unit": "ns",
            "range": "± 106426.59035029038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3120817.86,
            "unit": "ns",
            "range": "± 297760.02452405536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3012825.683333333,
            "unit": "ns",
            "range": "± 52458.79287602909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 915120.2147786458,
            "unit": "ns",
            "range": "± 5476.644425442575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616934.8172526042,
            "unit": "ns",
            "range": "± 5522.47433890996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1654770.573828125,
            "unit": "ns",
            "range": "± 19862.031188149307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465572.66462590144,
            "unit": "ns",
            "range": "± 847.0101997899169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419495.5607421875,
            "unit": "ns",
            "range": "± 1042.3922418487412"
          }
        ]
      }
    ]
  }
}