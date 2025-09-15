window.BENCHMARK_DATA = {
  "lastUpdate": 1757931129742,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "c6233b1e4d5650722581ed3c1ceafd03604f343d",
          "message": "Release 5.5.2",
          "timestamp": "2025-09-15T18:55:30+09:00",
          "tree_id": "7a4acedbfbec4265cf50057d07c43ba42d4a84b9",
          "url": "https://github.com/planetarium/libplanet/commit/c6233b1e4d5650722581ed3c1ceafd03604f343d"
        },
        "date": 1757930847858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1023353.0612244898,
            "unit": "ns",
            "range": "± 96921.94564304478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1852054.5454545454,
            "unit": "ns",
            "range": "± 94714.55668905297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1542668.888888889,
            "unit": "ns",
            "range": "± 92618.59436000673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6857821.590909091,
            "unit": "ns",
            "range": "± 375959.56601156044"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36439.17525773196,
            "unit": "ns",
            "range": "± 5644.937937011778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10175980,
            "unit": "ns",
            "range": "± 108824.14516746075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25832792.85714286,
            "unit": "ns",
            "range": "± 148102.19685840487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65583185.71428572,
            "unit": "ns",
            "range": "± 206790.6702892597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131194500,
            "unit": "ns",
            "range": "± 321950.9781126504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262039320,
            "unit": "ns",
            "range": "± 962518.3799358254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3407553.5677083335,
            "unit": "ns",
            "range": "± 5418.033675812403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062595.9765625,
            "unit": "ns",
            "range": "± 1209.2706968066923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781876.81640625,
            "unit": "ns",
            "range": "± 1738.6710545111573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1875724.2513020833,
            "unit": "ns",
            "range": "± 891.867252671096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 599235.9375,
            "unit": "ns",
            "range": "± 289.1407161431803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 608319.5940290178,
            "unit": "ns",
            "range": "± 314.2026547950767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2298882.5,
            "unit": "ns",
            "range": "± 81579.0505017632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2350708,
            "unit": "ns",
            "range": "± 61265.70492534955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775997.9591836734,
            "unit": "ns",
            "range": "± 104688.76987248904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349755.5555555555,
            "unit": "ns",
            "range": "± 84170.58586734754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2966829.411764706,
            "unit": "ns",
            "range": "± 58014.34913779825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109059.77011494253,
            "unit": "ns",
            "range": "± 6144.6603737984615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181016.66666666666,
            "unit": "ns",
            "range": "± 7406.254037639845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 186317.28395061727,
            "unit": "ns",
            "range": "± 9792.328504031315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811078.5714285714,
            "unit": "ns",
            "range": "± 32950.87669130026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2704700,
            "unit": "ns",
            "range": "± 44730.574395085576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17325.77319587629,
            "unit": "ns",
            "range": "± 2312.3436141046864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65480.208333333336,
            "unit": "ns",
            "range": "± 6756.573715811364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72375,
            "unit": "ns",
            "range": "± 8609.97043601724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82383.33333333333,
            "unit": "ns",
            "range": "± 11380.858044302346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5686.458333333333,
            "unit": "ns",
            "range": "± 955.0552248200838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15644.68085106383,
            "unit": "ns",
            "range": "± 1706.8878188331503"
          }
        ]
      }
    ]
  }
}