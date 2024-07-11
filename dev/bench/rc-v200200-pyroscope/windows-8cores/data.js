window.BENCHMARK_DATA = {
  "lastUpdate": 1720669624218,
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
          "id": "0aed441cf58de2985591b89fab2711052c49a4bf",
          "message": "add tracing example",
          "timestamp": "2024-07-11T12:35:53+09:00",
          "tree_id": "9bcc60c7c037fb69c211b1c487672d2bbc1a8b2d",
          "url": "https://github.com/planetarium/libplanet/commit/0aed441cf58de2985591b89fab2711052c49a4bf"
        },
        "date": 1720669551959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045084.693877551,
            "unit": "ns",
            "range": "± 95619.61295604624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839245.0980392157,
            "unit": "ns",
            "range": "± 72131.6166842959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1670580.612244898,
            "unit": "ns",
            "range": "± 174883.4561314685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6855284,
            "unit": "ns",
            "range": "± 110199.34845542419"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37225.77319587629,
            "unit": "ns",
            "range": "± 5491.210369583745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4966192.307692308,
            "unit": "ns",
            "range": "± 25417.69270732697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12997500,
            "unit": "ns",
            "range": "± 158873.1839280266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32824669.230769232,
            "unit": "ns",
            "range": "± 186212.4565499284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64681892.307692304,
            "unit": "ns",
            "range": "± 392472.2186803767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129114264.28571428,
            "unit": "ns",
            "range": "± 704871.4641224073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296647.684151786,
            "unit": "ns",
            "range": "± 6059.612058775196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1101694.614955357,
            "unit": "ns",
            "range": "± 2393.8235753640483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750913.3161272322,
            "unit": "ns",
            "range": "± 1500.5834269440863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976121.953125,
            "unit": "ns",
            "range": "± 3771.553087614797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621941.9791666666,
            "unit": "ns",
            "range": "± 1017.9232572596446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572065.3971354166,
            "unit": "ns",
            "range": "± 1846.3103844809434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225220,
            "unit": "ns",
            "range": "± 50192.48842941384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2251628,
            "unit": "ns",
            "range": "± 59050.94213191409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2766515.0943396227,
            "unit": "ns",
            "range": "± 114295.10285664105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2302303.846153846,
            "unit": "ns",
            "range": "± 59997.716495008244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3014942.8571428573,
            "unit": "ns",
            "range": "± 50721.073063838594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182826.7857142857,
            "unit": "ns",
            "range": "± 7856.404245094422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174532.87671232875,
            "unit": "ns",
            "range": "± 8670.592937473586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147808.82352941178,
            "unit": "ns",
            "range": "± 4747.973580321356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2825484.6153846155,
            "unit": "ns",
            "range": "± 33330.237676766475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555033.3333333335,
            "unit": "ns",
            "range": "± 25652.281064449686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13041.052631578947,
            "unit": "ns",
            "range": "± 1752.5358366956657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59634.782608695656,
            "unit": "ns",
            "range": "± 6996.976345122208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46989.01098901099,
            "unit": "ns",
            "range": "± 2643.081137588837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67291.9191919192,
            "unit": "ns",
            "range": "± 14726.767776272585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3017.8947368421054,
            "unit": "ns",
            "range": "± 531.7532117096181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11401.098901098901,
            "unit": "ns",
            "range": "± 1581.033031174696"
          }
        ]
      }
    ]
  }
}