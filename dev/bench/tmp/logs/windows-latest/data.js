window.BENCHMARK_DATA = {
  "lastUpdate": 1708485258754,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c4a796309df66c22cce3355051ffa8b893e3816f",
          "message": "tmp: add logs",
          "timestamp": "2024-02-20T17:59:14+09:00",
          "tree_id": "804a9bc27afc1ff196a1dd7da9418e50258aec91",
          "url": "https://github.com/planetarium/libplanet/commit/c4a796309df66c22cce3355051ffa8b893e3816f"
        },
        "date": 1708420329705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008041.052631579,
            "unit": "ns",
            "range": "± 119969.48680742794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760834.375,
            "unit": "ns",
            "range": "± 80318.37090208614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1569388.775510204,
            "unit": "ns",
            "range": "± 147654.97389526348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11315659.550561797,
            "unit": "ns",
            "range": "± 858018.5272579943"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34574.444444444445,
            "unit": "ns",
            "range": "± 2182.698109268605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5533433.333333333,
            "unit": "ns",
            "range": "± 83880.67772281109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14584271.42857143,
            "unit": "ns",
            "range": "± 140385.22510781337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35215088.461538464,
            "unit": "ns",
            "range": "± 252716.4238775072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69930921.42857143,
            "unit": "ns",
            "range": "± 749275.7140461318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140314033.33333334,
            "unit": "ns",
            "range": "± 1345348.3901771992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3356839.6484375,
            "unit": "ns",
            "range": "± 6179.042106446866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083534.375,
            "unit": "ns",
            "range": "± 2916.2364878629633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742074.0443638393,
            "unit": "ns",
            "range": "± 2036.2778607062448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967216.5104166667,
            "unit": "ns",
            "range": "± 5640.563705523922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647264.58984375,
            "unit": "ns",
            "range": "± 1369.632909379495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586148.3463541666,
            "unit": "ns",
            "range": "± 1351.3775535778575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295683.870967742,
            "unit": "ns",
            "range": "± 64303.846939221265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2413896.7741935486,
            "unit": "ns",
            "range": "± 72208.83825807368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2936869.696969697,
            "unit": "ns",
            "range": "± 84516.63846858975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3059421.4285714286,
            "unit": "ns",
            "range": "± 41542.604239900116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12986050,
            "unit": "ns",
            "range": "± 1602837.3871233598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177924,
            "unit": "ns",
            "range": "± 8941.08101572342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171110.7142857143,
            "unit": "ns",
            "range": "± 7368.105185593785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143884.2105263158,
            "unit": "ns",
            "range": "± 4890.049262770124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3015714.285714286,
            "unit": "ns",
            "range": "± 34902.63065119342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2664364.285714286,
            "unit": "ns",
            "range": "± 33741.200725131675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10866.304347826086,
            "unit": "ns",
            "range": "± 1018.3241106183252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57282.47422680412,
            "unit": "ns",
            "range": "± 6027.212773283601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47102.15053763441,
            "unit": "ns",
            "range": "± 2746.3801667959883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65785.85858585859,
            "unit": "ns",
            "range": "± 18293.07335232862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3133.505154639175,
            "unit": "ns",
            "range": "± 558.0248673467153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11379.591836734693,
            "unit": "ns",
            "range": "± 2134.1097848876693"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "532814416591ec7f436d5d659e31c6a589ce8be5",
          "message": "tmp: logs",
          "timestamp": "2024-02-21T12:00:01+09:00",
          "tree_id": "d395dd51c4a4e7cf6838b57a0757ded6fd9e846d",
          "url": "https://github.com/planetarium/libplanet/commit/532814416591ec7f436d5d659e31c6a589ce8be5"
        },
        "date": 1708485202559,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029886.3636363636,
            "unit": "ns",
            "range": "± 126274.94981154116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1738575.7575757576,
            "unit": "ns",
            "range": "± 81496.13687985661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1559896.7741935484,
            "unit": "ns",
            "range": "± 106873.2889022576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6974670.9677419355,
            "unit": "ns",
            "range": "± 209582.16398912764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35230.85106382979,
            "unit": "ns",
            "range": "± 2748.020855586942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5217028.571428572,
            "unit": "ns",
            "range": "± 61852.11181733196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13454571.42857143,
            "unit": "ns",
            "range": "± 196266.21022153884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32757215.384615384,
            "unit": "ns",
            "range": "± 414825.5272725186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67680784,
            "unit": "ns",
            "range": "± 1773690.4508867003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135754142.85714287,
            "unit": "ns",
            "range": "± 1489366.4867547315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3370817.1037946427,
            "unit": "ns",
            "range": "± 11001.61644128542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071129.00390625,
            "unit": "ns",
            "range": "± 3870.5895611850274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746029.70703125,
            "unit": "ns",
            "range": "± 1424.147070127251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953524.51171875,
            "unit": "ns",
            "range": "± 3097.896471602858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621771.19140625,
            "unit": "ns",
            "range": "± 1529.4528177197424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578626.0184151785,
            "unit": "ns",
            "range": "± 579.9335736075664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2155766.6666666665,
            "unit": "ns",
            "range": "± 55338.22223906104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2361271.264367816,
            "unit": "ns",
            "range": "± 163728.17866892446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781742.8571428573,
            "unit": "ns",
            "range": "± 37883.581064700236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3030924.242424242,
            "unit": "ns",
            "range": "± 345663.52935876383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8032775.675675675,
            "unit": "ns",
            "range": "± 256007.4026766125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176936.11111111112,
            "unit": "ns",
            "range": "± 8385.068982819124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171529.54545454544,
            "unit": "ns",
            "range": "± 9612.374197982934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143130,
            "unit": "ns",
            "range": "± 5012.251656358315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2836178.5714285714,
            "unit": "ns",
            "range": "± 31706.664637227026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486725,
            "unit": "ns",
            "range": "± 48689.43336138377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11844.68085106383,
            "unit": "ns",
            "range": "± 1704.8076876549562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56853.125,
            "unit": "ns",
            "range": "± 7572.289553295447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44868.840579710144,
            "unit": "ns",
            "range": "± 2163.6213761898225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62579.79797979798,
            "unit": "ns",
            "range": "± 14813.162788395533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2931.9148936170213,
            "unit": "ns",
            "range": "± 485.0923348437719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11209.782608695652,
            "unit": "ns",
            "range": "± 1780.8542080876384"
          }
        ]
      }
    ]
  }
}