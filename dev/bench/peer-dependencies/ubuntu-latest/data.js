window.BENCHMARK_DATA = {
  "lastUpdate": 1680768963465,
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
      },
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
          "id": "1bef4ea10d764a929a3c400df62c2819bc02160c",
          "message": "Move @planetarium/account to peerDependencies\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-06T16:56:20+09:00",
          "tree_id": "e13dadff5e4df1e6fb6e907b34bf8f04f3295ce4",
          "url": "https://github.com/planetarium/libplanet/commit/1bef4ea10d764a929a3c400df62c2819bc02160c"
        },
        "date": 1680768940488,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3276789.75,
            "unit": "ns",
            "range": "± 292471.01712509815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448645.8585858587,
            "unit": "ns",
            "range": "± 336502.7781856995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4374217.525773196,
            "unit": "ns",
            "range": "± 374436.66026137106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4336585.828282828,
            "unit": "ns",
            "range": "± 478844.8677881189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7801997.52631579,
            "unit": "ns",
            "range": "± 640418.1588186562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7771097.428571428,
            "unit": "ns",
            "range": "± 592319.4404312974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19964248.375,
            "unit": "ns",
            "range": "± 1750741.7557981722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53937357.17,
            "unit": "ns",
            "range": "± 5646413.564252095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115749361.59,
            "unit": "ns",
            "range": "± 9385674.980321446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234825101.5,
            "unit": "ns",
            "range": "± 19660861.475750852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683918.5656565656,
            "unit": "ns",
            "range": "± 245085.69042576244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249266.0303030303,
            "unit": "ns",
            "range": "± 383776.01974595815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2561645.824742268,
            "unit": "ns",
            "range": "± 300022.1243889082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6971497.765957447,
            "unit": "ns",
            "range": "± 561760.1026456968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75004.26041666667,
            "unit": "ns",
            "range": "± 15089.30589470904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6322741.684235075,
            "unit": "ns",
            "range": "± 297625.80629897065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936606.049977022,
            "unit": "ns",
            "range": "± 58128.902590485195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1518865.6310040508,
            "unit": "ns",
            "range": "± 42025.50301542839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2808719.9480064656,
            "unit": "ns",
            "range": "± 69427.79605908408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 916080.5968424479,
            "unit": "ns",
            "range": "± 21786.67781226962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 848834.4051598837,
            "unit": "ns",
            "range": "± 30732.743893577193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 391687.6804123711,
            "unit": "ns",
            "range": "± 60549.85882287189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385532.0208333333,
            "unit": "ns",
            "range": "± 59078.99040953635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308519.2708333333,
            "unit": "ns",
            "range": "± 46677.7922852036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6187720.8125,
            "unit": "ns",
            "range": "± 522129.1986831433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4683318.224489796,
            "unit": "ns",
            "range": "± 517972.9331958135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34679.247191011236,
            "unit": "ns",
            "range": "± 7600.541302913443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118158.51041666667,
            "unit": "ns",
            "range": "± 15392.59820891012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98213.26666666666,
            "unit": "ns",
            "range": "± 14936.094276707572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 232913.25,
            "unit": "ns",
            "range": "± 32907.04885697401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12947.525252525253,
            "unit": "ns",
            "range": "± 9178.639798904262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32820.58163265306,
            "unit": "ns",
            "range": "± 10082.410990426117"
          }
        ]
      }
    ]
  }
}