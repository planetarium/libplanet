window.BENCHMARK_DATA = {
  "lastUpdate": 1722386611036,
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
          "id": "5a1ee9e64a733b49b91522d397e23a07fbab8a75",
          "message": "Release 5.2.1",
          "timestamp": "2024-07-31T09:27:46+09:00",
          "tree_id": "26877b6a16528547babb7bfadd8a08aca9060b6f",
          "url": "https://github.com/planetarium/libplanet/commit/5a1ee9e64a733b49b91522d397e23a07fbab8a75"
        },
        "date": 1722386340293,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029488.6597938144,
            "unit": "ns",
            "range": "± 100934.14816549189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1868227.9411764706,
            "unit": "ns",
            "range": "± 86460.32969300634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648463.888888889,
            "unit": "ns",
            "range": "± 81434.36881378866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6943120,
            "unit": "ns",
            "range": "± 121004.9833684547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32291.428571428572,
            "unit": "ns",
            "range": "± 1575.7899198927535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9616486.666666666,
            "unit": "ns",
            "range": "± 107461.85945764775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24063326.666666668,
            "unit": "ns",
            "range": "± 148885.19290603304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60437215.384615384,
            "unit": "ns",
            "range": "± 219016.42954412437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121810825,
            "unit": "ns",
            "range": "± 2307355.7536712885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242356416.66666666,
            "unit": "ns",
            "range": "± 1074685.9811569322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350152.03125,
            "unit": "ns",
            "range": "± 15052.128660697528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1099771.9168526786,
            "unit": "ns",
            "range": "± 1921.379451536037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734375.33203125,
            "unit": "ns",
            "range": "± 2993.481608669119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940660.6770833333,
            "unit": "ns",
            "range": "± 3696.4017026638603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625551.1002604166,
            "unit": "ns",
            "range": "± 1377.368748156226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 551556.2369791666,
            "unit": "ns",
            "range": "± 1546.7990106263921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2192075,
            "unit": "ns",
            "range": "± 66762.20680942561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280725,
            "unit": "ns",
            "range": "± 76096.73683636413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2743720.8333333335,
            "unit": "ns",
            "range": "± 67994.55847260174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2292050,
            "unit": "ns",
            "range": "± 73511.33596358806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3087620,
            "unit": "ns",
            "range": "± 51604.30768287247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176317.02127659574,
            "unit": "ns",
            "range": "± 12700.035037610396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172053.52112676058,
            "unit": "ns",
            "range": "± 8224.820119368926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150008.57142857142,
            "unit": "ns",
            "range": "± 4302.555425939021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838313.3333333335,
            "unit": "ns",
            "range": "± 30808.71552630769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2549042.8571428573,
            "unit": "ns",
            "range": "± 44840.99625404129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12961.95652173913,
            "unit": "ns",
            "range": "± 1485.6709285635823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59572.63157894737,
            "unit": "ns",
            "range": "± 4997.817440776782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48773.80952380953,
            "unit": "ns",
            "range": "± 2622.980877965614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61278.02197802198,
            "unit": "ns",
            "range": "± 7080.502213791872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3197.9166666666665,
            "unit": "ns",
            "range": "± 455.60351337924163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11855.056179775282,
            "unit": "ns",
            "range": "± 1280.625844509687"
          }
        ]
      }
    ]
  }
}