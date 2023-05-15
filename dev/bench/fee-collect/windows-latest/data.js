window.BENCHMARK_DATA = {
  "lastUpdate": 1684140005937,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "504188a71083bab92fecacb7191512bf3d7b5793",
          "message": "Merge pull request #3158 from greymistcube/feature/exposed-polymorphic-action-api-for-testing\n\n🔧 Added `ReloadLoader()` method",
          "timestamp": "2023-05-15T15:26:16+09:00",
          "tree_id": "c0c0a06df54444d921759ddab9a0c0441bf134da",
          "url": "https://github.com/planetarium/libplanet/commit/504188a71083bab92fecacb7191512bf3d7b5793"
        },
        "date": 1684139951408,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1491825.7731958763,
            "unit": "ns",
            "range": "± 118388.87042844451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2818453.3333333335,
            "unit": "ns",
            "range": "± 142216.51112313237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2364800,
            "unit": "ns",
            "range": "± 182573.5562475032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5771510,
            "unit": "ns",
            "range": "± 253888.13144401924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63224.742268041235,
            "unit": "ns",
            "range": "± 7856.407031417032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7014451.851851852,
            "unit": "ns",
            "range": "± 181541.8883012326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19482253.333333332,
            "unit": "ns",
            "range": "± 284677.3834828939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52346153.333333336,
            "unit": "ns",
            "range": "± 589923.2115485959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104777228.57142857,
            "unit": "ns",
            "range": "± 936709.9053672844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202464809.52380952,
            "unit": "ns",
            "range": "± 7278689.516356419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5021907.864583333,
            "unit": "ns",
            "range": "± 46278.78654914183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1548496.7708333333,
            "unit": "ns",
            "range": "± 4313.156828444006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162989.5963541667,
            "unit": "ns",
            "range": "± 6349.401274333173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2720854.765625,
            "unit": "ns",
            "range": "± 15978.11567066169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 927589.1276041666,
            "unit": "ns",
            "range": "± 4248.043964340307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770619.4905598959,
            "unit": "ns",
            "range": "± 1055.36147320418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407958.3333333335,
            "unit": "ns",
            "range": "± 113738.93258561153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3638800,
            "unit": "ns",
            "range": "± 77639.80937637598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4243122.033898305,
            "unit": "ns",
            "range": "± 182935.19774800658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4442071.212121212,
            "unit": "ns",
            "range": "± 202043.4186125893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7066936.842105263,
            "unit": "ns",
            "range": "± 238946.01496035428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290776.2886597938,
            "unit": "ns",
            "range": "± 20075.05071182821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293429.1666666667,
            "unit": "ns",
            "range": "± 14039.245169508848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279200,
            "unit": "ns",
            "range": "± 7497.692978510123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4214106.666666667,
            "unit": "ns",
            "range": "± 56857.748142267505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927593.3333333335,
            "unit": "ns",
            "range": "± 65480.2202049996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27855.78947368421,
            "unit": "ns",
            "range": "± 3546.2211169816132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107275.51020408163,
            "unit": "ns",
            "range": "± 12267.964410118577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107948.97959183673,
            "unit": "ns",
            "range": "± 16935.500716395814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118260.82474226804,
            "unit": "ns",
            "range": "± 25792.20875857762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9215.463917525773,
            "unit": "ns",
            "range": "± 1592.4522629020923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27307.070707070707,
            "unit": "ns",
            "range": "± 4464.468625401504"
          }
        ]
      }
    ]
  }
}