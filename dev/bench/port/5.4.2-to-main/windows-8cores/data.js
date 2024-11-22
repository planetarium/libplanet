window.BENCHMARK_DATA = {
  "lastUpdate": 1732240526504,
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
          "id": "34bcf8c202e85461878a7c18bcc81344f76f0717",
          "message": "Merge branch '5.3-maintenance' into port/5.4.2-to-main",
          "timestamp": "2024-11-22T10:44:54+09:00",
          "tree_id": "b35a52e65dc24a7774ef4ccd7d8d68f3323031b8",
          "url": "https://github.com/planetarium/libplanet/commit/34bcf8c202e85461878a7c18bcc81344f76f0717"
        },
        "date": 1732240452820,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001338.775510204,
            "unit": "ns",
            "range": "± 127639.97178973824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732997.435897436,
            "unit": "ns",
            "range": "± 60566.099112237825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1493415.7303370787,
            "unit": "ns",
            "range": "± 82272.03890817508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6613391.666666667,
            "unit": "ns",
            "range": "± 201415.79364233438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33920.20202020202,
            "unit": "ns",
            "range": "± 4455.356322312658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9548800,
            "unit": "ns",
            "range": "± 81061.27786576503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23253761.53846154,
            "unit": "ns",
            "range": "± 148622.4777664398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60767526.666666664,
            "unit": "ns",
            "range": "± 635183.1360961596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118020110,
            "unit": "ns",
            "range": "± 1379496.4955167002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237825420,
            "unit": "ns",
            "range": "± 1446927.7833692026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316276.9010416665,
            "unit": "ns",
            "range": "± 6883.817337280603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059396.40625,
            "unit": "ns",
            "range": "± 3736.5479532460754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734966.0807291666,
            "unit": "ns",
            "range": "± 2481.638007056004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945012.3465401786,
            "unit": "ns",
            "range": "± 3043.2526816095005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610974.4075520834,
            "unit": "ns",
            "range": "± 1929.0140893461123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557613.80859375,
            "unit": "ns",
            "range": "± 1661.1191468840077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141335.294117647,
            "unit": "ns",
            "range": "± 68806.77328512706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288978.5714285714,
            "unit": "ns",
            "range": "± 24561.8897597768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2739971.4285714286,
            "unit": "ns",
            "range": "± 44326.36701994439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2380043.9024390243,
            "unit": "ns",
            "range": "± 85099.59767466733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2950003.3333333335,
            "unit": "ns",
            "range": "± 32596.776060276414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90681.92771084337,
            "unit": "ns",
            "range": "± 4524.732698702825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163713.7931034483,
            "unit": "ns",
            "range": "± 8806.316079208638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146914.8148148148,
            "unit": "ns",
            "range": "± 4092.366599837359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2556358.3333333335,
            "unit": "ns",
            "range": "± 19509.879004952305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2502453.3333333335,
            "unit": "ns",
            "range": "± 44190.96330807055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10797.894736842105,
            "unit": "ns",
            "range": "± 1331.6106826240123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51666.49484536082,
            "unit": "ns",
            "range": "± 5221.044763190982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43858,
            "unit": "ns",
            "range": "± 1568.32030256213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50593.617021276594,
            "unit": "ns",
            "range": "± 9089.493030454167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2696.938775510204,
            "unit": "ns",
            "range": "± 647.6689496786662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9863.333333333334,
            "unit": "ns",
            "range": "± 798.2354134469974"
          }
        ]
      }
    ]
  }
}