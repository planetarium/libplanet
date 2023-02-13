window.BENCHMARK_DATA = {
  "lastUpdate": 1676259818134,
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
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a289e1a5d890de8a3b5296f48896bb1167e10b5d",
          "message": "Merge pull request #2690 from longfin/port/0.45.4\n\nPort/0.45.4 & remove `workers` option for `NetMQTransport`",
          "timestamp": "2023-01-10T16:08:09+09:00",
          "tree_id": "ec672276fc11e3274ad9cbe3398393b71987b2cc",
          "url": "https://github.com/planetarium/libplanet/commit/a289e1a5d890de8a3b5296f48896bb1167e10b5d"
        },
        "date": 1673335473963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124293.95604395604,
            "unit": "ns",
            "range": "± 6984.478168548836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5671102.408854167,
            "unit": "ns",
            "range": "± 23058.33048183745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1805040.0260416667,
            "unit": "ns",
            "range": "± 21358.52292029103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346774.525669643,
            "unit": "ns",
            "range": "± 9008.63316137457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005491.5104166665,
            "unit": "ns",
            "range": "± 33626.913994239374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 966254.4712611607,
            "unit": "ns",
            "range": "± 9947.151297633098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880109.9348958334,
            "unit": "ns",
            "range": "± 7347.357835330839"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5333075.6953125,
            "unit": "ns",
            "range": "± 348442.4599292171"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7448242.857142857,
            "unit": "ns",
            "range": "± 131988.92560937256"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30572075,
            "unit": "ns",
            "range": "± 562487.215262119"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7170453,
            "unit": "ns",
            "range": "± 544055.9490047643"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34583528.94736842,
            "unit": "ns",
            "range": "± 1180244.97157293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114797.9797979798,
            "unit": "ns",
            "range": "± 11895.437127258809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231387.5,
            "unit": "ns",
            "range": "± 11450.74620309065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208071.42857142858,
            "unit": "ns",
            "range": "± 13699.544728683353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276086.666666667,
            "unit": "ns",
            "range": "± 49289.07248738473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10672046.666666666,
            "unit": "ns",
            "range": "± 164227.24180957602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26274.74226804124,
            "unit": "ns",
            "range": "± 4093.9241293204623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63078.205128205125,
            "unit": "ns",
            "range": "± 3234.820593025874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45838,
            "unit": "ns",
            "range": "± 1856.691153858478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120279.16666666667,
            "unit": "ns",
            "range": "± 19403.31993658311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6357.731958762886,
            "unit": "ns",
            "range": "± 1101.7821785961894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26212.36559139785,
            "unit": "ns",
            "range": "± 3135.037409751646"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "054d1c78a807fc6667270d7ee47e3096fa020361",
          "message": "Merge pull request #2699 from dahlia/cli-chain-ids",
          "timestamp": "2023-01-10T17:45:42+09:00",
          "tree_id": "9e7b12be880e83d8210f37b157f7dc8633b8ec26",
          "url": "https://github.com/planetarium/libplanet/commit/054d1c78a807fc6667270d7ee47e3096fa020361"
        },
        "date": 1673341445302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126570.65217391304,
            "unit": "ns",
            "range": "± 11120.533804519806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5877688.107638889,
            "unit": "ns",
            "range": "± 95793.32167023311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857481.25,
            "unit": "ns",
            "range": "± 28631.797891796563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367146.1197916667,
            "unit": "ns",
            "range": "± 23401.53903789075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3167194.815340909,
            "unit": "ns",
            "range": "± 118039.22237649877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995571.9401041666,
            "unit": "ns",
            "range": "± 4777.952937445329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943396.367663872,
            "unit": "ns",
            "range": "± 33343.84809093272"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5644345.0653698975,
            "unit": "ns",
            "range": "± 366551.93033749866"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7123850.52631579,
            "unit": "ns",
            "range": "± 726418.2859367852"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30849441.93548387,
            "unit": "ns",
            "range": "± 925465.8962829455"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7541044.791666667,
            "unit": "ns",
            "range": "± 773443.0739260431"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34718476.666666664,
            "unit": "ns",
            "range": "± 1037293.1500265265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118543.33333333333,
            "unit": "ns",
            "range": "± 8951.379907432765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240216.4705882353,
            "unit": "ns",
            "range": "± 15584.851062267267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217326.59574468085,
            "unit": "ns",
            "range": "± 12405.810081179876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4350720,
            "unit": "ns",
            "range": "± 76745.90915109789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10835145.454545455,
            "unit": "ns",
            "range": "± 240191.47466586842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30667.708333333332,
            "unit": "ns",
            "range": "± 3278.141154652215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66167.03296703297,
            "unit": "ns",
            "range": "± 5890.539589414255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49360.34482758621,
            "unit": "ns",
            "range": "± 2160.9727873760453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128016.66666666667,
            "unit": "ns",
            "range": "± 22077.2408014115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8017.708333333333,
            "unit": "ns",
            "range": "± 1084.7259941829277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32928.42105263158,
            "unit": "ns",
            "range": "± 4801.455079937587"
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
          "id": "43edf035ffc013ea3eb7087df3df3e78929449eb",
          "message": "Merge pull request #2701 from greymistcube/feature/host-options\n\nIntroduce `HostOptions`",
          "timestamp": "2023-01-11T03:11:02+09:00",
          "tree_id": "1d15627c3db0a3689b01f026edd0d773d9e93677",
          "url": "https://github.com/planetarium/libplanet/commit/43edf035ffc013ea3eb7087df3df3e78929449eb"
        },
        "date": 1673375116630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100191.11111111111,
            "unit": "ns",
            "range": "± 3804.5321192578526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4730461.328125,
            "unit": "ns",
            "range": "± 23845.898913173227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481192.08984375,
            "unit": "ns",
            "range": "± 3603.80124935594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1113790.4296875,
            "unit": "ns",
            "range": "± 3445.0343226155815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565029.7916666665,
            "unit": "ns",
            "range": "± 9838.403921892901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801230.5873325893,
            "unit": "ns",
            "range": "± 1803.0096130021127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764393.4830729166,
            "unit": "ns",
            "range": "± 2962.205066328815"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4305095.479910715,
            "unit": "ns",
            "range": "± 38708.74980801932"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5621840,
            "unit": "ns",
            "range": "± 37312.40314656011"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23086792.85714286,
            "unit": "ns",
            "range": "± 307456.1393717202"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5656209,
            "unit": "ns",
            "range": "± 466798.26436604443"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26438073.684210528,
            "unit": "ns",
            "range": "± 550200.1815926285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 77298.88888888889,
            "unit": "ns",
            "range": "± 4480.381565924899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178386.48648648648,
            "unit": "ns",
            "range": "± 8645.583627103468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160658.57142857142,
            "unit": "ns",
            "range": "± 7529.353049890574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3340800,
            "unit": "ns",
            "range": "± 46720.36876077561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8395273.333333334,
            "unit": "ns",
            "range": "± 110264.3930784203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16494.202898550724,
            "unit": "ns",
            "range": "± 756.1286962452837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43892.22222222222,
            "unit": "ns",
            "range": "± 3680.352565480948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35974.07407407407,
            "unit": "ns",
            "range": "± 778.8515176910721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77068.81720430107,
            "unit": "ns",
            "range": "± 11177.792215065509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4501.063829787234,
            "unit": "ns",
            "range": "± 506.19701227564343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17765,
            "unit": "ns",
            "range": "± 944.685333720618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f20f103ca562c3d48b0a6961814b24f50606f3eb",
          "message": "Merge pull request #2704 from tkiapril/chain-id-show-tip-hash",
          "timestamp": "2023-01-11T18:08:10+09:00",
          "tree_id": "24a8667bbcd91291876b38499606d0c19245fc2f",
          "url": "https://github.com/planetarium/libplanet/commit/f20f103ca562c3d48b0a6961814b24f50606f3eb"
        },
        "date": 1673428801363,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76889.47368421052,
            "unit": "ns",
            "range": "± 2653.5839582747494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3651406.5104166665,
            "unit": "ns",
            "range": "± 10294.00263836481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1130977.7622767857,
            "unit": "ns",
            "range": "± 1576.4120511555639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 789429.5572916666,
            "unit": "ns",
            "range": "± 1720.162994856124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964322.9166666667,
            "unit": "ns",
            "range": "± 2386.393471862585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609472.94921875,
            "unit": "ns",
            "range": "± 1831.811585377113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568883.671875,
            "unit": "ns",
            "range": "± 867.6980601551805"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3160939.1666666665,
            "unit": "ns",
            "range": "± 15058.35507128763"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4529189.47368421,
            "unit": "ns",
            "range": "± 100445.33004319006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 16574253.333333334,
            "unit": "ns",
            "range": "± 160434.99736950285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 4171320.2898550723,
            "unit": "ns",
            "range": "± 174195.26786618965"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 18914220,
            "unit": "ns",
            "range": "± 201270.21353678458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 61063.63636363636,
            "unit": "ns",
            "range": "± 8461.611446679797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 134262.62626262626,
            "unit": "ns",
            "range": "± 17107.431168811694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 113622.72727272728,
            "unit": "ns",
            "range": "± 5351.60063631708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2460720,
            "unit": "ns",
            "range": "± 32319.03905926483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5965550,
            "unit": "ns",
            "range": "± 36006.94377477766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11342.424242424242,
            "unit": "ns",
            "range": "± 2219.3072512215776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 32959.183673469386,
            "unit": "ns",
            "range": "± 6143.940720267708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23854.385964912282,
            "unit": "ns",
            "range": "± 768.5956989021779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51864.705882352944,
            "unit": "ns",
            "range": "± 6829.360736352041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2614.7368421052633,
            "unit": "ns",
            "range": "± 351.8850214332382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11870.408163265307,
            "unit": "ns",
            "range": "± 1957.0232594097645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b54fb44bc6300190695faef09e0ee94b9dab340",
          "message": "Merge pull request #2705 from dahlia/derive",
          "timestamp": "2023-01-11T18:47:52+09:00",
          "tree_id": "749a054f2e774af871d96519117f118ec1f53339",
          "url": "https://github.com/planetarium/libplanet/commit/2b54fb44bc6300190695faef09e0ee94b9dab340"
        },
        "date": 1673431254562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76107.8431372549,
            "unit": "ns",
            "range": "± 2993.7831008444755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3505333.8802083335,
            "unit": "ns",
            "range": "± 7161.754674131163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1102347.2005208333,
            "unit": "ns",
            "range": "± 1266.9474364662917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 816968.0598958334,
            "unit": "ns",
            "range": "± 689.2453276094374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1838703.1901041667,
            "unit": "ns",
            "range": "± 5350.612939713033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 585393.14453125,
            "unit": "ns",
            "range": "± 1256.1766809514916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 532695.7877604166,
            "unit": "ns",
            "range": "± 500.18836406092623"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3065971.875,
            "unit": "ns",
            "range": "± 32403.396390752776"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 3842302.7027027025,
            "unit": "ns",
            "range": "± 185103.2479181703"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 17907000,
            "unit": "ns",
            "range": "± 350003.8228362656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 4578030,
            "unit": "ns",
            "range": "± 400065.50183385686"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 20122642.5,
            "unit": "ns",
            "range": "± 704291.3674032346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 74938,
            "unit": "ns",
            "range": "± 11304.640863402297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 148507,
            "unit": "ns",
            "range": "± 17797.02196742733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 133556.25,
            "unit": "ns",
            "range": "± 6934.363956486035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2590426.6666666665,
            "unit": "ns",
            "range": "± 30851.915121539325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6277286.666666667,
            "unit": "ns",
            "range": "± 70513.12812586915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17253.061224489797,
            "unit": "ns",
            "range": "± 2940.411784109573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 41594.62365591398,
            "unit": "ns",
            "range": "± 4607.68180870857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37710.30927835051,
            "unit": "ns",
            "range": "± 4352.3337737759175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82808.0808080808,
            "unit": "ns",
            "range": "± 18752.40216866747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4662.105263157895,
            "unit": "ns",
            "range": "± 730.8082013084313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15893.814432989691,
            "unit": "ns",
            "range": "± 1936.3203092996225"
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
          "id": "4a5c11c9812926f76a9e9d0d76198c358230b492",
          "message": "Merge pull request #2710 from greymistcube/refactor/optimize-preload\n\n♻️ Optimize preload",
          "timestamp": "2023-01-13T17:51:47+09:00",
          "tree_id": "fdce00d536cafced976f265ea8a56217fb32517a",
          "url": "https://github.com/planetarium/libplanet/commit/4a5c11c9812926f76a9e9d0d76198c358230b492"
        },
        "date": 1673600836162,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104001.03092783505,
            "unit": "ns",
            "range": "± 8419.613694193467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4776252.03125,
            "unit": "ns",
            "range": "± 12831.544028176906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517197.34375,
            "unit": "ns",
            "range": "± 9102.418515510484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146553.828125,
            "unit": "ns",
            "range": "± 5726.658149320417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577450.8138020835,
            "unit": "ns",
            "range": "± 29885.30468916362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817684.6749441965,
            "unit": "ns",
            "range": "± 647.2807355249048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762838.6653645834,
            "unit": "ns",
            "range": "± 2929.0437037857473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4570135.625,
            "unit": "ns",
            "range": "± 13244.618250191153"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5715300,
            "unit": "ns",
            "range": "± 56042.48388499567"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24410950,
            "unit": "ns",
            "range": "± 394518.86910124216"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6280007.142857143,
            "unit": "ns",
            "range": "± 75692.69311636884"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28760302.127659574,
            "unit": "ns",
            "range": "± 1111282.858464538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88709.5744680851,
            "unit": "ns",
            "range": "± 8158.5243915234505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184617.39130434784,
            "unit": "ns",
            "range": "± 8110.0873376333575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167047.22222222222,
            "unit": "ns",
            "range": "± 8206.214962225873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3466985.714285714,
            "unit": "ns",
            "range": "± 44855.73211192415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8806517.391304348,
            "unit": "ns",
            "range": "± 213550.046619211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21059.183673469386,
            "unit": "ns",
            "range": "± 2824.2994472927476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53853.125,
            "unit": "ns",
            "range": "± 6762.885605311265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38171.42857142857,
            "unit": "ns",
            "range": "± 889.4621167553214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85461.25,
            "unit": "ns",
            "range": "± 8428.290121198284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5209.278350515464,
            "unit": "ns",
            "range": "± 721.2666049831487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19205.68181818182,
            "unit": "ns",
            "range": "± 1318.5988692761823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa6aa6bb21208812c943ffb9923d0bad81b7a3e2",
          "message": "Merge pull request #2708 from colibrishin/transport/socket-count\n\nfix/transport: socket count",
          "timestamp": "2023-01-13T19:08:43+09:00",
          "tree_id": "778e222c51d60c6823a686ef96a7682632aff117",
          "url": "https://github.com/planetarium/libplanet/commit/fa6aa6bb21208812c943ffb9923d0bad81b7a3e2"
        },
        "date": 1673605272980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92395.23809523809,
            "unit": "ns",
            "range": "± 3135.3182731000866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4741553.738839285,
            "unit": "ns",
            "range": "± 5667.879544642838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520032.407924107,
            "unit": "ns",
            "range": "± 1712.7719883159464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157159.5963541667,
            "unit": "ns",
            "range": "± 1926.5018172805069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578752.4553571427,
            "unit": "ns",
            "range": "± 4607.8369119054005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810453.3528645834,
            "unit": "ns",
            "range": "± 1050.2440043634228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740688.33984375,
            "unit": "ns",
            "range": "± 900.1717069105047"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3964500.9114583335,
            "unit": "ns",
            "range": "± 16488.127200266994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4919631.818181818,
            "unit": "ns",
            "range": "± 115973.53702306656"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22821750,
            "unit": "ns",
            "range": "± 329375.52744082717"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5419877.419354838,
            "unit": "ns",
            "range": "± 92157.17989636843"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25621248.275862068,
            "unit": "ns",
            "range": "± 589924.9992406357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80623.75,
            "unit": "ns",
            "range": "± 4204.736441717102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187768,
            "unit": "ns",
            "range": "± 23087.356634392694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163120.75471698114,
            "unit": "ns",
            "range": "± 6188.461921827588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3384946.6666666665,
            "unit": "ns",
            "range": "± 47021.0874679294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8369613.333333333,
            "unit": "ns",
            "range": "± 59186.15748716281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17092.929292929293,
            "unit": "ns",
            "range": "± 2275.703637552549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44792.47311827957,
            "unit": "ns",
            "range": "± 3909.4711239985145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39336.36363636364,
            "unit": "ns",
            "range": "± 3080.9637554404403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83457.77777777778,
            "unit": "ns",
            "range": "± 9365.295459897996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4222.164948453608,
            "unit": "ns",
            "range": "± 760.9947256772489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15522.222222222223,
            "unit": "ns",
            "range": "± 992.7577952099205"
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
          "id": "c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d",
          "message": "Merge pull request #2713 from longfin/feature/rocksdb-index-blockhash-iter\n\nTurn recursion to iteration on `RocksDBStore.IndexBlockHash()`",
          "timestamp": "2023-01-16T15:42:34+09:00",
          "tree_id": "c4b7e618a5e927bc18027604bd726b67d479da5c",
          "url": "https://github.com/planetarium/libplanet/commit/c55c2548ac131e48d15a8ffc21dd4ab8cbb30b2d"
        },
        "date": 1673852132163,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100677.77777777778,
            "unit": "ns",
            "range": "± 7623.5745479983925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4764239.933894231,
            "unit": "ns",
            "range": "± 4117.012042860416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508429.84375,
            "unit": "ns",
            "range": "± 1691.7611698721769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151451.8973214286,
            "unit": "ns",
            "range": "± 2281.2419389441334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548896.2109375,
            "unit": "ns",
            "range": "± 3593.9252862676867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 786137.060546875,
            "unit": "ns",
            "range": "± 668.1553984242775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728381.7940848215,
            "unit": "ns",
            "range": "± 967.3942690685677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3993592.3177083335,
            "unit": "ns",
            "range": "± 103243.85537049858"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4858075.5813953485,
            "unit": "ns",
            "range": "± 64107.744473188606"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23759023.333333332,
            "unit": "ns",
            "range": "± 439125.21720000595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6455807.142857143,
            "unit": "ns",
            "range": "± 72916.90174739709"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27175657.14285714,
            "unit": "ns",
            "range": "± 448164.721973939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92350.54945054946,
            "unit": "ns",
            "range": "± 9662.359656895107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203202,
            "unit": "ns",
            "range": "± 20510.957800624277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 189985,
            "unit": "ns",
            "range": "± 15137.493587817375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3448180,
            "unit": "ns",
            "range": "± 40327.80324150715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8474053.333333334,
            "unit": "ns",
            "range": "± 73122.80147285179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17447.872340425532,
            "unit": "ns",
            "range": "± 1761.2757304242741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45568.81720430108,
            "unit": "ns",
            "range": "± 4136.7908822152285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39605.67010309279,
            "unit": "ns",
            "range": "± 2768.4972259394367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88045.45454545454,
            "unit": "ns",
            "range": "± 17216.338186634996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4454.255319148936,
            "unit": "ns",
            "range": "± 617.0803425526946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17441.666666666668,
            "unit": "ns",
            "range": "± 2472.5723518408354"
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
          "id": "4f0cb090c1b44a63dbe9eb283102fed2d3a9427f",
          "message": "Merge pull request #2706 from greymistcube/refactor/cleanup-preload\n\n🧹 Cleanup preload",
          "timestamp": "2023-01-16T18:25:15+09:00",
          "tree_id": "e9df5726db548acb8715354fbb0090fb74cd41f6",
          "url": "https://github.com/planetarium/libplanet/commit/4f0cb090c1b44a63dbe9eb283102fed2d3a9427f"
        },
        "date": 1673862208489,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121063.9344262295,
            "unit": "ns",
            "range": "± 5430.6547421983805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5626077.34375,
            "unit": "ns",
            "range": "± 57114.27803865522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1796464.0364583333,
            "unit": "ns",
            "range": "± 18969.719410142214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375264.4401041667,
            "unit": "ns",
            "range": "± 19315.647171866756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059472.8776041665,
            "unit": "ns",
            "range": "± 23686.182240534024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1007813.0301339285,
            "unit": "ns",
            "range": "± 10044.212845482136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 923524.8046875,
            "unit": "ns",
            "range": "± 9102.433841462052"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5310545.03060567,
            "unit": "ns",
            "range": "± 368684.84640807327"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5982321.951219512,
            "unit": "ns",
            "range": "± 307952.49634646944"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30425097.979797978,
            "unit": "ns",
            "range": "± 2042651.2094993966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7122396.666666667,
            "unit": "ns",
            "range": "± 396384.30547792057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35578962,
            "unit": "ns",
            "range": "± 2348875.3770958716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109927.55102040817,
            "unit": "ns",
            "range": "± 11656.357767969197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219325.60975609755,
            "unit": "ns",
            "range": "± 11176.0608464414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197052.9411764706,
            "unit": "ns",
            "range": "± 7983.5168426245955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4180094.736842105,
            "unit": "ns",
            "range": "± 179157.3863365599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10354992.857142856,
            "unit": "ns",
            "range": "± 121205.63876376324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23918.68131868132,
            "unit": "ns",
            "range": "± 1868.4462997612684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62382.97872340425,
            "unit": "ns",
            "range": "± 9380.059360816736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44788.23529411765,
            "unit": "ns",
            "range": "± 1827.19972185019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114954.73684210527,
            "unit": "ns",
            "range": "± 22793.517034740158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6060.416666666667,
            "unit": "ns",
            "range": "± 855.259784068919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25395.876288659794,
            "unit": "ns",
            "range": "± 3774.9977242204286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bcf00dccb13dbacd764ece25e7f366138eef254",
          "message": "Merge pull request #2718 from greymistcube/chore/tighter-tx-lifespan\n\n🔧 Reduced tx lifespan from 3 hours to 10 minutes",
          "timestamp": "2023-01-17T22:12:57+09:00",
          "tree_id": "f167976af13692468f3ff31ae9b87e48d23eeb99",
          "url": "https://github.com/planetarium/libplanet/commit/9bcf00dccb13dbacd764ece25e7f366138eef254"
        },
        "date": 1673962092672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103518.42105263157,
            "unit": "ns",
            "range": "± 5244.11315734296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4754367.395833333,
            "unit": "ns",
            "range": "± 36242.36237498741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504057.4088541667,
            "unit": "ns",
            "range": "± 8223.911647857276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140544.6875,
            "unit": "ns",
            "range": "± 5475.830480069186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609606.9401041665,
            "unit": "ns",
            "range": "± 4736.996532057933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802806.4127604166,
            "unit": "ns",
            "range": "± 2612.860350007102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764183.7890625,
            "unit": "ns",
            "range": "± 1993.9017891853928"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4680696.328125,
            "unit": "ns",
            "range": "± 54477.307739034586"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5712826.666666667,
            "unit": "ns",
            "range": "± 83075.95893145593"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25215572.340425532,
            "unit": "ns",
            "range": "± 915445.4593261824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5639074.157303371,
            "unit": "ns",
            "range": "± 298259.4677793489"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27524120.689655174,
            "unit": "ns",
            "range": "± 801563.8707192113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91055.67010309278,
            "unit": "ns",
            "range": "± 10461.347199255348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202935.86956521738,
            "unit": "ns",
            "range": "± 15458.85415427093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168295,
            "unit": "ns",
            "range": "± 7465.228435434534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3490781.25,
            "unit": "ns",
            "range": "± 66658.50502123992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8858076.923076924,
            "unit": "ns",
            "range": "± 241809.80014497726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21530.303030303032,
            "unit": "ns",
            "range": "± 2890.1470390337618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52230.769230769234,
            "unit": "ns",
            "range": "± 4446.089225567724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40452.63157894737,
            "unit": "ns",
            "range": "± 2456.768423402215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100730.30303030302,
            "unit": "ns",
            "range": "± 21370.23704922078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5257.142857142857,
            "unit": "ns",
            "range": "± 835.3035129597423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21553.061224489797,
            "unit": "ns",
            "range": "± 3019.9748780832856"
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
          "id": "8707b88bda48d4d42b8e487e85a251144481368e",
          "message": "Merge pull request #2721 from moreal/boundpeer-validate\n\nValidate hostname in `BoundPeer` type",
          "timestamp": "2023-01-18T10:46:11+09:00",
          "tree_id": "fa8afe5c0c7d19887b236c2f44d8b86a0ce33681",
          "url": "https://github.com/planetarium/libplanet/commit/8707b88bda48d4d42b8e487e85a251144481368e"
        },
        "date": 1674007404414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120770.45454545454,
            "unit": "ns",
            "range": "± 4550.8792682475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5289930.230978261,
            "unit": "ns",
            "range": "± 127034.88809135278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777451.8798828125,
            "unit": "ns",
            "range": "± 34833.365372288645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358396.400669643,
            "unit": "ns",
            "range": "± 17194.487484464997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3035693.4988839286,
            "unit": "ns",
            "range": "± 17527.66074504137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 975258.4773137019,
            "unit": "ns",
            "range": "± 9383.412766590558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 897230.7686941965,
            "unit": "ns",
            "range": "± 10584.674651432511"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5415650.4453125,
            "unit": "ns",
            "range": "± 390652.27758074313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7136025,
            "unit": "ns",
            "range": "± 162300.96434191568"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29508947.05882353,
            "unit": "ns",
            "range": "± 591575.8215538046"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6939302.325581395,
            "unit": "ns",
            "range": "± 360975.1563805186"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32632756,
            "unit": "ns",
            "range": "± 839819.3719882071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105739.78494623656,
            "unit": "ns",
            "range": "± 14374.752472613272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219567.77777777778,
            "unit": "ns",
            "range": "± 16184.219167523093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191007.29166666666,
            "unit": "ns",
            "range": "± 15690.662625917072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3898744.4444444445,
            "unit": "ns",
            "range": "± 260476.39409759603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9860123.958333334,
            "unit": "ns",
            "range": "± 566295.2101147453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21513.333333333332,
            "unit": "ns",
            "range": "± 2345.8402102732475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57006.18556701031,
            "unit": "ns",
            "range": "± 9824.011977812637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42451.11111111111,
            "unit": "ns",
            "range": "± 4310.250245464507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107193.81443298969,
            "unit": "ns",
            "range": "± 21285.709282839027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5477.894736842105,
            "unit": "ns",
            "range": "± 712.8275950685085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23821.739130434784,
            "unit": "ns",
            "range": "± 3170.6007364694046"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3294d71ecaef386577c4f10ff4e202d8ca90ee",
          "message": "Merge pull request #2716 from planetarium/pow-dynamic-validator\n\nPow dynamic validator",
          "timestamp": "2023-01-18T12:52:06+09:00",
          "tree_id": "7cd68701d78ea8a7bef2ceb426022324839dcf9d",
          "url": "https://github.com/planetarium/libplanet/commit/ac3294d71ecaef386577c4f10ff4e202d8ca90ee"
        },
        "date": 1674014802217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102247.05882352941,
            "unit": "ns",
            "range": "± 3934.4810555485697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4801371.979166667,
            "unit": "ns",
            "range": "± 55849.73560128045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522087.123325893,
            "unit": "ns",
            "range": "± 6044.784709295014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159399.765625,
            "unit": "ns",
            "range": "± 4413.090312132312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609758.503605769,
            "unit": "ns",
            "range": "± 4410.509024222575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813803.5226004465,
            "unit": "ns",
            "range": "± 3987.728260731517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764912.744140625,
            "unit": "ns",
            "range": "± 836.306191923181"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4655437.265625,
            "unit": "ns",
            "range": "± 40391.76269299769"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5143548.717948718,
            "unit": "ns",
            "range": "± 258084.82535061426"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24696536.666666668,
            "unit": "ns",
            "range": "± 727985.3093834799"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5733963.157894737,
            "unit": "ns",
            "range": "± 291785.6948022436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27649866.666666668,
            "unit": "ns",
            "range": "± 908603.1061863197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89537.36263736263,
            "unit": "ns",
            "range": "± 7646.533686022537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189302.12765957447,
            "unit": "ns",
            "range": "± 16486.312202795503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168340,
            "unit": "ns",
            "range": "± 9310.158762329205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3470566.6666666665,
            "unit": "ns",
            "range": "± 56070.61449211885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8785390,
            "unit": "ns",
            "range": "± 259158.35439972297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21684.736842105263,
            "unit": "ns",
            "range": "± 2053.0086080932087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51048.3870967742,
            "unit": "ns",
            "range": "± 3749.2495742836963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38727.450980392154,
            "unit": "ns",
            "range": "± 1595.8794981291726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96095.95959595959,
            "unit": "ns",
            "range": "± 19470.783550745546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4843.298969072165,
            "unit": "ns",
            "range": "± 530.1153994836968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19582.105263157893,
            "unit": "ns",
            "range": "± 1881.3744945655533"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b923ec9ea125a779f3d83c68a94a3cc69aab1f83",
          "message": "Merge pull request #2719 from longfin/bugfix/dealer-disposal\n\nFix NetMQSocket leak",
          "timestamp": "2023-01-18T14:41:04+09:00",
          "tree_id": "f38041db1ca49c6e90ae0de9fb40944156620b10",
          "url": "https://github.com/planetarium/libplanet/commit/b923ec9ea125a779f3d83c68a94a3cc69aab1f83"
        },
        "date": 1674021318373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107217.02127659574,
            "unit": "ns",
            "range": "± 7188.680443285226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4843410.46875,
            "unit": "ns",
            "range": "± 19765.78416702571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534220.9505208333,
            "unit": "ns",
            "range": "± 8213.866722901474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1192688.9927455357,
            "unit": "ns",
            "range": "± 4500.562214483448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614237.8125,
            "unit": "ns",
            "range": "± 8210.554518750307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828788.9583333334,
            "unit": "ns",
            "range": "± 998.2508698981758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774744.4856770834,
            "unit": "ns",
            "range": "± 3945.1204735224674"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4822372.447916667,
            "unit": "ns",
            "range": "± 42673.62874364423"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6010193.333333333,
            "unit": "ns",
            "range": "± 110941.79597986549"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26667138.46153846,
            "unit": "ns",
            "range": "± 437016.095314695"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6408175,
            "unit": "ns",
            "range": "± 144644.02720217366"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29142752.94117647,
            "unit": "ns",
            "range": "± 594904.8790748473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96853.0612244898,
            "unit": "ns",
            "range": "± 10131.579741484966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198006.52173913043,
            "unit": "ns",
            "range": "± 13475.739734616674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199514,
            "unit": "ns",
            "range": "± 15981.030547925793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3742553.3333333335,
            "unit": "ns",
            "range": "± 46197.941615658696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9419947.826086957,
            "unit": "ns",
            "range": "± 231625.31041938718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23887.628865979383,
            "unit": "ns",
            "range": "± 3518.737277418053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60777.77777777778,
            "unit": "ns",
            "range": "± 10547.516929528236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41878.78787878788,
            "unit": "ns",
            "range": "± 2851.5041761832213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116072.04301075269,
            "unit": "ns",
            "range": "± 14885.93854726374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6991.836734693878,
            "unit": "ns",
            "range": "± 1205.4578177560704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28554.081632653062,
            "unit": "ns",
            "range": "± 5674.961616970826"
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
          "id": "7c5392c7e40bca979415f316f6f0a5e083b2bf59",
          "message": "Merge pull request #2584 from greymistcube/refactor/block-locator\n\n♻️ Refactor `BlockLocator`",
          "timestamp": "2023-01-18T17:14:34+09:00",
          "tree_id": "a5b8ca613b01cffa39f3b6699fc6e85bbe549f6d",
          "url": "https://github.com/planetarium/libplanet/commit/7c5392c7e40bca979415f316f6f0a5e083b2bf59"
        },
        "date": 1674030446808,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96276.4705882353,
            "unit": "ns",
            "range": "± 1886.309032132827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4821661.302083333,
            "unit": "ns",
            "range": "± 11488.446230306532"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523062.0833333333,
            "unit": "ns",
            "range": "± 2556.20251436372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140765.8900669643,
            "unit": "ns",
            "range": "± 2101.3357806253384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582732.979910714,
            "unit": "ns",
            "range": "± 4095.447134364228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 784993.447265625,
            "unit": "ns",
            "range": "± 997.4433251276446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726147.5520833334,
            "unit": "ns",
            "range": "± 1018.8666177256149"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3962533.90625,
            "unit": "ns",
            "range": "± 28365.799268894058"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4916490,
            "unit": "ns",
            "range": "± 67660.34251108953"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22331907.14285714,
            "unit": "ns",
            "range": "± 194002.0200699178"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5433784.375,
            "unit": "ns",
            "range": "± 118422.12933284813"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26024766.666666668,
            "unit": "ns",
            "range": "± 417718.80778934574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87429.59183673469,
            "unit": "ns",
            "range": "± 10413.148005194058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173878.08219178082,
            "unit": "ns",
            "range": "± 7743.352822750306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164207.52688172043,
            "unit": "ns",
            "range": "± 9256.586803567874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3397778.5714285714,
            "unit": "ns",
            "range": "± 28255.548905587446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8274156.666666667,
            "unit": "ns",
            "range": "± 83166.92737815801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15518.072289156626,
            "unit": "ns",
            "range": "± 843.5038100906119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47332.32323232323,
            "unit": "ns",
            "range": "± 6111.879170639385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 35880.281690140844,
            "unit": "ns",
            "range": "± 1750.2342470415501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81518.55670103093,
            "unit": "ns",
            "range": "± 14614.678194490712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4123.118279569892,
            "unit": "ns",
            "range": "± 471.61604338658424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16077.777777777777,
            "unit": "ns",
            "range": "± 843.9490505948804"
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
          "id": "ed9ee092c883ba93365316ea520f7da624646932",
          "message": "Merge pull request #2724 from greymistcube/release/0.46.0\n\n🚀 Release 0.46.0",
          "timestamp": "2023-01-18T17:37:55+09:00",
          "tree_id": "7919b8ddfe6f6a1c1e09c010681ebf2e3795eee6",
          "url": "https://github.com/planetarium/libplanet/commit/ed9ee092c883ba93365316ea520f7da624646932"
        },
        "date": 1674032420207,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122627.17391304347,
            "unit": "ns",
            "range": "± 17892.199191979333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5833328.816964285,
            "unit": "ns",
            "range": "± 184086.5333179156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834490.5995244565,
            "unit": "ns",
            "range": "± 70279.63207331917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1419841.9970703125,
            "unit": "ns",
            "range": "± 50307.67656296634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3096519.53125,
            "unit": "ns",
            "range": "± 99778.3938444004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016966.9650607639,
            "unit": "ns",
            "range": "± 21422.327064377256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 945768.9311365928,
            "unit": "ns",
            "range": "± 28675.499134985985"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5701893.5625,
            "unit": "ns",
            "range": "± 375846.511027302"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6414189.898989899,
            "unit": "ns",
            "range": "± 540268.4146763796"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30433126.80412371,
            "unit": "ns",
            "range": "± 1991481.3664767377"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6893476.804123712,
            "unit": "ns",
            "range": "± 604615.1900374774"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36494873.195876285,
            "unit": "ns",
            "range": "± 2918348.0795904137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99881.72043010753,
            "unit": "ns",
            "range": "± 16346.193189564237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232610.101010101,
            "unit": "ns",
            "range": "± 51956.80995798435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201392.78350515463,
            "unit": "ns",
            "range": "± 34346.946878576055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4300876.804123712,
            "unit": "ns",
            "range": "± 422199.62313348294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10880807.142857144,
            "unit": "ns",
            "range": "± 933138.3334371691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22038.775510204083,
            "unit": "ns",
            "range": "± 7387.990151940327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59265.95744680851,
            "unit": "ns",
            "range": "± 15975.79185572736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46409.574468085106,
            "unit": "ns",
            "range": "± 11316.179958326642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115690.90909090909,
            "unit": "ns",
            "range": "± 30378.853046657747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5211.578947368421,
            "unit": "ns",
            "range": "± 956.7079144622068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23226.041666666668,
            "unit": "ns",
            "range": "± 9331.421111285266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "124115fb5538ed5f6c111a32e2b8c6c5f4e1369e",
          "message": "Merge pull request #2726 from riemannulus/prepare-0.47\n\nrelease: prepare 0.47",
          "timestamp": "2023-01-19T01:32:16+09:00",
          "tree_id": "ee971d646c27028070577759dfef5c18036e0a94",
          "url": "https://github.com/planetarium/libplanet/commit/124115fb5538ed5f6c111a32e2b8c6c5f4e1369e"
        },
        "date": 1674060690098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 153683.87096774194,
            "unit": "ns",
            "range": "± 12244.131605213106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6258737.03125,
            "unit": "ns",
            "range": "± 143883.00321301352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1955777.0089285714,
            "unit": "ns",
            "range": "± 18514.725319610705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1501455.9194711538,
            "unit": "ns",
            "range": "± 15197.650008615034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3363987.53125,
            "unit": "ns",
            "range": "± 88476.53232370484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036133.5797991072,
            "unit": "ns",
            "range": "± 13728.510722033656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1001649.9860491072,
            "unit": "ns",
            "range": "± 12252.57410296412"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6264784.6923828125,
            "unit": "ns",
            "range": "± 361044.1813307581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7195758.064516129,
            "unit": "ns",
            "range": "± 407961.2644982312"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 34172357.14285714,
            "unit": "ns",
            "range": "± 337176.7528127683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7920525.423728813,
            "unit": "ns",
            "range": "± 349575.93846871506"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37397793.333333336,
            "unit": "ns",
            "range": "± 564931.2201709244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125530.10752688172,
            "unit": "ns",
            "range": "± 20152.41804968282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251203.1914893617,
            "unit": "ns",
            "range": "± 30053.334140003157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247752.1739130435,
            "unit": "ns",
            "range": "± 15895.731531969672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4767285.106382979,
            "unit": "ns",
            "range": "± 184553.93694777475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12236703.846153846,
            "unit": "ns",
            "range": "± 330753.55717605725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28508.163265306124,
            "unit": "ns",
            "range": "± 9373.439922092084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71219.79166666667,
            "unit": "ns",
            "range": "± 15569.163989262923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68661.61616161616,
            "unit": "ns",
            "range": "± 14098.188529394421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156503.09278350516,
            "unit": "ns",
            "range": "± 33649.08200087661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9998.850574712644,
            "unit": "ns",
            "range": "± 1183.7557743159734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28429.347826086956,
            "unit": "ns",
            "range": "± 5983.944416418524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad15d083ca812dd294a422c507a17f847e95adf5",
          "message": "Merge pull request #2732 from dahlia/upgrade-net6-csharp10",
          "timestamp": "2023-01-19T18:14:56+09:00",
          "tree_id": "38ee257c8d8ffcfa24d4a0aecabb2ebef9c6b073",
          "url": "https://github.com/planetarium/libplanet/commit/ad15d083ca812dd294a422c507a17f847e95adf5"
        },
        "date": 1674120840879,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 126561.70212765958,
            "unit": "ns",
            "range": "± 11304.734058144482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5516890.680803572,
            "unit": "ns",
            "range": "± 92583.95534802665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1784995.6909179688,
            "unit": "ns",
            "range": "± 65033.369739043286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284275.681423611,
            "unit": "ns",
            "range": "± 48383.123481209856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2827862.410714286,
            "unit": "ns",
            "range": "± 92382.82572130655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 938337.6743861607,
            "unit": "ns",
            "range": "± 26327.876522879917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 854493.3203125,
            "unit": "ns",
            "range": "± 14606.410997563164"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5347499.074074074,
            "unit": "ns",
            "range": "± 146419.76830358797"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6001038.541666667,
            "unit": "ns",
            "range": "± 540089.7807177485"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27549528.57142857,
            "unit": "ns",
            "range": "± 1832739.7181921864"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6686716.842105263,
            "unit": "ns",
            "range": "± 509800.19524812663"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33082932.98969072,
            "unit": "ns",
            "range": "± 2537814.853033086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100355.78947368421,
            "unit": "ns",
            "range": "± 17487.185069568368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233106.66666666666,
            "unit": "ns",
            "range": "± 31980.46383990905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179791.48936170212,
            "unit": "ns",
            "range": "± 16333.27239120385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3760144.4444444445,
            "unit": "ns",
            "range": "± 238882.15958459614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10157963.636363637,
            "unit": "ns",
            "range": "± 825706.2079998546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23159.59595959596,
            "unit": "ns",
            "range": "± 8178.192994262979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62901.030927835054,
            "unit": "ns",
            "range": "± 11427.748528302363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48191,
            "unit": "ns",
            "range": "± 9635.782377171146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113207.52688172043,
            "unit": "ns",
            "range": "± 17418.10799738332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11819.191919191919,
            "unit": "ns",
            "range": "± 5730.738399687105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30036.458333333332,
            "unit": "ns",
            "range": "± 7177.921115134086"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4af0f1d21e7500a4c2702b850b917c5d28a771bd",
          "message": "Merge pull request #2733 from limebell/refactor/remove-validator-from-interface\n\nRemove Validator related methods from interfaces",
          "timestamp": "2023-01-20T13:55:48+09:00",
          "tree_id": "6deae8f6d719122481ddf5798149d819c6ace54f",
          "url": "https://github.com/planetarium/libplanet/commit/4af0f1d21e7500a4c2702b850b917c5d28a771bd"
        },
        "date": 1674191380180,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99074.60317460318,
            "unit": "ns",
            "range": "± 4483.157306716324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749626.171875,
            "unit": "ns",
            "range": "± 7833.05311318843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518602.7473958333,
            "unit": "ns",
            "range": "± 2310.605448510122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1129794.447544643,
            "unit": "ns",
            "range": "± 846.0676152061518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586527.0052083335,
            "unit": "ns",
            "range": "± 2259.847394161008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810845.4627403846,
            "unit": "ns",
            "range": "± 496.63110279607275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729542.3046875,
            "unit": "ns",
            "range": "± 551.7081144653345"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4057447.265625,
            "unit": "ns",
            "range": "± 5894.467656854801"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5633514.285714285,
            "unit": "ns",
            "range": "± 46039.96352907159"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23261875,
            "unit": "ns",
            "range": "± 273064.98435687093"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5732214.444444444,
            "unit": "ns",
            "range": "± 195972.28602251108"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25973213.333333332,
            "unit": "ns",
            "range": "± 381748.0860961784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88726.80412371134,
            "unit": "ns",
            "range": "± 9992.085570839694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191282.6530612245,
            "unit": "ns",
            "range": "± 17279.103794475228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173701.02040816325,
            "unit": "ns",
            "range": "± 12653.963112526742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3423353.3333333335,
            "unit": "ns",
            "range": "± 42018.803047252666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8427920,
            "unit": "ns",
            "range": "± 75582.24659270191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18225.531914893618,
            "unit": "ns",
            "range": "± 1912.9404360496208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52570.61855670103,
            "unit": "ns",
            "range": "± 6034.8801794293095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46091.836734693876,
            "unit": "ns",
            "range": "± 3910.98567662429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83434.52380952382,
            "unit": "ns",
            "range": "± 10380.536630365794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4846.875,
            "unit": "ns",
            "range": "± 663.4761924098987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17268.88888888889,
            "unit": "ns",
            "range": "± 1820.1675712734818"
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
          "id": "a993bb7b036cdd3d63bb3aed4daf543073c403fc",
          "message": "Merge pull request #2748 from greymistcube/chore/changelog-fix\n\n🧹 Fixed typos",
          "timestamp": "2023-01-21T14:05:00+09:00",
          "tree_id": "43fea792d9a4293b7eb52bd492f241a118097909",
          "url": "https://github.com/planetarium/libplanet/commit/a993bb7b036cdd3d63bb3aed4daf543073c403fc"
        },
        "date": 1674278255961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 95683.33333333333,
            "unit": "ns",
            "range": "± 2053.4762491644146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4775554.086538462,
            "unit": "ns",
            "range": "± 6907.498260721278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1540065.3041294643,
            "unit": "ns",
            "range": "± 1550.222392457999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144522.2526041667,
            "unit": "ns",
            "range": "± 1265.7654063695759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2505089.002403846,
            "unit": "ns",
            "range": "± 1752.8296334763295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803673.7434895834,
            "unit": "ns",
            "range": "± 1070.0701138927639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737076.953125,
            "unit": "ns",
            "range": "± 712.1242775429006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3980220.284598214,
            "unit": "ns",
            "range": "± 8750.360441344528"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5673520,
            "unit": "ns",
            "range": "± 68380.77424038343"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22795520,
            "unit": "ns",
            "range": "± 214576.2974528441"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5461308.888888889,
            "unit": "ns",
            "range": "± 126131.19400453681"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25971276.666666668,
            "unit": "ns",
            "range": "± 307751.5683299174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88302.0202020202,
            "unit": "ns",
            "range": "± 9329.402498508656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189961.22448979592,
            "unit": "ns",
            "range": "± 17005.957916881198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174147.61904761905,
            "unit": "ns",
            "range": "± 7627.472780274269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3406033.3333333335,
            "unit": "ns",
            "range": "± 38422.77350490883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8335606.666666667,
            "unit": "ns",
            "range": "± 84871.6212596301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16096.59090909091,
            "unit": "ns",
            "range": "± 1146.754426971387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48158.333333333336,
            "unit": "ns",
            "range": "± 6225.240078510043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40046.875,
            "unit": "ns",
            "range": "± 3239.6865710971747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88498.94736842105,
            "unit": "ns",
            "range": "± 17309.998922875948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4303.092783505154,
            "unit": "ns",
            "range": "± 557.4221934209412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18098,
            "unit": "ns",
            "range": "± 3076.465898436455"
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
          "id": "e03a39d36d0512496e5f493b5000413b8dfd9c80",
          "message": "Merge pull request #2743 from greymistcube/refactor/extract-transport\n\nRefactor/extract transport",
          "timestamp": "2023-01-27T15:53:12+09:00",
          "tree_id": "fe89e2f6fc98e385eb6ba15ce51148c86df39924",
          "url": "https://github.com/planetarium/libplanet/commit/e03a39d36d0512496e5f493b5000413b8dfd9c80"
        },
        "date": 1674803130026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103878.94736842105,
            "unit": "ns",
            "range": "± 2289.00243856198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4772112.239583333,
            "unit": "ns",
            "range": "± 24762.276666160953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1499104.8828125,
            "unit": "ns",
            "range": "± 5213.114216585081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1144388.4244791667,
            "unit": "ns",
            "range": "± 3315.1253529603932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578641.5625,
            "unit": "ns",
            "range": "± 9199.812389380055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809247.4609375,
            "unit": "ns",
            "range": "± 4313.427698893615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753705.2604166666,
            "unit": "ns",
            "range": "± 3256.2527831204884"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4560784.140625,
            "unit": "ns",
            "range": "± 28890.323580597404"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5496271.428571428,
            "unit": "ns",
            "range": "± 62401.15172225378"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23636865.217391305,
            "unit": "ns",
            "range": "± 594663.1480462437"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6190973.333333333,
            "unit": "ns",
            "range": "± 63264.80026350319"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30953353.333333332,
            "unit": "ns",
            "range": "± 406752.7168522254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87138.29787234042,
            "unit": "ns",
            "range": "± 7223.603877953637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184633.33333333334,
            "unit": "ns",
            "range": "± 14486.345394838228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157989.2857142857,
            "unit": "ns",
            "range": "± 6532.260601922474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3393460,
            "unit": "ns",
            "range": "± 43733.73656898887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9035033.333333334,
            "unit": "ns",
            "range": "± 133952.0365475572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20045.263157894737,
            "unit": "ns",
            "range": "± 2672.824962670588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45835.555555555555,
            "unit": "ns",
            "range": "± 3009.845683121436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39094.444444444445,
            "unit": "ns",
            "range": "± 1297.8981788028223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88196.73913043478,
            "unit": "ns",
            "range": "± 14885.138625059666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5201.0204081632655,
            "unit": "ns",
            "range": "± 649.2652306918941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18606.521739130436,
            "unit": "ns",
            "range": "± 1135.0368486854802"
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
          "id": "a58bb1ed94765944c567ad992ea6feebf2d66f36",
          "message": "Merge pull request #2754 from riemannulus/fix/swarm-test-stopping\n\nfix: Adjustment effective changes from hang in the CI research",
          "timestamp": "2023-01-27T17:56:35+09:00",
          "tree_id": "6930c9bac76d7cd195ab2af78b91d2b35bc37ea3",
          "url": "https://github.com/planetarium/libplanet/commit/a58bb1ed94765944c567ad992ea6feebf2d66f36"
        },
        "date": 1674810717457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102641.75824175825,
            "unit": "ns",
            "range": "± 5772.387642601551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4772443.125,
            "unit": "ns",
            "range": "± 18332.995505598283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556292.96875,
            "unit": "ns",
            "range": "± 7567.501089726193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160334.6484375,
            "unit": "ns",
            "range": "± 10223.036881803871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605839.4270833335,
            "unit": "ns",
            "range": "± 10994.384824096298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810164.2202524039,
            "unit": "ns",
            "range": "± 1904.6501861323945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770117.6302083334,
            "unit": "ns",
            "range": "± 1385.7947451239354"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4642902.036830357,
            "unit": "ns",
            "range": "± 29649.989149682162"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5794290.909090909,
            "unit": "ns",
            "range": "± 139139.36113904582"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24907024.137931034,
            "unit": "ns",
            "range": "± 714349.1771511687"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6244078.571428572,
            "unit": "ns",
            "range": "± 73313.2287209785"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28335204,
            "unit": "ns",
            "range": "± 749832.556575133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91835.39325842696,
            "unit": "ns",
            "range": "± 7228.251872180529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196991.39784946237,
            "unit": "ns",
            "range": "± 13338.239046098435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170921.21212121213,
            "unit": "ns",
            "range": "± 11010.618925746854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3487623.3333333335,
            "unit": "ns",
            "range": "± 64533.04210874863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8880760.606060605,
            "unit": "ns",
            "range": "± 273376.60029183404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20930.208333333332,
            "unit": "ns",
            "range": "± 2767.8652154462275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52511.22448979592,
            "unit": "ns",
            "range": "± 7993.887905518315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40345.36082474227,
            "unit": "ns",
            "range": "± 2520.0454947346975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98179.76190476191,
            "unit": "ns",
            "range": "± 11550.390175039098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5236.458333333333,
            "unit": "ns",
            "range": "± 926.6941574238551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21760.63829787234,
            "unit": "ns",
            "range": "± 2683.1300164116374"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34f3e59036e469e0d4230769953ce803cc7dd9fb",
          "message": "Merge pull request #2756 from dahlia/block-json-serialization\n\nSerialize/deserialize `Block<T>` better with `System.Text.Json.JsonSerializer`",
          "timestamp": "2023-01-30T17:16:43+09:00",
          "tree_id": "40be0ff242cc5a62410886ca50defee62a04b603",
          "url": "https://github.com/planetarium/libplanet/commit/34f3e59036e469e0d4230769953ce803cc7dd9fb"
        },
        "date": 1675067752060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 113325.53191489361,
            "unit": "ns",
            "range": "± 7369.815453697001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5156056.477864583,
            "unit": "ns",
            "range": "± 133454.49514062845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668907.640625,
            "unit": "ns",
            "range": "± 43112.917735026196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246710.6800426135,
            "unit": "ns",
            "range": "± 30457.64649190169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845907.6171875,
            "unit": "ns",
            "range": "± 45921.18607870558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879544.0730168269,
            "unit": "ns",
            "range": "± 23396.70302260903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827742.8232621173,
            "unit": "ns",
            "range": "± 30761.603060053683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5179940.0146484375,
            "unit": "ns",
            "range": "± 87872.08895625958"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6009195.833333333,
            "unit": "ns",
            "range": "± 657129.9771961591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29280483,
            "unit": "ns",
            "range": "± 2182043.020761863"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6178784.693877551,
            "unit": "ns",
            "range": "± 481057.96323323826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32677989,
            "unit": "ns",
            "range": "± 2738466.625904159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95934.0425531915,
            "unit": "ns",
            "range": "± 11210.455499858102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204718.3673469388,
            "unit": "ns",
            "range": "± 27217.476938820237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178970.83333333334,
            "unit": "ns",
            "range": "± 12983.730034702477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3747939.7959183673,
            "unit": "ns",
            "range": "± 250939.654198858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9810731.632653061,
            "unit": "ns",
            "range": "± 604315.9953078654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20249.45054945055,
            "unit": "ns",
            "range": "± 1755.776094708461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54183.67346938775,
            "unit": "ns",
            "range": "± 9527.525980807346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41108.0459770115,
            "unit": "ns",
            "range": "± 3191.0200450787033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100033.67346938775,
            "unit": "ns",
            "range": "± 22004.900784403773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5369.473684210527,
            "unit": "ns",
            "range": "± 580.915214125297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21731.9587628866,
            "unit": "ns",
            "range": "± 3363.144188347434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07f322e1d13d88e551c1bd3b242183559d13c448",
          "message": "Merge pull request #2758 from dahlia/planet-block",
          "timestamp": "2023-01-31T15:06:11+09:00",
          "tree_id": "982d38bd25720519ccd262c351c4d1c879bbd1af",
          "url": "https://github.com/planetarium/libplanet/commit/07f322e1d13d88e551c1bd3b242183559d13c448"
        },
        "date": 1675146128252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105283.33333333333,
            "unit": "ns",
            "range": "± 5671.145170968628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4735921.484375,
            "unit": "ns",
            "range": "± 20405.566314269978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1506279.6484375,
            "unit": "ns",
            "range": "± 7645.001416702089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159098.7890625,
            "unit": "ns",
            "range": "± 8730.408306283454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620894.453125,
            "unit": "ns",
            "range": "± 7857.924507477813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830733.6653645834,
            "unit": "ns",
            "range": "± 2068.7692289703155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770645.2669270834,
            "unit": "ns",
            "range": "± 3405.6131145708378"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4664525.833333333,
            "unit": "ns",
            "range": "± 27548.236537833072"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5583871.428571428,
            "unit": "ns",
            "range": "± 68237.36207106472"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24548281.48148148,
            "unit": "ns",
            "range": "± 684074.4994499654"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6200442.857142857,
            "unit": "ns",
            "range": "± 60663.950951573745"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27771176.19047619,
            "unit": "ns",
            "range": "± 624548.9355565037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89347.25274725274,
            "unit": "ns",
            "range": "± 6034.6838388940505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191614.43298969071,
            "unit": "ns",
            "range": "± 17287.164010296783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162818.5185185185,
            "unit": "ns",
            "range": "± 6839.785776025061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3420942.8571428573,
            "unit": "ns",
            "range": "± 41575.46825279976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8598644.444444444,
            "unit": "ns",
            "range": "± 183822.68381504857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21274.747474747473,
            "unit": "ns",
            "range": "± 3514.934418476757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52817.17171717172,
            "unit": "ns",
            "range": "± 6694.13450844477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39456,
            "unit": "ns",
            "range": "± 1441.8185795468619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96107.14285714286,
            "unit": "ns",
            "range": "± 21046.99821876313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5306.25,
            "unit": "ns",
            "range": "± 701.999025340454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20183.673469387755,
            "unit": "ns",
            "range": "± 2843.7648878976242"
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
          "id": "c4a221fa87b0349581f1c553c409f03226a7d463",
          "message": "Merge pull request #2747 from greymistcube/bump/bencodex\n\n⬆️ Bump dependencies",
          "timestamp": "2023-02-01T00:16:32-05:00",
          "tree_id": "1a4a36fa3a502a8f1e77f01d995fe25a562bbc14",
          "url": "https://github.com/planetarium/libplanet/commit/c4a221fa87b0349581f1c553c409f03226a7d463"
        },
        "date": 1675229462225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122931.25,
            "unit": "ns",
            "range": "± 3754.432863833399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5628711.628605769,
            "unit": "ns",
            "range": "± 20560.921785588846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1854975.3255208333,
            "unit": "ns",
            "range": "± 10868.484812139186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1356226.3070913462,
            "unit": "ns",
            "range": "± 6899.545515629938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3147127.7994791665,
            "unit": "ns",
            "range": "± 8439.324310606558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961352.8545673077,
            "unit": "ns",
            "range": "± 4561.253722893829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894298.3984375,
            "unit": "ns",
            "range": "± 8223.973549065826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5422634.033203125,
            "unit": "ns",
            "range": "± 360121.58451512456"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6061227.2727272725,
            "unit": "ns",
            "range": "± 323120.6474536521"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28265235,
            "unit": "ns",
            "range": "± 633662.6964884809"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6904794,
            "unit": "ns",
            "range": "± 650589.3430551792"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33555682.692307696,
            "unit": "ns",
            "range": "± 1376979.8944409355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107853.26086956522,
            "unit": "ns",
            "range": "± 11933.326232202246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219128.88888888888,
            "unit": "ns",
            "range": "± 13293.567291582429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199803.17460317462,
            "unit": "ns",
            "range": "± 9140.833029271567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245378.378378378,
            "unit": "ns",
            "range": "± 141146.42935448108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10527096.42857143,
            "unit": "ns",
            "range": "± 301375.3147773435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26108.08080808081,
            "unit": "ns",
            "range": "± 4327.361376543371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66673.19587628866,
            "unit": "ns",
            "range": "± 9598.616604576384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46275.78947368421,
            "unit": "ns",
            "range": "± 3112.4566403704152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115257.73195876289,
            "unit": "ns",
            "range": "± 21853.674533948262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6418.367346938776,
            "unit": "ns",
            "range": "± 746.0337654080885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26163.736263736264,
            "unit": "ns",
            "range": "± 2611.237105005828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "622343fb5ad8eccdccbe4e30f839a81297e40a3f",
          "message": "Merge pull request #2757 from limebell/chore/fix-state-graphql\n\nFix `stateQuery`",
          "timestamp": "2023-02-01T17:10:41+09:00",
          "tree_id": "0b29c0c2db1ace8da55214796291760b1c449cf1",
          "url": "https://github.com/planetarium/libplanet/commit/622343fb5ad8eccdccbe4e30f839a81297e40a3f"
        },
        "date": 1675240236625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118890,
            "unit": "ns",
            "range": "± 7755.057066995674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5580488.515625,
            "unit": "ns",
            "range": "± 125273.79114794974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1846074.8119212964,
            "unit": "ns",
            "range": "± 49618.085737561654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410454.125,
            "unit": "ns",
            "range": "± 37582.51493644126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3156629.561941964,
            "unit": "ns",
            "range": "± 88373.49281418235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967910.888671875,
            "unit": "ns",
            "range": "± 9241.615621312862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926203.3138020834,
            "unit": "ns",
            "range": "± 12981.075216760415"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5560933.169880319,
            "unit": "ns",
            "range": "± 315374.4755881081"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6434743.298969072,
            "unit": "ns",
            "range": "± 600952.6594824283"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31394050,
            "unit": "ns",
            "range": "± 2246510.7968159257"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7201085.263157895,
            "unit": "ns",
            "range": "± 510139.26654383"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35757740,
            "unit": "ns",
            "range": "± 1933078.4848575208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105703.1914893617,
            "unit": "ns",
            "range": "± 13110.231185905297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222734.0909090909,
            "unit": "ns",
            "range": "± 12991.764733406784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202204.25531914894,
            "unit": "ns",
            "range": "± 12168.794171569554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4383558.064516129,
            "unit": "ns",
            "range": "± 198482.24064618527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10396601.587301588,
            "unit": "ns",
            "range": "± 474654.0772625428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24305.263157894737,
            "unit": "ns",
            "range": "± 4731.545751228518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62194.897959183676,
            "unit": "ns",
            "range": "± 8730.313611931486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47447.25274725275,
            "unit": "ns",
            "range": "± 4794.5881681407955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109389.36170212766,
            "unit": "ns",
            "range": "± 19445.664403777104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6020.618556701031,
            "unit": "ns",
            "range": "± 822.3363748503782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24570.526315789473,
            "unit": "ns",
            "range": "± 3739.776807659599"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38f93473747ee77117b2b39a10ec7b37ae8f1d34",
          "message": "Merge pull request #2761 from dahlia/filemode-create",
          "timestamp": "2023-02-01T18:33:34+09:00",
          "tree_id": "30e09de5c9aa2ef978327ac1d621a1b7bd24d8c6",
          "url": "https://github.com/planetarium/libplanet/commit/38f93473747ee77117b2b39a10ec7b37ae8f1d34"
        },
        "date": 1675244864643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102331.25,
            "unit": "ns",
            "range": "± 1915.8005289347495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4641155.546875,
            "unit": "ns",
            "range": "± 20605.806980974878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1476561.8722098214,
            "unit": "ns",
            "range": "± 6347.776670653509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1117468.4151785714,
            "unit": "ns",
            "range": "± 5688.067952232201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2566895.3645833335,
            "unit": "ns",
            "range": "± 10875.252252535582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825104.453125,
            "unit": "ns",
            "range": "± 3534.763196774498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745245,
            "unit": "ns",
            "range": "± 1977.457965571495"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4471801.893028846,
            "unit": "ns",
            "range": "± 29246.33398349536"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5584928.571428572,
            "unit": "ns",
            "range": "± 55160.26201437504"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23156369.56521739,
            "unit": "ns",
            "range": "± 570800.8755127885"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5864868.571428572,
            "unit": "ns",
            "range": "± 188740.82723551418"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26629023.076923076,
            "unit": "ns",
            "range": "± 638123.9931597572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 85850.50505050505,
            "unit": "ns",
            "range": "± 12044.097324190221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182563.26530612246,
            "unit": "ns",
            "range": "± 14434.340408979175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157131.57894736843,
            "unit": "ns",
            "range": "± 4610.511214145458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3298093.3333333335,
            "unit": "ns",
            "range": "± 47133.692327049364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8303740,
            "unit": "ns",
            "range": "± 128493.7508208084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17975.531914893618,
            "unit": "ns",
            "range": "± 2007.8173122038622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43827.47252747253,
            "unit": "ns",
            "range": "± 2747.2841512246614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37562.857142857145,
            "unit": "ns",
            "range": "± 1241.2246595448323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76473.62637362638,
            "unit": "ns",
            "range": "± 10303.050628762932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4687.755102040816,
            "unit": "ns",
            "range": "± 490.58460941444065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17017.721518987342,
            "unit": "ns",
            "range": "± 900.962376298453"
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
          "id": "34cf338c2cfb65517f6d739ce3aff01c3dd33863",
          "message": "Merge pull request #2759 from greymistcube/refactor/apv-spec\n\n♻️ Removed nullability from `TrustedAppProtocolVersionSigners`",
          "timestamp": "2023-02-01T05:48:32-05:00",
          "tree_id": "f7fb41009837e35e3aeab81ed0b217dea613d067",
          "url": "https://github.com/planetarium/libplanet/commit/34cf338c2cfb65517f6d739ce3aff01c3dd33863"
        },
        "date": 1675249300696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94087.27272727272,
            "unit": "ns",
            "range": "± 3984.370136822806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831013.727678572,
            "unit": "ns",
            "range": "± 6518.4445530204575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504618.06640625,
            "unit": "ns",
            "range": "± 2310.0443862883285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1128814.4694010417,
            "unit": "ns",
            "range": "± 528.7823486817329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2501946.3541666665,
            "unit": "ns",
            "range": "± 2111.0634573182438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808750.2232142857,
            "unit": "ns",
            "range": "± 2030.5070995866085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744526.7508370535,
            "unit": "ns",
            "range": "± 2099.7689918169494"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3980311.3802083335,
            "unit": "ns",
            "range": "± 17444.914996152704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5579907.142857143,
            "unit": "ns",
            "range": "± 63350.410894007306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23268714.285714287,
            "unit": "ns",
            "range": "± 148215.4492473858"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7035486.666666667,
            "unit": "ns",
            "range": "± 127332.85327757924"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26755406.25,
            "unit": "ns",
            "range": "± 521784.49506636994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86881.81818181818,
            "unit": "ns",
            "range": "± 7270.797288326878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184280,
            "unit": "ns",
            "range": "± 9246.585411499313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176711.90476190476,
            "unit": "ns",
            "range": "± 6421.389652083045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3451421.4285714286,
            "unit": "ns",
            "range": "± 19403.614991162725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8393593.333333334,
            "unit": "ns",
            "range": "± 46649.9803501209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19121.428571428572,
            "unit": "ns",
            "range": "± 2882.912688065718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48479.48717948718,
            "unit": "ns",
            "range": "± 2488.9552898552506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45925,
            "unit": "ns",
            "range": "± 4315.449693902834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97195.91836734694,
            "unit": "ns",
            "range": "± 16963.878655685257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4992.631578947368,
            "unit": "ns",
            "range": "± 559.1106359634742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17163.2183908046,
            "unit": "ns",
            "range": "± 1156.9923863117801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9ba50938e53aaa87fcf3d3ec943201b191b21e0",
          "message": "Merge pull request #2765 from moreal/renew-copyright-years",
          "timestamp": "2023-02-02T12:10:22+09:00",
          "tree_id": "753222425a63a7b9126c103b5a701a5d57de1841",
          "url": "https://github.com/planetarium/libplanet/commit/e9ba50938e53aaa87fcf3d3ec943201b191b21e0"
        },
        "date": 1675308775720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103252.38095238095,
            "unit": "ns",
            "range": "± 4753.669453368566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4708037.838541667,
            "unit": "ns",
            "range": "± 28116.569708552186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1484388.046875,
            "unit": "ns",
            "range": "± 10053.308636165339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135327.8515625,
            "unit": "ns",
            "range": "± 7732.442615534487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606509.8697916665,
            "unit": "ns",
            "range": "± 10051.998720474716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 876098.6588541666,
            "unit": "ns",
            "range": "± 2450.3344992755024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755473.4114583334,
            "unit": "ns",
            "range": "± 2071.263841377284"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4630343.130387931,
            "unit": "ns",
            "range": "± 252605.5151850051"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5985621.428571428,
            "unit": "ns",
            "range": "± 104855.46960218388"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24723688.888888888,
            "unit": "ns",
            "range": "± 494157.725343174"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5772252.702702703,
            "unit": "ns",
            "range": "± 287707.7532739867"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26935261.53846154,
            "unit": "ns",
            "range": "± 713960.6611442528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92713.1313131313,
            "unit": "ns",
            "range": "± 13328.874950338628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190494.84536082475,
            "unit": "ns",
            "range": "± 15992.26617210918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165042.68292682926,
            "unit": "ns",
            "range": "± 8754.875614994535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3683558.8235294116,
            "unit": "ns",
            "range": "± 72250.60604264446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8578273.684210526,
            "unit": "ns",
            "range": "± 184212.32267294556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19780.21978021978,
            "unit": "ns",
            "range": "± 2066.2483329411725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51185.85858585859,
            "unit": "ns",
            "range": "± 6034.915587070235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38617.94871794872,
            "unit": "ns",
            "range": "± 1357.0230178538445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89067.53246753247,
            "unit": "ns",
            "range": "± 5781.673441014915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5271.578947368421,
            "unit": "ns",
            "range": "± 633.2394185884193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21235.714285714286,
            "unit": "ns",
            "range": "± 2767.009252999629"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adf33364339535ea69cd14f13959a77b93cc3dd2",
          "message": "Merge pull request #2768 from moreal/upgrade-docfx",
          "timestamp": "2023-02-03T12:39:42+09:00",
          "tree_id": "b74ca2e06d37677af4d179cc47cd5fd8c7be1dc7",
          "url": "https://github.com/planetarium/libplanet/commit/adf33364339535ea69cd14f13959a77b93cc3dd2"
        },
        "date": 1675396507857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106997.14285714286,
            "unit": "ns",
            "range": "± 3097.4833916172233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4766442.239583333,
            "unit": "ns",
            "range": "± 15587.329468327618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514030.2994791667,
            "unit": "ns",
            "range": "± 5138.695746755129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136035.6770833333,
            "unit": "ns",
            "range": "± 5723.360362366919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674832.8683035714,
            "unit": "ns",
            "range": "± 4261.881969369959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832948.2747395834,
            "unit": "ns",
            "range": "± 1565.2874627248038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752385.3864397322,
            "unit": "ns",
            "range": "± 1834.109532892653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4745018.4375,
            "unit": "ns",
            "range": "± 27383.874192993524"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5704960,
            "unit": "ns",
            "range": "± 86969.08153394022"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24444102.63157895,
            "unit": "ns",
            "range": "± 526128.925231176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6340522,
            "unit": "ns",
            "range": "± 148301.3585013075"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27936252.63157895,
            "unit": "ns",
            "range": "± 605382.12025172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90581.63265306123,
            "unit": "ns",
            "range": "± 7926.886870095594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188837.77777777778,
            "unit": "ns",
            "range": "± 10425.137918714541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167187.14285714287,
            "unit": "ns",
            "range": "± 8041.467193054837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3496338.4615384615,
            "unit": "ns",
            "range": "± 31325.855627089117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8813883.333333334,
            "unit": "ns",
            "range": "± 183973.13742532535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20145.454545454544,
            "unit": "ns",
            "range": "± 1894.3903329415298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54269.791666666664,
            "unit": "ns",
            "range": "± 7144.922669710313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39572,
            "unit": "ns",
            "range": "± 1607.893792817048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94401.06382978724,
            "unit": "ns",
            "range": "± 17535.024825482582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5411.340206185567,
            "unit": "ns",
            "range": "± 518.5870805732214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19770.454545454544,
            "unit": "ns",
            "range": "± 1781.2019118515732"
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
          "id": "7224c5241bcd7dd14b249d9e59ca4bf7cb8dd790",
          "message": "Merge pull request #2779 from greymistcube/merge/0.46.1-to-main\n\n🔀 Merge 0.46.1 to main",
          "timestamp": "2023-02-03T03:36:31-05:00",
          "tree_id": "c2c372a632e6731bdff78b0a41c86c92555cd851",
          "url": "https://github.com/planetarium/libplanet/commit/7224c5241bcd7dd14b249d9e59ca4bf7cb8dd790"
        },
        "date": 1675414268829,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102863.72549019608,
            "unit": "ns",
            "range": "± 3921.3783091073037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4860620.677083333,
            "unit": "ns",
            "range": "± 19738.760633338046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1550661.6666666667,
            "unit": "ns",
            "range": "± 6456.4081431269815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155206.7708333333,
            "unit": "ns",
            "range": "± 3874.0264834613267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644183.9583333335,
            "unit": "ns",
            "range": "± 5895.662947006484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817278.2291666666,
            "unit": "ns",
            "range": "± 1907.551848961493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756763.4700520834,
            "unit": "ns",
            "range": "± 1972.2931060734338"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4543515.703125,
            "unit": "ns",
            "range": "± 22873.72120683406"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5661700,
            "unit": "ns",
            "range": "± 54345.67928679204"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24885461.111111112,
            "unit": "ns",
            "range": "± 460009.0077620462"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5853753,
            "unit": "ns",
            "range": "± 471587.24043854757"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27274346.153846152,
            "unit": "ns",
            "range": "± 440703.2440985366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83230.23255813954,
            "unit": "ns",
            "range": "± 4784.412675675332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186451.08695652173,
            "unit": "ns",
            "range": "± 11476.947698577002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171531.6326530612,
            "unit": "ns",
            "range": "± 13767.520024181636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3629905.882352941,
            "unit": "ns",
            "range": "± 71647.62269772316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9137385.714285715,
            "unit": "ns",
            "range": "± 107865.62764093865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19737.5,
            "unit": "ns",
            "range": "± 2209.41764177565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48913.333333333336,
            "unit": "ns",
            "range": "± 4727.357624758206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39408.47457627119,
            "unit": "ns",
            "range": "± 1758.7503533409658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93847.95918367348,
            "unit": "ns",
            "range": "± 17879.36222940504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5104.166666666667,
            "unit": "ns",
            "range": "± 614.2032351226162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20581.443298969072,
            "unit": "ns",
            "range": "± 3210.8322485801623"
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
          "id": "a6759f47790a09d0af4410cfe3837ec937d85179",
          "message": "Merge pull request #2781 from greymistcube/refactor/address-hex-exception\n\nUpdated `DeriveAddress()` to be more stringent",
          "timestamp": "2023-02-03T04:33:13-05:00",
          "tree_id": "515a3472f38eeb6b9789eb6418e6200660c8d39a",
          "url": "https://github.com/planetarium/libplanet/commit/a6759f47790a09d0af4410cfe3837ec937d85179"
        },
        "date": 1675417884441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 129825.55555555556,
            "unit": "ns",
            "range": "± 12226.693592494417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5925823.579545454,
            "unit": "ns",
            "range": "± 140289.2797413995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820008.3072916667,
            "unit": "ns",
            "range": "± 13482.502250914053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402809.9609375,
            "unit": "ns",
            "range": "± 24431.272795102323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3028208.1473214286,
            "unit": "ns",
            "range": "± 24855.39777098923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1060709.7377232143,
            "unit": "ns",
            "range": "± 14368.798695678914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907993.49609375,
            "unit": "ns",
            "range": "± 10544.971591430838"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5529952.938988095,
            "unit": "ns",
            "range": "± 296788.0270965339"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6405973.195876288,
            "unit": "ns",
            "range": "± 441421.56709777436"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29581904.347826086,
            "unit": "ns",
            "range": "± 738078.5493294309"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6880633.695652174,
            "unit": "ns",
            "range": "± 414589.18665022"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35609286.59793814,
            "unit": "ns",
            "range": "± 2238961.7431332646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112211.23595505618,
            "unit": "ns",
            "range": "± 12254.826861673797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219566.66666666666,
            "unit": "ns",
            "range": "± 10131.091728330324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183738.63636363635,
            "unit": "ns",
            "range": "± 6848.262923836655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135841.379310345,
            "unit": "ns",
            "range": "± 119930.89533215539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10650284.615384616,
            "unit": "ns",
            "range": "± 264093.2709363231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26060.82474226804,
            "unit": "ns",
            "range": "± 5659.828411360905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62155.78947368421,
            "unit": "ns",
            "range": "± 7370.538185688785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49747.95918367347,
            "unit": "ns",
            "range": "± 5831.945964279472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124582.60869565218,
            "unit": "ns",
            "range": "± 19257.07010850507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8585.106382978724,
            "unit": "ns",
            "range": "± 1408.4962962386371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30691.397849462366,
            "unit": "ns",
            "range": "± 3689.339987926982"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33947f44a808a7d03c3a526ec5022d753886a251",
          "message": "Merge pull request #2780 from dahlia/secp256k1",
          "timestamp": "2023-02-03T18:39:03+09:00",
          "tree_id": "625c4a4d87f1aaea852b62710a37ae3481e5784e",
          "url": "https://github.com/planetarium/libplanet/commit/33947f44a808a7d03c3a526ec5022d753886a251"
        },
        "date": 1675417955375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96038.23529411765,
            "unit": "ns",
            "range": "± 1920.2481457292104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4855868.526785715,
            "unit": "ns",
            "range": "± 10299.829407507028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513123.842075893,
            "unit": "ns",
            "range": "± 4527.992399587708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159138.984375,
            "unit": "ns",
            "range": "± 2586.3660643655444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548540.206473214,
            "unit": "ns",
            "range": "± 6658.254154467669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815600.2083333334,
            "unit": "ns",
            "range": "± 4449.5245301213545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733030.5873325893,
            "unit": "ns",
            "range": "± 3298.514278494736"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3822421.803977273,
            "unit": "ns",
            "range": "± 120903.70103842167"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4928180.4878048785,
            "unit": "ns",
            "range": "± 88905.4728897839"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22679086.666666668,
            "unit": "ns",
            "range": "± 194603.96731628594"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5548314.285714285,
            "unit": "ns",
            "range": "± 63242.40127225815"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26111066.666666668,
            "unit": "ns",
            "range": "± 275626.37927524454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84145.91836734694,
            "unit": "ns",
            "range": "± 10383.424224813443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174794.3661971831,
            "unit": "ns",
            "range": "± 6974.74807172158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163175,
            "unit": "ns",
            "range": "± 4565.720803072928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3332121.4285714286,
            "unit": "ns",
            "range": "± 17187.07826655419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8166660,
            "unit": "ns",
            "range": "± 97021.44681902627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16727.272727272728,
            "unit": "ns",
            "range": "± 2952.4399519310828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46279.166666666664,
            "unit": "ns",
            "range": "± 4045.007752687038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37603.092783505155,
            "unit": "ns",
            "range": "± 2730.4400442147685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91842.85714285714,
            "unit": "ns",
            "range": "± 12726.302011448493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3952.6315789473683,
            "unit": "ns",
            "range": "± 392.9815396192586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15118.181818181818,
            "unit": "ns",
            "range": "± 1168.5087711144356"
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
          "id": "a0dc47eb525c41cb1037ac955230672edffc310e",
          "message": "Merge pull request #2778 from greymistcube/refactor/introduce-ibencodable\n\n♻️ Introduce `IBencodable`",
          "timestamp": "2023-02-06T00:40:28-05:00",
          "tree_id": "67584a25f801cb9f64bb5fbb95582aae68e9725a",
          "url": "https://github.com/planetarium/libplanet/commit/a0dc47eb525c41cb1037ac955230672edffc310e"
        },
        "date": 1675663031799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107094.9494949495,
            "unit": "ns",
            "range": "± 7721.5887883123205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4781188.203125,
            "unit": "ns",
            "range": "± 20895.86243689703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503762.876674107,
            "unit": "ns",
            "range": "± 4274.498830575735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152321.6731770833,
            "unit": "ns",
            "range": "± 3305.0736746495413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635461.7745535714,
            "unit": "ns",
            "range": "± 8186.171837315008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834214.9483816965,
            "unit": "ns",
            "range": "± 907.6543697498273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758034.7581129808,
            "unit": "ns",
            "range": "± 1711.12879385938"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4724499.322916667,
            "unit": "ns",
            "range": "± 25100.317446142002"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5543897.05882353,
            "unit": "ns",
            "range": "± 175498.31301147945"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24976688.23529412,
            "unit": "ns",
            "range": "± 803942.9765564019"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6243330.769230769,
            "unit": "ns",
            "range": "± 99209.22659221591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28651000,
            "unit": "ns",
            "range": "± 467970.19441107876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94488.65979381443,
            "unit": "ns",
            "range": "± 12042.441234794163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196351.31578947368,
            "unit": "ns",
            "range": "± 9914.655730060123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172293.47826086957,
            "unit": "ns",
            "range": "± 9640.594167405923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3583840,
            "unit": "ns",
            "range": "± 66443.42168878937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9008900,
            "unit": "ns",
            "range": "± 207256.3807664822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21065.217391304348,
            "unit": "ns",
            "range": "± 2514.2859857533626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56902.020202020205,
            "unit": "ns",
            "range": "± 9409.27657543645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39663.75,
            "unit": "ns",
            "range": "± 2081.275397077718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100369.79166666667,
            "unit": "ns",
            "range": "± 19664.572043152908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5219.791666666667,
            "unit": "ns",
            "range": "± 833.2081046257501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20398.863636363636,
            "unit": "ns",
            "range": "± 2131.9406904574066"
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
          "id": "499dfc25de2a571c64cc8b4f73a1c319a9c337eb",
          "message": "Merge pull request #2784 from greymistcube/fix/stage-policy-tx-lifetime\n\nFix `VolatileStagePolicy<T>`'s `Expired()`",
          "timestamp": "2023-02-06T03:53:36-05:00",
          "tree_id": "1e3c47f25243a823a52dd1aa65efed780dda95f5",
          "url": "https://github.com/planetarium/libplanet/commit/499dfc25de2a571c64cc8b4f73a1c319a9c337eb"
        },
        "date": 1675674564160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105303.1914893617,
            "unit": "ns",
            "range": "± 6650.498439201326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4830884.166666667,
            "unit": "ns",
            "range": "± 18755.423133289067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528292.4479166667,
            "unit": "ns",
            "range": "± 2689.0550874802293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171884.8697916667,
            "unit": "ns",
            "range": "± 4150.294338343887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647616.7410714286,
            "unit": "ns",
            "range": "± 9540.632686538504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823403.6808894231,
            "unit": "ns",
            "range": "± 570.4872126891888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758379.0264423077,
            "unit": "ns",
            "range": "± 888.8183715834583"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4823157.508680556,
            "unit": "ns",
            "range": "± 99966.5803328939"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5635973.333333333,
            "unit": "ns",
            "range": "± 60061.2243187455"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25937828.57142857,
            "unit": "ns",
            "range": "± 616364.8660840892"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5996564.285714285,
            "unit": "ns",
            "range": "± 347889.51358124294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28575896.666666668,
            "unit": "ns",
            "range": "± 422065.82740926405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107607.07070707071,
            "unit": "ns",
            "range": "± 13390.449326606591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201306.7415730337,
            "unit": "ns",
            "range": "± 11107.898477218085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186571,
            "unit": "ns",
            "range": "± 12076.618154955719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3572500,
            "unit": "ns",
            "range": "± 40336.530766610485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9484914.285714285,
            "unit": "ns",
            "range": "± 54123.04865401058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27470.93023255814,
            "unit": "ns",
            "range": "± 2383.41654324305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57484.09090909091,
            "unit": "ns",
            "range": "± 4908.680707735136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41795.833333333336,
            "unit": "ns",
            "range": "± 3261.2853993694503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108743.02325581395,
            "unit": "ns",
            "range": "± 11292.223151070406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7778.787878787879,
            "unit": "ns",
            "range": "± 1096.4016029510437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28676.76767676768,
            "unit": "ns",
            "range": "± 5045.443049715668"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc0bf18df59f7db4696ac3d0651606c9249d8970",
          "message": "Merge pull request #2785 from dahlia/0.47-maintenance",
          "timestamp": "2023-02-06T18:25:12+09:00",
          "tree_id": "53db093dbd48af0fef71deff416cfa11e689ac2c",
          "url": "https://github.com/planetarium/libplanet/commit/fc0bf18df59f7db4696ac3d0651606c9249d8970"
        },
        "date": 1675676269107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 97306.60377358491,
            "unit": "ns",
            "range": "± 4070.5560683240933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890695.372596154,
            "unit": "ns",
            "range": "± 44042.29768111902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546000.732421875,
            "unit": "ns",
            "range": "± 2235.4703767736237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135175.244140625,
            "unit": "ns",
            "range": "± 1517.1570721180362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2551191.2760416665,
            "unit": "ns",
            "range": "± 18005.860511204384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799498.3135516827,
            "unit": "ns",
            "range": "± 610.6621034918555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739203.3040364584,
            "unit": "ns",
            "range": "± 13788.671693478458"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3985420.6194196427,
            "unit": "ns",
            "range": "± 9893.746795858213"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5144246.875,
            "unit": "ns",
            "range": "± 339198.84804705245"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23076961.53846154,
            "unit": "ns",
            "range": "± 196261.66011416807"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6591455,
            "unit": "ns",
            "range": "± 141191.26808769203"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27720540,
            "unit": "ns",
            "range": "± 380739.6894767567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87151.11111111111,
            "unit": "ns",
            "range": "± 7456.062226141886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191829.47368421053,
            "unit": "ns",
            "range": "± 16119.374319229919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 194121.42857142858,
            "unit": "ns",
            "range": "± 3409.5293091407957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3471814.285714286,
            "unit": "ns",
            "range": "± 24230.649921213335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8646269.23076923,
            "unit": "ns",
            "range": "± 35947.58648865003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18189.655172413793,
            "unit": "ns",
            "range": "± 2241.4714064109357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53945.91836734694,
            "unit": "ns",
            "range": "± 7003.860030973891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47554.28571428572,
            "unit": "ns",
            "range": "± 2271.096633167392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103251.72413793103,
            "unit": "ns",
            "range": "± 12568.998980224149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5698.936170212766,
            "unit": "ns",
            "range": "± 658.0346562189378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21991.91919191919,
            "unit": "ns",
            "range": "± 4008.0448887379143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ee05f822563c1ea82107fb0f9094c9c77b31765",
          "message": "Merge pull request #2787 from dahlia/0.47-maintenance",
          "timestamp": "2023-02-06T18:49:39+09:00",
          "tree_id": "5d2a23ed4ec68dfe81453559fc48831b80b6e4e1",
          "url": "https://github.com/planetarium/libplanet/commit/1ee05f822563c1ea82107fb0f9094c9c77b31765"
        },
        "date": 1675677686831,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96517.0731707317,
            "unit": "ns",
            "range": "± 3182.679880150091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4933662.620192308,
            "unit": "ns",
            "range": "± 6534.289562646931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1503245.166015625,
            "unit": "ns",
            "range": "± 1819.0124858580389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134483.286830357,
            "unit": "ns",
            "range": "± 2011.0582424013676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540533.6067708335,
            "unit": "ns",
            "range": "± 2569.8831449882355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814609.4866071428,
            "unit": "ns",
            "range": "± 1006.6310198429401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740481.7643229166,
            "unit": "ns",
            "range": "± 692.1894431104863"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3903824.921875,
            "unit": "ns",
            "range": "± 19892.400621841134"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5541307.142857143,
            "unit": "ns",
            "range": "± 38924.314415892455"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22666586.666666668,
            "unit": "ns",
            "range": "± 386027.8096323163"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6240386.666666667,
            "unit": "ns",
            "range": "± 111645.84226579194"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25608953.846153848,
            "unit": "ns",
            "range": "± 183956.66888058456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81090.72164948453,
            "unit": "ns",
            "range": "± 7024.986394919015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177822.38805970148,
            "unit": "ns",
            "range": "± 7997.875113552129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163066.66666666666,
            "unit": "ns",
            "range": "± 7219.551295195208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3328993.3333333335,
            "unit": "ns",
            "range": "± 37193.99849182021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8348138.461538462,
            "unit": "ns",
            "range": "± 55709.178454744455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16182.8125,
            "unit": "ns",
            "range": "± 692.259857508335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47790.40404040404,
            "unit": "ns",
            "range": "± 6979.443858200983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41644,
            "unit": "ns",
            "range": "± 4104.636944291717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88388.42105263157,
            "unit": "ns",
            "range": "± 12041.929080967115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4915.4639175257735,
            "unit": "ns",
            "range": "± 681.5026605147335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16712.19512195122,
            "unit": "ns",
            "range": "± 826.9220399909684"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/planetarium/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675679082555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102128.20512820513,
            "unit": "ns",
            "range": "± 5244.512219921737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4767505.052083333,
            "unit": "ns",
            "range": "± 9754.089686555802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549092.7584134615,
            "unit": "ns",
            "range": "± 2697.674772549713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156889.048549107,
            "unit": "ns",
            "range": "± 5293.722634419404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622388.4014423075,
            "unit": "ns",
            "range": "± 9427.429609720753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821753.2902644231,
            "unit": "ns",
            "range": "± 2450.3344143411437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748583.0003004808,
            "unit": "ns",
            "range": "± 1445.398522622559"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4516912.057291667,
            "unit": "ns",
            "range": "± 51908.98970202559"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5959433.333333333,
            "unit": "ns",
            "range": "± 107744.80210642358"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25094889.285714287,
            "unit": "ns",
            "range": "± 609872.6918393073"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6117807.070707071,
            "unit": "ns",
            "range": "± 496431.05040542904"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28455595.652173914,
            "unit": "ns",
            "range": "± 711329.6445123424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 103447.47474747474,
            "unit": "ns",
            "range": "± 13666.339875725529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201114.58333333334,
            "unit": "ns",
            "range": "± 15131.86932597046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174505.223880597,
            "unit": "ns",
            "range": "± 7879.59165958778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3604166.6666666665,
            "unit": "ns",
            "range": "± 62875.58766174296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9037425,
            "unit": "ns",
            "range": "± 201341.001328069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23532.222222222223,
            "unit": "ns",
            "range": "± 3087.336504438001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57181.868131868134,
            "unit": "ns",
            "range": "± 6879.775175927369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40917.58241758242,
            "unit": "ns",
            "range": "± 2312.314540627753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107842.26804123711,
            "unit": "ns",
            "range": "± 19659.703048852803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5901.0204081632655,
            "unit": "ns",
            "range": "± 883.700618470061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21251.11111111111,
            "unit": "ns",
            "range": "± 2307.7906378103376"
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
          "id": "aa1d444f32ba468fb15186d7113078a52f164b84",
          "message": "Merge pull request #2789 from greymistcube/optimization/to-hex\n\nOptimized `ByteUtil.Hex()`",
          "timestamp": "2023-02-06T23:04:55-05:00",
          "tree_id": "5fe2aa515e26af275b2fb61b507c9812bb1791fb",
          "url": "https://github.com/planetarium/libplanet/commit/aa1d444f32ba468fb15186d7113078a52f164b84"
        },
        "date": 1675743648322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101084.375,
            "unit": "ns",
            "range": "± 4690.9645926529665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4744777.678571428,
            "unit": "ns",
            "range": "± 10626.139779365023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505149.834735577,
            "unit": "ns",
            "range": "± 2744.08562630948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164554.8177083333,
            "unit": "ns",
            "range": "± 3741.978468623569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605102.0572916665,
            "unit": "ns",
            "range": "± 8905.083672391072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816234.8493303572,
            "unit": "ns",
            "range": "± 2048.9640067122155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751546.3802083334,
            "unit": "ns",
            "range": "± 964.8042598811371"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4582522.630208333,
            "unit": "ns",
            "range": "± 24281.818664800605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5588335.714285715,
            "unit": "ns",
            "range": "± 74690.81507884926"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25004663.157894738,
            "unit": "ns",
            "range": "± 530371.1668995238"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5849108.333333333,
            "unit": "ns",
            "range": "± 171909.62472016676"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28319560,
            "unit": "ns",
            "range": "± 373398.56300894206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90572.22222222222,
            "unit": "ns",
            "range": "± 7130.958423658777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184317.20430107528,
            "unit": "ns",
            "range": "± 14416.820065283604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163355.55555555556,
            "unit": "ns",
            "range": "± 9039.788591431647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3495671.4285714286,
            "unit": "ns",
            "range": "± 59353.54864086676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8672669.23076923,
            "unit": "ns",
            "range": "± 103036.2346023264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17566.666666666668,
            "unit": "ns",
            "range": "± 1621.346367974413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45740,
            "unit": "ns",
            "range": "± 3249.7325897313312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37088.709677419356,
            "unit": "ns",
            "range": "± 1137.1535866231493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86938.82352941176,
            "unit": "ns",
            "range": "± 10800.80568112141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5331.958762886598,
            "unit": "ns",
            "range": "± 596.9621693333005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17840.625,
            "unit": "ns",
            "range": "± 1993.81032329135"
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
          "id": "ff823f8435133689fcbd3f26508e40a2eab969ae",
          "message": "Merge pull request #2794 from greymistcube/refactor/block-candidate-table\n\n♻️ Refactor `BlockCandidateTable`",
          "timestamp": "2023-02-09T21:28:56-05:00",
          "tree_id": "14149c45e4f6ef1a8c5f8a1337e278ea2c7177f0",
          "url": "https://github.com/planetarium/libplanet/commit/ff823f8435133689fcbd3f26508e40a2eab969ae"
        },
        "date": 1675996959098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98126.92307692308,
            "unit": "ns",
            "range": "± 2605.4646713870743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4819965.416666667,
            "unit": "ns",
            "range": "± 21189.091805942033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1495564.0625,
            "unit": "ns",
            "range": "± 6854.089931093871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1134396.6796875,
            "unit": "ns",
            "range": "± 4375.8733089882335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609463.7239583335,
            "unit": "ns",
            "range": "± 5304.443647307328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820985.3515625,
            "unit": "ns",
            "range": "± 2087.0956835363086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764139.7600446428,
            "unit": "ns",
            "range": "± 1502.5849306488137"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4621031.953125,
            "unit": "ns",
            "range": "± 42973.45572730965"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5490053.333333333,
            "unit": "ns",
            "range": "± 96122.8519482577"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24491114.285714287,
            "unit": "ns",
            "range": "± 401964.11934619024"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6214454.545454546,
            "unit": "ns",
            "range": "± 133122.16543737534"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28116433.333333332,
            "unit": "ns",
            "range": "± 504178.58183480223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94365.65656565657,
            "unit": "ns",
            "range": "± 10079.734787733922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180632.183908046,
            "unit": "ns",
            "range": "± 9892.039250019385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167224.24242424243,
            "unit": "ns",
            "range": "± 9881.92630677175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3477850,
            "unit": "ns",
            "range": "± 63487.66809389048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8841086.666666666,
            "unit": "ns",
            "range": "± 157942.44822840043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20437.37373737374,
            "unit": "ns",
            "range": "± 3426.087965398754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49285.16483516483,
            "unit": "ns",
            "range": "± 5346.387640815134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37318.03278688525,
            "unit": "ns",
            "range": "± 1539.6437030171746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95888.17204301075,
            "unit": "ns",
            "range": "± 16745.99140522867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5397.916666666667,
            "unit": "ns",
            "range": "± 829.0742036076862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20200.515463917527,
            "unit": "ns",
            "range": "± 2547.389338099409"
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
          "id": "9c7b9d6526da36c7e6b3ea0ef992d1c303fc4c43",
          "message": "Merge pull request #2790 from greymistcube/optimization/parse-hex\n\nOptimized `ParseHex()`",
          "timestamp": "2023-02-10T02:25:36-05:00",
          "tree_id": "850470ee0ab2bbd673ccce65a3e9271a19e85c60",
          "url": "https://github.com/planetarium/libplanet/commit/9c7b9d6526da36c7e6b3ea0ef992d1c303fc4c43"
        },
        "date": 1676014679593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93142.85714285714,
            "unit": "ns",
            "range": "± 1392.1285781212805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4771882.932692308,
            "unit": "ns",
            "range": "± 7047.252903286863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1477154.98046875,
            "unit": "ns",
            "range": "± 1331.0831375220516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139901.85546875,
            "unit": "ns",
            "range": "± 1074.095870922152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526429.6875,
            "unit": "ns",
            "range": "± 4422.611774990402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819861.1676897322,
            "unit": "ns",
            "range": "± 498.5572446393242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722307.5045072115,
            "unit": "ns",
            "range": "± 524.0933246470237"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3905339.3229166665,
            "unit": "ns",
            "range": "± 24000.349146104698"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5517461.538461538,
            "unit": "ns",
            "range": "± 50651.38264749112"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23011392.307692308,
            "unit": "ns",
            "range": "± 350319.6479919885"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5542705.555555556,
            "unit": "ns",
            "range": "± 140953.21603677978"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25824846.666666668,
            "unit": "ns",
            "range": "± 323967.149716199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81613.68421052632,
            "unit": "ns",
            "range": "± 7625.609295869982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175528.30188679244,
            "unit": "ns",
            "range": "± 6946.149385935141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145842.3076923077,
            "unit": "ns",
            "range": "± 3461.118094133522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3390814.285714286,
            "unit": "ns",
            "range": "± 12513.18425580716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8552026.666666666,
            "unit": "ns",
            "range": "± 44003.33537141843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15289.583333333334,
            "unit": "ns",
            "range": "± 1432.882936171664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43884.782608695656,
            "unit": "ns",
            "range": "± 4320.102124927616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39067.34693877551,
            "unit": "ns",
            "range": "± 3216.4453553190397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87810.52631578948,
            "unit": "ns",
            "range": "± 15035.450829121766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5270.408163265306,
            "unit": "ns",
            "range": "± 644.5983619123589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15079.787234042553,
            "unit": "ns",
            "range": "± 1970.5809299685484"
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
          "id": "ea9b0cab632b0a73dd119be7107c790233005439",
          "message": "Merge pull request #2795 from greymistcube/refactor/ibencodable-txid\n\n♻️ `IBencodable` `TxId`",
          "timestamp": "2023-02-12T20:32:42-05:00",
          "tree_id": "a0bd10f142ab6cdc3ad65891de4cf9594670a77d",
          "url": "https://github.com/planetarium/libplanet/commit/ea9b0cab632b0a73dd119be7107c790233005439"
        },
        "date": 1676253121021,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 117581.44329896907,
            "unit": "ns",
            "range": "± 7971.254735727347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5556703.185096154,
            "unit": "ns",
            "range": "± 56904.41608015654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1760794.921875,
            "unit": "ns",
            "range": "± 21459.21458432144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342293.4495192308,
            "unit": "ns",
            "range": "± 7518.554888594576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3078463.6513157897,
            "unit": "ns",
            "range": "± 66839.78232562731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023163.232421875,
            "unit": "ns",
            "range": "± 38000.20592432069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926413.5714285715,
            "unit": "ns",
            "range": "± 30315.15298177962"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5517258.472938145,
            "unit": "ns",
            "range": "± 325974.26150629274"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6206410.2272727275,
            "unit": "ns",
            "range": "± 341099.01654739917"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30522908.333333332,
            "unit": "ns",
            "range": "± 1203645.289665246"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6793088.636363637,
            "unit": "ns",
            "range": "± 369540.53000673605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35066657.57575758,
            "unit": "ns",
            "range": "± 2294011.2924339473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108931.25,
            "unit": "ns",
            "range": "± 11813.456310496094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212364.04494382022,
            "unit": "ns",
            "range": "± 12962.982674374713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190903.15789473685,
            "unit": "ns",
            "range": "± 13204.59665799512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4229976,
            "unit": "ns",
            "range": "± 99686.64771840477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11643125,
            "unit": "ns",
            "range": "± 292520.866962847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23574.1935483871,
            "unit": "ns",
            "range": "± 2125.870830558337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61009.89010989011,
            "unit": "ns",
            "range": "± 5752.044176639483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45446.8085106383,
            "unit": "ns",
            "range": "± 3829.524581730391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109892.78350515464,
            "unit": "ns",
            "range": "± 21341.41731968752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6822.105263157895,
            "unit": "ns",
            "range": "± 920.9360348532105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20847.191011235955,
            "unit": "ns",
            "range": "± 1461.4819601754527"
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
          "id": "61697453dd975aabd31373999dcee5b0f155d95a",
          "message": "Merge pull request #2798 from greymistcube/revert/serializabe-address-and-boundpeer\n\n♻️ Revert to add `Serializabe` attribute back into `Address` and `BoundPeer`",
          "timestamp": "2023-02-12T21:32:01-05:00",
          "tree_id": "6684aa85a6f8815b1cc27dae4ff51df70f2ef0be",
          "url": "https://github.com/planetarium/libplanet/commit/61697453dd975aabd31373999dcee5b0f155d95a"
        },
        "date": 1676256507307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111025.53191489361,
            "unit": "ns",
            "range": "± 9634.056260817917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5342833.489583333,
            "unit": "ns",
            "range": "± 99931.28563757808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1770576.8102134147,
            "unit": "ns",
            "range": "± 63739.69334706973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1291336.9370404412,
            "unit": "ns",
            "range": "± 26463.49241514719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2937830.063657407,
            "unit": "ns",
            "range": "± 79502.47746568135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 918617.40234375,
            "unit": "ns",
            "range": "± 10179.706150683178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860796.5759277344,
            "unit": "ns",
            "range": "± 16430.90808249907"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5309679.7265625,
            "unit": "ns",
            "range": "± 389033.14992804226"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6196266.666666667,
            "unit": "ns",
            "range": "± 402864.0725883311"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29224385.29411765,
            "unit": "ns",
            "range": "± 934268.671412696"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7210907.291666667,
            "unit": "ns",
            "range": "± 559139.4252721233"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30936579.411764707,
            "unit": "ns",
            "range": "± 1468555.7465632102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91801.0752688172,
            "unit": "ns",
            "range": "± 12985.656758128378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208868.18181818182,
            "unit": "ns",
            "range": "± 14812.432999641249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168200,
            "unit": "ns",
            "range": "± 18958.761541178203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3650981.081081081,
            "unit": "ns",
            "range": "± 181166.86977939584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10348418.75,
            "unit": "ns",
            "range": "± 299077.62228763587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25035.714285714286,
            "unit": "ns",
            "range": "± 5413.9615238236875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54284.04255319149,
            "unit": "ns",
            "range": "± 6720.251902464547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50771.134020618556,
            "unit": "ns",
            "range": "± 7185.430263776928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96627.8350515464,
            "unit": "ns",
            "range": "± 25000.619751768325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9165,
            "unit": "ns",
            "range": "± 5560.309834401807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23767,
            "unit": "ns",
            "range": "± 5777.805934274827"
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
          "id": "2a8bd98475f542e82e61e14d84d12d590a3aa229",
          "message": "Merge pull request #2801 from greymistcube/chore/identity-hex-format\n\n🧹 Aligned identity with request id format",
          "timestamp": "2023-02-12T22:26:49-05:00",
          "tree_id": "293397eeca5dbd110d4e2a7e1abe239639b5afb8",
          "url": "https://github.com/planetarium/libplanet/commit/2a8bd98475f542e82e61e14d84d12d590a3aa229"
        },
        "date": 1676259773081,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116891.25,
            "unit": "ns",
            "range": "± 6100.2011535624015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5698498.076923077,
            "unit": "ns",
            "range": "± 16333.388498274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1799589.8958333333,
            "unit": "ns",
            "range": "± 10075.456996714416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402304.3118990385,
            "unit": "ns",
            "range": "± 5401.53234219354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3080734.5833333335,
            "unit": "ns",
            "range": "± 10716.922496744251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 981820.1432291666,
            "unit": "ns",
            "range": "± 6135.762586396642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898022.0638020834,
            "unit": "ns",
            "range": "± 3170.23277093112"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5312938.783482143,
            "unit": "ns",
            "range": "± 45055.24200095151"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6066507.575757576,
            "unit": "ns",
            "range": "± 535824.0605796869"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29684249.019607842,
            "unit": "ns",
            "range": "± 1139792.4753870852"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6749486.666666667,
            "unit": "ns",
            "range": "± 125034.49162226437"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33300297.272727273,
            "unit": "ns",
            "range": "± 1405315.9286101426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100829.03225806452,
            "unit": "ns",
            "range": "± 8650.968538955138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210137.5,
            "unit": "ns",
            "range": "± 9751.458987297869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187365.8536585366,
            "unit": "ns",
            "range": "± 9570.93361433067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4163300,
            "unit": "ns",
            "range": "± 107838.43390038153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10245908.695652174,
            "unit": "ns",
            "range": "± 249337.74814139423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20100,
            "unit": "ns",
            "range": "± 1939.0719429665317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55262.63736263736,
            "unit": "ns",
            "range": "± 4923.586054259601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42975.64102564102,
            "unit": "ns",
            "range": "± 2210.611121794499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99603.5294117647,
            "unit": "ns",
            "range": "± 9139.272231352315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5768.75,
            "unit": "ns",
            "range": "± 707.1532998393518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20659.574468085106,
            "unit": "ns",
            "range": "± 2177.9475960073087"
          }
        ]
      }
    ]
  }
}