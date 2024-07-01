window.BENCHMARK_DATA = {
  "lastUpdate": 1719810775400,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "9e889f1153956a905c2f4888251749db7553d892",
          "message": "Remove tx validation from tx demand",
          "timestamp": "2024-07-01T14:02:42+09:00",
          "tree_id": "7950f33d393584a31bc1f73e4370c1669602ff13",
          "url": "https://github.com/planetarium/libplanet/commit/9e889f1153956a905c2f4888251749db7553d892"
        },
        "date": 1719810705697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979001,
            "unit": "ns",
            "range": "± 87996.07715659542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1705273.8095238095,
            "unit": "ns",
            "range": "± 55696.84520348859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1554555.5555555555,
            "unit": "ns",
            "range": "± 153171.45736550895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6934078.125,
            "unit": "ns",
            "range": "± 174873.53722669824"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31766.233766233767,
            "unit": "ns",
            "range": "± 1465.3552101803623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5201580,
            "unit": "ns",
            "range": "± 22980.992145684224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13156835.714285715,
            "unit": "ns",
            "range": "± 69139.45336050187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32529400,
            "unit": "ns",
            "range": "± 151063.03320137592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63948666.666666664,
            "unit": "ns",
            "range": "± 329261.5626924386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130856600,
            "unit": "ns",
            "range": "± 619954.4096141264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3244678.5993303573,
            "unit": "ns",
            "range": "± 4444.049187469611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037505.7942708334,
            "unit": "ns",
            "range": "± 1343.0020679276304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731949.94140625,
            "unit": "ns",
            "range": "± 2254.2191214242393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944378.0859375,
            "unit": "ns",
            "range": "± 3763.5563292819866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622787.9813058035,
            "unit": "ns",
            "range": "± 1977.271945792172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549993.1865985577,
            "unit": "ns",
            "range": "± 1039.3891834154902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2058800,
            "unit": "ns",
            "range": "± 41321.2833965556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2206971.4285714286,
            "unit": "ns",
            "range": "± 62504.63601853485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2696421.052631579,
            "unit": "ns",
            "range": "± 58336.58637546013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2279886.3636363638,
            "unit": "ns",
            "range": "± 24060.24770197762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3008589.285714286,
            "unit": "ns",
            "range": "± 50473.780059997225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167879.45205479453,
            "unit": "ns",
            "range": "± 7437.311321679764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157131.66666666666,
            "unit": "ns",
            "range": "± 6381.394876120091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147438.09523809524,
            "unit": "ns",
            "range": "± 3365.6316183557865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2774693.3333333335,
            "unit": "ns",
            "range": "± 43589.22649768709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2475346.6666666665,
            "unit": "ns",
            "range": "± 32477.703707239492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9427.368421052632,
            "unit": "ns",
            "range": "± 1015.2499016606446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47940,
            "unit": "ns",
            "range": "± 2286.0919089608396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43833.333333333336,
            "unit": "ns",
            "range": "± 756.5586245499765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46461.85567010309,
            "unit": "ns",
            "range": "± 7803.370576485003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2169.8924731182797,
            "unit": "ns",
            "range": "± 268.5650055858711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8715.66265060241,
            "unit": "ns",
            "range": "± 432.09132043789845"
          }
        ]
      }
    ]
  }
}