window.BENCHMARK_DATA = {
  "lastUpdate": 1698647128776,
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
      }
    ]
  }
}