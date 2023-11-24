window.BENCHMARK_DATA = {
  "lastUpdate": 1700818553656,
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
          "id": "f8a55beec6ab7d0e4ff88aa55b90332b61ab00df",
          "message": "fix: Fix bug on gossip denial",
          "timestamp": "2023-11-24T18:20:16+09:00",
          "tree_id": "e316a526d60d145eec27f10293b3b2bef907f65d",
          "url": "https://github.com/planetarium/libplanet/commit/f8a55beec6ab7d0e4ff88aa55b90332b61ab00df"
        },
        "date": 1700818527550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194702.61764705883,
            "unit": "ns",
            "range": "± 7879.167615039189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191372.57575757575,
            "unit": "ns",
            "range": "± 8916.100819150119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167534.15789473685,
            "unit": "ns",
            "range": "± 5716.264933084039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3023610.6428571427,
            "unit": "ns",
            "range": "± 46422.716025350455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841887.75,
            "unit": "ns",
            "range": "± 16776.407379656164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14672.737373737375,
            "unit": "ns",
            "range": "± 2610.091528561116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59956.684782608696,
            "unit": "ns",
            "range": "± 3881.364082549375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52287.530303030304,
            "unit": "ns",
            "range": "± 1540.1303411734443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59936.67010309279,
            "unit": "ns",
            "range": "± 9307.767931636512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2776.2340425531916,
            "unit": "ns",
            "range": "± 389.83656419791174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13116.649484536083,
            "unit": "ns",
            "range": "± 2233.566290903206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3622842.5276227677,
            "unit": "ns",
            "range": "± 35452.39269475434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204721.2827845982,
            "unit": "ns",
            "range": "± 10377.33995304362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766725.3392159598,
            "unit": "ns",
            "range": "± 5029.024486913124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1907771.495814732,
            "unit": "ns",
            "range": "± 14725.83673232037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608329.9229213169,
            "unit": "ns",
            "range": "± 3493.344481673018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562861.6337076823,
            "unit": "ns",
            "range": "± 3507.787545073702"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38332.760416666664,
            "unit": "ns",
            "range": "± 4713.856940742377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2330638.649122807,
            "unit": "ns",
            "range": "± 100847.57658457555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492552.789473684,
            "unit": "ns",
            "range": "± 41339.56547718064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3055315.5,
            "unit": "ns",
            "range": "± 68642.39697193442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2820397.75,
            "unit": "ns",
            "range": "± 115089.35826490333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6647800.657142857,
            "unit": "ns",
            "range": "± 216271.9837258227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5685313.733333333,
            "unit": "ns",
            "range": "± 99776.21954043435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14048579.86,
            "unit": "ns",
            "range": "± 372860.0043685833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35419972.64285714,
            "unit": "ns",
            "range": "± 519274.1887369342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76008627.43333334,
            "unit": "ns",
            "range": "± 1069593.9966307287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146532000.3846154,
            "unit": "ns",
            "range": "± 1924510.4017326734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935917.3478260869,
            "unit": "ns",
            "range": "± 71317.5118023609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1822670.4081632653,
            "unit": "ns",
            "range": "± 72127.43991971156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1363999.6546391752,
            "unit": "ns",
            "range": "± 102013.27704563962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5557042.989473684,
            "unit": "ns",
            "range": "± 363582.21694884374"
          }
        ]
      }
    ]
  }
}