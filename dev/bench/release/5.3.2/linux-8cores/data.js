window.BENCHMARK_DATA = {
  "lastUpdate": 1732170912726,
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
          "id": "dc8b4db138fa7492ff258154907fcb7c39adecab",
          "message": "Release 5.3.2",
          "timestamp": "2024-11-21T15:24:46+09:00",
          "tree_id": "ca52bd1bf724252aa2f667f5618ddb0eea8c1a8b",
          "url": "https://github.com/planetarium/libplanet/commit/dc8b4db138fa7492ff258154907fcb7c39adecab"
        },
        "date": 1732170885712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10349962.133333333,
            "unit": "ns",
            "range": "± 73236.58744865035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26721303.733333334,
            "unit": "ns",
            "range": "± 194260.7510631988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67206335,
            "unit": "ns",
            "range": "± 293654.888789283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139249892.07142857,
            "unit": "ns",
            "range": "± 763483.717892249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287357079.93333334,
            "unit": "ns",
            "range": "± 1520629.7579096004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200456.60655737706,
            "unit": "ns",
            "range": "± 8997.17793955173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190098.15789473685,
            "unit": "ns",
            "range": "± 6508.364935723688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165550.125,
            "unit": "ns",
            "range": "± 3238.630489883031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074636.1666666665,
            "unit": "ns",
            "range": "± 43280.3971969275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2845245.214285714,
            "unit": "ns",
            "range": "± 28717.633313747447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12550.559139784946,
            "unit": "ns",
            "range": "± 944.1464222106468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69647.30612244898,
            "unit": "ns",
            "range": "± 9821.539410915599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50225.41176470588,
            "unit": "ns",
            "range": "± 941.9493788696616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65344.989795918365,
            "unit": "ns",
            "range": "± 8155.378305705576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2719.816326530612,
            "unit": "ns",
            "range": "± 464.3075177841757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12010.838709677419,
            "unit": "ns",
            "range": "± 1171.856445154649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746824.2371651786,
            "unit": "ns",
            "range": "± 5997.917568875543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221834.5489676339,
            "unit": "ns",
            "range": "± 1429.4620343786348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755635.2253255208,
            "unit": "ns",
            "range": "± 1007.912420610406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960719.1291666667,
            "unit": "ns",
            "range": "± 2254.8676425926965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623444.4729166667,
            "unit": "ns",
            "range": "± 334.83740705558506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556870.4010184152,
            "unit": "ns",
            "range": "± 273.48767641998404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2387399.933333333,
            "unit": "ns",
            "range": "± 43080.29776635829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2508603.6578947366,
            "unit": "ns",
            "range": "± 54045.29276887751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3008867.846153846,
            "unit": "ns",
            "range": "± 35816.87877674006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2523957.0263157897,
            "unit": "ns",
            "range": "± 54533.4040060345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3193600.6666666665,
            "unit": "ns",
            "range": "± 83065.23453981121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 983633.9935064935,
            "unit": "ns",
            "range": "± 47419.08022416587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1933897.4193548388,
            "unit": "ns",
            "range": "± 58916.12809227153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584490.012658228,
            "unit": "ns",
            "range": "± 81912.91590486997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7738299.652173913,
            "unit": "ns",
            "range": "± 169248.72094228893"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30187.5,
            "unit": "ns",
            "range": "± 1186.5564917942922"
          }
        ]
      }
    ]
  }
}