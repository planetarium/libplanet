window.BENCHMARK_DATA = {
  "lastUpdate": 1697628366573,
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
          "id": "582769981f960a65c5fc10d5a8a917e7fd8b9d4a",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>\n(cherry picked from commit 9ab368f1b8a524c29bf8e6d03020c4a2efde28ea)",
          "timestamp": "2023-10-18T19:04:17+09:00",
          "tree_id": "60b507f13188cb08f123b870814e041ea22f4f73",
          "url": "https://github.com/planetarium/libplanet/commit/582769981f960a65c5fc10d5a8a917e7fd8b9d4a"
        },
        "date": 1697628332906,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70263.95833333333,
            "unit": "ns",
            "range": "± 12648.867949276948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9042307.52631579,
            "unit": "ns",
            "range": "± 488798.43544544163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24676813.27,
            "unit": "ns",
            "range": "± 1562297.6926058724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66569272.10769231,
            "unit": "ns",
            "range": "± 3094203.195698299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134525029.91304347,
            "unit": "ns",
            "range": "± 3379217.563896276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271055984.72727275,
            "unit": "ns",
            "range": "± 6411087.652071662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366722,
            "unit": "ns",
            "range": "± 30222.424005242996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351005.86315789475,
            "unit": "ns",
            "range": "± 32663.155449973903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289887.3510638298,
            "unit": "ns",
            "range": "± 28144.739200432738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5039005.97979798,
            "unit": "ns",
            "range": "± 349946.14287213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4535173.24742268,
            "unit": "ns",
            "range": "± 266060.1889755959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35319.41573033708,
            "unit": "ns",
            "range": "± 8166.251976063922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125943.6170212766,
            "unit": "ns",
            "range": "± 15344.055654805601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125116.44329896907,
            "unit": "ns",
            "range": "± 13918.018922552246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127673.95833333333,
            "unit": "ns",
            "range": "± 17075.220398618687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7832.962025316456,
            "unit": "ns",
            "range": "± 1186.339829411087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31010.438775510203,
            "unit": "ns",
            "range": "± 9502.838720821523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1578300.3229166667,
            "unit": "ns",
            "range": "± 183090.39273720246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3174855.536082474,
            "unit": "ns",
            "range": "± 282279.0563097189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2569660.8645833335,
            "unit": "ns",
            "range": "± 258485.63125488054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11859721.505263157,
            "unit": "ns",
            "range": "± 937567.2886700927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5489980.3167317705,
            "unit": "ns",
            "range": "± 201478.48224868998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1841251.3220402645,
            "unit": "ns",
            "range": "± 49756.34061459261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1277861.6923036317,
            "unit": "ns",
            "range": "± 41034.202541624414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2942777.2728949655,
            "unit": "ns",
            "range": "± 97347.52721012788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920368.7119140625,
            "unit": "ns",
            "range": "± 14593.723424005175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906341.3864118303,
            "unit": "ns",
            "range": "± 28977.664928001057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4157560.397959184,
            "unit": "ns",
            "range": "± 302756.0111023954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4629628.381578947,
            "unit": "ns",
            "range": "± 234046.57772007503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5589496.311111111,
            "unit": "ns",
            "range": "± 309546.0275354189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5567893.909090909,
            "unit": "ns",
            "range": "± 259062.97907359112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13840567.530612245,
            "unit": "ns",
            "range": "± 552124.9362385104"
          }
        ]
      }
    ]
  }
}