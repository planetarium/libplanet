window.BENCHMARK_DATA = {
  "lastUpdate": 1692591474860,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050039ddb74fe85fc58cfa0892c3808a77c22fe3",
          "message": "Merge pull request #3356 from moreal/feature/rocksdb/readonly\n\nfeat(#3354): support rocksdb read-only mode",
          "timestamp": "2023-08-21T13:02:45+09:00",
          "tree_id": "d45cec8ff9a732a463bb60493b2d7699df2cc75a",
          "url": "https://github.com/planetarium/libplanet/commit/050039ddb74fe85fc58cfa0892c3808a77c22fe3"
        },
        "date": 1692591447881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388699.8225806453,
            "unit": "ns",
            "range": "± 150609.4068448194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3665781.8928571427,
            "unit": "ns",
            "range": "± 102745.31239062613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225774.7272727275,
            "unit": "ns",
            "range": "± 98241.47545627986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3999192.205128205,
            "unit": "ns",
            "range": "± 131978.79036444484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6214997.076923077,
            "unit": "ns",
            "range": "± 140852.54817174535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8062681.8,
            "unit": "ns",
            "range": "± 116189.09446931756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22352480.266666666,
            "unit": "ns",
            "range": "± 414516.2981694045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56618941.666666664,
            "unit": "ns",
            "range": "± 640873.1155086859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107688818,
            "unit": "ns",
            "range": "± 2082625.3796042148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218436275,
            "unit": "ns",
            "range": "± 4074314.211193514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47941.4578313253,
            "unit": "ns",
            "range": "± 2335.672427861683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4956039.426339285,
            "unit": "ns",
            "range": "± 33077.815149759124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1577445.5559895833,
            "unit": "ns",
            "range": "± 6258.062857622922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082472.1643229167,
            "unit": "ns",
            "range": "± 6148.8014011505975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614134.15,
            "unit": "ns",
            "range": "± 8115.671060707216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851583.1902994792,
            "unit": "ns",
            "range": "± 2177.079938014023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750750.4694661458,
            "unit": "ns",
            "range": "± 2321.2822703050883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284366.2272727273,
            "unit": "ns",
            "range": "± 6810.639645030331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265719.40476190473,
            "unit": "ns",
            "range": "± 8664.878235276703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233895.14285714287,
            "unit": "ns",
            "range": "± 6089.734809735975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299259.1875,
            "unit": "ns",
            "range": "± 84214.94622865845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3920432.294117647,
            "unit": "ns",
            "range": "± 78605.43423387207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18528.610526315788,
            "unit": "ns",
            "range": "± 1679.2946042827405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84068.92045454546,
            "unit": "ns",
            "range": "± 4575.087038231392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68670.07692307692,
            "unit": "ns",
            "range": "± 792.1579663108512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79049.82653061225,
            "unit": "ns",
            "range": "± 12652.762984208097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4619.8125,
            "unit": "ns",
            "range": "± 371.8165736941862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17708.55789473684,
            "unit": "ns",
            "range": "± 2036.9565726984338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444793.07,
            "unit": "ns",
            "range": "± 120693.0521831223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729190.65,
            "unit": "ns",
            "range": "± 95030.39693416048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1775313.9759036144,
            "unit": "ns",
            "range": "± 93234.06569476107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696099.96,
            "unit": "ns",
            "range": "± 125134.48084909823"
          }
        ]
      }
    ]
  }
}