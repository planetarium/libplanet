window.BENCHMARK_DATA = {
  "lastUpdate": 1720000398853,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8",
          "message": "feat: remove feecollector",
          "timestamp": "2024-07-03T18:42:32+09:00",
          "tree_id": "30e6bcd4736388bfd88c89a2a5761353d1af500c",
          "url": "https://github.com/planetarium/libplanet/commit/fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8"
        },
        "date": 1720000372924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3822967.0106026786,
            "unit": "ns",
            "range": "± 15400.656923868175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210253.0401041666,
            "unit": "ns",
            "range": "± 3869.65258208077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766624.1849888393,
            "unit": "ns",
            "range": "± 2003.9423419898853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936584.6473214286,
            "unit": "ns",
            "range": "± 1744.993375824181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612880.5845424107,
            "unit": "ns",
            "range": "± 471.7750525091751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581483.8176832933,
            "unit": "ns",
            "range": "± 1477.5126722787675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2369342.38,
            "unit": "ns",
            "range": "± 61638.51788608592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2456635.6,
            "unit": "ns",
            "range": "± 43180.43756113906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3027329.5,
            "unit": "ns",
            "range": "± 54231.71737619443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2549986.966666667,
            "unit": "ns",
            "range": "± 44711.496578247825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3167166.466666667,
            "unit": "ns",
            "range": "± 46947.82743013274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989927.4320987654,
            "unit": "ns",
            "range": "± 50871.93228980453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1887102.2777777778,
            "unit": "ns",
            "range": "± 51279.814287985246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680381.2592592593,
            "unit": "ns",
            "range": "± 87306.92518119307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8177309.7894736845,
            "unit": "ns",
            "range": "± 171952.83115810147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202420.62162162163,
            "unit": "ns",
            "range": "± 5802.568944256746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192901.45454545456,
            "unit": "ns",
            "range": "± 6363.231488373656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170523.6875,
            "unit": "ns",
            "range": "± 2753.328717964251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082744.466666667,
            "unit": "ns",
            "range": "± 43350.292766957784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2805689.2666666666,
            "unit": "ns",
            "range": "± 32640.52509308606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12424.306451612903,
            "unit": "ns",
            "range": "± 878.1100289834998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64129.33516483517,
            "unit": "ns",
            "range": "± 5185.143930850771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53290.73684210526,
            "unit": "ns",
            "range": "± 2161.1245793263333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68843.59183673469,
            "unit": "ns",
            "range": "± 11213.569020708826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3292.642105263158,
            "unit": "ns",
            "range": "± 494.77239374538874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12790.473684210527,
            "unit": "ns",
            "range": "± 1339.9084745029388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10972643.366666667,
            "unit": "ns",
            "range": "± 113011.72084337515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27873672.6,
            "unit": "ns",
            "range": "± 233856.5277221424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70506487.53333333,
            "unit": "ns",
            "range": "± 430533.73809839913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141055563.65384614,
            "unit": "ns",
            "range": "± 410732.1200378754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295860129.5714286,
            "unit": "ns",
            "range": "± 2736722.7947378526"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35731.663157894734,
            "unit": "ns",
            "range": "± 2310.2508319675903"
          }
        ]
      }
    ]
  }
}