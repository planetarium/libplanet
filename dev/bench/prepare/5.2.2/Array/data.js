window.BENCHMARK_DATA = {
  "lastUpdate": 1722392705889,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "40b3cc469316c1ab34243c1e7e35eabaa22c6e10",
          "message": "Prepare 5.2.2",
          "timestamp": "2024-07-31T11:08:41+09:00",
          "tree_id": "9dc41c3f7dd933b72c67220cb777d849f7964635",
          "url": "https://github.com/planetarium/libplanet/commit/40b3cc469316c1ab34243c1e7e35eabaa22c6e10"
        },
        "date": 1722392639757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10889806.07142857,
            "unit": "ns",
            "range": "± 75822.23645369912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26686782.5,
            "unit": "ns",
            "range": "± 184259.2721126945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67416770.92857143,
            "unit": "ns",
            "range": "± 77104.76898122678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135825201.92857143,
            "unit": "ns",
            "range": "± 127762.48464147735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273669803.26666665,
            "unit": "ns",
            "range": "± 443444.5907914646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14015.23076923077,
            "unit": "ns",
            "range": "± 189.0661938079509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110038.83018867925,
            "unit": "ns",
            "range": "± 4338.444291961778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105361.97826086957,
            "unit": "ns",
            "range": "± 3568.966432949028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91870.475,
            "unit": "ns",
            "range": "± 3185.7572218048967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3028709.1818181816,
            "unit": "ns",
            "range": "± 154661.16792130566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720683.8,
            "unit": "ns",
            "range": "± 185285.1382014306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5047.2444444444445,
            "unit": "ns",
            "range": "± 418.78525673777466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27270.934782608696,
            "unit": "ns",
            "range": "± 1715.2691699468867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22583.255319148935,
            "unit": "ns",
            "range": "± 1489.9129723893213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29557.58510638298,
            "unit": "ns",
            "range": "± 5042.705318927455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1306.9473684210527,
            "unit": "ns",
            "range": "± 335.3627876317042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4929.066666666667,
            "unit": "ns",
            "range": "± 441.1229745226215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681208.1358024691,
            "unit": "ns",
            "range": "± 33234.59303186707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1253482.3666666667,
            "unit": "ns",
            "range": "± 27425.632849685477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1070812.8484848484,
            "unit": "ns",
            "range": "± 47475.80938257436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9578413.42,
            "unit": "ns",
            "range": "± 1518052.0183997175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189382.3333333335,
            "unit": "ns",
            "range": "± 45430.66981158666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2321410.9272727272,
            "unit": "ns",
            "range": "± 97855.17525231498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2582114.1333333333,
            "unit": "ns",
            "range": "± 46717.38161214986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2315518.6315789474,
            "unit": "ns",
            "range": "± 79378.1621892935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3174759.87,
            "unit": "ns",
            "range": "± 313797.5496458674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3020552.858915441,
            "unit": "ns",
            "range": "± 60945.198959094756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920789.7029947917,
            "unit": "ns",
            "range": "± 6240.802231144851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 610324.1214192709,
            "unit": "ns",
            "range": "± 4864.491504731742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1626269.1304408482,
            "unit": "ns",
            "range": "± 3505.8959966089164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462061.6794596354,
            "unit": "ns",
            "range": "± 1068.6602594381498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417869.10279947915,
            "unit": "ns",
            "range": "± 786.9821596503579"
          }
        ]
      }
    ]
  }
}