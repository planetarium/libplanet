window.BENCHMARK_DATA = {
  "lastUpdate": 1721034105398,
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
          "id": "2aa539ec15069490d113a2698b55e2015ca1f9e6",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T17:48:21+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/2aa539ec15069490d113a2698b55e2015ca1f9e6"
        },
        "date": 1721033915873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 926844.4444444445,
            "unit": "ns",
            "range": "± 41306.79385570845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1663148.4848484849,
            "unit": "ns",
            "range": "± 49637.76360552091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489754.054054054,
            "unit": "ns",
            "range": "± 65615.18824590069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6904700,
            "unit": "ns",
            "range": "± 264090.77311493567"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30414.285714285714,
            "unit": "ns",
            "range": "± 804.4847836943637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9462821.42857143,
            "unit": "ns",
            "range": "± 81382.20537469079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23255838.46153846,
            "unit": "ns",
            "range": "± 54657.80728711954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57424638.461538464,
            "unit": "ns",
            "range": "± 210387.15715897654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113003000,
            "unit": "ns",
            "range": "± 503587.0377753826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235803073.33333334,
            "unit": "ns",
            "range": "± 986766.1964117702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3335250.362723214,
            "unit": "ns",
            "range": "± 3931.5045389325996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064654.3247767857,
            "unit": "ns",
            "range": "± 1680.561945446759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733503.4480168269,
            "unit": "ns",
            "range": "± 1226.2995563261716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908065.806361607,
            "unit": "ns",
            "range": "± 3561.7009902374907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622946.19140625,
            "unit": "ns",
            "range": "± 1593.980164563966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555413.8541666666,
            "unit": "ns",
            "range": "± 962.9381699593948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2142145.4545454546,
            "unit": "ns",
            "range": "± 58941.32724004595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2204754.5454545454,
            "unit": "ns",
            "range": "± 76510.93083342985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2712046.6666666665,
            "unit": "ns",
            "range": "± 45773.149750647906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2264242.8571428573,
            "unit": "ns",
            "range": "± 29644.81312228068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2889464.285714286,
            "unit": "ns",
            "range": "± 35231.445900215054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168807.35294117648,
            "unit": "ns",
            "range": "± 7565.126512964301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160214.54545454544,
            "unit": "ns",
            "range": "± 6573.781204649218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141286.36363636365,
            "unit": "ns",
            "range": "± 2909.96570991832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2695926.6666666665,
            "unit": "ns",
            "range": "± 29524.359595490117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2440238.4615384615,
            "unit": "ns",
            "range": "± 24926.610227543926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9185.393258426966,
            "unit": "ns",
            "range": "± 770.2642052329354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48617.857142857145,
            "unit": "ns",
            "range": "± 2445.2639601416536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43250,
            "unit": "ns",
            "range": "± 853.2291603080616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45204.166666666664,
            "unit": "ns",
            "range": "± 6944.106424522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2140.625,
            "unit": "ns",
            "range": "± 258.9769853623453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8964.835164835165,
            "unit": "ns",
            "range": "± 708.7349647824991"
          }
        ]
      }
    ]
  }
}