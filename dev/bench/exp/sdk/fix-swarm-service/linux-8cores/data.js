window.BENCHMARK_DATA = {
  "lastUpdate": 1724993881772,
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
          "id": "e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765",
          "message": "refactor: Change C to c in BlockChain in BlockChainGrpcServiceV1",
          "timestamp": "2024-08-30T13:42:40+09:00",
          "tree_id": "6f53356f3fc4dd0ec5911b2d8387c704cd4c58c1",
          "url": "https://github.com/planetarium/libplanet/commit/e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765"
        },
        "date": 1724993855438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212404.1794871795,
            "unit": "ns",
            "range": "± 6997.238650360187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201184.61363636365,
            "unit": "ns",
            "range": "± 4153.578380009158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177801.59302325582,
            "unit": "ns",
            "range": "± 6493.043243546836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3162925.5,
            "unit": "ns",
            "range": "± 46378.21406610585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2905991.6666666665,
            "unit": "ns",
            "range": "± 43549.07486579556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13725.45652173913,
            "unit": "ns",
            "range": "± 881.6414562788702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64679.4175257732,
            "unit": "ns",
            "range": "± 5913.932961782751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51256.566666666666,
            "unit": "ns",
            "range": "± 534.1087993319428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58523.38775510204,
            "unit": "ns",
            "range": "± 10951.128183544643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2823.25,
            "unit": "ns",
            "range": "± 349.65935302504744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15548.717171717171,
            "unit": "ns",
            "range": "± 2694.8657837935657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2519511.75,
            "unit": "ns",
            "range": "± 43953.657841716275"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2593183.6333333333,
            "unit": "ns",
            "range": "± 47186.024501611355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3113575.7916666665,
            "unit": "ns",
            "range": "± 80928.87956207043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2698937.5,
            "unit": "ns",
            "range": "± 39047.546062460824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3282285.0714285714,
            "unit": "ns",
            "range": "± 38770.95000813066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10594779.933333334,
            "unit": "ns",
            "range": "± 93697.63537911772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27010972.733333334,
            "unit": "ns",
            "range": "± 149253.06842572865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69734656.73333333,
            "unit": "ns",
            "range": "± 496642.9332303422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140200092.13333333,
            "unit": "ns",
            "range": "± 740792.3191694211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 290186066,
            "unit": "ns",
            "range": "± 823124.8003601884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029977.7752808989,
            "unit": "ns",
            "range": "± 56511.38671657903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1969664.2631578948,
            "unit": "ns",
            "range": "± 66786.1252314347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714846.5833333333,
            "unit": "ns",
            "range": "± 70304.87658455287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8561542.105263159,
            "unit": "ns",
            "range": "± 290056.22778544814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3710982.6853966345,
            "unit": "ns",
            "range": "± 7333.267065177828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194510.6360212055,
            "unit": "ns",
            "range": "± 1785.4501878792878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755004.9162248884,
            "unit": "ns",
            "range": "± 1071.2018658785712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912717.2396763393,
            "unit": "ns",
            "range": "± 2356.3964113214083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627815.1284505208,
            "unit": "ns",
            "range": "± 1724.8832993959834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579542.741796875,
            "unit": "ns",
            "range": "± 545.6714271573502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32071.633333333335,
            "unit": "ns",
            "range": "± 556.5865183248264"
          }
        ]
      }
    ]
  }
}