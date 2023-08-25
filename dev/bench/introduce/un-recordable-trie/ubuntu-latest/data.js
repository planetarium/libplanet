window.BENCHMARK_DATA = {
  "lastUpdate": 1692945347362,
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
        "date": 1692945318467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1304784.8901098901,
            "unit": "ns",
            "range": "± 79240.74164194557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2502938.4375,
            "unit": "ns",
            "range": "± 97551.22165628838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647393.1847826086,
            "unit": "ns",
            "range": "± 92158.128777784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4337398,
            "unit": "ns",
            "range": "± 111157.4389473477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272556,
            "unit": "ns",
            "range": "± 6274.88519500766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258443.82142857142,
            "unit": "ns",
            "range": "± 6215.452243928904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217450.85714285713,
            "unit": "ns",
            "range": "± 3151.2610627674576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4108153.4615384615,
            "unit": "ns",
            "range": "± 31997.82644861831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3836934.066666667,
            "unit": "ns",
            "range": "± 60056.836033480664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18461.073684210525,
            "unit": "ns",
            "range": "± 1193.1919130305018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82257.45070422535,
            "unit": "ns",
            "range": "± 3789.125959482071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68650.25,
            "unit": "ns",
            "range": "± 825.4421542421976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71969.04705882353,
            "unit": "ns",
            "range": "± 5838.331037829468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4790.7525773195875,
            "unit": "ns",
            "range": "± 503.36894253717753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16884.48888888889,
            "unit": "ns",
            "range": "± 1063.6261407519498"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46729.439024390245,
            "unit": "ns",
            "range": "± 2461.884127898598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7535893.733333333,
            "unit": "ns",
            "range": "± 62477.60958988962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19696004.4,
            "unit": "ns",
            "range": "± 137080.4683564678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50824863,
            "unit": "ns",
            "range": "± 246549.58756694073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101090917.66666667,
            "unit": "ns",
            "range": "± 675086.0715109557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202372689.46666667,
            "unit": "ns",
            "range": "± 692386.7320767932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248158,
            "unit": "ns",
            "range": "± 51080.60272255996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3428375.6,
            "unit": "ns",
            "range": "± 100411.66862080219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4244079.214285715,
            "unit": "ns",
            "range": "± 52428.72104277692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3752349.214285714,
            "unit": "ns",
            "range": "± 64217.831962995086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5980325.826086956,
            "unit": "ns",
            "range": "± 119895.02277130615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4927373.675480769,
            "unit": "ns",
            "range": "± 3548.3354417475266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1565346.1530412945,
            "unit": "ns",
            "range": "± 795.0945233539313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058199.615513393,
            "unit": "ns",
            "range": "± 1687.190021705482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2719827.2823660714,
            "unit": "ns",
            "range": "± 27756.89133663843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 906461.8331380208,
            "unit": "ns",
            "range": "± 9306.919407013858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732338.0412109375,
            "unit": "ns",
            "range": "± 543.8152159632476"
          }
        ]
      }
    ]
  }
}