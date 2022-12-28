window.BENCHMARK_DATA = {
  "lastUpdate": 1672242246680,
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
      }
    ]
  }
}