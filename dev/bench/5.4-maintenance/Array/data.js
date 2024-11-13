window.BENCHMARK_DATA = {
  "lastUpdate": 1731491605167,
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
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731491592381,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10669461.615384616,
            "unit": "ns",
            "range": "± 140246.7485882997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26731241.5,
            "unit": "ns",
            "range": "± 204431.33643531945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66792175.333333336,
            "unit": "ns",
            "range": "± 113099.346815511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133962274.28571428,
            "unit": "ns",
            "range": "± 182902.22506466234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276897175,
            "unit": "ns",
            "range": "± 251146.5754421264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12992.846153846154,
            "unit": "ns",
            "range": "± 216.63673363253602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54097.544444444444,
            "unit": "ns",
            "range": "± 3084.815239167534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106225.38,
            "unit": "ns",
            "range": "± 4086.5655301542515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94480.53225806452,
            "unit": "ns",
            "range": "± 2845.9728797474627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823249.55,
            "unit": "ns",
            "range": "± 193428.62912072436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2675945.5606060605,
            "unit": "ns",
            "range": "± 174725.97269297572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5147.274725274725,
            "unit": "ns",
            "range": "± 542.987089388854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27958.152173913044,
            "unit": "ns",
            "range": "± 2346.1118029568083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23577.22680412371,
            "unit": "ns",
            "range": "± 1664.216266402113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30985.525773195877,
            "unit": "ns",
            "range": "± 5571.671996381905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1508.4791666666667,
            "unit": "ns",
            "range": "± 254.56199655038714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5183.655555555555,
            "unit": "ns",
            "range": "± 518.381126570518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 697920.5263157894,
            "unit": "ns",
            "range": "± 54799.7398147345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1319201.0909090908,
            "unit": "ns",
            "range": "± 61900.93899020054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1074758.3820224719,
            "unit": "ns",
            "range": "± 59144.687886899555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8793679.91,
            "unit": "ns",
            "range": "± 1254247.300148194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158526,
            "unit": "ns",
            "range": "± 24661.82609148533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238958.6923076925,
            "unit": "ns",
            "range": "± 31774.99829106897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557583.25,
            "unit": "ns",
            "range": "± 57012.26585372937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270866.220338983,
            "unit": "ns",
            "range": "± 95388.7015772232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2842859.052631579,
            "unit": "ns",
            "range": "± 91913.36813306712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036590.5575520834,
            "unit": "ns",
            "range": "± 48596.73139890285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919839.5944661458,
            "unit": "ns",
            "range": "± 6593.749991490632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612853.6651041667,
            "unit": "ns",
            "range": "± 4648.0817027428075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1623345.9401041667,
            "unit": "ns",
            "range": "± 23737.9981296805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455036.11969866074,
            "unit": "ns",
            "range": "± 590.9209532886484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417619.88633510045,
            "unit": "ns",
            "range": "± 855.1961207766185"
          }
        ]
      }
    ]
  }
}