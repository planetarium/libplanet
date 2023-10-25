window.BENCHMARK_DATA = {
  "lastUpdate": 1698195060893,
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
      },
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
          "id": "1691d834a585bd5b96539e3c138d3b1f111a77d9",
          "message": "Bump postcss from 8.4.21 to 8.4.31\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.21 to 8.4.31.\n- [Release notes](https://github.com/postcss/postcss/releases)\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/postcss/postcss/compare/8.4.21...8.4.31)\n\n---\nupdated-dependencies:\n- dependency-name: postcss\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-25T00:31:37Z",
          "tree_id": "82d924812613895c5f3c2a2cf73e7fd310075947",
          "url": "https://github.com/planetarium/libplanet/commit/1691d834a585bd5b96539e3c138d3b1f111a77d9"
        },
        "date": 1698195007334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7899792.454545454,
            "unit": "ns",
            "range": "± 190570.6627018358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20516391.26470588,
            "unit": "ns",
            "range": "± 649833.525098267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51104685.961538464,
            "unit": "ns",
            "range": "± 1397669.9048525437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99603884.27777778,
            "unit": "ns",
            "range": "± 2692612.532272719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215338061.82352942,
            "unit": "ns",
            "range": "± 4367700.233787488"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62294.6914893617,
            "unit": "ns",
            "range": "± 8518.80061384356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304530.90860215056,
            "unit": "ns",
            "range": "± 22241.06951811199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305752.0842105263,
            "unit": "ns",
            "range": "± 22635.157904812855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286100.4591836735,
            "unit": "ns",
            "range": "± 19612.808425843356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4096711.6981132077,
            "unit": "ns",
            "range": "± 170014.94799808552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3907312.878378378,
            "unit": "ns",
            "range": "± 188072.33689187604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17792.5,
            "unit": "ns",
            "range": "± 2135.904616844597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90171.02105263158,
            "unit": "ns",
            "range": "± 12016.462134654883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84511.54736842106,
            "unit": "ns",
            "range": "± 10750.018742950926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88930.22043010753,
            "unit": "ns",
            "range": "± 11535.751225387734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5528.5,
            "unit": "ns",
            "range": "± 941.2864005774693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18250.25806451613,
            "unit": "ns",
            "range": "± 2354.303667491893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529860.4141414142,
            "unit": "ns",
            "range": "± 172425.2257407103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944418.65625,
            "unit": "ns",
            "range": "± 240430.45580974262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2371323.01010101,
            "unit": "ns",
            "range": "± 214219.1184241459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10722344.094936708,
            "unit": "ns",
            "range": "± 621520.7634270034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270736.720588235,
            "unit": "ns",
            "range": "± 155684.79541630353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419150.3917525774,
            "unit": "ns",
            "range": "± 206300.74131443782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4305204.855932203,
            "unit": "ns",
            "range": "± 164143.3209219984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4936583.252747253,
            "unit": "ns",
            "range": "± 991552.6779236424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15998319.43877551,
            "unit": "ns",
            "range": "± 2035693.4744543901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5401481.444196428,
            "unit": "ns",
            "range": "± 82239.61193802339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1669700.3641183036,
            "unit": "ns",
            "range": "± 29297.436621240533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1018774.71875,
            "unit": "ns",
            "range": "± 17757.621647746528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2736289.4536994486,
            "unit": "ns",
            "range": "± 54300.792287985496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811463.9819335938,
            "unit": "ns",
            "range": "± 15870.653844747334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739166.8280552456,
            "unit": "ns",
            "range": "± 8766.211083558099"
          }
        ]
      }
    ]
  }
}