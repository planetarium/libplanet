window.BENCHMARK_DATA = {
  "lastUpdate": 1700828349233,
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
        "date": 1700828298555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461349.2,
            "unit": "ns",
            "range": "± 190810.83389910983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21076804.66,
            "unit": "ns",
            "range": "± 542836.6241681039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50755066.61111111,
            "unit": "ns",
            "range": "± 1062164.2238774395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101194885.26666667,
            "unit": "ns",
            "range": "± 1073477.7446333326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212102524.73076922,
            "unit": "ns",
            "range": "± 2786859.235064393"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66012.3,
            "unit": "ns",
            "range": "± 6243.819948962028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299859.70666666667,
            "unit": "ns",
            "range": "± 14844.158180070533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300959.77777777775,
            "unit": "ns",
            "range": "± 21244.426788937188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298453.989010989,
            "unit": "ns",
            "range": "± 21492.238182135796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4391122.573684211,
            "unit": "ns",
            "range": "± 369636.68911753217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3826486.953125,
            "unit": "ns",
            "range": "± 177278.3227256687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25065.56818181818,
            "unit": "ns",
            "range": "± 2723.271911385968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100148.55494505494,
            "unit": "ns",
            "range": "± 9113.418906404673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113045.68085106384,
            "unit": "ns",
            "range": "± 12584.150252166086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112407.67021276595,
            "unit": "ns",
            "range": "± 16875.33850852088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8519.119565217392,
            "unit": "ns",
            "range": "± 1428.4710633938844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22747.64457831325,
            "unit": "ns",
            "range": "± 2908.0666494045113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484011.0103092783,
            "unit": "ns",
            "range": "± 184666.14214686496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2882386.065217391,
            "unit": "ns",
            "range": "± 195394.21103675774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255313.915789474,
            "unit": "ns",
            "range": "± 244227.01295771555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8660134.78125,
            "unit": "ns",
            "range": "± 262784.36204494734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3235764.3571428573,
            "unit": "ns",
            "range": "± 185692.047358318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444074.422222222,
            "unit": "ns",
            "range": "± 227927.58912973627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373765.765306123,
            "unit": "ns",
            "range": "± 173874.48572231343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4085448.632183908,
            "unit": "ns",
            "range": "± 213728.25505393065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18400465.974747475,
            "unit": "ns",
            "range": "± 2502476.6398418485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5217517.711458334,
            "unit": "ns",
            "range": "± 78704.08632103262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1735864.171875,
            "unit": "ns",
            "range": "± 24875.956922489575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1000341.9698893229,
            "unit": "ns",
            "range": "± 7179.59839041667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672515.753173828,
            "unit": "ns",
            "range": "± 105135.14308655528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794553.1595982143,
            "unit": "ns",
            "range": "± 10458.40195991746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 708817.5536458333,
            "unit": "ns",
            "range": "± 3776.9421215723423"
          }
        ]
      }
    ]
  }
}