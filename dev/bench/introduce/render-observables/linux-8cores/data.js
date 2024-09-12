window.BENCHMARK_DATA = {
  "lastUpdate": 1726133239675,
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
          "id": "15f8eb55e77733c586dcb97431c888c817c2b502",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-17T19:44:20+09:00",
          "tree_id": "3b3ad6e02b44e81be470edacd1c1177cd58d7984",
          "url": "https://github.com/planetarium/libplanet/commit/15f8eb55e77733c586dcb97431c888c817c2b502"
        },
        "date": 1723892005572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203954.42592592593,
            "unit": "ns",
            "range": "± 8345.561750318057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190836.625,
            "unit": "ns",
            "range": "± 5829.324155757958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167601,
            "unit": "ns",
            "range": "± 2380.682745208469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3058479.9,
            "unit": "ns",
            "range": "± 20642.77522455323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839899.8,
            "unit": "ns",
            "range": "± 49043.98114258554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12676.987654320988,
            "unit": "ns",
            "range": "± 675.6398355230979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59588.765957446805,
            "unit": "ns",
            "range": "± 3414.238791484898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49799.57142857143,
            "unit": "ns",
            "range": "± 409.8745988874973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50332.93877551021,
            "unit": "ns",
            "range": "± 7185.597982586207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2487.84375,
            "unit": "ns",
            "range": "± 213.75486836561174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11767.175324675325,
            "unit": "ns",
            "range": "± 617.7205219182106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405418.588235294,
            "unit": "ns",
            "range": "± 47118.87179923086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551021.382352941,
            "unit": "ns",
            "range": "± 49303.18487922757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2986613.2666666666,
            "unit": "ns",
            "range": "± 30594.50565161442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2639660.1666666665,
            "unit": "ns",
            "range": "± 44077.97627203517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3251582.7666666666,
            "unit": "ns",
            "range": "± 44174.4509667016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10656990.266666668,
            "unit": "ns",
            "range": "± 137692.3108811126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26960261.7,
            "unit": "ns",
            "range": "± 146168.3454368382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67595903.9,
            "unit": "ns",
            "range": "± 466432.8342927843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135128444.66666666,
            "unit": "ns",
            "range": "± 703531.1213439842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282182407.4,
            "unit": "ns",
            "range": "± 1181684.6927859758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021526.6133333333,
            "unit": "ns",
            "range": "± 51470.702137076034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1926181.5,
            "unit": "ns",
            "range": "± 55205.58472590044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680421.0657894737,
            "unit": "ns",
            "range": "± 85064.51465208989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8451662,
            "unit": "ns",
            "range": "± 280186.98712365027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3657986.328125,
            "unit": "ns",
            "range": "± 4591.124547023162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197335.83515625,
            "unit": "ns",
            "range": "± 2774.502609153475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766867.06015625,
            "unit": "ns",
            "range": "± 1170.2685275188967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922819.573939732,
            "unit": "ns",
            "range": "± 1043.4771888182067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626659.7294270833,
            "unit": "ns",
            "range": "± 1792.2388662259007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587163.0147235577,
            "unit": "ns",
            "range": "± 507.03271242710986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32048.46153846154,
            "unit": "ns",
            "range": "± 281.7941374433398"
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
          "id": "e07908e64433b84ba9bc6fe1bfdbb90a501b6359",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-17T19:46:06+09:00",
          "tree_id": "27025bb6988dc06d706f41a31b8c6998a1d232bb",
          "url": "https://github.com/planetarium/libplanet/commit/e07908e64433b84ba9bc6fe1bfdbb90a501b6359"
        },
        "date": 1723892109748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201142.11904761905,
            "unit": "ns",
            "range": "± 6867.574549489729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191063.84444444443,
            "unit": "ns",
            "range": "± 6826.883046774966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177875.41304347827,
            "unit": "ns",
            "range": "± 6425.239352484464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3098870.4285714286,
            "unit": "ns",
            "range": "± 48449.19195279856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2894938.4,
            "unit": "ns",
            "range": "± 53597.647274857125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13130.707865168539,
            "unit": "ns",
            "range": "± 984.3173476883171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64788.52525252525,
            "unit": "ns",
            "range": "± 8500.99055734027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60047.76388888889,
            "unit": "ns",
            "range": "± 2970.105473031411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57197.063157894736,
            "unit": "ns",
            "range": "± 10202.756000021203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.9772727272725,
            "unit": "ns",
            "range": "± 400.4239700609506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12215.736263736264,
            "unit": "ns",
            "range": "± 836.1693187807895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2476890.1,
            "unit": "ns",
            "range": "± 36638.97687241202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569706.3846153845,
            "unit": "ns",
            "range": "± 35656.600608065215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3101074,
            "unit": "ns",
            "range": "± 49571.01807363999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586967.172413793,
            "unit": "ns",
            "range": "± 73943.17202616237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3223052.5833333335,
            "unit": "ns",
            "range": "± 18724.225462599046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10514830.4,
            "unit": "ns",
            "range": "± 104850.64372906825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28627244.133333333,
            "unit": "ns",
            "range": "± 141582.93408552694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69544213.06666666,
            "unit": "ns",
            "range": "± 456810.0155889233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137754111.2,
            "unit": "ns",
            "range": "± 705324.3693167198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286479299.96666664,
            "unit": "ns",
            "range": "± 2372034.763646961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012022.7875,
            "unit": "ns",
            "range": "± 43874.834901544826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1979689.7950819673,
            "unit": "ns",
            "range": "± 88032.51528466518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736102.8043478262,
            "unit": "ns",
            "range": "± 97131.99174797321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8304700.851851852,
            "unit": "ns",
            "range": "± 230425.34031967653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695023.664620536,
            "unit": "ns",
            "range": "± 5926.611498095506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201233.5010416666,
            "unit": "ns",
            "range": "± 1464.8622280456334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779348.2058454241,
            "unit": "ns",
            "range": "± 1763.0672831705376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919410.0665457589,
            "unit": "ns",
            "range": "± 2216.796136220049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636333.0184895833,
            "unit": "ns",
            "range": "± 453.7690815359135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572751.2452473958,
            "unit": "ns",
            "range": "± 863.0129098923421"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31733.53846153846,
            "unit": "ns",
            "range": "± 209.73062698956463"
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
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "18e9915fa6d7afeb9ddca3386433ed65a2bd1d95",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-21T11:07:04+09:00",
          "tree_id": "bf1c81b1746539a7e92dd88e5344fd37d4b5e680",
          "url": "https://github.com/planetarium/libplanet/commit/18e9915fa6d7afeb9ddca3386433ed65a2bd1d95"
        },
        "date": 1724206558917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201869.85714285713,
            "unit": "ns",
            "range": "± 6894.327601015914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191076.6857142857,
            "unit": "ns",
            "range": "± 5090.846663499157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161644.13333333333,
            "unit": "ns",
            "range": "± 2992.4022806975354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3107745.7333333334,
            "unit": "ns",
            "range": "± 57351.41301717567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2771398.75,
            "unit": "ns",
            "range": "± 51493.176265728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13584.072164948453,
            "unit": "ns",
            "range": "± 1762.604844679593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61405.739583333336,
            "unit": "ns",
            "range": "± 4299.990659095832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50089.5,
            "unit": "ns",
            "range": "± 605.0078887539777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52734.36082474227,
            "unit": "ns",
            "range": "± 9562.076305630453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2928.4210526315787,
            "unit": "ns",
            "range": "± 311.2059104532044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11828.977777777778,
            "unit": "ns",
            "range": "± 788.3505177435143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423189.533333333,
            "unit": "ns",
            "range": "± 37049.9942121967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516464.214285714,
            "unit": "ns",
            "range": "± 42712.943336756965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3031570.6666666665,
            "unit": "ns",
            "range": "± 31962.926023009546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2637208.3,
            "unit": "ns",
            "range": "± 38902.46576503859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3286181,
            "unit": "ns",
            "range": "± 36844.869785358176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10308459.214285715,
            "unit": "ns",
            "range": "± 61397.5938280453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26867161.884615384,
            "unit": "ns",
            "range": "± 150472.33058192595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68337891.1,
            "unit": "ns",
            "range": "± 389194.8892952512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135760556.96666667,
            "unit": "ns",
            "range": "± 810400.977867118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283344920.26666665,
            "unit": "ns",
            "range": "± 2191388.2068954264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010596.4315068494,
            "unit": "ns",
            "range": "± 45082.9191303612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959952.0793650793,
            "unit": "ns",
            "range": "± 89659.58816119742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1678313.7078651686,
            "unit": "ns",
            "range": "± 91317.80369840292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8252030.4,
            "unit": "ns",
            "range": "± 216373.28667856238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3756566.1389508927,
            "unit": "ns",
            "range": "± 3091.8356065640646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212037.5363932292,
            "unit": "ns",
            "range": "± 7564.93150682707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770638.474609375,
            "unit": "ns",
            "range": "± 1283.4131102013414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929635.9223958333,
            "unit": "ns",
            "range": "± 14070.66365715348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 656915.2608072917,
            "unit": "ns",
            "range": "± 1460.5548503731573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566430.2815104167,
            "unit": "ns",
            "range": "± 2237.186442701575"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32221.285714285714,
            "unit": "ns",
            "range": "± 362.66480149272587"
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
          "id": "4cb0d8fd4457905bafeb1b8a80fdb7f7d4cb5370",
          "message": "feat: Add IRendererService and implementations of IObservable",
          "timestamp": "2024-08-30T10:47:15+09:00",
          "tree_id": "49f1d596d530e34ac5a7f77781b7e6f3040f9200",
          "url": "https://github.com/planetarium/libplanet/commit/4cb0d8fd4457905bafeb1b8a80fdb7f7d4cb5370"
        },
        "date": 1724983097578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203454.6896551724,
            "unit": "ns",
            "range": "± 8872.572433415626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198224.60784313726,
            "unit": "ns",
            "range": "± 8066.275073609705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169184.13636363635,
            "unit": "ns",
            "range": "± 4114.966519512638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3142697.714285714,
            "unit": "ns",
            "range": "± 21455.821961124504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2975420.3125,
            "unit": "ns",
            "range": "± 54443.60926159439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18115.426966292136,
            "unit": "ns",
            "range": "± 1020.4627836922418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69615.25268817204,
            "unit": "ns",
            "range": "± 4308.422930109552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57425.54,
            "unit": "ns",
            "range": "± 6141.165176548875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62778.01063829787,
            "unit": "ns",
            "range": "± 9768.905400315622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2831.3541666666665,
            "unit": "ns",
            "range": "± 336.2441149292599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13397.606382978724,
            "unit": "ns",
            "range": "± 1503.9430484104262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2443405.5714285714,
            "unit": "ns",
            "range": "± 38011.33236987316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547758.6764705884,
            "unit": "ns",
            "range": "± 46842.717321152624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3162470.4736842103,
            "unit": "ns",
            "range": "± 33515.76771273887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2619989.966666667,
            "unit": "ns",
            "range": "± 48993.33524625958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3340776.3125,
            "unit": "ns",
            "range": "± 63243.778378291885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10564728.266666668,
            "unit": "ns",
            "range": "± 108184.68666819367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28641404.333333332,
            "unit": "ns",
            "range": "± 190546.72701078813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69075086.42857143,
            "unit": "ns",
            "range": "± 500779.4919333204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139577832,
            "unit": "ns",
            "range": "± 828267.3245110031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289593076.53333336,
            "unit": "ns",
            "range": "± 1394253.7779662367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009588.051724138,
            "unit": "ns",
            "range": "± 40024.07872304941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1990488.125,
            "unit": "ns",
            "range": "± 67226.49168895018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714653.030120482,
            "unit": "ns",
            "range": "± 90969.88249258952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8488718.772727273,
            "unit": "ns",
            "range": "± 175037.21246289092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3765675.4436383927,
            "unit": "ns",
            "range": "± 3800.1869577484163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204686.2170572917,
            "unit": "ns",
            "range": "± 1896.3608286324397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761651.22265625,
            "unit": "ns",
            "range": "± 1062.0479164373946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955607.8211495536,
            "unit": "ns",
            "range": "± 2197.793283799194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625441.0011268029,
            "unit": "ns",
            "range": "± 1380.3209858639243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579188.7622445914,
            "unit": "ns",
            "range": "± 1097.4020531938975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41306.60101010101,
            "unit": "ns",
            "range": "± 5697.119208460283"
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
          "id": "2206874677e919a6d5bf6624b8033e57c03eac61",
          "message": "feat: Add IRendererService and implementations of IObservable",
          "timestamp": "2024-08-30T11:26:46+09:00",
          "tree_id": "d9a0edba83950a4e5eb175403af88f74f29d2510",
          "url": "https://github.com/planetarium/libplanet/commit/2206874677e919a6d5bf6624b8033e57c03eac61"
        },
        "date": 1724985349845,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230830.5,
            "unit": "ns",
            "range": "± 14470.671899389476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212191.91,
            "unit": "ns",
            "range": "± 18689.277745498453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177702.9923076923,
            "unit": "ns",
            "range": "± 8098.1176943377495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3214406.1428571427,
            "unit": "ns",
            "range": "± 22313.255687206147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2903870.6428571427,
            "unit": "ns",
            "range": "± 31484.80292167133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25283.928571428572,
            "unit": "ns",
            "range": "± 4854.364815064064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67642.26595744681,
            "unit": "ns",
            "range": "± 7114.357370801231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55343.18947368421,
            "unit": "ns",
            "range": "± 3714.295446763149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75103.96153846153,
            "unit": "ns",
            "range": "± 7095.643208347709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3896.531914893617,
            "unit": "ns",
            "range": "± 617.4329218214574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18945.93,
            "unit": "ns",
            "range": "± 3124.4900230503886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2507415.066666667,
            "unit": "ns",
            "range": "± 38953.51179742824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585241.3421052634,
            "unit": "ns",
            "range": "± 88759.24424159582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3109330.8571428573,
            "unit": "ns",
            "range": "± 57475.66616689685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2730518.6666666665,
            "unit": "ns",
            "range": "± 69685.55443572572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3325445.785714286,
            "unit": "ns",
            "range": "± 47146.25276475577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10696616.133333333,
            "unit": "ns",
            "range": "± 71526.59959650043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26987367.466666665,
            "unit": "ns",
            "range": "± 94509.3322276896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70447502.46666667,
            "unit": "ns",
            "range": "± 399596.1540537551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139441981.7,
            "unit": "ns",
            "range": "± 796909.8042897775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287424667.3333333,
            "unit": "ns",
            "range": "± 1425996.988451021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1069588.511904762,
            "unit": "ns",
            "range": "± 56990.4152434983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2059449.888888889,
            "unit": "ns",
            "range": "± 78131.63152021145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1789791.1379310344,
            "unit": "ns",
            "range": "± 77210.16554433845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8471997.52173913,
            "unit": "ns",
            "range": "± 188655.6123008921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3802303.572591146,
            "unit": "ns",
            "range": "± 4346.341344408623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1190984.9035993305,
            "unit": "ns",
            "range": "± 1112.437486495175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762201.6623883928,
            "unit": "ns",
            "range": "± 1185.8982948285638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974586.753627232,
            "unit": "ns",
            "range": "± 2603.4207166578485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644582.025251116,
            "unit": "ns",
            "range": "± 725.2589061632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582965.1913311298,
            "unit": "ns",
            "range": "± 284.769524562866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32988.42857142857,
            "unit": "ns",
            "range": "± 582.7753841332425"
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
          "id": "5e7876dcf975af28985966d18881b7a8245fdd0a",
          "message": "feat: Add IRendererService and implementations of IObservable",
          "timestamp": "2024-08-30T15:51:12+09:00",
          "tree_id": "d1c0f577ab66966cd30ea7cf05387e2ad56449bf",
          "url": "https://github.com/planetarium/libplanet/commit/5e7876dcf975af28985966d18881b7a8245fdd0a"
        },
        "date": 1725001218000,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202715.57692307694,
            "unit": "ns",
            "range": "± 8032.803348833186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191500.23076923078,
            "unit": "ns",
            "range": "± 5813.57494626761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170072.41666666666,
            "unit": "ns",
            "range": "± 1158.7077016568016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3082214.7333333334,
            "unit": "ns",
            "range": "± 37551.016623990865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2820734.923076923,
            "unit": "ns",
            "range": "± 16234.850391783404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13005.746753246753,
            "unit": "ns",
            "range": "± 663.3820871676037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61288.18965517241,
            "unit": "ns",
            "range": "± 3356.469595684163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50517.769230769234,
            "unit": "ns",
            "range": "± 407.9671461131304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49601.65979381443,
            "unit": "ns",
            "range": "± 6504.256679742181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2587.21875,
            "unit": "ns",
            "range": "± 180.86655174319458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12102.776119402984,
            "unit": "ns",
            "range": "± 587.1587421745379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2386415.45,
            "unit": "ns",
            "range": "± 53899.9334610223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527599.3333333335,
            "unit": "ns",
            "range": "± 32276.559996971417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3015254.8,
            "unit": "ns",
            "range": "± 37314.185585186155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2547542,
            "unit": "ns",
            "range": "± 52461.68512604895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3244973.1333333333,
            "unit": "ns",
            "range": "± 56624.364758173375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10177826.633333333,
            "unit": "ns",
            "range": "± 53952.45247155349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26873560.2,
            "unit": "ns",
            "range": "± 183164.18672140656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68819560.46153846,
            "unit": "ns",
            "range": "± 167914.4681624226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135597604.64285713,
            "unit": "ns",
            "range": "± 654918.5015852803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297821001.65384614,
            "unit": "ns",
            "range": "± 1582435.6017057402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005889.2419354839,
            "unit": "ns",
            "range": "± 41424.59048846746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1938660.4857142856,
            "unit": "ns",
            "range": "± 63434.4759089675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1697773.5875,
            "unit": "ns",
            "range": "± 85205.0973890697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8510089.285714285,
            "unit": "ns",
            "range": "± 200633.4344460421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702727.0393415177,
            "unit": "ns",
            "range": "± 4327.687734281104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204871.5453125,
            "unit": "ns",
            "range": "± 1399.815302644528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768941.7027994791,
            "unit": "ns",
            "range": "± 647.1823008260018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955261.0639322917,
            "unit": "ns",
            "range": "± 3446.139742059577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616934.8807896206,
            "unit": "ns",
            "range": "± 774.1911730133777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577065.0876116072,
            "unit": "ns",
            "range": "± 883.3129878507001"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32087.615384615383,
            "unit": "ns",
            "range": "± 216.03145544940844"
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
          "id": "6dab728198eacacd5f35cafb2d6ea72a9191062d",
          "message": "WIP",
          "timestamp": "2024-08-21T11:50:47+09:00",
          "tree_id": "b96e6e51d0ccd8c202f953c8a4d387de995a4971",
          "url": "https://github.com/planetarium/libplanet/commit/6dab728198eacacd5f35cafb2d6ea72a9191062d"
        },
        "date": 1725237534587,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201704.17857142858,
            "unit": "ns",
            "range": "± 8651.759194957547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192117.5483870968,
            "unit": "ns",
            "range": "± 7813.000644527734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166814.11111111112,
            "unit": "ns",
            "range": "± 3350.521397333097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3108132.466666667,
            "unit": "ns",
            "range": "± 30240.149345026784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825581,
            "unit": "ns",
            "range": "± 38293.816300509185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12961.351648351649,
            "unit": "ns",
            "range": "± 950.6773418478051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75160.52127659574,
            "unit": "ns",
            "range": "± 10796.281883606742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50800.78571428572,
            "unit": "ns",
            "range": "± 767.5407710114397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58177.49484536082,
            "unit": "ns",
            "range": "± 9770.927040549632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2666.360824742268,
            "unit": "ns",
            "range": "± 290.17391285109125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11692.625,
            "unit": "ns",
            "range": "± 703.8303954609466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2414231.3,
            "unit": "ns",
            "range": "± 39922.17911709158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2529056,
            "unit": "ns",
            "range": "± 41023.44075734541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3099975.6333333333,
            "unit": "ns",
            "range": "± 43989.40701199172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2572716.488372093,
            "unit": "ns",
            "range": "± 89058.08386595156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3239614.033333333,
            "unit": "ns",
            "range": "± 59013.05459190082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10170237.642857144,
            "unit": "ns",
            "range": "± 77415.79841807995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27007371.14285714,
            "unit": "ns",
            "range": "± 145383.01658079555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68895663.73333333,
            "unit": "ns",
            "range": "± 365380.9937140891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138207601.26666668,
            "unit": "ns",
            "range": "± 581626.6917065406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283040358.5714286,
            "unit": "ns",
            "range": "± 1061870.1879693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004031.1049382716,
            "unit": "ns",
            "range": "± 52750.2368065014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1961026.7922077922,
            "unit": "ns",
            "range": "± 99849.17901691026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680250.7333333334,
            "unit": "ns",
            "range": "± 72959.54339023588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8299763.151515151,
            "unit": "ns",
            "range": "± 261437.74377840912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733802.9729352677,
            "unit": "ns",
            "range": "± 8417.35533414823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205954.4776041666,
            "unit": "ns",
            "range": "± 1439.643360002716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775727.6469726562,
            "unit": "ns",
            "range": "± 862.2032605110617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975165.5414663462,
            "unit": "ns",
            "range": "± 1793.3113025788348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622434.8919921875,
            "unit": "ns",
            "range": "± 1174.654314993174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587794.0960286459,
            "unit": "ns",
            "range": "± 853.1155295496347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32527.26923076923,
            "unit": "ns",
            "range": "± 270.6372584124841"
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
          "id": "5e7876dcf975af28985966d18881b7a8245fdd0a",
          "message": "feat: Add IRendererService and implementations of IObservable",
          "timestamp": "2024-08-30T15:51:12+09:00",
          "tree_id": "d1c0f577ab66966cd30ea7cf05387e2ad56449bf",
          "url": "https://github.com/planetarium/libplanet/commit/5e7876dcf975af28985966d18881b7a8245fdd0a"
        },
        "date": 1725238019374,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208248.5,
            "unit": "ns",
            "range": "± 8307.35808149123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191607.02325581395,
            "unit": "ns",
            "range": "± 7033.356167267286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165263.4705882353,
            "unit": "ns",
            "range": "± 3254.0100859871163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3131968.1428571427,
            "unit": "ns",
            "range": "± 27043.541096100627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832220.7333333334,
            "unit": "ns",
            "range": "± 35723.65000241771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12662.66304347826,
            "unit": "ns",
            "range": "± 770.5324158618718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61268.85263157895,
            "unit": "ns",
            "range": "± 3954.7000961377507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51559.3125,
            "unit": "ns",
            "range": "± 435.6039055150906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56697.92268041237,
            "unit": "ns",
            "range": "± 10873.492568737833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2727.96875,
            "unit": "ns",
            "range": "± 357.1993532476316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12504.333333333334,
            "unit": "ns",
            "range": "± 859.2312708529608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429913.214285714,
            "unit": "ns",
            "range": "± 37004.212022580454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2568727.277777778,
            "unit": "ns",
            "range": "± 53668.98851161141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3019176.5714285714,
            "unit": "ns",
            "range": "± 30227.16332581135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2600324.5,
            "unit": "ns",
            "range": "± 75720.48162667656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3295122.523809524,
            "unit": "ns",
            "range": "± 77258.58834758699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10309012.785714285,
            "unit": "ns",
            "range": "± 62684.96079256917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26556440.366666667,
            "unit": "ns",
            "range": "± 95015.66985868824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68763803.16666667,
            "unit": "ns",
            "range": "± 393095.34790459945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138573183.2,
            "unit": "ns",
            "range": "± 734381.2310935357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285355591.14285713,
            "unit": "ns",
            "range": "± 1333274.44930066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012717.5833333334,
            "unit": "ns",
            "range": "± 53990.50131500895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1954712.7142857143,
            "unit": "ns",
            "range": "± 55122.00199883699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686849.331460674,
            "unit": "ns",
            "range": "± 90256.38152195765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8325665,
            "unit": "ns",
            "range": "± 126533.23904413417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3613585.863839286,
            "unit": "ns",
            "range": "± 6275.3374049347885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1188506.4052083334,
            "unit": "ns",
            "range": "± 905.9847589829683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760646.0503627232,
            "unit": "ns",
            "range": "± 578.114331080054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2021035.4515625,
            "unit": "ns",
            "range": "± 2509.0266728617244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633395.0673828125,
            "unit": "ns",
            "range": "± 558.7570667450825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580494.2859375,
            "unit": "ns",
            "range": "± 933.0191051547139"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32936.307692307695,
            "unit": "ns",
            "range": "± 175.64708205916043"
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
          "id": "3e60fa48aba9a827fa35587df746ec5f09feb9fc",
          "message": "WIP",
          "timestamp": "2024-09-09T17:41:14+09:00",
          "tree_id": "c540c4c939babe2dba9327cbe60c30f78975f8fd",
          "url": "https://github.com/planetarium/libplanet/commit/3e60fa48aba9a827fa35587df746ec5f09feb9fc"
        },
        "date": 1725872050523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2403388,
            "unit": "ns",
            "range": "± 47051.19400681205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2483431.4285714286,
            "unit": "ns",
            "range": "± 29669.8583769773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3056533.9285714286,
            "unit": "ns",
            "range": "± 41893.919240173724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2539804.1,
            "unit": "ns",
            "range": "± 37234.78780618239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3325090.9523809524,
            "unit": "ns",
            "range": "± 75692.28804605934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012703.2407407408,
            "unit": "ns",
            "range": "± 37274.52468139559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957299.596491228,
            "unit": "ns",
            "range": "± 84919.55467042653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684822.0657894737,
            "unit": "ns",
            "range": "± 85448.80415427481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8280147.875,
            "unit": "ns",
            "range": "± 209170.84794998114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10291977.92857143,
            "unit": "ns",
            "range": "± 50959.98022387354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26599115.066666666,
            "unit": "ns",
            "range": "± 107202.38102930543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68782583.57142857,
            "unit": "ns",
            "range": "± 377426.8270220813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137023900.92857143,
            "unit": "ns",
            "range": "± 576900.3893616382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283943774.8,
            "unit": "ns",
            "range": "± 2942492.095768391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202614.6511627907,
            "unit": "ns",
            "range": "± 6590.465338306188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190838.63157894736,
            "unit": "ns",
            "range": "± 5481.622488263916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165303.33333333334,
            "unit": "ns",
            "range": "± 3830.8001165987935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3059675.9285714286,
            "unit": "ns",
            "range": "± 25000.91706153161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2835318.714285714,
            "unit": "ns",
            "range": "± 33717.48608985818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16987.456521739132,
            "unit": "ns",
            "range": "± 997.2795568808098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59790.03846153846,
            "unit": "ns",
            "range": "± 3072.9032992942007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48757.055555555555,
            "unit": "ns",
            "range": "± 1605.3944231771375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53745.989795918365,
            "unit": "ns",
            "range": "± 10857.001564855567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2633.4395604395604,
            "unit": "ns",
            "range": "± 210.00022268724746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12271.138888888889,
            "unit": "ns",
            "range": "± 620.932608567022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32124.8,
            "unit": "ns",
            "range": "± 357.967716022389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3871803.9235491073,
            "unit": "ns",
            "range": "± 7866.198619110215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201030.9501302084,
            "unit": "ns",
            "range": "± 2202.113648460885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762706.2504882812,
            "unit": "ns",
            "range": "± 1818.3091750271362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1923604.8302176339,
            "unit": "ns",
            "range": "± 4807.121728189578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625287.945452009,
            "unit": "ns",
            "range": "± 530.5351188350712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571702.8140625,
            "unit": "ns",
            "range": "± 1051.1201520416798"
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
          "id": "e8942572ec684eb295490c7bce5dab2767217636",
          "message": "test: Add test code for renderer service",
          "timestamp": "2024-09-10T10:21:08+09:00",
          "tree_id": "342158f5d01165cc095ed320ece8b4903a0bde11",
          "url": "https://github.com/planetarium/libplanet/commit/e8942572ec684eb295490c7bce5dab2767217636"
        },
        "date": 1725931823254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429590.6666666665,
            "unit": "ns",
            "range": "± 37456.9138585859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580388.033333333,
            "unit": "ns",
            "range": "± 34946.73705975723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3214923.8,
            "unit": "ns",
            "range": "± 44402.32404824903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2605691.35483871,
            "unit": "ns",
            "range": "± 79436.3629935092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3298683.6666666665,
            "unit": "ns",
            "range": "± 62115.10043933146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033569.567164179,
            "unit": "ns",
            "range": "± 43327.327743593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1962852.3484848484,
            "unit": "ns",
            "range": "± 60799.018673269515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1691237.0606060605,
            "unit": "ns",
            "range": "± 77989.88089487166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8477218.085714286,
            "unit": "ns",
            "range": "± 253774.70527631528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10565139.333333334,
            "unit": "ns",
            "range": "± 144791.74382079477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27072400.5,
            "unit": "ns",
            "range": "± 198208.76663544137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69093304.78571428,
            "unit": "ns",
            "range": "± 339867.09718323464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140719404.7,
            "unit": "ns",
            "range": "± 698141.113235733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290049402.1333333,
            "unit": "ns",
            "range": "± 1539647.042557429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202789.32653061225,
            "unit": "ns",
            "range": "± 8060.866546128264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197260.47826086957,
            "unit": "ns",
            "range": "± 7455.612155324874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169195.9714285714,
            "unit": "ns",
            "range": "± 5523.536428379038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162679.533333333,
            "unit": "ns",
            "range": "± 35274.266431304655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881807.8666666667,
            "unit": "ns",
            "range": "± 32063.901312995644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17303.868686868685,
            "unit": "ns",
            "range": "± 4374.5934240153165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61904.83157894737,
            "unit": "ns",
            "range": "± 4350.922038873354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51260.916666666664,
            "unit": "ns",
            "range": "± 769.2966632324659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60753.3969072165,
            "unit": "ns",
            "range": "± 10486.49618605254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3054.625,
            "unit": "ns",
            "range": "± 482.7428050105705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12418.566666666668,
            "unit": "ns",
            "range": "± 1101.6929673833915"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32073.928571428572,
            "unit": "ns",
            "range": "± 288.7576743664045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3702219.462332589,
            "unit": "ns",
            "range": "± 5888.9234054251265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217882.3874162945,
            "unit": "ns",
            "range": "± 1464.845446415205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751821.0686848959,
            "unit": "ns",
            "range": "± 1412.4514336737102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964773.8666294643,
            "unit": "ns",
            "range": "± 1586.1541025284143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622481.7763020833,
            "unit": "ns",
            "range": "± 535.4848802954378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558760.3326322115,
            "unit": "ns",
            "range": "± 643.8088028338176"
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
          "id": "9c821a189e34a608c3b8d2e66a63002a927067f6",
          "message": "refactor: Change to use System.Reactive instead of R3",
          "timestamp": "2024-09-12T13:14:29+09:00",
          "tree_id": "a8746e2010f95237e47a81debd74df9248a7db38",
          "url": "https://github.com/planetarium/libplanet/commit/9c821a189e34a608c3b8d2e66a63002a927067f6"
        },
        "date": 1726115116585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2538405.1333333333,
            "unit": "ns",
            "range": "± 44068.67470188946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2742904.1,
            "unit": "ns",
            "range": "± 46819.00187927364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3155935.6666666665,
            "unit": "ns",
            "range": "± 53423.77251837648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2680456.6,
            "unit": "ns",
            "range": "± 48305.5214424663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3383959.3333333335,
            "unit": "ns",
            "range": "± 52919.10361737684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079573.2204301076,
            "unit": "ns",
            "range": "± 68549.14602175796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2048711.875,
            "unit": "ns",
            "range": "± 39594.03313274194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1799805.5333333334,
            "unit": "ns",
            "range": "± 90316.92530440482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8733604.310344828,
            "unit": "ns",
            "range": "± 249201.5969309506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11051356.666666666,
            "unit": "ns",
            "range": "± 89238.16386155058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27372416,
            "unit": "ns",
            "range": "± 180970.18275553416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70860626.13333334,
            "unit": "ns",
            "range": "± 375789.32071837934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140655085.66666666,
            "unit": "ns",
            "range": "± 1114800.1311298981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289931525.6923077,
            "unit": "ns",
            "range": "± 955302.4495071692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246651,
            "unit": "ns",
            "range": "± 8218.166208380762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211655.22839506174,
            "unit": "ns",
            "range": "± 10628.70275952379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201000.76530612246,
            "unit": "ns",
            "range": "± 12118.636904738378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3208038.9166666665,
            "unit": "ns",
            "range": "± 12186.462701466837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3036096.285714286,
            "unit": "ns",
            "range": "± 45286.43562315928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26668.89393939394,
            "unit": "ns",
            "range": "± 3547.6404225510214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75382.47959183673,
            "unit": "ns",
            "range": "± 7755.790502199774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56555.16494845361,
            "unit": "ns",
            "range": "± 3546.4180423128246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76674.45918367348,
            "unit": "ns",
            "range": "± 11336.511936434188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3963.84375,
            "unit": "ns",
            "range": "± 1126.0593545927272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19538.659574468085,
            "unit": "ns",
            "range": "± 2177.5638469619016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35514.36363636364,
            "unit": "ns",
            "range": "± 3099.238438831619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3770676.666466346,
            "unit": "ns",
            "range": "± 5060.367861267712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218278.940234375,
            "unit": "ns",
            "range": "± 1493.809371307881"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767307.9876302084,
            "unit": "ns",
            "range": "± 1210.5675777562342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939570.8698381695,
            "unit": "ns",
            "range": "± 5941.937796572718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619116.4741908482,
            "unit": "ns",
            "range": "± 1004.3365410904407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575669.5299729567,
            "unit": "ns",
            "range": "± 597.9316555588845"
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
          "id": "9a82f9fe026f8dda8c36d95a3d317712891fdf93",
          "message": "refactor: Change swarm events to observable properties",
          "timestamp": "2024-09-12T15:07:30+09:00",
          "tree_id": "95bfa9a0e8a286ec755e68b49776592bda0bcc3a",
          "url": "https://github.com/planetarium/libplanet/commit/9a82f9fe026f8dda8c36d95a3d317712891fdf93"
        },
        "date": 1726133212914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2542070.533333333,
            "unit": "ns",
            "range": "± 41165.81689055455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2641630.470588235,
            "unit": "ns",
            "range": "± 83133.9224411651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3141998.6333333333,
            "unit": "ns",
            "range": "± 52888.99941773831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2719649.7,
            "unit": "ns",
            "range": "± 71894.27534175907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3320236.3333333335,
            "unit": "ns",
            "range": "± 55630.32431104803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061751.1075949366,
            "unit": "ns",
            "range": "± 51034.220813704924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2038701.0135135136,
            "unit": "ns",
            "range": "± 67788.85308548629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1784111.880952381,
            "unit": "ns",
            "range": "± 83561.61819661141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8597522.538461538,
            "unit": "ns",
            "range": "± 229236.10230663593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11011002.642857144,
            "unit": "ns",
            "range": "± 47861.129111463466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27493437,
            "unit": "ns",
            "range": "± 134754.71319295026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70226168.56666666,
            "unit": "ns",
            "range": "± 291671.00728180195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139135073.43333334,
            "unit": "ns",
            "range": "± 725224.0039796046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290881622.5,
            "unit": "ns",
            "range": "± 548706.1872820202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 211672.20754716982,
            "unit": "ns",
            "range": "± 8788.740286382366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213861.4842105263,
            "unit": "ns",
            "range": "± 21008.816393925772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195854.35294117648,
            "unit": "ns",
            "range": "± 10313.111551512937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3177797.3,
            "unit": "ns",
            "range": "± 25190.680298191914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2876398.6,
            "unit": "ns",
            "range": "± 22741.517856115057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16029.351063829787,
            "unit": "ns",
            "range": "± 1846.6356561045563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77074.28,
            "unit": "ns",
            "range": "± 11245.75139400465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62969.24,
            "unit": "ns",
            "range": "± 8838.141221713393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70199.98979591837,
            "unit": "ns",
            "range": "± 11753.840741440754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3619.88202247191,
            "unit": "ns",
            "range": "± 512.302145968612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15714.288659793814,
            "unit": "ns",
            "range": "± 2227.113261221252"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34458.15882352941,
            "unit": "ns",
            "range": "± 1988.4673779484706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3798110.421316964,
            "unit": "ns",
            "range": "± 6677.6940604947185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1225761.3190104167,
            "unit": "ns",
            "range": "± 2931.1340443517247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768616.7936662947,
            "unit": "ns",
            "range": "± 1209.2928672617875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973503.83984375,
            "unit": "ns",
            "range": "± 8950.951043488218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622485.1044921875,
            "unit": "ns",
            "range": "± 1463.777371132815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568105.212890625,
            "unit": "ns",
            "range": "± 1016.2594283682333"
          }
        ]
      }
    ]
  }
}