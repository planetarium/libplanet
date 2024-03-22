window.BENCHMARK_DATA = {
  "lastUpdate": 1711096179882,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "d3d5e725560f9f0ac6abfdf3cfac3553a23e2448",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T17:08:06+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/d3d5e725560f9f0ac6abfdf3cfac3553a23e2448"
        },
        "date": 1711096104939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570001.07142857,
            "unit": "ns",
            "range": "± 108374.34546459379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25966931.444444444,
            "unit": "ns",
            "range": "± 539100.5195134787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64186225.083333336,
            "unit": "ns",
            "range": "± 791695.5689436392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128269169.13636364,
            "unit": "ns",
            "range": "± 15540667.484537406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222953600.01,
            "unit": "ns",
            "range": "± 26835671.81121731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56606.77368421053,
            "unit": "ns",
            "range": "± 14062.340893807896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302253.2727272727,
            "unit": "ns",
            "range": "± 21342.12391682437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263898.9285714286,
            "unit": "ns",
            "range": "± 27043.54223123094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262266.0208333333,
            "unit": "ns",
            "range": "± 21173.444076548327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5145432.730769231,
            "unit": "ns",
            "range": "± 13943.78060973091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4473458.813559322,
            "unit": "ns",
            "range": "± 197167.74715633897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16521.163157894738,
            "unit": "ns",
            "range": "± 2245.458142185926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82578.3111111111,
            "unit": "ns",
            "range": "± 9988.458089377256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76816.63157894737,
            "unit": "ns",
            "range": "± 14107.086606091214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84989.75,
            "unit": "ns",
            "range": "± 13778.140519258071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6057.336956521739,
            "unit": "ns",
            "range": "± 1199.5579705762673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18299.67525773196,
            "unit": "ns",
            "range": "± 2753.3031791010794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388528.0204081633,
            "unit": "ns",
            "range": "± 152281.8055003722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602487.6666666665,
            "unit": "ns",
            "range": "± 246334.5716561188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2083751.0714285714,
            "unit": "ns",
            "range": "± 108127.52643040851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13594880.886597939,
            "unit": "ns",
            "range": "± 5118381.202826762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3603264.0833333335,
            "unit": "ns",
            "range": "± 52506.48676195479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959828.5384615385,
            "unit": "ns",
            "range": "± 101732.40436408874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4607169.285714285,
            "unit": "ns",
            "range": "± 109742.18879782545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4634227.878378378,
            "unit": "ns",
            "range": "± 232233.33883349333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19863023.48901099,
            "unit": "ns",
            "range": "± 2273749.93265018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4993167.46546875,
            "unit": "ns",
            "range": "± 518107.61589445855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409461.206825658,
            "unit": "ns",
            "range": "± 47473.84821479944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 887387.1805889423,
            "unit": "ns",
            "range": "± 9769.601353867354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010423.0959472656,
            "unit": "ns",
            "range": "± 61948.75740983375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635263.1117788461,
            "unit": "ns",
            "range": "± 6715.197062425901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 628427.5726171875,
            "unit": "ns",
            "range": "± 51277.23746745705"
          }
        ]
      }
    ]
  }
}