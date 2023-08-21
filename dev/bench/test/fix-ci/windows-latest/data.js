window.BENCHMARK_DATA = {
  "lastUpdate": 1692600785881,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050039ddb74fe85fc58cfa0892c3808a77c22fe3",
          "message": "Merge pull request #3356 from moreal/feature/rocksdb/readonly\n\nfeat(#3354): support rocksdb read-only mode",
          "timestamp": "2023-08-21T13:02:45+09:00",
          "tree_id": "d45cec8ff9a732a463bb60493b2d7699df2cc75a",
          "url": "https://github.com/planetarium/libplanet/commit/050039ddb74fe85fc58cfa0892c3808a77c22fe3"
        },
        "date": 1692591596746,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415364.9484536082,
            "unit": "ns",
            "range": "± 117308.5968017309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626117.9487179485,
            "unit": "ns",
            "range": "± 135377.35475386266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1765150,
            "unit": "ns",
            "range": "± 99201.55300336568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4543056.521739131,
            "unit": "ns",
            "range": "± 173094.42336761224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52637.234042553195,
            "unit": "ns",
            "range": "± 3304.9973254118045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7704137.037037037,
            "unit": "ns",
            "range": "± 215244.38016097702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20859814.285714287,
            "unit": "ns",
            "range": "± 208568.14365921405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53096700,
            "unit": "ns",
            "range": "± 561241.5097867338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107399593.33333333,
            "unit": "ns",
            "range": "± 1311673.9868616452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214343933.33333334,
            "unit": "ns",
            "range": "± 2119683.7734727813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4552156.752232143,
            "unit": "ns",
            "range": "± 15593.41578113426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1431989.5052083333,
            "unit": "ns",
            "range": "± 4890.61658904552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073760.9765625,
            "unit": "ns",
            "range": "± 1924.350659015551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671580.5989583335,
            "unit": "ns",
            "range": "± 2957.868455349839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843682.8822544643,
            "unit": "ns",
            "range": "± 2307.990033740815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774389.9639423077,
            "unit": "ns",
            "range": "± 1627.8717298730155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346822.727272727,
            "unit": "ns",
            "range": "± 107843.71306758201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575476.923076923,
            "unit": "ns",
            "range": "± 147030.00709523665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4243867.647058823,
            "unit": "ns",
            "range": "± 135740.62994747862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3980707.843137255,
            "unit": "ns",
            "range": "± 161554.06629749344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6310695.652173913,
            "unit": "ns",
            "range": "± 217237.84298579468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276448.3333333333,
            "unit": "ns",
            "range": "± 12230.906831502885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262168.08510638296,
            "unit": "ns",
            "range": "± 10119.93526321833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229224.48979591837,
            "unit": "ns",
            "range": "± 14913.005886888432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150371.4285714286,
            "unit": "ns",
            "range": "± 66930.33609739227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614218.75,
            "unit": "ns",
            "range": "± 69908.21810297652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21873.684210526317,
            "unit": "ns",
            "range": "± 2041.5477298507324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92711.70212765958,
            "unit": "ns",
            "range": "± 7280.1373079184405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75038.70967741935,
            "unit": "ns",
            "range": "± 5327.819365043804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84825.58139534884,
            "unit": "ns",
            "range": "± 10740.217831578997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5436.458333333333,
            "unit": "ns",
            "range": "± 910.4215092809503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20700,
            "unit": "ns",
            "range": "± 2510.286529768756"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "732587ddc261c59e44eb826e936333a84cf1cadd",
          "message": "refactor: add console output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:09:24+09:00",
          "tree_id": "e4b2c411230a697f2aef03ec5700c4eb1e097dff",
          "url": "https://github.com/planetarium/libplanet/commit/732587ddc261c59e44eb826e936333a84cf1cadd"
        },
        "date": 1692592079569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613954.4444444445,
            "unit": "ns",
            "range": "± 117602.283629428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3101039.361702128,
            "unit": "ns",
            "range": "± 182590.32068592886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2020795.6989247312,
            "unit": "ns",
            "range": "± 128823.6576250976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5542413.978494624,
            "unit": "ns",
            "range": "± 346364.0675683287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55470.65217391304,
            "unit": "ns",
            "range": "± 3304.8927446305584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9190042.857142856,
            "unit": "ns",
            "range": "± 215264.35741066976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25568094.285714287,
            "unit": "ns",
            "range": "± 795840.0955050238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65092178.571428575,
            "unit": "ns",
            "range": "± 1102182.801694732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129167457.14285715,
            "unit": "ns",
            "range": "± 1970916.1168249752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260758942.85714287,
            "unit": "ns",
            "range": "± 6119300.282023381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5652807.421875,
            "unit": "ns",
            "range": "± 110197.07102276105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1795403.3804086538,
            "unit": "ns",
            "range": "± 26020.551707549686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348840.1742788462,
            "unit": "ns",
            "range": "± 9754.457179554436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335097.7864583335,
            "unit": "ns",
            "range": "± 51227.66452712258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032602.8053977273,
            "unit": "ns",
            "range": "± 25174.912867202624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970956.8917410715,
            "unit": "ns",
            "range": "± 12063.103233978729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3944532.2580645164,
            "unit": "ns",
            "range": "± 173576.48644697404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4171551.6483516484,
            "unit": "ns",
            "range": "± 226385.9238668132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4995838.095238095,
            "unit": "ns",
            "range": "± 181748.6551127897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4599195.348837209,
            "unit": "ns",
            "range": "± 167451.84944518682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7338158.620689655,
            "unit": "ns",
            "range": "± 318231.89604629826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297483.87096774194,
            "unit": "ns",
            "range": "± 7051.812853169675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290186.84210526315,
            "unit": "ns",
            "range": "± 9800.032295937726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262776.74418604653,
            "unit": "ns",
            "range": "± 14166.343082595075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4951013.043478261,
            "unit": "ns",
            "range": "± 102308.2077234712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4642691.304347826,
            "unit": "ns",
            "range": "± 117071.86570278289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23755.434782608696,
            "unit": "ns",
            "range": "± 2101.980443988179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100288.23529411765,
            "unit": "ns",
            "range": "± 5430.8293623557365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84871.01449275362,
            "unit": "ns",
            "range": "± 4025.218351741758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99023.71134020618,
            "unit": "ns",
            "range": "± 18200.187574559248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6237.894736842105,
            "unit": "ns",
            "range": "± 1108.3991664585672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23203.296703296703,
            "unit": "ns",
            "range": "± 2052.0694459469473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "453591bbb880d9ef869ca01c018ad4a3c76afa44",
          "message": "refactor: add file output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:23:17+09:00",
          "tree_id": "a6284d52c357e9b9e7429d9de734b2bfbf826b3b",
          "url": "https://github.com/planetarium/libplanet/commit/453591bbb880d9ef869ca01c018ad4a3c76afa44"
        },
        "date": 1692593033012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722390.8163265307,
            "unit": "ns",
            "range": "± 242393.57228248197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112394.7916666665,
            "unit": "ns",
            "range": "± 291329.7442200584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055526.0416666667,
            "unit": "ns",
            "range": "± 320840.77679050574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5536637,
            "unit": "ns",
            "range": "± 552865.3078437565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55759.782608695656,
            "unit": "ns",
            "range": "± 10632.110391676391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9213804.210526315,
            "unit": "ns",
            "range": "± 603890.304417381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24350369.587628867,
            "unit": "ns",
            "range": "± 1659054.8545305831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64376456.666666664,
            "unit": "ns",
            "range": "± 2868554.517780728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124710885.71428572,
            "unit": "ns",
            "range": "± 4547515.963558053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259269240.9090909,
            "unit": "ns",
            "range": "± 6042895.690841404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5380041.287878788,
            "unit": "ns",
            "range": "± 169583.9289089944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1707494.9761284722,
            "unit": "ns",
            "range": "± 35719.63591779657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242635.8854166667,
            "unit": "ns",
            "range": "± 21372.887462279614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3065404.8270089286,
            "unit": "ns",
            "range": "± 38634.78391940209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036988.8400607639,
            "unit": "ns",
            "range": "± 34269.52394299933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939761.6666666666,
            "unit": "ns",
            "range": "± 11375.643818950819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3748559.793814433,
            "unit": "ns",
            "range": "± 311936.5983456528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3854100,
            "unit": "ns",
            "range": "± 397921.68281230156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5063942.708333333,
            "unit": "ns",
            "range": "± 405352.69834001985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4292243.157894737,
            "unit": "ns",
            "range": "± 452941.2440531218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7378039.795918368,
            "unit": "ns",
            "range": "± 598814.7746835739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318896.84210526315,
            "unit": "ns",
            "range": "± 58644.004341797474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317947.36842105264,
            "unit": "ns",
            "range": "± 56800.51476037583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247464.58333333334,
            "unit": "ns",
            "range": "± 43549.814137416346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4494325.510204081,
            "unit": "ns",
            "range": "± 362931.5684301093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4103921.052631579,
            "unit": "ns",
            "range": "± 398580.34078803984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27644.897959183672,
            "unit": "ns",
            "range": "± 11409.763611029957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97948.94736842105,
            "unit": "ns",
            "range": "± 23933.167116825167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106079.34782608696,
            "unit": "ns",
            "range": "± 25261.357093540275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124465.625,
            "unit": "ns",
            "range": "± 34318.611884960126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6512.5,
            "unit": "ns",
            "range": "± 1156.5716778380022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19173.493975903613,
            "unit": "ns",
            "range": "± 3601.6623647417887"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "47d3e69c92a75415b1b8592198fc2c0139660174",
          "message": "refactor: dump linux core",
          "timestamp": "2023-08-21T13:31:21+09:00",
          "tree_id": "3fd022f76677056b587770f46908c2b4e0d089bd",
          "url": "https://github.com/planetarium/libplanet/commit/47d3e69c92a75415b1b8592198fc2c0139660174"
        },
        "date": 1692593319103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559760.4166666667,
            "unit": "ns",
            "range": "± 95980.73324114986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006321.8181818184,
            "unit": "ns",
            "range": "± 127610.93023386168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1996884.6153846155,
            "unit": "ns",
            "range": "± 123659.647530431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5068345.454545454,
            "unit": "ns",
            "range": "± 156882.82468714725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56771.875,
            "unit": "ns",
            "range": "± 4214.653713065005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9088871.875,
            "unit": "ns",
            "range": "± 280867.758154197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24488400,
            "unit": "ns",
            "range": "± 234993.7729671434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60738073.333333336,
            "unit": "ns",
            "range": "± 906196.894772454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122140492.3076923,
            "unit": "ns",
            "range": "± 1304218.2629590407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245126820,
            "unit": "ns",
            "range": "± 3825586.696218727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5566773.549107143,
            "unit": "ns",
            "range": "± 38725.98071570863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1750503.41796875,
            "unit": "ns",
            "range": "± 7619.28307541195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301201.7159598214,
            "unit": "ns",
            "range": "± 12699.710096838236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163755.4837740385,
            "unit": "ns",
            "range": "± 16947.95357278759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010396.6015625,
            "unit": "ns",
            "range": "± 8341.362950050538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 928598.3072916666,
            "unit": "ns",
            "range": "± 7698.684704931001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3907525.5319148935,
            "unit": "ns",
            "range": "± 150524.45484991165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4088386.4864864866,
            "unit": "ns",
            "range": "± 134889.4756667311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4938045.098039215,
            "unit": "ns",
            "range": "± 201200.65339230435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452747.05882353,
            "unit": "ns",
            "range": "± 143571.6825191875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7030513.793103448,
            "unit": "ns",
            "range": "± 203834.78555672397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301329.6296296296,
            "unit": "ns",
            "range": "± 7704.834387219035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289829.4117647059,
            "unit": "ns",
            "range": "± 5952.495769200759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265433.58208955225,
            "unit": "ns",
            "range": "± 12556.594271596601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4835371.428571428,
            "unit": "ns",
            "range": "± 60333.60051951443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4471573.333333333,
            "unit": "ns",
            "range": "± 80224.16332347992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24579.79797979798,
            "unit": "ns",
            "range": "± 2200.7874192874324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99831.9587628866,
            "unit": "ns",
            "range": "± 6609.31392039157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84641.37931034483,
            "unit": "ns",
            "range": "± 5412.185899885167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94272.34042553192,
            "unit": "ns",
            "range": "± 13665.37421836759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6063.684210526316,
            "unit": "ns",
            "range": "± 860.5553039352084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22912.76595744681,
            "unit": "ns",
            "range": "± 2376.451861496765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1be722264dae1d03dba687fd2ce39f1375243e6f",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T13:55:52+09:00",
          "tree_id": "c56415f9d4061f4f5ef8ba079576b88d8bda8735",
          "url": "https://github.com/planetarium/libplanet/commit/1be722264dae1d03dba687fd2ce39f1375243e6f"
        },
        "date": 1692595054932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677038.7096774194,
            "unit": "ns",
            "range": "± 143836.05555137363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3095435.294117647,
            "unit": "ns",
            "range": "± 124863.86959169479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075495.6043956045,
            "unit": "ns",
            "range": "± 143500.04096947765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5302447.1698113205,
            "unit": "ns",
            "range": "± 217444.95997110626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64460.91954022989,
            "unit": "ns",
            "range": "± 7328.28791709063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10187986.842105264,
            "unit": "ns",
            "range": "± 349063.2531319438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27612467.948717948,
            "unit": "ns",
            "range": "± 1415973.177849053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63774456.25,
            "unit": "ns",
            "range": "± 1065928.619854538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129272702.94117647,
            "unit": "ns",
            "range": "± 4162775.7234723186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259627369.5652174,
            "unit": "ns",
            "range": "± 6507843.775394483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5849356.492456896,
            "unit": "ns",
            "range": "± 171389.30181090496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839987.513950893,
            "unit": "ns",
            "range": "± 51396.57609376296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369350.1188858696,
            "unit": "ns",
            "range": "± 34111.758864229996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3348642.153532609,
            "unit": "ns",
            "range": "± 71373.1160791163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037991.0750679348,
            "unit": "ns",
            "range": "± 25499.144723351706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943136.4118303572,
            "unit": "ns",
            "range": "± 12214.734266264742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4108133.3333333335,
            "unit": "ns",
            "range": "± 82689.95244462363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4344522.857142857,
            "unit": "ns",
            "range": "± 141775.06643336435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5165092.857142857,
            "unit": "ns",
            "range": "± 80400.32973799313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668175.757575758,
            "unit": "ns",
            "range": "± 145968.1408525141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7199203.571428572,
            "unit": "ns",
            "range": "± 156748.50222485524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313748.275862069,
            "unit": "ns",
            "range": "± 12564.517588763785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305472.0930232558,
            "unit": "ns",
            "range": "± 11324.022623259503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297617.14285714284,
            "unit": "ns",
            "range": "± 14334.350871484638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5159577.777777778,
            "unit": "ns",
            "range": "± 103639.88305414632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4723154.166666667,
            "unit": "ns",
            "range": "± 121468.71838914514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31004.639175257733,
            "unit": "ns",
            "range": "± 3109.6295538535323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120441.23711340207,
            "unit": "ns",
            "range": "± 10725.502635631654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107284.94623655915,
            "unit": "ns",
            "range": "± 9491.425721425572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112488.65979381443,
            "unit": "ns",
            "range": "± 18615.830384204484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9074.226804123711,
            "unit": "ns",
            "range": "± 1244.2600169139575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29243.617021276597,
            "unit": "ns",
            "range": "± 2673.8301033615885"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "dd8d483365b9cf8bfb306654bde8d7cdc99df2d7",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:20:52+09:00",
          "tree_id": "8e1f8f785d7086e9ae7b6c3dbd7d8db2723ef781",
          "url": "https://github.com/planetarium/libplanet/commit/dd8d483365b9cf8bfb306654bde8d7cdc99df2d7"
        },
        "date": 1692596084011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1317118,
            "unit": "ns",
            "range": "± 108722.98260006733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2361606.4516129033,
            "unit": "ns",
            "range": "± 71522.01495802474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665571.875,
            "unit": "ns",
            "range": "± 116025.78543094816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4198564.634146341,
            "unit": "ns",
            "range": "± 133923.63600383542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43098.529411764706,
            "unit": "ns",
            "range": "± 2073.463656888027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6979100,
            "unit": "ns",
            "range": "± 62661.98437421437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17579140,
            "unit": "ns",
            "range": "± 83994.8875995268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45538053.333333336,
            "unit": "ns",
            "range": "± 566494.3662141584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90995000,
            "unit": "ns",
            "range": "± 1125740.1032209876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185029907.14285713,
            "unit": "ns",
            "range": "± 1298327.570059199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4440202.884615385,
            "unit": "ns",
            "range": "± 4769.211758432922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1379215.7784598214,
            "unit": "ns",
            "range": "± 1293.5960560911499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 992006.7103794643,
            "unit": "ns",
            "range": "± 1039.684333429413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532438.2291666665,
            "unit": "ns",
            "range": "± 2799.438283460471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813318.2454427084,
            "unit": "ns",
            "range": "± 654.2037183955445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732484.6549479166,
            "unit": "ns",
            "range": "± 538.9133373258413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2954427.272727273,
            "unit": "ns",
            "range": "± 66716.880007402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089650,
            "unit": "ns",
            "range": "± 72611.56768659358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3882747.0588235296,
            "unit": "ns",
            "range": "± 77877.67746317826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3357726.1904761903,
            "unit": "ns",
            "range": "± 112615.21159547915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5500275,
            "unit": "ns",
            "range": "± 107026.85332818738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242968.085106383,
            "unit": "ns",
            "range": "± 9090.94404584988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237158.33333333334,
            "unit": "ns",
            "range": "± 6155.161613861462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215040.81632653062,
            "unit": "ns",
            "range": "± 13291.768142638843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3772080,
            "unit": "ns",
            "range": "± 28864.936712706844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3337450,
            "unit": "ns",
            "range": "± 37629.749891848565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19817.708333333332,
            "unit": "ns",
            "range": "± 1663.9834761114453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81294.18604651163,
            "unit": "ns",
            "range": "± 4410.531637987121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65828.88888888889,
            "unit": "ns",
            "range": "± 2488.4845901784397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71155.71428571429,
            "unit": "ns",
            "range": "± 2691.0418064646983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4415.4639175257735,
            "unit": "ns",
            "range": "± 498.40165491498203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17465.263157894737,
            "unit": "ns",
            "range": "± 1479.5606320978375"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:46:34+09:00",
          "tree_id": "9314475d2f7f6fb3e7b3b845f3d8d66ded773606",
          "url": "https://github.com/planetarium/libplanet/commit/ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513"
        },
        "date": 1692598130866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660289.3617021276,
            "unit": "ns",
            "range": "± 177202.59923582457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3140743.6170212766,
            "unit": "ns",
            "range": "± 317406.2494924824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050589.3617021276,
            "unit": "ns",
            "range": "± 223435.80611778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5697060.869565218,
            "unit": "ns",
            "range": "± 454895.0615509157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60472.916666666664,
            "unit": "ns",
            "range": "± 13935.7735733514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9686371.42857143,
            "unit": "ns",
            "range": "± 1008704.456425355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26125871.57894737,
            "unit": "ns",
            "range": "± 1565601.1573740244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77165565.51724137,
            "unit": "ns",
            "range": "± 2111849.4921134654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155138953.33333334,
            "unit": "ns",
            "range": "± 2678672.672603426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286433265.38461536,
            "unit": "ns",
            "range": "± 11699946.674151724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5990217.686631944,
            "unit": "ns",
            "range": "± 196737.91786058788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1877147.7914663462,
            "unit": "ns",
            "range": "± 65736.053257474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368143.1849888393,
            "unit": "ns",
            "range": "± 39196.81847667435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3633453.1644570706,
            "unit": "ns",
            "range": "± 226090.49367173217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1106378.9481026786,
            "unit": "ns",
            "range": "± 12876.14135564599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1036908.2566784275,
            "unit": "ns",
            "range": "± 31092.28472597623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4225903.157894737,
            "unit": "ns",
            "range": "± 310022.7923853861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4702494.680851064,
            "unit": "ns",
            "range": "± 464373.3137116424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5487296.923076923,
            "unit": "ns",
            "range": "± 255345.4069792222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4858605.555555556,
            "unit": "ns",
            "range": "± 359768.9706130589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7731183.333333333,
            "unit": "ns",
            "range": "± 324979.7542315173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316074.2268041237,
            "unit": "ns",
            "range": "± 36704.57589079357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314250.5376344086,
            "unit": "ns",
            "range": "± 36211.5601997361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274727.36842105264,
            "unit": "ns",
            "range": "± 31261.972828482518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5050271.739130435,
            "unit": "ns",
            "range": "± 346330.2696503196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4723301.851851852,
            "unit": "ns",
            "range": "± 127446.252231979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29796.875,
            "unit": "ns",
            "range": "± 8106.987929525594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 139440.21739130435,
            "unit": "ns",
            "range": "± 11608.182598879335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135690.76923076922,
            "unit": "ns",
            "range": "± 6318.764789224114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135935.10638297873,
            "unit": "ns",
            "range": "± 17516.079908612686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8348.91304347826,
            "unit": "ns",
            "range": "± 2310.5346208429155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29337.63440860215,
            "unit": "ns",
            "range": "± 5488.484268041796"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "75fb1636b37a96065bfc58c7fc831e7dc5ff71a8",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T15:02:48+09:00",
          "tree_id": "81d385dcaa484a315b2a08cb206277449c29ebd8",
          "url": "https://github.com/planetarium/libplanet/commit/75fb1636b37a96065bfc58c7fc831e7dc5ff71a8"
        },
        "date": 1692598928297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580760.824742268,
            "unit": "ns",
            "range": "± 122530.7177104829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3020728.125,
            "unit": "ns",
            "range": "± 139233.046009884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1953426.3157894737,
            "unit": "ns",
            "range": "± 132250.0800068344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5194075.384615385,
            "unit": "ns",
            "range": "± 240353.17700649472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52313.333333333336,
            "unit": "ns",
            "range": "± 3230.653741196295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8962725.925925925,
            "unit": "ns",
            "range": "± 247172.46017957805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24815583.333333332,
            "unit": "ns",
            "range": "± 372343.85733517626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62197257.692307696,
            "unit": "ns",
            "range": "± 549072.9800635772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124903907.14285715,
            "unit": "ns",
            "range": "± 1528105.871515596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249279613.33333334,
            "unit": "ns",
            "range": "± 3150590.8314080364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5491172.942708333,
            "unit": "ns",
            "range": "± 59396.87446409155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1709534.0364583333,
            "unit": "ns",
            "range": "± 8611.645407031308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303133.9583333333,
            "unit": "ns",
            "range": "± 9034.951015398632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3173638.7276785714,
            "unit": "ns",
            "range": "± 18900.685077159174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029490.2864583334,
            "unit": "ns",
            "range": "± 6262.17530894598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916047.12890625,
            "unit": "ns",
            "range": "± 7947.480070352883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3874110.638297872,
            "unit": "ns",
            "range": "± 150070.6257415264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3960982.3076923075,
            "unit": "ns",
            "range": "± 185006.46872786328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4881661.904761905,
            "unit": "ns",
            "range": "± 114265.7012239039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4568940.909090909,
            "unit": "ns",
            "range": "± 100760.80898695497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7098332.142857143,
            "unit": "ns",
            "range": "± 183279.78622773036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303817.14285714284,
            "unit": "ns",
            "range": "± 8952.636342384942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297660.71428571426,
            "unit": "ns",
            "range": "± 8420.888458699737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270304.1237113402,
            "unit": "ns",
            "range": "± 15624.979450158307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4962861.538461538,
            "unit": "ns",
            "range": "± 66290.16440948006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4521168.75,
            "unit": "ns",
            "range": "± 83072.96165620517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23026.88172043011,
            "unit": "ns",
            "range": "± 2355.0657604104977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100438.14432989691,
            "unit": "ns",
            "range": "± 8454.257350823424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85661.45833333333,
            "unit": "ns",
            "range": "± 6229.765050763896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95492.85714285714,
            "unit": "ns",
            "range": "± 14872.77489205329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6108.333333333333,
            "unit": "ns",
            "range": "± 756.3995973539336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22694.791666666668,
            "unit": "ns",
            "range": "± 2264.1075756321934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "d8ee9a4f08cefc93a43afe68e87475e68609627a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:30:20+09:00",
          "tree_id": "721ab642828cec0656e765138744693a9f1245ef",
          "url": "https://github.com/planetarium/libplanet/commit/d8ee9a4f08cefc93a43afe68e87475e68609627a"
        },
        "date": 1692600701734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1729887.2340425532,
            "unit": "ns",
            "range": "± 174255.12271456243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3332941.5730337077,
            "unit": "ns",
            "range": "± 180746.9877838964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212661.4583333335,
            "unit": "ns",
            "range": "± 192121.02017645116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5694847.619047619,
            "unit": "ns",
            "range": "± 203142.57937509898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67553.125,
            "unit": "ns",
            "range": "± 12397.766803361254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9760179.661016949,
            "unit": "ns",
            "range": "± 428925.0580710602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26082891.42857143,
            "unit": "ns",
            "range": "± 856058.5825100263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66584896,
            "unit": "ns",
            "range": "± 1756957.2221314895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134503460,
            "unit": "ns",
            "range": "± 3922747.335873603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270011278.94736844,
            "unit": "ns",
            "range": "± 5392843.617402083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5801062.319711538,
            "unit": "ns",
            "range": "± 155433.3828131513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1799351.5258789062,
            "unit": "ns",
            "range": "± 34668.27904924356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300307.5317382812,
            "unit": "ns",
            "range": "± 23831.357131795237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230067.333984375,
            "unit": "ns",
            "range": "± 54660.758332674006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054728.208705357,
            "unit": "ns",
            "range": "± 12446.956268286127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 971565.3645833334,
            "unit": "ns",
            "range": "± 16123.606175887788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4014013.5416666665,
            "unit": "ns",
            "range": "± 250491.06239746112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4332166.666666667,
            "unit": "ns",
            "range": "± 193133.36102611313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5323640.909090909,
            "unit": "ns",
            "range": "± 125194.66616924795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4832040.740740741,
            "unit": "ns",
            "range": "± 133137.74896486042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7617894,
            "unit": "ns",
            "range": "± 300536.63596157794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326997.7528089888,
            "unit": "ns",
            "range": "± 19499.405454386702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316080.6451612903,
            "unit": "ns",
            "range": "± 28588.049563412198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278370.652173913,
            "unit": "ns",
            "range": "± 27080.73618086236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5223132.584269663,
            "unit": "ns",
            "range": "± 332774.94093240227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4574488.461538462,
            "unit": "ns",
            "range": "± 187841.65489910322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25838.709677419356,
            "unit": "ns",
            "range": "± 4127.295994960141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116662.76595744681,
            "unit": "ns",
            "range": "± 12840.150269131682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129167.85714285714,
            "unit": "ns",
            "range": "± 3701.556586629625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129341.05263157895,
            "unit": "ns",
            "range": "± 16429.044692813917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10041.489361702128,
            "unit": "ns",
            "range": "± 1013.8195184620597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29426.315789473683,
            "unit": "ns",
            "range": "± 4963.873970280989"
          }
        ]
      }
    ]
  }
}