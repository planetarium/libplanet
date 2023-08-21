window.BENCHMARK_DATA = {
  "lastUpdate": 1692594630002,
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
      }
    ]
  }
}