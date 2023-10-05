window.BENCHMARK_DATA = {
  "lastUpdate": 1696516762722,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "2d615446e6d6534540c757d28a329c858cfdfc67",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-05T23:23:43+09:00",
          "tree_id": "559c6d26dcc589082e62d5606f201d093138ef2e",
          "url": "https://github.com/planetarium/libplanet/commit/2d615446e6d6534540c757d28a329c858cfdfc67"
        },
        "date": 1696516696028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322363,
            "unit": "ns",
            "range": "± 122828.36563697534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2429895.588235294,
            "unit": "ns",
            "range": "± 113529.70080697148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2088587.7551020407,
            "unit": "ns",
            "range": "± 124788.34225992687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7170770,
            "unit": "ns",
            "range": "± 348583.44242567423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43971.929824561405,
            "unit": "ns",
            "range": "± 1928.8925751363242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6938484.615384615,
            "unit": "ns",
            "range": "± 11819.394101352103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17733764.285714287,
            "unit": "ns",
            "range": "± 221678.90710923052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45774240,
            "unit": "ns",
            "range": "± 506229.1686013926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89533228.57142857,
            "unit": "ns",
            "range": "± 782726.6635870468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182625073.33333334,
            "unit": "ns",
            "range": "± 1882409.185237542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4371773.737980769,
            "unit": "ns",
            "range": "± 5117.209551265122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408474.2578125,
            "unit": "ns",
            "range": "± 1889.1918805808168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023298.3203125,
            "unit": "ns",
            "range": "± 1589.1787905660065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536727.265625,
            "unit": "ns",
            "range": "± 2996.5760417485794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803898.5807291666,
            "unit": "ns",
            "range": "± 1077.099719492541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719441.3364955357,
            "unit": "ns",
            "range": "± 838.8826446520434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2988551.4285714286,
            "unit": "ns",
            "range": "± 97466.52025915653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3052514.8936170214,
            "unit": "ns",
            "range": "± 118062.24588662027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3823445.4545454546,
            "unit": "ns",
            "range": "± 92585.63334645663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3687648.888888889,
            "unit": "ns",
            "range": "± 139297.54716600233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8467541.176470589,
            "unit": "ns",
            "range": "± 405042.4706809296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240945.65217391305,
            "unit": "ns",
            "range": "± 9243.152577190176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231591.17647058822,
            "unit": "ns",
            "range": "± 6455.259431777378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197958.82352941178,
            "unit": "ns",
            "range": "± 4057.563743111347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776742.8571428573,
            "unit": "ns",
            "range": "± 36160.03880796323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3485953.3333333335,
            "unit": "ns",
            "range": "± 59109.84770102267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17033.695652173912,
            "unit": "ns",
            "range": "± 1262.6743965208295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75981.01265822785,
            "unit": "ns",
            "range": "± 3793.046132249933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63400,
            "unit": "ns",
            "range": "± 1515.3186055052831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71490.52631578948,
            "unit": "ns",
            "range": "± 11273.949200307256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3868.4210526315787,
            "unit": "ns",
            "range": "± 401.6622795161555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16219.58762886598,
            "unit": "ns",
            "range": "± 1989.5895292359583"
          }
        ]
      }
    ]
  }
}