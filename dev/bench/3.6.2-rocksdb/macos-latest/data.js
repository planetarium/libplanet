window.BENCHMARK_DATA = {
  "lastUpdate": 1702445530859,
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
        "date": 1702445367453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7860126.925925926,
            "unit": "ns",
            "range": "± 214649.07206126826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19654733.51612903,
            "unit": "ns",
            "range": "± 883081.0948377019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48307000.384615384,
            "unit": "ns",
            "range": "± 1954525.6486591415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97451167.90322581,
            "unit": "ns",
            "range": "± 2918585.3412335957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203571996.1530612,
            "unit": "ns",
            "range": "± 8121215.0399873415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43753.95744680851,
            "unit": "ns",
            "range": "± 12010.986553908459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233818.98913043478,
            "unit": "ns",
            "range": "± 26759.81212153965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219651.62637362638,
            "unit": "ns",
            "range": "± 16018.82134008364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204958,
            "unit": "ns",
            "range": "± 23068.724021930644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3840530.1707317075,
            "unit": "ns",
            "range": "± 188766.66346911102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3688196.8636363638,
            "unit": "ns",
            "range": "± 195504.17520439049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15194.916666666666,
            "unit": "ns",
            "range": "± 2877.2863562920566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93296.72727272728,
            "unit": "ns",
            "range": "± 26278.522010522473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87061.94329896907,
            "unit": "ns",
            "range": "± 16884.748317619535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86305.04639175258,
            "unit": "ns",
            "range": "± 16759.451930813935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6381.752808988764,
            "unit": "ns",
            "range": "± 1523.1288317808996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22613.333333333332,
            "unit": "ns",
            "range": "± 10475.600778818989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1178316.4239130435,
            "unit": "ns",
            "range": "± 147074.14465561564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2495118.8372093025,
            "unit": "ns",
            "range": "± 134936.29337378262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694958.1612903227,
            "unit": "ns",
            "range": "± 124339.16839079716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6983577.170212766,
            "unit": "ns",
            "range": "± 637963.689094229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2936728.6666666665,
            "unit": "ns",
            "range": "± 61971.727503472954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3038377.282608696,
            "unit": "ns",
            "range": "± 183797.34826614475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3700254.4226804124,
            "unit": "ns",
            "range": "± 234893.13429376922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3637599.2421052633,
            "unit": "ns",
            "range": "± 288267.40444666904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13503049.357142856,
            "unit": "ns",
            "range": "± 2542799.700999161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4803817.339646464,
            "unit": "ns",
            "range": "± 355041.95055605035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492841.9559181787,
            "unit": "ns",
            "range": "± 101089.29770043015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 974779.3783337823,
            "unit": "ns",
            "range": "± 69278.76667985566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2939673.800899621,
            "unit": "ns",
            "range": "± 347068.24502592586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825440.776326069,
            "unit": "ns",
            "range": "± 91710.76406540566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 701606.730641683,
            "unit": "ns",
            "range": "± 97051.1722370304"
          }
        ]
      }
    ]
  }
}