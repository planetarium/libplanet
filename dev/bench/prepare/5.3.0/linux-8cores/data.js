window.BENCHMARK_DATA = {
  "lastUpdate": 1721724164147,
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
          "id": "465171f774506f2ff13ccdacfe2262db6385f6ab",
          "message": "Prepare 5.3.",
          "timestamp": "2024-07-23T17:32:08+09:00",
          "tree_id": "7a6d3f72a275c5a24f37cd9fa89e57ad8ebff2ee",
          "url": "https://github.com/planetarium/libplanet/commit/465171f774506f2ff13ccdacfe2262db6385f6ab"
        },
        "date": 1721724138396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210374.39583333334,
            "unit": "ns",
            "range": "± 17805.22099153662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197392.06382978722,
            "unit": "ns",
            "range": "± 12192.598075880629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169039.58823529413,
            "unit": "ns",
            "range": "± 2906.241044261976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3083476.9166666665,
            "unit": "ns",
            "range": "± 33796.25593964336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851896.2666666666,
            "unit": "ns",
            "range": "± 52106.529775158924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16504.11111111111,
            "unit": "ns",
            "range": "± 3224.9176413748605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71758.52,
            "unit": "ns",
            "range": "± 14852.245369463415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51432.38888888889,
            "unit": "ns",
            "range": "± 1084.3772888506855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64893.76530612245,
            "unit": "ns",
            "range": "± 14806.468839005247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2965.7525773195875,
            "unit": "ns",
            "range": "± 364.6131806142823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12106.766666666666,
            "unit": "ns",
            "range": "± 735.4510471109746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1088649.0625,
            "unit": "ns",
            "range": "± 49635.71197372804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2077773.8275862068,
            "unit": "ns",
            "range": "± 59288.87308284327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1764948.5625,
            "unit": "ns",
            "range": "± 106439.24097573596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8420243.9,
            "unit": "ns",
            "range": "± 250142.05883438204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3761004.0700334823,
            "unit": "ns",
            "range": "± 8300.975862855581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189064.8626302083,
            "unit": "ns",
            "range": "± 2701.479134388621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770074.720842634,
            "unit": "ns",
            "range": "± 1820.9570364438612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931151.882877604,
            "unit": "ns",
            "range": "± 1543.7396244944084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616032.0466657366,
            "unit": "ns",
            "range": "± 649.759068420082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580837.3855329241,
            "unit": "ns",
            "range": "± 739.7184242794458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2486544.730769231,
            "unit": "ns",
            "range": "± 41188.31272370405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2620807.227272727,
            "unit": "ns",
            "range": "± 63656.01043475546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3105019.8157894737,
            "unit": "ns",
            "range": "± 68037.47924412497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2649310,
            "unit": "ns",
            "range": "± 66418.88418276336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3423282.8684210526,
            "unit": "ns",
            "range": "± 66900.53526626137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32592.666666666668,
            "unit": "ns",
            "range": "± 427.73434122907025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10647220.352941176,
            "unit": "ns",
            "range": "± 216176.58646605938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27126540.666666668,
            "unit": "ns",
            "range": "± 150435.87201370494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71749896.85714285,
            "unit": "ns",
            "range": "± 898230.8604180568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137962182.26666668,
            "unit": "ns",
            "range": "± 775394.0501997739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285459906.06666666,
            "unit": "ns",
            "range": "± 1814797.3536670487"
          }
        ]
      }
    ]
  }
}