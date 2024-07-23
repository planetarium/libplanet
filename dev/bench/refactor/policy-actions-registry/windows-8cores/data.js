window.BENCHMARK_DATA = {
  "lastUpdate": 1721714556374,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721714253198,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008936.7346938775,
            "unit": "ns",
            "range": "± 101093.11379747432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1726934,
            "unit": "ns",
            "range": "± 64453.02231636842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1558475.5319148935,
            "unit": "ns",
            "range": "± 124223.59712650151"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6832934.375,
            "unit": "ns",
            "range": "± 205878.19701476014"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29980.76923076923,
            "unit": "ns",
            "range": "± 820.2532441968057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9392473.333333334,
            "unit": "ns",
            "range": "± 105280.26179588234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23229542.85714286,
            "unit": "ns",
            "range": "± 168215.33230350324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57956740,
            "unit": "ns",
            "range": "± 236543.22709753134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116036463.33333333,
            "unit": "ns",
            "range": "± 383245.2121901416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228879771.42857143,
            "unit": "ns",
            "range": "± 732502.668337037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3309124.5833333335,
            "unit": "ns",
            "range": "± 6283.09525937283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077745.01953125,
            "unit": "ns",
            "range": "± 3324.1932397115456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730838.8253348215,
            "unit": "ns",
            "range": "± 1549.6439322295944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924660.8816964286,
            "unit": "ns",
            "range": "± 2342.383121835788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625796.5625,
            "unit": "ns",
            "range": "± 2189.0173795120063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568732.2135416666,
            "unit": "ns",
            "range": "± 1833.7558936761347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2088670,
            "unit": "ns",
            "range": "± 43812.0684837818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2202601.282051282,
            "unit": "ns",
            "range": "± 62975.307908797295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2689752.1739130435,
            "unit": "ns",
            "range": "± 67830.68405673603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2256068.9655172415,
            "unit": "ns",
            "range": "± 65007.44519695019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2898081.25,
            "unit": "ns",
            "range": "± 55095.374503370665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173096.61016949153,
            "unit": "ns",
            "range": "± 6934.818847587896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167118.5185185185,
            "unit": "ns",
            "range": "± 6918.694229352331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145005.26315789475,
            "unit": "ns",
            "range": "± 3103.666950239941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724580,
            "unit": "ns",
            "range": "± 38966.36278344989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515780,
            "unit": "ns",
            "range": "± 55297.50256090852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10326.595744680852,
            "unit": "ns",
            "range": "± 1296.8261945636464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50012.64367816092,
            "unit": "ns",
            "range": "± 2674.287759894435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43597.95918367347,
            "unit": "ns",
            "range": "± 1700.182563226467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51396.907216494845,
            "unit": "ns",
            "range": "± 10205.31370586184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2291.3978494623657,
            "unit": "ns",
            "range": "± 340.6055713177873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9334.09090909091,
            "unit": "ns",
            "range": "± 839.5245457429527"
          }
        ]
      }
    ]
  }
}