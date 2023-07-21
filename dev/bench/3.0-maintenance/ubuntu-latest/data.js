window.BENCHMARK_DATA = {
  "lastUpdate": 1689919750275,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753071809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292240.29411764705,
            "unit": "ns",
            "range": "± 9275.452538267948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281870.3793103448,
            "unit": "ns",
            "range": "± 7231.093191478199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243206.66666666666,
            "unit": "ns",
            "range": "± 8024.45723146738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4575911.666666667,
            "unit": "ns",
            "range": "± 50764.77140226093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4174435.066666667,
            "unit": "ns",
            "range": "± 72202.91866327316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21913.290322580644,
            "unit": "ns",
            "range": "± 1585.4549791411896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96389.94680851063,
            "unit": "ns",
            "range": "± 5486.953516261401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77892.94736842105,
            "unit": "ns",
            "range": "± 4593.80998265872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102107.59302325582,
            "unit": "ns",
            "range": "± 9193.412173786577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5749.6082474226805,
            "unit": "ns",
            "range": "± 917.9091793842886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21284.225806451614,
            "unit": "ns",
            "range": "± 2142.2532130660948"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480078.7777777778,
            "unit": "ns",
            "range": "± 77415.42627894043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815450.54,
            "unit": "ns",
            "range": "± 113668.8550485549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1907914.530612245,
            "unit": "ns",
            "range": "± 114030.6329064947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5083599.666666667,
            "unit": "ns",
            "range": "± 197819.5553475099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6181964.544270833,
            "unit": "ns",
            "range": "± 22530.23044937188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1944319.986607143,
            "unit": "ns",
            "range": "± 3554.3806864014746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1393108.66171875,
            "unit": "ns",
            "range": "± 3291.2872353297603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685214.9596354165,
            "unit": "ns",
            "range": "± 2685.187832567481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842487.0293666294,
            "unit": "ns",
            "range": "± 464.0773280872932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775153.4371744791,
            "unit": "ns",
            "range": "± 340.5076726302806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3513533.6470588236,
            "unit": "ns",
            "range": "± 112901.56384586245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3710872.590909091,
            "unit": "ns",
            "range": "± 86281.1075246593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4460396.882352941,
            "unit": "ns",
            "range": "± 143185.52933948376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4323806.1,
            "unit": "ns",
            "range": "± 168904.05494827346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6625368.322580645,
            "unit": "ns",
            "range": "± 201553.65850254154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8252423.5625,
            "unit": "ns",
            "range": "± 135612.9977393852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22350846.133333333,
            "unit": "ns",
            "range": "± 295745.7934877439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57161501.35714286,
            "unit": "ns",
            "range": "± 539397.934541068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110421930.53333333,
            "unit": "ns",
            "range": "± 1600170.212933963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218473073.0625,
            "unit": "ns",
            "range": "± 4123756.474598251"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50407.114583333336,
            "unit": "ns",
            "range": "± 3190.868919341042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2944cbdfc0856cfea856725e91ccfa35e9d22e97",
          "message": "Merge pull request #3317 from OnedgeLee/release/3.0.0\n\nRelease 3.0.0",
          "timestamp": "2023-07-19T16:48:08+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/planetarium/libplanet/commit/2944cbdfc0856cfea856725e91ccfa35e9d22e97"
        },
        "date": 1689753909091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298537.325,
            "unit": "ns",
            "range": "± 10354.065240002632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279314.36842105264,
            "unit": "ns",
            "range": "± 9531.140031131106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246083.8,
            "unit": "ns",
            "range": "± 6498.724246598969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4504346.066666666,
            "unit": "ns",
            "range": "± 75344.03930870962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4464895,
            "unit": "ns",
            "range": "± 76090.2326037469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19036.40425531915,
            "unit": "ns",
            "range": "± 1252.0926424821935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88031.35483870968,
            "unit": "ns",
            "range": "± 5175.053592760009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73053.38095238095,
            "unit": "ns",
            "range": "± 1668.7177854925162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92297.94897959183,
            "unit": "ns",
            "range": "± 12947.508820907331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4897.946808510638,
            "unit": "ns",
            "range": "± 462.94883172566324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17869.91304347826,
            "unit": "ns",
            "range": "± 1233.4573552825107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1541571.4343434344,
            "unit": "ns",
            "range": "± 108965.70963579262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2836485.657142857,
            "unit": "ns",
            "range": "± 91154.77926967143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1920603.1805555555,
            "unit": "ns",
            "range": "± 94282.28540994257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5057797.105263158,
            "unit": "ns",
            "range": "± 157829.33282073162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6035229.1921875,
            "unit": "ns",
            "range": "± 14968.504167262401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927099.7233072917,
            "unit": "ns",
            "range": "± 4918.955755817859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401378.3967447917,
            "unit": "ns",
            "range": "± 2495.9976319282678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658143.219010417,
            "unit": "ns",
            "range": "± 2232.697694303504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850747.953500601,
            "unit": "ns",
            "range": "± 263.03252717933987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771202.4189077524,
            "unit": "ns",
            "range": "± 552.0247701978644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3545466.434782609,
            "unit": "ns",
            "range": "± 79257.16291565535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3706401.3076923075,
            "unit": "ns",
            "range": "± 53686.86674657129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4509790.80952381,
            "unit": "ns",
            "range": "± 103558.90815068448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4192617.888888889,
            "unit": "ns",
            "range": "± 84210.59804819098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6799024.62962963,
            "unit": "ns",
            "range": "± 284560.0532144444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7960978.071428572,
            "unit": "ns",
            "range": "± 66227.01101452172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22377986.6,
            "unit": "ns",
            "range": "± 268450.7907589663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55766664.8125,
            "unit": "ns",
            "range": "± 1079023.6276265203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111349935.66666667,
            "unit": "ns",
            "range": "± 1934291.906068422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220764511.64285713,
            "unit": "ns",
            "range": "± 1911059.2068801334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47605.23333333333,
            "unit": "ns",
            "range": "± 2626.108472433834"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55e702f061b2cec4b9aea6c7cb7fb89f796af97e",
          "message": "Merge pull request #3319 from OnedgeLee/prepare/3.0.1\n\n🔧 Prepare 3.0.1",
          "timestamp": "2023-07-19T17:22:11+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/planetarium/libplanet/commit/55e702f061b2cec4b9aea6c7cb7fb89f796af97e"
        },
        "date": 1689755826927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524825.1363636365,
            "unit": "ns",
            "range": "± 71740.2266752196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2784265.4166666665,
            "unit": "ns",
            "range": "± 108548.41304715945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1914465.0972222222,
            "unit": "ns",
            "range": "± 94408.86717920535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5171152.625,
            "unit": "ns",
            "range": "± 201790.76444332712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3915256.8571428573,
            "unit": "ns",
            "range": "± 63470.059004053415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4004655.25,
            "unit": "ns",
            "range": "± 62218.903010587615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4845095.428571428,
            "unit": "ns",
            "range": "± 58459.872031642735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4448807.176470588,
            "unit": "ns",
            "range": "± 63663.98744113042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6930769.125,
            "unit": "ns",
            "range": "± 143617.32502286354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8455501.157894736,
            "unit": "ns",
            "range": "± 179064.95252755607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23414979.533333335,
            "unit": "ns",
            "range": "± 271927.16549285944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58914050.428571425,
            "unit": "ns",
            "range": "± 302854.90452556126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119105166.57142857,
            "unit": "ns",
            "range": "± 270301.19886148494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233580289.35714287,
            "unit": "ns",
            "range": "± 335893.5024856739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6128611.224888393,
            "unit": "ns",
            "range": "± 42343.80618104921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934564.6259114584,
            "unit": "ns",
            "range": "± 6122.846566862744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389967.4447916667,
            "unit": "ns",
            "range": "± 4329.625985947624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688176.68359375,
            "unit": "ns",
            "range": "± 6676.10506696844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847419.7223958333,
            "unit": "ns",
            "range": "± 1741.9077993940173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784512.9365234375,
            "unit": "ns",
            "range": "± 463.27836520244085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53817.78409090909,
            "unit": "ns",
            "range": "± 3171.465151270151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308162.2631578947,
            "unit": "ns",
            "range": "± 4544.4197141122095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297940.6060606061,
            "unit": "ns",
            "range": "± 9351.890497178212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 268087.22222222225,
            "unit": "ns",
            "range": "± 5487.63280751048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4666346.2,
            "unit": "ns",
            "range": "± 48288.53378272853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4358104.5,
            "unit": "ns",
            "range": "± 50106.21389493139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27589.852631578946,
            "unit": "ns",
            "range": "± 3811.0657105843675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99951.28125,
            "unit": "ns",
            "range": "± 8964.99879320522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95797.26530612246,
            "unit": "ns",
            "range": "± 10142.786409842767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106774.03296703297,
            "unit": "ns",
            "range": "± 11065.529092587534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7496.9473684210525,
            "unit": "ns",
            "range": "± 982.9878721403005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26826.40625,
            "unit": "ns",
            "range": "± 3593.314691942378"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c454b80d65b60a7ba6e1e2dffdd4cfb2428b00e0",
          "message": "Merge pull request #3326 from greymistcube/chore/backport-fixes\n\n🔨 Fix tests and builds",
          "timestamp": "2023-07-21T12:52:03+09:00",
          "tree_id": "8ab99b0372c8aface09570a6bbc0942e1ca8b34d",
          "url": "https://github.com/planetarium/libplanet/commit/c454b80d65b60a7ba6e1e2dffdd4cfb2428b00e0"
        },
        "date": 1689912181030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279475.9,
            "unit": "ns",
            "range": "± 6260.522097784026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260035.9705882353,
            "unit": "ns",
            "range": "± 7703.2913685125295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226313.8,
            "unit": "ns",
            "range": "± 1627.9160736527983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4222185.266666667,
            "unit": "ns",
            "range": "± 21508.433696265907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825248.5,
            "unit": "ns",
            "range": "± 17599.21940159434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16353.476744186046,
            "unit": "ns",
            "range": "± 1031.3478414390752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81898.75757575757,
            "unit": "ns",
            "range": "± 3331.554767836718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71100.41666666667,
            "unit": "ns",
            "range": "± 806.8571416116343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86682.12244897959,
            "unit": "ns",
            "range": "± 11769.20870717735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4209.278350515464,
            "unit": "ns",
            "range": "± 470.39045709982696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16722.947916666668,
            "unit": "ns",
            "range": "± 1869.81268056901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412453.0303030303,
            "unit": "ns",
            "range": "± 117298.63274360653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2593595,
            "unit": "ns",
            "range": "± 80811.33652011126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1760128.3647058823,
            "unit": "ns",
            "range": "± 95077.00070054086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4722400.8965517245,
            "unit": "ns",
            "range": "± 105322.7308742531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6133271.973214285,
            "unit": "ns",
            "range": "± 25782.789530634967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993173.1893028845,
            "unit": "ns",
            "range": "± 2652.7975891806823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396281.7710658482,
            "unit": "ns",
            "range": "± 721.5135874508426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607316.815011161,
            "unit": "ns",
            "range": "± 2325.7766738225664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828695.7084960938,
            "unit": "ns",
            "range": "± 619.680547631092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728930.8707682291,
            "unit": "ns",
            "range": "± 506.94852118628916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3278067.5,
            "unit": "ns",
            "range": "± 26014.80365173763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3423304.2,
            "unit": "ns",
            "range": "± 38779.69213426754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222192.933333334,
            "unit": "ns",
            "range": "± 76501.55794909078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3749361.285714286,
            "unit": "ns",
            "range": "± 52626.07075677134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6356498.914285715,
            "unit": "ns",
            "range": "± 203721.9779573264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7497015.785714285,
            "unit": "ns",
            "range": "± 15183.069701675417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19276358.785714287,
            "unit": "ns",
            "range": "± 59273.02694529985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48513934.86666667,
            "unit": "ns",
            "range": "± 564019.1687127394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98151519.07142857,
            "unit": "ns",
            "range": "± 1209697.1697347339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193561645.86666667,
            "unit": "ns",
            "range": "± 2453108.7239984423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50770.82352941176,
            "unit": "ns",
            "range": "± 998.7220731573748"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a4005d9c54b5f043d14a6adfa26be6b86f0c33c",
          "message": "Merge pull request #3327 from OnedgeLee/release/3.0.1\n\n🚀 Release 3.0.1",
          "timestamp": "2023-07-21T14:48:22+09:00",
          "tree_id": "d32e848727b58e4299385bc6aefbdc967485163f",
          "url": "https://github.com/planetarium/libplanet/commit/6a4005d9c54b5f043d14a6adfa26be6b86f0c33c"
        },
        "date": 1689919719943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 411433.3092783505,
            "unit": "ns",
            "range": "± 56775.55693315581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368321.78571428574,
            "unit": "ns",
            "range": "± 54641.60947582207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319587.05263157893,
            "unit": "ns",
            "range": "± 40995.50918175878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5549761.020618557,
            "unit": "ns",
            "range": "± 495053.7430064196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4961949.478260869,
            "unit": "ns",
            "range": "± 434245.19800925645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25749.397849462366,
            "unit": "ns",
            "range": "± 6035.540637395088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118579.5,
            "unit": "ns",
            "range": "± 23400.51840329634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127540.8,
            "unit": "ns",
            "range": "± 25907.9785384529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141980.75789473683,
            "unit": "ns",
            "range": "± 37812.89739069276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7647.103448275862,
            "unit": "ns",
            "range": "± 1390.3319499437835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25832.957446808512,
            "unit": "ns",
            "range": "± 8982.286451157239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1909622.3917525774,
            "unit": "ns",
            "range": "± 189615.54089468098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3790699.6808510637,
            "unit": "ns",
            "range": "± 428479.23984069086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2327196.673469388,
            "unit": "ns",
            "range": "± 284297.45374173956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6672721.55,
            "unit": "ns",
            "range": "± 655017.8947734035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7235052.445659722,
            "unit": "ns",
            "range": "± 270396.8117359469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2318570.3693181816,
            "unit": "ns",
            "range": "± 78699.22896216717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1676170.098046875,
            "unit": "ns",
            "range": "± 38357.65243891278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3158402.8770123105,
            "unit": "ns",
            "range": "± 100102.29953395571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1061682.8037923176,
            "unit": "ns",
            "range": "± 27020.563983341643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999817.30078125,
            "unit": "ns",
            "range": "± 14090.014941820331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4025545.0714285714,
            "unit": "ns",
            "range": "± 396022.2806192489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470934.760416667,
            "unit": "ns",
            "range": "± 370532.73848312674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5443636.680412371,
            "unit": "ns",
            "range": "± 652679.7876978602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4657847.469387755,
            "unit": "ns",
            "range": "± 476130.4195546886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8791832.262626262,
            "unit": "ns",
            "range": "± 560154.7264396375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9491258.978947368,
            "unit": "ns",
            "range": "± 628180.929449605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26426319.04761905,
            "unit": "ns",
            "range": "± 1212022.4746532128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69106740.11666666,
            "unit": "ns",
            "range": "± 2934644.695140337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139561421.8974359,
            "unit": "ns",
            "range": "± 4886526.354833622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280480073.65384614,
            "unit": "ns",
            "range": "± 7561265.9046652345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63129.62765957447,
            "unit": "ns",
            "range": "± 12896.785255001934"
          }
        ]
      }
    ]
  }
}