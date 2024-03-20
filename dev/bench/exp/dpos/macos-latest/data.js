window.BENCHMARK_DATA = {
  "lastUpdate": 1710917440076,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "13f3e504c8a403bd4421d43f7f3a340fc4b29289",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-20T15:35:28+09:00",
          "tree_id": "1551ff4285963d9cb5a3f68cd34b1d8c052dcd79",
          "url": "https://github.com/planetarium/libplanet/commit/13f3e504c8a403bd4421d43f7f3a340fc4b29289"
        },
        "date": 1710917380210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7730287.037037037,
            "unit": "ns",
            "range": "± 216720.35394426927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18900846.785714287,
            "unit": "ns",
            "range": "± 276292.403891916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46916968.733333334,
            "unit": "ns",
            "range": "± 826541.0927537953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93688607.86666666,
            "unit": "ns",
            "range": "± 1701054.9795841346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195178105.8,
            "unit": "ns",
            "range": "± 3089283.7159731057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41147.95698924731,
            "unit": "ns",
            "range": "± 8427.643814198576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217288.72471910113,
            "unit": "ns",
            "range": "± 12639.945635808732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219445.5918367347,
            "unit": "ns",
            "range": "± 23063.051577774957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197449.07291666666,
            "unit": "ns",
            "range": "± 18414.783931307273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3968161.8571428573,
            "unit": "ns",
            "range": "± 52751.33337229444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3764623.0707070706,
            "unit": "ns",
            "range": "± 221254.75773725746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13525.366666666667,
            "unit": "ns",
            "range": "± 1583.8249193900504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63399.5,
            "unit": "ns",
            "range": "± 6279.371620238362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57853.67415730337,
            "unit": "ns",
            "range": "± 5983.298204500898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61041.94680851064,
            "unit": "ns",
            "range": "± 10466.797966387965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3309.0444444444443,
            "unit": "ns",
            "range": "± 369.1116624421551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12295.21978021978,
            "unit": "ns",
            "range": "± 1560.2804577112113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1236646.2676767677,
            "unit": "ns",
            "range": "± 157576.28658602596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648686.380952381,
            "unit": "ns",
            "range": "± 173841.0918751233"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1976043.7783505155,
            "unit": "ns",
            "range": "± 159983.83600433296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13898989.775510205,
            "unit": "ns",
            "range": "± 5231348.259649685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2913489.886792453,
            "unit": "ns",
            "range": "± 117527.19763897867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3003270.8363636364,
            "unit": "ns",
            "range": "± 126688.37521004686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3574309.3695652173,
            "unit": "ns",
            "range": "± 137386.05031764545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3770068.0222222223,
            "unit": "ns",
            "range": "± 209344.68503886592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16367268.602150537,
            "unit": "ns",
            "range": "± 1716292.4755610952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4372487.837402344,
            "unit": "ns",
            "range": "± 79838.56549884343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1371039.7782552084,
            "unit": "ns",
            "range": "± 11906.50202259474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872835.4931640625,
            "unit": "ns",
            "range": "± 7528.979275345138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976897.1114676339,
            "unit": "ns",
            "range": "± 54780.97229732611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634113.1383928572,
            "unit": "ns",
            "range": "± 7726.915921513469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575398.4231770834,
            "unit": "ns",
            "range": "± 8919.514285497371"
          }
        ]
      }
    ]
  }
}