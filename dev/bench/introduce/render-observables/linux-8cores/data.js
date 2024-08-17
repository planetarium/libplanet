window.BENCHMARK_DATA = {
  "lastUpdate": 1723892135621,
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
      }
    ]
  }
}