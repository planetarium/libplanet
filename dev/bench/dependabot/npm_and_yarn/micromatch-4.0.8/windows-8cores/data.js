window.BENCHMARK_DATA = {
  "lastUpdate": 1725286148089,
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
          "id": "bbb93deb32b1925dea7ad9cac7628dce59232c62",
          "message": "Bump micromatch from 4.0.5 to 4.0.8\n\nBumps [micromatch](https://github.com/micromatch/micromatch) from 4.0.5 to 4.0.8.\n- [Release notes](https://github.com/micromatch/micromatch/releases)\n- [Changelog](https://github.com/micromatch/micromatch/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/micromatch/micromatch/compare/4.0.5...4.0.8)\n\n---\nupdated-dependencies:\n- dependency-name: micromatch\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-09-02T13:53:00Z",
          "tree_id": "cecb61529e6d42fdf28c2ada2f6283de918c10a0",
          "url": "https://github.com/planetarium/libplanet/commit/bbb93deb32b1925dea7ad9cac7628dce59232c62"
        },
        "date": 1725285806437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018761.8556701031,
            "unit": "ns",
            "range": "± 108385.4449439005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833272.7272727273,
            "unit": "ns",
            "range": "± 68302.05439259842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602892.105263158,
            "unit": "ns",
            "range": "± 145329.2224197795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6719944.444444444,
            "unit": "ns",
            "range": "± 186180.92386239898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30803.77358490566,
            "unit": "ns",
            "range": "± 1292.279182766596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9768650,
            "unit": "ns",
            "range": "± 91753.96030019212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23310000,
            "unit": "ns",
            "range": "± 252090.80705174475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60337640,
            "unit": "ns",
            "range": "± 767639.6781228621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117685426.66666667,
            "unit": "ns",
            "range": "± 516003.7160257481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241774178.57142857,
            "unit": "ns",
            "range": "± 1843114.7396056624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3423468.0208333335,
            "unit": "ns",
            "range": "± 11699.220436093767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079082.4088541667,
            "unit": "ns",
            "range": "± 3559.8294241336557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733401.8033854166,
            "unit": "ns",
            "range": "± 1635.2350459282109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976133.0859375,
            "unit": "ns",
            "range": "± 5709.866519118913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626787.2981770834,
            "unit": "ns",
            "range": "± 1527.8209696841861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565987.28515625,
            "unit": "ns",
            "range": "± 1354.018012627113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126313.0434782607,
            "unit": "ns",
            "range": "± 43053.046606882395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282920.588235294,
            "unit": "ns",
            "range": "± 46266.818086857376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2754060,
            "unit": "ns",
            "range": "± 44822.59952938282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349925,
            "unit": "ns",
            "range": "± 72051.85408731239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2908350,
            "unit": "ns",
            "range": "± 32500.952648759747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175870,
            "unit": "ns",
            "range": "± 7979.5817332540155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175795.83333333334,
            "unit": "ns",
            "range": "± 8652.581435210981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144992.3076923077,
            "unit": "ns",
            "range": "± 2395.294532502401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2842400,
            "unit": "ns",
            "range": "± 32989.28397438867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2508050,
            "unit": "ns",
            "range": "± 21837.362125847176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11105.263157894737,
            "unit": "ns",
            "range": "± 1351.2302055197963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55019.58762886598,
            "unit": "ns",
            "range": "± 5907.386604484707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44000,
            "unit": "ns",
            "range": "± 1334.3745934165397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61961.85567010309,
            "unit": "ns",
            "range": "± 12307.250939478126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2987.3684210526317,
            "unit": "ns",
            "range": "± 474.28380615344145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11678.021978021978,
            "unit": "ns",
            "range": "± 1015.6335951078025"
          }
        ]
      }
    ]
  }
}