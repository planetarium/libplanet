window.BENCHMARK_DATA = {
  "lastUpdate": 1708465726103,
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
          "id": "5caa4179f59387bf28ad0c8d9f09e1bb45d595b4",
          "message": "Bump ip from 2.0.0 to 2.0.1\n\nBumps [ip](https://github.com/indutny/node-ip) from 2.0.0 to 2.0.1.\n- [Commits](https://github.com/indutny/node-ip/compare/v2.0.0...v2.0.1)\n\n---\nupdated-dependencies:\n- dependency-name: ip\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-02-20T21:35:36Z",
          "tree_id": "7d09dc671c198c475b6593a51610c79165be84a3",
          "url": "https://github.com/planetarium/libplanet/commit/5caa4179f59387bf28ad0c8d9f09e1bb45d595b4"
        },
        "date": 1708465670355,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001631.5789473684,
            "unit": "ns",
            "range": "± 111203.26057438254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1814383.3333333333,
            "unit": "ns",
            "range": "± 79279.7752794594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1821990,
            "unit": "ns",
            "range": "± 50538.21599405809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6979213.513513514,
            "unit": "ns",
            "range": "± 212549.34219580138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36394.444444444445,
            "unit": "ns",
            "range": "± 2497.115689458905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5055469.230769231,
            "unit": "ns",
            "range": "± 45535.87202443411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13452053.333333334,
            "unit": "ns",
            "range": "± 219105.55142822527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33142331.25,
            "unit": "ns",
            "range": "± 611611.5659673221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64954180,
            "unit": "ns",
            "range": "± 788682.4494053357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133265400,
            "unit": "ns",
            "range": "± 1420117.5238087063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3353586.9791666665,
            "unit": "ns",
            "range": "± 10639.506677472018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048452.6893028846,
            "unit": "ns",
            "range": "± 2708.300965125127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760347.2130408654,
            "unit": "ns",
            "range": "± 1174.2861314851966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952334.3900240385,
            "unit": "ns",
            "range": "± 2424.9003418852435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628592.7106584822,
            "unit": "ns",
            "range": "± 1243.3133377226566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570848.3248197115,
            "unit": "ns",
            "range": "± 632.4672756929036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2191092.5,
            "unit": "ns",
            "range": "± 77628.64719537894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286012.5,
            "unit": "ns",
            "range": "± 78980.27931880589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2878535.714285714,
            "unit": "ns",
            "range": "± 82384.06540590379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2921911.5942028984,
            "unit": "ns",
            "range": "± 139531.10293811565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8071213.043478261,
            "unit": "ns",
            "range": "± 297504.94177684264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179887.93103448275,
            "unit": "ns",
            "range": "± 7560.169811195228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172616.12903225806,
            "unit": "ns",
            "range": "± 7395.771799323441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144266.66666666666,
            "unit": "ns",
            "range": "± 5666.675010423562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2903868.75,
            "unit": "ns",
            "range": "± 55809.9479633037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2615528.5714285714,
            "unit": "ns",
            "range": "± 25941.1887685448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12181.91489361702,
            "unit": "ns",
            "range": "± 1924.8774722048158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61055,
            "unit": "ns",
            "range": "± 8236.631347802084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50645.833333333336,
            "unit": "ns",
            "range": "± 6043.855804240876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62545.744680851065,
            "unit": "ns",
            "range": "± 12859.644846126965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3181.6326530612246,
            "unit": "ns",
            "range": "± 779.6836443805518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11940.217391304348,
            "unit": "ns",
            "range": "± 1908.0546322614086"
          }
        ]
      }
    ]
  }
}