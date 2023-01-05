window.BENCHMARK_DATA = {
  "lastUpdate": 1672896402090,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22b56dc3b389fb8531c06779a818dfce5c4894de",
          "message": "Merge pull request #2679 from riemannulus/fix/ci/benchmark/cache-problem\n\nFix benchmark problem",
          "timestamp": "2022-12-28T22:28:36+09:00",
          "tree_id": "2466dfb37280997af5192c08b774f5a7a134dd1b",
          "url": "https://github.com/planetarium/libplanet/commit/22b56dc3b389fb8531c06779a818dfce5c4894de"
        },
        "date": 1672235064021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94989.62264150943,
            "unit": "ns",
            "range": "± 3958.551581588004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5191069.587053572,
            "unit": "ns",
            "range": "± 15290.045537877162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1665507.7864583333,
            "unit": "ns",
            "range": "± 1875.4655283595312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159343.3854166667,
            "unit": "ns",
            "range": "± 2811.4592528395115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549004.324776786,
            "unit": "ns",
            "range": "± 2961.238007001679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789087.8455528846,
            "unit": "ns",
            "range": "± 418.1020964689547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736073.6397879465,
            "unit": "ns",
            "range": "± 1095.1360882741442"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4113830.8333333335,
            "unit": "ns",
            "range": "± 25518.236821798575"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5589207.142857143,
            "unit": "ns",
            "range": "± 43890.93938889393"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24095276.923076924,
            "unit": "ns",
            "range": "± 216195.5833415897"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5741889.655172414,
            "unit": "ns",
            "range": "± 242320.2402575474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27553650,
            "unit": "ns",
            "range": "± 426291.2116650508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82650.5376344086,
            "unit": "ns",
            "range": "± 9353.883448994466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191595.83333333334,
            "unit": "ns",
            "range": "± 18387.792956865746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186551.51515151514,
            "unit": "ns",
            "range": "± 20819.605965984312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3570916.6666666665,
            "unit": "ns",
            "range": "± 73636.11046698407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8773262.5,
            "unit": "ns",
            "range": "± 172072.90267015703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17238.144329896906,
            "unit": "ns",
            "range": "± 1956.9024896381252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50979.38144329897,
            "unit": "ns",
            "range": "± 6402.618900111792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42737,
            "unit": "ns",
            "range": "± 8234.745983583307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100278.35051546391,
            "unit": "ns",
            "range": "± 25011.93559584822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4293.81443298969,
            "unit": "ns",
            "range": "± 781.40024328521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16771.134020618556,
            "unit": "ns",
            "range": "± 2003.0684151075257"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "892107b8521ea96557f73b801872329249df8b9b",
          "message": "Merge pull request #2682 from greymistcube/fix/relax-benchmark-threshold\n\n🔧 Relax benchmark alert threshold to 150%",
          "timestamp": "2022-12-29T00:28:05+09:00",
          "tree_id": "69481e12323d163c1f0d3e0fdf112d3578b22a92",
          "url": "https://github.com/planetarium/libplanet/commit/892107b8521ea96557f73b801872329249df8b9b"
        },
        "date": 1672242191883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124568.42105263157,
            "unit": "ns",
            "range": "± 2724.997988088747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5857395.703125,
            "unit": "ns",
            "range": "± 23638.587467882102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870749.7767857143,
            "unit": "ns",
            "range": "± 8566.021152170324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370990.2604166667,
            "unit": "ns",
            "range": "± 6072.428888577128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3062665.0390625,
            "unit": "ns",
            "range": "± 9079.007279282701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989320.6612723215,
            "unit": "ns",
            "range": "± 4171.522013133637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 908319.7614397322,
            "unit": "ns",
            "range": "± 8786.112629350802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5473112.357954546,
            "unit": "ns",
            "range": "± 326330.3589961316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6097551.25,
            "unit": "ns",
            "range": "± 285661.90292586765"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31431127.94117647,
            "unit": "ns",
            "range": "± 1491587.3857094795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7617492.307692308,
            "unit": "ns",
            "range": "± 96329.21382372762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33561366.666666664,
            "unit": "ns",
            "range": "± 861995.7781442213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112598.96907216495,
            "unit": "ns",
            "range": "± 12669.75150082998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223234.24657534246,
            "unit": "ns",
            "range": "± 11108.783051387789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208791.35802469135,
            "unit": "ns",
            "range": "± 11007.99933606085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4336028.571428572,
            "unit": "ns",
            "range": "± 28410.16688471897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10638226.666666666,
            "unit": "ns",
            "range": "± 198535.6767746819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23816.279069767443,
            "unit": "ns",
            "range": "± 2064.310764630301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62323.86363636364,
            "unit": "ns",
            "range": "± 5531.310965104519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46820.63492063492,
            "unit": "ns",
            "range": "± 2153.8531661516595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112354.34782608696,
            "unit": "ns",
            "range": "± 18601.68616393212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6301.0204081632655,
            "unit": "ns",
            "range": "± 1020.9652697586928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25699.473684210527,
            "unit": "ns",
            "range": "± 3415.0441162288766"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/planetarium/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672247921633,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83611.76470588235,
            "unit": "ns",
            "range": "± 3392.618284382936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4722486.901041667,
            "unit": "ns",
            "range": "± 21739.67522859061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1477362.0963541667,
            "unit": "ns",
            "range": "± 5066.608916529563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1027756.8098958334,
            "unit": "ns",
            "range": "± 4280.503003179455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2451092.3567708335,
            "unit": "ns",
            "range": "± 10956.55399221082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795670.2669270834,
            "unit": "ns",
            "range": "± 2897.244276280865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728964.4921875,
            "unit": "ns",
            "range": "± 4111.787305223998"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3826775.9635416665,
            "unit": "ns",
            "range": "± 35528.68082745501"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5312263.333333333,
            "unit": "ns",
            "range": "± 54422.01322819217"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 21569268.75,
            "unit": "ns",
            "range": "± 411744.15149661404"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5848285.714285715,
            "unit": "ns",
            "range": "± 70050.18922878803"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 24537646.666666668,
            "unit": "ns",
            "range": "± 325529.2917842015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 58572.916666666664,
            "unit": "ns",
            "range": "± 6159.092195012724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 148398.9898989899,
            "unit": "ns",
            "range": "± 18542.507673074306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 120211.11111111111,
            "unit": "ns",
            "range": "± 2561.9130923609523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3164158.8235294116,
            "unit": "ns",
            "range": "± 48112.096436648986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8333400,
            "unit": "ns",
            "range": "± 124483.54849599142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9828.72340425532,
            "unit": "ns",
            "range": "± 1618.0183246849347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32413.541666666668,
            "unit": "ns",
            "range": "± 5279.785079191779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22556.896551724138,
            "unit": "ns",
            "range": "± 850.82252648061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53570.967741935485,
            "unit": "ns",
            "range": "± 10886.694917522442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2322.4489795918366,
            "unit": "ns",
            "range": "± 469.15818716780046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10093.548387096775,
            "unit": "ns",
            "range": "± 1519.4969456178367"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0dff731200fbb4de60d43ddcf9d61865ce4b647",
          "message": "Merge pull request #2693 from greymistcube/feature/apv-options\n\nIntroduce `AppProtocolVersionOptions`",
          "timestamp": "2023-01-05T14:12:47+09:00",
          "tree_id": "cf69d928f8349be78f52307259b762739850e6d8",
          "url": "https://github.com/planetarium/libplanet/commit/d0dff731200fbb4de60d43ddcf9d61865ce4b647"
        },
        "date": 1672896359476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93512.16216216216,
            "unit": "ns",
            "range": "± 3067.785244489305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844905.3125,
            "unit": "ns",
            "range": "± 26357.91152014028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1538812.8487723214,
            "unit": "ns",
            "range": "± 3060.241050478363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141593.9453125,
            "unit": "ns",
            "range": "± 1106.7554147538578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571469.0885416665,
            "unit": "ns",
            "range": "± 1363.4132443733156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803165.44921875,
            "unit": "ns",
            "range": "± 716.9172133972073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742168.8151041666,
            "unit": "ns",
            "range": "± 684.9964579178047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3998787.1930803573,
            "unit": "ns",
            "range": "± 19357.117446069708"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4903097.959183673,
            "unit": "ns",
            "range": "± 189122.14691590625"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23822846.666666668,
            "unit": "ns",
            "range": "± 221485.0296994187"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6415250,
            "unit": "ns",
            "range": "± 113556.55825656625"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26424880,
            "unit": "ns",
            "range": "± 337779.0215933657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83801.5625,
            "unit": "ns",
            "range": "± 3707.4995718673827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190122.5806451613,
            "unit": "ns",
            "range": "± 17838.375395370036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182270.2380952381,
            "unit": "ns",
            "range": "± 9766.722203136018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3456113.3333333335,
            "unit": "ns",
            "range": "± 30831.47433263303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8637906.666666666,
            "unit": "ns",
            "range": "± 58148.01884190118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19635,
            "unit": "ns",
            "range": "± 3417.61258155101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51641.41414141414,
            "unit": "ns",
            "range": "± 6860.906855347707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47461.290322580644,
            "unit": "ns",
            "range": "± 2168.5044206843945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99367.44186046511,
            "unit": "ns",
            "range": "± 8391.9491090879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5334.693877551021,
            "unit": "ns",
            "range": "± 1095.4782452131694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18505.882352941175,
            "unit": "ns",
            "range": "± 1606.4122210969497"
          }
        ]
      }
    ]
  }
}