window.BENCHMARK_DATA = {
  "lastUpdate": 1725001244024,
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
      }
    ]
  }
}