window.BENCHMARK_DATA = {
  "lastUpdate": 1692945492606,
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
          "id": "0bfdbd8be5c64da975565afcff60ddecc559e7b2",
          "message": "Merge pull request #3377 from greymistcube/fix/node-equality\n\nFix node equality for `INode`",
          "timestamp": "2023-08-23T11:46:34+09:00",
          "tree_id": "f7e004fb379004cb8ba6f2d1360b650926475e31",
          "url": "https://github.com/planetarium/libplanet/commit/0bfdbd8be5c64da975565afcff60ddecc559e7b2"
        },
        "date": 1692945430463,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1303066.6666666667,
            "unit": "ns",
            "range": "± 87045.23923494833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2461677.777777778,
            "unit": "ns",
            "range": "± 103372.48213568774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699198,
            "unit": "ns",
            "range": "± 144904.58893682246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4504321.31147541,
            "unit": "ns",
            "range": "± 193635.24052089464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46837.5,
            "unit": "ns",
            "range": "± 2239.934449493594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7443223.076923077,
            "unit": "ns",
            "range": "± 92504.43371217542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20425614.285714287,
            "unit": "ns",
            "range": "± 252337.926223921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51317013.333333336,
            "unit": "ns",
            "range": "± 929507.7382807577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101745100,
            "unit": "ns",
            "range": "± 1525482.3026552245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203792720,
            "unit": "ns",
            "range": "± 3802569.8615165884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4529133.541666667,
            "unit": "ns",
            "range": "± 11486.668018724426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1416189.662388393,
            "unit": "ns",
            "range": "± 5351.373732493498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1065773.6979166667,
            "unit": "ns",
            "range": "± 3534.2197240356336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611812.2488839286,
            "unit": "ns",
            "range": "± 5027.067112384843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826831.2290736607,
            "unit": "ns",
            "range": "± 2619.7395000711967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768965.68359375,
            "unit": "ns",
            "range": "± 1885.103391679004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3194648.8372093025,
            "unit": "ns",
            "range": "± 116314.1648256648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3345292.3076923075,
            "unit": "ns",
            "range": "± 134862.5776174731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043634.4827586208,
            "unit": "ns",
            "range": "± 118421.78936768493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3624091.891891892,
            "unit": "ns",
            "range": "± 112061.45481232455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5928222.857142857,
            "unit": "ns",
            "range": "± 191886.96747229682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253664.44444444444,
            "unit": "ns",
            "range": "± 9532.960895458631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243847.36842105264,
            "unit": "ns",
            "range": "± 5265.22854004908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213760.9375,
            "unit": "ns",
            "range": "± 9785.129910282802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099217.6470588236,
            "unit": "ns",
            "range": "± 80075.40380240144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764721.4285714286,
            "unit": "ns",
            "range": "± 65142.700501064806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21253.60824742268,
            "unit": "ns",
            "range": "± 1964.0021775101484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83783.15789473684,
            "unit": "ns",
            "range": "± 5134.85487647544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66404.76190476191,
            "unit": "ns",
            "range": "± 1564.441175140884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79032.32323232324,
            "unit": "ns",
            "range": "± 14334.508300635405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5006.18556701031,
            "unit": "ns",
            "range": "± 673.1168845053477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17384.782608695652,
            "unit": "ns",
            "range": "± 1645.1684026569476"
          }
        ]
      }
    ]
  }
}