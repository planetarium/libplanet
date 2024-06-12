window.BENCHMARK_DATA = {
  "lastUpdate": 1718180604143,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d08ba662a1c9f3e4f95e1ed7ccc1ab49587b63b3",
          "message": "Merge pull request #3812 from s2quake/release/4.5.2\n\n🚀 Release 4.5.2",
          "timestamp": "2024-06-11T09:16:24+09:00",
          "tree_id": "7f4910b96854b48ddd182cd1ed1a3314c3da8a27",
          "url": "https://github.com/planetarium/libplanet/commit/d08ba662a1c9f3e4f95e1ed7ccc1ab49587b63b3"
        },
        "date": 1718180566241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5876871.033333333,
            "unit": "ns",
            "range": "± 61982.51935236794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14615146.214285715,
            "unit": "ns",
            "range": "± 78787.00866667586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36907985.65384615,
            "unit": "ns",
            "range": "± 230635.58658514597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74141532.42857143,
            "unit": "ns",
            "range": "± 373006.91012256977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146860303.42857143,
            "unit": "ns",
            "range": "± 568088.484361705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 20245.763440860213,
            "unit": "ns",
            "range": "± 3186.892589688915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129520.98947368421,
            "unit": "ns",
            "range": "± 12590.40573044947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 126996.73195876289,
            "unit": "ns",
            "range": "± 12697.116679351742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 103239.08762886598,
            "unit": "ns",
            "range": "± 12966.10704133455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3330340.137254902,
            "unit": "ns",
            "range": "± 134408.9722417398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2762723.4166666665,
            "unit": "ns",
            "range": "± 173738.7851160269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 7555.95744680851,
            "unit": "ns",
            "range": "± 3094.483534009476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 30388.263157894737,
            "unit": "ns",
            "range": "± 5552.812546331097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22058.84,
            "unit": "ns",
            "range": "± 877.0108174233378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 38028,
            "unit": "ns",
            "range": "± 8835.804386395115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1244.8461538461538,
            "unit": "ns",
            "range": "± 304.6931032686614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 7159.533333333334,
            "unit": "ns",
            "range": "± 1931.8308147012287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 748089.806122449,
            "unit": "ns",
            "range": "± 93360.27806185436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1334135.629213483,
            "unit": "ns",
            "range": "± 78164.21567434778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1136424.107142857,
            "unit": "ns",
            "range": "± 61014.35699839949"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9198630.89,
            "unit": "ns",
            "range": "± 1844058.2581386333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196478.942857143,
            "unit": "ns",
            "range": "± 56355.3907583476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2342819.746031746,
            "unit": "ns",
            "range": "± 107118.50971191768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2679771.285714286,
            "unit": "ns",
            "range": "± 37055.42439566516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3085092.4225352113,
            "unit": "ns",
            "range": "± 149980.16753259287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10771294.56122449,
            "unit": "ns",
            "range": "± 974388.7577872747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3128234.255859375,
            "unit": "ns",
            "range": "± 55297.85037632705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926878.603655134,
            "unit": "ns",
            "range": "± 4219.297668896385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612944.6551339285,
            "unit": "ns",
            "range": "± 2182.5243665097446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637789.4359375,
            "unit": "ns",
            "range": "± 12413.993141613102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463802.32981770835,
            "unit": "ns",
            "range": "± 688.8197120932855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420116.34312220983,
            "unit": "ns",
            "range": "± 472.3472359441968"
          }
        ]
      }
    ]
  }
}