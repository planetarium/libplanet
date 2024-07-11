window.BENCHMARK_DATA = {
  "lastUpdate": 1720673859516,
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
          "id": "28c6a36fec15c3efd6012fbe7f72031cb5cd3f49",
          "message": "Bump braces from 3.0.2 to 3.0.3\n\nBumps [braces](https://github.com/micromatch/braces) from 3.0.2 to 3.0.3.\n- [Changelog](https://github.com/micromatch/braces/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/micromatch/braces/compare/3.0.2...3.0.3)\n\n---\nupdated-dependencies:\n- dependency-name: braces\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-07-11T04:38:29Z",
          "tree_id": "7783b70b3b207686b30737915f07b61494f0e89b",
          "url": "https://github.com/planetarium/libplanet/commit/28c6a36fec15c3efd6012fbe7f72031cb5cd3f49"
        },
        "date": 1720673551228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004252.0202020202,
            "unit": "ns",
            "range": "± 110416.15988261897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1799484,
            "unit": "ns",
            "range": "± 71792.57923109505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1597440.322580645,
            "unit": "ns",
            "range": "± 105253.80718562499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6830806.8965517245,
            "unit": "ns",
            "range": "± 185066.73493448345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30392.85714285714,
            "unit": "ns",
            "range": "± 351.83974873684866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9682907.692307692,
            "unit": "ns",
            "range": "± 70565.67226749918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23671360,
            "unit": "ns",
            "range": "± 219823.58771134118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58199564.28571428,
            "unit": "ns",
            "range": "± 496872.9842449954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119302273.33333333,
            "unit": "ns",
            "range": "± 1054480.5298389932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232875233.33333334,
            "unit": "ns",
            "range": "± 1181611.1516948051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3275929.7135416665,
            "unit": "ns",
            "range": "± 8964.17673082998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064505.1171875,
            "unit": "ns",
            "range": "± 4063.541108386538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734432.55859375,
            "unit": "ns",
            "range": "± 1802.3774083312576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922954.8177083333,
            "unit": "ns",
            "range": "± 3129.4482280494663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616051.77734375,
            "unit": "ns",
            "range": "± 1245.2588057373914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565236.328125,
            "unit": "ns",
            "range": "± 1065.460114333683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2081656,
            "unit": "ns",
            "range": "± 29040.662297314546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244650,
            "unit": "ns",
            "range": "± 40922.609887444865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2673653.3333333335,
            "unit": "ns",
            "range": "± 38786.79574042594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2244615.3846153845,
            "unit": "ns",
            "range": "± 28363.645926721238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3018233.3333333335,
            "unit": "ns",
            "range": "± 35786.32353820314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173991.37931034484,
            "unit": "ns",
            "range": "± 7477.833546914099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168390.47619047618,
            "unit": "ns",
            "range": "± 7592.987305481167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143415.625,
            "unit": "ns",
            "range": "± 4347.19853246262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2734557.1428571427,
            "unit": "ns",
            "range": "± 40867.416290802066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2440413.3333333335,
            "unit": "ns",
            "range": "± 39122.18710411681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10515.384615384615,
            "unit": "ns",
            "range": "± 1316.8922234583692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52076.84210526316,
            "unit": "ns",
            "range": "± 3883.7208697269903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44420,
            "unit": "ns",
            "range": "± 647.1917357763022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54988.14432989691,
            "unit": "ns",
            "range": "± 11288.890587089825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2612.2448979591836,
            "unit": "ns",
            "range": "± 419.44128427359436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9932.608695652174,
            "unit": "ns",
            "range": "± 1067.5131515418268"
          }
        ]
      }
    ]
  }
}