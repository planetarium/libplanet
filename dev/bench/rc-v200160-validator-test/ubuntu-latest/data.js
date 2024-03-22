window.BENCHMARK_DATA = {
  "lastUpdate": 1711095565410,
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
        "date": 1711095535267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5570442.071428572,
            "unit": "ns",
            "range": "± 20755.807107573848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14836373.57142857,
            "unit": "ns",
            "range": "± 103730.54360417467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38080219,
            "unit": "ns",
            "range": "± 227283.70989038888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76096350.21428572,
            "unit": "ns",
            "range": "± 268865.5929242853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151335723.36666667,
            "unit": "ns",
            "range": "± 1428671.2007754853"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41861.1914893617,
            "unit": "ns",
            "range": "± 5247.6301297887385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009370.4210526316,
            "unit": "ns",
            "range": "± 102126.86344814963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1861746.5612244897,
            "unit": "ns",
            "range": "± 66206.98239278598"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649901.268041237,
            "unit": "ns",
            "range": "± 135356.9213361255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7689965.9375,
            "unit": "ns",
            "range": "± 135891.97166056512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2455353.826923077,
            "unit": "ns",
            "range": "± 101048.0512037095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541416.304347826,
            "unit": "ns",
            "range": "± 53269.8736174711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3136508.9615384615,
            "unit": "ns",
            "range": "± 85604.32199905833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3299144.796296296,
            "unit": "ns",
            "range": "± 170993.2747177827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8906197.064516129,
            "unit": "ns",
            "range": "± 170227.8283967177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204007.1231884058,
            "unit": "ns",
            "range": "± 8682.2565312004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195712.2528735632,
            "unit": "ns",
            "range": "± 10606.26955134446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171405.68181818182,
            "unit": "ns",
            "range": "± 4031.4595181299223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3253020.947368421,
            "unit": "ns",
            "range": "± 59626.94684869481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2995620.4285714286,
            "unit": "ns",
            "range": "± 45925.48872771112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16732.59139784946,
            "unit": "ns",
            "range": "± 1521.5030771701522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63649.0824742268,
            "unit": "ns",
            "range": "± 5507.1437955435495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57741.49462365591,
            "unit": "ns",
            "range": "± 5642.062881343666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66897.33333333333,
            "unit": "ns",
            "range": "± 8250.430898277156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3352.9139784946237,
            "unit": "ns",
            "range": "± 619.9328970684612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15649.308510638299,
            "unit": "ns",
            "range": "± 2492.0929592967136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3695255.9821428573,
            "unit": "ns",
            "range": "± 54323.82824173365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215222.4670572917,
            "unit": "ns",
            "range": "± 19750.531806519273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766723.8541917067,
            "unit": "ns",
            "range": "± 2258.203789723938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1987923.3765024038,
            "unit": "ns",
            "range": "± 10773.289748474304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641252.6063639323,
            "unit": "ns",
            "range": "± 1579.4509763191593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585108.9712289664,
            "unit": "ns",
            "range": "± 2012.680487681339"
          }
        ]
      }
    ]
  }
}