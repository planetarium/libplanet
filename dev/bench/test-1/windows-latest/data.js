window.BENCHMARK_DATA = {
  "lastUpdate": 1702438724777,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "322aa27dda1141672d71f71da287cc837ed67534",
          "message": "fix",
          "timestamp": "2023-12-13T12:25:55+09:00",
          "tree_id": "7ec0f9e4d19c79a808eb486058fce582c01f0188",
          "url": "https://github.com/planetarium/libplanet/commit/322aa27dda1141672d71f71da287cc837ed67534"
        },
        "date": 1702438671019,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932307,
            "unit": "ns",
            "range": "± 99121.93516731366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1662024.0506329115,
            "unit": "ns",
            "range": "± 81366.18590681908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1305643,
            "unit": "ns",
            "range": "± 112721.18839925977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5534869.892473118,
            "unit": "ns",
            "range": "± 305967.20227222505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34454.21686746988,
            "unit": "ns",
            "range": "± 1842.0760560566941"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4970986.666666667,
            "unit": "ns",
            "range": "± 49449.58278990065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13036885.714285715,
            "unit": "ns",
            "range": "± 138908.8182233935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32782970,
            "unit": "ns",
            "range": "± 228969.62743061423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63850785.71428572,
            "unit": "ns",
            "range": "± 272222.408666553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129612066.66666667,
            "unit": "ns",
            "range": "± 871938.5403199231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3318462.8645833335,
            "unit": "ns",
            "range": "± 20532.091351907795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037163.0729166666,
            "unit": "ns",
            "range": "± 2716.6827997012233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728693.53515625,
            "unit": "ns",
            "range": "± 2664.0430467180604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1899746.709735577,
            "unit": "ns",
            "range": "± 2502.424398247784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603756.73828125,
            "unit": "ns",
            "range": "± 1083.9259982710862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560872.3828125,
            "unit": "ns",
            "range": "± 2447.3888958481525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2070818.75,
            "unit": "ns",
            "range": "± 76468.82178239203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2206543.6363636362,
            "unit": "ns",
            "range": "± 88619.27464374687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2704400,
            "unit": "ns",
            "range": "± 91347.85164414103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2681260.606060606,
            "unit": "ns",
            "range": "± 84333.1968273539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6025993.75,
            "unit": "ns",
            "range": "± 109582.82997349539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163434.78260869565,
            "unit": "ns",
            "range": "± 5738.688095967748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157130.32786885247,
            "unit": "ns",
            "range": "± 7096.49725033722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143776.19047619047,
            "unit": "ns",
            "range": "± 5240.359768128451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2679446.6666666665,
            "unit": "ns",
            "range": "± 49754.50972620711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2521264.285714286,
            "unit": "ns",
            "range": "± 32429.417014681097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11009.473684210527,
            "unit": "ns",
            "range": "± 2442.1857006870987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55113.541666666664,
            "unit": "ns",
            "range": "± 6832.347516609448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43190.16393442623,
            "unit": "ns",
            "range": "± 1953.1773189713888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46275.2808988764,
            "unit": "ns",
            "range": "± 6251.641255391121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2224.2105263157896,
            "unit": "ns",
            "range": "± 334.44644308509737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9589.36170212766,
            "unit": "ns",
            "range": "± 827.8055048055182"
          }
        ]
      }
    ]
  }
}