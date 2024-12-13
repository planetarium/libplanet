window.BENCHMARK_DATA = {
  "lastUpdate": 1734066108077,
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
          "id": "49ce9b0d402217257847c1d1dc92c53c57d40547",
          "message": "prepare: 5.4.3",
          "timestamp": "2024-12-13T13:46:36+09:00",
          "tree_id": "860f31b64bf519864f79ee30dfa27ae1bd55a521",
          "url": "https://github.com/planetarium/libplanet/commit/49ce9b0d402217257847c1d1dc92c53c57d40547"
        },
        "date": 1734065777007,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 922098.8888888889,
            "unit": "ns",
            "range": "± 54417.46351889448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1711587.2340425532,
            "unit": "ns",
            "range": "± 65361.834419674175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1427368.2926829269,
            "unit": "ns",
            "range": "± 75303.6238992369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668206.8965517245,
            "unit": "ns",
            "range": "± 286944.97171706706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28263.157894736843,
            "unit": "ns",
            "range": "± 633.5179786239426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9787246.666666666,
            "unit": "ns",
            "range": "± 43360.56250733356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23416553.333333332,
            "unit": "ns",
            "range": "± 149874.18469534785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59399264.28571428,
            "unit": "ns",
            "range": "± 386412.11481076456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118250378.57142857,
            "unit": "ns",
            "range": "± 639113.676151556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239262006.66666666,
            "unit": "ns",
            "range": "± 2518818.4079236914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3264323.7760416665,
            "unit": "ns",
            "range": "± 7632.603534849902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051239.7235576923,
            "unit": "ns",
            "range": "± 975.6105957612127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781250.44921875,
            "unit": "ns",
            "range": "± 11421.228559094536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900111.1979166667,
            "unit": "ns",
            "range": "± 3372.429088453113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618717.79296875,
            "unit": "ns",
            "range": "± 871.214029203279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559214.0299479166,
            "unit": "ns",
            "range": "± 922.5174517032426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2258500,
            "unit": "ns",
            "range": "± 62369.938958718616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2317985.714285714,
            "unit": "ns",
            "range": "± 23643.111117124652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2716815.789473684,
            "unit": "ns",
            "range": "± 57958.78097749867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2341267.7419354836,
            "unit": "ns",
            "range": "± 59024.00860156695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2965186.6666666665,
            "unit": "ns",
            "range": "± 52678.13136216511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89152.94117647059,
            "unit": "ns",
            "range": "± 4790.307382405347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160409.0909090909,
            "unit": "ns",
            "range": "± 6576.255625136392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146372.72727272726,
            "unit": "ns",
            "range": "± 3496.0088561212087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2531807.1428571427,
            "unit": "ns",
            "range": "± 28581.87872076976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2454235.714285714,
            "unit": "ns",
            "range": "± 29310.42364187072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9083.908045977012,
            "unit": "ns",
            "range": "± 699.9789968972641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49951.6129032258,
            "unit": "ns",
            "range": "± 3787.8413292380487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43585.71428571428,
            "unit": "ns",
            "range": "± 689.3220112290301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48830.927835051545,
            "unit": "ns",
            "range": "± 8950.411545760786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2068.3673469387754,
            "unit": "ns",
            "range": "± 347.7014179381321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8904.444444444445,
            "unit": "ns",
            "range": "± 930.0128199081496"
          }
        ]
      }
    ]
  }
}