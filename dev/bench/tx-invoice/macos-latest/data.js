window.BENCHMARK_DATA = {
  "lastUpdate": 1679653119002,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "12163fe108b4505f0d99df93d9f203433580d4da",
          "message": "WIP",
          "timestamp": "2023-03-24T18:58:26+09:00",
          "tree_id": "826e80a5e0b2b83e09fc95e946af26b77acc2356",
          "url": "https://github.com/planetarium/libplanet/commit/12163fe108b4505f0d99df93d9f203433580d4da"
        },
        "date": 1679653082470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8702710.078947369,
            "unit": "ns",
            "range": "± 293195.0496346022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21788926.33870968,
            "unit": "ns",
            "range": "± 624266.8576730145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51774477.741935484,
            "unit": "ns",
            "range": "± 1201282.286283452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111829414.21052632,
            "unit": "ns",
            "range": "± 1975066.4222609373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235844566.1818182,
            "unit": "ns",
            "range": "± 11071561.192764502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75608.93181818182,
            "unit": "ns",
            "range": "± 5767.607882385295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347079.875,
            "unit": "ns",
            "range": "± 28496.605706045142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339991.75531914894,
            "unit": "ns",
            "range": "± 44008.20793938628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311797.5729166667,
            "unit": "ns",
            "range": "± 36282.44654019345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4813631.552083333,
            "unit": "ns",
            "range": "± 368335.7770353987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4445463.132653061,
            "unit": "ns",
            "range": "± 313872.3566985024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20158.427835051545,
            "unit": "ns",
            "range": "± 3447.5631316658014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92863.6052631579,
            "unit": "ns",
            "range": "± 16598.979915128646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104888.82631578947,
            "unit": "ns",
            "range": "± 17662.016331148232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271202.04347826086,
            "unit": "ns",
            "range": "± 35518.12703686499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8916.58510638298,
            "unit": "ns",
            "range": "± 1560.3603227347976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20135.531914893618,
            "unit": "ns",
            "range": "± 3563.4361194590133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663321.9393939395,
            "unit": "ns",
            "range": "± 214334.01134910042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956879.6481481483,
            "unit": "ns",
            "range": "± 121632.53426770035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471385.085106383,
            "unit": "ns",
            "range": "± 139294.171786671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6577324.653846154,
            "unit": "ns",
            "range": "± 178640.65007963718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3754290.6555555556,
            "unit": "ns",
            "range": "± 389331.62321220984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3782744.2083333335,
            "unit": "ns",
            "range": "± 378824.69422450924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4570733.387096774,
            "unit": "ns",
            "range": "± 206696.75306715255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5154281.934065934,
            "unit": "ns",
            "range": "± 873896.8202363073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10253571.516129032,
            "unit": "ns",
            "range": "± 1053701.6331969944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6924208.615274235,
            "unit": "ns",
            "range": "± 418575.58542385045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135697.1108072917,
            "unit": "ns",
            "range": "± 63468.956729351274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422132.3902803308,
            "unit": "ns",
            "range": "± 28181.76352018908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706971.396484375,
            "unit": "ns",
            "range": "± 149945.59591036712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892138.5196484375,
            "unit": "ns",
            "range": "± 23057.253483917626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800329.3404756434,
            "unit": "ns",
            "range": "± 16344.494848615535"
          }
        ]
      }
    ]
  }
}