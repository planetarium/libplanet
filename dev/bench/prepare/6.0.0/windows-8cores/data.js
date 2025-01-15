window.BENCHMARK_DATA = {
  "lastUpdate": 1736910775220,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "565752544a0e550eb86f2fedf3bdc2472c6d603e",
          "message": "prepare: 6.0.0",
          "timestamp": "2025-01-15T12:00:44+09:00",
          "tree_id": "7cfc2196c993ee55ef5539c878830953893d1cef",
          "url": "https://github.com/planetarium/libplanet/commit/565752544a0e550eb86f2fedf3bdc2472c6d603e"
        },
        "date": 1736910606277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1037843.4343434343,
            "unit": "ns",
            "range": "± 104120.19169544961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781586,
            "unit": "ns",
            "range": "± 71328.255299577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1498474.0740740742,
            "unit": "ns",
            "range": "± 78216.96391732706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6523838.095238095,
            "unit": "ns",
            "range": "± 233852.6156159681"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28795.652173913044,
            "unit": "ns",
            "range": "± 679.891877011983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9749750,
            "unit": "ns",
            "range": "± 67201.75993574527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24528557.14285714,
            "unit": "ns",
            "range": "± 249895.72198845635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61090633.333333336,
            "unit": "ns",
            "range": "± 1004166.22035161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120335371.42857143,
            "unit": "ns",
            "range": "± 892186.2822291105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247916033.33333334,
            "unit": "ns",
            "range": "± 3620061.996443602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3367446.640625,
            "unit": "ns",
            "range": "± 13779.953091814632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057745.6129807692,
            "unit": "ns",
            "range": "± 1798.9445357810002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725698.7369791666,
            "unit": "ns",
            "range": "± 1735.9854776891725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943982.728794643,
            "unit": "ns",
            "range": "± 4386.453946817688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626048.4049479166,
            "unit": "ns",
            "range": "± 718.7761135372731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571410.9505208334,
            "unit": "ns",
            "range": "± 1778.3128240749916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2243857.1428571427,
            "unit": "ns",
            "range": "± 72273.97337140636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2381593.9393939395,
            "unit": "ns",
            "range": "± 74016.95303861955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775714.285714286,
            "unit": "ns",
            "range": "± 65924.23140025437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2385218.604651163,
            "unit": "ns",
            "range": "± 87416.32258994598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3045943.75,
            "unit": "ns",
            "range": "± 59627.756050908596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97997.82608695653,
            "unit": "ns",
            "range": "± 11258.256830900633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170331.64556962025,
            "unit": "ns",
            "range": "± 8790.635231324552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152305.55555555556,
            "unit": "ns",
            "range": "± 5028.657556982463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2606753.846153846,
            "unit": "ns",
            "range": "± 21756.172127491212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2603813.3333333335,
            "unit": "ns",
            "range": "± 41861.31638546272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11000,
            "unit": "ns",
            "range": "± 1119.5237082497777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53749.48453608248,
            "unit": "ns",
            "range": "± 4338.949654758535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44708.333333333336,
            "unit": "ns",
            "range": "± 1753.3958945773106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51764.77272727273,
            "unit": "ns",
            "range": "± 7706.886602070817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2652.577319587629,
            "unit": "ns",
            "range": "± 391.07032176269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10650,
            "unit": "ns",
            "range": "± 1550.7885268291918"
          }
        ]
      }
    ]
  }
}