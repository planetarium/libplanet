window.BENCHMARK_DATA = {
  "lastUpdate": 1722392264736,
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
          "id": "40b3cc469316c1ab34243c1e7e35eabaa22c6e10",
          "message": "Prepare 5.2.2",
          "timestamp": "2024-07-31T11:08:41+09:00",
          "tree_id": "9dc41c3f7dd933b72c67220cb777d849f7964635",
          "url": "https://github.com/planetarium/libplanet/commit/40b3cc469316c1ab34243c1e7e35eabaa22c6e10"
        },
        "date": 1722392238309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1032369.9691358025,
            "unit": "ns",
            "range": "± 54010.79364374459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1958982.0192307692,
            "unit": "ns",
            "range": "± 80780.89112070085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1700701.3012048192,
            "unit": "ns",
            "range": "± 89994.60604022331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8356234.785714285,
            "unit": "ns",
            "range": "± 231310.1486718255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205092.5,
            "unit": "ns",
            "range": "± 8329.695228744782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197181.30392156861,
            "unit": "ns",
            "range": "± 8010.764874890807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177023.73333333334,
            "unit": "ns",
            "range": "± 3285.38491910258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026213.2666666666,
            "unit": "ns",
            "range": "± 19416.253781917087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799683.8333333335,
            "unit": "ns",
            "range": "± 44172.54564233093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13087,
            "unit": "ns",
            "range": "± 904.2179773360151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59249.0421686747,
            "unit": "ns",
            "range": "± 3163.316009834959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50156.61538461538,
            "unit": "ns",
            "range": "± 416.64924066124223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49559.333333333336,
            "unit": "ns",
            "range": "± 4460.245613835966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2641.214285714286,
            "unit": "ns",
            "range": "± 334.6149425740196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12048.857142857143,
            "unit": "ns",
            "range": "± 799.4479291324408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32074.714285714286,
            "unit": "ns",
            "range": "± 270.04855078340967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10819346.076923076,
            "unit": "ns",
            "range": "± 55619.67872294472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26937262.35714286,
            "unit": "ns",
            "range": "± 88311.53629980552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68836263.8,
            "unit": "ns",
            "range": "± 313448.71889905236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138736115.2,
            "unit": "ns",
            "range": "± 1045269.2047285645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283894765.4,
            "unit": "ns",
            "range": "± 1331112.9357979146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3757600.891826923,
            "unit": "ns",
            "range": "± 5397.222703812509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203959.037109375,
            "unit": "ns",
            "range": "± 1721.8611205588666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760886.9922626202,
            "unit": "ns",
            "range": "± 1086.9351456039572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956507.0065104167,
            "unit": "ns",
            "range": "± 1883.402356567299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645347.84453125,
            "unit": "ns",
            "range": "± 668.3084478055235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572381.3894391741,
            "unit": "ns",
            "range": "± 243.31668872154304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2449572.533333333,
            "unit": "ns",
            "range": "± 33892.1262555746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554484.6333333333,
            "unit": "ns",
            "range": "± 37655.78014607484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3081793.0625,
            "unit": "ns",
            "range": "± 59293.10654420545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586146.6923076925,
            "unit": "ns",
            "range": "± 79912.61142949705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3321300.015151515,
            "unit": "ns",
            "range": "± 105059.95080849114"
          }
        ]
      }
    ]
  }
}