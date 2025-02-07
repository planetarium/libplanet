window.BENCHMARK_DATA = {
  "lastUpdate": 1738893943836,
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
          "id": "04ed5f2d528df8cdcc784a34594d904c245bf8b3",
          "message": "fix: Module type without path",
          "timestamp": "2025-02-07T10:50:53+09:00",
          "tree_id": "603aa1227aa8f7be9a06dde069ac546ef4462854",
          "url": "https://github.com/planetarium/libplanet/commit/04ed5f2d528df8cdcc784a34594d904c245bf8b3"
        },
        "date": 1738893702567,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3283653.3333333335,
            "unit": "ns",
            "range": "± 45243.15049448553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3059305,
            "unit": "ns",
            "range": "± 1821479.8215401063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3469025,
            "unit": "ns",
            "range": "± 1527586.4331627288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6025861.428571428,
            "unit": "ns",
            "range": "± 278083.99121819774"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 26338.541666666668,
            "unit": "ns",
            "range": "± 3889.510043333605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9976900,
            "unit": "ns",
            "range": "± 82437.83805302721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20215185,
            "unit": "ns",
            "range": "± 1433947.4817718389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47848217.64705882,
            "unit": "ns",
            "range": "± 920584.4856905409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94390038.46153846,
            "unit": "ns",
            "range": "± 334031.6640142107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190702933.33333334,
            "unit": "ns",
            "range": "± 438959.031704727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4087671.9866071427,
            "unit": "ns",
            "range": "± 8910.679239054072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912911.640625,
            "unit": "ns",
            "range": "± 6796.102229965307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728522.4544270834,
            "unit": "ns",
            "range": "± 4977.465111470917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1625467.9236778845,
            "unit": "ns",
            "range": "± 2776.431855993238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 438326.064453125,
            "unit": "ns",
            "range": "± 3153.956672780786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 396154.4259207589,
            "unit": "ns",
            "range": "± 1281.4287516318152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2510893.3333333335,
            "unit": "ns",
            "range": "± 38878.16990597803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2170130,
            "unit": "ns",
            "range": "± 384302.98100863234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4363015.384615385,
            "unit": "ns",
            "range": "± 39827.123215087275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2300545,
            "unit": "ns",
            "range": "± 440055.9705849641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5411192.857142857,
            "unit": "ns",
            "range": "± 87856.47136346622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98132.53012048193,
            "unit": "ns",
            "range": "± 15865.156701998243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 152029.62962962964,
            "unit": "ns",
            "range": "± 21312.46375037647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 127200,
            "unit": "ns",
            "range": "± 4334.89923197199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2268038.4615384615,
            "unit": "ns",
            "range": "± 19104.691328813216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2190421.4285714286,
            "unit": "ns",
            "range": "± 30053.009028188037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15225.824175824177,
            "unit": "ns",
            "range": "± 5486.6371133132925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66210.82474226804,
            "unit": "ns",
            "range": "± 22535.229626358698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38379.032258064515,
            "unit": "ns",
            "range": "± 1669.1155110136303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71807.14285714286,
            "unit": "ns",
            "range": "± 26856.557685631444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3685.714285714286,
            "unit": "ns",
            "range": "± 1232.631917199522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12938.76404494382,
            "unit": "ns",
            "range": "± 4145.189934299732"
          }
        ]
      }
    ]
  }
}