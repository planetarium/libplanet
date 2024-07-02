window.BENCHMARK_DATA = {
  "lastUpdate": 1719880524172,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "ac1fe9171c1790ba109a40f078941f6a89768dd8",
          "message": "test cache size",
          "timestamp": "2024-07-02T09:25:39+09:00",
          "tree_id": "53f19cdc036f4a41a23afadbf5b0d9bef47f1155",
          "url": "https://github.com/planetarium/libplanet/commit/ac1fe9171c1790ba109a40f078941f6a89768dd8"
        },
        "date": 1719880480640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5738104.166666667,
            "unit": "ns",
            "range": "± 23670.66591394344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14563538.692307692,
            "unit": "ns",
            "range": "± 53289.55967226697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36724933.266666666,
            "unit": "ns",
            "range": "± 663289.1081710542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73595075.2,
            "unit": "ns",
            "range": "± 180801.5335377441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146572174.8,
            "unit": "ns",
            "range": "± 465278.97607905243"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15606.208333333334,
            "unit": "ns",
            "range": "± 1289.1273173549914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111192.57407407407,
            "unit": "ns",
            "range": "± 4661.742445318593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104784.32857142857,
            "unit": "ns",
            "range": "± 4738.926264129143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91792.88235294117,
            "unit": "ns",
            "range": "± 2948.2370902431176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3139334.7666666666,
            "unit": "ns",
            "range": "± 41696.81862216258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2792920.6379310344,
            "unit": "ns",
            "range": "± 121802.80423178381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4932.438202247191,
            "unit": "ns",
            "range": "± 517.1034263317196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26153.719512195123,
            "unit": "ns",
            "range": "± 1448.8403815533002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24073.77319587629,
            "unit": "ns",
            "range": "± 1850.4098392042922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28831.458333333332,
            "unit": "ns",
            "range": "± 5247.1471545406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1220.7252747252746,
            "unit": "ns",
            "range": "± 163.1679479646025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4918.582417582417,
            "unit": "ns",
            "range": "± 710.5511017033667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 724768.22,
            "unit": "ns",
            "range": "± 77630.42612881247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272910.142857143,
            "unit": "ns",
            "range": "± 46779.581651168424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1098480.934065934,
            "unit": "ns",
            "range": "± 65456.70139018993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10927228.35,
            "unit": "ns",
            "range": "± 2035716.4974804246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209969.052631579,
            "unit": "ns",
            "range": "± 49004.32295496851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266182.25,
            "unit": "ns",
            "range": "± 88531.58060600441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2657873.4418604653,
            "unit": "ns",
            "range": "± 97181.3460238867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2498426.565217391,
            "unit": "ns",
            "range": "± 119892.7289478928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4339176.326086956,
            "unit": "ns",
            "range": "± 1093145.7509410714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3021195.5166666666,
            "unit": "ns",
            "range": "± 41211.71059960335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924947.3821149553,
            "unit": "ns",
            "range": "± 5364.069943904067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 629521.6334635416,
            "unit": "ns",
            "range": "± 5308.9323449310195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635778.259765625,
            "unit": "ns",
            "range": "± 18008.758996273486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 461429.5230994591,
            "unit": "ns",
            "range": "± 484.174963701802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419413.2850167411,
            "unit": "ns",
            "range": "± 944.0378619294755"
          }
        ]
      }
    ]
  }
}