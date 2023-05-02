window.BENCHMARK_DATA = {
  "lastUpdate": 1683022802199,
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
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bf8a0695ce9422632af9828a170541ef06ceabb",
          "message": "Merge pull request #3125 from limebell/bugfix/update-txexecution\n\nUpdate txexecution",
          "timestamp": "2023-05-02T16:21:36+09:00",
          "tree_id": "8c8ab7108b72b7412ea85d30fed2371a53078f35",
          "url": "https://github.com/planetarium/libplanet/commit/7bf8a0695ce9422632af9828a170541ef06ceabb"
        },
        "date": 1683012947860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346236.5925925926,
            "unit": "ns",
            "range": "± 14269.510097920707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290026.7931034483,
            "unit": "ns",
            "range": "± 8003.44924025756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238430.125,
            "unit": "ns",
            "range": "± 7388.709113977065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5818299.230769231,
            "unit": "ns",
            "range": "± 61890.10960990165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4190961,
            "unit": "ns",
            "range": "± 66909.48732429506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22204.42105263158,
            "unit": "ns",
            "range": "± 2450.0737356639634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99693.67708333333,
            "unit": "ns",
            "range": "± 9094.431645671162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92721.51546391753,
            "unit": "ns",
            "range": "± 6711.883261725372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 227864.4,
            "unit": "ns",
            "range": "± 17886.86857005869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7671.96875,
            "unit": "ns",
            "range": "± 1135.4719719187956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21529.879120879123,
            "unit": "ns",
            "range": "± 1752.6867555281128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3584920.076923077,
            "unit": "ns",
            "range": "± 94522.15152732107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3870280.8947368423,
            "unit": "ns",
            "range": "± 62308.99811503484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4325971.055555556,
            "unit": "ns",
            "range": "± 87434.71566123742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4911316.133333334,
            "unit": "ns",
            "range": "± 90682.78202445731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7432318.923076923,
            "unit": "ns",
            "range": "± 107567.82578173763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6092069.753004808,
            "unit": "ns",
            "range": "± 20916.055380942278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1835104.9532552084,
            "unit": "ns",
            "range": "± 5934.753810889516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366016.4305989584,
            "unit": "ns",
            "range": "± 3706.438775205665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611900.9893973214,
            "unit": "ns",
            "range": "± 2237.129747945388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818392.2588588169,
            "unit": "ns",
            "range": "± 1264.9267627424879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773571.2256510417,
            "unit": "ns",
            "range": "± 251.01353742112053"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50114.59782608696,
            "unit": "ns",
            "range": "± 2836.2942858665388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8166091.333333333,
            "unit": "ns",
            "range": "± 106903.64326790915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21385226.4,
            "unit": "ns",
            "range": "± 189446.4644253282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57018484.733333334,
            "unit": "ns",
            "range": "± 989716.3558231122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111003055.33333333,
            "unit": "ns",
            "range": "± 1351155.4880083548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217259498.8,
            "unit": "ns",
            "range": "± 2148803.716645387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521822.3975903615,
            "unit": "ns",
            "range": "± 80639.72870192757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2734845.1621621624,
            "unit": "ns",
            "range": "± 92873.50014386758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2348888.765957447,
            "unit": "ns",
            "range": "± 90196.6255929626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6079223.387096774,
            "unit": "ns",
            "range": "± 276252.7553438351"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b23f9440cba2c4f2e9aaa9b756629b3c1fbb82b",
          "message": "Merge pull request #3128 from planetarium/test/append\n\nAdd regression test for appending hotfix",
          "timestamp": "2023-05-02T18:51:32+09:00",
          "tree_id": "80e52a1d741b1034963b30010e8348315e3c6ef1",
          "url": "https://github.com/planetarium/libplanet/commit/7b23f9440cba2c4f2e9aaa9b756629b3c1fbb82b"
        },
        "date": 1683022256282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 437704.3333333333,
            "unit": "ns",
            "range": "± 40815.87194776244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358358.1875,
            "unit": "ns",
            "range": "± 37608.95250484706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313276.2580645161,
            "unit": "ns",
            "range": "± 36706.410500697595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6543330.1486486485,
            "unit": "ns",
            "range": "± 324632.5301868224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4777521.782608695,
            "unit": "ns",
            "range": "± 381724.45519435185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34986.95918367347,
            "unit": "ns",
            "range": "± 10692.22993523837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 130349.29896907216,
            "unit": "ns",
            "range": "± 18398.56599267372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105168.57731958762,
            "unit": "ns",
            "range": "± 14773.525756847286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 259833.43617021278,
            "unit": "ns",
            "range": "± 32776.874018766925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12734.969696969696,
            "unit": "ns",
            "range": "± 9260.84683774295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 36632.84269662921,
            "unit": "ns",
            "range": "± 5708.503648662463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3669995.0319148935,
            "unit": "ns",
            "range": "± 343161.22364722897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3856495.567010309,
            "unit": "ns",
            "range": "± 355722.34640297137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4865623.821052631,
            "unit": "ns",
            "range": "± 472586.24836170935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5369340.343434343,
            "unit": "ns",
            "range": "± 542693.9833287332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9870505.326530613,
            "unit": "ns",
            "range": "± 798983.9640086947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6582917.799045139,
            "unit": "ns",
            "range": "± 132456.31534893424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2310173.859765625,
            "unit": "ns",
            "range": "± 46469.643201553394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1544953.0425091912,
            "unit": "ns",
            "range": "± 30346.15300678547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2964466.100167411,
            "unit": "ns",
            "range": "± 45224.011556815574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 926043.1070240162,
            "unit": "ns",
            "range": "± 25342.619236289687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 858245.0040552171,
            "unit": "ns",
            "range": "± 37903.88717075594"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75367.13978494624,
            "unit": "ns",
            "range": "± 12605.662314310253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8466523.107526882,
            "unit": "ns",
            "range": "± 575899.8329090984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24071596.276595745,
            "unit": "ns",
            "range": "± 1823990.1880699848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62671094.320754714,
            "unit": "ns",
            "range": "± 2594940.0297324555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 156129560.2352941,
            "unit": "ns",
            "range": "± 7399996.857052165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263041454.3625,
            "unit": "ns",
            "range": "± 13745870.8754203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732767.587628866,
            "unit": "ns",
            "range": "± 215450.38015069312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3366054.547368421,
            "unit": "ns",
            "range": "± 320046.37873874203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2741454.397959184,
            "unit": "ns",
            "range": "± 309653.78179487964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7615904.443298969,
            "unit": "ns",
            "range": "± 584707.9666952691"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f47140d358633e56db4e1b3f5d6bfb0bfd09c3da",
          "message": "Merge pull request #3129 from limebell/refactor/append-index-last\n\nAppend index at last when appending new block",
          "timestamp": "2023-05-02T19:06:51+09:00",
          "tree_id": "d56012325562e1a076ddb8c3ac9c06c670ad82b7",
          "url": "https://github.com/planetarium/libplanet/commit/f47140d358633e56db4e1b3f5d6bfb0bfd09c3da"
        },
        "date": 1683022779417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328374.75,
            "unit": "ns",
            "range": "± 5938.5060017931555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270529.38636363635,
            "unit": "ns",
            "range": "± 9338.98008777242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242941.90322580645,
            "unit": "ns",
            "range": "± 7364.975602380222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5593507,
            "unit": "ns",
            "range": "± 47081.825428866774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4005013.3846153845,
            "unit": "ns",
            "range": "± 34248.30521728645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16662.479166666668,
            "unit": "ns",
            "range": "± 1212.942711183853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83204.0612244898,
            "unit": "ns",
            "range": "± 3133.9046226191167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75854.95,
            "unit": "ns",
            "range": "± 1748.2443968314703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177023.03296703298,
            "unit": "ns",
            "range": "± 9887.436543918358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4778.125,
            "unit": "ns",
            "range": "± 648.7564014489974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15970.515789473684,
            "unit": "ns",
            "range": "± 1078.307458850151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3175051.6,
            "unit": "ns",
            "range": "± 43597.02063018265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3327014.9444444445,
            "unit": "ns",
            "range": "± 70036.50180103332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4220977.866666666,
            "unit": "ns",
            "range": "± 45062.818314099306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4436078.615384615,
            "unit": "ns",
            "range": "± 115467.52583027902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7234496.3,
            "unit": "ns",
            "range": "± 194065.16872061836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6237044.415625,
            "unit": "ns",
            "range": "± 37061.73920774059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895715.22890625,
            "unit": "ns",
            "range": "± 3984.03434265535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367377.6466238839,
            "unit": "ns",
            "range": "± 1244.8967364742334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2533759.3779296875,
            "unit": "ns",
            "range": "± 2907.126342304139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818005.4712239583,
            "unit": "ns",
            "range": "± 931.6614292787688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728371.059375,
            "unit": "ns",
            "range": "± 469.37056906492666"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45188.22352941176,
            "unit": "ns",
            "range": "± 2459.112336830927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7609531.928571428,
            "unit": "ns",
            "range": "± 17714.569255773127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19277290.4,
            "unit": "ns",
            "range": "± 89288.86924855591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48500275.6,
            "unit": "ns",
            "range": "± 293722.79066732293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98436037.26666667,
            "unit": "ns",
            "range": "± 1386682.2215371514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203907984.93333334,
            "unit": "ns",
            "range": "± 917349.3823077184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354830.5764705883,
            "unit": "ns",
            "range": "± 72460.56155417966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2638027.6041666665,
            "unit": "ns",
            "range": "± 101525.04538012148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2164525.2527472526,
            "unit": "ns",
            "range": "± 119080.93583279058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5404985.260869565,
            "unit": "ns",
            "range": "± 132961.0597940811"
          }
        ]
      }
    ]
  }
}