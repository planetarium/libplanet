window.BENCHMARK_DATA = {
  "lastUpdate": 1711342478703,
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711342418263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941896.9387755102,
            "unit": "ns",
            "range": "± 85918.76582231148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1716007.8651685393,
            "unit": "ns",
            "range": "± 100240.25595891546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1491330.303030303,
            "unit": "ns",
            "range": "± 133408.3645256827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7209203.225806451,
            "unit": "ns",
            "range": "± 410806.38871762966"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33788.88888888889,
            "unit": "ns",
            "range": "± 1784.5167413056115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4876321.428571428,
            "unit": "ns",
            "range": "± 24125.510869726153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12916515.384615384,
            "unit": "ns",
            "range": "± 68873.45698397227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31600506.666666668,
            "unit": "ns",
            "range": "± 338898.7153090068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62786269.23076923,
            "unit": "ns",
            "range": "± 275823.49846902513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126406866.66666667,
            "unit": "ns",
            "range": "± 471371.2883865027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3369033.7332589286,
            "unit": "ns",
            "range": "± 10174.603937293508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058921.796875,
            "unit": "ns",
            "range": "± 3420.825445076356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748615.9040178572,
            "unit": "ns",
            "range": "± 2818.8695869816447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918300.4036458333,
            "unit": "ns",
            "range": "± 3228.1368402302537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619981.9921875,
            "unit": "ns",
            "range": "± 1794.6885899055821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553911.38671875,
            "unit": "ns",
            "range": "± 1615.4614763653667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118407.6923076925,
            "unit": "ns",
            "range": "± 20802.26195787618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2220455,
            "unit": "ns",
            "range": "± 62704.66367148337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2789751.724137931,
            "unit": "ns",
            "range": "± 81575.31410862714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2807595,
            "unit": "ns",
            "range": "± 146842.0368019727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7807865,
            "unit": "ns",
            "range": "± 240038.53915996756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172602.1978021978,
            "unit": "ns",
            "range": "± 10242.742449840907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162055.421686747,
            "unit": "ns",
            "range": "± 7902.550576408523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142382.85714285713,
            "unit": "ns",
            "range": "± 4669.266582683845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2810696.6666666665,
            "unit": "ns",
            "range": "± 32300.99217110978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498940,
            "unit": "ns",
            "range": "± 41641.922557510654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10502.040816326531,
            "unit": "ns",
            "range": "± 1379.8236546401436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52231.4606741573,
            "unit": "ns",
            "range": "± 3794.152064380189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43559.183673469386,
            "unit": "ns",
            "range": "± 1593.8577894722052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55026.26262626263,
            "unit": "ns",
            "range": "± 12965.484681737296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2467.7083333333335,
            "unit": "ns",
            "range": "± 392.9630467872912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9473.118279569893,
            "unit": "ns",
            "range": "± 1156.2815010934494"
          }
        ]
      }
    ]
  }
}