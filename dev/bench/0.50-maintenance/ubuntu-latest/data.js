window.BENCHMARK_DATA = {
  "lastUpdate": 1678931199156,
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
          "id": "599ba5d49bea770c77ec9c5bcb83314d8e56de50",
          "message": "Merge pull request #2936 from greymistcube/prepare/0.50.4\n\n🔧 Prepare 0.50.4",
          "timestamp": "2023-03-16T10:34:54+09:00",
          "tree_id": "6df23b5e65ea251201fdd4b86139e1111bcb91ab",
          "url": "https://github.com/planetarium/libplanet/commit/599ba5d49bea770c77ec9c5bcb83314d8e56de50"
        },
        "date": 1678931178531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88038.91111111111,
            "unit": "ns",
            "range": "± 6141.057932582613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198250.0128205128,
            "unit": "ns",
            "range": "± 9371.267153633416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171433.41666666666,
            "unit": "ns",
            "range": "± 2159.433867657882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3782615.285714286,
            "unit": "ns",
            "range": "± 17397.031450701677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9320855.066666666,
            "unit": "ns",
            "range": "± 59782.75883977953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15574.117647058823,
            "unit": "ns",
            "range": "± 808.4601679348556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48997.40789473684,
            "unit": "ns",
            "range": "± 2308.142087929202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44007.58585858586,
            "unit": "ns",
            "range": "± 3275.140289907211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82176.90322580645,
            "unit": "ns",
            "range": "± 11168.899117701912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4769.072164948454,
            "unit": "ns",
            "range": "± 583.3382424928433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14991.780821917808,
            "unit": "ns",
            "range": "± 760.2546036722636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5903100.19375,
            "unit": "ns",
            "range": "± 33408.30646747379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866995.2674479166,
            "unit": "ns",
            "range": "± 2118.494830003448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338544.037109375,
            "unit": "ns",
            "range": "± 673.8512663402772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591176.3330729166,
            "unit": "ns",
            "range": "± 1317.8894288586093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801512.618359375,
            "unit": "ns",
            "range": "± 385.2462071541579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744367.1737530048,
            "unit": "ns",
            "range": "± 588.3087762276183"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103064.35714285714,
            "unit": "ns",
            "range": "± 1685.9285324365076"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4393927.548177083,
            "unit": "ns",
            "range": "± 32601.917603767015"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5476967.734693877,
            "unit": "ns",
            "range": "± 206053.96053428733"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24991801.57142857,
            "unit": "ns",
            "range": "± 232626.3750301078"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6100992.117647059,
            "unit": "ns",
            "range": "± 242976.9968958088"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28540937.42857143,
            "unit": "ns",
            "range": "± 262391.6222113909"
          }
        ]
      }
    ]
  }
}