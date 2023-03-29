window.BENCHMARK_DATA = {
  "lastUpdate": 1680081159826,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "12163fe108b4505f0d99df93d9f203433580d4da",
          "message": "WIP",
          "timestamp": "2023-03-24T18:58:26+09:00",
          "tree_id": "826e80a5e0b2b83e09fc95e946af26b77acc2356",
          "url": "https://github.com/planetarium/libplanet/commit/12163fe108b4505f0d99df93d9f203433580d4da"
        },
        "date": 1679652702393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3555014.8,
            "unit": "ns",
            "range": "± 53752.40526605032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3659683.6326530613,
            "unit": "ns",
            "range": "± 139336.39478893846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4187629.8666666667,
            "unit": "ns",
            "range": "± 65189.348115280605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680514.315789473,
            "unit": "ns",
            "range": "± 157640.64159588557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7883910.555555556,
            "unit": "ns",
            "range": "± 191444.30398247248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7758707.142857143,
            "unit": "ns",
            "range": "± 92243.3515018059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21263530.633333333,
            "unit": "ns",
            "range": "± 211443.87783991513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54195108.666666664,
            "unit": "ns",
            "range": "± 438910.5781317561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108064128.73333333,
            "unit": "ns",
            "range": "± 1078574.3957994122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217889259.7857143,
            "unit": "ns",
            "range": "± 3282853.7837574086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461140.8686868686,
            "unit": "ns",
            "range": "± 90115.82783394307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2657567.882352941,
            "unit": "ns",
            "range": "± 52770.870232641544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282160.7625,
            "unit": "ns",
            "range": "± 116755.90956179093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5616595.097560976,
            "unit": "ns",
            "range": "± 201409.67205496924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50607.59322033898,
            "unit": "ns",
            "range": "± 2241.459062358513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5987319.911830357,
            "unit": "ns",
            "range": "± 17313.88269658251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858026.033203125,
            "unit": "ns",
            "range": "± 2634.4635588339916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350954.5150669643,
            "unit": "ns",
            "range": "± 3346.4200409960595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2653574.1421875,
            "unit": "ns",
            "range": "± 3196.279653007215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851340.8299278846,
            "unit": "ns",
            "range": "± 149.30088552060244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762347.4296875,
            "unit": "ns",
            "range": "± 232.0752180884784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298541.8947368421,
            "unit": "ns",
            "range": "± 10295.240143398396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285354.77777777775,
            "unit": "ns",
            "range": "± 5794.257822397818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232896.07692307694,
            "unit": "ns",
            "range": "± 2632.0078983397975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4626634.533333333,
            "unit": "ns",
            "range": "± 34428.42725727569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4176337.076923077,
            "unit": "ns",
            "range": "± 19524.478590825154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20086.271739130436,
            "unit": "ns",
            "range": "± 1575.9479903231374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92878.56410256411,
            "unit": "ns",
            "range": "± 4803.403808258073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81021.71666666666,
            "unit": "ns",
            "range": "± 3640.850855536365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 197581.74489795917,
            "unit": "ns",
            "range": "± 17389.522607647425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6792.723404255319,
            "unit": "ns",
            "range": "± 886.5399627021087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20508.65263157895,
            "unit": "ns",
            "range": "± 1589.5580462212856"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "93bbbf10f6e654bff312e1d71d40c8ee1c36d884",
          "message": "WIP",
          "timestamp": "2023-03-27T13:14:26+09:00",
          "tree_id": "ba5ebada552297745c2adbf08bfb456eb2452192",
          "url": "https://github.com/planetarium/libplanet/commit/93bbbf10f6e654bff312e1d71d40c8ee1c36d884"
        },
        "date": 1679891653354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3914692.414141414,
            "unit": "ns",
            "range": "± 374123.15460472094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4187994.288659794,
            "unit": "ns",
            "range": "± 415326.9464928092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5266453.5,
            "unit": "ns",
            "range": "± 453563.62468271895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5396335.701030928,
            "unit": "ns",
            "range": "± 429381.42458881484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9741229.37113402,
            "unit": "ns",
            "range": "± 684772.7446872023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9267386.278350515,
            "unit": "ns",
            "range": "± 567298.3986600024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24634611.53763441,
            "unit": "ns",
            "range": "± 1842269.490995712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67200225.17171717,
            "unit": "ns",
            "range": "± 4958654.27418199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127343704.44444445,
            "unit": "ns",
            "range": "± 6218903.990313952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274883077.25396824,
            "unit": "ns",
            "range": "± 12547248.279615045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697686.0208333333,
            "unit": "ns",
            "range": "± 176095.27375838815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3512154.6979166665,
            "unit": "ns",
            "range": "± 367482.9048022755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2725220.7604166665,
            "unit": "ns",
            "range": "± 294651.40485821705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7764124.747368421,
            "unit": "ns",
            "range": "± 659609.0122385361"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58803.3,
            "unit": "ns",
            "range": "± 10934.175343256507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7343527.9026692705,
            "unit": "ns",
            "range": "± 190787.55678934057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2302213.315234375,
            "unit": "ns",
            "range": "± 52553.87766908832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1717811.9813878676,
            "unit": "ns",
            "range": "± 34950.65337808725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3296524.864169034,
            "unit": "ns",
            "range": "± 80227.45708024885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1082827.7977120536,
            "unit": "ns",
            "range": "± 19197.80944617159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1006663.3059082031,
            "unit": "ns",
            "range": "± 22110.866095008678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367234.94680851063,
            "unit": "ns",
            "range": "± 52532.019446897175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361377.38144329895,
            "unit": "ns",
            "range": "± 50576.52219892548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294639.6630434783,
            "unit": "ns",
            "range": "± 42973.20322060085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5508944.531914894,
            "unit": "ns",
            "range": "± 410601.7071520614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5056754.666666667,
            "unit": "ns",
            "range": "± 370440.2732737942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23738.525773195877,
            "unit": "ns",
            "range": "± 7723.590784479695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107710.62637362638,
            "unit": "ns",
            "range": "± 19532.470958579233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85281.52380952382,
            "unit": "ns",
            "range": "± 10100.43943750724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248233.91666666666,
            "unit": "ns",
            "range": "± 45137.9013115811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5620.8351648351645,
            "unit": "ns",
            "range": "± 520.8060049094045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19535.98795180723,
            "unit": "ns",
            "range": "± 2357.7969176184633"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "9f69d9779586c45eab916afe354cddb92110b490",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T15:49:56+09:00",
          "tree_id": "59d858b6e6543dafab428524506d74ffd69733e1",
          "url": "https://github.com/planetarium/libplanet/commit/9f69d9779586c45eab916afe354cddb92110b490"
        },
        "date": 1679900543887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248109.8333333335,
            "unit": "ns",
            "range": "± 82407.38522817557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376531.214285714,
            "unit": "ns",
            "range": "± 37674.03173821575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4289174.6,
            "unit": "ns",
            "range": "± 66604.5761392242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4306819.531914894,
            "unit": "ns",
            "range": "± 150775.59596370664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7501695.375,
            "unit": "ns",
            "range": "± 140128.66607223282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7713878.461538462,
            "unit": "ns",
            "range": "± 36735.23042125316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19468056.6,
            "unit": "ns",
            "range": "± 205862.4155101793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50084189,
            "unit": "ns",
            "range": "± 240408.93691464255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99771665.07142857,
            "unit": "ns",
            "range": "± 663847.4015086326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199595642.93333334,
            "unit": "ns",
            "range": "± 1548197.2223722693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357711.8105263158,
            "unit": "ns",
            "range": "± 107014.02813205765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2614105.7435897435,
            "unit": "ns",
            "range": "± 90669.10800723286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2125470.090909091,
            "unit": "ns",
            "range": "± 95192.54559232507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5332879.391304348,
            "unit": "ns",
            "range": "± 134278.89033843606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45862.88333333333,
            "unit": "ns",
            "range": "± 1972.4233059925546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5946680.983333333,
            "unit": "ns",
            "range": "± 19481.519891682263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1876660.0477864584,
            "unit": "ns",
            "range": "± 12095.976670314263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340166.7755301339,
            "unit": "ns",
            "range": "± 919.161884920243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556932.412667411,
            "unit": "ns",
            "range": "± 1646.9757221060506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819258.8065655048,
            "unit": "ns",
            "range": "± 564.4114796514236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739338.5679408482,
            "unit": "ns",
            "range": "± 336.77202394884415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280648.8965517241,
            "unit": "ns",
            "range": "± 5146.513038281549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274117.26666666666,
            "unit": "ns",
            "range": "± 5005.1719175078815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230718.63157894736,
            "unit": "ns",
            "range": "± 4369.578675475427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4410356.8,
            "unit": "ns",
            "range": "± 39472.95131967857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958532.785714286,
            "unit": "ns",
            "range": "± 31127.151220508367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16864.031578947368,
            "unit": "ns",
            "range": "± 1496.9426746981953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85797.70707070707,
            "unit": "ns",
            "range": "± 5668.5739095842155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73985.36111111111,
            "unit": "ns",
            "range": "± 2046.2133131753085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175288.0612244898,
            "unit": "ns",
            "range": "± 14138.897194353654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5371.092783505154,
            "unit": "ns",
            "range": "± 476.0618412750733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16091.5,
            "unit": "ns",
            "range": "± 1453.6541252269997"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "208861e57356cf7ef97bee1a0e0fbd0b798b4879",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T18:08:33+09:00",
          "tree_id": "5a4efceefc64fc75df57dbae61720ea87d3d8fd5",
          "url": "https://github.com/planetarium/libplanet/commit/208861e57356cf7ef97bee1a0e0fbd0b798b4879"
        },
        "date": 1679908896517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308751.25,
            "unit": "ns",
            "range": "± 61104.537432719895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3495613.7333333334,
            "unit": "ns",
            "range": "± 65041.246946475294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4256380.375,
            "unit": "ns",
            "range": "± 129275.32208848155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4499828.196078432,
            "unit": "ns",
            "range": "± 182917.36297213772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7684015.653846154,
            "unit": "ns",
            "range": "± 209387.99983493652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7627781.642857143,
            "unit": "ns",
            "range": "± 90375.61178055058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20805341.133333333,
            "unit": "ns",
            "range": "± 277037.17041835655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51634509.84615385,
            "unit": "ns",
            "range": "± 790819.7684413567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102008825.78571428,
            "unit": "ns",
            "range": "± 847147.7765950128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204460057.14285713,
            "unit": "ns",
            "range": "± 2176448.9940941683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481286.9891304348,
            "unit": "ns",
            "range": "± 84025.91593525252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2717136.34375,
            "unit": "ns",
            "range": "± 83102.12901298575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2363186.8571428573,
            "unit": "ns",
            "range": "± 112757.51450471918"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5739994.131578947,
            "unit": "ns",
            "range": "± 197533.58725107866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48385.3125,
            "unit": "ns",
            "range": "± 2130.294173552802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5848296.582291666,
            "unit": "ns",
            "range": "± 27953.789169892945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840403.0608072917,
            "unit": "ns",
            "range": "± 7640.279096435279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337760.7876302083,
            "unit": "ns",
            "range": "± 9664.967029265357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618187.4953125,
            "unit": "ns",
            "range": "± 9867.775661554906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825604.7405348558,
            "unit": "ns",
            "range": "± 1473.314186702899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766199.0417317708,
            "unit": "ns",
            "range": "± 1140.020770531601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284319.84375,
            "unit": "ns",
            "range": "± 8761.208861608875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268047.78571428574,
            "unit": "ns",
            "range": "± 7494.157592848914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230077.8,
            "unit": "ns",
            "range": "± 3896.400448765868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4514363.4,
            "unit": "ns",
            "range": "± 45257.25294485167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3983873.1333333333,
            "unit": "ns",
            "range": "± 60234.07116985568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18357.37634408602,
            "unit": "ns",
            "range": "± 1297.4375909760722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85924.87012987013,
            "unit": "ns",
            "range": "± 4282.556978299939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74503.34,
            "unit": "ns",
            "range": "± 2982.3991958947195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 187084.05102040817,
            "unit": "ns",
            "range": "± 17613.77008085684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5673.284210526316,
            "unit": "ns",
            "range": "± 668.3236199015065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17806.757894736842,
            "unit": "ns",
            "range": "± 1464.9722364357067"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "fc2efd2d2be395c0acfd766af4437b99d4474fb4",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-29T17:19:27+09:00",
          "tree_id": "eacb9ba09861dfee507f30a8055141ba3f5ec132",
          "url": "https://github.com/planetarium/libplanet/commit/fc2efd2d2be395c0acfd766af4437b99d4474fb4"
        },
        "date": 1680078766051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250922.8,
            "unit": "ns",
            "range": "± 57641.72463861821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3433053.285714286,
            "unit": "ns",
            "range": "± 51883.235874752114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4244978.928571428,
            "unit": "ns",
            "range": "± 40050.11985089968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4334375.25,
            "unit": "ns",
            "range": "± 122931.7362774741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7700953.391304348,
            "unit": "ns",
            "range": "± 191279.46072239176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7559546.857142857,
            "unit": "ns",
            "range": "± 36405.88130605177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19221366.285714287,
            "unit": "ns",
            "range": "± 55865.344977459405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48992310.93333333,
            "unit": "ns",
            "range": "± 242659.51858680704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98333714.13333334,
            "unit": "ns",
            "range": "± 830594.0456009152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196099982.73333332,
            "unit": "ns",
            "range": "± 793628.5681808467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337428.5483870967,
            "unit": "ns",
            "range": "± 83544.70395835681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2587202.0476190476,
            "unit": "ns",
            "range": "± 58932.21303283646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2137672.6483516484,
            "unit": "ns",
            "range": "± 115147.90829396324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5313032,
            "unit": "ns",
            "range": "± 69597.93338885861"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46650.754385964916,
            "unit": "ns",
            "range": "± 1912.1751571060727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6152234.234375,
            "unit": "ns",
            "range": "± 19079.665713021215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831085.5474330357,
            "unit": "ns",
            "range": "± 1260.287887991525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1351452.6592447916,
            "unit": "ns",
            "range": "± 1001.0718734531052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594386.3341346155,
            "unit": "ns",
            "range": "± 3839.1554369816768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788252.3456333706,
            "unit": "ns",
            "range": "± 1026.2897688243104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743270.4115835336,
            "unit": "ns",
            "range": "± 631.9777297628182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327426.2727272727,
            "unit": "ns",
            "range": "± 10219.077524637214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267607.55555555556,
            "unit": "ns",
            "range": "± 8926.187112550015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227670.64285714287,
            "unit": "ns",
            "range": "± 2961.3737094890184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5524682.266666667,
            "unit": "ns",
            "range": "± 30065.751282971858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3907258.714285714,
            "unit": "ns",
            "range": "± 49764.49027697835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17586.09574468085,
            "unit": "ns",
            "range": "± 1279.7724685972685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85209.30952380953,
            "unit": "ns",
            "range": "± 4583.260188035751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74647.64583333333,
            "unit": "ns",
            "range": "± 2842.918963600491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 179640.4081632653,
            "unit": "ns",
            "range": "± 17885.608400972058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4977.894736842105,
            "unit": "ns",
            "range": "± 520.2656742285764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16088.172043010753,
            "unit": "ns",
            "range": "± 1125.3839405099652"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "f0b1c84db8ae7131e693f29534eda43ea0da7686",
          "message": "Extension methods to refine transactions\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-29T17:55:11+09:00",
          "tree_id": "577fbd86f3997028bf41a163a6c9b68c4bf9852f",
          "url": "https://github.com/planetarium/libplanet/commit/f0b1c84db8ae7131e693f29534eda43ea0da7686"
        },
        "date": 1680081135568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4185278.6129032257,
            "unit": "ns",
            "range": "± 126201.91834085496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4400764.434782608,
            "unit": "ns",
            "range": "± 98995.15282294754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5123975.217391305,
            "unit": "ns",
            "range": "± 127300.73784830676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5792671.302325581,
            "unit": "ns",
            "range": "± 212674.34819634398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9368199.857142856,
            "unit": "ns",
            "range": "± 164636.11414260854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9622951.833333334,
            "unit": "ns",
            "range": "± 125653.04656570179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27124497,
            "unit": "ns",
            "range": "± 292962.3371795295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69094650.43333334,
            "unit": "ns",
            "range": "± 324880.388756158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129812096.8,
            "unit": "ns",
            "range": "± 856273.6928765575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259313143.53333333,
            "unit": "ns",
            "range": "± 1311592.3811925752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1759394.0918367347,
            "unit": "ns",
            "range": "± 119161.28334849169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3248743.7291666665,
            "unit": "ns",
            "range": "± 128155.1425122275"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2740582.579710145,
            "unit": "ns",
            "range": "± 124624.82938302154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6761787.739130435,
            "unit": "ns",
            "range": "± 168129.1840634396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60416.170454545456,
            "unit": "ns",
            "range": "± 3347.2623819130017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7296295.655208333,
            "unit": "ns",
            "range": "± 31684.378035128233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2188997.158761161,
            "unit": "ns",
            "range": "± 8276.807695900612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1619387.9167131695,
            "unit": "ns",
            "range": "± 3111.0801498104784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3136938.4618489584,
            "unit": "ns",
            "range": "± 9696.568565323048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 991549.6335100447,
            "unit": "ns",
            "range": "± 2356.8421697955428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 905693.26875,
            "unit": "ns",
            "range": "± 2152.680316627847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 410139.48148148146,
            "unit": "ns",
            "range": "± 11324.955005413658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332278.96428571426,
            "unit": "ns",
            "range": "± 14186.246190607275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290562.86,
            "unit": "ns",
            "range": "± 7344.495330291024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6962750.266666667,
            "unit": "ns",
            "range": "± 117539.51016419157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4907953.294117647,
            "unit": "ns",
            "range": "± 100136.91159280672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25311.255319148935,
            "unit": "ns",
            "range": "± 2120.030375802725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113121.4574468085,
            "unit": "ns",
            "range": "± 7167.148153865671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102854.81443298969,
            "unit": "ns",
            "range": "± 7802.198622196577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 235102.3298969072,
            "unit": "ns",
            "range": "± 20545.842766705897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9375.90322580645,
            "unit": "ns",
            "range": "± 1108.3941484684258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24608.882978723403,
            "unit": "ns",
            "range": "± 1903.607779338124"
          }
        ]
      }
    ]
  }
}