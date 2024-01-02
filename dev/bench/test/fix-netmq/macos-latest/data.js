window.BENCHMARK_DATA = {
  "lastUpdate": 1704185217444,
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
          "id": "9a68e63c24b34dca76ff7b938611af74e8a60cc2",
          "message": "scale timeout",
          "timestamp": "2023-12-26T17:21:19+09:00",
          "tree_id": "f77f0ef7bbaf5d161e3f60fab58495d263b9df09",
          "url": "https://github.com/planetarium/libplanet/commit/9a68e63c24b34dca76ff7b938611af74e8a60cc2"
        },
        "date": 1704185159816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7812161.5,
            "unit": "ns",
            "range": "± 235546.37691079013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18756793.1,
            "unit": "ns",
            "range": "± 197766.45370913067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46902471.692307696,
            "unit": "ns",
            "range": "± 341227.06883012294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93453676.23076923,
            "unit": "ns",
            "range": "± 770355.9754903523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194481282.5,
            "unit": "ns",
            "range": "± 3424481.630886968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35011.69662921348,
            "unit": "ns",
            "range": "± 3262.314099212448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217821.62921348316,
            "unit": "ns",
            "range": "± 11972.323512226423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210071.7077922078,
            "unit": "ns",
            "range": "± 10774.024919047397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190702.8,
            "unit": "ns",
            "range": "± 8907.786780045311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3905978.3571428573,
            "unit": "ns",
            "range": "± 34822.67874169436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3457211.714285714,
            "unit": "ns",
            "range": "± 45022.207112248965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12737.652631578947,
            "unit": "ns",
            "range": "± 1374.123238986901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63103.07070707071,
            "unit": "ns",
            "range": "± 7532.803092722191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56258.24444444444,
            "unit": "ns",
            "range": "± 7148.970211550957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62476.1875,
            "unit": "ns",
            "range": "± 10463.080107353415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3671.1222222222223,
            "unit": "ns",
            "range": "± 455.69465007542686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12624.951612903225,
            "unit": "ns",
            "range": "± 1325.618768694774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1098527.7916666667,
            "unit": "ns",
            "range": "± 101511.21177972273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2192458.62,
            "unit": "ns",
            "range": "± 87954.57548699528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1781803.912371134,
            "unit": "ns",
            "range": "± 152074.1663214691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 18913355.717391305,
            "unit": "ns",
            "range": "± 1945328.2487996772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2909842.84375,
            "unit": "ns",
            "range": "± 90604.65845785812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3027149.35443038,
            "unit": "ns",
            "range": "± 157183.7867389341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3487251.3076923075,
            "unit": "ns",
            "range": "± 55597.183953543026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3685616.09375,
            "unit": "ns",
            "range": "± 170154.58847259096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22121944.445652176,
            "unit": "ns",
            "range": "± 3230851.2075429545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4400710.233072917,
            "unit": "ns",
            "range": "± 44221.58322421893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361302.6565104167,
            "unit": "ns",
            "range": "± 11311.31686841531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880345.9646484375,
            "unit": "ns",
            "range": "± 4533.065582227611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990228.553125,
            "unit": "ns",
            "range": "± 22576.718737807067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632027.0991586539,
            "unit": "ns",
            "range": "± 3728.0610009655966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584574.305859375,
            "unit": "ns",
            "range": "± 3990.6854895924253"
          }
        ]
      }
    ]
  }
}