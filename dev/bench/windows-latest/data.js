window.BENCHMARK_DATA = {
  "lastUpdate": 1678415140809,
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
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a08b094e9cf5f46494f8733a1c7cc84395e8d714",
          "message": "Merge pull request #2805 from moreal/planetarium-tx-custom-actions\n\nfeat(@planetarium/tx): Support building unsigned transactions with custom actions",
          "timestamp": "2023-02-13T18:02:48+09:00",
          "tree_id": "944e0a78540836fb62bf006772212734b8fba00e",
          "url": "https://github.com/planetarium/libplanet/commit/a08b094e9cf5f46494f8733a1c7cc84395e8d714"
        },
        "date": 1676279823590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99314.63414634146,
            "unit": "ns",
            "range": "± 5237.592556740604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4739225.911458333,
            "unit": "ns",
            "range": "± 17680.48583964542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508400.6640625,
            "unit": "ns",
            "range": "± 7092.07053037296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1165912.7083333333,
            "unit": "ns",
            "range": "± 3084.1822411428398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642647.7864583335,
            "unit": "ns",
            "range": "± 4968.60163501142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818807.9231770834,
            "unit": "ns",
            "range": "± 1131.5812104706074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758183.6197916666,
            "unit": "ns",
            "range": "± 1388.0195599647855"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4674323.463541667,
            "unit": "ns",
            "range": "± 26161.54558349195"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5564192.857142857,
            "unit": "ns",
            "range": "± 78583.35568814042"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24346478.94736842,
            "unit": "ns",
            "range": "± 521550.23575975175"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6132573.333333333,
            "unit": "ns",
            "range": "± 77692.22673625783"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27288935.714285713,
            "unit": "ns",
            "range": "± 640370.8591790496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88052.22222222222,
            "unit": "ns",
            "range": "± 7714.676335485396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181937.34939759035,
            "unit": "ns",
            "range": "± 9711.982928363434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166866.66666666666,
            "unit": "ns",
            "range": "± 9788.776243784368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3553673.3333333335,
            "unit": "ns",
            "range": "± 39392.320982406614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8819285,
            "unit": "ns",
            "range": "± 199782.6405055465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17701.075268817203,
            "unit": "ns",
            "range": "± 1360.9055987175784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49728.125,
            "unit": "ns",
            "range": "± 6652.023089572865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37986.25,
            "unit": "ns",
            "range": "± 1998.2108294640338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87400,
            "unit": "ns",
            "range": "± 10857.833952475738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5092.708333333333,
            "unit": "ns",
            "range": "± 618.8690519881986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16984.375,
            "unit": "ns",
            "range": "± 2068.9345401870373"
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
          "id": "d8b507e5576f6f83e76cf143026fa3972021a5f4",
          "message": "Merge pull request #2806 from greymistcube/chore/logging\n\n🧹 Added contextual information to `BlockCandidate` logging",
          "timestamp": "2023-02-13T21:21:34-05:00",
          "tree_id": "9cf512c844b474e395973d7027f39994542df095",
          "url": "https://github.com/planetarium/libplanet/commit/d8b507e5576f6f83e76cf143026fa3972021a5f4"
        },
        "date": 1676342299602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102421.21212121213,
            "unit": "ns",
            "range": "± 6517.609940161844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4788921.995192308,
            "unit": "ns",
            "range": "± 33293.84351278011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1525782.2265625,
            "unit": "ns",
            "range": "± 1943.0925360717051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168479.868861607,
            "unit": "ns",
            "range": "± 4681.948387335258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2668772.8645833335,
            "unit": "ns",
            "range": "± 10992.94476731394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816521.1067708334,
            "unit": "ns",
            "range": "± 1286.1426495190594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759975.4255022322,
            "unit": "ns",
            "range": "± 2300.662125806812"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4710707.198660715,
            "unit": "ns",
            "range": "± 24493.20445184036"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5985614.285714285,
            "unit": "ns",
            "range": "± 75813.46396703766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25550288.23529412,
            "unit": "ns",
            "range": "± 514717.55954400974"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5833730.769230769,
            "unit": "ns",
            "range": "± 61608.175656257736"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27989664.285714287,
            "unit": "ns",
            "range": "± 552315.6156453611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91532.98969072165,
            "unit": "ns",
            "range": "± 8587.232791202838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192769.66292134832,
            "unit": "ns",
            "range": "± 11923.367093217934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176192,
            "unit": "ns",
            "range": "± 10967.184108636422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3621550,
            "unit": "ns",
            "range": "± 46706.345310971315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8969375,
            "unit": "ns",
            "range": "± 205647.6646443723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21535.05154639175,
            "unit": "ns",
            "range": "± 3070.6622940985585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53215.95744680851,
            "unit": "ns",
            "range": "± 7253.5983386443995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40588.17204301075,
            "unit": "ns",
            "range": "± 2714.688286308137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104368.68686868687,
            "unit": "ns",
            "range": "± 20747.218384811753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6352.040816326531,
            "unit": "ns",
            "range": "± 842.8265639344513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19135.869565217392,
            "unit": "ns",
            "range": "± 1908.7180855360896"
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
          "id": "d8bd683a186a051504ad01fbd43837de19efffe6",
          "message": "Merge pull request #2807 from greymistcube/chore/logging\n\n🧹  Fixed logging mistake",
          "timestamp": "2023-02-13T21:37:22-05:00",
          "tree_id": "03f1ed13f9a5ab021b4bb62f8c423a854ba70960",
          "url": "https://github.com/planetarium/libplanet/commit/d8bd683a186a051504ad01fbd43837de19efffe6"
        },
        "date": 1676343321214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100973.86363636363,
            "unit": "ns",
            "range": "± 5436.519642222557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4746513.984375,
            "unit": "ns",
            "range": "± 38465.62875695973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504085.560825893,
            "unit": "ns",
            "range": "± 5149.764208400231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163322.1223958333,
            "unit": "ns",
            "range": "± 4886.8022932022295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2631139.4010416665,
            "unit": "ns",
            "range": "± 8588.375654203115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823618.5221354166,
            "unit": "ns",
            "range": "± 1941.0550857994333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751479.3033854166,
            "unit": "ns",
            "range": "± 1720.5457013183677"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4564861.38671875,
            "unit": "ns",
            "range": "± 100091.92871597272"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5699907.142857143,
            "unit": "ns",
            "range": "± 73195.41246958997"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25010669.230769232,
            "unit": "ns",
            "range": "± 672439.8862466329"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5909085.714285715,
            "unit": "ns",
            "range": "± 137451.07233381007"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28278084.615384616,
            "unit": "ns",
            "range": "± 771292.7515242485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87059.1836734694,
            "unit": "ns",
            "range": "± 9832.555191545189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181980.45977011495,
            "unit": "ns",
            "range": "± 14556.56839736219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156920.83333333334,
            "unit": "ns",
            "range": "± 6182.644147327442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3394170.588235294,
            "unit": "ns",
            "range": "± 55453.28850377003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8441657.894736841,
            "unit": "ns",
            "range": "± 185696.74297326055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17476.08695652174,
            "unit": "ns",
            "range": "± 1259.6327360457524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47410.63829787234,
            "unit": "ns",
            "range": "± 6521.980504089368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36948.64864864865,
            "unit": "ns",
            "range": "± 1268.3369736306984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91070.10309278351,
            "unit": "ns",
            "range": "± 19370.505741915844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5823.19587628866,
            "unit": "ns",
            "range": "± 786.277551705599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17484.042553191488,
            "unit": "ns",
            "range": "± 1506.423749911952"
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
          "id": "e109a5f860146deba6c0ffda0dfc740662deb449",
          "message": "Merge pull request #2803 from greymistcube/feature/reply-zero-blocks\n\nReply with zero blocks when no corresponding blocks are found",
          "timestamp": "2023-02-14T02:18:21-05:00",
          "tree_id": "3e143c5ae13207dcae595ee410868d4004e7f2a0",
          "url": "https://github.com/planetarium/libplanet/commit/e109a5f860146deba6c0ffda0dfc740662deb449"
        },
        "date": 1676360125226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98288,
            "unit": "ns",
            "range": "± 20495.282926132593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5247712.395833333,
            "unit": "ns",
            "range": "± 96756.77028907431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1549250.625,
            "unit": "ns",
            "range": "± 4680.938313476036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087193.984375,
            "unit": "ns",
            "range": "± 18558.22527336896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518609.53125,
            "unit": "ns",
            "range": "± 39669.288190396735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854768.5198102678,
            "unit": "ns",
            "range": "± 3354.664118366603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731977.94921875,
            "unit": "ns",
            "range": "± 6176.737012753481"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4168057.952724359,
            "unit": "ns",
            "range": "± 119796.99574056946"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4849940.506329114,
            "unit": "ns",
            "range": "± 244445.10029074136"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22509250,
            "unit": "ns",
            "range": "± 584645.8184606115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5450089.705882353,
            "unit": "ns",
            "range": "± 260839.3679309141"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25842794.871794872,
            "unit": "ns",
            "range": "± 887031.6317710902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 73993.54838709677,
            "unit": "ns",
            "range": "± 10677.463125379028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159045.36082474227,
            "unit": "ns",
            "range": "± 19604.13445242778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 120293.47826086957,
            "unit": "ns",
            "range": "± 4606.162643623964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3246150,
            "unit": "ns",
            "range": "± 21535.76631488257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9057731.818181818,
            "unit": "ns",
            "range": "± 220746.74863886906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10858.695652173914,
            "unit": "ns",
            "range": "± 1442.5368507234657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 41290,
            "unit": "ns",
            "range": "± 6429.095555591109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36537.755102040814,
            "unit": "ns",
            "range": "± 10133.465180182118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96840.8163265306,
            "unit": "ns",
            "range": "± 26356.25412090086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3942.8571428571427,
            "unit": "ns",
            "range": "± 2213.5012150134407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10518.68686868687,
            "unit": "ns",
            "range": "± 2620.7821882978524"
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
          "id": "f487ff798731e88ecd0b4a6c3e13afe14d93f27a",
          "message": "Merge pull request #2810 from greymistcube/release/0.48.0\n\n🚀 Release libplanet 0.48.0",
          "timestamp": "2023-02-14T02:49:14-05:00",
          "tree_id": "760f5b3ea56d9473c8cdd53bd06dc34fea67f448",
          "url": "https://github.com/planetarium/libplanet/commit/f487ff798731e88ecd0b4a6c3e13afe14d93f27a"
        },
        "date": 1676361981865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121862.36559139784,
            "unit": "ns",
            "range": "± 9233.138733111842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5686399.098557692,
            "unit": "ns",
            "range": "± 30281.44619511456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1814969.2708333333,
            "unit": "ns",
            "range": "± 18031.05022045536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378559.095982143,
            "unit": "ns",
            "range": "± 17381.805798777372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155197.6432291665,
            "unit": "ns",
            "range": "± 50806.70004062716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974555.9709821428,
            "unit": "ns",
            "range": "± 3784.89512251767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904130.4827008928,
            "unit": "ns",
            "range": "± 12232.4313857942"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5645248.5625,
            "unit": "ns",
            "range": "± 342519.1216921057"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6877767.741935484,
            "unit": "ns",
            "range": "± 203655.6479077641"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32157711.111111112,
            "unit": "ns",
            "range": "± 1694025.7272987324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7686673.11827957,
            "unit": "ns",
            "range": "± 490678.74998063844"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34832968.96551724,
            "unit": "ns",
            "range": "± 1520040.8199974634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108232.79569892473,
            "unit": "ns",
            "range": "± 11338.599174040264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221119.76744186046,
            "unit": "ns",
            "range": "± 13977.728669880878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205502,
            "unit": "ns",
            "range": "± 8181.998408651988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4791126.666666667,
            "unit": "ns",
            "range": "± 66829.97046521083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10739407.692307692,
            "unit": "ns",
            "range": "± 75334.63636268138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25151.612903225807,
            "unit": "ns",
            "range": "± 3090.5751857804944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64168.68686868687,
            "unit": "ns",
            "range": "± 9538.029643620368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52148.42105263158,
            "unit": "ns",
            "range": "± 3768.4824858768525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116890,
            "unit": "ns",
            "range": "± 18510.465125137624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7913.684210526316,
            "unit": "ns",
            "range": "± 781.5166006480387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23241.75824175824,
            "unit": "ns",
            "range": "± 2102.2245325721"
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
          "id": "b6c147f297cdf330639a4eeaa0d61ad30840ca3b",
          "message": "Merge pull request #2812 from greymistcube/prepare/0.49.0\n\n🔧 Prepare 0.49.0",
          "timestamp": "2023-02-14T03:23:14-05:00",
          "tree_id": "43eb24b4363c0dcdfab6dab7432acf825d31aada",
          "url": "https://github.com/planetarium/libplanet/commit/b6c147f297cdf330639a4eeaa0d61ad30840ca3b"
        },
        "date": 1676364115089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122904.25531914894,
            "unit": "ns",
            "range": "± 12153.718975003432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6038769.698660715,
            "unit": "ns",
            "range": "± 82972.78274744313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896389.7181919643,
            "unit": "ns",
            "range": "± 15309.753117665367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1406028.2747395833,
            "unit": "ns",
            "range": "± 18645.123001718035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3173286.7745535714,
            "unit": "ns",
            "range": "± 40626.07038185657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051887.583705357,
            "unit": "ns",
            "range": "± 12478.741106693657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944259.8046875,
            "unit": "ns",
            "range": "± 14360.269744516338"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5743804.508928572,
            "unit": "ns",
            "range": "± 278328.49789584824"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6296060.810810811,
            "unit": "ns",
            "range": "± 311664.01729433873"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29903404.347826086,
            "unit": "ns",
            "range": "± 748842.6788768852"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7168401.030927835,
            "unit": "ns",
            "range": "± 487625.6309264578"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33127175,
            "unit": "ns",
            "range": "± 619699.4857724723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105712.63157894737,
            "unit": "ns",
            "range": "± 14179.219452343474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211094.68085106384,
            "unit": "ns",
            "range": "± 16193.562819181243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185228.72340425532,
            "unit": "ns",
            "range": "± 14755.765210755091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4115829.1666666665,
            "unit": "ns",
            "range": "± 103991.99584235012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10858894.736842105,
            "unit": "ns",
            "range": "± 235081.02025019238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23013.26530612245,
            "unit": "ns",
            "range": "± 7336.1924132865615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56725.77319587629,
            "unit": "ns",
            "range": "± 9997.387975017478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52512.37113402062,
            "unit": "ns",
            "range": "± 11751.08379515799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119924.21052631579,
            "unit": "ns",
            "range": "± 22919.2324506171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10605,
            "unit": "ns",
            "range": "± 5718.839590566102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20682.474226804123,
            "unit": "ns",
            "range": "± 5730.256144458086"
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
          "id": "90b4eff97bc3043293781274d75f8b4e114943d1",
          "message": "Merge pull request #2813 from OnedgeLee/hotfix/revert_test_skip\n\nRevert temporal skippable tests",
          "timestamp": "2023-02-14T17:37:15+09:00",
          "tree_id": "18ec484a79386a1ad5dfbee13d0c4785c86a808d",
          "url": "https://github.com/planetarium/libplanet/commit/90b4eff97bc3043293781274d75f8b4e114943d1"
        },
        "date": 1676364556612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90235.13513513513,
            "unit": "ns",
            "range": "± 2696.522062070183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4895219.427083333,
            "unit": "ns",
            "range": "± 69851.86723193918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528544.447544643,
            "unit": "ns",
            "range": "± 4209.335527356575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146916.5234375,
            "unit": "ns",
            "range": "± 1477.4314528459647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652392.578125,
            "unit": "ns",
            "range": "± 4289.689611356618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801395.1322115385,
            "unit": "ns",
            "range": "± 1350.2102463543845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733359.6819196428,
            "unit": "ns",
            "range": "± 647.7824535105292"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3919309.1796875,
            "unit": "ns",
            "range": "± 42472.096618843454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5437113.333333333,
            "unit": "ns",
            "range": "± 36024.15591688179"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23522192.85714286,
            "unit": "ns",
            "range": "± 546317.0202490095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6416829.62962963,
            "unit": "ns",
            "range": "± 155244.24135192414"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26368075,
            "unit": "ns",
            "range": "± 486938.80998197984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91591.48936170213,
            "unit": "ns",
            "range": "± 9861.968435047036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192970.52631578947,
            "unit": "ns",
            "range": "± 15692.97087317847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165805.37634408602,
            "unit": "ns",
            "range": "± 17253.477063500522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3428560,
            "unit": "ns",
            "range": "± 24206.929350320923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8668446.666666666,
            "unit": "ns",
            "range": "± 104718.41744593428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15834.0206185567,
            "unit": "ns",
            "range": "± 1699.502782552527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54746.46464646464,
            "unit": "ns",
            "range": "± 11349.919653867491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44837.77777777778,
            "unit": "ns",
            "range": "± 3575.056463065634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100840.8163265306,
            "unit": "ns",
            "range": "± 17254.109546248903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6142.105263157895,
            "unit": "ns",
            "range": "± 817.1797566993682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15071.264367816091,
            "unit": "ns",
            "range": "± 1076.3750584746385"
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
          "id": "8420cba8929cb9173942a1ad17546d684358527b",
          "message": "Merge pull request #2814 from limebell/fix/multiple-task-blocksync\n\nPrevent duplicated ProcessBlockDemand",
          "timestamp": "2023-02-15T17:28:49+09:00",
          "tree_id": "def5643cc94889522aea1a333b9679d0572e97a4",
          "url": "https://github.com/planetarium/libplanet/commit/8420cba8929cb9173942a1ad17546d684358527b"
        },
        "date": 1676450735922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98188.23529411765,
            "unit": "ns",
            "range": "± 4014.15729930074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4759735.520833333,
            "unit": "ns",
            "range": "± 28622.558516841873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511994.5703125,
            "unit": "ns",
            "range": "± 13590.692213929988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160879.8046875,
            "unit": "ns",
            "range": "± 8193.22474787765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2801828.5677083335,
            "unit": "ns",
            "range": "± 10967.940641351153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839782.6627604166,
            "unit": "ns",
            "range": "± 4235.658182000669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756038.0650111607,
            "unit": "ns",
            "range": "± 1702.0223184709316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4601523.125,
            "unit": "ns",
            "range": "± 42922.15747600758"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5650990.909090909,
            "unit": "ns",
            "range": "± 132186.6173944315"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24298194.444444444,
            "unit": "ns",
            "range": "± 517286.7974824732"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6032780,
            "unit": "ns",
            "range": "± 62572.00652048806"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26537873.333333332,
            "unit": "ns",
            "range": "± 487572.7249295618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86542.42424242424,
            "unit": "ns",
            "range": "± 11901.938539660474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181084.2105263158,
            "unit": "ns",
            "range": "± 8859.481589522476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158086.88524590165,
            "unit": "ns",
            "range": "± 7068.933804797724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3568666.6666666665,
            "unit": "ns",
            "range": "± 60510.88056429741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8839137.5,
            "unit": "ns",
            "range": "± 159978.61888389962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19784.69387755102,
            "unit": "ns",
            "range": "± 2319.2761064393076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50086.04651162791,
            "unit": "ns",
            "range": "± 3429.771482379056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38557.64705882353,
            "unit": "ns",
            "range": "± 2087.5125588780033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89133.33333333333,
            "unit": "ns",
            "range": "± 15296.464022583876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6308.2474226804125,
            "unit": "ns",
            "range": "± 872.3376285271261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16895.918367346938,
            "unit": "ns",
            "range": "± 2109.8648203801395"
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
          "id": "803174a84020c073551ed3cbea2bc14d03b3b8b9",
          "message": "Merge pull request #2819 from riemannulus/main\n\n🧹 Merge 0.46.2 to main",
          "timestamp": "2023-02-16T13:14:19+09:00",
          "tree_id": "136061da77d3124eea6dda0a72b980ff05535a8d",
          "url": "https://github.com/planetarium/libplanet/commit/803174a84020c073551ed3cbea2bc14d03b3b8b9"
        },
        "date": 1676521722798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98356.25,
            "unit": "ns",
            "range": "± 3897.6755893737486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4721812.667410715,
            "unit": "ns",
            "range": "± 25416.045278305657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492738.49609375,
            "unit": "ns",
            "range": "± 7742.904597163635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150912.01171875,
            "unit": "ns",
            "range": "± 4847.7485463234825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623844.7135416665,
            "unit": "ns",
            "range": "± 9809.120763867913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820043.212890625,
            "unit": "ns",
            "range": "± 2574.6169875251785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765158.61328125,
            "unit": "ns",
            "range": "± 2021.9419280716554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4602257.109375,
            "unit": "ns",
            "range": "± 48290.16978197191"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4936203.773584906,
            "unit": "ns",
            "range": "± 205120.71301690413"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23747764.70588235,
            "unit": "ns",
            "range": "± 467967.64036252606"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5585229.268292683,
            "unit": "ns",
            "range": "± 174308.02655629837"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27107764.285714287,
            "unit": "ns",
            "range": "± 378975.78694147745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92571.42857142857,
            "unit": "ns",
            "range": "± 15280.531377385336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178042.22222222222,
            "unit": "ns",
            "range": "± 11887.789767994722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169950.51546391752,
            "unit": "ns",
            "range": "± 12026.10982154506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3450521.052631579,
            "unit": "ns",
            "range": "± 74541.87919811228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8674626.666666666,
            "unit": "ns",
            "range": "± 133399.47776009722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18228.72340425532,
            "unit": "ns",
            "range": "± 2044.6953313246877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46001.16279069767,
            "unit": "ns",
            "range": "± 3424.839856661279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36618.840579710144,
            "unit": "ns",
            "range": "± 1772.110353946493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87943.87755102041,
            "unit": "ns",
            "range": "± 18645.621173168387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5805.208333333333,
            "unit": "ns",
            "range": "± 924.7895682878539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16879.347826086956,
            "unit": "ns",
            "range": "± 1936.2668308693646"
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
          "id": "9eafed4bc8f1e072c7c1bbdc8883c206ed64c8e8",
          "message": "Merge pull request #2822 from greymistcube/feature/branch\n\nIntroduce `Branch<T>` for more context",
          "timestamp": "2023-02-16T02:47:15-05:00",
          "tree_id": "59513a2762f6c07acc5b0a2b76152120b80a5962",
          "url": "https://github.com/planetarium/libplanet/commit/9eafed4bc8f1e072c7c1bbdc8883c206ed64c8e8"
        },
        "date": 1676534746030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 123716.32653061225,
            "unit": "ns",
            "range": "± 9642.867070305258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5797714.791666667,
            "unit": "ns",
            "range": "± 42045.75017539035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872211.997767857,
            "unit": "ns",
            "range": "± 10679.567588778727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367481.3755580357,
            "unit": "ns",
            "range": "± 3798.5352852443234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3141245.3683035714,
            "unit": "ns",
            "range": "± 11558.486231263052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974336.0142299107,
            "unit": "ns",
            "range": "± 7806.760594443815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901937.890625,
            "unit": "ns",
            "range": "± 5537.729437861116"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5346397.392451298,
            "unit": "ns",
            "range": "± 272671.10966489604"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6318610,
            "unit": "ns",
            "range": "± 253651.7009762861"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30076000,
            "unit": "ns",
            "range": "± 523524.1776798705"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7188805.555555556,
            "unit": "ns",
            "range": "± 146047.52438533484"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33759110.344827585,
            "unit": "ns",
            "range": "± 927721.5362476686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113810.75268817204,
            "unit": "ns",
            "range": "± 10016.480575678997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224870,
            "unit": "ns",
            "range": "± 10011.286850689059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205458.53658536586,
            "unit": "ns",
            "range": "± 10886.654546493812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283320,
            "unit": "ns",
            "range": "± 32838.67928438744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10742193.75,
            "unit": "ns",
            "range": "± 154785.66888335196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25628.494623655915,
            "unit": "ns",
            "range": "± 2222.9460212874574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63194.186046511626,
            "unit": "ns",
            "range": "± 5001.966781439731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49907.52688172043,
            "unit": "ns",
            "range": "± 3758.6490565424933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125591.75257731958,
            "unit": "ns",
            "range": "± 21843.776144968106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8044.329896907217,
            "unit": "ns",
            "range": "± 930.0502979414774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26122.340425531915,
            "unit": "ns",
            "range": "± 2634.108539305627"
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
          "id": "977a79462cfe47b88606d6ef4e69b989b297a544",
          "message": "Avoid unintended blocks on NetMQTransport (#2817)",
          "timestamp": "2023-02-16T18:47:05+09:00",
          "tree_id": "def27f168284f49e85c79d08c1fb29bedb8925f0",
          "url": "https://github.com/planetarium/libplanet/commit/977a79462cfe47b88606d6ef4e69b989b297a544"
        },
        "date": 1676541748598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102216,
            "unit": "ns",
            "range": "± 5179.117111444194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4743267.421875,
            "unit": "ns",
            "range": "± 23972.30177640113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496357.0572916667,
            "unit": "ns",
            "range": "± 8506.76753792931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146678.22265625,
            "unit": "ns",
            "range": "± 5195.293886014083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624471.1197916665,
            "unit": "ns",
            "range": "± 11079.07838096551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837782.5404575893,
            "unit": "ns",
            "range": "± 1835.438375622239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766666.7903645834,
            "unit": "ns",
            "range": "± 1505.6206571461337"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4496874.986979167,
            "unit": "ns",
            "range": "± 130916.77410791135"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5021700,
            "unit": "ns",
            "range": "± 88537.17540429799"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25064177.419354837,
            "unit": "ns",
            "range": "± 757950.1706179535"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6161895.238095238,
            "unit": "ns",
            "range": "± 141140.99502338248"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28214793.181818184,
            "unit": "ns",
            "range": "± 1048658.668035245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93886.0824742268,
            "unit": "ns",
            "range": "± 12245.62154376523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186597.22222222222,
            "unit": "ns",
            "range": "± 6136.5642370075975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165351.02040816325,
            "unit": "ns",
            "range": "± 11054.898106446259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3494070.2702702703,
            "unit": "ns",
            "range": "± 118155.6150564558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8773313.888888888,
            "unit": "ns",
            "range": "± 288096.2677923353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17471.27659574468,
            "unit": "ns",
            "range": "± 1784.136931218796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47830.208333333336,
            "unit": "ns",
            "range": "± 4288.24880934831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38254.6875,
            "unit": "ns",
            "range": "± 1773.3413611973679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95234.93975903615,
            "unit": "ns",
            "range": "± 9030.037054389304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6100,
            "unit": "ns",
            "range": "± 1200.5153532554516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17350.54945054945,
            "unit": "ns",
            "range": "± 1313.7202159747735"
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
          "id": "5bd541e43b9c0ca04da673ea87a464f0ba937386",
          "message": "Merge pull request #2832 from greymistcube/chore/logging\n\n🧹 Sanitized logging",
          "timestamp": "2023-02-19T21:44:02-05:00",
          "tree_id": "9a523112a25aaa79e5a87dd0f37102a76cac375b",
          "url": "https://github.com/planetarium/libplanet/commit/5bd541e43b9c0ca04da673ea87a464f0ba937386"
        },
        "date": 1676861736176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99482.35294117648,
            "unit": "ns",
            "range": "± 1982.4969401356109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4696511.848958333,
            "unit": "ns",
            "range": "± 42379.090040473675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1480046.8098958333,
            "unit": "ns",
            "range": "± 4712.094875709775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143610.1041666667,
            "unit": "ns",
            "range": "± 4149.004873351287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608137.96875,
            "unit": "ns",
            "range": "± 8640.067934243494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820639.0234375,
            "unit": "ns",
            "range": "± 2334.9628769125266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761209.8177083334,
            "unit": "ns",
            "range": "± 1698.41267701013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4430398.409598215,
            "unit": "ns",
            "range": "± 32913.140744490236"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5475550,
            "unit": "ns",
            "range": "± 64880.6211437591"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23642414.814814813,
            "unit": "ns",
            "range": "± 638836.7888976048"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6050964.285714285,
            "unit": "ns",
            "range": "± 57433.70234309438"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26574531.818181816,
            "unit": "ns",
            "range": "± 633350.7223575439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 81035.22727272728,
            "unit": "ns",
            "range": "± 6053.649792465894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173993.75,
            "unit": "ns",
            "range": "± 8080.74087048168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158253.57142857142,
            "unit": "ns",
            "range": "± 4508.632226104115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3379553.846153846,
            "unit": "ns",
            "range": "± 45350.51663404022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8303410,
            "unit": "ns",
            "range": "± 174698.76298781764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15980,
            "unit": "ns",
            "range": "± 1027.8372625091226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45105.494505494506,
            "unit": "ns",
            "range": "± 3581.9101867691475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36200,
            "unit": "ns",
            "range": "± 717.6350047203662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84712.62626262626,
            "unit": "ns",
            "range": "± 15169.320447148673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4984.375,
            "unit": "ns",
            "range": "± 516.1248573950422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15528.915662650603,
            "unit": "ns",
            "range": "± 840.8082813407594"
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
          "id": "a334417df43b6970c31ce7bf9c4cc40c1060f633",
          "message": "Merge pull request #2833 from greymistcube/chore/logging\n\n🧹 More sanitized logging",
          "timestamp": "2023-02-20T03:12:33-05:00",
          "tree_id": "e847dfd172b329b47d46718849dd94e33f1503c7",
          "url": "https://github.com/planetarium/libplanet/commit/a334417df43b6970c31ce7bf9c4cc40c1060f633"
        },
        "date": 1676881941039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110298.95833333333,
            "unit": "ns",
            "range": "± 7723.232140301264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4557773.177083333,
            "unit": "ns",
            "range": "± 179687.66441252982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1425165.8068426724,
            "unit": "ns",
            "range": "± 41603.20683713661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127214.760044643,
            "unit": "ns",
            "range": "± 31541.65305619247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646682.979910714,
            "unit": "ns",
            "range": "± 28920.38732492104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799039.7102864584,
            "unit": "ns",
            "range": "± 13991.941909447814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749464.0787760416,
            "unit": "ns",
            "range": "± 13698.293487178536"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5069771.7507102275,
            "unit": "ns",
            "range": "± 186260.8541376889"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5538793.478260869,
            "unit": "ns",
            "range": "± 330432.4345507767"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29269135.227272727,
            "unit": "ns",
            "range": "± 1611625.1848153104"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6260879.381443299,
            "unit": "ns",
            "range": "± 368109.06556858943"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32793630.303030305,
            "unit": "ns",
            "range": "± 3086550.665104338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90747.82608695653,
            "unit": "ns",
            "range": "± 7605.5716745616455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202696.66666666666,
            "unit": "ns",
            "range": "± 13679.102818993071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181777.77777777778,
            "unit": "ns",
            "range": "± 16595.12195081308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3760611.8279569894,
            "unit": "ns",
            "range": "± 212837.8357226471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9190114.942528736,
            "unit": "ns",
            "range": "± 502166.6923115749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18227.659574468085,
            "unit": "ns",
            "range": "± 1879.8538181167144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47883.87096774193,
            "unit": "ns",
            "range": "± 4925.428481086711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41093.333333333336,
            "unit": "ns",
            "range": "± 3572.3910099665577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90501.05263157895,
            "unit": "ns",
            "range": "± 16626.52005360548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5073.404255319149,
            "unit": "ns",
            "range": "± 517.6820820215952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16942.391304347828,
            "unit": "ns",
            "range": "± 1577.5369378411474"
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
          "id": "544c03f94ba675d9e1777a6ceefca752a80ff523",
          "message": "Merge pull request #2834 from limebell/release/0.49\n\n🚀 Release libplanet 0.49.0",
          "timestamp": "2023-02-20T17:41:39+09:00",
          "tree_id": "f0b936d5c40f3713dbeca3faaad7749afd2117a3",
          "url": "https://github.com/planetarium/libplanet/commit/544c03f94ba675d9e1777a6ceefca752a80ff523"
        },
        "date": 1676883317719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98466.66666666667,
            "unit": "ns",
            "range": "± 551.5817475609796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4689211.216517857,
            "unit": "ns",
            "range": "± 25526.429733407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1491780.703125,
            "unit": "ns",
            "range": "± 8199.808885161521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148157.1875,
            "unit": "ns",
            "range": "± 5489.3674718258835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611952.6822916665,
            "unit": "ns",
            "range": "± 10409.031255032149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808408.7630208334,
            "unit": "ns",
            "range": "± 1844.299852329619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762620.1432291666,
            "unit": "ns",
            "range": "± 1577.783427508716"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4474153.264508928,
            "unit": "ns",
            "range": "± 52476.95899099802"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5586507.142857143,
            "unit": "ns",
            "range": "± 85016.55688779066"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24086808.695652176,
            "unit": "ns",
            "range": "± 584949.0008174322"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6247329.62962963,
            "unit": "ns",
            "range": "± 174201.90499447388"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27231714.814814813,
            "unit": "ns",
            "range": "± 747536.7589128484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83502.38095238095,
            "unit": "ns",
            "range": "± 4762.8071147342225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176182.05128205128,
            "unit": "ns",
            "range": "± 9030.075916750151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156380.76923076922,
            "unit": "ns",
            "range": "± 4158.751661810956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3407435.714285714,
            "unit": "ns",
            "range": "± 48156.82086272303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8568565,
            "unit": "ns",
            "range": "± 194951.8760455621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16431.86813186813,
            "unit": "ns",
            "range": "± 1614.3715062510737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46647.12643678161,
            "unit": "ns",
            "range": "± 3414.873046789342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36396.42857142857,
            "unit": "ns",
            "range": "± 1019.9789913802846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88590.10989010989,
            "unit": "ns",
            "range": "± 15600.712625782018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4943.877551020408,
            "unit": "ns",
            "range": "± 481.2068861995843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16642.55319148936,
            "unit": "ns",
            "range": "± 1633.222907943896"
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
          "id": "35a2dbc6de17b31e177e824dd90aae5e509cac9f",
          "message": "Merge pull request #2836 from limebell/prepare/0.50.0\n\n🔧 Prepare 0.50.0",
          "timestamp": "2023-02-21T10:58:36+09:00",
          "tree_id": "94d25b33717f19cfa799019c66a905d266beed5a",
          "url": "https://github.com/planetarium/libplanet/commit/35a2dbc6de17b31e177e824dd90aae5e509cac9f"
        },
        "date": 1676945704227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110108.51063829787,
            "unit": "ns",
            "range": "± 8326.168871727908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5298805.260416667,
            "unit": "ns",
            "range": "± 48205.206394330926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1710773.6653645833,
            "unit": "ns",
            "range": "± 28262.606449753846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1311066.0041360294,
            "unit": "ns",
            "range": "± 25830.950877681495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954962.4655330884,
            "unit": "ns",
            "range": "± 60323.923999955216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920251.513671875,
            "unit": "ns",
            "range": "± 15606.925043560863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831906.728515625,
            "unit": "ns",
            "range": "± 12632.444918649577"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5122000.2578125,
            "unit": "ns",
            "range": "± 367498.79691936716"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6594377.777777778,
            "unit": "ns",
            "range": "± 137650.85651986912"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29149456.25,
            "unit": "ns",
            "range": "± 1680633.795097458"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6466298.958333333,
            "unit": "ns",
            "range": "± 369383.54008146335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33126170,
            "unit": "ns",
            "range": "± 2030210.6062567933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99810.30927835051,
            "unit": "ns",
            "range": "± 10302.088021934382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209545.26315789475,
            "unit": "ns",
            "range": "± 15434.024091728435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184356.70103092783,
            "unit": "ns",
            "range": "± 13638.692716072037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3925549.350649351,
            "unit": "ns",
            "range": "± 200748.97235325657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11255626.315789474,
            "unit": "ns",
            "range": "± 572532.9966312675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21858.24175824176,
            "unit": "ns",
            "range": "± 2256.401556759786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55836.26373626374,
            "unit": "ns",
            "range": "± 4654.4009396965475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45129.213483146064,
            "unit": "ns",
            "range": "± 4340.747795002163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107252.08333333333,
            "unit": "ns",
            "range": "± 21340.64064133165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6113.684210526316,
            "unit": "ns",
            "range": "± 685.9704302162149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19860.869565217392,
            "unit": "ns",
            "range": "± 2192.44238947149"
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
          "id": "e784ecdcf7f82c2f78f9f3e33ba6b44fa8acdf76",
          "message": "Merge pull request #2831 from limebell/refactor/immutable-message\n\nSeparate `Message`'s content and make messages immutable",
          "timestamp": "2023-02-23T17:13:40+09:00",
          "tree_id": "bfd672b3b2d674162520d297cce1869e13544be3",
          "url": "https://github.com/planetarium/libplanet/commit/e784ecdcf7f82c2f78f9f3e33ba6b44fa8acdf76"
        },
        "date": 1677141003512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100348.78048780488,
            "unit": "ns",
            "range": "± 5225.158604774278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4817873.828125,
            "unit": "ns",
            "range": "± 33464.29494372317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490192.0963541667,
            "unit": "ns",
            "range": "± 9751.50212824264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150850.8984375,
            "unit": "ns",
            "range": "± 8108.086051047136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585459.2633928573,
            "unit": "ns",
            "range": "± 6665.585801141033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817717.5716145834,
            "unit": "ns",
            "range": "± 1711.7213273740454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742673.8581730769,
            "unit": "ns",
            "range": "± 1362.1001548646059"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4806688.671875,
            "unit": "ns",
            "range": "± 30276.962921167826"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5250180.85106383,
            "unit": "ns",
            "range": "± 196577.61011686947"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25250640,
            "unit": "ns",
            "range": "± 408301.8540246909"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5847159.259259259,
            "unit": "ns",
            "range": "± 245830.28316339644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27885795.454545453,
            "unit": "ns",
            "range": "± 672410.1154144607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90637.8947368421,
            "unit": "ns",
            "range": "± 9270.362050211052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185693.84615384616,
            "unit": "ns",
            "range": "± 8676.888787950526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181570.4081632653,
            "unit": "ns",
            "range": "± 12185.577153066433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3689884.6153846155,
            "unit": "ns",
            "range": "± 27232.84922521103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9318050,
            "unit": "ns",
            "range": "± 107653.75051525143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21211.363636363636,
            "unit": "ns",
            "range": "± 1732.4775839509068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56759.13978494624,
            "unit": "ns",
            "range": "± 5081.471811761435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45871.27659574468,
            "unit": "ns",
            "range": "± 3595.415908776169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119990.8163265306,
            "unit": "ns",
            "range": "± 19831.64755353336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8186.868686868687,
            "unit": "ns",
            "range": "± 1056.1430083134965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23103.061224489797,
            "unit": "ns",
            "range": "± 2303.938988383221"
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
          "id": "029fb55ff09f8504b61c0e65e59980327786f7a9",
          "message": "Merge pull request #2845 from greymistcube/refactor/ignore-policy-for-genesis\n\nIgnore policy checks for genesis block",
          "timestamp": "2023-02-23T03:12:11-05:00",
          "tree_id": "1cbf956b6e882639d9e7d32bbf292200dff9bd7f",
          "url": "https://github.com/planetarium/libplanet/commit/029fb55ff09f8504b61c0e65e59980327786f7a9"
        },
        "date": 1677141002284,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 122889.69072164949,
            "unit": "ns",
            "range": "± 8417.05219252464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5712410.15625,
            "unit": "ns",
            "range": "± 15998.842998633429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1815491.89453125,
            "unit": "ns",
            "range": "± 4851.34079283766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391469.921875,
            "unit": "ns",
            "range": "± 3499.0153944097133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3168509.347098214,
            "unit": "ns",
            "range": "± 9896.377998144859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000937.9807692308,
            "unit": "ns",
            "range": "± 5443.094968232428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911348.8002232143,
            "unit": "ns",
            "range": "± 2502.6503002424115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5542033.290441177,
            "unit": "ns",
            "range": "± 297330.346192788"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7162757.142857143,
            "unit": "ns",
            "range": "± 222184.26412977753"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29940705.263157893,
            "unit": "ns",
            "range": "± 659808.8868702683"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7661060,
            "unit": "ns",
            "range": "± 138116.97319922084"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33521960,
            "unit": "ns",
            "range": "± 889487.6437215602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 120361.05263157895,
            "unit": "ns",
            "range": "± 13404.280792382346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228498.86363636365,
            "unit": "ns",
            "range": "± 14434.119017012545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208506,
            "unit": "ns",
            "range": "± 13157.86295626146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4272584.615384615,
            "unit": "ns",
            "range": "± 67974.40506241849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11011021.42857143,
            "unit": "ns",
            "range": "± 119157.15013616023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25591.836734693876,
            "unit": "ns",
            "range": "± 2962.7471742338166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61342.391304347824,
            "unit": "ns",
            "range": "± 5910.620608452755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53541.237113402065,
            "unit": "ns",
            "range": "± 4295.704069603521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119628.125,
            "unit": "ns",
            "range": "± 18212.02438601602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7002.040816326531,
            "unit": "ns",
            "range": "± 968.2569727748731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23805.154639175256,
            "unit": "ns",
            "range": "± 2535.4310586014685"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd879cd44d491a3060be635b9ec90b6e8b98a7d9",
          "message": "Merge pull request #2847 from planetarium/ci-typescript-libs\n\nPrepare monorepo for typescript lib",
          "timestamp": "2023-02-24T14:32:33+09:00",
          "tree_id": "6f4f1f4ad3b16948e048034534815d01a257b976",
          "url": "https://github.com/planetarium/libplanet/commit/dd879cd44d491a3060be635b9ec90b6e8b98a7d9"
        },
        "date": 1677217760676,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107645.74468085106,
            "unit": "ns",
            "range": "± 14075.69142971079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4758528.385416667,
            "unit": "ns",
            "range": "± 15453.79963202056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1482713.1901041667,
            "unit": "ns",
            "range": "± 5949.273094967895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1180365.9440104167,
            "unit": "ns",
            "range": "± 7282.432673919459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2610580.5245535714,
            "unit": "ns",
            "range": "± 7768.9543245490895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829754.3131510416,
            "unit": "ns",
            "range": "± 2116.460019563353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760853.1087239584,
            "unit": "ns",
            "range": "± 4461.407566062697"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4941657.097039473,
            "unit": "ns",
            "range": "± 324343.8287560338"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4915669.565217392,
            "unit": "ns",
            "range": "± 132860.86100305626"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27255364.285714287,
            "unit": "ns",
            "range": "± 303130.2807175689"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6701121.212121212,
            "unit": "ns",
            "range": "± 800336.2793574076"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26496478.57142857,
            "unit": "ns",
            "range": "± 400589.0781155853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116361,
            "unit": "ns",
            "range": "± 43228.78272118654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228936.0824742268,
            "unit": "ns",
            "range": "± 32082.37504705338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198405.10204081633,
            "unit": "ns",
            "range": "± 20937.281760420894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3429160,
            "unit": "ns",
            "range": "± 59913.673612242186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9157422.222222222,
            "unit": "ns",
            "range": "± 178742.90625350064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24418.947368421053,
            "unit": "ns",
            "range": "± 2937.298467033013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66636.45833333333,
            "unit": "ns",
            "range": "± 4177.209337689123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51345,
            "unit": "ns",
            "range": "± 10306.557439932418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128573.23232323233,
            "unit": "ns",
            "range": "± 33365.8686301657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7264.948453608247,
            "unit": "ns",
            "range": "± 2432.849890779391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21858.947368421053,
            "unit": "ns",
            "range": "± 6038.625578737199"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f6d6a0ad6e3fc1b6158fc32c2285ff67aafb8b",
          "message": "Merge pull request #2851 from planetarium/ci-fix-no-obj\n\nCI: fix where obj/ directory is missing",
          "timestamp": "2023-02-24T14:57:55+09:00",
          "tree_id": "2f6f92e07c50b5ccf598c0fef4fee6ea8eece2e5",
          "url": "https://github.com/planetarium/libplanet/commit/69f6d6a0ad6e3fc1b6158fc32c2285ff67aafb8b"
        },
        "date": 1677219204221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 128722.91666666667,
            "unit": "ns",
            "range": "± 10447.08450053906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4893455.46875,
            "unit": "ns",
            "range": "± 13071.549335034051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529815.64453125,
            "unit": "ns",
            "range": "± 2317.7702031759745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168577.65625,
            "unit": "ns",
            "range": "± 4818.3128373789505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692233.0859375,
            "unit": "ns",
            "range": "± 7046.748313618126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849950.2650669643,
            "unit": "ns",
            "range": "± 6490.362521303584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757128.5226004465,
            "unit": "ns",
            "range": "± 896.2937838663668"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5119206.640625,
            "unit": "ns",
            "range": "± 125142.59170154344"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6311488.461538462,
            "unit": "ns",
            "range": "± 79463.21516338592"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27167976.923076924,
            "unit": "ns",
            "range": "± 387400.7424572264"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6792595.833333333,
            "unit": "ns",
            "range": "± 175118.10543587228"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29713020,
            "unit": "ns",
            "range": "± 526643.7454023627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111323.33333333333,
            "unit": "ns",
            "range": "± 11703.385182036058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213595.18072289156,
            "unit": "ns",
            "range": "± 11321.034853310353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206372.97297297296,
            "unit": "ns",
            "range": "± 10322.037832373906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3742880,
            "unit": "ns",
            "range": "± 57644.69000449465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9611521.42857143,
            "unit": "ns",
            "range": "± 56719.663915835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29440.40404040404,
            "unit": "ns",
            "range": "± 3533.8860841138767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63693.25842696629,
            "unit": "ns",
            "range": "± 5785.459786725703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50342.857142857145,
            "unit": "ns",
            "range": "± 5212.119105221053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116866.66666666667,
            "unit": "ns",
            "range": "± 13635.419268747775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8337.373737373737,
            "unit": "ns",
            "range": "± 1054.3966123038956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28506.81818181818,
            "unit": "ns",
            "range": "± 2411.6954237915047"
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
          "id": "5434b4b2a5d678b55bc03f0e8ca8bb627f0ea9e8",
          "message": "Merge pull request #2853 from greymistcube/port/0.49.1-to-main\n\n🔀 Port 0.49.1 to main",
          "timestamp": "2023-02-24T01:35:21-05:00",
          "tree_id": "cc42a12559f193ce7f8965803940f3a3e29d3d54",
          "url": "https://github.com/planetarium/libplanet/commit/5434b4b2a5d678b55bc03f0e8ca8bb627f0ea9e8"
        },
        "date": 1677221329424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93171.42857142857,
            "unit": "ns",
            "range": "± 1192.559349549448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844839.127604167,
            "unit": "ns",
            "range": "± 6193.3141055917495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526030.8175223214,
            "unit": "ns",
            "range": "± 2731.364467987794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149521.4973958333,
            "unit": "ns",
            "range": "± 1707.667685485651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685125.948660714,
            "unit": "ns",
            "range": "± 14043.383947657658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809070.1171875,
            "unit": "ns",
            "range": "± 808.7402698646753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785577.67578125,
            "unit": "ns",
            "range": "± 3364.30120654324"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3962710.2864583335,
            "unit": "ns",
            "range": "± 27573.38369120539"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5555350,
            "unit": "ns",
            "range": "± 76415.56174577975"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23210521.42857143,
            "unit": "ns",
            "range": "± 403446.4299175131"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5722965.625,
            "unit": "ns",
            "range": "± 161099.76794475788"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26793340,
            "unit": "ns",
            "range": "± 399933.47268193064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83666.48351648351,
            "unit": "ns",
            "range": "± 7729.52871549192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180267.46987951806,
            "unit": "ns",
            "range": "± 8335.058318869746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148881.25,
            "unit": "ns",
            "range": "± 2892.5695036305233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3332678.5714285714,
            "unit": "ns",
            "range": "± 15919.710983626486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8315280,
            "unit": "ns",
            "range": "± 64878.922397251416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15345.918367346938,
            "unit": "ns",
            "range": "± 1816.429508187935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43457.44680851064,
            "unit": "ns",
            "range": "± 3958.589119840665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37154.08163265306,
            "unit": "ns",
            "range": "± 2658.3914354728204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85017.02127659574,
            "unit": "ns",
            "range": "± 11340.427617981704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4693.939393939394,
            "unit": "ns",
            "range": "± 810.116920487934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14319.354838709678,
            "unit": "ns",
            "range": "± 1133.123622761448"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30514f98f89182aa5478e58e442c572799f0f98f",
          "message": "Merge pull request #2855 from planetarium/ci-fix-yarn\n\nCI: fix parameters",
          "timestamp": "2023-02-24T16:23:37+09:00",
          "tree_id": "0ad0c72592b1c0cccaa69243000f568c184b8381",
          "url": "https://github.com/planetarium/libplanet/commit/30514f98f89182aa5478e58e442c572799f0f98f"
        },
        "date": 1677224473413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 114003.09278350516,
            "unit": "ns",
            "range": "± 9326.479480582062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5612766.09375,
            "unit": "ns",
            "range": "± 40631.052176029385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1789700.17578125,
            "unit": "ns",
            "range": "± 12155.638032581206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370213.9778645833,
            "unit": "ns",
            "range": "± 18168.073093060342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3090545.3962053573,
            "unit": "ns",
            "range": "± 19055.31222930427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971134.3359375,
            "unit": "ns",
            "range": "± 6693.340200209166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 903584.53125,
            "unit": "ns",
            "range": "± 4468.337740148363"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5269664.985795454,
            "unit": "ns",
            "range": "± 224119.71941012744"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5966365.068493151,
            "unit": "ns",
            "range": "± 291331.37188090326"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28820776.19047619,
            "unit": "ns",
            "range": "± 660106.2231980258"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7498208.823529412,
            "unit": "ns",
            "range": "± 239083.40134474827"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31730300,
            "unit": "ns",
            "range": "± 624657.9423972771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97543.75,
            "unit": "ns",
            "range": "± 7437.215275399226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207398.8764044944,
            "unit": "ns",
            "range": "± 11508.894725997627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191747.8260869565,
            "unit": "ns",
            "range": "± 9150.451751876904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4131433.3333333335,
            "unit": "ns",
            "range": "± 62786.778256329766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11367840,
            "unit": "ns",
            "range": "± 175000.0236734678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21555.208333333332,
            "unit": "ns",
            "range": "± 2421.4336680512083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57759.13978494624,
            "unit": "ns",
            "range": "± 4282.350953246302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47650,
            "unit": "ns",
            "range": "± 2555.009254221328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113523.6559139785,
            "unit": "ns",
            "range": "± 19785.663440818997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7455.789473684211,
            "unit": "ns",
            "range": "± 819.147947236936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24420.408163265307,
            "unit": "ns",
            "range": "± 4136.833770665464"
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
          "id": "3818e0f5aac99ae2f1fb48f3bc1511daa01defc2",
          "message": "Merge pull request #2857 from greymistcube/refactor/validate-nonces\n\n♻️ Refactor validate nonces",
          "timestamp": "2023-02-24T04:14:59-05:00",
          "tree_id": "f338354b26307d6e0fd7308f940d2d4af576eaba",
          "url": "https://github.com/planetarium/libplanet/commit/3818e0f5aac99ae2f1fb48f3bc1511daa01defc2"
        },
        "date": 1677230999854,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99918.6046511628,
            "unit": "ns",
            "range": "± 3702.718165911136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4809664.963942308,
            "unit": "ns",
            "range": "± 11299.82648438843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511599.7526041667,
            "unit": "ns",
            "range": "± 6502.598775997343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171069.7791466345,
            "unit": "ns",
            "range": "± 2605.952885724979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653130.3776041665,
            "unit": "ns",
            "range": "± 7273.932836432016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817739.6135602678,
            "unit": "ns",
            "range": "± 1005.6354507733727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760027.0833333334,
            "unit": "ns",
            "range": "± 1664.531189999679"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4789004.479166667,
            "unit": "ns",
            "range": "± 29676.018411611018"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5923671.428571428,
            "unit": "ns",
            "range": "± 87544.25191842148"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26154029.411764707,
            "unit": "ns",
            "range": "± 525256.3752167909"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6495491.428571428,
            "unit": "ns",
            "range": "± 195250.65695668428"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28886633.333333332,
            "unit": "ns",
            "range": "± 661817.9880702347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95217.04545454546,
            "unit": "ns",
            "range": "± 6742.117092906491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194686.11111111112,
            "unit": "ns",
            "range": "± 8392.825667896705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190148.66666666666,
            "unit": "ns",
            "range": "± 9624.047770844423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3655556.25,
            "unit": "ns",
            "range": "± 70405.06107518123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9180013.333333334,
            "unit": "ns",
            "range": "± 144141.08102166862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21884.042553191488,
            "unit": "ns",
            "range": "± 2618.8852258407096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57646.153846153844,
            "unit": "ns",
            "range": "± 4419.107695057094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45628.125,
            "unit": "ns",
            "range": "± 2984.5110019989256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113061.85567010309,
            "unit": "ns",
            "range": "± 20017.70801117397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6518.556701030928,
            "unit": "ns",
            "range": "± 766.1225284002143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23403.191489361703,
            "unit": "ns",
            "range": "± 2387.217398808517"
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
          "id": "d2628f6c25335ad20c9eaabceecf8aca667af6a7",
          "message": "Merge pull request #2862 from greymistcube/refactor/test-util\n\n🧹 Use ephemeral `IStateStore` for generating genesis block",
          "timestamp": "2023-02-27T00:10:51-05:00",
          "tree_id": "b9edf1be1179d914547cbae7871d083e947315a1",
          "url": "https://github.com/planetarium/libplanet/commit/d2628f6c25335ad20c9eaabceecf8aca667af6a7"
        },
        "date": 1677475955201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118304.91803278688,
            "unit": "ns",
            "range": "± 5334.711058389455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5657394.020432692,
            "unit": "ns",
            "range": "± 9937.580007407276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870313.28125,
            "unit": "ns",
            "range": "± 31899.312748530298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395252.6489257812,
            "unit": "ns",
            "range": "± 27088.490359124193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174583.3405671297,
            "unit": "ns",
            "range": "± 86004.09531061514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 982545.0270432692,
            "unit": "ns",
            "range": "± 1983.8894509685515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917984.2346191406,
            "unit": "ns",
            "range": "± 17217.694334886877"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5474310.314078283,
            "unit": "ns",
            "range": "± 320733.84493223747"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6781322.222222222,
            "unit": "ns",
            "range": "± 186312.1704875848"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30446268.57142857,
            "unit": "ns",
            "range": "± 1000196.440932371"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6714322.352941177,
            "unit": "ns",
            "range": "± 360133.7457827864"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33847384.905660376,
            "unit": "ns",
            "range": "± 1389828.8125626543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107984.21052631579,
            "unit": "ns",
            "range": "± 8808.07554740672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214078.65168539327,
            "unit": "ns",
            "range": "± 12104.633522203128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199692.63157894736,
            "unit": "ns",
            "range": "± 11379.93046855757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4178485.714285714,
            "unit": "ns",
            "range": "± 65555.4710166877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10582506.06060606,
            "unit": "ns",
            "range": "± 323853.5432292214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21732.25806451613,
            "unit": "ns",
            "range": "± 2055.171699709666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58382.608695652176,
            "unit": "ns",
            "range": "± 5134.747149057947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50949.45054945055,
            "unit": "ns",
            "range": "± 3659.2766020492695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110258.16326530612,
            "unit": "ns",
            "range": "± 20297.86908458943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7237.113402061856,
            "unit": "ns",
            "range": "± 1045.9564589835213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20478.494623655915,
            "unit": "ns",
            "range": "± 1951.969432581271"
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
          "id": "fb7a4b9f62adfd045f8f8f3fa3f7f2d18db212f6",
          "message": "Merge pull request #2858 from greymistcube/chore/benchmark-threshold\n\nChanged benchmark alert threshold to 200% (again)",
          "timestamp": "2023-02-27T00:52:09-05:00",
          "tree_id": "c9f6e9774e306167f39c1de7dfc058089a255e12",
          "url": "https://github.com/planetarium/libplanet/commit/fb7a4b9f62adfd045f8f8f3fa3f7f2d18db212f6"
        },
        "date": 1677477883112,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 93039.7435897436,
            "unit": "ns",
            "range": "± 3262.2880952996998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886971.814903846,
            "unit": "ns",
            "range": "± 7019.369885903378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1511843.9453125,
            "unit": "ns",
            "range": "± 1882.937642875438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138050.1255580357,
            "unit": "ns",
            "range": "± 848.1993390471332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564296.7447916665,
            "unit": "ns",
            "range": "± 6814.512875131293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830994.8939732143,
            "unit": "ns",
            "range": "± 542.4574124849792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728454.0299479166,
            "unit": "ns",
            "range": "± 450.50970073945183"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3936849.8046875,
            "unit": "ns",
            "range": "± 20773.129385564822"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 4857845.833333333,
            "unit": "ns",
            "range": "± 157390.70636589255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 22820308.333333332,
            "unit": "ns",
            "range": "± 277182.2487374535"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5511185.96491228,
            "unit": "ns",
            "range": "± 237655.11433783054"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 25265080,
            "unit": "ns",
            "range": "± 401617.4764979376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 78769.66292134831,
            "unit": "ns",
            "range": "± 4968.752461277424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177958.62068965516,
            "unit": "ns",
            "range": "± 11724.567247670522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145493.75,
            "unit": "ns",
            "range": "± 1109.635826145978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3292436.6666666665,
            "unit": "ns",
            "range": "± 22644.83121933968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8285571.428571428,
            "unit": "ns",
            "range": "± 79451.69242106444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15690.721649484536,
            "unit": "ns",
            "range": "± 1631.5306255570515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 41115.11627906977,
            "unit": "ns",
            "range": "± 3069.2983464077397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33887.096774193546,
            "unit": "ns",
            "range": "± 1419.5917065945569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80084.53608247422,
            "unit": "ns",
            "range": "± 14276.804761907408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4162.5,
            "unit": "ns",
            "range": "± 610.9957360519664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13743.589743589744,
            "unit": "ns",
            "range": "± 725.3462663633184"
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
          "id": "4e0fa7934800565a7cf932e4c48c5d0abfc589b8",
          "message": "Merge pull request #2865 from greymistcube/chore/logging\n\n🧹 Better logging",
          "timestamp": "2023-02-27T17:15:30+09:00",
          "tree_id": "b6cad099b381217e35f6382b7c607f603646ac3e",
          "url": "https://github.com/planetarium/libplanet/commit/4e0fa7934800565a7cf932e4c48c5d0abfc589b8"
        },
        "date": 1677486500453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 94888.46153846153,
            "unit": "ns",
            "range": "± 2557.0415597837937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4922147.96875,
            "unit": "ns",
            "range": "± 12832.21121585043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1514247.6822916667,
            "unit": "ns",
            "range": "± 937.0293323803128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1164413.3203125,
            "unit": "ns",
            "range": "± 1395.3034061128826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618846.3671875,
            "unit": "ns",
            "range": "± 15052.198415272858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879515.9830729166,
            "unit": "ns",
            "range": "± 2381.864497668317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726335.0027901785,
            "unit": "ns",
            "range": "± 634.753220182375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4011136.4676339286,
            "unit": "ns",
            "range": "± 13398.93416939314"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5570307.692307692,
            "unit": "ns",
            "range": "± 59437.29835631357"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23797750,
            "unit": "ns",
            "range": "± 178217.47950187154"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5845524.358974359,
            "unit": "ns",
            "range": "± 196051.34896373277"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26222776.666666668,
            "unit": "ns",
            "range": "± 443526.5211375538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88446.8085106383,
            "unit": "ns",
            "range": "± 8920.975670248972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184816.66666666666,
            "unit": "ns",
            "range": "± 9547.208970908676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149281.4814814815,
            "unit": "ns",
            "range": "± 4186.612090667201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3373242.8571428573,
            "unit": "ns",
            "range": "± 15973.762828497827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8453235.714285715,
            "unit": "ns",
            "range": "± 46802.03163149186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16652.941176470587,
            "unit": "ns",
            "range": "± 1121.073914908859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46341.25,
            "unit": "ns",
            "range": "± 2434.1293637548665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45219.38775510204,
            "unit": "ns",
            "range": "± 2949.765259340028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98401.0752688172,
            "unit": "ns",
            "range": "± 12794.253929551274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5875.773195876289,
            "unit": "ns",
            "range": "± 768.9655321864053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15328.260869565218,
            "unit": "ns",
            "range": "± 1352.598320608717"
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
          "id": "880e08616aae6d40e9ff22e9f5c90e205e30f325",
          "message": "Merge pull request #2866 from OnedgeLee/release/0.50.0\n\n🚀 Release 0.50.0",
          "timestamp": "2023-02-27T18:47:48+09:00",
          "tree_id": "a27b92d18ca4a2f79f6c9c0d7119297ae7107202",
          "url": "https://github.com/planetarium/libplanet/commit/880e08616aae6d40e9ff22e9f5c90e205e30f325"
        },
        "date": 1677492487019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 120064.44444444444,
            "unit": "ns",
            "range": "± 6815.717313451233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5866605.588942308,
            "unit": "ns",
            "range": "± 153542.89560961354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1826228.6733774038,
            "unit": "ns",
            "range": "± 4189.270679412149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1416989.048549107,
            "unit": "ns",
            "range": "± 17787.59860165446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3347236.4453125,
            "unit": "ns",
            "range": "± 53838.14785733002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021000.6723257211,
            "unit": "ns",
            "range": "± 27545.60897112891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 947297.2497888514,
            "unit": "ns",
            "range": "± 31541.011317767476"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5449215.798611111,
            "unit": "ns",
            "range": "± 330687.3574973176"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7081054.761904762,
            "unit": "ns",
            "range": "± 165830.4268709168"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30958826.530612245,
            "unit": "ns",
            "range": "± 1233053.0415354387"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7483719.3877551025,
            "unit": "ns",
            "range": "± 665452.0038395362"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35413809.67741936,
            "unit": "ns",
            "range": "± 1600775.5358882316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 116767.39130434782,
            "unit": "ns",
            "range": "± 10568.10574578006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222865.55555555556,
            "unit": "ns",
            "range": "± 14536.479962077825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201647.94520547945,
            "unit": "ns",
            "range": "± 9995.681145000144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4321056.25,
            "unit": "ns",
            "range": "± 81544.52337016059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11997007.692307692,
            "unit": "ns",
            "range": "± 139449.96391500943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23524.74226804124,
            "unit": "ns",
            "range": "± 2170.8308186726504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64326.041666666664,
            "unit": "ns",
            "range": "± 9045.187668375951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51435.416666666664,
            "unit": "ns",
            "range": "± 3689.2726188424126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115951.19047619047,
            "unit": "ns",
            "range": "± 8362.401425537757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7736.8421052631575,
            "unit": "ns",
            "range": "± 1106.5619202352254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28621.505376344085,
            "unit": "ns",
            "range": "± 2607.4662640014276"
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
          "id": "9eb4f5f6b97b725d67799ead74ada4116e7be725",
          "message": "Merge pull request #2867 from OnedgeLee/prepare/0.51.0\n\n🔧 Prepare 0.51.0",
          "timestamp": "2023-02-27T20:46:53-05:00",
          "tree_id": "785446742c97062ea6e87d33c23cd51b74123031",
          "url": "https://github.com/planetarium/libplanet/commit/9eb4f5f6b97b725d67799ead74ada4116e7be725"
        },
        "date": 1677549931462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 135443.15789473685,
            "unit": "ns",
            "range": "± 15995.59548838353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6150513.058035715,
            "unit": "ns",
            "range": "± 82660.09752945587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016793.3314732143,
            "unit": "ns",
            "range": "± 30145.33739733764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1529798.14453125,
            "unit": "ns",
            "range": "± 29407.77572404423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3300529.0457589286,
            "unit": "ns",
            "range": "± 33889.79702531109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1096942.4926757812,
            "unit": "ns",
            "range": "± 21381.443227162254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1028956.3943614131,
            "unit": "ns",
            "range": "± 24979.806482416454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6162523.429608586,
            "unit": "ns",
            "range": "± 368958.2692743328"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6945915,
            "unit": "ns",
            "range": "± 569321.7397114577"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32831955.555555556,
            "unit": "ns",
            "range": "± 1075565.6349619539"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7436151.063829787,
            "unit": "ns",
            "range": "± 524563.9942191173"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36657322.222222224,
            "unit": "ns",
            "range": "± 721918.8243070608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113387.23404255319,
            "unit": "ns",
            "range": "± 12588.43328147985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 225509.3023255814,
            "unit": "ns",
            "range": "± 19176.073498024605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221945.26315789475,
            "unit": "ns",
            "range": "± 26050.77598558799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4700972.7272727275,
            "unit": "ns",
            "range": "± 145878.59094279236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12335429.166666666,
            "unit": "ns",
            "range": "± 315547.92439593025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21913.82978723404,
            "unit": "ns",
            "range": "± 5680.765529660078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64396.93877551021,
            "unit": "ns",
            "range": "± 12564.591501694767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55173.913043478264,
            "unit": "ns",
            "range": "± 9975.485000908202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138509.5744680851,
            "unit": "ns",
            "range": "± 21539.12204133676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8908.888888888889,
            "unit": "ns",
            "range": "± 1956.2429276574999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23265.957446808512,
            "unit": "ns",
            "range": "± 5858.975344221142"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33357a816f1c352349e0ff237243d335181f5293",
          "message": "Merge pull request #2848 from planetarium/ci-tslib-account\n\nIntroduce @planetarium/account",
          "timestamp": "2023-02-28T11:11:34+09:00",
          "tree_id": "61e4d02d52755d15c297d1c2c1b2e61bbebc4737",
          "url": "https://github.com/planetarium/libplanet/commit/33357a816f1c352349e0ff237243d335181f5293"
        },
        "date": 1677551345131,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 116174.22680412371,
            "unit": "ns",
            "range": "± 8799.43509491892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4841137.349759615,
            "unit": "ns",
            "range": "± 11835.9090792452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521733.203125,
            "unit": "ns",
            "range": "± 3032.2031815221753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153499.5042067308,
            "unit": "ns",
            "range": "± 2664.6310168595733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634133.8216145835,
            "unit": "ns",
            "range": "± 3265.412037263097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824362.3046875,
            "unit": "ns",
            "range": "± 1448.5542242101224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773629.0178571428,
            "unit": "ns",
            "range": "± 2825.5981797767786"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4936029.6875,
            "unit": "ns",
            "range": "± 57781.1756171484"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6119986.363636363,
            "unit": "ns",
            "range": "± 143428.06491476766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26908400,
            "unit": "ns",
            "range": "± 410880.6091798444"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6449765.656565657,
            "unit": "ns",
            "range": "± 491451.12223209644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29471528.57142857,
            "unit": "ns",
            "range": "± 673803.246610505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107541.23711340207,
            "unit": "ns",
            "range": "± 13671.524181802419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203285.7142857143,
            "unit": "ns",
            "range": "± 11571.601537136132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198529.85074626867,
            "unit": "ns",
            "range": "± 9451.56736922303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3702957.6923076925,
            "unit": "ns",
            "range": "± 25467.870658879903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9324014.285714285,
            "unit": "ns",
            "range": "± 70472.86283105289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25226.88172043011,
            "unit": "ns",
            "range": "± 2031.8196912120452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61456.470588235294,
            "unit": "ns",
            "range": "± 3839.7807185289307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46451.57894736842,
            "unit": "ns",
            "range": "± 2965.972380393013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119143.87755102041,
            "unit": "ns",
            "range": "± 19936.269937889538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7688.541666666667,
            "unit": "ns",
            "range": "± 806.404598940868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23604.347826086956,
            "unit": "ns",
            "range": "± 2044.5001561938163"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eba004462bf0924b922a9e1535c24ec93ea0d424",
          "message": "Merge pull request #2869 from planetarium/ci-npm-account\n\nAdd `@planetarium/account` to npm package list for CI",
          "timestamp": "2023-02-28T12:33:27+09:00",
          "tree_id": "2a4d43b94c69ff6423629d51950f1e1b1596bd40",
          "url": "https://github.com/planetarium/libplanet/commit/eba004462bf0924b922a9e1535c24ec93ea0d424"
        },
        "date": 1677556309230,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 121179.78723404255,
            "unit": "ns",
            "range": "± 7828.052392218588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6084365.670955882,
            "unit": "ns",
            "range": "± 121791.50862839328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903237.1744791667,
            "unit": "ns",
            "range": "± 33453.25735424576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439647.4888392857,
            "unit": "ns",
            "range": "± 20051.46836610252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3330820.1293945312,
            "unit": "ns",
            "range": "± 100829.00790386711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047392.5846354166,
            "unit": "ns",
            "range": "± 15290.44571352193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946288.8732910156,
            "unit": "ns",
            "range": "± 17286.803924068667"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5658118.149671053,
            "unit": "ns",
            "range": "± 322360.03589024465"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6145969.47368421,
            "unit": "ns",
            "range": "± 363547.55815017386"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32510014.285714287,
            "unit": "ns",
            "range": "± 1897120.1368955083"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6899343.617021277,
            "unit": "ns",
            "range": "± 399028.3587514198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36641471.875,
            "unit": "ns",
            "range": "± 2371327.5773045053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114805.4945054945,
            "unit": "ns",
            "range": "± 12494.508683927803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224103.61445783134,
            "unit": "ns",
            "range": "± 11909.88978039897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208764.89361702127,
            "unit": "ns",
            "range": "± 13353.33478905404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4364630.120481928,
            "unit": "ns",
            "range": "± 231731.72395373636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11759114.285714285,
            "unit": "ns",
            "range": "± 217042.30529026888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25390.721649484534,
            "unit": "ns",
            "range": "± 2947.671484770747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62561.290322580644,
            "unit": "ns",
            "range": "± 6173.946526191728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47600,
            "unit": "ns",
            "range": "± 3605.5207973024117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121844.21052631579,
            "unit": "ns",
            "range": "± 20324.917710908627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7807.142857142857,
            "unit": "ns",
            "range": "± 1189.8410185753962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23211.702127659573,
            "unit": "ns",
            "range": "± 2774.2617494396645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "325cb55ec61088ef737620e8fe7d95f251db50fd",
          "message": "Merge pull request #2873 from moreal/poly-action-configurable",
          "timestamp": "2023-03-02T12:09:41+09:00",
          "tree_id": "27033c3c72b24f2483a6a0b1f313df7d500fbb50",
          "url": "https://github.com/planetarium/libplanet/commit/325cb55ec61088ef737620e8fe7d95f251db50fd"
        },
        "date": 1677727486154,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101623.07692307692,
            "unit": "ns",
            "range": "± 1616.6600581413966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4818767.942708333,
            "unit": "ns",
            "range": "± 16374.736064729292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1541641.1458333333,
            "unit": "ns",
            "range": "± 3804.129513367262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1192739.5963541667,
            "unit": "ns",
            "range": "± 3811.619865414034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661699.8046875,
            "unit": "ns",
            "range": "± 8102.375835241305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832285.3515625,
            "unit": "ns",
            "range": "± 1348.9131660781404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747273.1184895834,
            "unit": "ns",
            "range": "± 1670.3488986226102"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4674896.171875,
            "unit": "ns",
            "range": "± 30447.834557732054"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5746673.333333333,
            "unit": "ns",
            "range": "± 75391.28849510652"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26294996.774193548,
            "unit": "ns",
            "range": "± 743799.1442514891"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6245859.595959596,
            "unit": "ns",
            "range": "± 383250.78455374297"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29103053.57142857,
            "unit": "ns",
            "range": "± 781826.0242592305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101803.2258064516,
            "unit": "ns",
            "range": "± 10442.996942125372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198908.97435897434,
            "unit": "ns",
            "range": "± 10213.031984235744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174467.70833333334,
            "unit": "ns",
            "range": "± 10770.666741729758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3617146.6666666665,
            "unit": "ns",
            "range": "± 56551.30245647584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9111473.684210526,
            "unit": "ns",
            "range": "± 195365.8557740814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20814.285714285714,
            "unit": "ns",
            "range": "± 2417.0037684072495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58066.666666666664,
            "unit": "ns",
            "range": "± 5602.380446441197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42957.89473684211,
            "unit": "ns",
            "range": "± 3633.226657703673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112233.68421052632,
            "unit": "ns",
            "range": "± 19861.314962179007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6848.453608247422,
            "unit": "ns",
            "range": "± 1118.7896549826603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23770.408163265307,
            "unit": "ns",
            "range": "± 2956.1471575772853"
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
          "id": "ef8c2b41bdb649d104fde4663fc4c30ce9006948",
          "message": "Merge pull request #2872 from limebell/merge/pbft-to-main\n\nImplement PBFT consensus algorithm to replace PoW consensus algorithm",
          "timestamp": "2023-03-02T16:33:41+09:00",
          "tree_id": "fcdff2dec63ac9bd80e9c4b2f535fc3e4b2ec2c9",
          "url": "https://github.com/planetarium/libplanet/commit/ef8c2b41bdb649d104fde4663fc4c30ce9006948"
        },
        "date": 1677743491328,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422012,
            "unit": "ns",
            "range": "± 109792.18227582914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2416656.8181818184,
            "unit": "ns",
            "range": "± 87835.67214559525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2166176.8421052634,
            "unit": "ns",
            "range": "± 124989.02969106169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4878358.064516129,
            "unit": "ns",
            "range": "± 145290.11614511968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45684.06593406593,
            "unit": "ns",
            "range": "± 2584.708011887514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7392916.666666667,
            "unit": "ns",
            "range": "± 59245.58653443752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18397264.285714287,
            "unit": "ns",
            "range": "± 52074.31977683223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46984892.85714286,
            "unit": "ns",
            "range": "± 169876.01118411092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 93393166.66666667,
            "unit": "ns",
            "range": "± 280582.7295027941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 186779946.66666666,
            "unit": "ns",
            "range": "± 457250.6031655268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4926164.84375,
            "unit": "ns",
            "range": "± 8975.183922268761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1539031.23046875,
            "unit": "ns",
            "range": "± 2212.5616572104063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1145061.9010416667,
            "unit": "ns",
            "range": "± 1024.0364715546864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582277.0052083335,
            "unit": "ns",
            "range": "± 4909.369795867232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838204.3795072115,
            "unit": "ns",
            "range": "± 1070.784407743184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734477.7083333334,
            "unit": "ns",
            "range": "± 808.0753978768838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3098340.5405405406,
            "unit": "ns",
            "range": "± 93845.52750681853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4848353.488372093,
            "unit": "ns",
            "range": "± 177942.4684297564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21875707.692307692,
            "unit": "ns",
            "range": "± 219918.05845791163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5921638.461538462,
            "unit": "ns",
            "range": "± 79010.46912130842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25014814.285714287,
            "unit": "ns",
            "range": "± 221394.56548518443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 187340.27777777778,
            "unit": "ns",
            "range": "± 9206.97316447323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190996.2962962963,
            "unit": "ns",
            "range": "± 7950.031754130554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175467.56756756757,
            "unit": "ns",
            "range": "± 5955.532164581379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10651693.333333334,
            "unit": "ns",
            "range": "± 40397.88655480925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8452200,
            "unit": "ns",
            "range": "± 51975.85978124845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20715.957446808512,
            "unit": "ns",
            "range": "± 1895.512708550719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53784.09090909091,
            "unit": "ns",
            "range": "± 3409.1454541090984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42520.21276595745,
            "unit": "ns",
            "range": "± 2591.6150893695967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94703.2967032967,
            "unit": "ns",
            "range": "± 10997.812414288484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5745.652173913043,
            "unit": "ns",
            "range": "± 687.7919829086873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20719.14893617021,
            "unit": "ns",
            "range": "± 1394.3261829504684"
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
          "id": "1db01f804e449cacb42f6e34661eded415609449",
          "message": "Merge pull request #2886 from dahlia/main",
          "timestamp": "2023-03-06T15:33:21+09:00",
          "tree_id": "dbf16bc8ee38ad7e79c9b24faa4ebe0f4904f112",
          "url": "https://github.com/planetarium/libplanet/commit/1db01f804e449cacb42f6e34661eded415609449"
        },
        "date": 1678085433941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1389322.9166666667,
            "unit": "ns",
            "range": "± 105602.3339845406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2555990.909090909,
            "unit": "ns",
            "range": "± 79075.66536092332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2116713.5802469137,
            "unit": "ns",
            "range": "± 106805.26643509489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5330636.923076923,
            "unit": "ns",
            "range": "± 248811.5982583702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48437.34939759036,
            "unit": "ns",
            "range": "± 2585.640970840905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6928100,
            "unit": "ns",
            "range": "± 49614.12640026566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19547986.666666668,
            "unit": "ns",
            "range": "± 268022.31481370213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48642906.666666664,
            "unit": "ns",
            "range": "± 892724.2595134343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 97952071.42857143,
            "unit": "ns",
            "range": "± 943092.6632248665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 192007366.66666666,
            "unit": "ns",
            "range": "± 2433487.8976677153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4754494.479166667,
            "unit": "ns",
            "range": "± 22881.035980769007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518934.3359375,
            "unit": "ns",
            "range": "± 5179.832202299794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163171.4192708333,
            "unit": "ns",
            "range": "± 5632.463209734207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626389.3619791665,
            "unit": "ns",
            "range": "± 15044.959314322663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817327.5809151785,
            "unit": "ns",
            "range": "± 1912.100268367755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754882.9552283654,
            "unit": "ns",
            "range": "± 734.204110482185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3144591.111111111,
            "unit": "ns",
            "range": "± 117441.38155271378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4799306.25,
            "unit": "ns",
            "range": "± 146944.4440497727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22779226.19047619,
            "unit": "ns",
            "range": "± 538050.3061097186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5988841.071428572,
            "unit": "ns",
            "range": "± 254897.83677300683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26115692.592592593,
            "unit": "ns",
            "range": "± 645236.053362182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185467.3469387755,
            "unit": "ns",
            "range": "± 7400.264290187603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184518.3673469388,
            "unit": "ns",
            "range": "± 7338.218263237443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152203.7037037037,
            "unit": "ns",
            "range": "± 4214.396706663909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10938543.47826087,
            "unit": "ns",
            "range": "± 270655.00654739415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8730263.043478262,
            "unit": "ns",
            "range": "± 217512.6314082343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21078.350515463917,
            "unit": "ns",
            "range": "± 2718.655718829762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54364.83516483517,
            "unit": "ns",
            "range": "± 4689.666503811537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40597.142857142855,
            "unit": "ns",
            "range": "± 1982.3841178970008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103602.04081632652,
            "unit": "ns",
            "range": "± 18134.486025829276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6600,
            "unit": "ns",
            "range": "± 804.7729956131014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21603.225806451614,
            "unit": "ns",
            "range": "± 2069.365141718969"
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
          "id": "d3bae116896d64908c86e567a069fbb85daae677",
          "message": "Merge pull request #2888 from greymistcube/port/0.50.1-to-main\n\n🔀 Port 0.50.1 to main",
          "timestamp": "2023-03-06T05:42:17-05:00",
          "tree_id": "a8dd616ebe8ec9898d172cc4ff3b65e747c211da",
          "url": "https://github.com/planetarium/libplanet/commit/d3bae116896d64908c86e567a069fbb85daae677"
        },
        "date": 1678100329683,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1293812.2448979593,
            "unit": "ns",
            "range": "± 113020.46641161136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2456850,
            "unit": "ns",
            "range": "± 91764.75104790358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057259.5959595959,
            "unit": "ns",
            "range": "± 163398.18206417072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5173474.025974026,
            "unit": "ns",
            "range": "± 263528.69583216036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45648.717948717946,
            "unit": "ns",
            "range": "± 2143.5341365927898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6885206.666666667,
            "unit": "ns",
            "range": "± 41153.692191009795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18701680,
            "unit": "ns",
            "range": "± 320352.2396184728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 46234833.333333336,
            "unit": "ns",
            "range": "± 795347.5659032568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 91445768.42105263,
            "unit": "ns",
            "range": "± 2006614.5779653164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 183653422.2222222,
            "unit": "ns",
            "range": "± 4501797.716069688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4651771.707589285,
            "unit": "ns",
            "range": "± 27127.95417813268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1498650.5580357143,
            "unit": "ns",
            "range": "± 6462.187989329778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130329.7572544643,
            "unit": "ns",
            "range": "± 3792.5882766243963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577810.8072916665,
            "unit": "ns",
            "range": "± 4475.985774004263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823827.0786830357,
            "unit": "ns",
            "range": "± 3190.695027434652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751067.8515625,
            "unit": "ns",
            "range": "± 2687.7053458506807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2956292.3076923075,
            "unit": "ns",
            "range": "± 102515.1988336502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4649562.5,
            "unit": "ns",
            "range": "± 144494.16050261282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21271564.285714287,
            "unit": "ns",
            "range": "± 312211.4584383792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5597647.826086956,
            "unit": "ns",
            "range": "± 135683.8533622962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24533485.714285713,
            "unit": "ns",
            "range": "± 564528.894996274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168990.9090909091,
            "unit": "ns",
            "range": "± 7953.745654097189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167582.5,
            "unit": "ns",
            "range": "± 8789.677130056196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146805.88235294117,
            "unit": "ns",
            "range": "± 4534.376518329966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10179640,
            "unit": "ns",
            "range": "± 188043.07561224978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8328973.333333333,
            "unit": "ns",
            "range": "± 138546.73510957885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17842.85714285714,
            "unit": "ns",
            "range": "± 1835.0538630820542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48777.41935483871,
            "unit": "ns",
            "range": "± 4359.126583643793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37474.28571428572,
            "unit": "ns",
            "range": "± 1219.5329041078312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93859.1836734694,
            "unit": "ns",
            "range": "± 17793.204058486688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5141.836734693878,
            "unit": "ns",
            "range": "± 643.111551688353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17183.516483516483,
            "unit": "ns",
            "range": "± 1446.548669247963"
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
          "id": "0e58f6003ecd29e6647380dc70da5c15c1c8796a",
          "message": "Merge pull request #2890 from greymistcube/refactor/default-store\n\n🧹 Minor cleanup for `DefaultStore` code comprehension",
          "timestamp": "2023-03-06T22:08:06-05:00",
          "tree_id": "f2fba8cafa5a5235c451619b662db2f49525c5e3",
          "url": "https://github.com/planetarium/libplanet/commit/0e58f6003ecd29e6647380dc70da5c15c1c8796a"
        },
        "date": 1678159579805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588306,
            "unit": "ns",
            "range": "± 100237.48045960098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2921784.375,
            "unit": "ns",
            "range": "± 88204.05633776421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692814.285714286,
            "unit": "ns",
            "range": "± 106508.18826112228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6209786.486486486,
            "unit": "ns",
            "range": "± 310273.706974247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54556.71641791045,
            "unit": "ns",
            "range": "± 2541.2490296080673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8386630.769230769,
            "unit": "ns",
            "range": "± 62552.44978703052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23604670,
            "unit": "ns",
            "range": "± 534433.6353857034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58268724,
            "unit": "ns",
            "range": "± 1555342.9831498046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 115359945.45454545,
            "unit": "ns",
            "range": "± 2751053.0833408698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 228208942.85714287,
            "unit": "ns",
            "range": "± 3318665.83241711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5986815.677083333,
            "unit": "ns",
            "range": "± 45458.0722501486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920993.931361607,
            "unit": "ns",
            "range": "± 8678.700896886952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414627.91015625,
            "unit": "ns",
            "range": "± 5158.418596978828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3297405.46875,
            "unit": "ns",
            "range": "± 9549.388440354342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011183.4798177084,
            "unit": "ns",
            "range": "± 5441.308084576799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932353.8434709822,
            "unit": "ns",
            "range": "± 4496.50959863471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3656948,
            "unit": "ns",
            "range": "± 95003.37765925308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5781740,
            "unit": "ns",
            "range": "± 171639.93858435564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26984080,
            "unit": "ns",
            "range": "± 447507.45596342545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7116779.166666667,
            "unit": "ns",
            "range": "± 183171.6277136701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30526021.42857143,
            "unit": "ns",
            "range": "± 534512.8424427833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212800,
            "unit": "ns",
            "range": "± 7130.100513550517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 208836,
            "unit": "ns",
            "range": "± 8426.216620204601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187236.36363636365,
            "unit": "ns",
            "range": "± 6613.69582879771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12842614.285714285,
            "unit": "ns",
            "range": "± 174418.63369554235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10349206.666666666,
            "unit": "ns",
            "range": "± 179627.71209471257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21530.85106382979,
            "unit": "ns",
            "range": "± 1776.6118893941048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57972.72727272727,
            "unit": "ns",
            "range": "± 4080.3067067705365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46167.74193548387,
            "unit": "ns",
            "range": "± 1409.5831763974752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111046.39175257731,
            "unit": "ns",
            "range": "± 17628.36292890706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7767.01030927835,
            "unit": "ns",
            "range": "± 990.1306363182308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24205.208333333332,
            "unit": "ns",
            "range": "± 2123.149090714901"
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
          "id": "d202a1e5cac5ef0c25f58380942b14d57cd83907",
          "message": "Merge pull request #2893 from dahlia/main",
          "timestamp": "2023-03-07T12:27:05+09:00",
          "tree_id": "7c053e7c5c4fdd2c803cb7b8957ed326bd1bc7bd",
          "url": "https://github.com/planetarium/libplanet/commit/d202a1e5cac5ef0c25f58380942b14d57cd83907"
        },
        "date": 1678160574563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410030,
            "unit": "ns",
            "range": "± 131349.171864519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436526.6666666665,
            "unit": "ns",
            "range": "± 42546.855963525115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2271603.846153846,
            "unit": "ns",
            "range": "± 58356.15121489237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5227636.111111111,
            "unit": "ns",
            "range": "± 255746.62764318267"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46872.602739726026,
            "unit": "ns",
            "range": "± 2324.1641432980564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7087922.222222222,
            "unit": "ns",
            "range": "± 150412.07146313114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19769786.666666668,
            "unit": "ns",
            "range": "± 194070.80028641486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49436316.666666664,
            "unit": "ns",
            "range": "± 665771.0864282179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98349626.66666667,
            "unit": "ns",
            "range": "± 1699290.7379537022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194640750,
            "unit": "ns",
            "range": "± 3585046.1536778016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4806804.479166667,
            "unit": "ns",
            "range": "± 16944.108428833195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522276.7427884615,
            "unit": "ns",
            "range": "± 4326.649455643298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152950.2734375,
            "unit": "ns",
            "range": "± 3107.9408371476156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604739.2708333335,
            "unit": "ns",
            "range": "± 9352.694229888728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815539.6833147322,
            "unit": "ns",
            "range": "± 1396.2435896163377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746238.1770833334,
            "unit": "ns",
            "range": "± 1612.8818057692333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3088702.0408163266,
            "unit": "ns",
            "range": "± 123258.53332493847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4965690.625,
            "unit": "ns",
            "range": "± 153720.56625552534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23778489.47368421,
            "unit": "ns",
            "range": "± 523141.3850690173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5946893.75,
            "unit": "ns",
            "range": "± 164745.60043565117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26477736,
            "unit": "ns",
            "range": "± 699381.951487645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188722.22222222222,
            "unit": "ns",
            "range": "± 3852.242365406162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180957.40740740742,
            "unit": "ns",
            "range": "± 7174.373994171616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157984.12698412698,
            "unit": "ns",
            "range": "± 6765.71542957118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11091093.333333334,
            "unit": "ns",
            "range": "± 197460.5402412871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8737306.25,
            "unit": "ns",
            "range": "± 144623.2321989336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21652.083333333332,
            "unit": "ns",
            "range": "± 1645.3429760302042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55042.26804123711,
            "unit": "ns",
            "range": "± 6603.594902455694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39646.875,
            "unit": "ns",
            "range": "± 2428.72949784125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95727.95698924731,
            "unit": "ns",
            "range": "± 11673.207576693081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6315.4639175257735,
            "unit": "ns",
            "range": "± 826.5566382823745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20371.739130434784,
            "unit": "ns",
            "range": "± 1603.521268543627"
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
          "id": "bd22f3d5e9a07d3ea6ef42c9f00865667f0a60d9",
          "message": "Merge pull request #2870 from colibrishin/pbft-gossip-and-kdm\n\nfix/pbft: parallel replying / task-switching between kademlia",
          "timestamp": "2023-03-07T15:26:28+09:00",
          "tree_id": "51d0c2a2057e65c5ba3ea2856fe3f93c9cb1e99e",
          "url": "https://github.com/planetarium/libplanet/commit/bd22f3d5e9a07d3ea6ef42c9f00865667f0a60d9"
        },
        "date": 1678171283736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1298059.793814433,
            "unit": "ns",
            "range": "± 97077.93975696563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2357171.9298245613,
            "unit": "ns",
            "range": "± 100578.87586080667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2056363.2653061224,
            "unit": "ns",
            "range": "± 148589.51371178296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4794587.037037037,
            "unit": "ns",
            "range": "± 201935.17084702576"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42414.705882352944,
            "unit": "ns",
            "range": "± 2011.9245042275195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6995928.571428572,
            "unit": "ns",
            "range": "± 20733.266786696968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17657257.14285714,
            "unit": "ns",
            "range": "± 250692.5997321013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45040821.428571425,
            "unit": "ns",
            "range": "± 501664.88228784676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89501183.33333333,
            "unit": "ns",
            "range": "± 642301.7611535504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179952769.23076922,
            "unit": "ns",
            "range": "± 1729288.3123723739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4787967.552083333,
            "unit": "ns",
            "range": "± 18103.485944427288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513383.8040865385,
            "unit": "ns",
            "range": "± 3509.4803066755826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140503.892299107,
            "unit": "ns",
            "range": "± 1151.2825883876721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2531084.7098214286,
            "unit": "ns",
            "range": "± 7603.6462085250905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841162.8450520834,
            "unit": "ns",
            "range": "± 9978.07725538443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716910.1920572916,
            "unit": "ns",
            "range": "± 721.5110723632006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2879283.9285714286,
            "unit": "ns",
            "range": "± 118407.5654474612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4466521.428571428,
            "unit": "ns",
            "range": "± 28474.473820259776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 20941850,
            "unit": "ns",
            "range": "± 210873.68712828285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5570575,
            "unit": "ns",
            "range": "± 127650.5628041276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24262046.666666668,
            "unit": "ns",
            "range": "± 322007.3487774257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169867.74193548388,
            "unit": "ns",
            "range": "± 4971.745977472716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171179.24528301886,
            "unit": "ns",
            "range": "± 6725.878795614342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142521.73913043478,
            "unit": "ns",
            "range": "± 3475.362181484128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10134800,
            "unit": "ns",
            "range": "± 55936.667484135745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8191966.666666667,
            "unit": "ns",
            "range": "± 109103.68375780815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15350,
            "unit": "ns",
            "range": "± 1250.1063784521734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43826.13636363636,
            "unit": "ns",
            "range": "± 2911.3923800110874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33748.57142857143,
            "unit": "ns",
            "range": "± 1106.4972365323745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72279.45205479451,
            "unit": "ns",
            "range": "± 1757.8363360890246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3940.816326530612,
            "unit": "ns",
            "range": "± 639.722351935391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15956.989247311827,
            "unit": "ns",
            "range": "± 1138.7825163078066"
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
          "id": "443ec1670ccb3b5160bef67f174f4e8797ff5758",
          "message": "Merge pull request #2895 from greymistcube/release/0.51.0\n\n🚀 Release 0.51.0",
          "timestamp": "2023-03-07T04:01:48-05:00",
          "tree_id": "067f25104ac8b8f8d254ba7c54539799ac1beaa1",
          "url": "https://github.com/planetarium/libplanet/commit/443ec1670ccb3b5160bef67f174f4e8797ff5758"
        },
        "date": 1678181122537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737742.4242424243,
            "unit": "ns",
            "range": "± 181757.58923093873"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3273742.2680412373,
            "unit": "ns",
            "range": "± 263009.9553862979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2652780.612244898,
            "unit": "ns",
            "range": "± 280980.7626896958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6624490.425531914,
            "unit": "ns",
            "range": "± 559849.8589184423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66533.33333333333,
            "unit": "ns",
            "range": "± 13181.090979895776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8716523.469387755,
            "unit": "ns",
            "range": "± 838164.6402006499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24732407.575757574,
            "unit": "ns",
            "range": "± 1165501.5326275248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 63129161.05263158,
            "unit": "ns",
            "range": "± 3609975.00525604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 134400580.6451613,
            "unit": "ns",
            "range": "± 4006519.9554741895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 267155393.65079364,
            "unit": "ns",
            "range": "± 12126852.159100017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873505.974264706,
            "unit": "ns",
            "range": "± 118321.58296067224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932645.3480113635,
            "unit": "ns",
            "range": "± 46769.35228235893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1443997.418478261,
            "unit": "ns",
            "range": "± 35510.950055175614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3187063.251201923,
            "unit": "ns",
            "range": "± 48119.701488025996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040147.3958333334,
            "unit": "ns",
            "range": "± 23630.60348367569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 973238.53515625,
            "unit": "ns",
            "range": "± 17749.133023163675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3899345.3608247424,
            "unit": "ns",
            "range": "± 368697.59882496594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6046957.575757576,
            "unit": "ns",
            "range": "± 418309.8224636535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31163565.217391305,
            "unit": "ns",
            "range": "± 1195668.220465005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7358584,
            "unit": "ns",
            "range": "± 835525.0379458077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 35550848,
            "unit": "ns",
            "range": "± 1790169.3114369968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237716.49484536084,
            "unit": "ns",
            "range": "± 31029.796434275515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233787,
            "unit": "ns",
            "range": "± 29455.141908476435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207875.25773195876,
            "unit": "ns",
            "range": "± 33313.12313653533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13509160.638297873,
            "unit": "ns",
            "range": "± 953849.7519495465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10763543.75,
            "unit": "ns",
            "range": "± 830931.8218675376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31585.714285714286,
            "unit": "ns",
            "range": "± 10997.188019211862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70147.95918367348,
            "unit": "ns",
            "range": "± 15448.552660274878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47981.720430107525,
            "unit": "ns",
            "range": "± 10798.560151972748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139687.36842105264,
            "unit": "ns",
            "range": "± 25694.11407930363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6179.787234042553,
            "unit": "ns",
            "range": "± 1109.933620725097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31658.58585858586,
            "unit": "ns",
            "range": "± 9980.665084593227"
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
          "id": "4d42793b3feb598dbae2547d6be88b906c1b17d4",
          "message": "Merge pull request #2897 from greymistcube/prepare/0.52.0\n\n🔧 Prepare 0.52.0",
          "timestamp": "2023-03-07T05:04:50-05:00",
          "tree_id": "d33d593feb62e920fbe578c16b4ea720826d64e2",
          "url": "https://github.com/planetarium/libplanet/commit/4d42793b3feb598dbae2547d6be88b906c1b17d4"
        },
        "date": 1678184562434,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1371748.4536082475,
            "unit": "ns",
            "range": "± 137147.10100943473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562816.6666666665,
            "unit": "ns",
            "range": "± 114442.35787869875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155744.897959184,
            "unit": "ns",
            "range": "± 146868.0157347602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5010915.625,
            "unit": "ns",
            "range": "± 153569.961170114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47655.05617977528,
            "unit": "ns",
            "range": "± 2645.7088428054353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7430376,
            "unit": "ns",
            "range": "± 189221.01336796608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20247014.285714287,
            "unit": "ns",
            "range": "± 128022.83364332293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50224753.333333336,
            "unit": "ns",
            "range": "± 534178.5052993143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101166573.33333333,
            "unit": "ns",
            "range": "± 744044.5718855698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 201742746.66666666,
            "unit": "ns",
            "range": "± 3295273.348485387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4858782.1875,
            "unit": "ns",
            "range": "± 20243.841738434327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521074.6549479167,
            "unit": "ns",
            "range": "± 6701.653731707444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160617.0052083333,
            "unit": "ns",
            "range": "± 5456.446030826701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680600.030048077,
            "unit": "ns",
            "range": "± 4513.5147361649715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821488.1901041666,
            "unit": "ns",
            "range": "± 1379.1256979986215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755351.2630208334,
            "unit": "ns",
            "range": "± 1419.4819701621238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3092078.723404255,
            "unit": "ns",
            "range": "± 120145.52758357207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5136745.833333333,
            "unit": "ns",
            "range": "± 129695.71740161213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23277950,
            "unit": "ns",
            "range": "± 410942.09726881515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6147594.594594595,
            "unit": "ns",
            "range": "± 189444.34677637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26864894.11764706,
            "unit": "ns",
            "range": "± 533402.4283673964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175454.71698113208,
            "unit": "ns",
            "range": "± 7246.12803868213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183776.62337662338,
            "unit": "ns",
            "range": "± 9402.629756782439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162522.22222222222,
            "unit": "ns",
            "range": "± 10747.847962623233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10952892.857142856,
            "unit": "ns",
            "range": "± 169019.72786214456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8966742.857142856,
            "unit": "ns",
            "range": "± 123463.59609390762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21234.736842105263,
            "unit": "ns",
            "range": "± 2068.135578349913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54948.958333333336,
            "unit": "ns",
            "range": "± 5811.0239117997735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43228.125,
            "unit": "ns",
            "range": "± 3346.8194839122616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93882.41758241758,
            "unit": "ns",
            "range": "± 15091.201214295505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5936.458333333333,
            "unit": "ns",
            "range": "± 721.6384561562035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19682.291666666668,
            "unit": "ns",
            "range": "± 2097.416696378098"
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
          "id": "7c53382e1bb7413e152fd11af44b6b5909bdbafd",
          "message": "Merge pull request #2903 from colibrishin/benchmark/spliting-merged-fix\n\nci/bench: permission fix for merged actions",
          "timestamp": "2023-03-09T18:01:12+09:00",
          "tree_id": "17d9eee756eea756c40af48ad2cd631c3c8e88a8",
          "url": "https://github.com/planetarium/libplanet/commit/7c53382e1bb7413e152fd11af44b6b5909bdbafd"
        },
        "date": 1678353659901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1578857.471264368,
            "unit": "ns",
            "range": "± 85651.13207710265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989514,
            "unit": "ns",
            "range": "± 79366.16554510703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2558769.879518072,
            "unit": "ns",
            "range": "± 135370.1652605486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5955329.0322580645,
            "unit": "ns",
            "range": "± 157304.9484145331"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55991.397849462366,
            "unit": "ns",
            "range": "± 3353.9935934312603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8765153.125,
            "unit": "ns",
            "range": "± 270213.9391170358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23497541.17647059,
            "unit": "ns",
            "range": "± 449724.0001640222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 60415773.333333336,
            "unit": "ns",
            "range": "± 515276.7750950754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 120441361.53846154,
            "unit": "ns",
            "range": "± 1914040.234921261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 242206716.66666666,
            "unit": "ns",
            "range": "± 1637854.941314364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5851829.947916667,
            "unit": "ns",
            "range": "± 104808.19553526837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886316.0714285714,
            "unit": "ns",
            "range": "± 17179.238637865627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410210.3290264423,
            "unit": "ns",
            "range": "± 10422.37133563074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3150244.245793269,
            "unit": "ns",
            "range": "± 13313.79715084386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992093.1852921195,
            "unit": "ns",
            "range": "± 25074.15161230936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 931933.1868489584,
            "unit": "ns",
            "range": "± 19722.78339323805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3950310,
            "unit": "ns",
            "range": "± 87029.26247139975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6090506.25,
            "unit": "ns",
            "range": "± 99578.46466480591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28155200,
            "unit": "ns",
            "range": "± 250693.1253084597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7436035.294117647,
            "unit": "ns",
            "range": "± 145976.87291646778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32235026.315789472,
            "unit": "ns",
            "range": "± 651657.7099487679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219064.70588235295,
            "unit": "ns",
            "range": "± 10426.39825199568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223021.81818181818,
            "unit": "ns",
            "range": "± 9423.192250429374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204154.43037974683,
            "unit": "ns",
            "range": "± 10630.577540192236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13523293.75,
            "unit": "ns",
            "range": "± 248277.44687143856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11233300,
            "unit": "ns",
            "range": "± 253457.1301859651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27771.27659574468,
            "unit": "ns",
            "range": "± 2541.6793339543547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64279.77528089887,
            "unit": "ns",
            "range": "± 3695.2727718016145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49810,
            "unit": "ns",
            "range": "± 3431.9074527214375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113811.94029850746,
            "unit": "ns",
            "range": "± 4933.543885394047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8351.578947368422,
            "unit": "ns",
            "range": "± 1011.7252126615459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27324.21052631579,
            "unit": "ns",
            "range": "± 2439.3370127127055"
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
          "id": "a12c306d1b66ab35a22a4ee7ea336e2a4d48aff6",
          "message": "Merge pull request #2908 from colibrishin/benchmark/fix/0.47-maintenance\n\nci/bench: cherrypick of bench pr update to 0.47-maintenance",
          "timestamp": "2023-03-10T11:10:19+09:00",
          "tree_id": "970206c732fb48064b1f83e0afacb02eb4462694",
          "url": "https://github.com/planetarium/libplanet/commit/a12c306d1b66ab35a22a4ee7ea336e2a4d48aff6"
        },
        "date": 1678415096411,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102540,
            "unit": "ns",
            "range": "± 3377.1028307429083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4709448.660714285,
            "unit": "ns",
            "range": "± 21765.409466921334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1477843.5546875,
            "unit": "ns",
            "range": "± 6660.661880304538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1135543.6328125,
            "unit": "ns",
            "range": "± 6163.2855541911285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560792.6302083335,
            "unit": "ns",
            "range": "± 6716.235091551648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818353.3658854166,
            "unit": "ns",
            "range": "± 1935.7958464799822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774064.4596354166,
            "unit": "ns",
            "range": "± 3763.582169665754"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4543735.208333333,
            "unit": "ns",
            "range": "± 53385.33028132529"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5743316,
            "unit": "ns",
            "range": "± 148774.07558666487"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23601314.814814813,
            "unit": "ns",
            "range": "± 594669.9742156301"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6232092.857142857,
            "unit": "ns",
            "range": "± 144597.4431704398"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27253050,
            "unit": "ns",
            "range": "± 855014.1016912581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88344.73684210527,
            "unit": "ns",
            "range": "± 9668.014476580644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187379.16666666666,
            "unit": "ns",
            "range": "± 13103.763353902868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162174.35897435897,
            "unit": "ns",
            "range": "± 5503.4304110072035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3424796.153846154,
            "unit": "ns",
            "range": "± 47058.308075985464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8885586.956521738,
            "unit": "ns",
            "range": "± 218179.39304482244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20629.79797979798,
            "unit": "ns",
            "range": "± 3275.2934063297134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48363.26530612245,
            "unit": "ns",
            "range": "± 6901.970251425851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36618.91891891892,
            "unit": "ns",
            "range": "± 1176.5858890681777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84367.85714285714,
            "unit": "ns",
            "range": "± 10075.500055924585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4541.666666666667,
            "unit": "ns",
            "range": "± 600.993329793385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18450,
            "unit": "ns",
            "range": "± 1949.0487958979397"
          }
        ]
      }
    ]
  }
}