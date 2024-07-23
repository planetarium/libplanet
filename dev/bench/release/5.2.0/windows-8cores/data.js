window.BENCHMARK_DATA = {
  "lastUpdate": 1721721045752,
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
          "id": "5fd29a4d7cf9b78d9ee06c66b354b6b621330365",
          "message": "Release 5.2.0",
          "timestamp": "2024-07-23T16:36:39+09:00",
          "tree_id": "4319024302f9589db25f93310ff36acc24e6623a",
          "url": "https://github.com/planetarium/libplanet/commit/5fd29a4d7cf9b78d9ee06c66b354b6b621330365"
        },
        "date": 1721720799152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001279,
            "unit": "ns",
            "range": "± 105720.70436921631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762907.894736842,
            "unit": "ns",
            "range": "± 60455.44095773371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555724.4897959183,
            "unit": "ns",
            "range": "± 144744.1240808157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6697204.166666667,
            "unit": "ns",
            "range": "± 172665.39261812432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30441.935483870966,
            "unit": "ns",
            "range": "± 937.2919123902959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9777573.333333334,
            "unit": "ns",
            "range": "± 118377.98098021599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23891666.666666668,
            "unit": "ns",
            "range": "± 390735.69924779935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57805646.666666664,
            "unit": "ns",
            "range": "± 690106.1055753535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116580553.84615384,
            "unit": "ns",
            "range": "± 480174.5543990307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236052466.66666666,
            "unit": "ns",
            "range": "± 1627643.7999524986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3349831.25,
            "unit": "ns",
            "range": "± 6458.552341011692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070993.0208333333,
            "unit": "ns",
            "range": "± 2707.953377276132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733386.6341145834,
            "unit": "ns",
            "range": "± 1968.251251872435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950811.2890625,
            "unit": "ns",
            "range": "± 3323.5369209249543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601068.6588541666,
            "unit": "ns",
            "range": "± 1390.140093257974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556227.5,
            "unit": "ns",
            "range": "± 1429.3211419698732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2072272.4137931035,
            "unit": "ns",
            "range": "± 42049.4003401418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2189989.285714286,
            "unit": "ns",
            "range": "± 51944.18899011968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2655943.4782608696,
            "unit": "ns",
            "range": "± 98948.24831906136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2231060,
            "unit": "ns",
            "range": "± 57633.771928155686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2886040,
            "unit": "ns",
            "range": "± 28931.984278402237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171812.5,
            "unit": "ns",
            "range": "± 6613.953913026335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162637.7358490566,
            "unit": "ns",
            "range": "± 6794.234728375746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145840,
            "unit": "ns",
            "range": "± 2719.978991515507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2702778.5714285714,
            "unit": "ns",
            "range": "± 18700.850600622773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2471053.3333333335,
            "unit": "ns",
            "range": "± 45024.81643758357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10170.408163265307,
            "unit": "ns",
            "range": "± 1232.398481519781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49997.84946236559,
            "unit": "ns",
            "range": "± 3764.5364197139816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44051.35135135135,
            "unit": "ns",
            "range": "± 1116.4481432007742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48378.49462365591,
            "unit": "ns",
            "range": "± 7231.150149998173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2413.8297872340427,
            "unit": "ns",
            "range": "± 336.8420911525121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9654.639175257733,
            "unit": "ns",
            "range": "± 1059.1880359655909"
          }
        ]
      }
    ]
  }
}