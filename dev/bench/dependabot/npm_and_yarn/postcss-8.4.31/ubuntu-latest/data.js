window.BENCHMARK_DATA = {
  "lastUpdate": 1696421710259,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab2a1328b2854206290ba75aefd906faa95dcc9e",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-04T12:00:35Z",
          "tree_id": "1bed0488e4e5e26951a5fed09d30df78dabb68c4",
          "url": "https://github.com/planetarium/libplanet/commit/ab2a1328b2854206290ba75aefd906faa95dcc9e"
        },
        "date": 1696421681829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50412.84782608696,
            "unit": "ns",
            "range": "± 2846.411073363552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8305894.153846154,
            "unit": "ns",
            "range": "± 81909.20364937239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22396426.133333333,
            "unit": "ns",
            "range": "± 229174.19028511498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55835639.071428575,
            "unit": "ns",
            "range": "± 891544.2980060767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112983969.33333333,
            "unit": "ns",
            "range": "± 1121450.5429737396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224008577.6,
            "unit": "ns",
            "range": "± 2651808.148507079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277427.44444444444,
            "unit": "ns",
            "range": "± 6164.971160537282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267373.6,
            "unit": "ns",
            "range": "± 8598.534236238447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232862.07692307694,
            "unit": "ns",
            "range": "± 6322.738374616347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4425174.125,
            "unit": "ns",
            "range": "± 106099.68958865893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4127524,
            "unit": "ns",
            "range": "± 82639.60350824536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19861.63440860215,
            "unit": "ns",
            "range": "± 1365.691191341413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86306.69620253165,
            "unit": "ns",
            "range": "± 4037.9419845543125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72204.13513513513,
            "unit": "ns",
            "range": "± 2437.946838384051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83672.47916666667,
            "unit": "ns",
            "range": "± 13098.580385899733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5480.115789473684,
            "unit": "ns",
            "range": "± 582.0986401596381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20558.75,
            "unit": "ns",
            "range": "± 1609.7155355102832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1393890.7216494845,
            "unit": "ns",
            "range": "± 90803.6426952344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652717.05,
            "unit": "ns",
            "range": "± 92839.16546066824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2085024.5,
            "unit": "ns",
            "range": "± 99373.0176415062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9424452.273684211,
            "unit": "ns",
            "range": "± 548727.7906872781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5026402.612630208,
            "unit": "ns",
            "range": "± 24459.250458006478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1585720.363560268,
            "unit": "ns",
            "range": "± 2107.316094220708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097329.308984375,
            "unit": "ns",
            "range": "± 4306.653008966962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639711.7195870536,
            "unit": "ns",
            "range": "± 5971.0212056997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825880.9192457933,
            "unit": "ns",
            "range": "± 892.7137845071283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753377.7573242188,
            "unit": "ns",
            "range": "± 660.4687736437502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3520458.8125,
            "unit": "ns",
            "range": "± 67629.90266365783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3636863.827586207,
            "unit": "ns",
            "range": "± 106154.93330507503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4347901.631578947,
            "unit": "ns",
            "range": "± 94754.45341877107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4371994.621621622,
            "unit": "ns",
            "range": "± 147276.50497285544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10608291.945945946,
            "unit": "ns",
            "range": "± 352758.01981882285"
          }
        ]
      }
    ]
  }
}