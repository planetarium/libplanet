window.BENCHMARK_DATA = {
  "lastUpdate": 1702446156245,
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
      },
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
          "id": "96d1945486f2792d80d35a6a48fea7388806b057",
          "message": "test",
          "timestamp": "2023-12-13T14:30:16+09:00",
          "tree_id": "a7e5d3d4770aec493492262b898eb5fc8338b5bc",
          "url": "https://github.com/planetarium/libplanet/commit/96d1945486f2792d80d35a6a48fea7388806b057"
        },
        "date": 1702446107988,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971455.6701030928,
            "unit": "ns",
            "range": "± 107670.05828869063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1818902.7472527472,
            "unit": "ns",
            "range": "± 107622.32248899061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1391826.6666666667,
            "unit": "ns",
            "range": "± 139108.8239432582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4992685.416666667,
            "unit": "ns",
            "range": "± 196711.25614321034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35200,
            "unit": "ns",
            "range": "± 1482.7825423158347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5259866.666666667,
            "unit": "ns",
            "range": "± 73567.74008322114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13551807.692307692,
            "unit": "ns",
            "range": "± 194171.07775334985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33684978.571428575,
            "unit": "ns",
            "range": "± 338801.7849797939"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69637071.42857143,
            "unit": "ns",
            "range": "± 875894.6823137441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131665140,
            "unit": "ns",
            "range": "± 2174924.6866435236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3321180.0520833335,
            "unit": "ns",
            "range": "± 19275.905184547155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1034663.0709134615,
            "unit": "ns",
            "range": "± 1722.5704710238847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723813.1310096154,
            "unit": "ns",
            "range": "± 5420.763542828814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901786.640625,
            "unit": "ns",
            "range": "± 12043.474764634562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614753.3203125,
            "unit": "ns",
            "range": "± 1401.4333855965829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566835.6724330357,
            "unit": "ns",
            "range": "± 2558.7071186040826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2207034.4827586208,
            "unit": "ns",
            "range": "± 54254.13924868557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307286.7924528304,
            "unit": "ns",
            "range": "± 95384.89446152815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2945360.714285714,
            "unit": "ns",
            "range": "± 82771.40022838321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2683297.8260869565,
            "unit": "ns",
            "range": "± 161889.36154002693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6005893.75,
            "unit": "ns",
            "range": "± 275839.45576574584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169040.9836065574,
            "unit": "ns",
            "range": "± 6204.202260005723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161469.81132075473,
            "unit": "ns",
            "range": "± 6742.505380781641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146866.66666666666,
            "unit": "ns",
            "range": "± 4354.572177674256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2796615.1515151514,
            "unit": "ns",
            "range": "± 87661.47287011311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2644326.470588235,
            "unit": "ns",
            "range": "± 53816.89476144741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12055.421686746988,
            "unit": "ns",
            "range": "± 1172.78623965077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57112.22222222222,
            "unit": "ns",
            "range": "± 4382.80162252662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46251.063829787236,
            "unit": "ns",
            "range": "± 3343.1600748699616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56645.454545454544,
            "unit": "ns",
            "range": "± 15975.91473365436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2102.061855670103,
            "unit": "ns",
            "range": "± 309.22597637868967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9308.510638297872,
            "unit": "ns",
            "range": "± 1334.4613165101316"
          }
        ]
      }
    ]
  }
}