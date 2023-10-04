window.BENCHMARK_DATA = {
  "lastUpdate": 1696421854634,
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
        "date": 1696421803885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8290011.208333333,
            "unit": "ns",
            "range": "± 207146.20920918952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19993994.891304348,
            "unit": "ns",
            "range": "± 493176.8110886011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51917280.96666667,
            "unit": "ns",
            "range": "± 797240.6821628017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113294266.23076923,
            "unit": "ns",
            "range": "± 1301282.6096389256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204525255,
            "unit": "ns",
            "range": "± 5467313.3979401495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55563.934782608696,
            "unit": "ns",
            "range": "± 7024.416521550201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304686.8888888889,
            "unit": "ns",
            "range": "± 17747.64474099829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300166.9680851064,
            "unit": "ns",
            "range": "± 22664.78402481355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278852.10638297873,
            "unit": "ns",
            "range": "± 10627.615799199422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4107575.810810811,
            "unit": "ns",
            "range": "± 137509.99541222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3727737.090909091,
            "unit": "ns",
            "range": "± 115189.0061755471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18792.706521739132,
            "unit": "ns",
            "range": "± 1625.0365712743135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85292.71428571429,
            "unit": "ns",
            "range": "± 9259.844608034653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81935.54347826086,
            "unit": "ns",
            "range": "± 10357.397181855307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95314.51052631579,
            "unit": "ns",
            "range": "± 14844.629821670907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5911.619565217391,
            "unit": "ns",
            "range": "± 904.3747137717304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16915.225806451614,
            "unit": "ns",
            "range": "± 1543.3761209216425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1528449.0957446808,
            "unit": "ns",
            "range": "± 191492.33258296794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2708900.510638298,
            "unit": "ns",
            "range": "± 186510.54257298927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2208406.663265306,
            "unit": "ns",
            "range": "± 195815.2262956336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10078073.156862745,
            "unit": "ns",
            "range": "± 409057.90400418243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212279.8714285716,
            "unit": "ns",
            "range": "± 152865.79393807024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3310534.3571428573,
            "unit": "ns",
            "range": "± 169695.12093643105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4324814.6,
            "unit": "ns",
            "range": "± 99525.0581950411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4243926.208333333,
            "unit": "ns",
            "range": "± 291296.3001053961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16537480.0625,
            "unit": "ns",
            "range": "± 2771477.808956403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5208360.194110577,
            "unit": "ns",
            "range": "± 63244.10445823379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1661396.9032552084,
            "unit": "ns",
            "range": "± 11135.528820678612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 990401.0501302084,
            "unit": "ns",
            "range": "± 6121.522663224092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575823.0655691964,
            "unit": "ns",
            "range": "± 18399.348899709206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823808.7675083706,
            "unit": "ns",
            "range": "± 4983.7761525783735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 717038.4139322917,
            "unit": "ns",
            "range": "± 5645.557376999556"
          }
        ]
      }
    ]
  }
}