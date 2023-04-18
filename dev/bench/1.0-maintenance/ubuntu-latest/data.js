window.BENCHMARK_DATA = {
  "lastUpdate": 1681801680860,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23fa5406ecce3a4959fc38701c795682c8fbcadc",
          "message": "Merge pull request #3097 from dahlia/1.0-maintenance\n\nRelease 1.0.0",
          "timestamp": "2023-04-18T15:39:29+09:00",
          "tree_id": "244d53aa04947b63072d6989e3d8373876b569bc",
          "url": "https://github.com/planetarium/libplanet/commit/23fa5406ecce3a4959fc38701c795682c8fbcadc"
        },
        "date": 1681801492107,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10052809.47368421,
            "unit": "ns",
            "range": "± 860746.6306534538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27594601.55102041,
            "unit": "ns",
            "range": "± 1089459.2495548741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71568377.1111111,
            "unit": "ns",
            "range": "± 2519366.3543432737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144439049.05555555,
            "unit": "ns",
            "range": "± 2961486.8023309126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298298135.1363636,
            "unit": "ns",
            "range": "± 7168065.759764354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 88675.5376344086,
            "unit": "ns",
            "range": "± 18528.84759993779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1942287.4432989692,
            "unit": "ns",
            "range": "± 178601.56079874933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3845775.6666666665,
            "unit": "ns",
            "range": "± 238502.3518787208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3065849.663043478,
            "unit": "ns",
            "range": "± 190676.75663119167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8374365.231578947,
            "unit": "ns",
            "range": "± 483640.9121080994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7710636.375,
            "unit": "ns",
            "range": "± 156395.25447317513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2377298.3878038195,
            "unit": "ns",
            "range": "± 49581.621409886495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1724494.6020833333,
            "unit": "ns",
            "range": "± 30161.32309057179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3353571.1515625,
            "unit": "ns",
            "range": "± 74576.43618040628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1098439.7391357422,
            "unit": "ns",
            "range": "± 21540.07996519393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1041606.4312918527,
            "unit": "ns",
            "range": "± 29296.36115989994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 489112.43298969074,
            "unit": "ns",
            "range": "± 52007.83104212672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 399659.95652173914,
            "unit": "ns",
            "range": "± 42826.31868267662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 369119.1595744681,
            "unit": "ns",
            "range": "± 39719.4834518771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7488708.590909091,
            "unit": "ns",
            "range": "± 181739.80975655414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5571041.613636363,
            "unit": "ns",
            "range": "± 205916.8109834441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31795.98969072165,
            "unit": "ns",
            "range": "± 11231.945072625487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 141470.24175824175,
            "unit": "ns",
            "range": "± 20878.090524833104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132437.63829787233,
            "unit": "ns",
            "range": "± 20835.22076793068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 281859.52127659577,
            "unit": "ns",
            "range": "± 36865.6260161693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9331,
            "unit": "ns",
            "range": "± 1741.3223129536823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31109.827956989247,
            "unit": "ns",
            "range": "± 7734.47591831205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4468199.635416667,
            "unit": "ns",
            "range": "± 274446.08788927726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4747359.580645162,
            "unit": "ns",
            "range": "± 359704.74095400755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5827910.821052631,
            "unit": "ns",
            "range": "± 487124.7468922403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5922859.395833333,
            "unit": "ns",
            "range": "± 362954.97325427306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10297610.738095239,
            "unit": "ns",
            "range": "± 535422.8466157598"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "796b0894b2912da9b4a59a4a400736175a076266",
          "message": "Version bump",
          "timestamp": "2023-04-18T15:46:02+09:00",
          "tree_id": "13c2e25096d4f2be554b279a8e7f29bb999bbc3c",
          "url": "https://github.com/planetarium/libplanet/commit/796b0894b2912da9b4a59a4a400736175a076266"
        },
        "date": 1681801655205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10372624.418367347,
            "unit": "ns",
            "range": "± 956072.8547610625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27231471.11764706,
            "unit": "ns",
            "range": "± 1105370.4006422036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72288079.91666667,
            "unit": "ns",
            "range": "± 1847450.5392675349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144757992.7222222,
            "unit": "ns",
            "range": "± 2944909.7027858845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293025817.17391306,
            "unit": "ns",
            "range": "± 6730101.168372621"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75573.05319148937,
            "unit": "ns",
            "range": "± 14334.645155298509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1871754.8666666667,
            "unit": "ns",
            "range": "± 137697.65052993884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3748304.393442623,
            "unit": "ns",
            "range": "± 169034.84587033905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3016963.2747252746,
            "unit": "ns",
            "range": "± 181095.24787096403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8207971.483870967,
            "unit": "ns",
            "range": "± 489637.9110608744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7715745.172991072,
            "unit": "ns",
            "range": "± 79571.51015978472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2414309.0145833334,
            "unit": "ns",
            "range": "± 29755.21407183404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1772589.204296875,
            "unit": "ns",
            "range": "± 28216.075961290888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3318846.9028645833,
            "unit": "ns",
            "range": "± 51269.91261996262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1104547.85703125,
            "unit": "ns",
            "range": "± 20019.316093706755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1025921.747265625,
            "unit": "ns",
            "range": "± 14508.32598933902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 469071.0618556701,
            "unit": "ns",
            "range": "± 51747.26419817896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385989.38144329895,
            "unit": "ns",
            "range": "± 53659.566408757935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348171.5052631579,
            "unit": "ns",
            "range": "± 37412.1491516626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7406151.103896104,
            "unit": "ns",
            "range": "± 378115.26114691485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5368897.234042553,
            "unit": "ns",
            "range": "± 322694.3969115953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30601.336734693876,
            "unit": "ns",
            "range": "± 10174.829189218395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 134867.8125,
            "unit": "ns",
            "range": "± 20114.767678087188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117189.5625,
            "unit": "ns",
            "range": "± 22195.386493978996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 267933.85869565216,
            "unit": "ns",
            "range": "± 30188.252036574922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7068.61797752809,
            "unit": "ns",
            "range": "± 1285.0210336589294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32616.731958762888,
            "unit": "ns",
            "range": "± 10137.39070380402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4348747.6197183095,
            "unit": "ns",
            "range": "± 212823.96720867464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4690492.263157895,
            "unit": "ns",
            "range": "± 263895.0178203612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5536750.041237113,
            "unit": "ns",
            "range": "± 381693.68132457003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5792786.191011236,
            "unit": "ns",
            "range": "± 394401.7417395352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9980227.494949495,
            "unit": "ns",
            "range": "± 735538.4881814219"
          }
        ]
      }
    ]
  }
}