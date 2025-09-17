window.BENCHMARK_DATA = {
  "lastUpdate": 1758101980148,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "c94b6871675a86a3820088da335f7bb9023e3c87",
          "message": "prepare: 5.5.4",
          "timestamp": "2025-09-17T18:28:42+09:00",
          "tree_id": "cc2be3deeeaeef17707291ac3952bfe2382e503a",
          "url": "https://github.com/planetarium/libplanet/commit/c94b6871675a86a3820088da335f7bb9023e3c87"
        },
        "date": 1758101899785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052772,
            "unit": "ns",
            "range": "± 115176.29182249182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1835684.375,
            "unit": "ns",
            "range": "± 56745.732307202146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561502.1276595744,
            "unit": "ns",
            "range": "± 141860.11736443118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6870871.428571428,
            "unit": "ns",
            "range": "± 274419.1038964549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32358.58585858586,
            "unit": "ns",
            "range": "± 4937.073620980515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10316575,
            "unit": "ns",
            "range": "± 188383.38390986965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25045813.333333332,
            "unit": "ns",
            "range": "± 157012.55121198192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60275666.666666664,
            "unit": "ns",
            "range": "± 354936.5731400203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123979866.66666667,
            "unit": "ns",
            "range": "± 883103.9824446064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246847200,
            "unit": "ns",
            "range": "± 1760899.1128722525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3330977.109375,
            "unit": "ns",
            "range": "± 6020.468164316644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050110.2864583333,
            "unit": "ns",
            "range": "± 2097.824693989801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735712.91015625,
            "unit": "ns",
            "range": "± 835.538694708159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974345.1729910714,
            "unit": "ns",
            "range": "± 4203.032493930658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636316.8098958334,
            "unit": "ns",
            "range": "± 1148.8533848432828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563015.95703125,
            "unit": "ns",
            "range": "± 818.5622594277515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190625.925925926,
            "unit": "ns",
            "range": "± 58199.82548607587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2298078.5714285714,
            "unit": "ns",
            "range": "± 23599.688021778482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2717353.3333333335,
            "unit": "ns",
            "range": "± 49224.26617992777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2451007.1428571427,
            "unit": "ns",
            "range": "± 27532.6509463195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3012682.3529411764,
            "unit": "ns",
            "range": "± 60824.432131485184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101643.33333333333,
            "unit": "ns",
            "range": "± 4019.5440616165456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173271.15384615384,
            "unit": "ns",
            "range": "± 6395.1064790062765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149029.41176470587,
            "unit": "ns",
            "range": "± 4821.638688609274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2634486.6666666665,
            "unit": "ns",
            "range": "± 45886.830769788816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2571746.6666666665,
            "unit": "ns",
            "range": "± 44290.01607371037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12353.191489361701,
            "unit": "ns",
            "range": "± 1852.9663592545173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55648.31460674157,
            "unit": "ns",
            "range": "± 4772.342486556132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46088.63636363636,
            "unit": "ns",
            "range": "± 1739.1812975143444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62458.51063829787,
            "unit": "ns",
            "range": "± 9709.870928950337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2791.4893617021276,
            "unit": "ns",
            "range": "± 420.61388174906716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11380,
            "unit": "ns",
            "range": "± 1833.4713036414275"
          }
        ]
      }
    ]
  }
}