window.BENCHMARK_DATA = {
  "lastUpdate": 1702444565551,
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
          "id": "25e457091b6313503c06f75758e1b97a8a33ae13",
          "message": "rocksdb",
          "timestamp": "2023-12-13T14:04:27+09:00",
          "tree_id": "2de6bacda19c9d0d990b4856d215bd1e9899fbbf",
          "url": "https://github.com/planetarium/libplanet/commit/25e457091b6313503c06f75758e1b97a8a33ae13"
        },
        "date": 1702444541036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196937.3275862069,
            "unit": "ns",
            "range": "± 7817.762405647507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193139.79411764705,
            "unit": "ns",
            "range": "± 4611.6219704950045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166121.38461538462,
            "unit": "ns",
            "range": "± 2519.6427834933775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074516.6153846155,
            "unit": "ns",
            "range": "± 32123.533750036648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2872828.0714285714,
            "unit": "ns",
            "range": "± 43409.372430854826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12385.753086419752,
            "unit": "ns",
            "range": "± 1186.4629422243263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65172.757575757576,
            "unit": "ns",
            "range": "± 8268.335666609866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51163.88461538462,
            "unit": "ns",
            "range": "± 1392.1582475257064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60221.3125,
            "unit": "ns",
            "range": "± 12300.02987785203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3197.5,
            "unit": "ns",
            "range": "± 579.2840590354888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12190.5625,
            "unit": "ns",
            "range": "± 1612.9980964683518"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38901.02631578947,
            "unit": "ns",
            "range": "± 4481.079687625886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937638.132183908,
            "unit": "ns",
            "range": "± 50754.570215140266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1833550.875,
            "unit": "ns",
            "range": "± 64966.23494660762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1368849.2956989247,
            "unit": "ns",
            "range": "± 92275.88922410399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5675414.23,
            "unit": "ns",
            "range": "± 362829.24855369295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416692,
            "unit": "ns",
            "range": "± 38123.41930947635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2489859.6666666665,
            "unit": "ns",
            "range": "± 43931.32422586525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3171473.419354839,
            "unit": "ns",
            "range": "± 64093.65034009438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2949291.382352941,
            "unit": "ns",
            "range": "± 78012.28707535862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6773631.738095238,
            "unit": "ns",
            "range": "± 245352.38905814532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5713135.433333334,
            "unit": "ns",
            "range": "± 22295.84856766795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14397796.066666666,
            "unit": "ns",
            "range": "± 221327.11858225553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37652844.76190476,
            "unit": "ns",
            "range": "± 884775.0130736008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75997596.5,
            "unit": "ns",
            "range": "± 452593.77513081935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152107297.19230768,
            "unit": "ns",
            "range": "± 588449.043921871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690513.673377404,
            "unit": "ns",
            "range": "± 10200.324096862394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1155755.8041992188,
            "unit": "ns",
            "range": "± 4783.518017389986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748100.0324707031,
            "unit": "ns",
            "range": "± 2051.090711064903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949567.1756510416,
            "unit": "ns",
            "range": "± 27876.560576873493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610998.7213792067,
            "unit": "ns",
            "range": "± 1107.970308537944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579916.5599888393,
            "unit": "ns",
            "range": "± 801.2201341225284"
          }
        ]
      }
    ]
  }
}