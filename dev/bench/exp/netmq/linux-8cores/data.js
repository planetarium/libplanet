window.BENCHMARK_DATA = {
  "lastUpdate": 1734786933985,
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
          "id": "1d67959c8490866d3d5d505db74f48555f3a0ade",
          "message": "chore: Change netmq",
          "timestamp": "2024-12-21T22:06:49+09:00",
          "tree_id": "cf9493cefaae266b7499f6f84de376b263fb168d",
          "url": "https://github.com/planetarium/libplanet/commit/1d67959c8490866d3d5d505db74f48555f3a0ade"
        },
        "date": 1734786907663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10750039.766666668,
            "unit": "ns",
            "range": "± 84942.17849090611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30011647.64285714,
            "unit": "ns",
            "range": "± 136125.22045506322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71070873.53333333,
            "unit": "ns",
            "range": "± 327136.3483186585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140810697.8,
            "unit": "ns",
            "range": "± 742154.5997404353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291919092.9,
            "unit": "ns",
            "range": "± 1589904.7309303875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114169.48351648351,
            "unit": "ns",
            "range": "± 7132.256079659253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191572.16666666666,
            "unit": "ns",
            "range": "± 5326.8213920552225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162740.875,
            "unit": "ns",
            "range": "± 3066.4579104671675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2921371.8333333335,
            "unit": "ns",
            "range": "± 39946.84024634071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2718034.2666666666,
            "unit": "ns",
            "range": "± 48943.10864735368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15410.89393939394,
            "unit": "ns",
            "range": "± 2551.905925662676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60540.53947368421,
            "unit": "ns",
            "range": "± 3080.0054348038175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49415.583333333336,
            "unit": "ns",
            "range": "± 763.3687847398212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54689.9375,
            "unit": "ns",
            "range": "± 10303.01694784744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2426.7526315789473,
            "unit": "ns",
            "range": "± 296.96324611115335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16728.960674157304,
            "unit": "ns",
            "range": "± 903.4430360895099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3792409.922433036,
            "unit": "ns",
            "range": "± 6385.660788775555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217800.6431361607,
            "unit": "ns",
            "range": "± 15195.116464321214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771706.2141462053,
            "unit": "ns",
            "range": "± 1196.3748510722098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964727.4618389423,
            "unit": "ns",
            "range": "± 1758.0304713670898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621281.2592075893,
            "unit": "ns",
            "range": "± 1458.146606154161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568217.0546875,
            "unit": "ns",
            "range": "± 740.8435040238855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2384579.3666666667,
            "unit": "ns",
            "range": "± 41759.55156927175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2556040.466666667,
            "unit": "ns",
            "range": "± 36980.403568968926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2992402.066666667,
            "unit": "ns",
            "range": "± 30662.79594340129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2575842.285714286,
            "unit": "ns",
            "range": "± 43131.6586447884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3235654.6333333333,
            "unit": "ns",
            "range": "± 43039.63658049348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969577.6139240506,
            "unit": "ns",
            "range": "± 49100.87402898172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1908749.6140350876,
            "unit": "ns",
            "range": "± 81849.70998110638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551478.7714285713,
            "unit": "ns",
            "range": "± 74484.98953697858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7623585.375,
            "unit": "ns",
            "range": "± 145353.3629932586"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30491.45,
            "unit": "ns",
            "range": "± 1073.9253173193597"
          }
        ]
      }
    ]
  }
}