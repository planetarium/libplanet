window.BENCHMARK_DATA = {
  "lastUpdate": 1726041018788,
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
          "id": "ad7718bb1884c8694965c8ce9ec0010febddc5e3",
          "message": "fix: If the locations are the same, the assembly will not load.",
          "timestamp": "2024-09-11T16:40:49+09:00",
          "tree_id": "3339c5fc395d7e1b25719bc7dadf515ff462fafb",
          "url": "https://github.com/planetarium/libplanet/commit/ad7718bb1884c8694965c8ce9ec0010febddc5e3"
        },
        "date": 1726040992534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2472896.966666667,
            "unit": "ns",
            "range": "± 35569.16249037454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523847.933333333,
            "unit": "ns",
            "range": "± 30066.35814676469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3068411.4285714286,
            "unit": "ns",
            "range": "± 38605.564391108746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2700526.125,
            "unit": "ns",
            "range": "± 52501.2029397105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3285963.5454545454,
            "unit": "ns",
            "range": "± 77855.78873283682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023976.2631578947,
            "unit": "ns",
            "range": "± 51999.8290551981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933246.9428571428,
            "unit": "ns",
            "range": "± 62251.9324424565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1691945.3024691357,
            "unit": "ns",
            "range": "± 88043.22501396967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8251225.375,
            "unit": "ns",
            "range": "± 157704.11386808104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10600417.92857143,
            "unit": "ns",
            "range": "± 83299.7280995325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27172654.230769232,
            "unit": "ns",
            "range": "± 151068.15396047453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68693939.63333334,
            "unit": "ns",
            "range": "± 331651.70264512365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136807695.4,
            "unit": "ns",
            "range": "± 830914.3499919488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282373186,
            "unit": "ns",
            "range": "± 1131388.6359394812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200281.6875,
            "unit": "ns",
            "range": "± 7513.251546027391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203431.39583333334,
            "unit": "ns",
            "range": "± 7947.281490881106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174681.39130434784,
            "unit": "ns",
            "range": "± 4352.453349331015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3073906.285714286,
            "unit": "ns",
            "range": "± 32055.45042381446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868492.785714286,
            "unit": "ns",
            "range": "± 35205.60290510714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13371.567415730337,
            "unit": "ns",
            "range": "± 752.4787341868692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70271.92465753424,
            "unit": "ns",
            "range": "± 3508.8561404514094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51203,
            "unit": "ns",
            "range": "± 639.6216329466455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54944.9381443299,
            "unit": "ns",
            "range": "± 8463.94954943026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2827.316326530612,
            "unit": "ns",
            "range": "± 395.827349558531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12153.717391304348,
            "unit": "ns",
            "range": "± 733.6962845319424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32110.866666666665,
            "unit": "ns",
            "range": "± 404.96187945228104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3733978.99609375,
            "unit": "ns",
            "range": "± 3774.069367701053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1184445.2986886161,
            "unit": "ns",
            "range": "± 2051.610548211016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762924.9451032366,
            "unit": "ns",
            "range": "± 742.4424239401897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950906.0678385417,
            "unit": "ns",
            "range": "± 2575.6952194505807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634605.3095005581,
            "unit": "ns",
            "range": "± 909.644766900017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573245.5382361779,
            "unit": "ns",
            "range": "± 900.6653554921056"
          }
        ]
      }
    ]
  }
}