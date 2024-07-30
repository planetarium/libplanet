window.BENCHMARK_DATA = {
  "lastUpdate": 1722325138428,
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
          "id": "448e191e2227d757fc30442fccab357deaf9baed",
          "message": "use cache",
          "timestamp": "2024-07-30T16:30:19+09:00",
          "tree_id": "e9d22d18ab790b84ed12aa60ea24693b08147288",
          "url": "https://github.com/planetarium/libplanet/commit/448e191e2227d757fc30442fccab357deaf9baed"
        },
        "date": 1722325125446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10719280.833333334,
            "unit": "ns",
            "range": "± 48562.3564293342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26790675.214285713,
            "unit": "ns",
            "range": "± 223884.72483991145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67286353.78571428,
            "unit": "ns",
            "range": "± 101573.87502258834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136139371.91666666,
            "unit": "ns",
            "range": "± 275418.2902695324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273641235.8333333,
            "unit": "ns",
            "range": "± 387650.2933968927"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14114.972222222223,
            "unit": "ns",
            "range": "± 472.8136743315708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110252.59756097561,
            "unit": "ns",
            "range": "± 3939.7998921574563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106014.47619047618,
            "unit": "ns",
            "range": "± 3839.2488927386426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91025.79166666667,
            "unit": "ns",
            "range": "± 2325.7776068337394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3024243.8227848103,
            "unit": "ns",
            "range": "± 156046.09162398797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2690954.03,
            "unit": "ns",
            "range": "± 185107.88992464004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5003.377777777778,
            "unit": "ns",
            "range": "± 404.3933333277764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28306.85714285714,
            "unit": "ns",
            "range": "± 2712.422212182841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 21942.063636363637,
            "unit": "ns",
            "range": "± 927.1249818587202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29533.83908045977,
            "unit": "ns",
            "range": "± 4148.52147064571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1176.8,
            "unit": "ns",
            "range": "± 187.70561460118606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4723.022988505747,
            "unit": "ns",
            "range": "± 439.221297642308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678288.7272727273,
            "unit": "ns",
            "range": "± 30737.172619192053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273651.5,
            "unit": "ns",
            "range": "± 32677.227408448354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1073284.85,
            "unit": "ns",
            "range": "± 53943.05094371708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9507787.11,
            "unit": "ns",
            "range": "± 1377343.3380263739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183274.3936170214,
            "unit": "ns",
            "range": "± 84148.84820628834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2288051.4545454546,
            "unit": "ns",
            "range": "± 85123.55333181936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2550514.785714286,
            "unit": "ns",
            "range": "± 28150.213357378554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2320220.6923076925,
            "unit": "ns",
            "range": "± 32591.88544557427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2921269.4305555555,
            "unit": "ns",
            "range": "± 131223.0763853038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3036870.105598958,
            "unit": "ns",
            "range": "± 45660.12916343172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925832.1130208333,
            "unit": "ns",
            "range": "± 4380.166986000649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614755.92734375,
            "unit": "ns",
            "range": "± 6166.688183302135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1629643.6236049107,
            "unit": "ns",
            "range": "± 10699.51443610716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468001.5243164062,
            "unit": "ns",
            "range": "± 615.7922258808902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424062.04638671875,
            "unit": "ns",
            "range": "± 973.6166785954763"
          }
        ]
      }
    ]
  }
}