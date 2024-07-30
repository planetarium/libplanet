window.BENCHMARK_DATA = {
  "lastUpdate": 1722308031481,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "985c1f787a192654603dba83f7be5bff42d3aa20",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:16:18+09:00",
          "tree_id": "6512b68e13dce93054d5efa58408c2563d333d72",
          "url": "https://github.com/planetarium/libplanet/commit/985c1f787a192654603dba83f7be5bff42d3aa20"
        },
        "date": 1722308005086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004899.0253164558,
            "unit": "ns",
            "range": "± 49148.78351234078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1969941.6888888888,
            "unit": "ns",
            "range": "± 74423.40724341497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680739.3733333333,
            "unit": "ns",
            "range": "± 83542.32205178813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8348553.571428572,
            "unit": "ns",
            "range": "± 269579.3839892376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209799.53703703705,
            "unit": "ns",
            "range": "± 8766.070891027914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224146.60563380283,
            "unit": "ns",
            "range": "± 10923.04343183172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174392.44545454546,
            "unit": "ns",
            "range": "± 7384.009546205313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3170272.533333333,
            "unit": "ns",
            "range": "± 44031.603432513046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2813995.6428571427,
            "unit": "ns",
            "range": "± 39161.61505441686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15097.717391304348,
            "unit": "ns",
            "range": "± 2153.4972595123463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73378.21276595745,
            "unit": "ns",
            "range": "± 5512.2470968194475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52734.62962962963,
            "unit": "ns",
            "range": "± 1483.0156944070245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66532.62886597938,
            "unit": "ns",
            "range": "± 12045.54778600755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3082.054945054945,
            "unit": "ns",
            "range": "± 340.28864749527514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12947.307692307691,
            "unit": "ns",
            "range": "± 1171.2570615682557"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37869.129213483146,
            "unit": "ns",
            "range": "± 3893.686537151061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10840822.5,
            "unit": "ns",
            "range": "± 184295.43274225178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28367798.733333334,
            "unit": "ns",
            "range": "± 152394.7666524893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72223276.86666666,
            "unit": "ns",
            "range": "± 323509.9274959109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145521835.33333334,
            "unit": "ns",
            "range": "± 717638.7093433243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302186509,
            "unit": "ns",
            "range": "± 3264944.3066522153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761867.129206731,
            "unit": "ns",
            "range": "± 6448.705038352485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205207.361607143,
            "unit": "ns",
            "range": "± 1354.7409010759745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758397.42421875,
            "unit": "ns",
            "range": "± 2525.1320842591235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924521.8299153645,
            "unit": "ns",
            "range": "± 2520.094542713255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619517.9230018029,
            "unit": "ns",
            "range": "± 353.49547655862625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568598.6645132211,
            "unit": "ns",
            "range": "± 367.05157139056746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2498990.210526316,
            "unit": "ns",
            "range": "± 53805.64995485444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2578475.214285714,
            "unit": "ns",
            "range": "± 29318.60859637566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3102179.933333333,
            "unit": "ns",
            "range": "± 47891.16498070937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2624433.152173913,
            "unit": "ns",
            "range": "± 63665.17801150919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282712.6,
            "unit": "ns",
            "range": "± 50686.511282306936"
          }
        ]
      }
    ]
  }
}