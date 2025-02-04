window.BENCHMARK_DATA = {
  "lastUpdate": 1738653987570,
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
      }
    ]
  }
}