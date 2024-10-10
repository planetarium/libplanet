window.BENCHMARK_DATA = {
  "lastUpdate": 1728551238614,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "7063430cde5bbc731a6c900aa461119b1c8f0ade",
          "message": "Prepare 5.3.1",
          "timestamp": "2024-10-10T17:56:15+09:00",
          "tree_id": "a924950a4d2ac793b68a6139ae388d38e427220c",
          "url": "https://github.com/planetarium/libplanet/commit/7063430cde5bbc731a6c900aa461119b1c8f0ade"
        },
        "date": 1728551213124,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034599.8876404495,
            "unit": "ns",
            "range": "± 56992.56437913597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2056120.362745098,
            "unit": "ns",
            "range": "± 82614.81428848451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1625284.3255813953,
            "unit": "ns",
            "range": "± 87702.46744311356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7866362.863636363,
            "unit": "ns",
            "range": "± 192003.18071653455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10720420.157894736,
            "unit": "ns",
            "range": "± 235286.9525627196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27883024,
            "unit": "ns",
            "range": "± 228083.6830183842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69633402.38461539,
            "unit": "ns",
            "range": "± 406910.6976849135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140080365.46666667,
            "unit": "ns",
            "range": "± 798754.1867080856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291252331.1333333,
            "unit": "ns",
            "range": "± 1233660.777176198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746561.701171875,
            "unit": "ns",
            "range": "± 4716.173716193431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1258329.9417067308,
            "unit": "ns",
            "range": "± 2030.4529208170486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776462.6537760417,
            "unit": "ns",
            "range": "± 1947.1732233690545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918963.8229166667,
            "unit": "ns",
            "range": "± 2064.062250559594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628667.4750651042,
            "unit": "ns",
            "range": "± 1510.0117640594121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578622.5674525669,
            "unit": "ns",
            "range": "± 560.1006547534304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2576531.1875,
            "unit": "ns",
            "range": "± 49082.45147126585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2646884.1875,
            "unit": "ns",
            "range": "± 51536.921411377494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3192445.75,
            "unit": "ns",
            "range": "± 60989.21100271206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702760,
            "unit": "ns",
            "range": "± 62988.954110296916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3353436.4285714286,
            "unit": "ns",
            "range": "± 45041.516284277255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229984.7,
            "unit": "ns",
            "range": "± 20666.151156082757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211143.67,
            "unit": "ns",
            "range": "± 17548.59920223569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180998.23469387754,
            "unit": "ns",
            "range": "± 14055.117709608441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3154436.533333333,
            "unit": "ns",
            "range": "± 47531.98801989887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929095.5,
            "unit": "ns",
            "range": "± 37235.936638496874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18288.90404040404,
            "unit": "ns",
            "range": "± 4830.95897844435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74190.8,
            "unit": "ns",
            "range": "± 14550.008433473204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52920.38888888889,
            "unit": "ns",
            "range": "± 3461.9452500699517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65908.36458333333,
            "unit": "ns",
            "range": "± 12228.880411911701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.467391304348,
            "unit": "ns",
            "range": "± 482.83843567900027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20250.13829787234,
            "unit": "ns",
            "range": "± 2555.9988382847914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38946.49,
            "unit": "ns",
            "range": "± 7483.449769621256"
          }
        ]
      }
    ]
  }
}