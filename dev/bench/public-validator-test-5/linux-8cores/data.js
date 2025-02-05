window.BENCHMARK_DATA = {
  "lastUpdate": 1738716714785,
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "062b3c3c638f25bc55ee47f908b08c8972766274",
          "message": "temp: remove static validator from NetMQTransport\n\n(cherry picked from commit d176fe70fd9eb51970e4c8f704a8d7364e326408)",
          "timestamp": "2024-12-17T17:42:39+09:00",
          "tree_id": "620cbdda96fb6d454ac29d56e5a4469a5e845cff",
          "url": "https://github.com/planetarium/libplanet/commit/062b3c3c638f25bc55ee47f908b08c8972766274"
        },
        "date": 1737091541029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999695.5333333333,
            "unit": "ns",
            "range": "± 71847.26371295014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1912406.5882352942,
            "unit": "ns",
            "range": "± 91535.3797919894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574531.6232876712,
            "unit": "ns",
            "range": "± 76126.47731789388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7771357.693548387,
            "unit": "ns",
            "range": "± 227171.59845183397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3874452.477764423,
            "unit": "ns",
            "range": "± 6049.8106669284125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233094.9458705357,
            "unit": "ns",
            "range": "± 2309.630434713628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763617.2580915178,
            "unit": "ns",
            "range": "± 579.2568964883959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946098.783954327,
            "unit": "ns",
            "range": "± 2058.5787302542135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618380.0123948317,
            "unit": "ns",
            "range": "± 452.1230109956286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565631.0365885417,
            "unit": "ns",
            "range": "± 785.3897538095782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11217376.6,
            "unit": "ns",
            "range": "± 157706.96724703428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27888808.766666666,
            "unit": "ns",
            "range": "± 176264.23171091205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69739593,
            "unit": "ns",
            "range": "± 358875.5494969172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139632659.8,
            "unit": "ns",
            "range": "± 547409.4479336547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280674443.34615386,
            "unit": "ns",
            "range": "± 1570752.014938431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99691.27647058823,
            "unit": "ns",
            "range": "± 5786.445048099728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183618.63513513515,
            "unit": "ns",
            "range": "± 9170.771730084876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171707.0652173913,
            "unit": "ns",
            "range": "± 3342.424444322998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809275.5384615385,
            "unit": "ns",
            "range": "± 20121.455060935103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2800129.3666666667,
            "unit": "ns",
            "range": "± 49633.58972203439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15194.642857142857,
            "unit": "ns",
            "range": "± 1042.7211257242975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56794.3085106383,
            "unit": "ns",
            "range": "± 4204.358212505991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50466.75,
            "unit": "ns",
            "range": "± 890.6163034663132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51923,
            "unit": "ns",
            "range": "± 7925.405092251667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2669.326530612245,
            "unit": "ns",
            "range": "± 322.42972623664076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10721.082417582418,
            "unit": "ns",
            "range": "± 910.2891490062566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30773.037037037036,
            "unit": "ns",
            "range": "± 846.8124159495229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2518900.5,
            "unit": "ns",
            "range": "± 46457.82861600708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2547094.066666667,
            "unit": "ns",
            "range": "± 42609.371007304195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3058826.1363636362,
            "unit": "ns",
            "range": "± 74288.6314013155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2555006.933333333,
            "unit": "ns",
            "range": "± 38915.61716525104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3204823.8666666667,
            "unit": "ns",
            "range": "± 54569.513348790366"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "f6ce114ac02a1034a302f1f68bdbac7d63156eb3",
          "message": "log",
          "timestamp": "2025-02-04T16:16:08+09:00",
          "tree_id": "a5a22b529c593808881ea6a80a2009ce616a6016",
          "url": "https://github.com/planetarium/libplanet/commit/f6ce114ac02a1034a302f1f68bdbac7d63156eb3"
        },
        "date": 1738653961619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37178.397959183676,
            "unit": "ns",
            "range": "± 7665.8670120333645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3963606.477120536,
            "unit": "ns",
            "range": "± 16285.158735697665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1243097.4234375,
            "unit": "ns",
            "range": "± 2857.6186319375893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778189.6675130208,
            "unit": "ns",
            "range": "± 1290.1263324269064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010923.4090401786,
            "unit": "ns",
            "range": "± 3893.275130300228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637022.3901692708,
            "unit": "ns",
            "range": "± 1450.6058168868653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581074.6114583333,
            "unit": "ns",
            "range": "± 693.4913847688887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2453478.55,
            "unit": "ns",
            "range": "± 54798.42044926305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2650432.9411764704,
            "unit": "ns",
            "range": "± 52783.254615539045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3058895.8260869565,
            "unit": "ns",
            "range": "± 77181.56974637037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2621241.4444444445,
            "unit": "ns",
            "range": "± 85026.64149360798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3394951,
            "unit": "ns",
            "range": "± 74940.96230928788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11457873.7,
            "unit": "ns",
            "range": "± 166883.85790388988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28634894.266666666,
            "unit": "ns",
            "range": "± 331708.86634548905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70997151,
            "unit": "ns",
            "range": "± 576492.8397035821"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140265895.73333332,
            "unit": "ns",
            "range": "± 1182646.4307213393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288865116.7,
            "unit": "ns",
            "range": "± 3008248.1518153716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114604.12087912088,
            "unit": "ns",
            "range": "± 7350.183472895482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195433.3404255319,
            "unit": "ns",
            "range": "± 7625.447773813439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185929.04081632654,
            "unit": "ns",
            "range": "± 11655.983590509828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3037454.1666666665,
            "unit": "ns",
            "range": "± 44914.2849622107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2904886.3571428573,
            "unit": "ns",
            "range": "± 38683.725201666166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15028.755102040815,
            "unit": "ns",
            "range": "± 3084.338707753894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62519.62365591398,
            "unit": "ns",
            "range": "± 4318.180398576663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50937.58823529412,
            "unit": "ns",
            "range": "± 1011.7665280848844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63874.09574468085,
            "unit": "ns",
            "range": "± 9080.067298870901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3019.673469387755,
            "unit": "ns",
            "range": "± 419.10116819901305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12052.533333333333,
            "unit": "ns",
            "range": "± 928.1515664680411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040732.3707865168,
            "unit": "ns",
            "range": "± 64066.59113027738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2020694.3448275863,
            "unit": "ns",
            "range": "± 58750.92240447675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648695.524390244,
            "unit": "ns",
            "range": "± 80278.37932234841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8007530.612903226,
            "unit": "ns",
            "range": "± 236914.227664877"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "91a2e383e6ff89be523e25b7561726a60e5f93b5",
          "message": "log",
          "timestamp": "2025-02-04T16:30:01+09:00",
          "tree_id": "7715dffc173f8797352199a160f6b763c2650064",
          "url": "https://github.com/planetarium/libplanet/commit/91a2e383e6ff89be523e25b7561726a60e5f93b5"
        },
        "date": 1738654749568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31423.258620689656,
            "unit": "ns",
            "range": "± 1368.6294407095777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3999402.964583333,
            "unit": "ns",
            "range": "± 16149.61992897185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1249267.8303385417,
            "unit": "ns",
            "range": "± 2875.09709852962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 788591.3848958333,
            "unit": "ns",
            "range": "± 1760.222584276814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2005830.7252604167,
            "unit": "ns",
            "range": "± 4667.664742857061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635429.704296875,
            "unit": "ns",
            "range": "± 788.6430811689316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576758.8509347098,
            "unit": "ns",
            "range": "± 1088.4791906129208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433078.1818181816,
            "unit": "ns",
            "range": "± 76008.63380253858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2580229.6333333333,
            "unit": "ns",
            "range": "± 34189.990600564175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3274383.8,
            "unit": "ns",
            "range": "± 84727.28987610781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2594574.1923076925,
            "unit": "ns",
            "range": "± 73595.57143146513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3353363.3,
            "unit": "ns",
            "range": "± 36509.88824023275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11621161,
            "unit": "ns",
            "range": "± 112804.49140045526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28186431.966666665,
            "unit": "ns",
            "range": "± 449785.2241304997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69702355.14285715,
            "unit": "ns",
            "range": "± 1045799.3204477695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143873542.5,
            "unit": "ns",
            "range": "± 1451338.144559555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285161973.93333334,
            "unit": "ns",
            "range": "± 3400298.5610869625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 124245.6,
            "unit": "ns",
            "range": "± 8188.396921020025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197980.3111111111,
            "unit": "ns",
            "range": "± 11313.80547637171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174165.26315789475,
            "unit": "ns",
            "range": "± 9974.463366582075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2993832.8571428573,
            "unit": "ns",
            "range": "± 50527.16253600196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860643.2352941176,
            "unit": "ns",
            "range": "± 55441.23988684936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16737.77894736842,
            "unit": "ns",
            "range": "± 1896.831760386684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65683.36734693877,
            "unit": "ns",
            "range": "± 8000.376723588406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51508.4,
            "unit": "ns",
            "range": "± 2197.748145514201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66886.47959183673,
            "unit": "ns",
            "range": "± 11953.948456066757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3073.340425531915,
            "unit": "ns",
            "range": "± 470.5896850564591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12611.608695652174,
            "unit": "ns",
            "range": "± 1119.7536174889538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1053614.8076923077,
            "unit": "ns",
            "range": "± 69078.98466259753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011869.5813953488,
            "unit": "ns",
            "range": "± 73160.81522113185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686865.3461538462,
            "unit": "ns",
            "range": "± 86764.12151671297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8239234.98,
            "unit": "ns",
            "range": "± 282695.95960039354"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e648b510871b087fdfabf9be6606d86a03f936a1",
          "message": "log",
          "timestamp": "2025-02-04T16:41:32+09:00",
          "tree_id": "92bd68940fca6d32e028dbbe8e3bf85bb550524d",
          "url": "https://github.com/planetarium/libplanet/commit/e648b510871b087fdfabf9be6606d86a03f936a1"
        },
        "date": 1738655475013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31594.8661971831,
            "unit": "ns",
            "range": "± 1050.3139291174753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3931090.015066964,
            "unit": "ns",
            "range": "± 18189.226656467723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1252980.5541666667,
            "unit": "ns",
            "range": "± 2726.034736622034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 789583.9908203125,
            "unit": "ns",
            "range": "± 1416.294853480901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2001887.0377604167,
            "unit": "ns",
            "range": "± 2684.003742428058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631915.3570033482,
            "unit": "ns",
            "range": "± 919.2010674491394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587187.7686848958,
            "unit": "ns",
            "range": "± 747.6889949966687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2416518.8125,
            "unit": "ns",
            "range": "± 44826.736535567325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2586223.382352941,
            "unit": "ns",
            "range": "± 48625.678867860486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3111005.289473684,
            "unit": "ns",
            "range": "± 105462.59777398934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2670474.8,
            "unit": "ns",
            "range": "± 48567.66465634753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3302933.3333333335,
            "unit": "ns",
            "range": "± 54792.281510220375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11729006.4,
            "unit": "ns",
            "range": "± 209133.87158188547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29577668.61764706,
            "unit": "ns",
            "range": "± 603988.3485264722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 74185419.4,
            "unit": "ns",
            "range": "± 704113.3763716912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143732680.33333334,
            "unit": "ns",
            "range": "± 1802709.5320425173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287387451,
            "unit": "ns",
            "range": "± 1500405.156407518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110915.27586206897,
            "unit": "ns",
            "range": "± 7929.981459390119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198757.25531914894,
            "unit": "ns",
            "range": "± 11993.736660186272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173589.56470588237,
            "unit": "ns",
            "range": "± 9326.12000097302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018039.7666666666,
            "unit": "ns",
            "range": "± 54781.057989922374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3012428.1333333333,
            "unit": "ns",
            "range": "± 48778.89684933532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13415.447916666666,
            "unit": "ns",
            "range": "± 1562.2551639405042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63000.35263157895,
            "unit": "ns",
            "range": "± 5593.27543624584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51264.666666666664,
            "unit": "ns",
            "range": "± 982.0993719937857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68248.48958333333,
            "unit": "ns",
            "range": "± 11235.751447471774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3063.021505376344,
            "unit": "ns",
            "range": "± 477.2683134367426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12431.9,
            "unit": "ns",
            "range": "± 1253.905494799206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026055.7790697674,
            "unit": "ns",
            "range": "± 52780.21514492654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1997521.2765957448,
            "unit": "ns",
            "range": "± 76784.60127998439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1733254.129213483,
            "unit": "ns",
            "range": "± 95129.3375109982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8107273.484848484,
            "unit": "ns",
            "range": "± 253184.0496003008"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "96227333ba20e4f98422e85ec218f0b928e6f275",
          "message": "add bencoded of evidence",
          "timestamp": "2025-02-05T09:43:12+09:00",
          "tree_id": "78889c73b31247f23fba8b2cd983fe49acdce94d",
          "url": "https://github.com/planetarium/libplanet/commit/96227333ba20e4f98422e85ec218f0b928e6f275"
        },
        "date": 1738716689036,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30348.76923076923,
            "unit": "ns",
            "range": "± 829.9355424461496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3807775.1627604165,
            "unit": "ns",
            "range": "± 7311.928313977377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1239415.7830403645,
            "unit": "ns",
            "range": "± 895.6324505031811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778556.8131510416,
            "unit": "ns",
            "range": "± 2589.8384327900258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2018135.76640625,
            "unit": "ns",
            "range": "± 8242.592222905954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 649008.4095703125,
            "unit": "ns",
            "range": "± 1838.6020497698328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566726.7303989956,
            "unit": "ns",
            "range": "± 2059.976538569071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2380441.785714286,
            "unit": "ns",
            "range": "± 32445.779207373434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538878.875,
            "unit": "ns",
            "range": "± 48738.695353726216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3088724.8846153845,
            "unit": "ns",
            "range": "± 51406.00490464523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2543022.5555555555,
            "unit": "ns",
            "range": "± 69395.25196755918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3213686.769230769,
            "unit": "ns",
            "range": "± 28869.623979059856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11330350.833333334,
            "unit": "ns",
            "range": "± 104254.42527686547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27474207.64285714,
            "unit": "ns",
            "range": "± 152408.58258571173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69708779.16666667,
            "unit": "ns",
            "range": "± 365046.3733479951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139822824.36666667,
            "unit": "ns",
            "range": "± 624467.4591888981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276794400,
            "unit": "ns",
            "range": "± 1076032.3086854245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 102634.20224719102,
            "unit": "ns",
            "range": "± 6887.867893457464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192143.05681818182,
            "unit": "ns",
            "range": "± 10580.782521479663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 182556.20512820513,
            "unit": "ns",
            "range": "± 6369.7262569433915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2875292.076923077,
            "unit": "ns",
            "range": "± 18522.193001286945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2778865.933333333,
            "unit": "ns",
            "range": "± 41235.65836136532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11275.408602150537,
            "unit": "ns",
            "range": "± 993.2239363563918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56076.98591549296,
            "unit": "ns",
            "range": "± 2660.99163843083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49802.625,
            "unit": "ns",
            "range": "± 637.2320221081172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52156.5412371134,
            "unit": "ns",
            "range": "± 8182.0085361591855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2509.2659574468084,
            "unit": "ns",
            "range": "± 237.36620115825093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11115.054347826086,
            "unit": "ns",
            "range": "± 932.6213483678347"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 966532.8977272727,
            "unit": "ns",
            "range": "± 57480.69262665504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1879808.9583333333,
            "unit": "ns",
            "range": "± 45531.936407775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1561504.0588235294,
            "unit": "ns",
            "range": "± 80866.01797084349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7693750.678571428,
            "unit": "ns",
            "range": "± 218101.8665202882"
          }
        ]
      }
    ]
  }
}