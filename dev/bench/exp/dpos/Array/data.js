window.BENCHMARK_DATA = {
  "lastUpdate": 1711016201504,
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
          "id": "3f15fa48f9f57536b050c7443c2247627f30ee76",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-21T19:07:13+09:00",
          "tree_id": "9951d77e8b5a62bf4d33a34cdbb2c476c8268a10",
          "url": "https://github.com/planetarium/libplanet/commit/3f15fa48f9f57536b050c7443c2247627f30ee76"
        },
        "date": 1711016168920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5726574.071428572,
            "unit": "ns",
            "range": "± 55143.46673829623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14249698.166666666,
            "unit": "ns",
            "range": "± 71069.70084851187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36216939.2,
            "unit": "ns",
            "range": "± 198126.6220801377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73976922.78571428,
            "unit": "ns",
            "range": "± 117086.57525568162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145561102.4,
            "unit": "ns",
            "range": "± 453039.28056276595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 18041.521276595744,
            "unit": "ns",
            "range": "± 1819.5769550204145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109432.76470588235,
            "unit": "ns",
            "range": "± 4448.958285208955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104345.390625,
            "unit": "ns",
            "range": "± 3651.288859711536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91664.4857142857,
            "unit": "ns",
            "range": "± 2933.4276414684396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3168707.21875,
            "unit": "ns",
            "range": "± 96057.03357489586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2796328.2592592593,
            "unit": "ns",
            "range": "± 116112.69214296184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5167.65625,
            "unit": "ns",
            "range": "± 925.0048059974722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26764.43181818182,
            "unit": "ns",
            "range": "± 1657.0275686040643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21776.092307692306,
            "unit": "ns",
            "range": "± 1016.307727804996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 27852.691011235955,
            "unit": "ns",
            "range": "± 4202.675762579458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1113.4468085106382,
            "unit": "ns",
            "range": "± 257.9703082448471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4600,
            "unit": "ns",
            "range": "± 526.5325466932436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669583.6477272727,
            "unit": "ns",
            "range": "± 46200.15221401998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1254319.2121212122,
            "unit": "ns",
            "range": "± 39721.59996994517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1040930.7032967033,
            "unit": "ns",
            "range": "± 60709.39351689132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8544433.77,
            "unit": "ns",
            "range": "± 1943131.0376900483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2244689.85,
            "unit": "ns",
            "range": "± 48941.3608830157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2301246.793103448,
            "unit": "ns",
            "range": "± 66961.17678891004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2662586.3076923075,
            "unit": "ns",
            "range": "± 25311.76843678521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3026493.8554216865,
            "unit": "ns",
            "range": "± 161166.89062781283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10069750.520833334,
            "unit": "ns",
            "range": "± 919123.1287881886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3041559.2061197916,
            "unit": "ns",
            "range": "± 53130.99828882767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924187.1252604167,
            "unit": "ns",
            "range": "± 6130.004471382795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615402.5962890625,
            "unit": "ns",
            "range": "± 6701.317405300301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630675.5322916666,
            "unit": "ns",
            "range": "± 15925.902852912062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 465957.8653094952,
            "unit": "ns",
            "range": "± 430.19107457502713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 426354.4677734375,
            "unit": "ns",
            "range": "± 904.8577289367535"
          }
        ]
      }
    ]
  }
}