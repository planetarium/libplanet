window.BENCHMARK_DATA = {
  "lastUpdate": 1692602965135,
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
        "date": 1692591447881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388699.8225806453,
            "unit": "ns",
            "range": "± 150609.4068448194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3665781.8928571427,
            "unit": "ns",
            "range": "± 102745.31239062613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225774.7272727275,
            "unit": "ns",
            "range": "± 98241.47545627986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3999192.205128205,
            "unit": "ns",
            "range": "± 131978.79036444484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6214997.076923077,
            "unit": "ns",
            "range": "± 140852.54817174535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8062681.8,
            "unit": "ns",
            "range": "± 116189.09446931756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22352480.266666666,
            "unit": "ns",
            "range": "± 414516.2981694045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56618941.666666664,
            "unit": "ns",
            "range": "± 640873.1155086859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107688818,
            "unit": "ns",
            "range": "± 2082625.3796042148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218436275,
            "unit": "ns",
            "range": "± 4074314.211193514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47941.4578313253,
            "unit": "ns",
            "range": "± 2335.672427861683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4956039.426339285,
            "unit": "ns",
            "range": "± 33077.815149759124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577445.5559895833,
            "unit": "ns",
            "range": "± 6258.062857622922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082472.1643229167,
            "unit": "ns",
            "range": "± 6148.8014011505975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614134.15,
            "unit": "ns",
            "range": "± 8115.671060707216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851583.1902994792,
            "unit": "ns",
            "range": "± 2177.079938014023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750750.4694661458,
            "unit": "ns",
            "range": "± 2321.2822703050883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284366.2272727273,
            "unit": "ns",
            "range": "± 6810.639645030331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265719.40476190473,
            "unit": "ns",
            "range": "± 8664.878235276703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233895.14285714287,
            "unit": "ns",
            "range": "± 6089.734809735975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299259.1875,
            "unit": "ns",
            "range": "± 84214.94622865845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920432.294117647,
            "unit": "ns",
            "range": "± 78605.43423387207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18528.610526315788,
            "unit": "ns",
            "range": "± 1679.2946042827405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84068.92045454546,
            "unit": "ns",
            "range": "± 4575.087038231392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68670.07692307692,
            "unit": "ns",
            "range": "± 792.1579663108512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79049.82653061225,
            "unit": "ns",
            "range": "± 12652.762984208097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4619.8125,
            "unit": "ns",
            "range": "± 371.8165736941862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17708.55789473684,
            "unit": "ns",
            "range": "± 2036.9565726984338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444793.07,
            "unit": "ns",
            "range": "± 120693.0521831223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729190.65,
            "unit": "ns",
            "range": "± 95030.39693416048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775313.9759036144,
            "unit": "ns",
            "range": "± 93234.06569476107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696099.96,
            "unit": "ns",
            "range": "± 125134.48084909823"
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
        "date": 1692591720726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272397.0714285714,
            "unit": "ns",
            "range": "± 93656.97368072356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3366158.789473684,
            "unit": "ns",
            "range": "± 48681.400263549156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185455.8571428573,
            "unit": "ns",
            "range": "± 40401.1098588167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3662722.96875,
            "unit": "ns",
            "range": "± 102483.78564483147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5967977.892857143,
            "unit": "ns",
            "range": "± 73273.98864300184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7885250.6,
            "unit": "ns",
            "range": "± 94487.38525387549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19687699.076923076,
            "unit": "ns",
            "range": "± 79278.41709597631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51069052.928571425,
            "unit": "ns",
            "range": "± 267882.4461149573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102374692.26666667,
            "unit": "ns",
            "range": "± 1538493.699604002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204837988.26666668,
            "unit": "ns",
            "range": "± 1737275.596455573"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45652.57142857143,
            "unit": "ns",
            "range": "± 2231.1589148959492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5045556.678485577,
            "unit": "ns",
            "range": "± 16672.306674147432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1633048.0044642857,
            "unit": "ns",
            "range": "± 2288.020402698908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1059324.4027622768,
            "unit": "ns",
            "range": "± 514.3293640904006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2511573.024939904,
            "unit": "ns",
            "range": "± 3302.316782722729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792307.2255859375,
            "unit": "ns",
            "range": "± 415.3471633722214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742821.7671595982,
            "unit": "ns",
            "range": "± 953.9088287763332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271645.77777777775,
            "unit": "ns",
            "range": "± 5579.358687114239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253583.29545454544,
            "unit": "ns",
            "range": "± 9459.94361205365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215027.07142857142,
            "unit": "ns",
            "range": "± 3663.8671134847023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4173318.8666666667,
            "unit": "ns",
            "range": "± 31728.943674431364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745607.933333333,
            "unit": "ns",
            "range": "± 36119.08014266672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18173.347826086956,
            "unit": "ns",
            "range": "± 1356.6437937727187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83625.77631578948,
            "unit": "ns",
            "range": "± 4125.363568943338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68405.65384615384,
            "unit": "ns",
            "range": "± 1835.830688104057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69872.20512820513,
            "unit": "ns",
            "range": "± 3745.0798592528245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4417.670103092783,
            "unit": "ns",
            "range": "± 501.2663904562432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18219.063829787236,
            "unit": "ns",
            "range": "± 1222.5979790849462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301134.3764705881,
            "unit": "ns",
            "range": "± 69872.18836612224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2504902.8387096776,
            "unit": "ns",
            "range": "± 64267.18628719571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1681755.9789473685,
            "unit": "ns",
            "range": "± 119262.1784239458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4429202.8125,
            "unit": "ns",
            "range": "± 135899.8977099564"
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
        "date": 1692592574951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3238531.846153846,
            "unit": "ns",
            "range": "± 28740.17557892944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3551442.466666667,
            "unit": "ns",
            "range": "± 54235.320817008265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4231920.076923077,
            "unit": "ns",
            "range": "± 22850.73574476155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3850585.6086956523,
            "unit": "ns",
            "range": "± 95079.28398817251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6036155.5,
            "unit": "ns",
            "range": "± 130679.44245225252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7708876.866666666,
            "unit": "ns",
            "range": "± 87896.25170121767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20124954,
            "unit": "ns",
            "range": "± 120111.92137463996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51155550.53333333,
            "unit": "ns",
            "range": "± 264081.96982021286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103367586.06666666,
            "unit": "ns",
            "range": "± 750052.0818290332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203245124,
            "unit": "ns",
            "range": "± 1080276.1899093874"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47415.43421052631,
            "unit": "ns",
            "range": "± 2093.97587592297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5101493.050223215,
            "unit": "ns",
            "range": "± 22932.29178390968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1575195.5767728365,
            "unit": "ns",
            "range": "± 725.3725284021276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070086.5239955357,
            "unit": "ns",
            "range": "± 463.35457140701243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642235.0533854165,
            "unit": "ns",
            "range": "± 6724.468933820719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947351.3538411459,
            "unit": "ns",
            "range": "± 6638.033035810778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742859.9924665178,
            "unit": "ns",
            "range": "± 572.2993698567327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270827.75,
            "unit": "ns",
            "range": "± 9567.216389717252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259544.5,
            "unit": "ns",
            "range": "± 10907.390647871884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231584.34285714285,
            "unit": "ns",
            "range": "± 7587.8747971889425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150488.8333333335,
            "unit": "ns",
            "range": "± 17533.384788782656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3831928.2,
            "unit": "ns",
            "range": "± 36234.560606060695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18879.228260869564,
            "unit": "ns",
            "range": "± 1577.337847003029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83579.53333333334,
            "unit": "ns",
            "range": "± 4600.816173807485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70239.66666666667,
            "unit": "ns",
            "range": "± 1311.1173896809582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76234.74725274726,
            "unit": "ns",
            "range": "± 8542.991908372625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5004.135416666667,
            "unit": "ns",
            "range": "± 480.7665068418111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19257.076923076922,
            "unit": "ns",
            "range": "± 1714.8474129124872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364378.6,
            "unit": "ns",
            "range": "± 112186.03035668892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2539905.5172413792,
            "unit": "ns",
            "range": "± 72642.57863658824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1735763.494736842,
            "unit": "ns",
            "range": "± 127266.97574030119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4474576.2,
            "unit": "ns",
            "range": "± 157552.05899185946"
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
        "date": 1692593361776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3661332.3789473684,
            "unit": "ns",
            "range": "± 260032.09658581062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882075.1836734693,
            "unit": "ns",
            "range": "± 260785.81029235886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601604.154639175,
            "unit": "ns",
            "range": "± 314573.0422827218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931079.3917525774,
            "unit": "ns",
            "range": "± 267097.87072245625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6811373.378947369,
            "unit": "ns",
            "range": "± 521666.0416374286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9444944.557142857,
            "unit": "ns",
            "range": "± 458351.0757157198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24685251.091954023,
            "unit": "ns",
            "range": "± 1343822.004031132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61434733.07,
            "unit": "ns",
            "range": "± 3914640.149327842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128403394.85294117,
            "unit": "ns",
            "range": "± 6139767.0801879335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255694746.2962963,
            "unit": "ns",
            "range": "± 7069495.730069141"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64915.552083333336,
            "unit": "ns",
            "range": "± 15564.447540448211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5356325.5640625,
            "unit": "ns",
            "range": "± 93653.77646764508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1878416.431919643,
            "unit": "ns",
            "range": "± 24444.897742857996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168053.171875,
            "unit": "ns",
            "range": "± 34980.55841783632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2796780.899639423,
            "unit": "ns",
            "range": "± 38192.34063188759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998074.8684895834,
            "unit": "ns",
            "range": "± 14765.606501429704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913098.9237548828,
            "unit": "ns",
            "range": "± 32026.487030542597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331988.3645833333,
            "unit": "ns",
            "range": "± 49464.07423790572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326860.2244897959,
            "unit": "ns",
            "range": "± 53225.6587759574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291197.7395833333,
            "unit": "ns",
            "range": "± 41178.45375876865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4719508.989583333,
            "unit": "ns",
            "range": "± 290243.661907878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136532.3402061854,
            "unit": "ns",
            "range": "± 296226.2923116481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28039.99,
            "unit": "ns",
            "range": "± 10863.099005808608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106552.94897959183,
            "unit": "ns",
            "range": "± 24638.269381825314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94023.40816326531,
            "unit": "ns",
            "range": "± 17217.928652698538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102852.89795918367,
            "unit": "ns",
            "range": "± 26492.918523378798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4490.361445783133,
            "unit": "ns",
            "range": "± 763.2751090884477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29281.61224489796,
            "unit": "ns",
            "range": "± 11111.237493258845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613891.836734694,
            "unit": "ns",
            "range": "± 178502.47477499527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051567.547368421,
            "unit": "ns",
            "range": "± 217333.44818297404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1994685.7,
            "unit": "ns",
            "range": "± 251384.68843428406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5447135.597938145,
            "unit": "ns",
            "range": "± 480897.5285116549"
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
        "date": 1692594602585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3562521.48,
            "unit": "ns",
            "range": "± 94729.40105423097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3685375.1481481483,
            "unit": "ns",
            "range": "± 101303.14067638913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4536107.583333333,
            "unit": "ns",
            "range": "± 113393.96786920894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4166810.2580645164,
            "unit": "ns",
            "range": "± 127083.09651325722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6361561.947368421,
            "unit": "ns",
            "range": "± 140138.39030816552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8179674.068965517,
            "unit": "ns",
            "range": "± 237320.80126185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22247360.85714286,
            "unit": "ns",
            "range": "± 176446.46106957778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57220495.428571425,
            "unit": "ns",
            "range": "± 473154.6651584309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112419061.6,
            "unit": "ns",
            "range": "± 1681057.0717369982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222660038.66666666,
            "unit": "ns",
            "range": "± 2240739.7827084973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48030.822222222225,
            "unit": "ns",
            "range": "± 2691.214113786229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5100173.845552885,
            "unit": "ns",
            "range": "± 15450.381755056907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1579339.6473214286,
            "unit": "ns",
            "range": "± 2494.0259338002297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081629.1614583333,
            "unit": "ns",
            "range": "± 1776.8842059714984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637037.1688701925,
            "unit": "ns",
            "range": "± 1670.1475757077033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832203.4588541667,
            "unit": "ns",
            "range": "± 854.4899414338997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759538.953500601,
            "unit": "ns",
            "range": "± 525.2518915978044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278692.25,
            "unit": "ns",
            "range": "± 8659.097036289117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266591.875,
            "unit": "ns",
            "range": "± 4376.854683064846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239980.94,
            "unit": "ns",
            "range": "± 9588.01130964485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438134.866666666,
            "unit": "ns",
            "range": "± 61239.641722226515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4081587.5714285714,
            "unit": "ns",
            "range": "± 43180.63239590048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20455.694736842106,
            "unit": "ns",
            "range": "± 1422.5357945141952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91466.90721649484,
            "unit": "ns",
            "range": "± 7060.113238413263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71942.09090909091,
            "unit": "ns",
            "range": "± 1747.5977773337866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80245.63218390805,
            "unit": "ns",
            "range": "± 8715.407851955575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5536.144329896907,
            "unit": "ns",
            "range": "± 777.8394488058293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19067.397727272728,
            "unit": "ns",
            "range": "± 1075.655881602922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437296.8620689656,
            "unit": "ns",
            "range": "± 76912.24252704436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2736885.3414634145,
            "unit": "ns",
            "range": "± 94583.54976332032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1852567.2567567567,
            "unit": "ns",
            "range": "± 90307.89233369967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4743790.153846154,
            "unit": "ns",
            "range": "± 129215.83083869943"
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
        "date": 1692596070255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3395498.88,
            "unit": "ns",
            "range": "± 90582.92506745776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3516218.2,
            "unit": "ns",
            "range": "± 30942.330185593422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4258880.066666666,
            "unit": "ns",
            "range": "± 45477.7383978244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3976429.153846154,
            "unit": "ns",
            "range": "± 41864.62058398506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6173430.40625,
            "unit": "ns",
            "range": "± 175780.13443409454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7883991.133333334,
            "unit": "ns",
            "range": "± 63028.91368804668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20288554.2,
            "unit": "ns",
            "range": "± 61897.5065989853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51861615.93333333,
            "unit": "ns",
            "range": "± 159436.86006444535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103851291.06666666,
            "unit": "ns",
            "range": "± 254415.85850741825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207102793.42857143,
            "unit": "ns",
            "range": "± 531418.2594377071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47605.20652173913,
            "unit": "ns",
            "range": "± 2890.9212324559608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4902165.110576923,
            "unit": "ns",
            "range": "± 4265.712140515751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571028.8822544643,
            "unit": "ns",
            "range": "± 604.0134368332857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061542.5255208334,
            "unit": "ns",
            "range": "± 621.9636945237204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2552950.1666666665,
            "unit": "ns",
            "range": "± 5338.274402766454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796050.8874699519,
            "unit": "ns",
            "range": "± 914.1527480906968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750561.7639322917,
            "unit": "ns",
            "range": "± 635.442993225808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275644.6296296296,
            "unit": "ns",
            "range": "± 10664.394652027833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266836.6808510638,
            "unit": "ns",
            "range": "± 9645.033973628679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243955.9180327869,
            "unit": "ns",
            "range": "± 10958.900802992792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284987.785714285,
            "unit": "ns",
            "range": "± 23661.915759551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3963102.3333333335,
            "unit": "ns",
            "range": "± 34357.85500053947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20695.705263157895,
            "unit": "ns",
            "range": "± 1973.0984806475592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86792.87837837837,
            "unit": "ns",
            "range": "± 4212.60059252344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71769.5,
            "unit": "ns",
            "range": "± 2898.459522236047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86128.08163265306,
            "unit": "ns",
            "range": "± 12657.343806687488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5113.652631578947,
            "unit": "ns",
            "range": "± 539.6067868684478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20180.947368421053,
            "unit": "ns",
            "range": "± 1524.5596669371491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343877.5764705883,
            "unit": "ns",
            "range": "± 72166.26254341536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637489.2666666666,
            "unit": "ns",
            "range": "± 100029.71664992177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1717472.9670329671,
            "unit": "ns",
            "range": "± 95360.00040063975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4574758.760869565,
            "unit": "ns",
            "range": "± 159051.92257696993"
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
        "date": 1692597822763,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4493825,
            "unit": "ns",
            "range": "± 197996.29857224692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4616094.208955224,
            "unit": "ns",
            "range": "± 218552.3165327571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5426262.842105263,
            "unit": "ns",
            "range": "± 120064.91113618648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4891239.230769231,
            "unit": "ns",
            "range": "± 71014.43789839951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7689993.324324325,
            "unit": "ns",
            "range": "± 234247.37222503978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10498819.933333334,
            "unit": "ns",
            "range": "± 188082.89162056282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27249971.866666667,
            "unit": "ns",
            "range": "± 201313.28206620313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67808943.92307693,
            "unit": "ns",
            "range": "± 183538.4392865527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135695693.26666668,
            "unit": "ns",
            "range": "± 311473.2870934215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274829493.6666667,
            "unit": "ns",
            "range": "± 1571846.7197995503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59627.34065934066,
            "unit": "ns",
            "range": "± 3716.3773645843767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982886.0296875,
            "unit": "ns",
            "range": "± 48905.45318202961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1925750.45390625,
            "unit": "ns",
            "range": "± 1236.7933988030877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302999.011997768,
            "unit": "ns",
            "range": "± 669.5416115117273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3073646.676041667,
            "unit": "ns",
            "range": "± 6836.05195373182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987897.4528245192,
            "unit": "ns",
            "range": "± 697.2091197560777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913036.7133789062,
            "unit": "ns",
            "range": "± 310.6478141814767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331062.9,
            "unit": "ns",
            "range": "± 11675.636390276493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320301.53125,
            "unit": "ns",
            "range": "± 9585.521383448076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289976,
            "unit": "ns",
            "range": "± 8808.964252396532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5429523.333333333,
            "unit": "ns",
            "range": "± 60269.68013931415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5085753.466666667,
            "unit": "ns",
            "range": "± 55568.40318262409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24873.042105263157,
            "unit": "ns",
            "range": "± 2023.1127266149226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109944.55102040817,
            "unit": "ns",
            "range": "± 8212.7151808461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90335.67142857143,
            "unit": "ns",
            "range": "± 4391.82851134751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99069.64948453609,
            "unit": "ns",
            "range": "± 13741.746963360436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7251.656565656565,
            "unit": "ns",
            "range": "± 777.2823031617875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24600.35106382979,
            "unit": "ns",
            "range": "± 1732.554895761405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779190.8333333333,
            "unit": "ns",
            "range": "± 106514.56014764185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3357685.5675675673,
            "unit": "ns",
            "range": "± 109296.72015017462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217476.8068181816,
            "unit": "ns",
            "range": "± 123067.8943838144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5768352.28125,
            "unit": "ns",
            "range": "± 176666.42724660403"
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
        "date": 1692598530624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3263167.5714285714,
            "unit": "ns",
            "range": "± 43195.86249188205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3320699.2413793104,
            "unit": "ns",
            "range": "± 61845.971043654186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193885.9285714286,
            "unit": "ns",
            "range": "± 72307.03434283586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3640746.977272727,
            "unit": "ns",
            "range": "± 135667.2473177182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6007808.97368421,
            "unit": "ns",
            "range": "± 181087.1923119681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7798873.785714285,
            "unit": "ns",
            "range": "± 29292.619708931597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19614961.133333333,
            "unit": "ns",
            "range": "± 284205.2677929575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49259014.14285714,
            "unit": "ns",
            "range": "± 298037.1130645044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100437078.26666667,
            "unit": "ns",
            "range": "± 874683.3783912461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201127394.4,
            "unit": "ns",
            "range": "± 1170397.987874137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45449.82432432433,
            "unit": "ns",
            "range": "± 2274.6476792254443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5143620.764322917,
            "unit": "ns",
            "range": "± 4594.139501194384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1620900.0279017857,
            "unit": "ns",
            "range": "± 5918.1989212236585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1091127.1028180805,
            "unit": "ns",
            "range": "± 806.6472817833356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2862851.265625,
            "unit": "ns",
            "range": "± 18756.262621574053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802637.1884114583,
            "unit": "ns",
            "range": "± 3347.545937092504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746211.0452473959,
            "unit": "ns",
            "range": "± 724.2960836651031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263109.7659574468,
            "unit": "ns",
            "range": "± 10249.000543452297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253652.87037037036,
            "unit": "ns",
            "range": "± 9218.353821130882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218309.8947368421,
            "unit": "ns",
            "range": "± 4802.374133867272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197139.333333333,
            "unit": "ns",
            "range": "± 37668.39252451519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808243.933333333,
            "unit": "ns",
            "range": "± 21674.49172732997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17744.278350515466,
            "unit": "ns",
            "range": "± 2307.0643988549423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80301.22727272728,
            "unit": "ns",
            "range": "± 3737.6694087480378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67866.44444444444,
            "unit": "ns",
            "range": "± 1411.701860801653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73661.5617977528,
            "unit": "ns",
            "range": "± 6953.797461484061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4416.326530612245,
            "unit": "ns",
            "range": "± 521.2383900758559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16859.333333333332,
            "unit": "ns",
            "range": "± 1621.876240762802"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1301046.303030303,
            "unit": "ns",
            "range": "± 87835.85276949253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2434636.8620689656,
            "unit": "ns",
            "range": "± 68643.8231643835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1653539.1927710844,
            "unit": "ns",
            "range": "± 84302.41420413363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4328832.142857143,
            "unit": "ns",
            "range": "± 107773.54419945634"
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
        "date": 1692600256037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3525258.8846153845,
            "unit": "ns",
            "range": "± 96264.84520958911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3706635.093023256,
            "unit": "ns",
            "range": "± 135755.3974482211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4426102.961538462,
            "unit": "ns",
            "range": "± 118571.22852141857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4071998.875,
            "unit": "ns",
            "range": "± 153785.8740125823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6285996.653846154,
            "unit": "ns",
            "range": "± 168433.09395150165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8031813.666666667,
            "unit": "ns",
            "range": "± 140282.66404488264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22770791.133333333,
            "unit": "ns",
            "range": "± 280105.96306369145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56876592.4,
            "unit": "ns",
            "range": "± 885496.1860944565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112352101.42857143,
            "unit": "ns",
            "range": "± 1321429.6074876175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228140350.46666667,
            "unit": "ns",
            "range": "± 3032720.7705598255"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48554.438356164384,
            "unit": "ns",
            "range": "± 2259.364278743896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5145733.557477678,
            "unit": "ns",
            "range": "± 21339.005673606887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1591892.903125,
            "unit": "ns",
            "range": "± 3395.612234749179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079127.1489583333,
            "unit": "ns",
            "range": "± 2818.824181568492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2776635.9888020833,
            "unit": "ns",
            "range": "± 7786.172401853865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 933927.7987467448,
            "unit": "ns",
            "range": "± 1005.4681660726457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756877.0701171875,
            "unit": "ns",
            "range": "± 799.811684027854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275652.3958333333,
            "unit": "ns",
            "range": "± 9842.584969535974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274994.725,
            "unit": "ns",
            "range": "± 9749.986784968034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249976.2857142857,
            "unit": "ns",
            "range": "± 14742.662491565292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4426338.294117647,
            "unit": "ns",
            "range": "± 88497.1573743789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4140234.705882353,
            "unit": "ns",
            "range": "± 83863.16919748257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20516.56989247312,
            "unit": "ns",
            "range": "± 2042.6413707546576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85909.9344262295,
            "unit": "ns",
            "range": "± 3533.6439542812486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72703.2641509434,
            "unit": "ns",
            "range": "± 2916.689866104431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81547.12121212122,
            "unit": "ns",
            "range": "± 13105.318473477864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5286.762886597938,
            "unit": "ns",
            "range": "± 709.8328701942785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19482.75,
            "unit": "ns",
            "range": "± 1529.5285754630067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430019.3804347827,
            "unit": "ns",
            "range": "± 80251.2182186598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2737880.2580645164,
            "unit": "ns",
            "range": "± 79460.57637217244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811301.5227272727,
            "unit": "ns",
            "range": "± 96314.0379282556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4775664.924528302,
            "unit": "ns",
            "range": "± 195567.6353941215"
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
          "id": "f18c8b532a93098d5b8bbafd3f3f883dd9451aa7",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:55:31+09:00",
          "tree_id": "5ff132714a603bce55a62ee15e222eef3ec7506e",
          "url": "https://github.com/planetarium/libplanet/commit/f18c8b532a93098d5b8bbafd3f3f883dd9451aa7"
        },
        "date": 1692601936995,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4240796.684210527,
            "unit": "ns",
            "range": "± 91643.3397265075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4532359.5,
            "unit": "ns",
            "range": "± 60290.18765137874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5434826.5625,
            "unit": "ns",
            "range": "± 106330.84747834233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4959277.133333334,
            "unit": "ns",
            "range": "± 76384.35743084973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7749173.909090909,
            "unit": "ns",
            "range": "± 238585.5514132147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9960106,
            "unit": "ns",
            "range": "± 160159.89832084326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27004928.066666666,
            "unit": "ns",
            "range": "± 213708.45292141972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68498077.2,
            "unit": "ns",
            "range": "± 498648.8712067269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135020144.53333333,
            "unit": "ns",
            "range": "± 726482.398512455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269133030.26666665,
            "unit": "ns",
            "range": "± 2101132.7123029027"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56776.95652173913,
            "unit": "ns",
            "range": "± 3415.0797004940064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6033617.454427083,
            "unit": "ns",
            "range": "± 18374.204799930947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919779.312779018,
            "unit": "ns",
            "range": "± 1225.6546614499214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1309863.0110212055,
            "unit": "ns",
            "range": "± 1187.253968190193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3145734.2008928573,
            "unit": "ns",
            "range": "± 884.1891575301283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001021.7723958333,
            "unit": "ns",
            "range": "± 587.5059290076539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890829.4928152902,
            "unit": "ns",
            "range": "± 477.56136384700125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330173.23255813954,
            "unit": "ns",
            "range": "± 12235.13895232597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318153.30303030304,
            "unit": "ns",
            "range": "± 9974.29340381077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282724.95,
            "unit": "ns",
            "range": "± 6379.549666295956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5264057.714285715,
            "unit": "ns",
            "range": "± 89979.4882390328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4986422.4,
            "unit": "ns",
            "range": "± 60108.831537708094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25029.4375,
            "unit": "ns",
            "range": "± 1866.6175308774284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106073.68253968254,
            "unit": "ns",
            "range": "± 4781.561085432505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90722.15217391304,
            "unit": "ns",
            "range": "± 3485.7005606550206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103668.4693877551,
            "unit": "ns",
            "range": "± 14135.391302774693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6902.59375,
            "unit": "ns",
            "range": "± 762.8747786894821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24658.31182795699,
            "unit": "ns",
            "range": "± 1568.1578709518194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698793.6133333333,
            "unit": "ns",
            "range": "± 70847.93733400856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3242683.64516129,
            "unit": "ns",
            "range": "± 96716.11740227113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2147010.1710526315,
            "unit": "ns",
            "range": "± 102343.9110701284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5700604.354166667,
            "unit": "ns",
            "range": "± 223599.35445987293"
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
          "id": "dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:58:58+09:00",
          "tree_id": "9034f836b9c8bb4c07dc45c620e30745fd5b7f1a",
          "url": "https://github.com/planetarium/libplanet/commit/dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb"
        },
        "date": 1692601950394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3344806.5263157897,
            "unit": "ns",
            "range": "± 114842.53551022899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567900.5625,
            "unit": "ns",
            "range": "± 69579.41225196693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267735.2,
            "unit": "ns",
            "range": "± 39039.6661929523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3854397.263157895,
            "unit": "ns",
            "range": "± 82168.06436055455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6153505.96875,
            "unit": "ns",
            "range": "± 174069.3168608941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7942609.176470588,
            "unit": "ns",
            "range": "± 160634.22137508375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20391815,
            "unit": "ns",
            "range": "± 90322.18137233591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51909159.13333333,
            "unit": "ns",
            "range": "± 255786.2058388011"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103618021.06666666,
            "unit": "ns",
            "range": "± 307499.47402149363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207339601.13333333,
            "unit": "ns",
            "range": "± 287337.4946785118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48988.645833333336,
            "unit": "ns",
            "range": "± 5019.812571420669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890399.736458333,
            "unit": "ns",
            "range": "± 14759.048742609728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569940.2495492788,
            "unit": "ns",
            "range": "± 1218.6307859143935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1061909.830078125,
            "unit": "ns",
            "range": "± 735.6455288339098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529138.0135216345,
            "unit": "ns",
            "range": "± 2811.7023290109273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797011.4889973958,
            "unit": "ns",
            "range": "± 2859.283919743496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733275.2708984375,
            "unit": "ns",
            "range": "± 647.2785598859051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271186.10714285716,
            "unit": "ns",
            "range": "± 7645.309398769291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274313.93333333335,
            "unit": "ns",
            "range": "± 4494.452905950793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241443.29761904763,
            "unit": "ns",
            "range": "± 12902.629489903566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4225040.6,
            "unit": "ns",
            "range": "± 38288.858571204684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871349.785714286,
            "unit": "ns",
            "range": "± 30168.499838225485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19266.303370786518,
            "unit": "ns",
            "range": "± 1524.9364547453233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85924.09782608696,
            "unit": "ns",
            "range": "± 5718.847182799606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72717.17073170732,
            "unit": "ns",
            "range": "± 3856.96585095449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80374.25842696629,
            "unit": "ns",
            "range": "± 6983.203578340495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4840,
            "unit": "ns",
            "range": "± 493.23077331476475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19330.302083333332,
            "unit": "ns",
            "range": "± 1591.3657168065401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1378855.275510204,
            "unit": "ns",
            "range": "± 86649.69594806657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2606178.6296296297,
            "unit": "ns",
            "range": "± 70513.89882533696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764210.54,
            "unit": "ns",
            "range": "± 130385.81335037488"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4610914.303030303,
            "unit": "ns",
            "range": "± 145467.35280370575"
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
          "id": "20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:56:11+09:00",
          "tree_id": "32ebda4ba1257e16026df3d9ce56d3dac0f8ab4a",
          "url": "https://github.com/planetarium/libplanet/commit/20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed"
        },
        "date": 1692601953970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4096289.5384615385,
            "unit": "ns",
            "range": "± 111626.34389040277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4560273.866666666,
            "unit": "ns",
            "range": "± 134218.1913714236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5246421.545454546,
            "unit": "ns",
            "range": "± 165085.17175614435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4717361.216216216,
            "unit": "ns",
            "range": "± 158347.09927107306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7341165,
            "unit": "ns",
            "range": "± 188937.24743324745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9667686.35483871,
            "unit": "ns",
            "range": "± 286592.6705618445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26430638.8,
            "unit": "ns",
            "range": "± 232342.1780764618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65558991.266666666,
            "unit": "ns",
            "range": "± 798829.0093062529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139768329.57142857,
            "unit": "ns",
            "range": "± 750803.6540866075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261471289.66666666,
            "unit": "ns",
            "range": "± 3360235.328380241"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55701.03296703297,
            "unit": "ns",
            "range": "± 3055.497927963622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959022.848214285,
            "unit": "ns",
            "range": "± 22471.51328091649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1865184.394810268,
            "unit": "ns",
            "range": "± 5701.048053578971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292384.32421875,
            "unit": "ns",
            "range": "± 3193.6952225277405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3068386.627083333,
            "unit": "ns",
            "range": "± 8857.963389353445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981352.1815755208,
            "unit": "ns",
            "range": "± 3372.1860766125274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 887740.2442708333,
            "unit": "ns",
            "range": "± 4239.6256302450465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327401.17647058825,
            "unit": "ns",
            "range": "± 10492.467163638667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318484.9487179487,
            "unit": "ns",
            "range": "± 10932.974054735128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280071.5833333333,
            "unit": "ns",
            "range": "± 9228.512018661047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5178230.625,
            "unit": "ns",
            "range": "± 96565.98282823685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4711022.6,
            "unit": "ns",
            "range": "± 67030.36897641461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21491.445652173912,
            "unit": "ns",
            "range": "± 1404.266742797088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100696.13924050632,
            "unit": "ns",
            "range": "± 5200.406975529199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84158.79166666667,
            "unit": "ns",
            "range": "± 2192.0842172644075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90469.83838383839,
            "unit": "ns",
            "range": "± 12822.660531904867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5745.1875,
            "unit": "ns",
            "range": "± 626.0184512582592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21363.17391304348,
            "unit": "ns",
            "range": "± 1221.8378573450993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1740092.9042553192,
            "unit": "ns",
            "range": "± 101628.31433758143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3279030.4909090907,
            "unit": "ns",
            "range": "± 139543.7202139295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166071.1555555556,
            "unit": "ns",
            "range": "± 115502.78603137346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5549499.6,
            "unit": "ns",
            "range": "± 115577.86785967923"
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
          "id": "8003de7afe93ec8604207cc01d9e080ea4bd3af4",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:11:57+09:00",
          "tree_id": "27436bd6a662788c77b6f825da86805b1d25ca9b",
          "url": "https://github.com/planetarium/libplanet/commit/8003de7afe93ec8604207cc01d9e080ea4bd3af4"
        },
        "date": 1692602934572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718314.4666666666,
            "unit": "ns",
            "range": "± 80055.16551464106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3240113.296296296,
            "unit": "ns",
            "range": "± 90528.08475776362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148090.210526316,
            "unit": "ns",
            "range": "± 122175.04055159957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5674056.377777778,
            "unit": "ns",
            "range": "± 215533.81082857013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336481.0153846154,
            "unit": "ns",
            "range": "± 15647.558748783613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318139.1176470588,
            "unit": "ns",
            "range": "± 9882.025101513955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299217.74,
            "unit": "ns",
            "range": "± 22031.168215549038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5330691.6,
            "unit": "ns",
            "range": "± 89508.01850816015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4874502.266666667,
            "unit": "ns",
            "range": "± 81562.27585844773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25496,
            "unit": "ns",
            "range": "± 2121.091775277283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105726.96875,
            "unit": "ns",
            "range": "± 7137.264185361554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95519.23655913978,
            "unit": "ns",
            "range": "± 8068.801622133523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97510.21348314607,
            "unit": "ns",
            "range": "± 9242.660233533601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7446.652631578947,
            "unit": "ns",
            "range": "± 996.3212522203771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28058.29591836735,
            "unit": "ns",
            "range": "± 3740.5106057785656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58794.231578947365,
            "unit": "ns",
            "range": "± 4737.507825071023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9986864.511627907,
            "unit": "ns",
            "range": "± 364541.48170278966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26929517.388888888,
            "unit": "ns",
            "range": "± 558852.9688793655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69348932.4,
            "unit": "ns",
            "range": "± 248299.19567006253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135295827.4,
            "unit": "ns",
            "range": "± 1093607.1881727525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270443020.9285714,
            "unit": "ns",
            "range": "± 2880305.825788656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4321150.739130435,
            "unit": "ns",
            "range": "± 106879.46342033985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4609607.714285715,
            "unit": "ns",
            "range": "± 102352.19375135192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5437835.866666666,
            "unit": "ns",
            "range": "± 86438.80119802902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5018361.285714285,
            "unit": "ns",
            "range": "± 54783.0190526907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7724244.571428572,
            "unit": "ns",
            "range": "± 174851.92621746304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000571.2671875,
            "unit": "ns",
            "range": "± 45348.559254952816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926628.8438895089,
            "unit": "ns",
            "range": "± 10383.109046371937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1275956.3782552083,
            "unit": "ns",
            "range": "± 3589.9197349762135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126720.634375,
            "unit": "ns",
            "range": "± 21223.664824831718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995326.8052455357,
            "unit": "ns",
            "range": "± 2276.6950612585365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911772.5746744792,
            "unit": "ns",
            "range": "± 2093.167697011578"
          }
        ]
      }
    ]
  }
}