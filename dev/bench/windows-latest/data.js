window.BENCHMARK_DATA = {
  "lastUpdate": 1672235106302,
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
      }
    ]
  }
}