window.BENCHMARK_DATA = {
  "lastUpdate": 1696525232919,
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
          "id": "2d615446e6d6534540c757d28a329c858cfdfc67",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-05T23:23:43+09:00",
          "tree_id": "559c6d26dcc589082e62d5606f201d093138ef2e",
          "url": "https://github.com/planetarium/libplanet/commit/2d615446e6d6534540c757d28a329c858cfdfc67"
        },
        "date": 1696516696028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322363,
            "unit": "ns",
            "range": "± 122828.36563697534"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2429895.588235294,
            "unit": "ns",
            "range": "± 113529.70080697148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2088587.7551020407,
            "unit": "ns",
            "range": "± 124788.34225992687"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7170770,
            "unit": "ns",
            "range": "± 348583.44242567423"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43971.929824561405,
            "unit": "ns",
            "range": "± 1928.8925751363242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6938484.615384615,
            "unit": "ns",
            "range": "± 11819.394101352103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17733764.285714287,
            "unit": "ns",
            "range": "± 221678.90710923052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45774240,
            "unit": "ns",
            "range": "± 506229.1686013926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89533228.57142857,
            "unit": "ns",
            "range": "± 782726.6635870468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182625073.33333334,
            "unit": "ns",
            "range": "± 1882409.185237542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4371773.737980769,
            "unit": "ns",
            "range": "± 5117.209551265122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408474.2578125,
            "unit": "ns",
            "range": "± 1889.1918805808168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023298.3203125,
            "unit": "ns",
            "range": "± 1589.1787905660065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2536727.265625,
            "unit": "ns",
            "range": "± 2996.5760417485794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803898.5807291666,
            "unit": "ns",
            "range": "± 1077.099719492541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 719441.3364955357,
            "unit": "ns",
            "range": "± 838.8826446520434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2988551.4285714286,
            "unit": "ns",
            "range": "± 97466.52025915653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3052514.8936170214,
            "unit": "ns",
            "range": "± 118062.24588662027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3823445.4545454546,
            "unit": "ns",
            "range": "± 92585.63334645663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3687648.888888889,
            "unit": "ns",
            "range": "± 139297.54716600233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8467541.176470589,
            "unit": "ns",
            "range": "± 405042.4706809296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240945.65217391305,
            "unit": "ns",
            "range": "± 9243.152577190176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231591.17647058822,
            "unit": "ns",
            "range": "± 6455.259431777378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197958.82352941178,
            "unit": "ns",
            "range": "± 4057.563743111347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3776742.8571428573,
            "unit": "ns",
            "range": "± 36160.03880796323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3485953.3333333335,
            "unit": "ns",
            "range": "± 59109.84770102267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17033.695652173912,
            "unit": "ns",
            "range": "± 1262.6743965208295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75981.01265822785,
            "unit": "ns",
            "range": "± 3793.046132249933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63400,
            "unit": "ns",
            "range": "± 1515.3186055052831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71490.52631578948,
            "unit": "ns",
            "range": "± 11273.949200307256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3868.4210526315787,
            "unit": "ns",
            "range": "± 401.6622795161555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16219.58762886598,
            "unit": "ns",
            "range": "± 1989.5895292359583"
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
          "id": "fb0f4b18ee997fa83110fd08cd3e6259d15a24a1",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-06T01:41:33+09:00",
          "tree_id": "2ff067d40cf5b031399b266fa1335de8fb5642bb",
          "url": "https://github.com/planetarium/libplanet/commit/fb0f4b18ee997fa83110fd08cd3e6259d15a24a1"
        },
        "date": 1696525100249,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1406206,
            "unit": "ns",
            "range": "± 120170.51254300484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643491.935483871,
            "unit": "ns",
            "range": "± 120056.8721766823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163427.272727273,
            "unit": "ns",
            "range": "± 115513.90892743124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9108252.94117647,
            "unit": "ns",
            "range": "± 249898.08375378675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52967.010309278354,
            "unit": "ns",
            "range": "± 4807.86511981246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7917028.571428572,
            "unit": "ns",
            "range": "± 129356.84352608859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21638380,
            "unit": "ns",
            "range": "± 325553.2833281125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54251692.85714286,
            "unit": "ns",
            "range": "± 562817.8110246632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108719313.33333333,
            "unit": "ns",
            "range": "± 784307.5042597102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214249021.42857143,
            "unit": "ns",
            "range": "± 1369761.2488080775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4582354.114583333,
            "unit": "ns",
            "range": "± 24195.291925404865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1443704.4503348214,
            "unit": "ns",
            "range": "± 5288.673253883727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1086249.9348958333,
            "unit": "ns",
            "range": "± 3435.2357993628843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636965.1227678573,
            "unit": "ns",
            "range": "± 10676.213305148454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859850.9505208334,
            "unit": "ns",
            "range": "± 2366.0758012702067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777179.3489583334,
            "unit": "ns",
            "range": "± 2574.4764753102168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3549046.153846154,
            "unit": "ns",
            "range": "± 41239.01096826918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3657150,
            "unit": "ns",
            "range": "± 125707.37523784827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4394960,
            "unit": "ns",
            "range": "± 64037.096391745574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4384447.674418605,
            "unit": "ns",
            "range": "± 159976.65527369344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10685730.76923077,
            "unit": "ns",
            "range": "± 290016.0061365314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270404.347826087,
            "unit": "ns",
            "range": "± 9255.075641007637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259518.18181818182,
            "unit": "ns",
            "range": "± 11525.088474092698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246301.51515151514,
            "unit": "ns",
            "range": "± 15870.370053658935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4287120,
            "unit": "ns",
            "range": "± 64362.047379314645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4046135.714285714,
            "unit": "ns",
            "range": "± 56648.46534879499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27167.708333333332,
            "unit": "ns",
            "range": "± 2403.2212939551155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99858.76288659793,
            "unit": "ns",
            "range": "± 8060.316275035878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91728.86597938144,
            "unit": "ns",
            "range": "± 8595.698521679396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105626.80412371134,
            "unit": "ns",
            "range": "± 17180.43045798473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7161.0526315789475,
            "unit": "ns",
            "range": "± 972.1980728972509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24635.416666666668,
            "unit": "ns",
            "range": "± 2344.1743767842718"
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
          "id": "1890b8363f092438cc98105e0751e64f7e02f3d6",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-06T01:43:22+09:00",
          "tree_id": "99f81ceb4e3a987f7f91a204bba1b75a97a31e0c",
          "url": "https://github.com/planetarium/libplanet/commit/1890b8363f092438cc98105e0751e64f7e02f3d6"
        },
        "date": 1696525167882,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1396747.4226804124,
            "unit": "ns",
            "range": "± 102853.8689241354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578226.506024096,
            "unit": "ns",
            "range": "± 135431.307477113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2124004.8780487804,
            "unit": "ns",
            "range": "± 111638.16347384124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9204345.555555556,
            "unit": "ns",
            "range": "± 343250.8113978065"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51962.36559139785,
            "unit": "ns",
            "range": "± 3552.124715620909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7346883.333333333,
            "unit": "ns",
            "range": "± 150650.04734385543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20615828.57142857,
            "unit": "ns",
            "range": "± 253884.23294144074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52255320,
            "unit": "ns",
            "range": "± 777897.2427549247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103319386.66666667,
            "unit": "ns",
            "range": "± 1446345.5445000818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207404947.36842105,
            "unit": "ns",
            "range": "± 4379313.165373008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4573203.725961538,
            "unit": "ns",
            "range": "± 14664.760666269014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1427369.0885416667,
            "unit": "ns",
            "range": "± 5729.4246780334415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1082619.907924107,
            "unit": "ns",
            "range": "± 2528.6268132802124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633103.9322916665,
            "unit": "ns",
            "range": "± 6717.118180785122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846716.7513020834,
            "unit": "ns",
            "range": "± 3586.721328921339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776825.52734375,
            "unit": "ns",
            "range": "± 9297.134589138737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285010.3448275863,
            "unit": "ns",
            "range": "± 95191.60506513613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3364687.974683544,
            "unit": "ns",
            "range": "± 174366.45121314484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4175333.3333333335,
            "unit": "ns",
            "range": "± 118511.9580270375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4171272.222222222,
            "unit": "ns",
            "range": "± 130764.93547280306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10612337.5,
            "unit": "ns",
            "range": "± 322318.60069279914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261722.72727272726,
            "unit": "ns",
            "range": "± 6232.646905279286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250196.22641509434,
            "unit": "ns",
            "range": "± 10330.145621584188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223236,
            "unit": "ns",
            "range": "± 17198.341005263657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135276.470588235,
            "unit": "ns",
            "range": "± 81406.36131018697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817315,
            "unit": "ns",
            "range": "± 86716.12655823113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22642.55319148936,
            "unit": "ns",
            "range": "± 2366.3632712558833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90520.20202020202,
            "unit": "ns",
            "range": "± 7354.257128898544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71280.85106382979,
            "unit": "ns",
            "range": "± 4212.2779216722465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90419.38775510204,
            "unit": "ns",
            "range": "± 16154.566927373278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5510,
            "unit": "ns",
            "range": "± 1141.1937750983539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20648.936170212764,
            "unit": "ns",
            "range": "± 2309.99439932529"
          }
        ]
      }
    ]
  }
}