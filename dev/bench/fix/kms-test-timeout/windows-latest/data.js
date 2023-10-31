window.BENCHMARK_DATA = {
  "lastUpdate": 1698719990313,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "01ff9fffa47ffe6a16b043f6cc4a11a213eb0774",
          "message": "Use longer timeout for KMS test",
          "timestamp": "2023-10-31T11:11:19+09:00",
          "tree_id": "60c8942383c478ab7c838a2edc9fc55c303cea77",
          "url": "https://github.com/planetarium/libplanet/commit/01ff9fffa47ffe6a16b043f6cc4a11a213eb0774"
        },
        "date": 1698719905841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1789762.3655913977,
            "unit": "ns",
            "range": "± 394634.19740806596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3422856.989247312,
            "unit": "ns",
            "range": "± 525702.1787463535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2821887.234042553,
            "unit": "ns",
            "range": "± 524731.2240277746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13207395.789473685,
            "unit": "ns",
            "range": "± 2967580.7772947513"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58680.89887640449,
            "unit": "ns",
            "range": "± 9492.734978111303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9816252.083333334,
            "unit": "ns",
            "range": "± 1372669.1634974056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25251472.340425532,
            "unit": "ns",
            "range": "± 2214742.7443221924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69961485.56701031,
            "unit": "ns",
            "range": "± 8507096.331249842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147416204,
            "unit": "ns",
            "range": "± 19773721.641796634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294465024.2105263,
            "unit": "ns",
            "range": "± 28984677.885935333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6269760.4765625,
            "unit": "ns",
            "range": "± 579899.788026988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2019844.8567708333,
            "unit": "ns",
            "range": "± 101979.40573810038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493789.1528057796,
            "unit": "ns",
            "range": "± 84140.85213201535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3540702.7532003014,
            "unit": "ns",
            "range": "± 188345.73724394335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1132506.9243808961,
            "unit": "ns",
            "range": "± 46807.22414828607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1086146.48828125,
            "unit": "ns",
            "range": "± 68233.03964581038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4089455.6701030927,
            "unit": "ns",
            "range": "± 694561.7342626139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4935631,
            "unit": "ns",
            "range": "± 1385273.7342223243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5668062.105263158,
            "unit": "ns",
            "range": "± 791158.5992625058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4823233.333333333,
            "unit": "ns",
            "range": "± 434538.4673854331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15077082.978723405,
            "unit": "ns",
            "range": "± 2978284.8761985786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326893.5483870968,
            "unit": "ns",
            "range": "± 50033.177702078276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352482.6530612245,
            "unit": "ns",
            "range": "± 92605.27113708614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259649.4623655914,
            "unit": "ns",
            "range": "± 31685.789654230735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4894679.5698924735,
            "unit": "ns",
            "range": "± 396506.6380712883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4569609.302325581,
            "unit": "ns",
            "range": "± 335519.0666548166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20863.636363636364,
            "unit": "ns",
            "range": "± 2441.272600965674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98671.13402061856,
            "unit": "ns",
            "range": "± 15743.331648953303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105955.20833333333,
            "unit": "ns",
            "range": "± 23425.74323841038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110405.37634408602,
            "unit": "ns",
            "range": "± 17114.78743781553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6709.574468085107,
            "unit": "ns",
            "range": "± 1164.9051970228263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19590,
            "unit": "ns",
            "range": "± 2546.1162316690375"
          }
        ]
      }
    ]
  }
}