window.BENCHMARK_DATA = {
  "lastUpdate": 1721714787184,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721714138550,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10807594.857142856,
            "unit": "ns",
            "range": "± 142839.9880958018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26656174.733333334,
            "unit": "ns",
            "range": "± 172505.03808190094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67240648.78571428,
            "unit": "ns",
            "range": "± 78462.898674301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136488529.5,
            "unit": "ns",
            "range": "± 489728.16265568737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274304019.8,
            "unit": "ns",
            "range": "± 537304.2917052549"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14088.034482758621,
            "unit": "ns",
            "range": "± 412.4244937612062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111269.06666666667,
            "unit": "ns",
            "range": "± 4326.601973783586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105553.33333333333,
            "unit": "ns",
            "range": "± 3832.066224127565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90384.23076923077,
            "unit": "ns",
            "range": "± 1467.6170682348852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2953712.02,
            "unit": "ns",
            "range": "± 212122.07891997695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2766056.7608695654,
            "unit": "ns",
            "range": "± 154731.65933001277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4926.3125,
            "unit": "ns",
            "range": "± 600.386039188647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26581.147727272728,
            "unit": "ns",
            "range": "± 1866.042468746944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22436.752688172044,
            "unit": "ns",
            "range": "± 1547.6515424564066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28900.717391304348,
            "unit": "ns",
            "range": "± 4501.83416180045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1312.4255319148936,
            "unit": "ns",
            "range": "± 232.50605215208574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4825.738636363636,
            "unit": "ns",
            "range": "± 500.8859735409579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 690878.0898876404,
            "unit": "ns",
            "range": "± 46080.365014593706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270440.847826087,
            "unit": "ns",
            "range": "± 44492.81303859579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1092339.0256410257,
            "unit": "ns",
            "range": "± 49772.73252376697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9509067.16,
            "unit": "ns",
            "range": "± 1460708.6852949483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204813.846153846,
            "unit": "ns",
            "range": "± 31085.02093143404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2292206.6315789474,
            "unit": "ns",
            "range": "± 78232.97793110463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2547134.769230769,
            "unit": "ns",
            "range": "± 22344.856164800905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2328454.066666667,
            "unit": "ns",
            "range": "± 87295.17123384005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3165213.64,
            "unit": "ns",
            "range": "± 320130.6186720727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3033329.6765625,
            "unit": "ns",
            "range": "± 32432.19931126035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917280.1353515625,
            "unit": "ns",
            "range": "± 8129.203435521332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615865.4652994792,
            "unit": "ns",
            "range": "± 4745.168987173333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1649829.0853794643,
            "unit": "ns",
            "range": "± 10766.498312413753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 468709.0625,
            "unit": "ns",
            "range": "± 1010.006738534644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425113.50364583335,
            "unit": "ns",
            "range": "± 1281.4455533483808"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "ec0e423fbfa7471468c273a238a16b1a401114af",
          "message": "Changelog",
          "timestamp": "2024-07-23T14:51:55+09:00",
          "tree_id": "56761a57c2aed7be3372f933d598112818fcc5cb",
          "url": "https://github.com/planetarium/libplanet/commit/ec0e423fbfa7471468c273a238a16b1a401114af"
        },
        "date": 1721714712911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10618762.285714285,
            "unit": "ns",
            "range": "± 117417.09299195462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26636142.85714286,
            "unit": "ns",
            "range": "± 157466.3222922516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68004913.46666667,
            "unit": "ns",
            "range": "± 126757.96391146773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135796735.42857143,
            "unit": "ns",
            "range": "± 310160.9366525495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272790442.7692308,
            "unit": "ns",
            "range": "± 186300.7418222634"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14315.305555555555,
            "unit": "ns",
            "range": "± 434.87277741850266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109775.33333333333,
            "unit": "ns",
            "range": "± 4485.318924347224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106276,
            "unit": "ns",
            "range": "± 4298.362793655551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90967.97619047618,
            "unit": "ns",
            "range": "± 3303.436632476115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2991906.7216494847,
            "unit": "ns",
            "range": "± 173347.37324911973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2777882.2976190476,
            "unit": "ns",
            "range": "± 148249.98920772673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4911.204301075269,
            "unit": "ns",
            "range": "± 512.4935537057958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26819.648351648353,
            "unit": "ns",
            "range": "± 1790.9187857610118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23848.115789473683,
            "unit": "ns",
            "range": "± 1856.2315970183558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29415.684210526317,
            "unit": "ns",
            "range": "± 5740.767207722212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1124.3315789473684,
            "unit": "ns",
            "range": "± 274.6440114670525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4752.4946236559135,
            "unit": "ns",
            "range": "± 560.4848371616953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 680268.8,
            "unit": "ns",
            "range": "± 27467.308525601482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1255391.9142857143,
            "unit": "ns",
            "range": "± 23836.54110366172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1073213.948051948,
            "unit": "ns",
            "range": "± 52978.37664653882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9509513.391752576,
            "unit": "ns",
            "range": "± 1169523.5520799572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2169204.590909091,
            "unit": "ns",
            "range": "± 39970.90719857452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2338847.5833333335,
            "unit": "ns",
            "range": "± 91446.23781166614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2558593.25,
            "unit": "ns",
            "range": "± 19014.222624728238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2334677.347826087,
            "unit": "ns",
            "range": "± 55487.75407126799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3234517.4292929294,
            "unit": "ns",
            "range": "± 319787.5359653673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3037179.3118489585,
            "unit": "ns",
            "range": "± 45426.79713694034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917991.6840444711,
            "unit": "ns",
            "range": "± 5793.721253050392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 609200.259765625,
            "unit": "ns",
            "range": "± 4090.9385953480555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644291.4108537945,
            "unit": "ns",
            "range": "± 13391.39168349095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471422.7121419271,
            "unit": "ns",
            "range": "± 970.3101808437658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431877.313546317,
            "unit": "ns",
            "range": "± 873.7868680514991"
          }
        ]
      }
    ]
  }
}