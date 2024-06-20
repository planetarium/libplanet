window.BENCHMARK_DATA = {
  "lastUpdate": 1718868051950,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "69f068f3312857b817e758a94602e64c327f688b",
          "message": "reduce hash node cache size",
          "timestamp": "2024-06-20T16:02:24+09:00",
          "tree_id": "196befe55dbba86c6b00feadc678bd971d64ce7f",
          "url": "https://github.com/planetarium/libplanet/commit/69f068f3312857b817e758a94602e64c327f688b"
        },
        "date": 1718867769637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 964040.404040404,
            "unit": "ns",
            "range": "± 103672.03676979801"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1716631.0344827587,
            "unit": "ns",
            "range": "± 64927.14191157507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521544,
            "unit": "ns",
            "range": "± 125144.74715869676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6580351.612903226,
            "unit": "ns",
            "range": "± 167784.68716575965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34067.05882352941,
            "unit": "ns",
            "range": "± 2408.2886749176673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4994271.428571428,
            "unit": "ns",
            "range": "± 21404.436224995276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13157753.333333334,
            "unit": "ns",
            "range": "± 106095.97990678513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33035000,
            "unit": "ns",
            "range": "± 215203.1383814622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64334965.384615384,
            "unit": "ns",
            "range": "± 244992.114996088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132927946.66666667,
            "unit": "ns",
            "range": "± 1433373.8450974764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3381996.9866071427,
            "unit": "ns",
            "range": "± 4526.039733439934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070174.9869791667,
            "unit": "ns",
            "range": "± 4021.2883147571893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733266.4322916666,
            "unit": "ns",
            "range": "± 1394.7004731811646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972668.2091346155,
            "unit": "ns",
            "range": "± 4493.649344736737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626761.2955729166,
            "unit": "ns",
            "range": "± 888.5240105739355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571224.5535714285,
            "unit": "ns",
            "range": "± 1107.9687856706266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2174875.6756756757,
            "unit": "ns",
            "range": "± 46807.84837684455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310680.85106383,
            "unit": "ns",
            "range": "± 85649.55300347297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2823483.3333333335,
            "unit": "ns",
            "range": "± 81486.25474669748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2758715.789473684,
            "unit": "ns",
            "range": "± 101156.37011100729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7672838.70967742,
            "unit": "ns",
            "range": "± 222563.48559069517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175293.42105263157,
            "unit": "ns",
            "range": "± 8839.160375304371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166224.1379310345,
            "unit": "ns",
            "range": "± 9064.035313633785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142572.72727272726,
            "unit": "ns",
            "range": "± 4174.196983198739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766540,
            "unit": "ns",
            "range": "± 46740.144874156555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2407833.3333333335,
            "unit": "ns",
            "range": "± 32723.81541382507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9875.268817204302,
            "unit": "ns",
            "range": "± 1057.8542590894012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57509.375,
            "unit": "ns",
            "range": "± 5673.337050579111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42707.142857142855,
            "unit": "ns",
            "range": "± 753.927445717818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52613.68421052631,
            "unit": "ns",
            "range": "± 10085.850743411042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2280.2083333333335,
            "unit": "ns",
            "range": "± 439.1666250540943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9641.111111111111,
            "unit": "ns",
            "range": "± 980.9299009927635"
          }
        ]
      }
    ]
  }
}