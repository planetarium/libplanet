window.BENCHMARK_DATA = {
  "lastUpdate": 1680856995047,
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
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680856968483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9704426.333333334,
            "unit": "ns",
            "range": "± 188051.3050260487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25656354.733333334,
            "unit": "ns",
            "range": "± 286819.5529281848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65329077,
            "unit": "ns",
            "range": "± 205815.08761021384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130404914.4,
            "unit": "ns",
            "range": "± 1050365.4940868237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272264957.06666666,
            "unit": "ns",
            "range": "± 1893898.3867179684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57967.891304347824,
            "unit": "ns",
            "range": "± 3715.5232322183538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742687.3058823529,
            "unit": "ns",
            "range": "± 90745.54891498268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3228222.3333333335,
            "unit": "ns",
            "range": "± 107369.0025387748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2805430.5147058824,
            "unit": "ns",
            "range": "± 130427.21185665694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756788.84,
            "unit": "ns",
            "range": "± 158780.37904410608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7127246.609375,
            "unit": "ns",
            "range": "± 25337.908032821444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213419.4401041665,
            "unit": "ns",
            "range": "± 3465.997996675089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609435.03828125,
            "unit": "ns",
            "range": "± 3457.044080052252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102751.29296875,
            "unit": "ns",
            "range": "± 3626.369285268561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998065.9204427083,
            "unit": "ns",
            "range": "± 1264.4320636190216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917800.3602864583,
            "unit": "ns",
            "range": "± 626.1835066460595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412043.5172413793,
            "unit": "ns",
            "range": "± 11963.395249739007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335547.78571428574,
            "unit": "ns",
            "range": "± 12267.1499811602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284687.75757575757,
            "unit": "ns",
            "range": "± 8369.709945057471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6937495,
            "unit": "ns",
            "range": "± 75593.66489329645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5114717.533333333,
            "unit": "ns",
            "range": "± 75524.870779543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25053.744680851065,
            "unit": "ns",
            "range": "± 2115.2572986489213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111717.81914893616,
            "unit": "ns",
            "range": "± 6525.694737393934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97061.97894736842,
            "unit": "ns",
            "range": "± 6753.3987802186275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254800.92307692306,
            "unit": "ns",
            "range": "± 3204.4090578851524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7996.381443298969,
            "unit": "ns",
            "range": "± 1076.3933745315394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24280.907216494845,
            "unit": "ns",
            "range": "± 2004.315890576686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4154660.3076923075,
            "unit": "ns",
            "range": "± 110850.17439905784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470513.857142857,
            "unit": "ns",
            "range": "± 70279.2989488886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5069360.045454546,
            "unit": "ns",
            "range": "± 120462.0876697716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5667090.428571428,
            "unit": "ns",
            "range": "± 89516.51790652881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8623089.5,
            "unit": "ns",
            "range": "± 176917.68279668107"
          }
        ]
      },
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
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680856968483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9704426.333333334,
            "unit": "ns",
            "range": "± 188051.3050260487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25656354.733333334,
            "unit": "ns",
            "range": "± 286819.5529281848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65329077,
            "unit": "ns",
            "range": "± 205815.08761021384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130404914.4,
            "unit": "ns",
            "range": "± 1050365.4940868237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272264957.06666666,
            "unit": "ns",
            "range": "± 1893898.3867179684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57967.891304347824,
            "unit": "ns",
            "range": "± 3715.5232322183538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742687.3058823529,
            "unit": "ns",
            "range": "± 90745.54891498268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3228222.3333333335,
            "unit": "ns",
            "range": "± 107369.0025387748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2805430.5147058824,
            "unit": "ns",
            "range": "± 130427.21185665694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756788.84,
            "unit": "ns",
            "range": "± 158780.37904410608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7127246.609375,
            "unit": "ns",
            "range": "± 25337.908032821444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213419.4401041665,
            "unit": "ns",
            "range": "± 3465.997996675089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609435.03828125,
            "unit": "ns",
            "range": "± 3457.044080052252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102751.29296875,
            "unit": "ns",
            "range": "± 3626.369285268561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998065.9204427083,
            "unit": "ns",
            "range": "± 1264.4320636190216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917800.3602864583,
            "unit": "ns",
            "range": "± 626.1835066460595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412043.5172413793,
            "unit": "ns",
            "range": "± 11963.395249739007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335547.78571428574,
            "unit": "ns",
            "range": "± 12267.1499811602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284687.75757575757,
            "unit": "ns",
            "range": "± 8369.709945057471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6937495,
            "unit": "ns",
            "range": "± 75593.66489329645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5114717.533333333,
            "unit": "ns",
            "range": "± 75524.870779543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25053.744680851065,
            "unit": "ns",
            "range": "± 2115.2572986489213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111717.81914893616,
            "unit": "ns",
            "range": "± 6525.694737393934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97061.97894736842,
            "unit": "ns",
            "range": "± 6753.3987802186275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254800.92307692306,
            "unit": "ns",
            "range": "± 3204.4090578851524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7996.381443298969,
            "unit": "ns",
            "range": "± 1076.3933745315394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24280.907216494845,
            "unit": "ns",
            "range": "± 2004.315890576686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4154660.3076923075,
            "unit": "ns",
            "range": "± 110850.17439905784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470513.857142857,
            "unit": "ns",
            "range": "± 70279.2989488886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5069360.045454546,
            "unit": "ns",
            "range": "± 120462.0876697716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5667090.428571428,
            "unit": "ns",
            "range": "± 89516.51790652881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8623089.5,
            "unit": "ns",
            "range": "± 176917.68279668107"
          }
        ]
      }
    ]
  }
}