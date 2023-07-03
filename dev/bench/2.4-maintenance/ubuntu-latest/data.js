window.BENCHMARK_DATA = {
  "lastUpdate": 1688387301448,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720e0364ffcdaeac1460d530348447674b3391f3",
          "message": "Merge pull request #3263 from OnedgeLee/release/2.4.0\n\n🚀 Release 2.4.0",
          "timestamp": "2023-07-03T21:07:47+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/planetarium/libplanet/commit/720e0364ffcdaeac1460d530348447674b3391f3"
        },
        "date": 1688387275994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604834.5,
            "unit": "ns",
            "range": "± 85331.87393911807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20434145.8,
            "unit": "ns",
            "range": "± 366231.19730207894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50753724.4,
            "unit": "ns",
            "range": "± 491827.74864519393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103360155.5,
            "unit": "ns",
            "range": "± 212194.62825860528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207953784.07692307,
            "unit": "ns",
            "range": "± 590133.9680554834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46580.89887640449,
            "unit": "ns",
            "range": "± 2779.5362801804968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294840.5319148936,
            "unit": "ns",
            "range": "± 11338.058832114122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265007.26785714284,
            "unit": "ns",
            "range": "± 10685.27895495152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235218.8125,
            "unit": "ns",
            "range": "± 4508.589864081673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4127668.3333333335,
            "unit": "ns",
            "range": "± 35752.205729490444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936574.8666666667,
            "unit": "ns",
            "range": "± 36163.03199572472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20168.42105263158,
            "unit": "ns",
            "range": "± 1351.3006467289008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86281.96721311475,
            "unit": "ns",
            "range": "± 3137.329448045546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71765.1,
            "unit": "ns",
            "range": "± 1659.5313510937833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90225.02083333333,
            "unit": "ns",
            "range": "± 8250.18156224987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5126.373626373626,
            "unit": "ns",
            "range": "± 542.7983388239472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19186.967391304348,
            "unit": "ns",
            "range": "± 1764.8468317631216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404806.112244898,
            "unit": "ns",
            "range": "± 118600.77624629774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700896.117647059,
            "unit": "ns",
            "range": "± 54497.803517529894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1859631.5833333333,
            "unit": "ns",
            "range": "± 106709.11983140421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4959310.907407408,
            "unit": "ns",
            "range": "± 206495.59853002746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6023657.721875,
            "unit": "ns",
            "range": "± 32886.15886920263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1887541.9790364583,
            "unit": "ns",
            "range": "± 7996.395148923393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366666.6983816964,
            "unit": "ns",
            "range": "± 2135.299654838433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568533.10859375,
            "unit": "ns",
            "range": "± 8094.934013897683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820997.6015625,
            "unit": "ns",
            "range": "± 1319.1837927506451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738675.2580729167,
            "unit": "ns",
            "range": "± 1546.7721064786476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215367.2666666666,
            "unit": "ns",
            "range": "± 43876.43944479065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3408877.933333333,
            "unit": "ns",
            "range": "± 50765.00406701264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4418401.866666666,
            "unit": "ns",
            "range": "± 64735.42903328755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3952715.975,
            "unit": "ns",
            "range": "± 140427.90927503808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6183408.2105263155,
            "unit": "ns",
            "range": "± 133463.88397972393"
          }
        ]
      }
    ]
  }
}