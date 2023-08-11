window.BENCHMARK_DATA = {
  "lastUpdate": 1691717657255,
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
        "date": 1691717626206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4533892.266666667,
            "unit": "ns",
            "range": "± 77832.50714970914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4778078.421052632,
            "unit": "ns",
            "range": "± 102993.48907162141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5560346.733333333,
            "unit": "ns",
            "range": "± 61025.1153688459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5233084.733333333,
            "unit": "ns",
            "range": "± 77426.47965232813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7813514.375,
            "unit": "ns",
            "range": "± 148809.71520743083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10558837,
            "unit": "ns",
            "range": "± 144627.16725132542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28130058.8,
            "unit": "ns",
            "range": "± 186840.81735767942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70452076.13333334,
            "unit": "ns",
            "range": "± 400406.3773221734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141754000.76666668,
            "unit": "ns",
            "range": "± 778000.352496566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280367374.35714287,
            "unit": "ns",
            "range": "± 1065429.2845381517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60752.55294117647,
            "unit": "ns",
            "range": "± 3305.916134483042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6350975.24609375,
            "unit": "ns",
            "range": "± 16943.3353451691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980462.666294643,
            "unit": "ns",
            "range": "± 2267.9004832909104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1331298.2221304087,
            "unit": "ns",
            "range": "± 1143.0697751760126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3304234.5666852677,
            "unit": "ns",
            "range": "± 2667.7855253242533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1045566.6981026785,
            "unit": "ns",
            "range": "± 687.3247554998899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955783.3966145833,
            "unit": "ns",
            "range": "± 535.2121164965931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346202.2051282051,
            "unit": "ns",
            "range": "± 11575.995035506809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332703.875,
            "unit": "ns",
            "range": "± 5667.892658063783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290873.93548387097,
            "unit": "ns",
            "range": "± 8781.035234851237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5517670.133333334,
            "unit": "ns",
            "range": "± 54344.549370352375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5121729.038461538,
            "unit": "ns",
            "range": "± 73752.32467479174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26429.94680851064,
            "unit": "ns",
            "range": "± 2109.7174318617963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108094.0412371134,
            "unit": "ns",
            "range": "± 6985.225908893842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90898.65909090909,
            "unit": "ns",
            "range": "± 3388.2957707253704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101310.92857142857,
            "unit": "ns",
            "range": "± 13282.069375355355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6957.278350515464,
            "unit": "ns",
            "range": "± 676.5107898601846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24013.55789473684,
            "unit": "ns",
            "range": "± 1492.6519218861492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1815129.3466666667,
            "unit": "ns",
            "range": "± 88866.1932122692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3456630.9583333335,
            "unit": "ns",
            "range": "± 89166.29220657184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2291158.6516853934,
            "unit": "ns",
            "range": "± 125906.8870921268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5961400.294117647,
            "unit": "ns",
            "range": "± 178508.49900614264"
          }
        ]
      }
    ]
  }
}