window.BENCHMARK_DATA = {
  "lastUpdate": 1702442292020,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5ef1e1094847ca1b7887b0897cefac447dd8a958",
          "message": "test3",
          "timestamp": "2023-12-13T13:24:30+09:00",
          "tree_id": "fe73a0403a8174c1132ef7c299be91fadf3e515f",
          "url": "https://github.com/planetarium/libplanet/commit/5ef1e1094847ca1b7887b0897cefac447dd8a958"
        },
        "date": 1702442239321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996293.8775510204,
            "unit": "ns",
            "range": "± 119158.00116013904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734814.6341463414,
            "unit": "ns",
            "range": "± 61858.53441917134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1410266.3265306123,
            "unit": "ns",
            "range": "± 146525.85356046978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5105872.7272727275,
            "unit": "ns",
            "range": "± 278631.28428262006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34824.7191011236,
            "unit": "ns",
            "range": "± 1837.2583884985459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5044468.75,
            "unit": "ns",
            "range": "± 94924.57159064067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13335538.888888888,
            "unit": "ns",
            "range": "± 284251.62038730836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34160066.666666664,
            "unit": "ns",
            "range": "± 419059.43094824476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65715076.666666664,
            "unit": "ns",
            "range": "± 1039220.1962918891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133567846.66666667,
            "unit": "ns",
            "range": "± 2257578.882300577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3269099.699519231,
            "unit": "ns",
            "range": "± 10796.351602049926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058286.5234375,
            "unit": "ns",
            "range": "± 2492.088348498888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731915.8621651785,
            "unit": "ns",
            "range": "± 1086.8590105682758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1897918.046875,
            "unit": "ns",
            "range": "± 4379.4656069958955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616945.6355168269,
            "unit": "ns",
            "range": "± 2157.000954517916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585515.6640625,
            "unit": "ns",
            "range": "± 848.1528855207331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145991.6666666665,
            "unit": "ns",
            "range": "± 55743.38655775711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271932.6086956523,
            "unit": "ns",
            "range": "± 85793.16744187816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2854968.1818181816,
            "unit": "ns",
            "range": "± 97692.3356893021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2682502,
            "unit": "ns",
            "range": "± 106620.04729746787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5911320.454545454,
            "unit": "ns",
            "range": "± 220669.829741014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176235.61643835617,
            "unit": "ns",
            "range": "± 7597.374726820182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173260.86956521738,
            "unit": "ns",
            "range": "± 10870.819459408916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140731.25,
            "unit": "ns",
            "range": "± 1961.5363876308795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2811428.5714285714,
            "unit": "ns",
            "range": "± 32602.36963005152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2558464.285714286,
            "unit": "ns",
            "range": "± 30547.103781709804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12545.054945054944,
            "unit": "ns",
            "range": "± 1780.7778410486017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57136.55913978495,
            "unit": "ns",
            "range": "± 5369.3329062256435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50314.583333333336,
            "unit": "ns",
            "range": "± 6620.57366200506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62778.42105263158,
            "unit": "ns",
            "range": "± 12277.731642649378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2990.625,
            "unit": "ns",
            "range": "± 638.5968376469082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11725.773195876289,
            "unit": "ns",
            "range": "± 2050.420604743668"
          }
        ]
      }
    ]
  }
}