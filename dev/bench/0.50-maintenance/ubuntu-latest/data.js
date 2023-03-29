window.BENCHMARK_DATA = {
  "lastUpdate": 1680065944820,
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
          "id": "81316dce3bdfd83724ca35d33c890c8e104e2542",
          "message": "Merge pull request #2949 from greymistcube/refactor/validator-encoding\n\n♻️ Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:51:57+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/planetarium/libplanet/commit/81316dce3bdfd83724ca35d33c890c8e104e2542"
        },
        "date": 1678932450152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113595.87755102041,
            "unit": "ns",
            "range": "± 12331.867166812299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234918.5164835165,
            "unit": "ns",
            "range": "± 14428.20502223385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204016.05208333334,
            "unit": "ns",
            "range": "± 13093.673682049497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4247674.703296703,
            "unit": "ns",
            "range": "± 235940.24175166312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11206243.903846154,
            "unit": "ns",
            "range": "± 459311.65691735613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25767,
            "unit": "ns",
            "range": "± 6313.718509257553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61910.617021276594,
            "unit": "ns",
            "range": "± 7419.65654815709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54877.9010989011,
            "unit": "ns",
            "range": "± 5005.175288427737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125116.64948453609,
            "unit": "ns",
            "range": "± 24098.07749335741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13445.908163265307,
            "unit": "ns",
            "range": "± 5855.7039424463865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26052,
            "unit": "ns",
            "range": "± 5678.552241157561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6568365.546316965,
            "unit": "ns",
            "range": "± 115906.66340209659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2174856.8826171877,
            "unit": "ns",
            "range": "± 49318.69285354968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1505178.2928466797,
            "unit": "ns",
            "range": "± 29493.548201426598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3000731.7626953125,
            "unit": "ns",
            "range": "± 56690.70051718119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961966.7069424716,
            "unit": "ns",
            "range": "± 22409.205671441065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 986363.117578125,
            "unit": "ns",
            "range": "± 31593.23852385249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 123537.94565217392,
            "unit": "ns",
            "range": "± 10006.450304693995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5741552.515234375,
            "unit": "ns",
            "range": "± 203353.0687308247"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6516966.041666667,
            "unit": "ns",
            "range": "± 463773.51292493526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 32438101.19148936,
            "unit": "ns",
            "range": "± 2005416.7390221094"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7477829.712765957,
            "unit": "ns",
            "range": "± 444523.03267716966"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 38088135.625,
            "unit": "ns",
            "range": "± 2538350.594116264"
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
          "id": "cec749e51da5a9352feeeddd6a088626bbb591d6",
          "message": "Merge pull request #2950 from greymistcube/release/0.50.4\n\n🚀 Release 0.50.4",
          "timestamp": "2023-03-16T11:06:13+09:00",
          "tree_id": "57ef9e014cc1b48431b2c2f83edb7b48977a1b79",
          "url": "https://github.com/planetarium/libplanet/commit/cec749e51da5a9352feeeddd6a088626bbb591d6"
        },
        "date": 1678933007637,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 82195.65217391304,
            "unit": "ns",
            "range": "± 5628.97884369292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182629.44444444444,
            "unit": "ns",
            "range": "± 5591.523249667511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169613.64285714287,
            "unit": "ns",
            "range": "± 2044.8319324257757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3680570.933333333,
            "unit": "ns",
            "range": "± 17655.554214979922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9268822.142857144,
            "unit": "ns",
            "range": "± 53869.979050498056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15729.244897959185,
            "unit": "ns",
            "range": "± 1428.3479395140064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46291.65306122449,
            "unit": "ns",
            "range": "± 4868.071578017509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38768.568181818184,
            "unit": "ns",
            "range": "± 2146.282767818755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75633.54736842106,
            "unit": "ns",
            "range": "± 9057.435042453479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4909.572916666667,
            "unit": "ns",
            "range": "± 788.4643401447047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13480.975609756097,
            "unit": "ns",
            "range": "± 731.1800199813955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910730.486458333,
            "unit": "ns",
            "range": "± 61282.30008298946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1936359.753059896,
            "unit": "ns",
            "range": "± 6422.7094590690285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373231.3136160714,
            "unit": "ns",
            "range": "± 3460.1176544517543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2504926.7028459823,
            "unit": "ns",
            "range": "± 4533.543349312381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816896.507436899,
            "unit": "ns",
            "range": "± 1959.218250926128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727199.4262695312,
            "unit": "ns",
            "range": "± 1010.2900383071316"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99816.475,
            "unit": "ns",
            "range": "± 3494.834569192888"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4440493.178850447,
            "unit": "ns",
            "range": "± 38610.2153498156"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5444739.959183673,
            "unit": "ns",
            "range": "± 216724.3193769794"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24272220.785714287,
            "unit": "ns",
            "range": "± 237133.59250015058"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6738222.857142857,
            "unit": "ns",
            "range": "± 74054.83283648381"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27845244.333333332,
            "unit": "ns",
            "range": "± 480093.0669613767"
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
          "id": "78a303bed6ea7165b87ab40a12fd65541db0b73a",
          "message": "Merge pull request #2951 from greymistcube/prepare/0.50.5\n\n🔧 Prepare 0.50.5",
          "timestamp": "2023-03-17T14:28:30+09:00",
          "tree_id": "3a06b1bc37e8395cfacce61859a4355d14f19254",
          "url": "https://github.com/planetarium/libplanet/commit/78a303bed6ea7165b87ab40a12fd65541db0b73a"
        },
        "date": 1679031809582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 117783.58947368422,
            "unit": "ns",
            "range": "± 9492.605150454812"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5119728.001057942,
            "unit": "ns",
            "range": "± 293920.77356868115"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6049027.343434343,
            "unit": "ns",
            "range": "± 423978.04431771307"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29049371.636363637,
            "unit": "ns",
            "range": "± 2270697.345590734"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6685129.879518072,
            "unit": "ns",
            "range": "± 351981.27240495995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33720428.94949495,
            "unit": "ns",
            "range": "± 3097554.9257098534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6242282.440625,
            "unit": "ns",
            "range": "± 99606.81797787851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1940123.546484375,
            "unit": "ns",
            "range": "± 28540.387563832945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1425609.2959635416,
            "unit": "ns",
            "range": "± 23957.56007550711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2712144.3232421875,
            "unit": "ns",
            "range": "± 17221.78593802251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899470.431608073,
            "unit": "ns",
            "range": "± 10339.910759350203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840359.9695963542,
            "unit": "ns",
            "range": "± 13237.216106837537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 101609.36170212766,
            "unit": "ns",
            "range": "± 14341.811202823801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205805.57291666666,
            "unit": "ns",
            "range": "± 18825.95377872892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180588.914893617,
            "unit": "ns",
            "range": "± 15417.893425873839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862636.6559139783,
            "unit": "ns",
            "range": "± 210333.93458692086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9941666,
            "unit": "ns",
            "range": "± 468174.3462110903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15347.27380952381,
            "unit": "ns",
            "range": "± 1631.03909042258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51889.125,
            "unit": "ns",
            "range": "± 9091.347979781309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41584.213483146064,
            "unit": "ns",
            "range": "± 4663.152051582682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88679.14736842105,
            "unit": "ns",
            "range": "± 18705.790266919128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10218.656565656565,
            "unit": "ns",
            "range": "± 5947.063062093992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16848.021978021978,
            "unit": "ns",
            "range": "± 4493.4960603027175"
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
          "id": "ba7ed49363bd6f6a2aac05a6fe6210a787dad1cd",
          "message": "Merge pull request #2966 from OnedgeLee/release/0.50.5\n\n🚀 Release 0.50.5",
          "timestamp": "2023-03-17T21:08:39+09:00",
          "tree_id": "3b1dd6f4b8fe0474a0d35e906bd2905a1f02b502",
          "url": "https://github.com/planetarium/libplanet/commit/ba7ed49363bd6f6a2aac05a6fe6210a787dad1cd"
        },
        "date": 1679055646590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 111013.69387755102,
            "unit": "ns",
            "range": "± 3986.6003070916704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5078972.126316713,
            "unit": "ns",
            "range": "± 280513.6741835872"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6118936.142857143,
            "unit": "ns",
            "range": "± 90882.59494014762"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28509440.866666667,
            "unit": "ns",
            "range": "± 405963.90256891184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6702907.20967742,
            "unit": "ns",
            "range": "± 198798.7336069982"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31659523.57142857,
            "unit": "ns",
            "range": "± 886222.6834924868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6171305.919642857,
            "unit": "ns",
            "range": "± 27692.710894007985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986227.8611979166,
            "unit": "ns",
            "range": "± 2978.2868712193203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365381.3059430805,
            "unit": "ns",
            "range": "± 3310.293476152482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616077.14609375,
            "unit": "ns",
            "range": "± 3336.4671581376338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849803.8131277902,
            "unit": "ns",
            "range": "± 1520.6306457808678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772960.5581054688,
            "unit": "ns",
            "range": "± 445.69456753641583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110631.36734693877,
            "unit": "ns",
            "range": "± 15205.981282734816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215007.40476190476,
            "unit": "ns",
            "range": "± 10650.364098215392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196771.86,
            "unit": "ns",
            "range": "± 15516.802043493686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4032670.1333333333,
            "unit": "ns",
            "range": "± 61752.57760134004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10254207.533333333,
            "unit": "ns",
            "range": "± 174132.71621252675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24409.736842105263,
            "unit": "ns",
            "range": "± 3214.593085696375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60928.43010752688,
            "unit": "ns",
            "range": "± 6073.836330484915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41145.878787878784,
            "unit": "ns",
            "range": "± 1301.0326849654793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112175.94505494506,
            "unit": "ns",
            "range": "± 15391.193332092102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6123.242105263158,
            "unit": "ns",
            "range": "± 781.3755562534665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22531.78494623656,
            "unit": "ns",
            "range": "± 1760.8414234298823"
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
          "id": "4de176fbd56fa316a196d4582b82a1b0d5fd4f21",
          "message": "Merge pull request #2967 from OnedgeLee/prepare/0.50.6\n\n🔧 Prepare 0.50.6",
          "timestamp": "2023-03-21T14:01:00+09:00",
          "tree_id": "91fc0766ea67f93c0e75924a192b075e4ce0f897",
          "url": "https://github.com/planetarium/libplanet/commit/4de176fbd56fa316a196d4582b82a1b0d5fd4f21"
        },
        "date": 1679375533851,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105800.6119402985,
            "unit": "ns",
            "range": "± 4890.404386065554"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4505588.552083333,
            "unit": "ns",
            "range": "± 24754.7240748881"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6269733.769230769,
            "unit": "ns",
            "range": "± 84829.97150885002"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25635112.266666666,
            "unit": "ns",
            "range": "± 229776.81896709703"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6517433.448275862,
            "unit": "ns",
            "range": "± 186324.86057835084"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29174082.266666666,
            "unit": "ns",
            "range": "± 302896.81923540204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6067211.41875,
            "unit": "ns",
            "range": "± 36459.08745124588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000232.3579799107,
            "unit": "ns",
            "range": "± 1300.0174073028816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348377.5379464286,
            "unit": "ns",
            "range": "± 522.2585156264563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2570638.0069754464,
            "unit": "ns",
            "range": "± 7487.611793738246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831495.3527644231,
            "unit": "ns",
            "range": "± 2128.004404490943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750165.2497746394,
            "unit": "ns",
            "range": "± 977.1876547467468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100174.50505050505,
            "unit": "ns",
            "range": "± 11011.097289454461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207671,
            "unit": "ns",
            "range": "± 10758.091488824944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177642.26086956522,
            "unit": "ns",
            "range": "± 4373.281275046454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3831535.8,
            "unit": "ns",
            "range": "± 19919.310925402442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9532875.714285715,
            "unit": "ns",
            "range": "± 35176.47137905277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18316.217391304348,
            "unit": "ns",
            "range": "± 1695.0633287536566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53924.568181818184,
            "unit": "ns",
            "range": "± 2954.865307218512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51473.06122448979,
            "unit": "ns",
            "range": "± 2032.2742843934238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98295.63095238095,
            "unit": "ns",
            "range": "± 6826.942252927995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6836.041237113402,
            "unit": "ns",
            "range": "± 1083.7935104445803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18728.722222222223,
            "unit": "ns",
            "range": "± 2018.651146201944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08f4b4b8d238a23d34c9e60547ac8ec53b9a96f6",
          "message": "Merge pull request #2972 from riemannulus/0.50-maintenance\n\nRemove SetValidator action & Make `ValidatorStateExtensions` to public",
          "timestamp": "2023-03-22T09:41:07+09:00",
          "tree_id": "1c0e571d7673f2ca411ed4dc945efa697f8afaf6",
          "url": "https://github.com/planetarium/libplanet/commit/08f4b4b8d238a23d34c9e60547ac8ec53b9a96f6"
        },
        "date": 1679446456210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109360,
            "unit": "ns",
            "range": "± 4940.043703353724"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5082418.452788979,
            "unit": "ns",
            "range": "± 287715.96962966386"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5979604.930232558,
            "unit": "ns",
            "range": "± 218420.33306496282"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27818713.285714287,
            "unit": "ns",
            "range": "± 489299.9858303742"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6994961.793103448,
            "unit": "ns",
            "range": "± 200993.86317859474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31191532.066666666,
            "unit": "ns",
            "range": "± 574229.2469291171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878305.464583334,
            "unit": "ns",
            "range": "± 34381.61339928129"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860368.9356971155,
            "unit": "ns",
            "range": "± 2789.908307699393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375705.7381510416,
            "unit": "ns",
            "range": "± 3396.500223145901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624324.4463541666,
            "unit": "ns",
            "range": "± 2178.0299604865404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828565.73984375,
            "unit": "ns",
            "range": "± 365.3168183331356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758495.2699819711,
            "unit": "ns",
            "range": "± 249.22125971906334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 105172.41666666667,
            "unit": "ns",
            "range": "± 9056.296798263937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218311.21538461538,
            "unit": "ns",
            "range": "± 10218.660667028953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197264.22727272726,
            "unit": "ns",
            "range": "± 7380.18831253927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4073123.5714285714,
            "unit": "ns",
            "range": "± 39248.97647213096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10540122.8,
            "unit": "ns",
            "range": "± 85590.17619797263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23280.274725274725,
            "unit": "ns",
            "range": "± 2025.47113348384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56264.58888888889,
            "unit": "ns",
            "range": "± 4154.998286602885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45220.602150537634,
            "unit": "ns",
            "range": "± 2723.312685186861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111964.64210526316,
            "unit": "ns",
            "range": "± 14951.586862992586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8013.275510204082,
            "unit": "ns",
            "range": "± 1118.5112047110526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20504.236559139787,
            "unit": "ns",
            "range": "± 2356.8363531661294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d30c448ecf83bd4e1d451ca2dafb170dcc21e7fc",
          "message": "Merge pull request #2974 from riemannulus/0.50-maintenance\n\n🚀  Release 0.50.6",
          "timestamp": "2023-03-22T11:17:14+09:00",
          "tree_id": "801f74dd85ddcce3a318a2cdac350e0f82106f83",
          "url": "https://github.com/planetarium/libplanet/commit/d30c448ecf83bd4e1d451ca2dafb170dcc21e7fc"
        },
        "date": 1679452174309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107609.78571428571,
            "unit": "ns",
            "range": "± 8446.005750600414"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4562979.847135416,
            "unit": "ns",
            "range": "± 41772.85535434711"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6250935.571428572,
            "unit": "ns",
            "range": "± 53934.535392047685"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25859194.46153846,
            "unit": "ns",
            "range": "± 163489.30851415297"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7303549.84,
            "unit": "ns",
            "range": "± 179430.2916312906"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29121487.6,
            "unit": "ns",
            "range": "± 432240.9700085954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6141043.034375,
            "unit": "ns",
            "range": "± 29398.54862498199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1838497.2386997768,
            "unit": "ns",
            "range": "± 2137.8925221277277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364501.2866908482,
            "unit": "ns",
            "range": "± 1791.4216830437213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564095.361458333,
            "unit": "ns",
            "range": "± 3400.4079314499004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798019.109375,
            "unit": "ns",
            "range": "± 900.5175507930064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755409.5970703125,
            "unit": "ns",
            "range": "± 505.30553200116805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93320.94736842105,
            "unit": "ns",
            "range": "± 9351.481993562511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206971.22972972973,
            "unit": "ns",
            "range": "± 10083.119637861726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182802.5,
            "unit": "ns",
            "range": "± 8111.514046277108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3787469.285714286,
            "unit": "ns",
            "range": "± 18355.995463350646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9634631.6,
            "unit": "ns",
            "range": "± 55277.484895751186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18700.0989010989,
            "unit": "ns",
            "range": "± 1756.9165164188778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52238.9175257732,
            "unit": "ns",
            "range": "± 5515.334032778716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47255.117647058825,
            "unit": "ns",
            "range": "± 1921.0251184933404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100366.03448275862,
            "unit": "ns",
            "range": "± 10491.896694258057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7135.734693877551,
            "unit": "ns",
            "range": "± 778.2140477688324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17821.18888888889,
            "unit": "ns",
            "range": "± 2243.7974427118193"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e75c1ca7f7ada0877f51f1dcf0b1cbbe12d88b4",
          "message": "Merge pull request #2984 from riemannulus/0.50-maintenance\n\n🚀  Prepare 0.50.7",
          "timestamp": "2023-03-28T15:16:14+09:00",
          "tree_id": "74843fbd2160b43cd774ded45b955d11e202d530",
          "url": "https://github.com/planetarium/libplanet/commit/3e75c1ca7f7ada0877f51f1dcf0b1cbbe12d88b4"
        },
        "date": 1679985012256,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118682.0505050505,
            "unit": "ns",
            "range": "± 7517.560316330565"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5051270.249399038,
            "unit": "ns",
            "range": "± 260191.38034490775"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6226139.184210527,
            "unit": "ns",
            "range": "± 210919.93456155737"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28117028.2,
            "unit": "ns",
            "range": "± 517374.8707773559"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6665250.666666667,
            "unit": "ns",
            "range": "± 342196.498563939"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31404556.266666666,
            "unit": "ns",
            "range": "± 518996.41524091834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6009183.506138393,
            "unit": "ns",
            "range": "± 29177.27983263962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836744.4989583334,
            "unit": "ns",
            "range": "± 1409.945868103277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368324.634765625,
            "unit": "ns",
            "range": "± 2624.511187060681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630404.878125,
            "unit": "ns",
            "range": "± 3088.823397967689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841246.3242885044,
            "unit": "ns",
            "range": "± 290.2464433919754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775508.3483537947,
            "unit": "ns",
            "range": "± 408.0190071211142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107315.07368421053,
            "unit": "ns",
            "range": "± 8992.121851272363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213325.78846153847,
            "unit": "ns",
            "range": "± 8764.623923649064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190631.53731343284,
            "unit": "ns",
            "range": "± 8976.412895165624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4040594.8571428573,
            "unit": "ns",
            "range": "± 47949.53673933132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10114068.2,
            "unit": "ns",
            "range": "± 160607.4256200948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23281.372340425532,
            "unit": "ns",
            "range": "± 2643.7445583829403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61024.5393258427,
            "unit": "ns",
            "range": "± 4095.040140374306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44341.5625,
            "unit": "ns",
            "range": "± 1903.3992305747056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109793.9587628866,
            "unit": "ns",
            "range": "± 17082.42298748283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7265.103092783505,
            "unit": "ns",
            "range": "± 1055.4416974713329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22489.505263157895,
            "unit": "ns",
            "range": "± 2433.140405187293"
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
          "id": "d489fd135c653727f04f6621f607983cdf032778",
          "message": "Merge pull request #3000 from greymistcube/chore/code-cleanup\n\n🧹 General code readability",
          "timestamp": "2023-03-28T15:32:47+09:00",
          "tree_id": "41a9bcd723c8126f258ace5210139b44b1b90a97",
          "url": "https://github.com/planetarium/libplanet/commit/d489fd135c653727f04f6621f607983cdf032778"
        },
        "date": 1679985747041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 105207.84615384616,
            "unit": "ns",
            "range": "± 1692.7295928053522"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4434194.564941406,
            "unit": "ns",
            "range": "± 86392.40897261942"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6004426.8,
            "unit": "ns",
            "range": "± 108058.56379178309"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25477720.2,
            "unit": "ns",
            "range": "± 280332.4180464023"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6732987,
            "unit": "ns",
            "range": "± 62778.27422194492"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28642350.2,
            "unit": "ns",
            "range": "± 367066.98803647736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5862050.024553572,
            "unit": "ns",
            "range": "± 26433.008291964317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957114.23046875,
            "unit": "ns",
            "range": "± 7526.787532391296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348421.856640625,
            "unit": "ns",
            "range": "± 2083.7586018813986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572812.106026786,
            "unit": "ns",
            "range": "± 4744.9698548841925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820684.3080357143,
            "unit": "ns",
            "range": "± 648.0641713879054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746844.3081054688,
            "unit": "ns",
            "range": "± 565.3689586064447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89462.94845360825,
            "unit": "ns",
            "range": "± 7872.81520138965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200171.83950617284,
            "unit": "ns",
            "range": "± 6656.253812124335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172537.22222222222,
            "unit": "ns",
            "range": "± 4679.988480700266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3787054.0714285714,
            "unit": "ns",
            "range": "± 27113.787722979858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9456916.866666667,
            "unit": "ns",
            "range": "± 76284.80849316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16013.694736842106,
            "unit": "ns",
            "range": "± 1115.624928141691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47193.43956043956,
            "unit": "ns",
            "range": "± 3185.554001037919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41922.52040816326,
            "unit": "ns",
            "range": "± 2456.8954185144635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86306.55434782608,
            "unit": "ns",
            "range": "± 10199.114080643518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5354.639175257732,
            "unit": "ns",
            "range": "± 683.8951885091601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15022.612903225807,
            "unit": "ns",
            "range": "± 1166.4599364358633"
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
          "id": "cb1d85ccec2ba77f535b4dac30bf08c8bf989bc2",
          "message": "Merge pull request #3003 from greymistcube/chore/logging\n\n🧹 Cleaned up some logs and added more info",
          "timestamp": "2023-03-28T15:49:18+09:00",
          "tree_id": "b6d2f51d55bd4171b9f34d3658ca372d6c5850a5",
          "url": "https://github.com/planetarium/libplanet/commit/cb1d85ccec2ba77f535b4dac30bf08c8bf989bc2"
        },
        "date": 1679986899531,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104168.84782608696,
            "unit": "ns",
            "range": "± 6313.361926244484"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4561488.729101563,
            "unit": "ns",
            "range": "± 101641.35442284007"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5685706,
            "unit": "ns",
            "range": "± 353900.11633901164"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25909095.23809524,
            "unit": "ns",
            "range": "± 594302.2152920099"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6432081.416666667,
            "unit": "ns",
            "range": "± 96972.41075730424"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29249710.96,
            "unit": "ns",
            "range": "± 759565.3145100207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6247020.209375,
            "unit": "ns",
            "range": "± 26304.161011374315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820220.4708426339,
            "unit": "ns",
            "range": "± 4207.112311072721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347565.71015625,
            "unit": "ns",
            "range": "± 2137.243509707934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556034.8828125,
            "unit": "ns",
            "range": "± 1717.4477037266697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810063.175390625,
            "unit": "ns",
            "range": "± 660.6988126336962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756233.2750651041,
            "unit": "ns",
            "range": "± 470.43956847935755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92830.09782608696,
            "unit": "ns",
            "range": "± 7213.812200414727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201008.9655172414,
            "unit": "ns",
            "range": "± 7813.145357969157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 176941.77777777778,
            "unit": "ns",
            "range": "± 3685.825912003275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3772675.2666666666,
            "unit": "ns",
            "range": "± 19229.040550564092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9517436.666666666,
            "unit": "ns",
            "range": "± 59291.69820432184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17492.308510638297,
            "unit": "ns",
            "range": "± 1492.7897029877133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51406.137931034486,
            "unit": "ns",
            "range": "± 3256.59543357217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44521.775862068964,
            "unit": "ns",
            "range": "± 1952.363093954403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96881.83333333333,
            "unit": "ns",
            "range": "± 12936.882223168775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6514.226804123711,
            "unit": "ns",
            "range": "± 773.886209135892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16545.945054945056,
            "unit": "ns",
            "range": "± 1453.5898960285826"
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
          "id": "030f1277010353d3e4a6fa5d1f42a82a95674a3b",
          "message": "Merge pull request #3007 from greymistcube/refactor/optimize-key-converter\n\n⚡ Optimize key conversion",
          "timestamp": "2023-03-28T16:55:35+09:00",
          "tree_id": "0b287f44514e60c26c243cb104c6f6b16a277ad8",
          "url": "https://github.com/planetarium/libplanet/commit/030f1277010353d3e4a6fa5d1f42a82a95674a3b"
        },
        "date": 1679990866187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102276.46511627907,
            "unit": "ns",
            "range": "± 3763.731667405414"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4426552.679387019,
            "unit": "ns",
            "range": "± 15068.539819909993"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5450581.307692308,
            "unit": "ns",
            "range": "± 120746.99636716562"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25310332.266666666,
            "unit": "ns",
            "range": "± 305737.1771840893"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6220474.192307692,
            "unit": "ns",
            "range": "± 149333.84174018138"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28176967.8,
            "unit": "ns",
            "range": "± 377709.752836033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5849403.1671875,
            "unit": "ns",
            "range": "± 24322.930066449324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891814.1694010417,
            "unit": "ns",
            "range": "± 6776.530080215816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366186.4637276786,
            "unit": "ns",
            "range": "± 765.752990641982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624948.8719308036,
            "unit": "ns",
            "range": "± 1490.219216695309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815269.8805803572,
            "unit": "ns",
            "range": "± 929.5500066025002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773656.9449637277,
            "unit": "ns",
            "range": "± 460.1540458682579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 86167.06315789474,
            "unit": "ns",
            "range": "± 5649.39026047215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196154.79347826086,
            "unit": "ns",
            "range": "± 11789.076078347103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167262.0625,
            "unit": "ns",
            "range": "± 2618.449655012166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3732401.533333333,
            "unit": "ns",
            "range": "± 31029.68423914353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9355684.133333333,
            "unit": "ns",
            "range": "± 83041.4219427068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15171.152542372882,
            "unit": "ns",
            "range": "± 488.5358778184451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 47727.77419354839,
            "unit": "ns",
            "range": "± 4558.805474094188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38981.92,
            "unit": "ns",
            "range": "± 1582.241110654409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84935.54736842106,
            "unit": "ns",
            "range": "± 12696.399045338683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5007.1122448979595,
            "unit": "ns",
            "range": "± 648.7231373403305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14805.477777777778,
            "unit": "ns",
            "range": "± 1218.1599056283208"
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
          "id": "9958f96e2ce25d998f78aaf2f9431f08e77c84a4",
          "message": "Merge pull request #3009 from limebell/feature/getstate-measure-0.50\n\nAdd measure metric for `GetState` method",
          "timestamp": "2023-03-29T09:07:08+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/planetarium/libplanet/commit/9958f96e2ce25d998f78aaf2f9431f08e77c84a4"
        },
        "date": 1680049534197,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 171536.73958333334,
            "unit": "ns",
            "range": "± 10804.08413541627"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 7338292.781723484,
            "unit": "ns",
            "range": "± 483456.62922744884"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 8199650.291666667,
            "unit": "ns",
            "range": "± 210142.87410721704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 39888282.19512195,
            "unit": "ns",
            "range": "± 1425170.3060231123"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 9493354.206521738,
            "unit": "ns",
            "range": "± 711716.16658894"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 45489795.95,
            "unit": "ns",
            "range": "± 2379629.7442410886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7855255.850260417,
            "unit": "ns",
            "range": "± 52019.53538999816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339507.048828125,
            "unit": "ns",
            "range": "± 4054.861349504571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1662523.333203125,
            "unit": "ns",
            "range": "± 3013.5334980671046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3544924.5794270835,
            "unit": "ns",
            "range": "± 22669.47901295151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016282.7446664664,
            "unit": "ns",
            "range": "± 428.37358441300586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930582.7789481027,
            "unit": "ns",
            "range": "± 478.912674410322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 156597.66666666666,
            "unit": "ns",
            "range": "± 13845.677896514675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306877.5571428572,
            "unit": "ns",
            "range": "± 14504.001023841178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279918.04347826086,
            "unit": "ns",
            "range": "± 10024.876107755419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5407606,
            "unit": "ns",
            "range": "± 90727.94258740169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 13642617.666666666,
            "unit": "ns",
            "range": "± 252775.24681499362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34811.27472527473,
            "unit": "ns",
            "range": "± 2446.1698590332967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86297.20930232559,
            "unit": "ns",
            "range": "± 4681.373260351707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73402.5172413793,
            "unit": "ns",
            "range": "± 2097.605839670716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 157218.74736842106,
            "unit": "ns",
            "range": "± 21373.097593563944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10509.8,
            "unit": "ns",
            "range": "± 731.5264367468711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33609.34375,
            "unit": "ns",
            "range": "± 2171.6676290626106"
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
          "id": "6c77f69e285802836a0ce7af1dcc1275487329a1",
          "message": "Merge pull request #3018 from greymistcube/feature/chain-state-cache\n\n⚡ Introduce `ChainStateCache`",
          "timestamp": "2023-03-29T12:15:38+09:00",
          "tree_id": "53ed75b50401b7780b637c6b67055c065b4b7b7e",
          "url": "https://github.com/planetarium/libplanet/commit/6c77f69e285802836a0ce7af1dcc1275487329a1"
        },
        "date": 1680060525118,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110914.4074074074,
            "unit": "ns",
            "range": "± 5851.001174537948"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5186642.966346154,
            "unit": "ns",
            "range": "± 71789.39697236719"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5864077.94117647,
            "unit": "ns",
            "range": "± 234804.31521191527"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27705217.52631579,
            "unit": "ns",
            "range": "± 612714.9038170987"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6512272.571428572,
            "unit": "ns",
            "range": "± 110936.84243243594"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30825326.07142857,
            "unit": "ns",
            "range": "± 499281.2168112605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6082846.761418269,
            "unit": "ns",
            "range": "± 19238.353249651016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1923822.6044921875,
            "unit": "ns",
            "range": "± 2497.234719411479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1341415.962890625,
            "unit": "ns",
            "range": "± 6569.143560651666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590037.75703125,
            "unit": "ns",
            "range": "± 2371.16609580661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826936.6038411459,
            "unit": "ns",
            "range": "± 846.6001054842828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764709.7218299279,
            "unit": "ns",
            "range": "± 304.75573668006535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97606.72043010753,
            "unit": "ns",
            "range": "± 7437.43643650674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209564.48936170212,
            "unit": "ns",
            "range": "± 8009.478495948303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179033.8142857143,
            "unit": "ns",
            "range": "± 8728.743602492505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3955810.5714285714,
            "unit": "ns",
            "range": "± 49464.80723117783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9841770.153846154,
            "unit": "ns",
            "range": "± 101909.28813479673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19644.197802197803,
            "unit": "ns",
            "range": "± 1843.8861691774807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55881.141304347824,
            "unit": "ns",
            "range": "± 4402.0833543828485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43517.40845070423,
            "unit": "ns",
            "range": "± 2137.6960867616654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102259.45161290323,
            "unit": "ns",
            "range": "± 15991.56703480342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6779.505154639175,
            "unit": "ns",
            "range": "± 1594.8251871529114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18594.870967741936,
            "unit": "ns",
            "range": "± 2164.1148819552395"
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
          "id": "44bc3b1ab669c500557c2d7fdd1cb735a2423d4b",
          "message": "Merge pull request #3019 from greymistcube/refactor/parallel-get-state\n\n⚡ Parallel get states",
          "timestamp": "2023-03-29T12:26:17+09:00",
          "tree_id": "53a12b681c5c39d08102169a09d791e726fae45a",
          "url": "https://github.com/planetarium/libplanet/commit/44bc3b1ab669c500557c2d7fdd1cb735a2423d4b"
        },
        "date": 1680060973231,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 112990,
            "unit": "ns",
            "range": "± 2545.563736550728"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4359033.491536458,
            "unit": "ns",
            "range": "± 9446.791585996598"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6033185.5,
            "unit": "ns",
            "range": "± 55880.69022307878"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24596263.14285714,
            "unit": "ns",
            "range": "± 304054.66299432644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6613928.285714285,
            "unit": "ns",
            "range": "± 43779.54859279629"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27901994.89473684,
            "unit": "ns",
            "range": "± 303242.6522026168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5811584.0375,
            "unit": "ns",
            "range": "± 27619.146758828476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1855660.566796875,
            "unit": "ns",
            "range": "± 13544.652438303512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368109.9758649555,
            "unit": "ns",
            "range": "± 2198.3559847823963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575150.552283654,
            "unit": "ns",
            "range": "± 2386.521625916354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808468.5571664664,
            "unit": "ns",
            "range": "± 1527.1447884004697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751449.9562049279,
            "unit": "ns",
            "range": "± 1100.1912755875467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 83588.98913043478,
            "unit": "ns",
            "range": "± 5309.702356043195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187643.546875,
            "unit": "ns",
            "range": "± 8706.619309886684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172671.2857142857,
            "unit": "ns",
            "range": "± 2311.647079417665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3706462.466666667,
            "unit": "ns",
            "range": "± 28195.961382202713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9265711.57142857,
            "unit": "ns",
            "range": "± 55514.95272407285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14911.083333333334,
            "unit": "ns",
            "range": "± 728.022185662567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45723.895833333336,
            "unit": "ns",
            "range": "± 4679.725125709093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38370.529411764706,
            "unit": "ns",
            "range": "± 1820.7606453019148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83823.06315789474,
            "unit": "ns",
            "range": "± 13997.557795201677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4498.9010989010985,
            "unit": "ns",
            "range": "± 463.67960813343814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14344.670212765957,
            "unit": "ns",
            "range": "± 961.8140945299735"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c800bd80a3f751b67167d9a44ba0f42a9243ebb",
          "message": "Merge pull request #3017 from riemannulus/0.50-maintenance\n\nMake `IValidatorSupportStateDelta` to public",
          "timestamp": "2023-03-29T13:43:13+09:00",
          "tree_id": "1266b1c3e4bd90db72c6a14164aceeb73f8d2b82",
          "url": "https://github.com/planetarium/libplanet/commit/0c800bd80a3f751b67167d9a44ba0f42a9243ebb"
        },
        "date": 1680065924373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133433.0612244898,
            "unit": "ns",
            "range": "± 9628.791079138515"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5244685.927594866,
            "unit": "ns",
            "range": "± 224470.0657940932"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6064371.409090909,
            "unit": "ns",
            "range": "± 226808.05132445408"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29011218,
            "unit": "ns",
            "range": "± 132486.27896571712"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6883864.708333333,
            "unit": "ns",
            "range": "± 257749.76984755255"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31823602.529411763,
            "unit": "ns",
            "range": "± 635149.6115178413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6112389.7859375,
            "unit": "ns",
            "range": "± 56697.50971720218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1875216.3046875,
            "unit": "ns",
            "range": "± 1534.7628028999084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366500.0768229167,
            "unit": "ns",
            "range": "± 4205.715691931002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647081.564322917,
            "unit": "ns",
            "range": "± 2157.2020328904255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839735.8262416294,
            "unit": "ns",
            "range": "± 965.4782709229819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766598.6514423077,
            "unit": "ns",
            "range": "± 307.53452570790955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126184.47368421052,
            "unit": "ns",
            "range": "± 11606.034785552258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227543.0879120879,
            "unit": "ns",
            "range": "± 14089.032855103487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224215.53260869565,
            "unit": "ns",
            "range": "± 12565.596585454094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4125360.2666666666,
            "unit": "ns",
            "range": "± 39326.37840553384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10708770.533333333,
            "unit": "ns",
            "range": "± 94449.1572252097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27125.9793814433,
            "unit": "ns",
            "range": "± 3251.5681344397167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65941.73493975903,
            "unit": "ns",
            "range": "± 3532.031982993115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46728.697916666664,
            "unit": "ns",
            "range": "± 3422.5327528932708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133369.77551020408,
            "unit": "ns",
            "range": "± 18254.676308961523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8331.01030927835,
            "unit": "ns",
            "range": "± 1189.0784640395318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24718.010416666668,
            "unit": "ns",
            "range": "± 3222.0171664569043"
          }
        ]
      }
    ]
  }
}