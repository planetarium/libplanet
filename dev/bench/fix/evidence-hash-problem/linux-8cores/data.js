window.BENCHMARK_DATA = {
  "lastUpdate": 1720685981161,
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
          "id": "64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e",
          "message": "fix: Fix an issue with the evidence hash changing depending on the version.",
          "timestamp": "2024-07-11T17:10:54+09:00",
          "tree_id": "d2bb4fcb759803a572b4d3bbb8e669c9c9e9e90f",
          "url": "https://github.com/planetarium/libplanet/commit/64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e"
        },
        "date": 1720685955505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3776577.4098772323,
            "unit": "ns",
            "range": "± 6726.017489965113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236905.8967447917,
            "unit": "ns",
            "range": "± 1865.8086264700166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768576.934765625,
            "unit": "ns",
            "range": "± 1980.0183855833275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936765.68671875,
            "unit": "ns",
            "range": "± 3822.181612155343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620176.3475911458,
            "unit": "ns",
            "range": "± 1013.3979942842278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572424.8091947115,
            "unit": "ns",
            "range": "± 496.5661909120328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2456628.6428571427,
            "unit": "ns",
            "range": "± 33325.911793994455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2546851.6333333333,
            "unit": "ns",
            "range": "± 36635.597315933555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3071731.125,
            "unit": "ns",
            "range": "± 59910.26507132702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2561848.470588235,
            "unit": "ns",
            "range": "± 81791.29457538431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3233394.4,
            "unit": "ns",
            "range": "± 32051.835088538337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013011.6933333334,
            "unit": "ns",
            "range": "± 47951.77640650886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1940345.576923077,
            "unit": "ns",
            "range": "± 52744.51280421354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1652684.955882353,
            "unit": "ns",
            "range": "± 79200.45692869734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8199090.64,
            "unit": "ns",
            "range": "± 215542.94032200793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201248.6976744186,
            "unit": "ns",
            "range": "± 7353.534069492365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192783.1851851852,
            "unit": "ns",
            "range": "± 5288.037537957631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171335.65384615384,
            "unit": "ns",
            "range": "± 2287.3407720959085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3012368.0714285714,
            "unit": "ns",
            "range": "± 36866.038427015694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2823453.6666666665,
            "unit": "ns",
            "range": "± 33517.521798662405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16035.272727272728,
            "unit": "ns",
            "range": "± 2791.2353669729187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59250.057471264365,
            "unit": "ns",
            "range": "± 3241.1622892152036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49873.5,
            "unit": "ns",
            "range": "± 577.0413596695048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53965.47959183674,
            "unit": "ns",
            "range": "± 8766.087674563601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2818.112244897959,
            "unit": "ns",
            "range": "± 286.89294970560843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11682.505376344086,
            "unit": "ns",
            "range": "± 826.1372086226238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10704493.142857144,
            "unit": "ns",
            "range": "± 78575.92011929232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27026021.9,
            "unit": "ns",
            "range": "± 127345.31461839161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69900595.35714285,
            "unit": "ns",
            "range": "± 253536.99172571284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138792796.16666666,
            "unit": "ns",
            "range": "± 532292.1276747608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286400277.46666664,
            "unit": "ns",
            "range": "± 1145718.1611288222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31746,
            "unit": "ns",
            "range": "± 385.15766002628465"
          }
        ]
      }
    ]
  }
}