window.BENCHMARK_DATA = {
  "lastUpdate": 1679908706528,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d8d5ed9b9406362876512cf8ef4b393304225b72",
          "message": "Version bump",
          "timestamp": "2023-03-27T17:58:08+09:00",
          "tree_id": "3dbd7bd8fcd4b144c04a448633d6660bc6df5655",
          "url": "https://github.com/planetarium/libplanet/commit/d8d5ed9b9406362876512cf8ef4b393304225b72"
        },
        "date": 1679908657554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401754.081632653,
            "unit": "ns",
            "range": "± 126693.44458453364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2649674.6666666665,
            "unit": "ns",
            "range": "± 132572.21702878748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198092,
            "unit": "ns",
            "range": "± 164822.6623870748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5122557.5,
            "unit": "ns",
            "range": "± 181827.99266522928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48779.34782608696,
            "unit": "ns",
            "range": "± 3119.894970177727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7459823.529411765,
            "unit": "ns",
            "range": "± 153014.39691011008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19821935.714285713,
            "unit": "ns",
            "range": "± 204419.91701526416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50512407.14285714,
            "unit": "ns",
            "range": "± 271205.537906601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101640061.53846154,
            "unit": "ns",
            "range": "± 838347.4821918628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198256313.33333334,
            "unit": "ns",
            "range": "± 2631576.192503721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4837413.560267857,
            "unit": "ns",
            "range": "± 16470.535786989334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507443.540736607,
            "unit": "ns",
            "range": "± 3560.1388566445753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1166069.8177083333,
            "unit": "ns",
            "range": "± 3565.0166299215894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632863.4375,
            "unit": "ns",
            "range": "± 5958.075041750062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848033.4333147322,
            "unit": "ns",
            "range": "± 1778.4766441585557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749307.87109375,
            "unit": "ns",
            "range": "± 1382.0573011147333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3268203.125,
            "unit": "ns",
            "range": "± 98367.55459180109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5126518.518518519,
            "unit": "ns",
            "range": "± 139350.26161836015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23889178.57142857,
            "unit": "ns",
            "range": "± 191013.69434826245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6399019.14893617,
            "unit": "ns",
            "range": "± 249459.6243694845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27550663.333333332,
            "unit": "ns",
            "range": "± 466990.46926136763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198768.5185185185,
            "unit": "ns",
            "range": "± 8382.525041160827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194591.83673469388,
            "unit": "ns",
            "range": "± 7772.436252946849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175525,
            "unit": "ns",
            "range": "± 11169.43317155071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11323681.25,
            "unit": "ns",
            "range": "± 219462.40443031088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9264128.57142857,
            "unit": "ns",
            "range": "± 135389.45208643004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25464.21052631579,
            "unit": "ns",
            "range": "± 2734.527684506929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58227.95698924731,
            "unit": "ns",
            "range": "± 3678.5324812377658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48200,
            "unit": "ns",
            "range": "± 3893.744983945405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106565.78947368421,
            "unit": "ns",
            "range": "± 5256.400609582668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8647.959183673469,
            "unit": "ns",
            "range": "± 1157.7822375805642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25734.0206185567,
            "unit": "ns",
            "range": "± 2049.07939684397"
          }
        ]
      }
    ]
  }
}