window.BENCHMARK_DATA = {
  "lastUpdate": 1678786674408,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "209fdb1c17f0cb26789b857f271544b8935dc5e2",
          "message": "Merge pull request #2905 from colibrishin/0.50-maintenance-bench-failing\n\nci/bench: cherrypick of bench pr update to 0.50-maintenance",
          "timestamp": "2023-03-13T10:51:25+09:00",
          "tree_id": "615717a9642490f590a5330c4a347ecae47b95d4",
          "url": "https://github.com/planetarium/libplanet/commit/209fdb1c17f0cb26789b857f271544b8935dc5e2"
        },
        "date": 1678673317712,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125993.8947368421,
            "unit": "ns",
            "range": "± 26726.004196834725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252969.9239130435,
            "unit": "ns",
            "range": "± 29252.479521930447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232572.48936170212,
            "unit": "ns",
            "range": "± 30304.47445785114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5105278.357142857,
            "unit": "ns",
            "range": "± 90123.30037028086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13218678.875,
            "unit": "ns",
            "range": "± 566122.1237575724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19565.567901234568,
            "unit": "ns",
            "range": "± 2610.276278185279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65557.41935483871,
            "unit": "ns",
            "range": "± 11920.390741993117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58028.21276595745,
            "unit": "ns",
            "range": "± 10143.104680342918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 149216.92708333334,
            "unit": "ns",
            "range": "± 38386.17666467279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6730.077777777778,
            "unit": "ns",
            "range": "± 1138.8422391042754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22958.417582417584,
            "unit": "ns",
            "range": "± 6775.305215045353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7585979.464488637,
            "unit": "ns",
            "range": "± 185722.8839967594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2423286.6681985296,
            "unit": "ns",
            "range": "± 46865.79477317825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1750736.821116728,
            "unit": "ns",
            "range": "± 27759.495403781806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3298584.657470703,
            "unit": "ns",
            "range": "± 64197.373303542176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1117594.0476740056,
            "unit": "ns",
            "range": "± 26347.607695654337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1013331.9194010417,
            "unit": "ns",
            "range": "± 18080.47935302183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 146183.46739130435,
            "unit": "ns",
            "range": "± 20926.797200356745"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6670753.716210937,
            "unit": "ns",
            "range": "± 232650.50763355428"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7617218.417582418,
            "unit": "ns",
            "range": "± 425443.5972771653"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 36334667.755555555,
            "unit": "ns",
            "range": "± 1355185.022432733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8173541.28125,
            "unit": "ns",
            "range": "± 521356.3247422744"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 43448679.989247315,
            "unit": "ns",
            "range": "± 2511421.4006118756"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaabbcbef70b2a687645c71efc7e4590d48d7a3c",
          "message": "Merge pull request #2935 from greymistcube/port/0.49.3-to-0.50.3\n\n🔀🚀 Port 0.49.3 to 0.50.3 and release 0.50.3",
          "timestamp": "2023-03-14T18:25:39+09:00",
          "tree_id": "ff7fb2fc6be7e74a14b2c5236392739d907b0fff",
          "url": "https://github.com/planetarium/libplanet/commit/aaabbcbef70b2a687645c71efc7e4590d48d7a3c"
        },
        "date": 1678786655801,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 98985.11340206186,
            "unit": "ns",
            "range": "± 9931.0018480391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209609.8275862069,
            "unit": "ns",
            "range": "± 9079.203255750232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185538.45238095237,
            "unit": "ns",
            "range": "± 6728.7744479100975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3988151.2,
            "unit": "ns",
            "range": "± 48941.004656043355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10069784.142857144,
            "unit": "ns",
            "range": "± 101206.37003808463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21264.766666666666,
            "unit": "ns",
            "range": "± 1968.1152339630169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54930.1875,
            "unit": "ns",
            "range": "± 5182.360180280592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41068.64,
            "unit": "ns",
            "range": "± 1090.8946970262527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97327.27835051547,
            "unit": "ns",
            "range": "± 12620.671727320905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6386.5625,
            "unit": "ns",
            "range": "± 918.0739313481527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18352.957894736843,
            "unit": "ns",
            "range": "± 2026.55876394942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6250282.656770834,
            "unit": "ns",
            "range": "± 42736.42491635774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904644.8846354166,
            "unit": "ns",
            "range": "± 4003.6012419138447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375988.0634114584,
            "unit": "ns",
            "range": "± 2919.09259076901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2641632.960379464,
            "unit": "ns",
            "range": "± 3835.6363033808807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831209.4647135417,
            "unit": "ns",
            "range": "± 1210.884186758031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757694.3339092548,
            "unit": "ns",
            "range": "± 540.724437647695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106601.75675675676,
            "unit": "ns",
            "range": "± 3619.203437570555"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5062106.893229167,
            "unit": "ns",
            "range": "± 296521.29760599375"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6234656.142857143,
            "unit": "ns",
            "range": "± 78721.71800214215"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27615417.583333332,
            "unit": "ns",
            "range": "± 706877.0561854331"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6908816.666666667,
            "unit": "ns",
            "range": "± 91149.64875699638"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31283212.466666665,
            "unit": "ns",
            "range": "± 359369.5617484412"
          }
        ]
      }
    ]
  }
}