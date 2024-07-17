window.BENCHMARK_DATA = {
  "lastUpdate": 1721208873282,
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
          "id": "6a69ab2054a19d10f1f642720181d720a9e4e4e2",
          "message": "Merge branch '5.1-maintenance' into port/5.1.2-to-main",
          "timestamp": "2024-07-17T18:18:35+09:00",
          "tree_id": "15551f907768d43d161cb699a8026392c40db99c",
          "url": "https://github.com/planetarium/libplanet/commit/6a69ab2054a19d10f1f642720181d720a9e4e4e2"
        },
        "date": 1721208682191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940175.8241758242,
            "unit": "ns",
            "range": "± 55166.14771288506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1717075,
            "unit": "ns",
            "range": "± 79075.80449886588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1491380.7228915663,
            "unit": "ns",
            "range": "± 78764.58046645347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726974.074074074,
            "unit": "ns",
            "range": "± 160055.2731272558"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30248.979591836734,
            "unit": "ns",
            "range": "± 845.8532302207221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9422820,
            "unit": "ns",
            "range": "± 64785.1636454785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23372507.14285714,
            "unit": "ns",
            "range": "± 180204.7914682955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58178907.14285714,
            "unit": "ns",
            "range": "± 262836.4494810874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117952296.66666667,
            "unit": "ns",
            "range": "± 727544.9528248769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228815260,
            "unit": "ns",
            "range": "± 589262.9134290203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284920.8854166665,
            "unit": "ns",
            "range": "± 6430.728348768639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1044151.1588541666,
            "unit": "ns",
            "range": "± 2035.2318799284183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723525.1302083334,
            "unit": "ns",
            "range": "± 1091.9897718960297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921765.2994791667,
            "unit": "ns",
            "range": "± 5313.471807587787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608392.109375,
            "unit": "ns",
            "range": "± 1332.8280761912547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549541.3411458334,
            "unit": "ns",
            "range": "± 1173.6867602070995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2169128.5714285714,
            "unit": "ns",
            "range": "± 26680.745825448692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2274150,
            "unit": "ns",
            "range": "± 26170.26351238543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2680570.3703703703,
            "unit": "ns",
            "range": "± 74906.07356916966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2294636.8421052634,
            "unit": "ns",
            "range": "± 50642.002884368136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2851975,
            "unit": "ns",
            "range": "± 19673.060722262264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170200,
            "unit": "ns",
            "range": "± 8210.1085469646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160958.92857142858,
            "unit": "ns",
            "range": "± 6523.684870202905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143911.11111111112,
            "unit": "ns",
            "range": "± 3018.15855212274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2696033.3333333335,
            "unit": "ns",
            "range": "± 32120.835842768713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2460620,
            "unit": "ns",
            "range": "± 28218.362815726927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9498.876404494382,
            "unit": "ns",
            "range": "± 1004.9303890435838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49815.95744680851,
            "unit": "ns",
            "range": "± 3317.7691426908027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43272.5,
            "unit": "ns",
            "range": "± 1539.228494725315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46727.083333333336,
            "unit": "ns",
            "range": "± 7580.855099201389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2137.8947368421054,
            "unit": "ns",
            "range": "± 293.97457820631195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8925.274725274725,
            "unit": "ns",
            "range": "± 759.03350922859"
          }
        ]
      }
    ]
  }
}