window.BENCHMARK_DATA = {
  "lastUpdate": 1725239495534,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "e1eb5cd0c5fe0ec219d47ccea9bf706c46999198",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-08-30T16:54:37+09:00",
          "tree_id": "a89562dce658f987a8d715b4193ee2ef965bdfa9",
          "url": "https://github.com/planetarium/libplanet/commit/e1eb5cd0c5fe0ec219d47ccea9bf706c46999198"
        },
        "date": 1725005026053,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198680.9347826087,
            "unit": "ns",
            "range": "± 7293.698396263187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192664.35593220338,
            "unit": "ns",
            "range": "± 8463.785400290019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164554.84615384616,
            "unit": "ns",
            "range": "± 2631.6485595583695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3048586.5714285714,
            "unit": "ns",
            "range": "± 15853.133869822253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2798476.466666667,
            "unit": "ns",
            "range": "± 33287.290654599834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12597.053333333333,
            "unit": "ns",
            "range": "± 643.2875002111638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59908.92957746479,
            "unit": "ns",
            "range": "± 2887.63424338008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62810.625,
            "unit": "ns",
            "range": "± 1203.1258108222376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49181.505494505494,
            "unit": "ns",
            "range": "± 5325.9122460614435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2769.453608247423,
            "unit": "ns",
            "range": "± 317.35488877525313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11933.263440860215,
            "unit": "ns",
            "range": "± 770.2417943038275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395290.1428571427,
            "unit": "ns",
            "range": "± 39565.084978098756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2612700.8947368423,
            "unit": "ns",
            "range": "± 54509.14600107107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3040807.6,
            "unit": "ns",
            "range": "± 41905.911348775466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2548185.074074074,
            "unit": "ns",
            "range": "± 71157.97782557533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3232500.933333333,
            "unit": "ns",
            "range": "± 44239.40030507174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10147868.846153846,
            "unit": "ns",
            "range": "± 34064.9643838704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26934350,
            "unit": "ns",
            "range": "± 62085.240815886886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68795788.66666667,
            "unit": "ns",
            "range": "± 302927.4636011227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137504713.35714287,
            "unit": "ns",
            "range": "± 519719.3583046464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280623021.5,
            "unit": "ns",
            "range": "± 762152.669405723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015531.175,
            "unit": "ns",
            "range": "± 43242.15495039299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895416.280487805,
            "unit": "ns",
            "range": "± 61645.81117663722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1663123.6764705882,
            "unit": "ns",
            "range": "± 79093.73070423889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8369982.04,
            "unit": "ns",
            "range": "± 219618.38107242604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786747.6643415177,
            "unit": "ns",
            "range": "± 4478.615239114664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218300.6608072917,
            "unit": "ns",
            "range": "± 1024.1607841673356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761357.5604166667,
            "unit": "ns",
            "range": "± 1898.0446507530983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936004.2263020833,
            "unit": "ns",
            "range": "± 4500.237921644126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612870.6588541666,
            "unit": "ns",
            "range": "± 1002.597450920401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569613.2557896206,
            "unit": "ns",
            "range": "± 575.407767224736"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31837.153846153848,
            "unit": "ns",
            "range": "± 400.7361655241193"
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
          "id": "0011c33781434151b7567d3aa542f2d586c5edc3",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-09-02T09:51:36+09:00",
          "tree_id": "3f3e082b8d11fe969f9b1ffc3c70cb15c5b0818b",
          "url": "https://github.com/planetarium/libplanet/commit/0011c33781434151b7567d3aa542f2d586c5edc3"
        },
        "date": 1725239058461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199559.70454545456,
            "unit": "ns",
            "range": "± 7330.633493928369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191134.4534883721,
            "unit": "ns",
            "range": "± 6098.004208847227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168619.85714285713,
            "unit": "ns",
            "range": "± 2702.6976795884416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3104471.4285714286,
            "unit": "ns",
            "range": "± 15809.650829182132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2727261.8,
            "unit": "ns",
            "range": "± 33303.57562785113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12555.9,
            "unit": "ns",
            "range": "± 515.1793129482162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60512.84426229508,
            "unit": "ns",
            "range": "± 2727.513439534539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50233.583333333336,
            "unit": "ns",
            "range": "± 442.7891881601392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50950.721649484534,
            "unit": "ns",
            "range": "± 8108.762849717824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2804.9285714285716,
            "unit": "ns",
            "range": "± 285.46688110214393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12053.486842105263,
            "unit": "ns",
            "range": "± 625.5727720720387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481871.2083333335,
            "unit": "ns",
            "range": "± 63559.07463001861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2517204.6,
            "unit": "ns",
            "range": "± 32214.162812119055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3084041,
            "unit": "ns",
            "range": "± 52803.664501332016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588251.466666667,
            "unit": "ns",
            "range": "± 44998.3273750523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3330607.433333333,
            "unit": "ns",
            "range": "± 47382.416371577376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10393940.07142857,
            "unit": "ns",
            "range": "± 52792.80309847646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26811901.153846152,
            "unit": "ns",
            "range": "± 94885.48177658349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67843773.5,
            "unit": "ns",
            "range": "± 340215.7662450614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141963829.6,
            "unit": "ns",
            "range": "± 549708.7642078953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286549292.64285713,
            "unit": "ns",
            "range": "± 856236.8118781884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1005355.52,
            "unit": "ns",
            "range": "± 50515.67980135983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1897308.9166666667,
            "unit": "ns",
            "range": "± 48417.691262700086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1678356.144736842,
            "unit": "ns",
            "range": "± 83991.18823951378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8226266.181818182,
            "unit": "ns",
            "range": "± 180573.20964919738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3684354.171875,
            "unit": "ns",
            "range": "± 8108.697101433147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1209184.1524832589,
            "unit": "ns",
            "range": "± 2983.07309022502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756517.12109375,
            "unit": "ns",
            "range": "± 1591.4187271915957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919572.2079427084,
            "unit": "ns",
            "range": "± 2878.2235425823137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618420.6677433894,
            "unit": "ns",
            "range": "± 298.99381365647804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569991.113420759,
            "unit": "ns",
            "range": "± 427.69247380284224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43262.53333333333,
            "unit": "ns",
            "range": "± 626.0289663159898"
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
          "id": "7d98944cb5bde402d2a98fe94ae00258a133889f",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-09-02T09:59:20+09:00",
          "tree_id": "3f3e082b8d11fe969f9b1ffc3c70cb15c5b0818b",
          "url": "https://github.com/planetarium/libplanet/commit/7d98944cb5bde402d2a98fe94ae00258a133889f"
        },
        "date": 1725239469419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200648.679245283,
            "unit": "ns",
            "range": "± 7783.41249999882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193044.73015873015,
            "unit": "ns",
            "range": "± 8873.016289355755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169203.3777777778,
            "unit": "ns",
            "range": "± 6357.211829127928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3158837,
            "unit": "ns",
            "range": "± 50903.32985178867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869312.5,
            "unit": "ns",
            "range": "± 29867.35753293217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12885.633333333333,
            "unit": "ns",
            "range": "± 953.043642374085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62716.915789473685,
            "unit": "ns",
            "range": "± 5628.0431478164965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51140.26666666667,
            "unit": "ns",
            "range": "± 894.4709103843509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55710.42268041237,
            "unit": "ns",
            "range": "± 9289.647916537539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2694.804347826087,
            "unit": "ns",
            "range": "± 278.28281286657403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12473.434782608696,
            "unit": "ns",
            "range": "± 1223.0669188591623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2400824.5,
            "unit": "ns",
            "range": "± 40571.246649743036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2532408.8571428573,
            "unit": "ns",
            "range": "± 29065.956904035564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3079665.3846153845,
            "unit": "ns",
            "range": "± 37582.16399556767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2604997.94,
            "unit": "ns",
            "range": "± 66520.40667787593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3277906,
            "unit": "ns",
            "range": "± 61734.11700109399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10334303.466666667,
            "unit": "ns",
            "range": "± 83023.48287757994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27087572.933333334,
            "unit": "ns",
            "range": "± 195897.9319636583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68723047.73333333,
            "unit": "ns",
            "range": "± 438749.6781487573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136249278.53333333,
            "unit": "ns",
            "range": "± 705786.8904882859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287464854.5,
            "unit": "ns",
            "range": "± 1909065.9307688829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003863.2195121951,
            "unit": "ns",
            "range": "± 49410.29381236322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1910698.7575757576,
            "unit": "ns",
            "range": "± 48099.431819688834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1687241.945945946,
            "unit": "ns",
            "range": "± 77998.87189575715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8359892.607142857,
            "unit": "ns",
            "range": "± 236913.5545083964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753479.042410714,
            "unit": "ns",
            "range": "± 6303.350186942123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198207.6159319195,
            "unit": "ns",
            "range": "± 1000.5698991531011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769403.8942522322,
            "unit": "ns",
            "range": "± 968.7822587777619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945267.2728365385,
            "unit": "ns",
            "range": "± 878.3230795755987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626618.8180989583,
            "unit": "ns",
            "range": "± 448.5426580486707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579476.2052873884,
            "unit": "ns",
            "range": "± 322.0833986174437"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32123.785714285714,
            "unit": "ns",
            "range": "± 314.2878221707535"
          }
        ]
      }
    ]
  }
}