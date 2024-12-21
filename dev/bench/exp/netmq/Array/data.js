window.BENCHMARK_DATA = {
  "lastUpdate": 1734787144448,
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
          "id": "1d67959c8490866d3d5d505db74f48555f3a0ade",
          "message": "chore: Change netmq",
          "timestamp": "2024-12-21T22:06:49+09:00",
          "tree_id": "cf9493cefaae266b7499f6f84de376b263fb168d",
          "url": "https://github.com/planetarium/libplanet/commit/1d67959c8490866d3d5d505db74f48555f3a0ade"
        },
        "date": 1734786867419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10472083.692307692,
            "unit": "ns",
            "range": "± 86009.05128471908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26458204.846153848,
            "unit": "ns",
            "range": "± 344259.75196955714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66220047.85714286,
            "unit": "ns",
            "range": "± 81133.10570514749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134655250.4,
            "unit": "ns",
            "range": "± 212225.45173766775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271073262.35714287,
            "unit": "ns",
            "range": "± 373232.66898989986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13269.421052631578,
            "unit": "ns",
            "range": "± 293.00669612930045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54373.89887640449,
            "unit": "ns",
            "range": "± 3002.91752469367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104565.72307692308,
            "unit": "ns",
            "range": "± 4638.833943957833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92124.66666666667,
            "unit": "ns",
            "range": "± 2552.602819446487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2874182.7101449277,
            "unit": "ns",
            "range": "± 137467.52044682082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2738283.026666667,
            "unit": "ns",
            "range": "± 136915.15003717438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4967.005617977528,
            "unit": "ns",
            "range": "± 517.6227373904032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26551.24157303371,
            "unit": "ns",
            "range": "± 1832.5872640024163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22657.824175824175,
            "unit": "ns",
            "range": "± 1706.773060442858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30207.384210526317,
            "unit": "ns",
            "range": "± 5701.173081719829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1441.5105263157895,
            "unit": "ns",
            "range": "± 233.1431162483151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4912.858695652174,
            "unit": "ns",
            "range": "± 579.0956492864161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669268.9882352941,
            "unit": "ns",
            "range": "± 35942.208925444975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270920.4081632653,
            "unit": "ns",
            "range": "± 49814.14979280417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1025221.7910447761,
            "unit": "ns",
            "range": "± 48387.89122714713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8797289.51,
            "unit": "ns",
            "range": "± 1272165.4455802971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114675.5833333335,
            "unit": "ns",
            "range": "± 53746.59126252175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259445.934782609,
            "unit": "ns",
            "range": "± 82573.32781188478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2525877.5714285714,
            "unit": "ns",
            "range": "± 32255.689267319805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2261767.6829268294,
            "unit": "ns",
            "range": "± 81560.5934313376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2697835.523809524,
            "unit": "ns",
            "range": "± 60662.870748604575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3052440.758984375,
            "unit": "ns",
            "range": "± 32492.581028061784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921409.6462890625,
            "unit": "ns",
            "range": "± 5322.6207035904745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616761.5474609375,
            "unit": "ns",
            "range": "± 5589.014306497644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637741.8607700893,
            "unit": "ns",
            "range": "± 2449.720829772284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465361.227734375,
            "unit": "ns",
            "range": "± 912.2150648552032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417167.87109375,
            "unit": "ns",
            "range": "± 414.4846080611349"
          }
        ]
      }
    ]
  }
}