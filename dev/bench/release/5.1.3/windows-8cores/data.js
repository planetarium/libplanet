window.BENCHMARK_DATA = {
  "lastUpdate": 1722321048801,
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
          "id": "f037f4d6e6b19539c8286664c4021971742909f6",
          "message": "Release 5.1.3",
          "timestamp": "2024-07-30T15:16:44+09:00",
          "tree_id": "6390d9a3eae9dcd8e92fcfd6c15a159ff2e46ca0",
          "url": "https://github.com/planetarium/libplanet/commit/f037f4d6e6b19539c8286664c4021971742909f6"
        },
        "date": 1722320797999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986542.3913043478,
            "unit": "ns",
            "range": "± 73840.21691313796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771924.4444444445,
            "unit": "ns",
            "range": "± 66311.94584398923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1527411.2903225806,
            "unit": "ns",
            "range": "± 68947.34532827185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7082701.754385965,
            "unit": "ns",
            "range": "± 305854.052783366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30312.82051282051,
            "unit": "ns",
            "range": "± 972.0243356222288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9645213.333333334,
            "unit": "ns",
            "range": "± 111815.92569082114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24166209.09090909,
            "unit": "ns",
            "range": "± 586779.7663511705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59143535.71428572,
            "unit": "ns",
            "range": "± 597914.325747482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119165057.14285715,
            "unit": "ns",
            "range": "± 1506159.2502961787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242314400,
            "unit": "ns",
            "range": "± 3108693.974967623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3365348.8839285714,
            "unit": "ns",
            "range": "± 9861.785552598778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057177.9817708333,
            "unit": "ns",
            "range": "± 2313.678891026773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731734.84375,
            "unit": "ns",
            "range": "± 1443.908031734442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1893777.63671875,
            "unit": "ns",
            "range": "± 2834.2627189188765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629781.7731584822,
            "unit": "ns",
            "range": "± 1247.0330604503492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566360.8528645834,
            "unit": "ns",
            "range": "± 946.9190608805261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183658.8235294116,
            "unit": "ns",
            "range": "± 42585.958055788906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2357328.5714285714,
            "unit": "ns",
            "range": "± 35053.068088508066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2729629.6296296297,
            "unit": "ns",
            "range": "± 74181.6783040893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2322875,
            "unit": "ns",
            "range": "± 42282.659960477096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3001388.888888889,
            "unit": "ns",
            "range": "± 81739.29632742482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179461.81818181818,
            "unit": "ns",
            "range": "± 7456.801292906061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170111.47540983607,
            "unit": "ns",
            "range": "± 7516.073850104094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144314.2857142857,
            "unit": "ns",
            "range": "± 2108.53837193779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2764686.6666666665,
            "unit": "ns",
            "range": "± 40285.42569974313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486346.6666666665,
            "unit": "ns",
            "range": "± 36959.82117045997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11596.236559139785,
            "unit": "ns",
            "range": "± 1301.1332134273125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55746.875,
            "unit": "ns",
            "range": "± 4391.713563783024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44787.5,
            "unit": "ns",
            "range": "± 1212.768094737367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56506.382978723406,
            "unit": "ns",
            "range": "± 10378.95729437292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2557.216494845361,
            "unit": "ns",
            "range": "± 452.5960815765193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10479.787234042553,
            "unit": "ns",
            "range": "± 1207.911179106093"
          }
        ]
      }
    ]
  }
}