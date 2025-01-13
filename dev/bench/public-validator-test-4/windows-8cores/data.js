window.BENCHMARK_DATA = {
  "lastUpdate": 1736740357174,
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
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1736740112483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065411.797752809,
            "unit": "ns",
            "range": "± 76667.91065370235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1892287.037037037,
            "unit": "ns",
            "range": "± 79311.5353533886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1563103.488372093,
            "unit": "ns",
            "range": "± 75673.7819975039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6593626.315789473,
            "unit": "ns",
            "range": "± 225840.96854323446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32501.515151515152,
            "unit": "ns",
            "range": "± 4756.785993400689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9977721.42857143,
            "unit": "ns",
            "range": "± 142823.52843535715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24557693.333333332,
            "unit": "ns",
            "range": "± 320656.27896252903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61399013.333333336,
            "unit": "ns",
            "range": "± 625142.9834921958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123463493.33333333,
            "unit": "ns",
            "range": "± 938122.8867619991"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266937953.33333334,
            "unit": "ns",
            "range": "± 3154070.999261264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3324051.6145833335,
            "unit": "ns",
            "range": "± 12791.613982984269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075710.3255208333,
            "unit": "ns",
            "range": "± 9186.194496301272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740561.1955915178,
            "unit": "ns",
            "range": "± 2043.0730935222168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980099.4140625,
            "unit": "ns",
            "range": "± 2569.82400679201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631345.21484375,
            "unit": "ns",
            "range": "± 1400.7547825408521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566823.5421316965,
            "unit": "ns",
            "range": "± 1999.7862626323226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2372613.3333333335,
            "unit": "ns",
            "range": "± 42724.43039270334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2417357.1428571427,
            "unit": "ns",
            "range": "± 68188.1190290477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2755157.1428571427,
            "unit": "ns",
            "range": "± 61162.54257105907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2426573.3333333335,
            "unit": "ns",
            "range": "± 44275.12146739273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3050619.0476190476,
            "unit": "ns",
            "range": "± 64492.12834949409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102434.78260869565,
            "unit": "ns",
            "range": "± 11226.111974415353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161198,
            "unit": "ns",
            "range": "± 6502.7620505223995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153023.45679012345,
            "unit": "ns",
            "range": "± 8072.395425227544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2635196.153846154,
            "unit": "ns",
            "range": "± 71442.83018340878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2553533.3333333335,
            "unit": "ns",
            "range": "± 46450.998246488074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12223.91304347826,
            "unit": "ns",
            "range": "± 1624.900305663237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57132.63157894737,
            "unit": "ns",
            "range": "± 5213.902081552112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45850.5376344086,
            "unit": "ns",
            "range": "± 3571.7071687236253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54263.9175257732,
            "unit": "ns",
            "range": "± 9133.502723113797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2767.6767676767677,
            "unit": "ns",
            "range": "± 524.2737022423639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12613.541666666666,
            "unit": "ns",
            "range": "± 1508.405905979217"
          }
        ]
      }
    ]
  }
}