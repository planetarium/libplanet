window.BENCHMARK_DATA = {
  "lastUpdate": 1792977229211,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "344717678+planetarium-donggeul[bot]@users.noreply.github.com",
            "name": "planetarium-donggeul[bot]",
            "username": "planetarium-donggeul[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6feb7fdf59ffa602b3d136425e645b30b5bb701d",
          "message": "chore: CLA 허용 목록 확인용 빈 커밋(바로 닫음)",
          "timestamp": "2026-10-26T01:02:45Z",
          "tree_id": "66993aba53577b7e908b320e28b89370b848eaf7",
          "url": "https://github.com/planetarium/libplanet/commit/6feb7fdf59ffa602b3d136425e645b30b5bb701d"
        },
        "date": 1792977169840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1962900,
            "unit": "ns",
            "range": "± 87567.27318658115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602846,
            "unit": "ns",
            "range": "± 1171789.5365912116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154148,
            "unit": "ns",
            "range": "± 754385.1259660332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4208319.48051948,
            "unit": "ns",
            "range": "± 215726.25138487134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 17955.208333333332,
            "unit": "ns",
            "range": "± 3827.872015450185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5437742.857142857,
            "unit": "ns",
            "range": "± 54592.93719162572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13493026.666666666,
            "unit": "ns",
            "range": "± 179997.39072182868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 29026350.943396226,
            "unit": "ns",
            "range": "± 1198712.704500868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 56710741.176470585,
            "unit": "ns",
            "range": "± 930110.1689173866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 114362926.66666667,
            "unit": "ns",
            "range": "± 2107322.7586770128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2942265.9375,
            "unit": "ns",
            "range": "± 48040.04471317704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 572423.4440104166,
            "unit": "ns",
            "range": "± 9576.308906648053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 465661.64202008926,
            "unit": "ns",
            "range": "± 7627.169755494174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1036057.3404947916,
            "unit": "ns",
            "range": "± 12773.068926761922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 254147.47220552884,
            "unit": "ns",
            "range": "± 3089.5858957443693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 228774.43033854166,
            "unit": "ns",
            "range": "± 3768.283508886375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 1405208.5714285714,
            "unit": "ns",
            "range": "± 45778.34943847282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 1740591.4285714286,
            "unit": "ns",
            "range": "± 55788.594509190894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2988340,
            "unit": "ns",
            "range": "± 67962.50824032165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 1666632.183908046,
            "unit": "ns",
            "range": "± 266425.46821755334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 1990998.9795918367,
            "unit": "ns",
            "range": "± 536018.382560008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 144328,
            "unit": "ns",
            "range": "± 43038.54762672855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214258,
            "unit": "ns",
            "range": "± 65674.28840555303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 99472.5,
            "unit": "ns",
            "range": "± 13854.012579645003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 1485153.164556962,
            "unit": "ns",
            "range": "± 66772.60077469023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 1386888.888888889,
            "unit": "ns",
            "range": "± 76686.71778179596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25226.262626262625,
            "unit": "ns",
            "range": "± 8033.3308955415505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80961.22448979592,
            "unit": "ns",
            "range": "± 22605.457933474263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39029.5918367347,
            "unit": "ns",
            "range": "± 10802.349965638905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98238,
            "unit": "ns",
            "range": "± 39121.2561509505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4841.836734693878,
            "unit": "ns",
            "range": "± 1584.4556429290933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24613.131313131315,
            "unit": "ns",
            "range": "± 8037.268376256244"
          }
        ]
      }
    ]
  }
}