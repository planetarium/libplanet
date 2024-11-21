window.BENCHMARK_DATA = {
  "lastUpdate": 1732172633844,
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
          "id": "54fbc412588ed4df00c631103c22c0ffd725f7af",
          "message": "Merge remote-tracking branch 'origin/5.3-maintenance' into port/5.3.2-to-5.4.1",
          "timestamp": "2024-11-21T15:53:33+09:00",
          "tree_id": "a6817dda74909352d820c37eb73962ef30f8f415",
          "url": "https://github.com/planetarium/libplanet/commit/54fbc412588ed4df00c631103c22c0ffd725f7af"
        },
        "date": 1732172606923,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570967.833333334,
            "unit": "ns",
            "range": "± 34645.74243640475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27846855.533333335,
            "unit": "ns",
            "range": "± 139998.22525858096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70520053.35714285,
            "unit": "ns",
            "range": "± 446726.70587001846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141565883.4,
            "unit": "ns",
            "range": "± 1027239.6043492205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294818323.06666666,
            "unit": "ns",
            "range": "± 1595074.9628099196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109471.60674157304,
            "unit": "ns",
            "range": "± 5677.041202025883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189402.71153846153,
            "unit": "ns",
            "range": "± 7257.103071721508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162904.3148148148,
            "unit": "ns",
            "range": "± 4308.552050524604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2848914.230769231,
            "unit": "ns",
            "range": "± 22425.987195490583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2704809.1666666665,
            "unit": "ns",
            "range": "± 35432.260999318256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16117.908602150537,
            "unit": "ns",
            "range": "± 1368.0772546562594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59481.23170731707,
            "unit": "ns",
            "range": "± 2974.9777395112005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49146.76666666667,
            "unit": "ns",
            "range": "± 697.8083513674046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49227.24742268041,
            "unit": "ns",
            "range": "± 6384.343758743806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2462.0104166666665,
            "unit": "ns",
            "range": "± 295.41321620977544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15348.755319148937,
            "unit": "ns",
            "range": "± 1128.71240692749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3771122.382512019,
            "unit": "ns",
            "range": "± 6517.71656948621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1193307.7912760417,
            "unit": "ns",
            "range": "± 2746.7693776070982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756969.3442057292,
            "unit": "ns",
            "range": "± 1639.6564620826618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983419.55078125,
            "unit": "ns",
            "range": "± 2551.5202764220867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620403.5653599331,
            "unit": "ns",
            "range": "± 1090.3871124107536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581236.2515625,
            "unit": "ns",
            "range": "± 510.2997045807226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454746.3333333335,
            "unit": "ns",
            "range": "± 34690.26146108004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2504806.3125,
            "unit": "ns",
            "range": "± 38576.00729852473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3045573.9375,
            "unit": "ns",
            "range": "± 58448.67315399469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2692019.3333333335,
            "unit": "ns",
            "range": "± 80457.23855493088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3277302.875,
            "unit": "ns",
            "range": "± 62689.84823597837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974591.2696629213,
            "unit": "ns",
            "range": "± 52205.104003075314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1878552.8529411764,
            "unit": "ns",
            "range": "± 59771.64938437983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1535954.963768116,
            "unit": "ns",
            "range": "± 74194.7402978809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7613920.742857143,
            "unit": "ns",
            "range": "± 248724.34917078773"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34116.267676767675,
            "unit": "ns",
            "range": "± 5670.909097886825"
          }
        ]
      }
    ]
  }
}