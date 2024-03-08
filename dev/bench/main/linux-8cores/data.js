window.BENCHMARK_DATA = {
  "lastUpdate": 1709883777360,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd705f8031f944afb22d53c6d7c52ad070ce6bb",
          "message": "Merge pull request #3690 from riemannulus/ci/benchmark/use-large-runner\n\n🔀 ci: use large runner",
          "timestamp": "2024-03-08T16:33:12+09:00",
          "tree_id": "338c9f6bc38dfb9bc884984ee4efbfe67e0e2cbf",
          "url": "https://github.com/planetarium/libplanet/commit/1cd705f8031f944afb22d53c6d7c52ad070ce6bb"
        },
        "date": 1709883755402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967698.6989247312,
            "unit": "ns",
            "range": "± 70075.34762168271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1836328.8648648649,
            "unit": "ns",
            "range": "± 61376.73097815299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622449.6489361702,
            "unit": "ns",
            "range": "± 127023.67594709258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7766928.339285715,
            "unit": "ns",
            "range": "± 334275.1189793862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615271.357142857,
            "unit": "ns",
            "range": "± 23778.785114393115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14246643.785714285,
            "unit": "ns",
            "range": "± 84304.12466907999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36683859.64285714,
            "unit": "ns",
            "range": "± 222227.33543200485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75673326.07142857,
            "unit": "ns",
            "range": "± 357894.5544824974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148623854.42857143,
            "unit": "ns",
            "range": "± 322868.1478002375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3739357.636418269,
            "unit": "ns",
            "range": "± 3227.017910435657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219426.7916666667,
            "unit": "ns",
            "range": "± 2239.070145011453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756453.5592215402,
            "unit": "ns",
            "range": "± 1264.8004941476593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942070.5128348214,
            "unit": "ns",
            "range": "± 2688.7798620683657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613913.4108072916,
            "unit": "ns",
            "range": "± 683.5874207780245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573732.2595052083,
            "unit": "ns",
            "range": "± 679.967272685228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2417277.4411764704,
            "unit": "ns",
            "range": "± 38826.14568411116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489799.25,
            "unit": "ns",
            "range": "± 72375.02459407428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3144289.48,
            "unit": "ns",
            "range": "± 81967.71913641777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3162789.6447368423,
            "unit": "ns",
            "range": "± 160552.2139413181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8689520.4,
            "unit": "ns",
            "range": "± 167258.05648009904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36389.01724137931,
            "unit": "ns",
            "range": "± 1973.8769244994407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203061.95,
            "unit": "ns",
            "range": "± 6648.516622487094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195270.03333333333,
            "unit": "ns",
            "range": "± 5715.241205175275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161936.92307692306,
            "unit": "ns",
            "range": "± 1957.4131509698566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3200198.566666667,
            "unit": "ns",
            "range": "± 52810.568524906164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802839.5,
            "unit": "ns",
            "range": "± 16817.569918437635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12853.301075268817,
            "unit": "ns",
            "range": "± 1151.62265280575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60571.4625,
            "unit": "ns",
            "range": "± 2997.8142984841816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96256.38144329897,
            "unit": "ns",
            "range": "± 8825.785856704324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56526.510416666664,
            "unit": "ns",
            "range": "± 8224.19289080415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2829.413043478261,
            "unit": "ns",
            "range": "± 349.9898319456735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11911.75974025974,
            "unit": "ns",
            "range": "± 610.6348810566667"
          }
        ]
      }
    ]
  }
}