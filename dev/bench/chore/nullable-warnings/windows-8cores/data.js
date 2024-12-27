window.BENCHMARK_DATA = {
  "lastUpdate": 1735260627301,
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
          "id": "ef269073cd238a3cbdcce238645f5f8fc42b02c8",
          "message": "chore: Remove nullable-related warnings",
          "timestamp": "2024-12-27T09:40:11+09:00",
          "tree_id": "45d702457db5b59ce8829a9a2cfd613143f538c3",
          "url": "https://github.com/planetarium/libplanet/commit/ef269073cd238a3cbdcce238645f5f8fc42b02c8"
        },
        "date": 1735260559256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981923.1578947369,
            "unit": "ns",
            "range": "± 99230.2313799018"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754093.3333333333,
            "unit": "ns",
            "range": "± 52211.34064505549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1519991.6666666667,
            "unit": "ns",
            "range": "± 144635.16182134868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6568010.52631579,
            "unit": "ns",
            "range": "± 206348.6170976047"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31210.10101010101,
            "unit": "ns",
            "range": "± 4535.247331407603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9668740,
            "unit": "ns",
            "range": "± 63636.82446957444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23511285.714285713,
            "unit": "ns",
            "range": "± 196159.84791507645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59804446.666666664,
            "unit": "ns",
            "range": "± 571039.7670248628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116370733.33333333,
            "unit": "ns",
            "range": "± 674352.2327460063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234633100,
            "unit": "ns",
            "range": "± 1658354.555403811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3268161.5625,
            "unit": "ns",
            "range": "± 2709.6964862521822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068117.1316964286,
            "unit": "ns",
            "range": "± 2410.3841315229574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726281.03515625,
            "unit": "ns",
            "range": "± 1304.0026792645824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937719.3098958333,
            "unit": "ns",
            "range": "± 2541.5956412880487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623296.2239583334,
            "unit": "ns",
            "range": "± 1141.050712237632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560020.1953125,
            "unit": "ns",
            "range": "± 1062.985265622773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194096.5517241377,
            "unit": "ns",
            "range": "± 63065.2354015757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307483.3333333335,
            "unit": "ns",
            "range": "± 41110.92428099975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2749471.4285714286,
            "unit": "ns",
            "range": "± 62495.57698635274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318680,
            "unit": "ns",
            "range": "± 37522.77784416896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2980600,
            "unit": "ns",
            "range": "± 57661.726185284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93928.40909090909,
            "unit": "ns",
            "range": "± 7268.795673518735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164727.61194029852,
            "unit": "ns",
            "range": "± 7655.495568059754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147371.42857142858,
            "unit": "ns",
            "range": "± 3482.548328041243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2576794.4444444445,
            "unit": "ns",
            "range": "± 54361.107120074936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2417800,
            "unit": "ns",
            "range": "± 35406.71383530791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10658.064516129032,
            "unit": "ns",
            "range": "± 1391.380498441961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53691.666666666664,
            "unit": "ns",
            "range": "± 6730.037407679984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43690.74074074074,
            "unit": "ns",
            "range": "± 1469.8566890120287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54112.886597938144,
            "unit": "ns",
            "range": "± 11121.753455012811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2598.9795918367345,
            "unit": "ns",
            "range": "± 568.8648305665432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10643.298969072164,
            "unit": "ns",
            "range": "± 1863.9623574801858"
          }
        ]
      }
    ]
  }
}