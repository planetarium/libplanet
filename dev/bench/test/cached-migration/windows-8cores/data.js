window.BENCHMARK_DATA = {
  "lastUpdate": 1717403552206,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "d10613e3a1b49bc92c956e18bab16606d2f35f2f",
          "message": "Changed to automatically prepare migration during Swarm instantiation",
          "timestamp": "2024-05-30T11:49:48+09:00",
          "tree_id": "7094e999c7f1b85c985d3e16c330f59e2acaae52",
          "url": "https://github.com/planetarium/libplanet/commit/d10613e3a1b49bc92c956e18bab16606d2f35f2f"
        },
        "date": 1717403291937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008844.7916666666,
            "unit": "ns",
            "range": "± 112694.25509085394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1795715.2777777778,
            "unit": "ns",
            "range": "± 85214.92241819302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1531094.8453608248,
            "unit": "ns",
            "range": "± 126336.12357115542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7216531.428571428,
            "unit": "ns",
            "range": "± 236474.71792664728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35188.63636363636,
            "unit": "ns",
            "range": "± 3055.7438591798496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5325644.444444444,
            "unit": "ns",
            "range": "± 91873.18767942628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13538385.714285715,
            "unit": "ns",
            "range": "± 143550.890773127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33692516.666666664,
            "unit": "ns",
            "range": "± 400875.058317367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66499521.428571425,
            "unit": "ns",
            "range": "± 548754.9746451527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137276240,
            "unit": "ns",
            "range": "± 1427804.9980902253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3387973.046875,
            "unit": "ns",
            "range": "± 14527.234037573562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061942.8385416667,
            "unit": "ns",
            "range": "± 5015.582390199467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766283.28125,
            "unit": "ns",
            "range": "± 2434.1161918633848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960771.7057291667,
            "unit": "ns",
            "range": "± 7263.521901115942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644056.8289620535,
            "unit": "ns",
            "range": "± 1153.0607729052904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583092.626953125,
            "unit": "ns",
            "range": "± 936.9728075222905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189042.5,
            "unit": "ns",
            "range": "± 109183.96944398158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2422417.8571428573,
            "unit": "ns",
            "range": "± 126715.94279808782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3014203.5714285714,
            "unit": "ns",
            "range": "± 83728.16457040033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3195621.052631579,
            "unit": "ns",
            "range": "± 109484.15696295537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8258035.294117647,
            "unit": "ns",
            "range": "± 250710.7906228995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 186245.16129032258,
            "unit": "ns",
            "range": "± 7995.176361752515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178753.2258064516,
            "unit": "ns",
            "range": "± 7398.132634169635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147321.27659574468,
            "unit": "ns",
            "range": "± 5683.727197589117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813426.3157894737,
            "unit": "ns",
            "range": "± 60770.07525734706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2544017.6470588236,
            "unit": "ns",
            "range": "± 31620.626877366725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12498.850574712644,
            "unit": "ns",
            "range": "± 1315.0731037132994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56708.988764044945,
            "unit": "ns",
            "range": "± 4604.657732059765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45640.350877192985,
            "unit": "ns",
            "range": "± 1691.5609495715157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72342.42424242424,
            "unit": "ns",
            "range": "± 19192.096007604814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3240.625,
            "unit": "ns",
            "range": "± 734.7864888595369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13247.368421052632,
            "unit": "ns",
            "range": "± 1992.4774541698434"
          }
        ]
      }
    ]
  }
}