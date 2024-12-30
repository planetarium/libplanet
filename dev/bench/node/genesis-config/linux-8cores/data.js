window.BENCHMARK_DATA = {
  "lastUpdate": 1735559272733,
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
          "id": "439d3da8dea7c8e5aad988c422f93311b3673540",
          "message": "test: add unit test for newly added feature",
          "timestamp": "2024-12-30T20:38:47+09:00",
          "tree_id": "d52a60d4d69dbf788cec93bacb199868f821ed8a",
          "url": "https://github.com/planetarium/libplanet/commit/439d3da8dea7c8e5aad988c422f93311b3673540"
        },
        "date": 1735559246259,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10469706,
            "unit": "ns",
            "range": "± 55891.16434608907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27377758.533333335,
            "unit": "ns",
            "range": "± 169869.54792128268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69355155.43333334,
            "unit": "ns",
            "range": "± 251274.5000033306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141113757.43333334,
            "unit": "ns",
            "range": "± 914808.7985808422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290166941.35714287,
            "unit": "ns",
            "range": "± 952984.5948346946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202258.8125,
            "unit": "ns",
            "range": "± 5597.840196623648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191298.10294117648,
            "unit": "ns",
            "range": "± 8796.873084447212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167285.6,
            "unit": "ns",
            "range": "± 3088.7225468514603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3071377.9285714286,
            "unit": "ns",
            "range": "± 24777.651311877144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2756072.769230769,
            "unit": "ns",
            "range": "± 27005.63653867419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13083.902173913044,
            "unit": "ns",
            "range": "± 899.4894652063471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58822.469879518074,
            "unit": "ns",
            "range": "± 3076.0036329125896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50051.846153846156,
            "unit": "ns",
            "range": "± 594.6396452409708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56537.744897959186,
            "unit": "ns",
            "range": "± 9653.681448360361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2700.185567010309,
            "unit": "ns",
            "range": "± 305.93798152488176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13130.123711340206,
            "unit": "ns",
            "range": "± 2572.162215666568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3743137.9609375,
            "unit": "ns",
            "range": "± 3055.579259756947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211720.9900841345,
            "unit": "ns",
            "range": "± 1442.439746800992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771020.6056780134,
            "unit": "ns",
            "range": "± 933.0270962041727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1909260.538783482,
            "unit": "ns",
            "range": "± 1419.697706079418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612370.1644810268,
            "unit": "ns",
            "range": "± 598.8522285130166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570535.0964704241,
            "unit": "ns",
            "range": "± 982.1935410120972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2421676.6,
            "unit": "ns",
            "range": "± 39808.545839160855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2542290.888888889,
            "unit": "ns",
            "range": "± 49035.375969370485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3050213,
            "unit": "ns",
            "range": "± 40820.253810367925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2597448,
            "unit": "ns",
            "range": "± 45073.98666795358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3233584.6153846155,
            "unit": "ns",
            "range": "± 41415.18173033182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015683.4189189189,
            "unit": "ns",
            "range": "± 47725.61277396939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968990.4117647058,
            "unit": "ns",
            "range": "± 63253.9805078138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666553.9857142856,
            "unit": "ns",
            "range": "± 80135.46008243156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8307287.630434782,
            "unit": "ns",
            "range": "± 194657.57627347574"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32481.766666666666,
            "unit": "ns",
            "range": "± 418.8909620596249"
          }
        ]
      }
    ]
  }
}