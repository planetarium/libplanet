window.BENCHMARK_DATA = {
  "lastUpdate": 1689146189561,
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
          "id": "54f3da7499608f66b25a96c4a8104ab40778d80e",
          "message": "build(deps): bump semver from 6.3.0 to 6.3.1\n\nBumps [semver](https://github.com/npm/node-semver) from 6.3.0 to 6.3.1.\n- [Release notes](https://github.com/npm/node-semver/releases)\n- [Changelog](https://github.com/npm/node-semver/blob/v6.3.1/CHANGELOG.md)\n- [Commits](https://github.com/npm/node-semver/compare/v6.3.0...v6.3.1)\n\n---\nupdated-dependencies:\n- dependency-name: semver\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-07-12T07:00:45Z",
          "tree_id": "0aaa3e850e1015375116d3a7947d4a4ade1b201e",
          "url": "https://github.com/planetarium/libplanet/commit/54f3da7499608f66b25a96c4a8104ab40778d80e"
        },
        "date": 1689146132443,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328670.1030927836,
            "unit": "ns",
            "range": "± 93303.26022008875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2448911.320754717,
            "unit": "ns",
            "range": "± 97183.9209167881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1767421,
            "unit": "ns",
            "range": "± 131310.67739902152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696491.228070175,
            "unit": "ns",
            "range": "± 203499.87300864916"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44860.63829787234,
            "unit": "ns",
            "range": "± 2894.1252354584626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6936653.333333333,
            "unit": "ns",
            "range": "± 40422.99322109115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18087073.333333332,
            "unit": "ns",
            "range": "± 65454.88595390031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45523040,
            "unit": "ns",
            "range": "± 681679.890103433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89095935.71428572,
            "unit": "ns",
            "range": "± 616726.2363070429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182938466.66666666,
            "unit": "ns",
            "range": "± 560333.5303532132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4948039.270833333,
            "unit": "ns",
            "range": "± 15771.26718453025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1531893.7369791667,
            "unit": "ns",
            "range": "± 3560.7936261898503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155112.2916666667,
            "unit": "ns",
            "range": "± 1942.3072496090706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590283.1510416665,
            "unit": "ns",
            "range": "± 6179.285432887872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806476.6927083334,
            "unit": "ns",
            "range": "± 1312.7579305401143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740577.67578125,
            "unit": "ns",
            "range": "± 853.7390604856225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3029165.789473684,
            "unit": "ns",
            "range": "± 83986.17413989747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3229720,
            "unit": "ns",
            "range": "± 84403.80619379673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4014783.3333333335,
            "unit": "ns",
            "range": "± 109463.46291180304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3490857.1428571427,
            "unit": "ns",
            "range": "± 186080.64600015437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6027094.117647059,
            "unit": "ns",
            "range": "± 118110.91964012173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254427.45098039217,
            "unit": "ns",
            "range": "± 9673.077657733811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242041.77215189874,
            "unit": "ns",
            "range": "± 12010.834933241464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228709,
            "unit": "ns",
            "range": "± 15403.810987197061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3934246.153846154,
            "unit": "ns",
            "range": "± 25549.742835777408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3473250,
            "unit": "ns",
            "range": "± 29773.730031690688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18920,
            "unit": "ns",
            "range": "± 2191.464545442747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86238.77551020408,
            "unit": "ns",
            "range": "± 8164.603419678826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68053.1914893617,
            "unit": "ns",
            "range": "± 4521.554165379912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89543.43434343435,
            "unit": "ns",
            "range": "± 15416.60357004588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5022.680412371134,
            "unit": "ns",
            "range": "± 1031.2315811121966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15456.593406593407,
            "unit": "ns",
            "range": "± 1887.7265690537918"
          }
        ]
      }
    ]
  }
}