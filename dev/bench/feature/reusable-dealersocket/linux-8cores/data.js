window.BENCHMARK_DATA = {
  "lastUpdate": 1735032013416,
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
          "id": "9f747b2ca24ebd8b4688717d5d9389c4bb0c2b3e",
          "message": "add test and logging",
          "timestamp": "2024-12-24T18:09:53+09:00",
          "tree_id": "8c7b17e56b027e14ae3629d27cf9fffa874531e4",
          "url": "https://github.com/planetarium/libplanet/commit/9f747b2ca24ebd8b4688717d5d9389c4bb0c2b3e"
        },
        "date": 1735031986664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10752807.6,
            "unit": "ns",
            "range": "± 48172.880513536125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27956054.230769232,
            "unit": "ns",
            "range": "± 93089.50269870555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71226688.16666667,
            "unit": "ns",
            "range": "± 279000.23339638644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142181252.26666668,
            "unit": "ns",
            "range": "± 600558.5497431854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297828412.3333333,
            "unit": "ns",
            "range": "± 1178901.123390499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111650.32258064517,
            "unit": "ns",
            "range": "± 6111.243307574644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204359.5806451613,
            "unit": "ns",
            "range": "± 9205.343673602167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174692.26923076922,
            "unit": "ns",
            "range": "± 2729.8196263320574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991436.5,
            "unit": "ns",
            "range": "± 22547.092727479045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2840403.8571428573,
            "unit": "ns",
            "range": "± 25813.598717483248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14179.152173913044,
            "unit": "ns",
            "range": "± 1122.9558516346478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71970.48888888888,
            "unit": "ns",
            "range": "± 4614.051836313693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55347.06,
            "unit": "ns",
            "range": "± 5373.909802185017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60576.989795918365,
            "unit": "ns",
            "range": "± 13523.064137803702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2659.377551020408,
            "unit": "ns",
            "range": "± 394.0829761207244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12292.41489361702,
            "unit": "ns",
            "range": "± 898.120530498372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746368.7410714286,
            "unit": "ns",
            "range": "± 6195.152186090886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214849.5788225445,
            "unit": "ns",
            "range": "± 1343.2944834519064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749588.073828125,
            "unit": "ns",
            "range": "± 554.4770124855245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946473.4000901442,
            "unit": "ns",
            "range": "± 822.4254017425102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637158.2704326923,
            "unit": "ns",
            "range": "± 249.05388872534286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573777.2090541294,
            "unit": "ns",
            "range": "± 975.203979638386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2443952.1470588236,
            "unit": "ns",
            "range": "± 48776.20099103298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554162.34,
            "unit": "ns",
            "range": "± 67830.05129407368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3005098.033333333,
            "unit": "ns",
            "range": "± 24695.89531500172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2684732.625,
            "unit": "ns",
            "range": "± 83426.39986229701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3298374.25,
            "unit": "ns",
            "range": "± 27566.377313759338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984341.9480519481,
            "unit": "ns",
            "range": "± 46155.83264017444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2018102.1219512196,
            "unit": "ns",
            "range": "± 71761.33985134166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581126.7571428572,
            "unit": "ns",
            "range": "± 74731.05678663598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7724341.028571429,
            "unit": "ns",
            "range": "± 220728.63513366305"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30609.05,
            "unit": "ns",
            "range": "± 700.6631050955268"
          }
        ]
      }
    ]
  }
}