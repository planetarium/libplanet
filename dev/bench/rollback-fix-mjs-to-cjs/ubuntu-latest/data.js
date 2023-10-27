window.BENCHMARK_DATA = {
  "lastUpdate": 1698372359847,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "330ff7bca7b03ca2c22a8f58155b38dfb937453f",
          "message": "Revert \"fix import mjs to require cjs (#3459)\"\n\nThis reverts commit a5937c2b2a851d33743b66c34d0f38cb4551f544.",
          "timestamp": "2023-10-27T10:47:58+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/330ff7bca7b03ca2c22a8f58155b38dfb937453f"
        },
        "date": 1698372327720,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53974.25,
            "unit": "ns",
            "range": "± 3746.8443097637773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5659782.779166667,
            "unit": "ns",
            "range": "± 73623.55568887101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1765121.2518229166,
            "unit": "ns",
            "range": "± 30000.3152746151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1193509.9529947916,
            "unit": "ns",
            "range": "± 15399.534027582436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2894050.05,
            "unit": "ns",
            "range": "± 43544.08670086105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 950147.3958984375,
            "unit": "ns",
            "range": "± 11598.772860059333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838683.5619140625,
            "unit": "ns",
            "range": "± 8635.789756397287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8780977.9375,
            "unit": "ns",
            "range": "± 506288.2806740551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24365653.96226415,
            "unit": "ns",
            "range": "± 1005035.5686556372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61010320.234042555,
            "unit": "ns",
            "range": "± 2352743.559485756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121903467,
            "unit": "ns",
            "range": "± 4104355.812813603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244509375,
            "unit": "ns",
            "range": "± 6172310.478107722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3820523.26,
            "unit": "ns",
            "range": "± 232176.2949809111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3984429.5,
            "unit": "ns",
            "range": "± 278124.3639000693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4698309.5,
            "unit": "ns",
            "range": "± 365591.6679612058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4625906.5051546395,
            "unit": "ns",
            "range": "± 297418.3274046676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12339868.333333334,
            "unit": "ns",
            "range": "± 821502.0008715878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299895.8829787234,
            "unit": "ns",
            "range": "± 22281.798920087018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294794.74226804124,
            "unit": "ns",
            "range": "± 18940.482356075285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261351.0202020202,
            "unit": "ns",
            "range": "± 17407.31666949966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4846965.57,
            "unit": "ns",
            "range": "± 291595.81437883794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4453610.38,
            "unit": "ns",
            "range": "± 280779.92324406863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22046.195652173912,
            "unit": "ns",
            "range": "± 2159.030405290741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96864.76041666667,
            "unit": "ns",
            "range": "± 8158.3580607410695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85143.36956521739,
            "unit": "ns",
            "range": "± 6665.866438686287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93180.35416666667,
            "unit": "ns",
            "range": "± 9678.944510723608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5669.673913043478,
            "unit": "ns",
            "range": "± 533.0195986066605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21519.73404255319,
            "unit": "ns",
            "range": "± 2366.3334197101735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577823.576923077,
            "unit": "ns",
            "range": "± 80644.68671228489"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3131564.25,
            "unit": "ns",
            "range": "± 133096.23775070018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2357873.887755102,
            "unit": "ns",
            "range": "± 168687.18738711276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10393081.117021276,
            "unit": "ns",
            "range": "± 652326.0636550032"
          }
        ]
      }
    ]
  }
}