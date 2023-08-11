window.BENCHMARK_DATA = {
  "lastUpdate": 1691723442765,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3",
          "message": "Merge pull request #3372 from greymistcube/release/3.2.0\n\n🚀 Release 3.2.0",
          "timestamp": "2023-08-11T10:15:50+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/planetarium/libplanet/commit/97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3"
        },
        "date": 1691723381152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1307480.808080808,
            "unit": "ns",
            "range": "± 119563.1032062983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2335728.5714285714,
            "unit": "ns",
            "range": "± 66048.77685748425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605934.693877551,
            "unit": "ns",
            "range": "± 113822.34584119201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4074897.0588235296,
            "unit": "ns",
            "range": "± 105363.10516723245"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43170.73170731707,
            "unit": "ns",
            "range": "± 2286.054761280846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6971846.666666667,
            "unit": "ns",
            "range": "± 91040.64921519294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18081340,
            "unit": "ns",
            "range": "± 104763.46691475993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46317986.666666664,
            "unit": "ns",
            "range": "± 252242.84746100949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92035033.33333333,
            "unit": "ns",
            "range": "± 430423.75576146995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184167933.33333334,
            "unit": "ns",
            "range": "± 1107417.255642713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4331969.951923077,
            "unit": "ns",
            "range": "± 4882.534644337924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382465.9700520833,
            "unit": "ns",
            "range": "± 1129.6346292847488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1004186.1653645834,
            "unit": "ns",
            "range": "± 753.2349481168648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535999.453125,
            "unit": "ns",
            "range": "± 3240.314062461951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801120.99609375,
            "unit": "ns",
            "range": "± 839.2345003543902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728671.2369791666,
            "unit": "ns",
            "range": "± 479.813186228852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2982193.75,
            "unit": "ns",
            "range": "± 53429.910084770556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3129733.3333333335,
            "unit": "ns",
            "range": "± 51493.68430991827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3915029.411764706,
            "unit": "ns",
            "range": "± 80176.03105593563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3471435,
            "unit": "ns",
            "range": "± 79893.10802895526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5546182.75862069,
            "unit": "ns",
            "range": "± 98765.30286118241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241433.33333333334,
            "unit": "ns",
            "range": "± 8902.195847603609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235347.16981132075,
            "unit": "ns",
            "range": "± 9813.875651216122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207450.72463768115,
            "unit": "ns",
            "range": "± 9937.001902994652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3731100,
            "unit": "ns",
            "range": "± 27537.325318815656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3405521.4285714286,
            "unit": "ns",
            "range": "± 34040.861838756005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18031.91489361702,
            "unit": "ns",
            "range": "± 2088.329721317274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78501.13636363637,
            "unit": "ns",
            "range": "± 4318.111930908912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64956.818181818184,
            "unit": "ns",
            "range": "± 2435.4358501358333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69234.66666666667,
            "unit": "ns",
            "range": "± 3206.9389856462276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4098.453608247422,
            "unit": "ns",
            "range": "± 648.2530052092981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16637.63440860215,
            "unit": "ns",
            "range": "± 1445.6015731758166"
          }
        ]
      }
    ]
  }
}