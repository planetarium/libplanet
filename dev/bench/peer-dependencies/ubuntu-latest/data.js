window.BENCHMARK_DATA = {
  "lastUpdate": 1680768468788,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "7013803d86b79a30979761d9fc311468d94c3f77",
          "message": "Move @planetarium/account to peerDependencies\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T16:54:45+09:00",
          "tree_id": "a72d7db71ac4a380392f90874db1c2c93ef29289",
          "url": "https://github.com/planetarium/libplanet/commit/7013803d86b79a30979761d9fc311468d94c3f77"
        },
        "date": 1680768447455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3174683.1818181816,
            "unit": "ns",
            "range": "± 100444.3557456237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3349397,
            "unit": "ns",
            "range": "± 59750.72542376926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4162027.466666667,
            "unit": "ns",
            "range": "± 50730.00065031492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4369709.230769231,
            "unit": "ns",
            "range": "± 57656.222542401905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7114628,
            "unit": "ns",
            "range": "± 103799.27439665813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7599030.857142857,
            "unit": "ns",
            "range": "± 8956.171682632665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19090373.846153848,
            "unit": "ns",
            "range": "± 84815.34567600975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48753440.8,
            "unit": "ns",
            "range": "± 451483.28547865426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97783499.42857143,
            "unit": "ns",
            "range": "± 827582.1606248962"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197182953.33333334,
            "unit": "ns",
            "range": "± 1481465.325829207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1331821.76,
            "unit": "ns",
            "range": "± 92866.74881374254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542478.193548387,
            "unit": "ns",
            "range": "± 75029.808987015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2149745.452631579,
            "unit": "ns",
            "range": "± 122466.75267848044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5442188.19047619,
            "unit": "ns",
            "range": "± 125188.27294863485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45150.83783783784,
            "unit": "ns",
            "range": "± 2257.2385421919644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5990928.816145834,
            "unit": "ns",
            "range": "± 16437.899196123686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829004.1313802083,
            "unit": "ns",
            "range": "± 3796.182093315185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332470.2781808036,
            "unit": "ns",
            "range": "± 1433.03291772392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2569745.0212053573,
            "unit": "ns",
            "range": "± 3929.8684837571795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800615.6228376116,
            "unit": "ns",
            "range": "± 634.9373375222667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716090.0247145433,
            "unit": "ns",
            "range": "± 476.3354974114348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325824.72,
            "unit": "ns",
            "range": "± 8609.904657427978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272697.29411764705,
            "unit": "ns",
            "range": "± 4302.037333704606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248466.0243902439,
            "unit": "ns",
            "range": "± 8890.289493283683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5533144.133333334,
            "unit": "ns",
            "range": "± 35703.02488558851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3936873.4,
            "unit": "ns",
            "range": "± 56135.449656293706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16252.484210526316,
            "unit": "ns",
            "range": "± 1335.4166125233576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82641.68478260869,
            "unit": "ns",
            "range": "± 4551.447304965288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72999.61111111111,
            "unit": "ns",
            "range": "± 1426.1384364322003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 173085.57291666666,
            "unit": "ns",
            "range": "± 13824.089424467704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4685.515463917526,
            "unit": "ns",
            "range": "± 493.24451157197507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16045.377777777778,
            "unit": "ns",
            "range": "± 1049.149967084405"
          }
        ]
      }
    ]
  }
}