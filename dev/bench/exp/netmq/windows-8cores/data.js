window.BENCHMARK_DATA = {
  "lastUpdate": 1734787058917,
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
          "id": "1d67959c8490866d3d5d505db74f48555f3a0ade",
          "message": "chore: Change netmq",
          "timestamp": "2024-12-21T22:06:49+09:00",
          "tree_id": "cf9493cefaae266b7499f6f84de376b263fb168d",
          "url": "https://github.com/planetarium/libplanet/commit/1d67959c8490866d3d5d505db74f48555f3a0ade"
        },
        "date": 1734786983558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029179.7979797979,
            "unit": "ns",
            "range": "± 103696.64251723161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826486.7346938776,
            "unit": "ns",
            "range": "± 72461.45439093105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1607911.5789473683,
            "unit": "ns",
            "range": "± 142559.42386453022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6581677.2727272725,
            "unit": "ns",
            "range": "± 204193.7059398613"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33466.666666666664,
            "unit": "ns",
            "range": "± 4471.068791726523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10366713.333333334,
            "unit": "ns",
            "range": "± 136886.43816091114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25383286.666666668,
            "unit": "ns",
            "range": "± 251810.10381029668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64507321.428571425,
            "unit": "ns",
            "range": "± 268781.1067609633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127937846.15384616,
            "unit": "ns",
            "range": "± 289161.2601282792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256433453.33333334,
            "unit": "ns",
            "range": "± 1102194.592533244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3331644.9776785714,
            "unit": "ns",
            "range": "± 2425.331642928321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1093157.7706473214,
            "unit": "ns",
            "range": "± 1675.8360748988723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729224.6549479166,
            "unit": "ns",
            "range": "± 1513.5360109976605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969468.3203125,
            "unit": "ns",
            "range": "± 3887.6803026980406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630393.7760416666,
            "unit": "ns",
            "range": "± 748.5954779776478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571017.3111979166,
            "unit": "ns",
            "range": "± 813.4200539502931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2334087.5,
            "unit": "ns",
            "range": "± 70707.52914237179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2420381.25,
            "unit": "ns",
            "range": "± 45691.738403494055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879784,
            "unit": "ns",
            "range": "± 73860.79068084771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2521038.1818181816,
            "unit": "ns",
            "range": "± 103852.5940597022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3096331.25,
            "unit": "ns",
            "range": "± 55118.39038227925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112590.21739130435,
            "unit": "ns",
            "range": "± 8354.179841931977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181315.49295774646,
            "unit": "ns",
            "range": "± 8788.216914666786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174489.898989899,
            "unit": "ns",
            "range": "± 15519.004116411692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2706646.6666666665,
            "unit": "ns",
            "range": "± 44122.781071956575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2606885.714285714,
            "unit": "ns",
            "range": "± 40486.063264799144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14362.105263157895,
            "unit": "ns",
            "range": "± 1951.5503355553112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63696.84210526316,
            "unit": "ns",
            "range": "± 6998.745368287317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54424,
            "unit": "ns",
            "range": "± 7437.851867578462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68658.69565217392,
            "unit": "ns",
            "range": "± 11342.138218999185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3336.9565217391305,
            "unit": "ns",
            "range": "± 639.8346955654306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13112.765957446809,
            "unit": "ns",
            "range": "± 2229.578003494687"
          }
        ]
      }
    ]
  }
}