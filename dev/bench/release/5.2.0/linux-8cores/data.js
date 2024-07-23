window.BENCHMARK_DATA = {
  "lastUpdate": 1721720765104,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "5fd29a4d7cf9b78d9ee06c66b354b6b621330365",
          "message": "Release 5.2.0",
          "timestamp": "2024-07-23T16:36:39+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/5fd29a4d7cf9b78d9ee06c66b354b6b621330365"
        },
        "date": 1721720739487,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198337.04545454544,
            "unit": "ns",
            "range": "± 6763.702828434601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195956.7033898305,
            "unit": "ns",
            "range": "± 8537.059860477002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167435.83333333334,
            "unit": "ns",
            "range": "± 2899.033057187632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3009556.8666666667,
            "unit": "ns",
            "range": "± 32842.59316772889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2789586.533333333,
            "unit": "ns",
            "range": "± 35163.99639620589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12701.35,
            "unit": "ns",
            "range": "± 676.918578578928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59903.885714285716,
            "unit": "ns",
            "range": "± 2920.567780528733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50051.333333333336,
            "unit": "ns",
            "range": "± 439.8969576313677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52045.91237113402,
            "unit": "ns",
            "range": "± 7551.281971394793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2646.3645833333335,
            "unit": "ns",
            "range": "± 270.56629189794415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11817.144444444444,
            "unit": "ns",
            "range": "± 712.9188547851114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998535.350877193,
            "unit": "ns",
            "range": "± 36535.56760712343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913921.037037037,
            "unit": "ns",
            "range": "± 53263.82499803832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1667501.8333333333,
            "unit": "ns",
            "range": "± 89079.37912866139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8112216.090909091,
            "unit": "ns",
            "range": "± 149746.62992818397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3765670.4653645833,
            "unit": "ns",
            "range": "± 24133.77989843038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199037.9346354166,
            "unit": "ns",
            "range": "± 2258.3175225751165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757800.7862723215,
            "unit": "ns",
            "range": "± 1354.8612894661762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1979527.5861979167,
            "unit": "ns",
            "range": "± 5439.033102426085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629110.8453776041,
            "unit": "ns",
            "range": "± 960.1590715148161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573674.4737079327,
            "unit": "ns",
            "range": "± 685.5951090926286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423176.3333333335,
            "unit": "ns",
            "range": "± 50558.158895008644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2552785.846153846,
            "unit": "ns",
            "range": "± 26169.56741409811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3082135.05,
            "unit": "ns",
            "range": "± 67898.51234435344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2601411.1333333333,
            "unit": "ns",
            "range": "± 36377.38370955752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3248680.033333333,
            "unit": "ns",
            "range": "± 38736.51814662502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31969.785714285714,
            "unit": "ns",
            "range": "± 369.4589450641466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10232998.033333333,
            "unit": "ns",
            "range": "± 121428.76811993033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27487084,
            "unit": "ns",
            "range": "± 188844.08331780706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68586477.66666667,
            "unit": "ns",
            "range": "± 250930.08922169844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138434886.85714287,
            "unit": "ns",
            "range": "± 924117.0471451578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284444920.3333333,
            "unit": "ns",
            "range": "± 894907.1084742871"
          }
        ]
      }
    ]
  }
}