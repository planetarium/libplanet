window.BENCHMARK_DATA = {
  "lastUpdate": 1741150215211,
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
          "id": "70913b1666371fd401981f0e4dca895aa293780a",
          "message": "feat: Introduce Nethereum crypto",
          "timestamp": "2025-03-05T13:24:12+09:00",
          "tree_id": "f42c4854f95ac7375d07d7f70520cba1c67a2db1",
          "url": "https://github.com/planetarium/libplanet/commit/70913b1666371fd401981f0e4dca895aa293780a"
        },
        "date": 1741149941589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649094.9438202246,
            "unit": "ns",
            "range": "± 731214.4625414805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3547263,
            "unit": "ns",
            "range": "± 2411142.994542697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2826248.4536082475,
            "unit": "ns",
            "range": "± 1756299.1344914148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7450113.953488372,
            "unit": "ns",
            "range": "± 2078543.5936314971"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47613.04347826087,
            "unit": "ns",
            "range": "± 11055.108882036999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11719470.833333334,
            "unit": "ns",
            "range": "± 2316130.7041982375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27518467,
            "unit": "ns",
            "range": "± 4365218.813242454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68441674,
            "unit": "ns",
            "range": "± 13268657.189240357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120602610.30927835,
            "unit": "ns",
            "range": "± 12323568.203898683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233430293,
            "unit": "ns",
            "range": "± 20863578.68855643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908818.270596591,
            "unit": "ns",
            "range": "± 184379.19842166433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 960823.982421875,
            "unit": "ns",
            "range": "± 124181.68039404925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769089.0791015625,
            "unit": "ns",
            "range": "± 76187.37332149017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1722195.81640625,
            "unit": "ns",
            "range": "± 235361.42470517513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 505822.2705078125,
            "unit": "ns",
            "range": "± 43752.69948214689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 459929.1800902062,
            "unit": "ns",
            "range": "± 31147.400590057885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2645920.430107527,
            "unit": "ns",
            "range": "± 573045.4907504099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2589732.6086956523,
            "unit": "ns",
            "range": "± 731538.0792156827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3098373.076923077,
            "unit": "ns",
            "range": "± 1142907.3915119502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2835727.659574468,
            "unit": "ns",
            "range": "± 656336.1260890013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2846939.772727273,
            "unit": "ns",
            "range": "± 362425.1261683007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 147389.010989011,
            "unit": "ns",
            "range": "± 56514.11515040478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218722.1052631579,
            "unit": "ns",
            "range": "± 82678.13544479037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150480.8510638298,
            "unit": "ns",
            "range": "± 24775.534353343595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2563298.888888889,
            "unit": "ns",
            "range": "± 425075.6491151448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2357296.5517241377,
            "unit": "ns",
            "range": "± 187106.40390782987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19223.863636363636,
            "unit": "ns",
            "range": "± 6445.474119478674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84402.17391304347,
            "unit": "ns",
            "range": "± 26077.94730958535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59990.625,
            "unit": "ns",
            "range": "± 19493.945500698686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94092.30769230769,
            "unit": "ns",
            "range": "± 34407.55482535528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5275.257731958763,
            "unit": "ns",
            "range": "± 2106.440071929962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18978.947368421053,
            "unit": "ns",
            "range": "± 7341.602450402339"
          }
        ]
      }
    ]
  }
}