window.BENCHMARK_DATA = {
  "lastUpdate": 1729838123982,
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
          "id": "a50194312c8ae642100951cc0400ea684485dfb4",
          "message": "refactor: Refactor GasTracer",
          "timestamp": "2024-10-25T15:01:52+09:00",
          "tree_id": "c0767e988107193ca2cff5208a057ccbec773e0f",
          "url": "https://github.com/planetarium/libplanet/commit/a50194312c8ae642100951cc0400ea684485dfb4"
        },
        "date": 1729838097030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10874765.733333332,
            "unit": "ns",
            "range": "± 76341.26872936763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28091479.14285714,
            "unit": "ns",
            "range": "± 86818.91730834593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71526650.16666667,
            "unit": "ns",
            "range": "± 266576.7929669119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143565384.64285713,
            "unit": "ns",
            "range": "± 513453.53175884555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289434500.6666667,
            "unit": "ns",
            "range": "± 1528434.0356313651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109596.1551724138,
            "unit": "ns",
            "range": "± 4808.064061486571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193878.92156862744,
            "unit": "ns",
            "range": "± 6485.432151655392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172705.0625,
            "unit": "ns",
            "range": "± 3375.310108592493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2893889.4285714286,
            "unit": "ns",
            "range": "± 26189.480606105626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869493.6666666665,
            "unit": "ns",
            "range": "± 51651.789496958336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15281.714285714286,
            "unit": "ns",
            "range": "± 2216.948157720567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60393.529411764706,
            "unit": "ns",
            "range": "± 3248.3092803291174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49566.88461538462,
            "unit": "ns",
            "range": "± 600.2508556791817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50738.845360824744,
            "unit": "ns",
            "range": "± 7168.873975010833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2454.255319148936,
            "unit": "ns",
            "range": "± 291.48764470284704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12001.9875,
            "unit": "ns",
            "range": "± 641.8659111863145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745699.224051339,
            "unit": "ns",
            "range": "± 4316.227023912873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223849.948828125,
            "unit": "ns",
            "range": "± 1617.8487153697936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771226.4954427084,
            "unit": "ns",
            "range": "± 1003.2580660024687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2019904.0653645834,
            "unit": "ns",
            "range": "± 1950.6711811264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631828.4543108259,
            "unit": "ns",
            "range": "± 996.3089173410385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586072.7016276042,
            "unit": "ns",
            "range": "± 479.5564188000344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405811.076923077,
            "unit": "ns",
            "range": "± 27528.99264248978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2552999.111111111,
            "unit": "ns",
            "range": "± 52353.692919791916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2987938.3571428573,
            "unit": "ns",
            "range": "± 32980.27002643374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2658083.066666667,
            "unit": "ns",
            "range": "± 34400.93291398332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3218136.6333333333,
            "unit": "ns",
            "range": "± 58086.371616347154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995717.8101265823,
            "unit": "ns",
            "range": "± 51454.41871161957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1930281.4782608696,
            "unit": "ns",
            "range": "± 48260.791927222745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584211.1375,
            "unit": "ns",
            "range": "± 82678.73129698826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7722055.136363637,
            "unit": "ns",
            "range": "± 244413.20886523533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30550.85,
            "unit": "ns",
            "range": "± 684.7550676202251"
          }
        ]
      }
    ]
  }
}