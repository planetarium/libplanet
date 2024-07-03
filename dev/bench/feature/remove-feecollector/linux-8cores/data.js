window.BENCHMARK_DATA = {
  "lastUpdate": 1720001008533,
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
      },
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
          "id": "821f6ea9be9ac01f81a122d24b776fa7e7f8c398",
          "message": "test: remove unused test",
          "timestamp": "2024-07-03T18:54:38+09:00",
          "tree_id": "07d0f8f57eaa6f486b6b23cd83a7e4cc91907561",
          "url": "https://github.com/planetarium/libplanet/commit/821f6ea9be9ac01f81a122d24b776fa7e7f8c398"
        },
        "date": 1720000983257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3681922.2608173075,
            "unit": "ns",
            "range": "± 4767.893386580719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195735.3125,
            "unit": "ns",
            "range": "± 1309.7024823348613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764861.709375,
            "unit": "ns",
            "range": "± 2231.7858033745674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920959.4256417411,
            "unit": "ns",
            "range": "± 2597.7309624594664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624750.2776692709,
            "unit": "ns",
            "range": "± 636.139629311518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577785.9585336539,
            "unit": "ns",
            "range": "± 400.825501411099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2422993.5833333335,
            "unit": "ns",
            "range": "± 32216.27390129612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2562316.1333333333,
            "unit": "ns",
            "range": "± 41716.57697378254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3031261.5714285714,
            "unit": "ns",
            "range": "± 35920.50785460817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2554826.346153846,
            "unit": "ns",
            "range": "± 26866.171904603234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3185485.785714286,
            "unit": "ns",
            "range": "± 28908.040096481465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986999.9333333333,
            "unit": "ns",
            "range": "± 49451.84139039618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924214.5208333333,
            "unit": "ns",
            "range": "± 74786.76366958107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643970,
            "unit": "ns",
            "range": "± 77679.34173325049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8173600.25,
            "unit": "ns",
            "range": "± 231724.77505735037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204749.26315789475,
            "unit": "ns",
            "range": "± 4464.485211609325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196112.5,
            "unit": "ns",
            "range": "± 6282.975005066128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160353.33333333334,
            "unit": "ns",
            "range": "± 964.5011271338278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149924.1428571427,
            "unit": "ns",
            "range": "± 30897.87929455837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767992.285714286,
            "unit": "ns",
            "range": "± 45657.11143096747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12594.973684210527,
            "unit": "ns",
            "range": "± 899.4907169237642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68376.71739130435,
            "unit": "ns",
            "range": "± 4068.903048507762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50764.833333333336,
            "unit": "ns",
            "range": "± 417.66533652355366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53976.344086021505,
            "unit": "ns",
            "range": "± 6839.263179381215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2727.14606741573,
            "unit": "ns",
            "range": "± 162.53905478668793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11779.472527472528,
            "unit": "ns",
            "range": "± 903.441375342816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10624404.266666668,
            "unit": "ns",
            "range": "± 43798.44768851756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28230807.4,
            "unit": "ns",
            "range": "± 173554.93360637804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71179683.92857143,
            "unit": "ns",
            "range": "± 347288.34598100936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140564895.66666666,
            "unit": "ns",
            "range": "± 310908.15382062836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295226151.78571427,
            "unit": "ns",
            "range": "± 575969.9213037455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37878.78571428572,
            "unit": "ns",
            "range": "± 392.49266109188466"
          }
        ]
      }
    ]
  }
}