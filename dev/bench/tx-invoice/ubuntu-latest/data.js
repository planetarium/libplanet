window.BENCHMARK_DATA = {
  "lastUpdate": 1679891676599,
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
      }
    ]
  }
}