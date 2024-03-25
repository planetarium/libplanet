window.BENCHMARK_DATA = {
  "lastUpdate": 1711357085331,
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
          "id": "81ddb0a52b2ea66034848270f3d8a6630432585b",
          "message": "Merge pull request #3707 from greymistcube/release/4.2.0\n\n🚀 Release 4.2.0",
          "timestamp": "2024-03-22T20:09:24+09:00",
          "tree_id": "3c298f46a53aa9d2b54bc5e0fc9f400afb20a4cf",
          "url": "https://github.com/planetarium/libplanet/commit/81ddb0a52b2ea66034848270f3d8a6630432585b"
        },
        "date": 1711342451214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5725671.733333333,
            "unit": "ns",
            "range": "± 24217.383380145602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14443082.07142857,
            "unit": "ns",
            "range": "± 53045.62134574393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37108958.06666667,
            "unit": "ns",
            "range": "± 203761.54361881883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74614454.33333333,
            "unit": "ns",
            "range": "± 235910.85939931596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151775682.93333334,
            "unit": "ns",
            "range": "± 838155.4504644169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37695.93010752688,
            "unit": "ns",
            "range": "± 3809.0088816938737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 965199.4888888889,
            "unit": "ns",
            "range": "± 53499.12979513736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1885993.5625,
            "unit": "ns",
            "range": "± 74220.49659339715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665584.7307692308,
            "unit": "ns",
            "range": "± 100300.16517822634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7553532.117647059,
            "unit": "ns",
            "range": "± 210426.1552209626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2443914.066666667,
            "unit": "ns",
            "range": "± 72166.06760078396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541009.4285714286,
            "unit": "ns",
            "range": "± 91679.73086255959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3120217.214285714,
            "unit": "ns",
            "range": "± 43362.46197981094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3235799.94,
            "unit": "ns",
            "range": "± 128671.0004995988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8728248.972972972,
            "unit": "ns",
            "range": "± 207577.63332753448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196444.16666666666,
            "unit": "ns",
            "range": "± 7643.8534181402365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192620.73684210525,
            "unit": "ns",
            "range": "± 8300.01667495381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167767.10606060605,
            "unit": "ns",
            "range": "± 5097.579419068635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3234188.4,
            "unit": "ns",
            "range": "± 32291.11337902648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2807245.8,
            "unit": "ns",
            "range": "± 47711.630804538334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12323.966666666667,
            "unit": "ns",
            "range": "± 750.7328322334508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59731.64444444444,
            "unit": "ns",
            "range": "± 3740.4461649125815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54103.37234042553,
            "unit": "ns",
            "range": "± 3368.901346021685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88498.70408163265,
            "unit": "ns",
            "range": "± 10999.590904491344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4421.9,
            "unit": "ns",
            "range": "± 1734.468791849248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12319.41111111111,
            "unit": "ns",
            "range": "± 803.686053698124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3685505.6043526786,
            "unit": "ns",
            "range": "± 7537.434831876887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211846.054408482,
            "unit": "ns",
            "range": "± 933.7923826736269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771780.8053152902,
            "unit": "ns",
            "range": "± 1203.8485818614174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927315.7895833333,
            "unit": "ns",
            "range": "± 1978.8143364796108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612769.3057291667,
            "unit": "ns",
            "range": "± 564.1199153222238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567795.2611328125,
            "unit": "ns",
            "range": "± 655.8924547350892"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "386de84c339214e70edc4e3d65eec1679cb9e81d",
          "message": "Merge pull request #3711 from greymistcube/prepare/4.2.1\n\n🔧 Prepare 4.2.1",
          "timestamp": "2024-03-25T17:47:50+09:00",
          "tree_id": "bff2217702bb4646576f2c265daef2bf5ec9b964",
          "url": "https://github.com/planetarium/libplanet/commit/386de84c339214e70edc4e3d65eec1679cb9e81d"
        },
        "date": 1711357062216,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5627492.538461538,
            "unit": "ns",
            "range": "± 12509.809994662752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14734904.1,
            "unit": "ns",
            "range": "± 175004.88692801044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36808408.733333334,
            "unit": "ns",
            "range": "± 195845.89093485384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76874465.21428572,
            "unit": "ns",
            "range": "± 424465.808627771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153379706.6,
            "unit": "ns",
            "range": "± 652492.8725046734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37098.6091954023,
            "unit": "ns",
            "range": "± 2044.8255646098282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 992986.3125,
            "unit": "ns",
            "range": "± 89574.58593929448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913704.011627907,
            "unit": "ns",
            "range": "± 70271.95956302373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1585598.0604395603,
            "unit": "ns",
            "range": "± 87527.13521940353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7613416.486486486,
            "unit": "ns",
            "range": "± 229678.8935993783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433492.9285714286,
            "unit": "ns",
            "range": "± 88954.20001248186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2552270.011627907,
            "unit": "ns",
            "range": "± 89523.53542115857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3121486.566666667,
            "unit": "ns",
            "range": "± 48273.190543090524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3213194.150943396,
            "unit": "ns",
            "range": "± 134091.68063670758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8734669.176470589,
            "unit": "ns",
            "range": "± 214117.40889188342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199462.27083333334,
            "unit": "ns",
            "range": "± 7429.5760731832015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194281.22727272726,
            "unit": "ns",
            "range": "± 7187.326039516273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173721.91666666666,
            "unit": "ns",
            "range": "± 1502.6374666101622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153135.5,
            "unit": "ns",
            "range": "± 27169.532857454647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2925479.2,
            "unit": "ns",
            "range": "± 40541.20405957376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13720.468085106382,
            "unit": "ns",
            "range": "± 1823.0944136017672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72621.62222222223,
            "unit": "ns",
            "range": "± 4271.0286621853165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65588.27,
            "unit": "ns",
            "range": "± 17326.784645706397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81940.09090909091,
            "unit": "ns",
            "range": "± 25275.653119840612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4868.055555555556,
            "unit": "ns",
            "range": "± 2010.9364516807618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11880.055555555555,
            "unit": "ns",
            "range": "± 670.1250991899159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3723887.5725446427,
            "unit": "ns",
            "range": "± 4864.667731882104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204878.3611778845,
            "unit": "ns",
            "range": "± 1853.3060061239598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758594.8856026785,
            "unit": "ns",
            "range": "± 1332.2123020075667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913395.4072265625,
            "unit": "ns",
            "range": "± 1018.5453130269236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618130.531656901,
            "unit": "ns",
            "range": "± 201.637676807108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578441.1031668527,
            "unit": "ns",
            "range": "± 398.3495785123154"
          }
        ]
      }
    ]
  }
}