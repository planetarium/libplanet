window.BENCHMARK_DATA = {
  "lastUpdate": 1700827987415,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "5cc74a89fb99e1bdb908452acd61ba8458802aeb",
          "message": "fix: Fix AccountMetrics to initialize",
          "timestamp": "2023-11-24T21:00:19+09:00",
          "tree_id": "73552d92c9b5a98233efa35f2a153f97611fae00",
          "url": "https://github.com/planetarium/libplanet/commit/5cc74a89fb99e1bdb908452acd61ba8458802aeb"
        },
        "date": 1700827932957,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961704,
            "unit": "ns",
            "range": "± 95565.31947766767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1751645.1612903227,
            "unit": "ns",
            "range": "± 98780.35638655156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1341092.5531914893,
            "unit": "ns",
            "range": "± 109546.51316267118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5049400,
            "unit": "ns",
            "range": "± 243502.9095442634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34436.619718309856,
            "unit": "ns",
            "range": "± 1699.4317904707962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4982058.333333333,
            "unit": "ns",
            "range": "± 15514.008820964673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13025000,
            "unit": "ns",
            "range": "± 161861.39844846365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32680353.846153848,
            "unit": "ns",
            "range": "± 258461.58842719297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65217042.85714286,
            "unit": "ns",
            "range": "± 290720.2242555698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129142553.33333333,
            "unit": "ns",
            "range": "± 2054449.6742668676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3128456.5569196427,
            "unit": "ns",
            "range": "± 8426.449033589288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1036338.9787946428,
            "unit": "ns",
            "range": "± 7656.868270832757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 685189.6484375,
            "unit": "ns",
            "range": "± 7667.32998570941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958165.4296875,
            "unit": "ns",
            "range": "± 5418.001032591761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609148.1794084822,
            "unit": "ns",
            "range": "± 1744.4659364324223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579282.3697916666,
            "unit": "ns",
            "range": "± 1825.8486918247643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116855.263157895,
            "unit": "ns",
            "range": "± 69932.19379017974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241109.090909091,
            "unit": "ns",
            "range": "± 43086.37956357094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2737170.588235294,
            "unit": "ns",
            "range": "± 80487.79515765395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2610071.0843373495,
            "unit": "ns",
            "range": "± 138698.40902433972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5899411.428571428,
            "unit": "ns",
            "range": "± 183604.15664176684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176881.0344827586,
            "unit": "ns",
            "range": "± 8937.239966551606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169543.58974358975,
            "unit": "ns",
            "range": "± 8490.49261636007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142561.70212765958,
            "unit": "ns",
            "range": "± 5470.933200401577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2737153.3333333335,
            "unit": "ns",
            "range": "± 40910.143112971506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2542666.6666666665,
            "unit": "ns",
            "range": "± 44230.3978643432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12336.734693877552,
            "unit": "ns",
            "range": "± 2792.234731333739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54209.375,
            "unit": "ns",
            "range": "± 6083.680986220864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45415.95744680851,
            "unit": "ns",
            "range": "± 2822.425678002376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56066.666666666664,
            "unit": "ns",
            "range": "± 16586.360267966433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2587.3684210526317,
            "unit": "ns",
            "range": "± 458.31376998527844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10690.20618556701,
            "unit": "ns",
            "range": "± 1795.4606995730485"
          }
        ]
      }
    ]
  }
}