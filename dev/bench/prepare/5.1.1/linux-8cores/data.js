window.BENCHMARK_DATA = {
  "lastUpdate": 1720673779093,
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
          "id": "cf3de69ec4b049161de30270cdf1e4b69413655d",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T13:46:38+09:00",
          "tree_id": "7bf03099fdc240cac41d733e2dfddd3315502ca9",
          "url": "https://github.com/planetarium/libplanet/commit/cf3de69ec4b049161de30270cdf1e4b69413655d"
        },
        "date": 1720673752288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3655259.836237981,
            "unit": "ns",
            "range": "± 3519.991863814423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199577.756640625,
            "unit": "ns",
            "range": "± 2536.2150622636277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758862.5405970982,
            "unit": "ns",
            "range": "± 744.1538808894488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2000824.5630208333,
            "unit": "ns",
            "range": "± 1815.6476571872834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618767.3420758928,
            "unit": "ns",
            "range": "± 458.12340301312645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586511.1123744419,
            "unit": "ns",
            "range": "± 705.9900537662709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463679.3,
            "unit": "ns",
            "range": "± 43317.27632777877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581786.5384615385,
            "unit": "ns",
            "range": "± 61741.64380852248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3039887.8181818184,
            "unit": "ns",
            "range": "± 71008.53805714483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638639.1875,
            "unit": "ns",
            "range": "± 48270.36003210631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3324051.1666666665,
            "unit": "ns",
            "range": "± 52834.500612311844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015853.421686747,
            "unit": "ns",
            "range": "± 53918.45861658422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1956557.8333333333,
            "unit": "ns",
            "range": "± 70648.24225832555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1744282.6948051949,
            "unit": "ns",
            "range": "± 88951.95395742092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8375960.382352941,
            "unit": "ns",
            "range": "± 262418.2710509976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204685.81818181818,
            "unit": "ns",
            "range": "± 8619.946272692641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196116.156626506,
            "unit": "ns",
            "range": "± 10377.352880991975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170121.82352941178,
            "unit": "ns",
            "range": "± 3438.640578689748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3141446.8571428573,
            "unit": "ns",
            "range": "± 38741.87862211034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2851428.653846154,
            "unit": "ns",
            "range": "± 26502.58631984859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13195.445054945056,
            "unit": "ns",
            "range": "± 831.1405999874491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59929.425287356324,
            "unit": "ns",
            "range": "± 3239.532652312618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52076.57777777778,
            "unit": "ns",
            "range": "± 1973.0269832842316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56650.36734693877,
            "unit": "ns",
            "range": "± 8550.218319257352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2943.0208333333335,
            "unit": "ns",
            "range": "± 329.432461864074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12059.01052631579,
            "unit": "ns",
            "range": "± 1236.0261951945706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10597009.357142856,
            "unit": "ns",
            "range": "± 91522.40081288813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27637189.1,
            "unit": "ns",
            "range": "± 173092.2484774273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69093373.36666666,
            "unit": "ns",
            "range": "± 443696.95366494503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140337722.57142857,
            "unit": "ns",
            "range": "± 537486.468795364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287310315.6,
            "unit": "ns",
            "range": "± 636108.7044985539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32325.071428571428,
            "unit": "ns",
            "range": "± 374.5416612927807"
          }
        ]
      }
    ]
  }
}