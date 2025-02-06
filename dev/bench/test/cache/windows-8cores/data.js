window.BENCHMARK_DATA = {
  "lastUpdate": 1738830628575,
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
          "id": "1ddde113784aeadba3e94cd44b0cfbc92bfbd526",
          "message": "Downsize HashNodeCache",
          "timestamp": "2025-02-06T17:15:52+09:00",
          "tree_id": "3d1242376298f6cd86715c298a11e950b6bd82bd",
          "url": "https://github.com/planetarium/libplanet/commit/1ddde113784aeadba3e94cd44b0cfbc92bfbd526"
        },
        "date": 1738830379638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016623.7113402062,
            "unit": "ns",
            "range": "± 80062.95670334986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837812,
            "unit": "ns",
            "range": "± 74056.12499300508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1660656.3157894737,
            "unit": "ns",
            "range": "± 147540.59579144637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7203535.416666667,
            "unit": "ns",
            "range": "± 261259.28711138738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35214.28571428572,
            "unit": "ns",
            "range": "± 3466.213954050981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10033186.666666666,
            "unit": "ns",
            "range": "± 107763.66248592775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24578560,
            "unit": "ns",
            "range": "± 348682.29665413185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60415196.666666664,
            "unit": "ns",
            "range": "± 616279.8261303368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121418360,
            "unit": "ns",
            "range": "± 1103991.4128806826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245156053.33333334,
            "unit": "ns",
            "range": "± 2497854.929410624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3315678.046875,
            "unit": "ns",
            "range": "± 4662.353555869787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059269.7265625,
            "unit": "ns",
            "range": "± 2467.6069729456585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739366.0226004465,
            "unit": "ns",
            "range": "± 1000.7070385440354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964033.0078125,
            "unit": "ns",
            "range": "± 3432.0150255049098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607508.8341346154,
            "unit": "ns",
            "range": "± 951.5251804755985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555881.0677083334,
            "unit": "ns",
            "range": "± 1018.6145119780338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2289238.095238095,
            "unit": "ns",
            "range": "± 52809.29346422347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2316523.8095238097,
            "unit": "ns",
            "range": "± 82879.130503031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2817220,
            "unit": "ns",
            "range": "± 38434.8651245566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2486350,
            "unit": "ns",
            "range": "± 50548.86104494518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3064788.888888889,
            "unit": "ns",
            "range": "± 85510.57214589286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103085.22727272728,
            "unit": "ns",
            "range": "± 7102.962628979048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175056.25,
            "unit": "ns",
            "range": "± 7570.051162520277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150878.57142857142,
            "unit": "ns",
            "range": "± 5718.86498062917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2690020,
            "unit": "ns",
            "range": "± 47609.950940653456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2535326.6666666665,
            "unit": "ns",
            "range": "± 46980.42854920192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12031.958762886597,
            "unit": "ns",
            "range": "± 1928.3275564458577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56325.8064516129,
            "unit": "ns",
            "range": "± 4733.550538576965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44778.43137254902,
            "unit": "ns",
            "range": "± 1596.4101885781356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57408.75,
            "unit": "ns",
            "range": "± 4589.412519972574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2710.204081632653,
            "unit": "ns",
            "range": "± 480.6545785704059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11660,
            "unit": "ns",
            "range": "± 1814.3869488066762"
          }
        ]
      }
    ]
  }
}