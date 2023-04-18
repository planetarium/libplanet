window.BENCHMARK_DATA = {
  "lastUpdate": 1681801517221,
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
      }
    ]
  }
}