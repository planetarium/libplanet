window.BENCHMARK_DATA = {
  "lastUpdate": 1698648123812,
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f795413e96b97bbafadb36021d87a6c60f43a8a4",
          "message": "Add composite action netcore_test_base",
          "timestamp": "2023-10-30T15:07:18+09:00",
          "tree_id": "7248fb19f55fa82e2171fa9a271971459c665e42",
          "url": "https://github.com/planetarium/libplanet/commit/f795413e96b97bbafadb36021d87a6c60f43a8a4"
        },
        "date": 1698646897492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8170017.666666667,
            "unit": "ns",
            "range": "± 212129.54386815184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20245178.893939395,
            "unit": "ns",
            "range": "± 910563.1187810673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50419250.233333334,
            "unit": "ns",
            "range": "± 2152546.440962274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103034946.86206897,
            "unit": "ns",
            "range": "± 4434971.93189309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205282699.7142857,
            "unit": "ns",
            "range": "± 2997407.1690931143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36891.0632183908,
            "unit": "ns",
            "range": "± 4182.87542609857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268176.4789473684,
            "unit": "ns",
            "range": "± 29216.784557736144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266803.1157894737,
            "unit": "ns",
            "range": "± 29340.486135315867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249859.0344827586,
            "unit": "ns",
            "range": "± 14149.747029909231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972813.2666666666,
            "unit": "ns",
            "range": "± 115681.05572492557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3596964.4615384615,
            "unit": "ns",
            "range": "± 213948.5807606485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15750.22340425532,
            "unit": "ns",
            "range": "± 2936.6366153891427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64463.72340425532,
            "unit": "ns",
            "range": "± 5730.87784077605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61906.12790697674,
            "unit": "ns",
            "range": "± 4798.222026215451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67314.33720930232,
            "unit": "ns",
            "range": "± 9585.59406224406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4579.032608695652,
            "unit": "ns",
            "range": "± 989.7827761584523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14471.96590909091,
            "unit": "ns",
            "range": "± 2240.138939907259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542521.0842105264,
            "unit": "ns",
            "range": "± 300527.44452710607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462858.0760869565,
            "unit": "ns",
            "range": "± 262334.3680710058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746599.847368421,
            "unit": "ns",
            "range": "± 140187.14240893244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8079597.353658536,
            "unit": "ns",
            "range": "± 690642.415572652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2924328,
            "unit": "ns",
            "range": "± 91613.63361452892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042294.346153846,
            "unit": "ns",
            "range": "± 103418.36489194304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3745998.121212121,
            "unit": "ns",
            "range": "± 176530.58981541242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3738082.595959596,
            "unit": "ns",
            "range": "± 302711.91152038414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12855429.072916666,
            "unit": "ns",
            "range": "± 1844515.6580958234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4326641.739955357,
            "unit": "ns",
            "range": "± 46790.09525468642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1358369.9520833334,
            "unit": "ns",
            "range": "± 7776.227333400817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872118.6514322917,
            "unit": "ns",
            "range": "± 8100.746747125041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950933.66015625,
            "unit": "ns",
            "range": "± 63151.083401823795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629417.4053344727,
            "unit": "ns",
            "range": "± 9470.554476270994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559233.7995256697,
            "unit": "ns",
            "range": "± 5358.888923202321"
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
          "id": "05d827971b5b36003e822abe7b362f39382a12cc",
          "message": "Add composite action macos_netcore_test_base",
          "timestamp": "2023-10-30T15:07:20+09:00",
          "tree_id": "f76f6128e625e75c530386bbfd01f3cbfe6cd056",
          "url": "https://github.com/planetarium/libplanet/commit/05d827971b5b36003e822abe7b362f39382a12cc"
        },
        "date": 1698646891310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7642566.357142857,
            "unit": "ns",
            "range": "± 34696.39475364982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18649408,
            "unit": "ns",
            "range": "± 138857.6628078355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46585783.928571425,
            "unit": "ns",
            "range": "± 269254.36988939095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94386016.37037037,
            "unit": "ns",
            "range": "± 2481456.0550726005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192829728.52631578,
            "unit": "ns",
            "range": "± 4114663.1586289103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41878.48936170213,
            "unit": "ns",
            "range": "± 9321.92927156024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229573.29292929292,
            "unit": "ns",
            "range": "± 18946.04642471887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233978.87634408602,
            "unit": "ns",
            "range": "± 25078.93658288893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201136.98969072165,
            "unit": "ns",
            "range": "± 15987.449735062266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3746972.3666666667,
            "unit": "ns",
            "range": "± 54319.39001191625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3483122.653846154,
            "unit": "ns",
            "range": "± 29603.327757326413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13182.582474226803,
            "unit": "ns",
            "range": "± 1378.4030892523713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61310.46703296703,
            "unit": "ns",
            "range": "± 7279.336160897196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56379.57865168539,
            "unit": "ns",
            "range": "± 5626.75993523303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60747.717391304344,
            "unit": "ns",
            "range": "± 7327.101395798314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3678.336956521739,
            "unit": "ns",
            "range": "± 717.1125906231154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13028.98947368421,
            "unit": "ns",
            "range": "± 1735.9452357693042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1238050.097826087,
            "unit": "ns",
            "range": "± 171570.94817071778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775153.5416666665,
            "unit": "ns",
            "range": "± 167624.92876173637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033040.5773195876,
            "unit": "ns",
            "range": "± 150862.21797055937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9437189.81707317,
            "unit": "ns",
            "range": "± 879853.2581631542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2902869.575,
            "unit": "ns",
            "range": "± 102667.98765148019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3005597.11627907,
            "unit": "ns",
            "range": "± 162971.34400287666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3582802.6923076925,
            "unit": "ns",
            "range": "± 86901.38366850978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3520081.5833333335,
            "unit": "ns",
            "range": "± 137832.40424667357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11072637.197802197,
            "unit": "ns",
            "range": "± 1019490.3500405181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423661.545774648,
            "unit": "ns",
            "range": "± 215361.65564007504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361211.126885776,
            "unit": "ns",
            "range": "± 39271.44534500838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891151.0967407227,
            "unit": "ns",
            "range": "± 17182.630652323016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2023028.9747596155,
            "unit": "ns",
            "range": "± 19470.529315509502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627778.8644831731,
            "unit": "ns",
            "range": "± 5512.344886569554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572559.2378305289,
            "unit": "ns",
            "range": "± 5569.5846857847555"
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
          "id": "b4e68ad4036d61a9c11148a9aac5a071c309018d",
          "message": "Add composite action netcore_build_base",
          "timestamp": "2023-10-30T15:07:15+09:00",
          "tree_id": "bd3a28705c00cb6c075306eb8b84cc3bf2e74113",
          "url": "https://github.com/planetarium/libplanet/commit/b4e68ad4036d61a9c11148a9aac5a071c309018d"
        },
        "date": 1698646990700,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9388882.933333334,
            "unit": "ns",
            "range": "± 144227.70271368348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19950927.969387755,
            "unit": "ns",
            "range": "± 1172001.3533037421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54571718.51,
            "unit": "ns",
            "range": "± 3995043.8063937435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108699522.27272727,
            "unit": "ns",
            "range": "± 8534872.390817465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220343588.55,
            "unit": "ns",
            "range": "± 20724610.146240797"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42971.51546391752,
            "unit": "ns",
            "range": "± 10168.475423575677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254291.73157894737,
            "unit": "ns",
            "range": "± 25119.316081307014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244638.09375,
            "unit": "ns",
            "range": "± 27419.94443584455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217127.1224489796,
            "unit": "ns",
            "range": "± 21743.790324138732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4025481.265957447,
            "unit": "ns",
            "range": "± 323516.1722762942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833268.326530612,
            "unit": "ns",
            "range": "± 260588.28981384338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16260.91111111111,
            "unit": "ns",
            "range": "± 2056.5827423859346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73634.98888888888,
            "unit": "ns",
            "range": "± 8887.927745037012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77712.82222222222,
            "unit": "ns",
            "range": "± 10923.22943853677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71463.61855670103,
            "unit": "ns",
            "range": "± 15662.35205200362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3249.064705882353,
            "unit": "ns",
            "range": "± 343.50665229085047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12673.904255319148,
            "unit": "ns",
            "range": "± 1357.464432050716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310090.9382022473,
            "unit": "ns",
            "range": "± 78306.784442078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2316312.5168539328,
            "unit": "ns",
            "range": "± 174022.83724434196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1624047.1020408163,
            "unit": "ns",
            "range": "± 115305.04073024701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7653414.821428572,
            "unit": "ns",
            "range": "± 600212.9687819784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530258.093023256,
            "unit": "ns",
            "range": "± 361320.11237595615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3355902.241573034,
            "unit": "ns",
            "range": "± 343856.33348746656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3916168.803030303,
            "unit": "ns",
            "range": "± 387851.5582047942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3818577.005050505,
            "unit": "ns",
            "range": "± 466739.8577932297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12029911.239130436,
            "unit": "ns",
            "range": "± 1430702.842746144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4415164.706430288,
            "unit": "ns",
            "range": "± 45542.91288261535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1356713.8194444445,
            "unit": "ns",
            "range": "± 28237.95107868391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 869557.3434244791,
            "unit": "ns",
            "range": "± 8719.109331710393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990948.0805844907,
            "unit": "ns",
            "range": "± 54060.24792136501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623444.8606770834,
            "unit": "ns",
            "range": "± 8056.965068631502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 621092.143515625,
            "unit": "ns",
            "range": "± 41671.36527739097"
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
          "id": "b1cf3d9c80e68ec7c295ef4e5e09d0d386111a12",
          "message": "Add composite action ulimit",
          "timestamp": "2023-10-30T15:07:21+09:00",
          "tree_id": "37e3af5bb831e4144ee928c604da5e75f4539f08",
          "url": "https://github.com/planetarium/libplanet/commit/b1cf3d9c80e68ec7c295ef4e5e09d0d386111a12"
        },
        "date": 1698647057042,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8916130.326086957,
            "unit": "ns",
            "range": "± 427137.4276871609"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21877598.737704918,
            "unit": "ns",
            "range": "± 875284.039575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53425967.90909091,
            "unit": "ns",
            "range": "± 875354.5540359174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105751083.78125,
            "unit": "ns",
            "range": "± 6677253.147751692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217473924.86666667,
            "unit": "ns",
            "range": "± 3849260.33478975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59155.741758241755,
            "unit": "ns",
            "range": "± 10216.791605914319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258652.7105263158,
            "unit": "ns",
            "range": "± 43764.39887501459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227632.79569892472,
            "unit": "ns",
            "range": "± 26527.19986679756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212505.04347826086,
            "unit": "ns",
            "range": "± 27309.40297829771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4007072.714285714,
            "unit": "ns",
            "range": "± 183984.38740875572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3969293.569892473,
            "unit": "ns",
            "range": "± 320129.4523728336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15870.348837209302,
            "unit": "ns",
            "range": "± 3815.794814336363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59718.05617977528,
            "unit": "ns",
            "range": "± 5975.671267655266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74669.93939393939,
            "unit": "ns",
            "range": "± 20549.871643085997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97460.8350515464,
            "unit": "ns",
            "range": "± 27859.348483603164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5293.416666666667,
            "unit": "ns",
            "range": "± 1556.8399892114896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13591.475903614459,
            "unit": "ns",
            "range": "± 2695.829122542612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1210369.2333333334,
            "unit": "ns",
            "range": "± 106011.63688583724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2579051.736263736,
            "unit": "ns",
            "range": "± 154583.37394607448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1838381.1538461538,
            "unit": "ns",
            "range": "± 173323.66712534116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8388083.346153846,
            "unit": "ns",
            "range": "± 553388.1461561129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3161097.5833333335,
            "unit": "ns",
            "range": "± 169219.36250125256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3190375.431578947,
            "unit": "ns",
            "range": "± 182313.00743411994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3614415.0090909093,
            "unit": "ns",
            "range": "± 151689.64067046906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3789235.263157895,
            "unit": "ns",
            "range": "± 317515.28272989794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13141952.72826087,
            "unit": "ns",
            "range": "± 1869751.5190565411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4699637.296232876,
            "unit": "ns",
            "range": "± 229819.26474558792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1466102.5089485012,
            "unit": "ns",
            "range": "± 58057.11199738414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 951820.58984375,
            "unit": "ns",
            "range": "± 35223.9145739004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1992483.6115722656,
            "unit": "ns",
            "range": "± 16641.053826827785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639915.6842041016,
            "unit": "ns",
            "range": "± 10127.156373247046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563030.9734933035,
            "unit": "ns",
            "range": "± 7381.270488609402"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d56d40c30e4db85f0457a8bf11671ba68e697bb",
          "message": "Merge pull request #3465 from OnedgeLee/prepare/4.0.0\n\n🔧 Prepare 4.0.0",
          "timestamp": "2023-10-30T15:01:50+09:00",
          "tree_id": "36a091534bd95b64bbd71255b59a5ba272bccca5",
          "url": "https://github.com/planetarium/libplanet/commit/6d56d40c30e4db85f0457a8bf11671ba68e697bb"
        },
        "date": 1698647156878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8523188.2,
            "unit": "ns",
            "range": "± 67121.76086167159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21533812.962962963,
            "unit": "ns",
            "range": "± 596041.5331662642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50990309.85714286,
            "unit": "ns",
            "range": "± 259933.16570725135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103464290.83333333,
            "unit": "ns",
            "range": "± 1257233.8141579519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219089436.46153846,
            "unit": "ns",
            "range": "± 791992.4685715784"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72491.77173913043,
            "unit": "ns",
            "range": "± 7468.376902828958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348445.3085106383,
            "unit": "ns",
            "range": "± 33145.500439460746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341698.9105263158,
            "unit": "ns",
            "range": "± 43191.4048392646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318668.87096774194,
            "unit": "ns",
            "range": "± 25276.892956777483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4275432.9,
            "unit": "ns",
            "range": "± 204051.7944826186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839272.149122807,
            "unit": "ns",
            "range": "± 165729.82990467295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21364.584210526315,
            "unit": "ns",
            "range": "± 3892.2670489147054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88513.85263157895,
            "unit": "ns",
            "range": "± 12774.215843834018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89947.98387096774,
            "unit": "ns",
            "range": "± 13262.37924881546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116394,
            "unit": "ns",
            "range": "± 18687.158237395906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7599.96875,
            "unit": "ns",
            "range": "± 1429.032904141266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21646.625,
            "unit": "ns",
            "range": "± 4753.971862392651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1544006.36,
            "unit": "ns",
            "range": "± 165776.68275792777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2783645.935897436,
            "unit": "ns",
            "range": "± 96074.99480005873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2368218.716494845,
            "unit": "ns",
            "range": "± 207542.0434211377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10536938.148148147,
            "unit": "ns",
            "range": "± 441878.4948014196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3374441.3214285714,
            "unit": "ns",
            "range": "± 93939.88491309455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3430748.7333333334,
            "unit": "ns",
            "range": "± 61809.35502641127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4488249.320987654,
            "unit": "ns",
            "range": "± 235471.6268270886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6207500.989361702,
            "unit": "ns",
            "range": "± 2249101.112245688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16449061.740963856,
            "unit": "ns",
            "range": "± 2335778.2220820426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6419529.7903053975,
            "unit": "ns",
            "range": "± 239549.69523699034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979023.0284148185,
            "unit": "ns",
            "range": "± 60054.34179628844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143770.0787760417,
            "unit": "ns",
            "range": "± 13174.295830853469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2807897.162876674,
            "unit": "ns",
            "range": "± 119563.60492223508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804687.8530970982,
            "unit": "ns",
            "range": "± 10132.308965519358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765444.6862630208,
            "unit": "ns",
            "range": "± 8074.857281095881"
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
          "id": "6805df44072ed56c11b9c5bcb8a55d96eddbf457",
          "message": "Add workflow planetarium/libplanet/main",
          "timestamp": "2023-10-30T15:07:14+09:00",
          "tree_id": "7ae5df3fe1f21eca0c8d593ce9aebf2fec13aae6",
          "url": "https://github.com/planetarium/libplanet/commit/6805df44072ed56c11b9c5bcb8a55d96eddbf457"
        },
        "date": 1698647108836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7563404.571428572,
            "unit": "ns",
            "range": "± 49924.638949758424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19444134.336956523,
            "unit": "ns",
            "range": "± 1459499.0588629027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46312967.28571428,
            "unit": "ns",
            "range": "± 707890.758381701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92021953.65,
            "unit": "ns",
            "range": "± 2671205.7383594373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200018046.7173913,
            "unit": "ns",
            "range": "± 15978180.091806501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40307.768421052635,
            "unit": "ns",
            "range": "± 7689.362163256166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 224938.82795698923,
            "unit": "ns",
            "range": "± 18847.57490087233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219101.22916666666,
            "unit": "ns",
            "range": "± 19191.48992020828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198346.90425531915,
            "unit": "ns",
            "range": "± 22953.60820328417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3677478.6842105263,
            "unit": "ns",
            "range": "± 76861.35883817232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3447311.9444444445,
            "unit": "ns",
            "range": "± 72207.1461619255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12414.326315789474,
            "unit": "ns",
            "range": "± 1564.5354041002365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59714.76804123711,
            "unit": "ns",
            "range": "± 6857.775256529785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53540.84444444445,
            "unit": "ns",
            "range": "± 5778.711455669866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66165.35567010309,
            "unit": "ns",
            "range": "± 13384.550924005078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3191.7912087912086,
            "unit": "ns",
            "range": "± 386.2183468938412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12030.546391752578,
            "unit": "ns",
            "range": "± 1374.9124822194635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1100086.855670103,
            "unit": "ns",
            "range": "± 102091.92594136158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2408730.623655914,
            "unit": "ns",
            "range": "± 223897.40930836633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1757091.8686868686,
            "unit": "ns",
            "range": "± 184140.89762808935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7729783.78313253,
            "unit": "ns",
            "range": "± 468925.7999220015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207748.5721649486,
            "unit": "ns",
            "range": "± 492358.52751012926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4042173.3387096776,
            "unit": "ns",
            "range": "± 993117.7951097317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4298761.418367347,
            "unit": "ns",
            "range": "± 544187.9820855177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141528.9285714286,
            "unit": "ns",
            "range": "± 438161.56775698945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11372771.410112359,
            "unit": "ns",
            "range": "± 1175853.7300702243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4475948.0515625,
            "unit": "ns",
            "range": "± 146503.71052337528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1348172.4463252316,
            "unit": "ns",
            "range": "± 35900.657741036215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 903016.6673971036,
            "unit": "ns",
            "range": "± 32451.056288007614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1997858.2931102808,
            "unit": "ns",
            "range": "± 95916.2038395446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796941.6047363281,
            "unit": "ns",
            "range": "± 95975.73507021934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726676.4361470541,
            "unit": "ns",
            "range": "± 60497.88113118898"
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
          "id": "0473b10223a809d22bfc053b0a44e4b8516d26f7",
          "message": "Add composite action linux_netcore_test_base",
          "timestamp": "2023-10-30T15:07:17+09:00",
          "tree_id": "4340a8daeb58643c671280dc6da1da9dadcd714e",
          "url": "https://github.com/planetarium/libplanet/commit/0473b10223a809d22bfc053b0a44e4b8516d26f7"
        },
        "date": 1698647155375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9815803.42,
            "unit": "ns",
            "range": "± 740866.939494354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24679100.659793813,
            "unit": "ns",
            "range": "± 1984188.5639933515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53380417.96,
            "unit": "ns",
            "range": "± 6419080.14681182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94288200.0909091,
            "unit": "ns",
            "range": "± 2288054.286649574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222801093.89,
            "unit": "ns",
            "range": "± 22438910.523988772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48212.67346938775,
            "unit": "ns",
            "range": "± 16464.15833456039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230757.42631578946,
            "unit": "ns",
            "range": "± 23554.115159831374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205030.26086956522,
            "unit": "ns",
            "range": "± 7841.382715892742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205842.587628866,
            "unit": "ns",
            "range": "± 22838.66173780794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3731214.923076923,
            "unit": "ns",
            "range": "± 57506.48608122614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3373552.0714285714,
            "unit": "ns",
            "range": "± 64851.893910333434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12655.03409090909,
            "unit": "ns",
            "range": "± 1107.4405611704863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60812.11494252874,
            "unit": "ns",
            "range": "± 6523.854306304703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69418.53,
            "unit": "ns",
            "range": "± 15275.870631310852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64331.052083333336,
            "unit": "ns",
            "range": "± 10963.895060241848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3444.2,
            "unit": "ns",
            "range": "± 626.2270583194475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13083.527472527472,
            "unit": "ns",
            "range": "± 1494.6899889695399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412792.3176470587,
            "unit": "ns",
            "range": "± 115197.19373526958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007085.6363636362,
            "unit": "ns",
            "range": "± 112942.25681542921"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244614.723404255,
            "unit": "ns",
            "range": "± 172460.05471313998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9860301.175824177,
            "unit": "ns",
            "range": "± 1611457.071686302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3121721.112244898,
            "unit": "ns",
            "range": "± 363936.5771291292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3282125.27,
            "unit": "ns",
            "range": "± 347540.42146187264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3589384.192982456,
            "unit": "ns",
            "range": "± 153075.38696416857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3490510.8358208956,
            "unit": "ns",
            "range": "± 163368.8299550954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11099721.11827957,
            "unit": "ns",
            "range": "± 1055208.4461116618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4270467.919084822,
            "unit": "ns",
            "range": "± 52036.39183034702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1414458.3266469594,
            "unit": "ns",
            "range": "± 48009.17177238956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1121753.3493982262,
            "unit": "ns",
            "range": "± 56044.7537990605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572005.7815625,
            "unit": "ns",
            "range": "± 276850.98716399726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 787140.080630524,
            "unit": "ns",
            "range": "± 69367.03263366902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718149.3791429924,
            "unit": "ns",
            "range": "± 68590.57144394048"
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
          "id": "a48f1d49507f0c4dda2dcd2f556edac891741821",
          "message": "Add composite action concat_files",
          "timestamp": "2023-10-30T15:07:16+09:00",
          "tree_id": "5591ecb16689f52cc4ee99ff55a9ff64db3f1fb1",
          "url": "https://github.com/planetarium/libplanet/commit/a48f1d49507f0c4dda2dcd2f556edac891741821"
        },
        "date": 1698647206126,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9532286.204545455,
            "unit": "ns",
            "range": "± 1033130.2097456913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22403257.58,
            "unit": "ns",
            "range": "± 1484506.8239650202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53647989.48,
            "unit": "ns",
            "range": "± 5627944.174157465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124409962.24468085,
            "unit": "ns",
            "range": "± 14929110.651040291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228803496.2,
            "unit": "ns",
            "range": "± 22812131.1137732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58024.57894736842,
            "unit": "ns",
            "range": "± 14719.984567651301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268237.0053763441,
            "unit": "ns",
            "range": "± 32086.561821322615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283144,
            "unit": "ns",
            "range": "± 20062.115383931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233898.74242424243,
            "unit": "ns",
            "range": "± 36126.26978125444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4672040.615384615,
            "unit": "ns",
            "range": "± 70595.44919060348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4161240.3673469387,
            "unit": "ns",
            "range": "± 359740.25384609133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20874.760869565216,
            "unit": "ns",
            "range": "± 4899.5954573296085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97576.52808988764,
            "unit": "ns",
            "range": "± 16952.69962819672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78702.9010989011,
            "unit": "ns",
            "range": "± 7665.740763009498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79710.25,
            "unit": "ns",
            "range": "± 13291.372716730764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5929.791666666667,
            "unit": "ns",
            "range": "± 1515.154575520035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19137.115384615383,
            "unit": "ns",
            "range": "± 4132.827791044208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1339029.324742268,
            "unit": "ns",
            "range": "± 110518.07140444744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2876319.85106383,
            "unit": "ns",
            "range": "± 165069.1602444428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2112419.5454545454,
            "unit": "ns",
            "range": "± 238592.9562034114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9911608.19879518,
            "unit": "ns",
            "range": "± 747841.4417469387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3079111.907216495,
            "unit": "ns",
            "range": "± 204685.53060600068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3803466.8588235294,
            "unit": "ns",
            "range": "± 203796.80787876697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4930588.47368421,
            "unit": "ns",
            "range": "± 107480.78423212237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4242686.189473684,
            "unit": "ns",
            "range": "± 290029.67258659436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12597030.137362637,
            "unit": "ns",
            "range": "± 1600512.7902917482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5462538.408302437,
            "unit": "ns",
            "range": "± 228557.1781102965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1396464.4750189013,
            "unit": "ns",
            "range": "± 63335.80414446322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 898277.5734049479,
            "unit": "ns",
            "range": "± 29552.699219755596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2488877.6586914062,
            "unit": "ns",
            "range": "± 179399.28503344185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 668900.1921470906,
            "unit": "ns",
            "range": "± 29217.483051359945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 611168.4096069336,
            "unit": "ns",
            "range": "± 11975.121723764534"
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
          "id": "c83d28be25e905472c248ca0c16f2a7693cbbd40",
          "message": "Add composite action codecov",
          "timestamp": "2023-10-30T15:07:19+09:00",
          "tree_id": "a966d282738fbf8351070820904c8bd55e1b0b6d",
          "url": "https://github.com/planetarium/libplanet/commit/c83d28be25e905472c248ca0c16f2a7693cbbd40"
        },
        "date": 1698647289689,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9427205.23655914,
            "unit": "ns",
            "range": "± 1143729.180893793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19158763.184210528,
            "unit": "ns",
            "range": "± 404818.1494961044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48887114.53225806,
            "unit": "ns",
            "range": "± 1472410.7513352036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104651002.67045455,
            "unit": "ns",
            "range": "± 7889443.745426208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254291418.375,
            "unit": "ns",
            "range": "± 34430509.82830498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51790.085106382976,
            "unit": "ns",
            "range": "± 8793.809673476235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302818.9784946237,
            "unit": "ns",
            "range": "± 60830.02913213937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320703.46315789473,
            "unit": "ns",
            "range": "± 75685.45488932784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306467.6842105263,
            "unit": "ns",
            "range": "± 83878.24302285632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5351203.333333333,
            "unit": "ns",
            "range": "± 1367455.4599713613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4749673.378947369,
            "unit": "ns",
            "range": "± 964360.3706165474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26873.75,
            "unit": "ns",
            "range": "± 5945.078583872635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113555.75806451614,
            "unit": "ns",
            "range": "± 24375.047187425105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105471.51546391753,
            "unit": "ns",
            "range": "± 21229.07790140752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92950.83695652174,
            "unit": "ns",
            "range": "± 17924.07003750511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7786.770833333333,
            "unit": "ns",
            "range": "± 2072.7798292664947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29347.51111111111,
            "unit": "ns",
            "range": "± 7883.453583930555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287441.4421052632,
            "unit": "ns",
            "range": "± 233360.75824940798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2485249.2674418604,
            "unit": "ns",
            "range": "± 189111.02342949543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1817544.211111111,
            "unit": "ns",
            "range": "± 196602.64644186173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9770084.65625,
            "unit": "ns",
            "range": "± 2447557.812112251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4304185.627659574,
            "unit": "ns",
            "range": "± 997137.2954495541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4161088.775510204,
            "unit": "ns",
            "range": "± 832496.8929332291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4683098.429292929,
            "unit": "ns",
            "range": "± 1008540.9530910185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4448313.3655913975,
            "unit": "ns",
            "range": "± 807320.1100641525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14613031.351063829,
            "unit": "ns",
            "range": "± 3127005.8665934075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5430927.036735373,
            "unit": "ns",
            "range": "± 703120.0287784844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1374739.1639229911,
            "unit": "ns",
            "range": "± 12749.240452226662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 910251.0787231445,
            "unit": "ns",
            "range": "± 47467.83004134314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2036051.9576822917,
            "unit": "ns",
            "range": "± 25912.774582995946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630434.2883112981,
            "unit": "ns",
            "range": "± 1804.155572641892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587215.4744001116,
            "unit": "ns",
            "range": "± 2963.4596447913623"
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
          "id": "fa3a07543ea88f1ec667b48daa0cdcadaa829f96",
          "message": "Add workflow planetarium/libplanet/docs",
          "timestamp": "2023-10-30T15:13:12+09:00",
          "tree_id": "823c2184923fdc2b7d69ff4b0ad9443903842de1",
          "url": "https://github.com/planetarium/libplanet/commit/fa3a07543ea88f1ec667b48daa0cdcadaa829f96"
        },
        "date": 1698647384735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8166410.666666667,
            "unit": "ns",
            "range": "± 309740.21121688717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20497491.543956045,
            "unit": "ns",
            "range": "± 1338361.9069430602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48169242.80188679,
            "unit": "ns",
            "range": "± 2000204.2074634777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99529701.56790124,
            "unit": "ns",
            "range": "± 5219283.925180396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201868674.92424244,
            "unit": "ns",
            "range": "± 6309811.656983481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53983.43406593407,
            "unit": "ns",
            "range": "± 12967.197316307362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233065.6875,
            "unit": "ns",
            "range": "± 20722.017956149928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227671.40721649484,
            "unit": "ns",
            "range": "± 21966.1973149857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238524.91176470587,
            "unit": "ns",
            "range": "± 4800.058268641428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3817151.5967741935,
            "unit": "ns",
            "range": "± 116391.75590002208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500418.1666666665,
            "unit": "ns",
            "range": "± 74254.47334296552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15591.12886597938,
            "unit": "ns",
            "range": "± 3655.2359942040325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70117.0412371134,
            "unit": "ns",
            "range": "± 13147.19075420481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76206.03684210527,
            "unit": "ns",
            "range": "± 16196.557183950854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79526.57731958762,
            "unit": "ns",
            "range": "± 17486.813575898563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5116.71875,
            "unit": "ns",
            "range": "± 1725.5116812618373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19416.552631578947,
            "unit": "ns",
            "range": "± 5106.707342327262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1277739.4247311829,
            "unit": "ns",
            "range": "± 201413.0845699539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2655817.3695652173,
            "unit": "ns",
            "range": "± 456225.85380071524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1905069.1325301204,
            "unit": "ns",
            "range": "± 169813.12025898343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10041458.726804124,
            "unit": "ns",
            "range": "± 2387287.016127619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3040279.933333333,
            "unit": "ns",
            "range": "± 45857.51139043428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3210020.3208955224,
            "unit": "ns",
            "range": "± 151651.72882777266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3823147.2413793104,
            "unit": "ns",
            "range": "± 109967.99457006152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3562085.533333333,
            "unit": "ns",
            "range": "± 129840.72347978714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11282909.647727273,
            "unit": "ns",
            "range": "± 968205.8108290208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4934313.8994140625,
            "unit": "ns",
            "range": "± 171453.1284034411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1430844.9464465727,
            "unit": "ns",
            "range": "± 58540.87278528399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 936288.7180254536,
            "unit": "ns",
            "range": "± 21705.24329064591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2288809.554361979,
            "unit": "ns",
            "range": "± 27154.81577928793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 672030.6713867188,
            "unit": "ns",
            "range": "± 10058.121411943332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596584.490234375,
            "unit": "ns",
            "range": "± 4116.405906868107"
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
          "id": "0c483bd24b4ce1c11fd097b7481d6c79a46042a2",
          "message": "Fix workflow planetarium/libplanet/main\n\n- update codecov token",
          "timestamp": "2023-10-30T15:20:50+09:00",
          "tree_id": "79a7e598202dccf3d34cba3eddc47c05641255ef",
          "url": "https://github.com/planetarium/libplanet/commit/0c483bd24b4ce1c11fd097b7481d6c79a46042a2"
        },
        "date": 1698648043023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10546197.204301076,
            "unit": "ns",
            "range": "± 2473141.6194890332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26010289.82474227,
            "unit": "ns",
            "range": "± 4990571.050008119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64499958.180851065,
            "unit": "ns",
            "range": "± 11003709.795245841"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126103207.29032259,
            "unit": "ns",
            "range": "± 22063870.7076764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207474993.42222223,
            "unit": "ns",
            "range": "± 13238070.723184265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53738.104651162794,
            "unit": "ns",
            "range": "± 10123.207437867497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348864.2272727273,
            "unit": "ns",
            "range": "± 99276.90413232241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233304.44827586206,
            "unit": "ns",
            "range": "± 23968.38647913103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223776.04444444444,
            "unit": "ns",
            "range": "± 19495.105876132035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3883987.210526316,
            "unit": "ns",
            "range": "± 132468.68183433943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3604825.44,
            "unit": "ns",
            "range": "± 142859.31922562342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19483.876288659794,
            "unit": "ns",
            "range": "± 5115.160388202513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75683.42929292929,
            "unit": "ns",
            "range": "± 13634.597476716808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77414.125,
            "unit": "ns",
            "range": "± 15413.778356597573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83637.26666666666,
            "unit": "ns",
            "range": "± 9269.27199885536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5561.2474226804125,
            "unit": "ns",
            "range": "± 1529.5603537109384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17234.020833333332,
            "unit": "ns",
            "range": "± 3974.431775286061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1190039.2826086956,
            "unit": "ns",
            "range": "± 133450.2576921681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469810.404494382,
            "unit": "ns",
            "range": "± 194005.3220634048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1832882.6333333333,
            "unit": "ns",
            "range": "± 185390.40893494542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8253359.130952381,
            "unit": "ns",
            "range": "± 1245778.1943720118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2953831.6428571427,
            "unit": "ns",
            "range": "± 128465.63370620667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3086103.4285714286,
            "unit": "ns",
            "range": "± 140354.50808964975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3810661.1666666665,
            "unit": "ns",
            "range": "± 138919.26122100942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3909301.5454545454,
            "unit": "ns",
            "range": "± 371703.4321808307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13967966.139175259,
            "unit": "ns",
            "range": "± 3145108.0112036667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4812708.011933379,
            "unit": "ns",
            "range": "± 252733.98883628278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1476552.017970995,
            "unit": "ns",
            "range": "± 80705.54263806342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 927609.0850423177,
            "unit": "ns",
            "range": "± 7758.828408107602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2201988.511160714,
            "unit": "ns",
            "range": "± 144941.91778388244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 721453.2484038979,
            "unit": "ns",
            "range": "± 76741.14396782733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588070.2414713542,
            "unit": "ns",
            "range": "± 5277.245595468657"
          }
        ]
      }
    ]
  }
}