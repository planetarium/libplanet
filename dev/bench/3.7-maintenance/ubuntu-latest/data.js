window.BENCHMARK_DATA = {
  "lastUpdate": 1698414454797,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9096adbe5ba18dfe201c3ac979fc0e3eec3bab53",
          "message": "Merge pull request #3463 from OnedgeLee/release/3.7.0\n\n🚀 Release 3.7.0",
          "timestamp": "2023-10-27T22:28:05+09:00",
          "tree_id": "9407f4b60e5c3eb4c806c8f791a2846bfc6b60bd",
          "url": "https://github.com/planetarium/libplanet/commit/9096adbe5ba18dfe201c3ac979fc0e3eec3bab53"
        },
        "date": 1698414422833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49693.78723404255,
            "unit": "ns",
            "range": "± 4597.197121464199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5122429.132254465,
            "unit": "ns",
            "range": "± 4040.5552248167605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1605610.6979166667,
            "unit": "ns",
            "range": "± 382.4630906531098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1136038.8246372768,
            "unit": "ns",
            "range": "± 1067.435386075598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2526605.434375,
            "unit": "ns",
            "range": "± 3902.888656578481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804437.052734375,
            "unit": "ns",
            "range": "± 987.3164885617598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715744.1974158654,
            "unit": "ns",
            "range": "± 621.3554819622989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7744396.083333333,
            "unit": "ns",
            "range": "± 23709.526315034916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19605902.714285713,
            "unit": "ns",
            "range": "± 54619.366370192525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51243842.071428575,
            "unit": "ns",
            "range": "± 192465.31158845391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101566727.71428572,
            "unit": "ns",
            "range": "± 182082.19928855824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203274045.07692307,
            "unit": "ns",
            "range": "± 375347.5693479448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264784.4615384615,
            "unit": "ns",
            "range": "± 19489.44346569609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419437.5714285714,
            "unit": "ns",
            "range": "± 34770.08029395894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4151586,
            "unit": "ns",
            "range": "± 33392.003608648585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4163772.380952381,
            "unit": "ns",
            "range": "± 82117.3203365016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10002545.05,
            "unit": "ns",
            "range": "± 214984.332004767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270729.5641025641,
            "unit": "ns",
            "range": "± 8510.378174523992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263906.15,
            "unit": "ns",
            "range": "± 5903.924977014065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230737.95918367346,
            "unit": "ns",
            "range": "± 9117.598457011545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174213.4,
            "unit": "ns",
            "range": "± 30499.418668464583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3883847.4285714286,
            "unit": "ns",
            "range": "± 30329.117879368983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20374.827956989247,
            "unit": "ns",
            "range": "± 1229.6008598026037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91667.46391752578,
            "unit": "ns",
            "range": "± 5868.064842968988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72382.80952380953,
            "unit": "ns",
            "range": "± 3138.7027310819644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84207.67708333333,
            "unit": "ns",
            "range": "± 8773.452407533694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5589.836734693878,
            "unit": "ns",
            "range": "± 654.9925740332575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20686.26595744681,
            "unit": "ns",
            "range": "± 1474.8532945123793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333132.4893617022,
            "unit": "ns",
            "range": "± 99861.55105210484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536799.2,
            "unit": "ns",
            "range": "± 75543.94695503292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993171.1276595744,
            "unit": "ns",
            "range": "± 117621.17441012879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8385292.113207547,
            "unit": "ns",
            "range": "± 347892.1666647837"
          }
        ]
      }
    ]
  }
}