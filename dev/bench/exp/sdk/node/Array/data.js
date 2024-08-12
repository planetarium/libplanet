window.BENCHMARK_DATA = {
  "lastUpdate": 1723443380245,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "4396e8a013d6602c32a4d405300212b1f1a46cfa",
          "message": "exp: node",
          "timestamp": "2024-07-25T14:46:14+09:00",
          "tree_id": "c422c889c20f6ff72b431188637e9adee2d887b3",
          "url": "https://github.com/planetarium/libplanet/commit/4396e8a013d6602c32a4d405300212b1f1a46cfa"
        },
        "date": 1721886873853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10774430.833333334,
            "unit": "ns",
            "range": "± 71648.12526867086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26531624.769230768,
            "unit": "ns",
            "range": "± 180026.24147104862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67421699,
            "unit": "ns",
            "range": "± 158504.44121222597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135952426.3,
            "unit": "ns",
            "range": "± 269321.772240196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273468505.3,
            "unit": "ns",
            "range": "± 279639.22306638496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14089.435897435897,
            "unit": "ns",
            "range": "± 490.7552072207742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112107.29411764706,
            "unit": "ns",
            "range": "± 4559.926219991362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104422.6170212766,
            "unit": "ns",
            "range": "± 4058.26890463319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91829.60975609756,
            "unit": "ns",
            "range": "± 3302.513867329317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991843.8333333335,
            "unit": "ns",
            "range": "± 166488.758073307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766529.964285714,
            "unit": "ns",
            "range": "± 147746.04544451495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4799.260869565217,
            "unit": "ns",
            "range": "± 547.9102932424191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26660.41304347826,
            "unit": "ns",
            "range": "± 1598.6613778867238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22969.494736842105,
            "unit": "ns",
            "range": "± 1765.564564482133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29203.212765957447,
            "unit": "ns",
            "range": "± 5187.302771216018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1070.65625,
            "unit": "ns",
            "range": "± 223.5286783967316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4917.913978494624,
            "unit": "ns",
            "range": "± 573.4261571791616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681320.3170731707,
            "unit": "ns",
            "range": "± 35995.95868807403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1271025.558139535,
            "unit": "ns",
            "range": "± 47081.00257777739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066296.15,
            "unit": "ns",
            "range": "± 47701.288274833976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10832537.04,
            "unit": "ns",
            "range": "± 2399086.2493732516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164974.870967742,
            "unit": "ns",
            "range": "± 64468.14184579436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2285183.0322580645,
            "unit": "ns",
            "range": "± 97663.93935259726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583490.785714286,
            "unit": "ns",
            "range": "± 34155.21749348805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2374136.9787234045,
            "unit": "ns",
            "range": "± 91873.40919379688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2978913.846153846,
            "unit": "ns",
            "range": "± 152567.78636609812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3020190.3270089286,
            "unit": "ns",
            "range": "± 29240.93748415458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926160.5953125,
            "unit": "ns",
            "range": "± 5742.47836717267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613425.2142578125,
            "unit": "ns",
            "range": "± 5041.864835432617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1648115.6303013393,
            "unit": "ns",
            "range": "± 16598.100232379144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469397.1642578125,
            "unit": "ns",
            "range": "± 1260.5326679260875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421580.6895577567,
            "unit": "ns",
            "range": "± 637.9362015136943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1ba0a655ecc78782cfecd63ad610cf5d82534cef",
          "message": "exp: node",
          "timestamp": "2024-07-25T15:58:33+09:00",
          "tree_id": "b3640871e27a08181086b648d1815bc201fb3353",
          "url": "https://github.com/planetarium/libplanet/commit/1ba0a655ecc78782cfecd63ad610cf5d82534cef"
        },
        "date": 1721891222623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10706887.615384616,
            "unit": "ns",
            "range": "± 141937.57440129473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26473360.5,
            "unit": "ns",
            "range": "± 127839.56635489535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67272558.73333333,
            "unit": "ns",
            "range": "± 94565.02343094532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136507620.03846154,
            "unit": "ns",
            "range": "± 144725.4545387089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272190618,
            "unit": "ns",
            "range": "± 271271.9978205371"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14221.866666666667,
            "unit": "ns",
            "range": "± 266.03245416051533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110032.35714285714,
            "unit": "ns",
            "range": "± 3128.92689327896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 103891.35555555555,
            "unit": "ns",
            "range": "± 3617.461862307953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91859.51515151515,
            "unit": "ns",
            "range": "± 2874.9873817246153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3051796.7346938774,
            "unit": "ns",
            "range": "± 182151.73740258254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730887.1063829786,
            "unit": "ns",
            "range": "± 154768.3843650127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5485.877551020408,
            "unit": "ns",
            "range": "± 1070.5781390734548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27186.255319148935,
            "unit": "ns",
            "range": "± 2284.358854245848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22314.557142857142,
            "unit": "ns",
            "range": "± 1086.482445961748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30609.157894736843,
            "unit": "ns",
            "range": "± 5541.456620312391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1218.7362637362637,
            "unit": "ns",
            "range": "± 177.1658880613079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5052.747252747253,
            "unit": "ns",
            "range": "± 512.1023463984649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 679346.5327868853,
            "unit": "ns",
            "range": "± 29994.226989520954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283559.8666666667,
            "unit": "ns",
            "range": "± 48114.31710595847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1114862.3488372094,
            "unit": "ns",
            "range": "± 60227.129488836814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9573579.25,
            "unit": "ns",
            "range": "± 1431470.4604832293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186963.7674418604,
            "unit": "ns",
            "range": "± 80595.73125581103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2303464.8292682925,
            "unit": "ns",
            "range": "± 81888.82837509108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2590445.076923077,
            "unit": "ns",
            "range": "± 42104.67387646637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2357659.9811320757,
            "unit": "ns",
            "range": "± 97006.1204709608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3010841.9857142856,
            "unit": "ns",
            "range": "± 145960.6572620242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2982567.923958333,
            "unit": "ns",
            "range": "± 48399.15495514976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 914244.5424479167,
            "unit": "ns",
            "range": "± 4741.90667871231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613562.0935546875,
            "unit": "ns",
            "range": "± 5241.660178642073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1633530.617252604,
            "unit": "ns",
            "range": "± 13961.870849852352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471580.08932291664,
            "unit": "ns",
            "range": "± 560.8089271129046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423038.2009277344,
            "unit": "ns",
            "range": "± 479.6033305571588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "516f7d1c1e9ebd1a9e6b7c00c720d11e658791e6",
          "message": "refactor: Refactor to minimal, executable version",
          "timestamp": "2024-07-26T10:46:52+09:00",
          "tree_id": "19296bc6afde9a07c03e576a480fd2a29c1db16d",
          "url": "https://github.com/planetarium/libplanet/commit/516f7d1c1e9ebd1a9e6b7c00c720d11e658791e6"
        },
        "date": 1721958890052,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10692322.666666666,
            "unit": "ns",
            "range": "± 87825.17118098716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26467795.07142857,
            "unit": "ns",
            "range": "± 188091.8510607412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67342109.9,
            "unit": "ns",
            "range": "± 156939.0253418733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135878572.46666667,
            "unit": "ns",
            "range": "± 268965.9539673235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273133309.76666665,
            "unit": "ns",
            "range": "± 486921.9433133679"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14002.315789473685,
            "unit": "ns",
            "range": "± 306.82297694482816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111504.95555555556,
            "unit": "ns",
            "range": "± 3604.957665591521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107190.19672131147,
            "unit": "ns",
            "range": "± 4536.244499655605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90577.81578947368,
            "unit": "ns",
            "range": "± 1484.0952744435685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3029181.0786516853,
            "unit": "ns",
            "range": "± 166034.67700057998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2732013.21,
            "unit": "ns",
            "range": "± 172833.29612999182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4934.965909090909,
            "unit": "ns",
            "range": "± 471.24460907587275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26993.010752688173,
            "unit": "ns",
            "range": "± 1872.0663571399648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22693.166666666668,
            "unit": "ns",
            "range": "± 1485.7048064571322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30520.287234042553,
            "unit": "ns",
            "range": "± 5844.155568981624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1078.2391304347825,
            "unit": "ns",
            "range": "± 265.4850162186149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4586.8258426966295,
            "unit": "ns",
            "range": "± 428.4627589439235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 704190.9736842106,
            "unit": "ns",
            "range": "± 64617.37919440936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1297484.3125,
            "unit": "ns",
            "range": "± 59048.99050166627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1094253.9042553192,
            "unit": "ns",
            "range": "± 62114.95908862963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9537207.4,
            "unit": "ns",
            "range": "± 1472505.4324167185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177176.261904762,
            "unit": "ns",
            "range": "± 77938.13422009935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283467.1923076925,
            "unit": "ns",
            "range": "± 93697.34476965643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2565926,
            "unit": "ns",
            "range": "± 35207.4173216602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2333924.0476190476,
            "unit": "ns",
            "range": "± 84201.64437272497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3005920.972222222,
            "unit": "ns",
            "range": "± 146117.78200806695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2989598.9770833333,
            "unit": "ns",
            "range": "± 54811.16920253342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925495.9360677083,
            "unit": "ns",
            "range": "± 4500.207909162976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 606893.9611979167,
            "unit": "ns",
            "range": "± 2417.5690838499627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1687754.8419363839,
            "unit": "ns",
            "range": "± 9671.366566236611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473142.4246544471,
            "unit": "ns",
            "range": "± 632.1837443891653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418036.17073567706,
            "unit": "ns",
            "range": "± 741.4098039704731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f3c695b80e941bd047e79cb3c3de3118b54459f5",
          "message": "feat: solo propose mode",
          "timestamp": "2024-07-29T18:01:54+09:00",
          "tree_id": "2b993509ac0528dbd74f9dad6849b1231665f32a",
          "url": "https://github.com/planetarium/libplanet/commit/f3c695b80e941bd047e79cb3c3de3118b54459f5"
        },
        "date": 1722244186347,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10920194.333333334,
            "unit": "ns",
            "range": "± 90659.40237838578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26485378.214285713,
            "unit": "ns",
            "range": "± 184861.11754095022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68738603.71428572,
            "unit": "ns",
            "range": "± 161289.93035926545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136203074.8,
            "unit": "ns",
            "range": "± 417313.78087104403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274561678.06666666,
            "unit": "ns",
            "range": "± 709834.4309464473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13936.23076923077,
            "unit": "ns",
            "range": "± 377.44608173272195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109784.75,
            "unit": "ns",
            "range": "± 3266.866881498016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104641.2075471698,
            "unit": "ns",
            "range": "± 3935.894817419299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92358.95454545454,
            "unit": "ns",
            "range": "± 3427.4842387950025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3076293.7021276597,
            "unit": "ns",
            "range": "± 117649.21205133782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2795089.588235294,
            "unit": "ns",
            "range": "± 149781.11957399818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5146.5,
            "unit": "ns",
            "range": "± 560.7870121835097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26430.483516483517,
            "unit": "ns",
            "range": "± 1572.587509401392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21785.8,
            "unit": "ns",
            "range": "± 768.7794813267917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31145.392473118278,
            "unit": "ns",
            "range": "± 4867.4163230840795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1286.904255319149,
            "unit": "ns",
            "range": "± 250.767084202317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4985.052941176471,
            "unit": "ns",
            "range": "± 482.33118206028837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680464.2866666666,
            "unit": "ns",
            "range": "± 32566.717041679116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1256476.8333333333,
            "unit": "ns",
            "range": "± 41143.865195378115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1071373.0526315789,
            "unit": "ns",
            "range": "± 42521.667481507524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9451724.54,
            "unit": "ns",
            "range": "± 1347175.1763003457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2203158.8484848486,
            "unit": "ns",
            "range": "± 64764.6051110873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2285157.2564102565,
            "unit": "ns",
            "range": "± 79669.81383438905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2583503.5384615385,
            "unit": "ns",
            "range": "± 30802.017984799266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2352274.0208333335,
            "unit": "ns",
            "range": "± 92606.05065740175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3019051.9295774647,
            "unit": "ns",
            "range": "± 146109.22615088086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3054556.2005208335,
            "unit": "ns",
            "range": "± 34599.26417801636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925973.1306640625,
            "unit": "ns",
            "range": "± 3800.481858440398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618266.94921875,
            "unit": "ns",
            "range": "± 9062.76308461756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635993.8846153845,
            "unit": "ns",
            "range": "± 13529.188076463477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470427.0077148437,
            "unit": "ns",
            "range": "± 812.0692072887496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426819.4810872396,
            "unit": "ns",
            "range": "± 367.0870384171555"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e26f3a070a2d157c124f2366e0876c7931ebac7",
          "message": "Merge pull request #3900 from s2quake/exp/sdk/net8\n\nBump dotnet to 8 in Libplanet SDK",
          "timestamp": "2024-08-05T16:32:45+09:00",
          "tree_id": "0c2026fc6b7dfaa4fefebb91d4094e458dfdb863",
          "url": "https://github.com/planetarium/libplanet/commit/7e26f3a070a2d157c124f2366e0876c7931ebac7"
        },
        "date": 1722843657923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10697545.307692308,
            "unit": "ns",
            "range": "± 111308.4579710699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26680866.35714286,
            "unit": "ns",
            "range": "± 261975.77325265057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67026113.333333336,
            "unit": "ns",
            "range": "± 166559.0905185933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135263797.2857143,
            "unit": "ns",
            "range": "± 202723.851608889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273663561.53333336,
            "unit": "ns",
            "range": "± 696080.1436687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14073.314814814816,
            "unit": "ns",
            "range": "± 389.464527567811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110969.92857142857,
            "unit": "ns",
            "range": "± 4073.44904052012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106346.46153846153,
            "unit": "ns",
            "range": "± 4372.81839595265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89261.91666666667,
            "unit": "ns",
            "range": "± 2211.2657574339632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3053273.2898550723,
            "unit": "ns",
            "range": "± 146617.02991157342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2724917.6464646463,
            "unit": "ns",
            "range": "± 165002.94056157177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5111.36170212766,
            "unit": "ns",
            "range": "± 533.618160188625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26632.61111111111,
            "unit": "ns",
            "range": "± 1457.1093802259913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23163.869565217392,
            "unit": "ns",
            "range": "± 1432.8439691545855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30975.791666666668,
            "unit": "ns",
            "range": "± 5716.720705028211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1181.8297872340424,
            "unit": "ns",
            "range": "± 218.73456385711125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4864.086956521739,
            "unit": "ns",
            "range": "± 634.1137650932561"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689413.3647058824,
            "unit": "ns",
            "range": "± 36979.59743524189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1293590.880952381,
            "unit": "ns",
            "range": "± 46879.11876263346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1087309.188235294,
            "unit": "ns",
            "range": "± 57442.99942126773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9536827.97,
            "unit": "ns",
            "range": "± 1351903.128297727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188916.3714285716,
            "unit": "ns",
            "range": "± 70755.2816582229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2344633.68,
            "unit": "ns",
            "range": "± 59823.060137598004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585090.611111111,
            "unit": "ns",
            "range": "± 53481.039418755296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2361429.9594594594,
            "unit": "ns",
            "range": "± 117557.71179360806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3047106.4,
            "unit": "ns",
            "range": "± 165711.92223143135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3003084.060677083,
            "unit": "ns",
            "range": "± 54176.691591329705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913815.4507161458,
            "unit": "ns",
            "range": "± 4531.781783323414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617399.0176432292,
            "unit": "ns",
            "range": "± 5465.59043052326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1631132.6772135417,
            "unit": "ns",
            "range": "± 15047.54322077401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465464.2025065104,
            "unit": "ns",
            "range": "± 610.4388366749661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429463.7232947716,
            "unit": "ns",
            "range": "± 834.5070800894074"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c67f7fd74595929b3b6f9885e46ba3a8d78f799",
          "message": "Merge pull request #3909 from s2quake/exp/sdk/seed\n\nAdd Seed Service to SDK",
          "timestamp": "2024-08-12T15:08:11+09:00",
          "tree_id": "5035a7c3c10989261e6e785ca4fc495d3d6b3bad",
          "url": "https://github.com/planetarium/libplanet/commit/5c67f7fd74595929b3b6f9885e46ba3a8d78f799"
        },
        "date": 1723443366920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10928763.5,
            "unit": "ns",
            "range": "± 63369.047234147656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26702618.785714287,
            "unit": "ns",
            "range": "± 404054.1421331435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67538883.06666666,
            "unit": "ns",
            "range": "± 191022.43603397056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135802312.85714287,
            "unit": "ns",
            "range": "± 362918.30030926055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272748512.21428573,
            "unit": "ns",
            "range": "± 286769.09342593944"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14215.541666666666,
            "unit": "ns",
            "range": "± 371.22054609164576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111360.02702702703,
            "unit": "ns",
            "range": "± 3578.8041181260414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105666.37254901961,
            "unit": "ns",
            "range": "± 4064.7078171046164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92580.42307692308,
            "unit": "ns",
            "range": "± 2076.623955810525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083213.6346153845,
            "unit": "ns",
            "range": "± 125600.02933698746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2728974.4081632653,
            "unit": "ns",
            "range": "± 158096.91510979505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5110.344444444445,
            "unit": "ns",
            "range": "± 554.1364404473959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26485.366666666665,
            "unit": "ns",
            "range": "± 1806.572000263159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22220.083333333332,
            "unit": "ns",
            "range": "± 815.8386843397709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30381.489361702126,
            "unit": "ns",
            "range": "± 4804.518804286838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1464.659574468085,
            "unit": "ns",
            "range": "± 225.38691002012328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5109.413043478261,
            "unit": "ns",
            "range": "± 616.2956895605024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 701523.5,
            "unit": "ns",
            "range": "± 47263.66903065324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1274552.7878787878,
            "unit": "ns",
            "range": "± 39692.62183545386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1081974.2533333334,
            "unit": "ns",
            "range": "± 54244.99682324513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9656405.06,
            "unit": "ns",
            "range": "± 1391348.0963048206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189697.533333333,
            "unit": "ns",
            "range": "± 39498.93531633238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288261.26,
            "unit": "ns",
            "range": "± 83746.21479373236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2545585.8,
            "unit": "ns",
            "range": "± 36823.5580479981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2261537.9,
            "unit": "ns",
            "range": "± 38996.69621620462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3201891.59,
            "unit": "ns",
            "range": "± 309154.51546795183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038469.6448102677,
            "unit": "ns",
            "range": "± 25091.30264534481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921793.5080078125,
            "unit": "ns",
            "range": "± 4437.302694068394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612258.6744791666,
            "unit": "ns",
            "range": "± 4892.423919521123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637100.9338541667,
            "unit": "ns",
            "range": "± 19676.913634287146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463191.59615885414,
            "unit": "ns",
            "range": "± 501.07989424023964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418643.50078125,
            "unit": "ns",
            "range": "± 1092.081091486251"
          }
        ]
      }
    ]
  }
}