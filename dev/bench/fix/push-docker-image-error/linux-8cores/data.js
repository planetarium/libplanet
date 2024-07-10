window.BENCHMARK_DATA = {
  "lastUpdate": 1720596245817,
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
          "id": "7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a",
          "message": "style: Change dotnet option -p to --project",
          "timestamp": "2024-07-10T16:15:17+09:00",
          "tree_id": "ffcdb296cd2d895cadbc7021388037a0b2a930d1",
          "url": "https://github.com/planetarium/libplanet/commit/7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a"
        },
        "date": 1720596219688,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3769702.5597098214,
            "unit": "ns",
            "range": "± 8659.532243042018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214323.9772600445,
            "unit": "ns",
            "range": "± 1243.4267885822583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779789.6639973958,
            "unit": "ns",
            "range": "± 1359.5772184741188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949724.8565848214,
            "unit": "ns",
            "range": "± 2173.331480566237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631246.5166015625,
            "unit": "ns",
            "range": "± 771.9639470156608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576652.7018880208,
            "unit": "ns",
            "range": "± 409.14335591969746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2446617.4375,
            "unit": "ns",
            "range": "± 45298.18671127098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2623360.7391304346,
            "unit": "ns",
            "range": "± 51035.24763178822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3059108.7,
            "unit": "ns",
            "range": "± 34289.82666122917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2669507.388888889,
            "unit": "ns",
            "range": "± 56201.91757550091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3373679.1333333333,
            "unit": "ns",
            "range": "± 37868.066984252175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038743.2592592592,
            "unit": "ns",
            "range": "± 52351.98998862837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2003546.2881355933,
            "unit": "ns",
            "range": "± 87437.075522531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1733623.6449275361,
            "unit": "ns",
            "range": "± 82683.21608657866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8445051.467741935,
            "unit": "ns",
            "range": "± 256472.81305283072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203088.16981132075,
            "unit": "ns",
            "range": "± 8164.145694003584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196332.28,
            "unit": "ns",
            "range": "± 7767.565951954267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178710.32323232322,
            "unit": "ns",
            "range": "± 11483.554468063683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3091072,
            "unit": "ns",
            "range": "± 21363.230935417985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2812392.1,
            "unit": "ns",
            "range": "± 42166.8010911089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17964.478723404256,
            "unit": "ns",
            "range": "± 2643.756742704631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62694.614583333336,
            "unit": "ns",
            "range": "± 5344.866626015129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51161.25,
            "unit": "ns",
            "range": "± 663.574497427654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67327.58333333333,
            "unit": "ns",
            "range": "± 8841.469564282872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3289.0315789473684,
            "unit": "ns",
            "range": "± 470.336512682541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14154.917525773197,
            "unit": "ns",
            "range": "± 2158.288155914423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10461247.3,
            "unit": "ns",
            "range": "± 98906.35998487227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27386864.666666668,
            "unit": "ns",
            "range": "± 248191.759198311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70840633.6,
            "unit": "ns",
            "range": "± 553836.577427313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137504339.2,
            "unit": "ns",
            "range": "± 600701.0256878685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288089030.8076923,
            "unit": "ns",
            "range": "± 985318.1220831156"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31964.64285714286,
            "unit": "ns",
            "range": "± 472.37967245114913"
          }
        ]
      }
    ]
  }
}