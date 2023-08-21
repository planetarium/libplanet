window.BENCHMARK_DATA = {
  "lastUpdate": 1692591838770,
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
        "date": 1692591783188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9693594.597938145,
            "unit": "ns",
            "range": "± 1358785.77985017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24664514.20588235,
            "unit": "ns",
            "range": "± 793076.4788460794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52490525.09090909,
            "unit": "ns",
            "range": "± 1756419.5915953545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106792338.53846154,
            "unit": "ns",
            "range": "± 2889539.059471797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221346505.7352941,
            "unit": "ns",
            "range": "± 4396253.911089667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82043.74742268042,
            "unit": "ns",
            "range": "± 19006.136296947476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344358.876344086,
            "unit": "ns",
            "range": "± 39020.56405251455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324599.0869565217,
            "unit": "ns",
            "range": "± 28733.57483454809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312522.0934065934,
            "unit": "ns",
            "range": "± 27173.833986219586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4242747.0617283955,
            "unit": "ns",
            "range": "± 223171.7288347891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788735.5057471264,
            "unit": "ns",
            "range": "± 205818.9731072042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17762.228260869564,
            "unit": "ns",
            "range": "± 2258.6630933590864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98428.83333333333,
            "unit": "ns",
            "range": "± 18164.209911082773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105334.08791208791,
            "unit": "ns",
            "range": "± 13233.09912609569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96245.35567010309,
            "unit": "ns",
            "range": "± 14557.119850916662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6221.49494949495,
            "unit": "ns",
            "range": "± 1643.2935841004369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18372.521276595744,
            "unit": "ns",
            "range": "± 2725.3966732246813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710608.2956989247,
            "unit": "ns",
            "range": "± 226431.23777681953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3168334.346153846,
            "unit": "ns",
            "range": "± 182040.9359606864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173039.8260869565,
            "unit": "ns",
            "range": "± 223332.08477458102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6154153.914893617,
            "unit": "ns",
            "range": "± 414310.0926517028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3588042.9620253164,
            "unit": "ns",
            "range": "± 185494.36059438318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3695405.0306122447,
            "unit": "ns",
            "range": "± 251392.8079335311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4844455.260869565,
            "unit": "ns",
            "range": "± 272578.3667092589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4128372.6914893617,
            "unit": "ns",
            "range": "± 232634.82898528184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7504537.291666667,
            "unit": "ns",
            "range": "± 481491.79093390075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5957740.401141827,
            "unit": "ns",
            "range": "± 243813.96876422717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888270.6035837573,
            "unit": "ns",
            "range": "± 102022.9503437015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1107414.4545611213,
            "unit": "ns",
            "range": "± 34713.68381504012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617312.1962139425,
            "unit": "ns",
            "range": "± 34560.93521656643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805761.2110072544,
            "unit": "ns",
            "range": "± 4271.048970317933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 686882.6947916667,
            "unit": "ns",
            "range": "± 6012.8509412271005"
          }
        ]
      }
    ]
  }
}