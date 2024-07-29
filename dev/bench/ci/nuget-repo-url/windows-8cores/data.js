window.BENCHMARK_DATA = {
  "lastUpdate": 1722219176670,
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
          "id": "3c21032a2ddf0191867b4f0190c5394e34d887be",
          "message": "WIP",
          "timestamp": "2024-07-29T10:26:35+09:00",
          "tree_id": "d6ebfe99044609b56ab10db35fe919ac8cf2d5ca",
          "url": "https://github.com/planetarium/libplanet/commit/3c21032a2ddf0191867b4f0190c5394e34d887be"
        },
        "date": 1722217034550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999148.4210526316,
            "unit": "ns",
            "range": "± 82944.65453279982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1765993.3333333333,
            "unit": "ns",
            "range": "± 66864.99763770959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1524644.7368421052,
            "unit": "ns",
            "range": "± 76710.53190575045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6976490.697674419,
            "unit": "ns",
            "range": "± 255487.46853431597"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29989.18918918919,
            "unit": "ns",
            "range": "± 1410.3888094614647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9710100,
            "unit": "ns",
            "range": "± 118900.75693619448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23656771.42857143,
            "unit": "ns",
            "range": "± 219901.09814876542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57408450,
            "unit": "ns",
            "range": "± 342090.7026596219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117598946.66666667,
            "unit": "ns",
            "range": "± 680119.741418132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232341600,
            "unit": "ns",
            "range": "± 1788109.5862132423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313672.9073660714,
            "unit": "ns",
            "range": "± 9190.365077658611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1122911.3932291667,
            "unit": "ns",
            "range": "± 3299.3498633785034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743049.3098958334,
            "unit": "ns",
            "range": "± 1359.6996574719626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1904682.8125,
            "unit": "ns",
            "range": "± 4007.995839229107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625412.5846354166,
            "unit": "ns",
            "range": "± 1646.4583409331688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568444.43359375,
            "unit": "ns",
            "range": "± 1211.4875262945086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141125,
            "unit": "ns",
            "range": "± 12125.71459937329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2221040,
            "unit": "ns",
            "range": "± 37394.705507598264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2671400,
            "unit": "ns",
            "range": "± 37231.87220235248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242569.565217391,
            "unit": "ns",
            "range": "± 55896.1491175019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2916733.3333333335,
            "unit": "ns",
            "range": "± 48527.29227185559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174366.66666666666,
            "unit": "ns",
            "range": "± 7554.098540653594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164851.51515151514,
            "unit": "ns",
            "range": "± 7161.204076329889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147375,
            "unit": "ns",
            "range": "± 2843.806751891778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2824364.285714286,
            "unit": "ns",
            "range": "± 28019.57028009742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2553592.3076923075,
            "unit": "ns",
            "range": "± 24278.469938694707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11102.083333333334,
            "unit": "ns",
            "range": "± 1321.0027424702928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54932.291666666664,
            "unit": "ns",
            "range": "± 4828.893188902044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44227.58620689655,
            "unit": "ns",
            "range": "± 1285.6061804578908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54579.34782608696,
            "unit": "ns",
            "range": "± 8739.836018823768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2515.463917525773,
            "unit": "ns",
            "range": "± 506.6927500520672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10759.79381443299,
            "unit": "ns",
            "range": "± 1588.7403155890543"
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
          "id": "3b0fb11b2e9562e2d28554d8431025f68e29ad5a",
          "message": "WIP",
          "timestamp": "2024-07-29T10:50:55+09:00",
          "tree_id": "6cd3d7f6cd76520db6a3217252c3d7bdb9a10f7e",
          "url": "https://github.com/planetarium/libplanet/commit/3b0fb11b2e9562e2d28554d8431025f68e29ad5a"
        },
        "date": 1722218422017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991911.4583333334,
            "unit": "ns",
            "range": "± 77391.57695197866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767504.761904762,
            "unit": "ns",
            "range": "± 63462.12987278878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567539.6907216494,
            "unit": "ns",
            "range": "± 115284.26143354671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6778622.857142857,
            "unit": "ns",
            "range": "± 186235.01927231986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37654.545454545456,
            "unit": "ns",
            "range": "± 4771.5627168327055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9549686.666666666,
            "unit": "ns",
            "range": "± 81404.14052883364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23497020,
            "unit": "ns",
            "range": "± 147358.8777683342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58038692.307692304,
            "unit": "ns",
            "range": "± 237796.6829791733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116102253.84615384,
            "unit": "ns",
            "range": "± 628264.1092929319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232559141.66666666,
            "unit": "ns",
            "range": "± 839237.6285635493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309242.1484375,
            "unit": "ns",
            "range": "± 5720.563337727209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043529.7005208334,
            "unit": "ns",
            "range": "± 2246.8557816250773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729866.7578125,
            "unit": "ns",
            "range": "± 1303.8441198191483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941636.09375,
            "unit": "ns",
            "range": "± 4947.995668339091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620964.3294270834,
            "unit": "ns",
            "range": "± 1526.8335569317114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551623.8411458334,
            "unit": "ns",
            "range": "± 939.5336146265745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156669.230769231,
            "unit": "ns",
            "range": "± 17234.48019791452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2231791.1764705884,
            "unit": "ns",
            "range": "± 70529.53977158903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2693906.4516129033,
            "unit": "ns",
            "range": "± 81776.1454031018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2281342.8571428573,
            "unit": "ns",
            "range": "± 23671.330087932703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2858607.1428571427,
            "unit": "ns",
            "range": "± 17174.50992630623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176379.71014492755,
            "unit": "ns",
            "range": "± 8497.24141586282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170945.26315789475,
            "unit": "ns",
            "range": "± 14888.513124832483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146979.3103448276,
            "unit": "ns",
            "range": "± 4015.5393971727267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2723813.3333333335,
            "unit": "ns",
            "range": "± 38027.01796404887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2526966.6666666665,
            "unit": "ns",
            "range": "± 42630.73449765467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10575.268817204302,
            "unit": "ns",
            "range": "± 857.2777838547883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53948.45360824742,
            "unit": "ns",
            "range": "± 5581.9857839389215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43941.42857142857,
            "unit": "ns",
            "range": "± 1415.1224076281983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55045.91836734694,
            "unit": "ns",
            "range": "± 13077.770297418068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2465.3061224489797,
            "unit": "ns",
            "range": "± 473.8745844818008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10244.565217391304,
            "unit": "ns",
            "range": "± 1005.1913743146902"
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
          "id": "5b6099a8011c3269a73563aeea9654fb55b49e3c",
          "message": "WIP",
          "timestamp": "2024-07-29T10:52:11+09:00",
          "tree_id": "4c2914b18b02e2330979313cd7e579dc8882501d",
          "url": "https://github.com/planetarium/libplanet/commit/5b6099a8011c3269a73563aeea9654fb55b49e3c"
        },
        "date": 1722218711623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979731.1827956989,
            "unit": "ns",
            "range": "± 89872.28133215857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729705.8823529412,
            "unit": "ns",
            "range": "± 66183.03834598321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1488922.5806451612,
            "unit": "ns",
            "range": "± 88324.06748794865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6843721.212121212,
            "unit": "ns",
            "range": "± 212602.96293439763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32720.408163265307,
            "unit": "ns",
            "range": "± 4844.7858928077685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9547953.333333334,
            "unit": "ns",
            "range": "± 84695.90027746045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23710911.53846154,
            "unit": "ns",
            "range": "± 69969.9761619408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58358020,
            "unit": "ns",
            "range": "± 187736.59054263085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118367228.57142857,
            "unit": "ns",
            "range": "± 457485.6928045718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232654903.33333334,
            "unit": "ns",
            "range": "± 1085415.1910455192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288357.3958333335,
            "unit": "ns",
            "range": "± 3828.244541531244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068944.1536458333,
            "unit": "ns",
            "range": "± 2784.796448755431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730566.9294084822,
            "unit": "ns",
            "range": "± 671.5542252876185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945883.359375,
            "unit": "ns",
            "range": "± 5199.096036875612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623751.7643229166,
            "unit": "ns",
            "range": "± 1230.8761103495553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566020.0055803572,
            "unit": "ns",
            "range": "± 1257.7855403438352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090997.142857143,
            "unit": "ns",
            "range": "± 67523.15282973113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253954.5454545454,
            "unit": "ns",
            "range": "± 25173.63941133902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2697476.1904761903,
            "unit": "ns",
            "range": "± 50922.87211815438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2262423.913043478,
            "unit": "ns",
            "range": "± 55985.30827889584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2878814.285714286,
            "unit": "ns",
            "range": "± 26986.317249326905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166491.5254237288,
            "unit": "ns",
            "range": "± 5246.68329175658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160364.8148148148,
            "unit": "ns",
            "range": "± 6584.355598257484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145263.15789473685,
            "unit": "ns",
            "range": "± 2546.2849902283106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2756007.1428571427,
            "unit": "ns",
            "range": "± 31888.95309774734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460938.4615384615,
            "unit": "ns",
            "range": "± 19736.28377977722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9531.111111111111,
            "unit": "ns",
            "range": "± 846.7577880129296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49593.406593406595,
            "unit": "ns",
            "range": "± 3011.526087765035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44081.48148148148,
            "unit": "ns",
            "range": "± 1090.1788974705153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48108.24742268041,
            "unit": "ns",
            "range": "± 6902.18368379247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2160.4395604395604,
            "unit": "ns",
            "range": "± 347.01236637558395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8993.103448275862,
            "unit": "ns",
            "range": "± 523.8038651766686"
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
          "id": "e065fcf5ede5377003d03b932d7069463702803a",
          "message": "WIP",
          "timestamp": "2024-07-29T10:58:47+09:00",
          "tree_id": "88820a8b1d001575fe0e4ba98afd4e29d8cb3c30",
          "url": "https://github.com/planetarium/libplanet/commit/e065fcf5ede5377003d03b932d7069463702803a"
        },
        "date": 1722218969415,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958052.7472527473,
            "unit": "ns",
            "range": "± 57079.18153399683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748035.7142857143,
            "unit": "ns",
            "range": "± 74742.75259137213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1506235.1063829786,
            "unit": "ns",
            "range": "± 86738.37278522937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6786626.315789473,
            "unit": "ns",
            "range": "± 232005.44574714193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29798.529411764706,
            "unit": "ns",
            "range": "± 1350.8971752974073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9499426.666666666,
            "unit": "ns",
            "range": "± 95697.40604535487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23069969.230769232,
            "unit": "ns",
            "range": "± 132481.02621769015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58356893.333333336,
            "unit": "ns",
            "range": "± 349431.46981237695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117862246.15384616,
            "unit": "ns",
            "range": "± 618390.1864456678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233635446.66666666,
            "unit": "ns",
            "range": "± 2480059.8275809707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3298685.390625,
            "unit": "ns",
            "range": "± 8730.118730749227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035354.2447916666,
            "unit": "ns",
            "range": "± 1999.9691136109661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737683.7890625,
            "unit": "ns",
            "range": "± 2018.4109774927765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1891485.5859375,
            "unit": "ns",
            "range": "± 4262.558249693633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609432.3307291666,
            "unit": "ns",
            "range": "± 1284.8346249602562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552474.8697916666,
            "unit": "ns",
            "range": "± 1107.6551881274158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2071972.2222222222,
            "unit": "ns",
            "range": "± 49234.50364537404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2171190.909090909,
            "unit": "ns",
            "range": "± 51145.82009724659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2631586.3636363638,
            "unit": "ns",
            "range": "± 58036.23905190655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2219262.5,
            "unit": "ns",
            "range": "± 31539.411852474357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954732.3529411764,
            "unit": "ns",
            "range": "± 60135.921412394164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178621.15384615384,
            "unit": "ns",
            "range": "± 6716.509847002897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165786.5671641791,
            "unit": "ns",
            "range": "± 7735.120526031821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146845.7142857143,
            "unit": "ns",
            "range": "± 4596.631941985787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730340,
            "unit": "ns",
            "range": "± 36613.44015522169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498466.6666666665,
            "unit": "ns",
            "range": "± 34857.3760726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10115.625,
            "unit": "ns",
            "range": "± 1337.1870022354271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52329.5918367347,
            "unit": "ns",
            "range": "± 4643.345958180948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43982.608695652176,
            "unit": "ns",
            "range": "± 1114.2270757276476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51504.63917525773,
            "unit": "ns",
            "range": "± 10088.112028300075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2473.7113402061855,
            "unit": "ns",
            "range": "± 427.63233718646694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9826.315789473685,
            "unit": "ns",
            "range": "± 1235.6590563223515"
          }
        ]
      }
    ]
  }
}