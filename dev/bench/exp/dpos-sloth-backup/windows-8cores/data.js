window.BENCHMARK_DATA = {
  "lastUpdate": 1722308332581,
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
        "date": 1722308034430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 963421.052631579,
            "unit": "ns",
            "range": "± 64599.41685847209"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1721977.0833333333,
            "unit": "ns",
            "range": "± 61038.223948616156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1492908.4415584416,
            "unit": "ns",
            "range": "± 76313.60220661732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6743588.888888889,
            "unit": "ns",
            "range": "± 219508.264442891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39772.63157894737,
            "unit": "ns",
            "range": "± 3887.635667886872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10344700,
            "unit": "ns",
            "range": "± 79479.82811332116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25771180,
            "unit": "ns",
            "range": "± 278401.3551896409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63161740,
            "unit": "ns",
            "range": "± 803614.6587228768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125261413.33333333,
            "unit": "ns",
            "range": "± 894455.8656098185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250367307.14285713,
            "unit": "ns",
            "range": "± 2437441.076041803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373549.7488839286,
            "unit": "ns",
            "range": "± 5069.556515991812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051549.6354166667,
            "unit": "ns",
            "range": "± 2600.7925867694858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737213.2682291666,
            "unit": "ns",
            "range": "± 2484.9623722459723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937462.3828125,
            "unit": "ns",
            "range": "± 2910.0087373852357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614776.3462611607,
            "unit": "ns",
            "range": "± 468.77117900023035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567269.775390625,
            "unit": "ns",
            "range": "± 1137.5740870374443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199200,
            "unit": "ns",
            "range": "± 23201.436737121832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2246286.206896552,
            "unit": "ns",
            "range": "± 64440.591267893134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2725666.6666666665,
            "unit": "ns",
            "range": "± 65981.85301684268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2224030.769230769,
            "unit": "ns",
            "range": "± 103639.82089892638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2977285.714285714,
            "unit": "ns",
            "range": "± 32614.434207591563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186076.92307692306,
            "unit": "ns",
            "range": "± 9340.49865290473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171551.51515151514,
            "unit": "ns",
            "range": "± 7684.9751998847605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148511.76470588235,
            "unit": "ns",
            "range": "± 4410.783253874075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2804886.6666666665,
            "unit": "ns",
            "range": "± 42762.765289888535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2590133.3333333335,
            "unit": "ns",
            "range": "± 44814.373757067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12120.652173913044,
            "unit": "ns",
            "range": "± 1236.4907844804638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60339.583333333336,
            "unit": "ns",
            "range": "± 6534.128688608622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46376.92307692308,
            "unit": "ns",
            "range": "± 2530.528136491007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60520.61855670103,
            "unit": "ns",
            "range": "± 12919.372873585444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2877.319587628866,
            "unit": "ns",
            "range": "± 489.79271862339345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10407.777777777777,
            "unit": "ns",
            "range": "± 1447.6814301137283"
          }
        ]
      }
    ]
  }
}