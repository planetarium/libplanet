window.BENCHMARK_DATA = {
  "lastUpdate": 1722234810380,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323",
          "message": "fix: use cache instead of get block from store",
          "timestamp": "2024-07-29T15:22:01+09:00",
          "tree_id": "b54d9c304404e61b9d2fd242c8811566e524801f",
          "url": "https://github.com/planetarium/libplanet/commit/2aa8b64e2c4a0c63e8dee2286e7688fe3f79f323"
        },
        "date": 1722234784516,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065133.5638297873,
            "unit": "ns",
            "range": "± 97695.68965635772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2072034.14,
            "unit": "ns",
            "range": "± 103677.75052831677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1769566.6170212766,
            "unit": "ns",
            "range": "± 124068.36365679772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8634777.282608695,
            "unit": "ns",
            "range": "± 330410.49219308083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227515.03608247422,
            "unit": "ns",
            "range": "± 25616.049298186517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211228.32,
            "unit": "ns",
            "range": "± 25694.75199645235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187991.13,
            "unit": "ns",
            "range": "± 21791.082907833206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149161.8636363638,
            "unit": "ns",
            "range": "± 76625.99960494292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929645.52,
            "unit": "ns",
            "range": "± 75558.99012753768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18824.84,
            "unit": "ns",
            "range": "± 4860.5730316870695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81005.43,
            "unit": "ns",
            "range": "± 17924.11146763324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67978.23232323233,
            "unit": "ns",
            "range": "± 9289.411090303778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67307.9387755102,
            "unit": "ns",
            "range": "± 13508.063165220776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4107.082474226804,
            "unit": "ns",
            "range": "± 1271.5163574621502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16695.358585858587,
            "unit": "ns",
            "range": "± 5189.691294759258"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37932.5,
            "unit": "ns",
            "range": "± 6231.923720050275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10786427.23076923,
            "unit": "ns",
            "range": "± 294837.48165039095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27287694.866666667,
            "unit": "ns",
            "range": "± 456652.3941309762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70534307.7,
            "unit": "ns",
            "range": "± 557896.853544657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139476370.6,
            "unit": "ns",
            "range": "± 478263.01879805484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291129160.46666664,
            "unit": "ns",
            "range": "± 685258.6075258498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718710.486778846,
            "unit": "ns",
            "range": "± 3780.006810166193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211207.1612723214,
            "unit": "ns",
            "range": "± 2712.268977868575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 797241.8793619792,
            "unit": "ns",
            "range": "± 1334.8735535603419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964799.7508370536,
            "unit": "ns",
            "range": "± 3421.922896357098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614639.0408203125,
            "unit": "ns",
            "range": "± 1114.786886356083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569767.701311384,
            "unit": "ns",
            "range": "± 656.6015288258341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2436269.1666666665,
            "unit": "ns",
            "range": "± 88707.11156134502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2567892.862745098,
            "unit": "ns",
            "range": "± 104144.03760235527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3173010.02,
            "unit": "ns",
            "range": "± 77636.28564827144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2615844.906976744,
            "unit": "ns",
            "range": "± 90554.19837518354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3358365.588235294,
            "unit": "ns",
            "range": "± 67014.64111768677"
          }
        ]
      }
    ]
  }
}