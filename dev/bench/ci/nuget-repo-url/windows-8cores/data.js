window.BENCHMARK_DATA = {
  "lastUpdate": 1722216793972,
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
          "id": "4b2b797430752f80612f1efbee6968213f1606e1",
          "message": "WIP",
          "timestamp": "2024-07-29T10:14:55+09:00",
          "tree_id": "de80609a63b1284dac24b7b1e72bcfa6411bc926",
          "url": "https://github.com/planetarium/libplanet/commit/4b2b797430752f80612f1efbee6968213f1606e1"
        },
        "date": 1722216501119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1061216.1616161617,
            "unit": "ns",
            "range": "± 109858.89531118555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1842990.1960784313,
            "unit": "ns",
            "range": "± 74372.19172486976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1656640.425531915,
            "unit": "ns",
            "range": "± 134219.39615865258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7323714.814814814,
            "unit": "ns",
            "range": "± 384161.1475380843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31263.529411764706,
            "unit": "ns",
            "range": "± 2082.229063083228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10146973.333333334,
            "unit": "ns",
            "range": "± 88375.49326325602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24612200,
            "unit": "ns",
            "range": "± 169599.78520875887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60644966.666666664,
            "unit": "ns",
            "range": "± 408351.1980542985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121968960,
            "unit": "ns",
            "range": "± 1443132.4985203939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243437386.66666666,
            "unit": "ns",
            "range": "± 2058930.110819232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329336.1778846155,
            "unit": "ns",
            "range": "± 10144.400001129481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073931.8359375,
            "unit": "ns",
            "range": "± 2688.8333826942835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741526.3392857143,
            "unit": "ns",
            "range": "± 1210.524936522669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961641.0416666667,
            "unit": "ns",
            "range": "± 3507.2250015928266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625029.9674479166,
            "unit": "ns",
            "range": "± 721.0547707740554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566778.1380208334,
            "unit": "ns",
            "range": "± 786.0959993621932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145712.1951219514,
            "unit": "ns",
            "range": "± 75619.773191679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2419378.2608695654,
            "unit": "ns",
            "range": "± 43647.86734894011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739128.5714285714,
            "unit": "ns",
            "range": "± 28339.139245693634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2365443.75,
            "unit": "ns",
            "range": "± 44547.80157314163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3040820,
            "unit": "ns",
            "range": "± 48246.74970547609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182040,
            "unit": "ns",
            "range": "± 7299.734409482279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187194.44444444444,
            "unit": "ns",
            "range": "± 3591.570559653161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151146.15384615384,
            "unit": "ns",
            "range": "± 4139.297599277516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748420,
            "unit": "ns",
            "range": "± 46438.487732237176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532227.777777778,
            "unit": "ns",
            "range": "± 51614.96369391519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12572.47191011236,
            "unit": "ns",
            "range": "± 959.6108123264403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59391.48936170213,
            "unit": "ns",
            "range": "± 4846.696238121055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47393.82716049383,
            "unit": "ns",
            "range": "± 2378.830893475424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65272.04301075269,
            "unit": "ns",
            "range": "± 11142.206923610995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2911.2244897959185,
            "unit": "ns",
            "range": "± 683.966999424156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11991.666666666666,
            "unit": "ns",
            "range": "± 1731.7266507686643"
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
          "id": "16a5a20d3edf18373ac114ffb51e43f643666293",
          "message": "WIP",
          "timestamp": "2024-07-29T10:20:52+09:00",
          "tree_id": "b11047ac0f18c23dcf799fe0b21d38222f09cdb8",
          "url": "https://github.com/planetarium/libplanet/commit/16a5a20d3edf18373ac114ffb51e43f643666293"
        },
        "date": 1722216603360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970403.1914893617,
            "unit": "ns",
            "range": "± 76285.91585244822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1704155,
            "unit": "ns",
            "range": "± 56945.50679017392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493344.4444444445,
            "unit": "ns",
            "range": "± 82783.17164807624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6623562.5,
            "unit": "ns",
            "range": "± 171286.49738021562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29808.823529411766,
            "unit": "ns",
            "range": "± 952.6256051944091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9625296.666666666,
            "unit": "ns",
            "range": "± 61626.98697656347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24183242.85714286,
            "unit": "ns",
            "range": "± 160630.16631277677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59234726.666666664,
            "unit": "ns",
            "range": "± 397872.0585218079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116206835.71428572,
            "unit": "ns",
            "range": "± 626996.834254237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235217533.33333334,
            "unit": "ns",
            "range": "± 1257577.3402326659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3324260.5729166665,
            "unit": "ns",
            "range": "± 6658.356240884074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054707.4609375,
            "unit": "ns",
            "range": "± 2083.2776119664195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727446.2044270834,
            "unit": "ns",
            "range": "± 1390.5515544798404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929293.9034598214,
            "unit": "ns",
            "range": "± 2746.807667872342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599646.42578125,
            "unit": "ns",
            "range": "± 2540.580420886393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558664.6135602678,
            "unit": "ns",
            "range": "± 1005.8749128041237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121126.6666666665,
            "unit": "ns",
            "range": "± 18070.47578892419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210615,
            "unit": "ns",
            "range": "± 50083.36497649116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2712468.1818181816,
            "unit": "ns",
            "range": "± 60454.16513567185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2294168.75,
            "unit": "ns",
            "range": "± 69100.88668260763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2903721.4285714286,
            "unit": "ns",
            "range": "± 49819.9709503579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169327.90697674418,
            "unit": "ns",
            "range": "± 5282.465404812928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158520,
            "unit": "ns",
            "range": "± 5994.214898124521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144721.42857142858,
            "unit": "ns",
            "range": "± 2533.5225011308394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731050,
            "unit": "ns",
            "range": "± 40357.16979479797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2448006.6666666665,
            "unit": "ns",
            "range": "± 29604.64410157556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9835.714285714286,
            "unit": "ns",
            "range": "± 1525.0654878620921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48392.94117647059,
            "unit": "ns",
            "range": "± 2566.208442490228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43725,
            "unit": "ns",
            "range": "± 495.6630086881794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45317.89473684211,
            "unit": "ns",
            "range": "± 6759.988337950542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2102.222222222222,
            "unit": "ns",
            "range": "± 213.57196391447812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8640,
            "unit": "ns",
            "range": "± 698.9237311913739"
          }
        ]
      }
    ]
  }
}