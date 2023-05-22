window.BENCHMARK_DATA = {
  "lastUpdate": 1684725803002,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a",
          "message": "Merge pull request #3190 from greymistcube/release/1.3.0\n\n🚀 Release 1.3.0",
          "timestamp": "2023-05-19T16:15:18+09:00",
          "tree_id": "b33c790994676a85b647569d28526a969f6cfc6e",
          "url": "https://github.com/planetarium/libplanet/commit/3bf75a4fb6ee1fe6865c8d8f2efca983444d9d4a"
        },
        "date": 1684481318234,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396157.6315789474,
            "unit": "ns",
            "range": "± 114404.13568583419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585744.4,
            "unit": "ns",
            "range": "± 124817.97649640222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4395477.805555556,
            "unit": "ns",
            "range": "± 146267.45749127216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4500268.136363637,
            "unit": "ns",
            "range": "± 168243.31833439038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7031267.70967742,
            "unit": "ns",
            "range": "± 204729.4524913621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286529.3142857143,
            "unit": "ns",
            "range": "± 7938.995731315689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268335.0444444445,
            "unit": "ns",
            "range": "± 10109.53920125028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239242.0909090909,
            "unit": "ns",
            "range": "± 5884.562328743387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4284998.769230769,
            "unit": "ns",
            "range": "± 64366.47485318457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3887387.1052631577,
            "unit": "ns",
            "range": "± 84913.63140659437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18072.76595744681,
            "unit": "ns",
            "range": "± 1358.774435342552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86502.09574468085,
            "unit": "ns",
            "range": "± 5190.684385375771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75106.81333333334,
            "unit": "ns",
            "range": "± 3779.647669456139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86253.21052631579,
            "unit": "ns",
            "range": "± 4375.636329543517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5335.20618556701,
            "unit": "ns",
            "range": "± 583.99116963473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18241.494736842105,
            "unit": "ns",
            "range": "± 1310.438734990497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5958127.747596154,
            "unit": "ns",
            "range": "± 14753.065184864483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874200.0860677084,
            "unit": "ns",
            "range": "± 2329.9412846828136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376537.4800502232,
            "unit": "ns",
            "range": "± 2811.546910065696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676453.9364583334,
            "unit": "ns",
            "range": "± 1538.2833935354572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822490.1604817709,
            "unit": "ns",
            "range": "± 636.1300201952171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753077.7873046875,
            "unit": "ns",
            "range": "± 450.4207790805544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7742095.615384615,
            "unit": "ns",
            "range": "± 202862.43700420775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21205514.70588235,
            "unit": "ns",
            "range": "± 425572.45192252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53752317.21428572,
            "unit": "ns",
            "range": "± 534409.2745917868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108848994.26666667,
            "unit": "ns",
            "range": "± 854575.1971316732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214424658.6,
            "unit": "ns",
            "range": "± 2942515.2664702837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409341.6956521738,
            "unit": "ns",
            "range": "± 78986.16073714601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773487.1818181816,
            "unit": "ns",
            "range": "± 116361.40475039328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2305512.313253012,
            "unit": "ns",
            "range": "± 120981.6423387195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5606974.96,
            "unit": "ns",
            "range": "± 223945.22847995025"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49574.9125,
            "unit": "ns",
            "range": "± 2609.8600097951326"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f8d76421cd2de19f739ef0a53b4fe02b3c00c05",
          "message": "Merge pull request #3192 from greymistcube/prepare/1.3.1\n\n🔧 Prepare 1.3.1",
          "timestamp": "2023-05-22T12:10:53+09:00",
          "tree_id": "c546d985806a3d5acd8e4c9d43c70e1c7aa4249d",
          "url": "https://github.com/planetarium/libplanet/commit/9f8d76421cd2de19f739ef0a53b4fe02b3c00c05"
        },
        "date": 1684725779889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3235649.52,
            "unit": "ns",
            "range": "± 84540.3684067164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3432234.736842105,
            "unit": "ns",
            "range": "± 73917.07065717642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4230592.111111111,
            "unit": "ns",
            "range": "± 117063.15492940397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229636.357142857,
            "unit": "ns",
            "range": "± 61619.31902802904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6828767.914893617,
            "unit": "ns",
            "range": "± 263920.3188310104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278523.23333333334,
            "unit": "ns",
            "range": "± 7832.523980760953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260896.86666666667,
            "unit": "ns",
            "range": "± 9612.892776228846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231807.66666666666,
            "unit": "ns",
            "range": "± 5482.345960748313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4219939.25,
            "unit": "ns",
            "range": "± 79270.99831800614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3888247.6,
            "unit": "ns",
            "range": "± 68099.42574102327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16768.641304347828,
            "unit": "ns",
            "range": "± 1004.0475513182481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79636.13235294117,
            "unit": "ns",
            "range": "± 3609.1839318415236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69950.91666666667,
            "unit": "ns",
            "range": "± 927.896003022021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87516.04081632652,
            "unit": "ns",
            "range": "± 11764.064654454816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4766.397959183673,
            "unit": "ns",
            "range": "± 580.0795846535841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17530.684210526317,
            "unit": "ns",
            "range": "± 1247.7996400742056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5791284.2453125,
            "unit": "ns",
            "range": "± 39589.383490425724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829895.4954427083,
            "unit": "ns",
            "range": "± 6853.571247983633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345352.0139322917,
            "unit": "ns",
            "range": "± 5331.130112040148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620767.163504464,
            "unit": "ns",
            "range": "± 4823.038778999896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815784.9638020833,
            "unit": "ns",
            "range": "± 2528.1240913767638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745780.787109375,
            "unit": "ns",
            "range": "± 2253.289125402596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7542374.866666666,
            "unit": "ns",
            "range": "± 44140.152342715075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20585867.066666666,
            "unit": "ns",
            "range": "± 290179.87847945694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51257074.8,
            "unit": "ns",
            "range": "± 677585.3826709328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101567051.5,
            "unit": "ns",
            "range": "± 1788027.050429209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203333007.85714287,
            "unit": "ns",
            "range": "± 3335383.049267029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1358435.3444444444,
            "unit": "ns",
            "range": "± 72032.79582076785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2633202.254901961,
            "unit": "ns",
            "range": "± 106446.478649102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179131.6346153845,
            "unit": "ns",
            "range": "± 84471.86606550946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5278145.966666667,
            "unit": "ns",
            "range": "± 156502.66128473904"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48114.026666666665,
            "unit": "ns",
            "range": "± 2449.773558059145"
          }
        ]
      }
    ]
  }
}