window.BENCHMARK_DATA = {
  "lastUpdate": 1733479789273,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "cd60cf1a4a53da7d0e90c16c4efe9949c841034b",
          "message": "feat: delayed consensus step transition",
          "timestamp": "2024-12-06T19:00:24+09:00",
          "tree_id": "c1104c807c075cc1878d91a6db932c71b4c684eb",
          "url": "https://github.com/planetarium/libplanet/commit/cd60cf1a4a53da7d0e90c16c4efe9949c841034b"
        },
        "date": 1733479762254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10858220.8,
            "unit": "ns",
            "range": "± 60814.111250362184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28092336.366666667,
            "unit": "ns",
            "range": "± 150802.25355736882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72097258.21428572,
            "unit": "ns",
            "range": "± 262238.3099212882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142827396.8,
            "unit": "ns",
            "range": "± 862594.6123314077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294422982.1666667,
            "unit": "ns",
            "range": "± 970815.276560499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110815.78260869565,
            "unit": "ns",
            "range": "± 6663.6494997499985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189955.2068965517,
            "unit": "ns",
            "range": "± 8212.391101595542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170734.16666666666,
            "unit": "ns",
            "range": "± 3784.6491559104043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2987666.346153846,
            "unit": "ns",
            "range": "± 36661.45835625872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2791354.8,
            "unit": "ns",
            "range": "± 30348.4352531442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13459.797872340425,
            "unit": "ns",
            "range": "± 1047.1179374044425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64415.36781609195,
            "unit": "ns",
            "range": "± 5756.072114621185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54129.5404040404,
            "unit": "ns",
            "range": "± 5838.269845962005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59915.255102040814,
            "unit": "ns",
            "range": "± 14042.682927976954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2656.90206185567,
            "unit": "ns",
            "range": "± 429.8769363578037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12606.627659574468,
            "unit": "ns",
            "range": "± 742.415821723245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753644.498372396,
            "unit": "ns",
            "range": "± 3031.909920107815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218014.7997395834,
            "unit": "ns",
            "range": "± 1165.8712490405414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762231.0239583333,
            "unit": "ns",
            "range": "± 1075.8473819807582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970443.3716517857,
            "unit": "ns",
            "range": "± 954.1168784014684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627230.129045759,
            "unit": "ns",
            "range": "± 791.2699112751291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567816.7555989583,
            "unit": "ns",
            "range": "± 724.0227974538152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2386635.2,
            "unit": "ns",
            "range": "± 29044.974099784336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2563237.53125,
            "unit": "ns",
            "range": "± 78334.64143082399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3049976.8571428573,
            "unit": "ns",
            "range": "± 35914.46404917607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2594776.3,
            "unit": "ns",
            "range": "± 42739.60539660073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3313508.533333333,
            "unit": "ns",
            "range": "± 57662.059863442606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004811.9354838709,
            "unit": "ns",
            "range": "± 79816.04086160801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932577.40625,
            "unit": "ns",
            "range": "± 60022.91949175338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595675.5459770116,
            "unit": "ns",
            "range": "± 87002.52284151626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7792929.577777778,
            "unit": "ns",
            "range": "± 292389.91454776534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30542.96875,
            "unit": "ns",
            "range": "± 952.6143648004651"
          }
        ]
      }
    ]
  }
}