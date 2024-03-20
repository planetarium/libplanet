window.BENCHMARK_DATA = {
  "lastUpdate": 1710917247769,
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
        "date": 1710917219840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5655895.133333334,
            "unit": "ns",
            "range": "± 73197.42619583859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15207062.433333334,
            "unit": "ns",
            "range": "± 150959.16901905564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37687583.71428572,
            "unit": "ns",
            "range": "± 204907.60764997272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74095293.93333334,
            "unit": "ns",
            "range": "± 604659.0817312401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153437079.86666667,
            "unit": "ns",
            "range": "± 877436.4291440042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39940.166666666664,
            "unit": "ns",
            "range": "± 4794.941175571707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975880.1111111111,
            "unit": "ns",
            "range": "± 57898.740985602206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1990834.397260274,
            "unit": "ns",
            "range": "± 98924.81667432253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649500.7872340425,
            "unit": "ns",
            "range": "± 105232.00941686532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8065943.914285715,
            "unit": "ns",
            "range": "± 263229.2788842157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2412984.076923077,
            "unit": "ns",
            "range": "± 61366.71144076279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2627742.730769231,
            "unit": "ns",
            "range": "± 103853.11147417428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3176292.6818181816,
            "unit": "ns",
            "range": "± 76558.9163669059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3299139.64893617,
            "unit": "ns",
            "range": "± 123129.96251292314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8830520.432432432,
            "unit": "ns",
            "range": "± 206106.86143459397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203070.1052631579,
            "unit": "ns",
            "range": "± 6937.352948680509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195536.72222222222,
            "unit": "ns",
            "range": "± 9588.41307967807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171581.26315789475,
            "unit": "ns",
            "range": "± 3762.8417281816446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3286099.5833333335,
            "unit": "ns",
            "range": "± 35245.902643771835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2965669.6666666665,
            "unit": "ns",
            "range": "± 15229.470669684744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16301.337078651686,
            "unit": "ns",
            "range": "± 1777.881144047473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70692.34065934065,
            "unit": "ns",
            "range": "± 4344.057745216205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80920.07,
            "unit": "ns",
            "range": "± 19613.749143386558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87186.20408163265,
            "unit": "ns",
            "range": "± 15415.991973098016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7198.952631578947,
            "unit": "ns",
            "range": "± 556.9068024024756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14891.96,
            "unit": "ns",
            "range": "± 3787.4030785212076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731911.775716146,
            "unit": "ns",
            "range": "± 10378.899408261008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1195713.3858816964,
            "unit": "ns",
            "range": "± 1672.6615817353438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775342.9505208334,
            "unit": "ns",
            "range": "± 2381.0482235858844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936904.8907752405,
            "unit": "ns",
            "range": "± 11824.502025165471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627302.1567758414,
            "unit": "ns",
            "range": "± 3029.572933022649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575913.8904747596,
            "unit": "ns",
            "range": "± 927.4522846375932"
          }
        ]
      }
    ]
  }
}