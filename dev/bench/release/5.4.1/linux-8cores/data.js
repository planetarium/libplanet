window.BENCHMARK_DATA = {
  "lastUpdate": 1732235763049,
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
          "id": "127a9c3f980fa3a9414c9b8ca62105e2d607e012",
          "message": "Release 5.4.1",
          "timestamp": "2024-11-22T09:26:19+09:00",
          "tree_id": "1c9ba778bdd76c9a61f06055f9578e53c5c85f81",
          "url": "https://github.com/planetarium/libplanet/commit/127a9c3f980fa3a9414c9b8ca62105e2d607e012"
        },
        "date": 1732235736522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10709388.533333333,
            "unit": "ns",
            "range": "± 136100.14027539044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28083156.07142857,
            "unit": "ns",
            "range": "± 136205.01368297395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71577428.16666667,
            "unit": "ns",
            "range": "± 302790.2846643122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143583677.66666666,
            "unit": "ns",
            "range": "± 777881.1095029393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 303578613.26666665,
            "unit": "ns",
            "range": "± 980266.7242374442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109890.37096774194,
            "unit": "ns",
            "range": "± 6789.517656277863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192004.26086956522,
            "unit": "ns",
            "range": "± 7153.327649686412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165488.86666666667,
            "unit": "ns",
            "range": "± 2883.5360699437533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2909203.1764705884,
            "unit": "ns",
            "range": "± 55685.56089691843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832594.3333333335,
            "unit": "ns",
            "range": "± 25213.862246410252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13059.739130434782,
            "unit": "ns",
            "range": "± 1175.3390941104149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60146.2688172043,
            "unit": "ns",
            "range": "± 3785.7206916534024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60068.8125,
            "unit": "ns",
            "range": "± 812.8394034699188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53792.34020618557,
            "unit": "ns",
            "range": "± 8014.880211839566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2842.6458333333335,
            "unit": "ns",
            "range": "± 511.25474089510357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12386.595744680852,
            "unit": "ns",
            "range": "± 1075.2353387724654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741782.9005408655,
            "unit": "ns",
            "range": "± 4704.725118993254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1227711.133203125,
            "unit": "ns",
            "range": "± 3029.6925189666285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769153.69765625,
            "unit": "ns",
            "range": "± 675.6966425168099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1992383.5236979167,
            "unit": "ns",
            "range": "± 1576.0723061108827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627442.3500976562,
            "unit": "ns",
            "range": "± 393.44805242413724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577553.2649088542,
            "unit": "ns",
            "range": "± 491.1028177987666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445104,
            "unit": "ns",
            "range": "± 39388.61005079176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534304.3571428573,
            "unit": "ns",
            "range": "± 37346.32600168557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3073177.285714286,
            "unit": "ns",
            "range": "± 54462.73509216903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2559586.4210526315,
            "unit": "ns",
            "range": "± 56395.69817549699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3257198.119047619,
            "unit": "ns",
            "range": "± 75519.85993530191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 989033.3411764706,
            "unit": "ns",
            "range": "± 53410.71237623567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1954831.5625,
            "unit": "ns",
            "range": "± 84045.21562388827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570787.5294117648,
            "unit": "ns",
            "range": "± 74940.03555051569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7884498.888888889,
            "unit": "ns",
            "range": "± 252817.08281395608"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31311.28181818182,
            "unit": "ns",
            "range": "± 1246.3816918927853"
          }
        ]
      }
    ]
  }
}