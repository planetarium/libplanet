window.BENCHMARK_DATA = {
  "lastUpdate": 1720597344123,
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
      },
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
          "id": "b8b8b11d9bbe6e4953f6324aee294cf4238120e1",
          "message": "ci: Change dotnet command from `build` to `pack`",
          "timestamp": "2024-07-10T16:26:23+09:00",
          "tree_id": "62a14c74340e3f859883535723f4b7cf84f757c7",
          "url": "https://github.com/planetarium/libplanet/commit/b8b8b11d9bbe6e4953f6324aee294cf4238120e1"
        },
        "date": 1720597025164,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987278.350515464,
            "unit": "ns",
            "range": "± 79574.47929822849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1747780,
            "unit": "ns",
            "range": "± 56044.5243166748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1578388.4210526317,
            "unit": "ns",
            "range": "± 110573.26430650087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6736526.923076923,
            "unit": "ns",
            "range": "± 184192.84960647588"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30670.833333333332,
            "unit": "ns",
            "range": "± 1036.1463655199211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9668346.666666666,
            "unit": "ns",
            "range": "± 69703.09346144716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23086992.85714286,
            "unit": "ns",
            "range": "± 283124.05941914936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58723993.333333336,
            "unit": "ns",
            "range": "± 471540.27924704476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116133661.53846154,
            "unit": "ns",
            "range": "± 763120.7708465521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238896280,
            "unit": "ns",
            "range": "± 2126016.252188922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3286473.5877403845,
            "unit": "ns",
            "range": "± 4443.152497869648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066615.3738839286,
            "unit": "ns",
            "range": "± 1684.1458598635268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739918.9453125,
            "unit": "ns",
            "range": "± 1771.8113917368175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926904.9088541667,
            "unit": "ns",
            "range": "± 5193.13203283582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614429.8502604166,
            "unit": "ns",
            "range": "± 1670.139576594208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563341.4341517857,
            "unit": "ns",
            "range": "± 2650.1148590499897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219756.25,
            "unit": "ns",
            "range": "± 68687.22911537768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2240358,
            "unit": "ns",
            "range": "± 43719.712563861474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2736178.846153846,
            "unit": "ns",
            "range": "± 112068.3428328857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2249602.564102564,
            "unit": "ns",
            "range": "± 69652.01280644519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2960260,
            "unit": "ns",
            "range": "± 35865.63815130019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175530.4347826087,
            "unit": "ns",
            "range": "± 8417.459172804534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167328.81355932204,
            "unit": "ns",
            "range": "± 7205.746051193849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146490.9090909091,
            "unit": "ns",
            "range": "± 4620.698245149457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714200,
            "unit": "ns",
            "range": "± 36955.16588671042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2470193.75,
            "unit": "ns",
            "range": "± 42772.33480884578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10878.494623655914,
            "unit": "ns",
            "range": "± 1829.9352247009224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53216.666666666664,
            "unit": "ns",
            "range": "± 4531.472786416694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45488,
            "unit": "ns",
            "range": "± 1826.5211720198413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56833.333333333336,
            "unit": "ns",
            "range": "± 12573.408934926834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2480.4123711340208,
            "unit": "ns",
            "range": "± 467.84950733331715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10828.865979381444,
            "unit": "ns",
            "range": "± 1926.0797168345277"
          }
        ]
      }
    ]
  }
}