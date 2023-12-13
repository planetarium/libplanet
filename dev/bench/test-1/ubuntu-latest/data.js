window.BENCHMARK_DATA = {
  "lastUpdate": 1702438655185,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "322aa27dda1141672d71f71da287cc837ed67534",
          "message": "fix",
          "timestamp": "2023-12-13T12:25:55+09:00",
          "tree_id": "7ec0f9e4d19c79a808eb486058fce582c01f0188",
          "url": "https://github.com/planetarium/libplanet/commit/322aa27dda1141672d71f71da287cc837ed67534"
        },
        "date": 1702438630577,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210966.72527472526,
            "unit": "ns",
            "range": "± 11798.226258464008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192125.69696969696,
            "unit": "ns",
            "range": "± 8970.525346454091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170080,
            "unit": "ns",
            "range": "± 4767.467050428673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3240220.3571428573,
            "unit": "ns",
            "range": "± 50071.86116988746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2742434.214285714,
            "unit": "ns",
            "range": "± 30056.15578105698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15167.918367346938,
            "unit": "ns",
            "range": "± 3580.544350924523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68849.5425531915,
            "unit": "ns",
            "range": "± 5971.054129058642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75006.63,
            "unit": "ns",
            "range": "± 16937.806675686476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75823.46391752578,
            "unit": "ns",
            "range": "± 23293.95993736979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3304.2551020408164,
            "unit": "ns",
            "range": "± 1054.1952059226012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12152.13829787234,
            "unit": "ns",
            "range": "± 1263.0913911465273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39648.721649484534,
            "unit": "ns",
            "range": "± 4443.732378638921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946286.7157894737,
            "unit": "ns",
            "range": "± 72616.58023066832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1905507.1375,
            "unit": "ns",
            "range": "± 96367.43320732476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1384075.5568181819,
            "unit": "ns",
            "range": "± 73227.0101775872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6032987.314285714,
            "unit": "ns",
            "range": "± 292585.70950607816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2411457.873015873,
            "unit": "ns",
            "range": "± 110296.73220227218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502058.72,
            "unit": "ns",
            "range": "± 48941.56676718336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3118478.434782609,
            "unit": "ns",
            "range": "± 75616.32774066848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3035954.862745098,
            "unit": "ns",
            "range": "± 108363.35484544942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6888452.868421053,
            "unit": "ns",
            "range": "± 124254.27114152769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5641079.25,
            "unit": "ns",
            "range": "± 26114.567035991095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14388466.461538462,
            "unit": "ns",
            "range": "± 116479.61465110206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36545585.115384616,
            "unit": "ns",
            "range": "± 217641.16136986375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75031004.15384616,
            "unit": "ns",
            "range": "± 447872.0702730201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149168866.57142857,
            "unit": "ns",
            "range": "± 542676.3383536076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3721922.773111979,
            "unit": "ns",
            "range": "± 20144.155371027064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1220314.9365234375,
            "unit": "ns",
            "range": "± 1815.7555543274027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 794797.3315429688,
            "unit": "ns",
            "range": "± 11088.429772994576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939993.6673677885,
            "unit": "ns",
            "range": "± 1705.9467945122885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622485.136858259,
            "unit": "ns",
            "range": "± 8040.64673869454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576651.4284104567,
            "unit": "ns",
            "range": "± 1164.3236863468112"
          }
        ]
      }
    ]
  }
}