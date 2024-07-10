window.BENCHMARK_DATA = {
  "lastUpdate": 1720596652125,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a",
          "message": "style: Change dotnet option -p to --project",
          "timestamp": "2024-07-10T16:15:17+09:00",
          "tree_id": "ffcdb296cd2d895cadbc7021388037a0b2a930d1",
          "url": "https://github.com/planetarium/libplanet/commit/7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a"
        },
        "date": 1720596393191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033480.808080808,
            "unit": "ns",
            "range": "± 116032.6552177936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1787649.0196078431,
            "unit": "ns",
            "range": "± 68346.9278681903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559802.1739130435,
            "unit": "ns",
            "range": "± 105858.57710582794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6835523.2558139535,
            "unit": "ns",
            "range": "± 222333.1518210253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30245,
            "unit": "ns",
            "range": "± 1079.6366910286924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9825592.857142856,
            "unit": "ns",
            "range": "± 136994.60665569012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23597360,
            "unit": "ns",
            "range": "± 265042.9663281031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59744142.85714286,
            "unit": "ns",
            "range": "± 721916.6707871758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117393492.85714285,
            "unit": "ns",
            "range": "± 1024032.7980506857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235690028.57142857,
            "unit": "ns",
            "range": "± 2186225.043813606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360609.2633928573,
            "unit": "ns",
            "range": "± 9424.311816164773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071961.411830357,
            "unit": "ns",
            "range": "± 2374.651122274317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735699.5744977678,
            "unit": "ns",
            "range": "± 1308.1084164120716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1996803.7388392857,
            "unit": "ns",
            "range": "± 5565.203023874662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622690.5064174107,
            "unit": "ns",
            "range": "± 938.5088551681242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563135.4036458334,
            "unit": "ns",
            "range": "± 1858.6793438035475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2211995.4545454546,
            "unit": "ns",
            "range": "± 52080.25379640383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244723.076923077,
            "unit": "ns",
            "range": "± 32222.71853434452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2673980,
            "unit": "ns",
            "range": "± 59374.304206449444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2339431.8181818184,
            "unit": "ns",
            "range": "± 57150.35838210871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3010994.117647059,
            "unit": "ns",
            "range": "± 59203.82663506891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178812.98701298703,
            "unit": "ns",
            "range": "± 8650.423638079825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170463.75,
            "unit": "ns",
            "range": "± 8767.174735802935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149470.37037037036,
            "unit": "ns",
            "range": "± 3678.4000299895038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2698235.714285714,
            "unit": "ns",
            "range": "± 30565.782959251803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2474785.714285714,
            "unit": "ns",
            "range": "± 36957.68593202975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11272.043010752688,
            "unit": "ns",
            "range": "± 1387.9422985905876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54882.65306122449,
            "unit": "ns",
            "range": "± 5926.42214887195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45712.5,
            "unit": "ns",
            "range": "± 881.5705681717526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60259.59595959596,
            "unit": "ns",
            "range": "± 13658.352600275513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2631.6326530612246,
            "unit": "ns",
            "range": "± 630.2669928068221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10662.5,
            "unit": "ns",
            "range": "± 1419.0619585152945"
          }
        ]
      }
    ]
  }
}