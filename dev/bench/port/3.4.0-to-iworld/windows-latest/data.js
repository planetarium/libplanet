window.BENCHMARK_DATA = {
  "lastUpdate": 1696610842435,
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
          "id": "9ab368f1b8a524c29bf8e6d03020c4a2efde28ea",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-06T01:48:55+09:00",
          "tree_id": "99f81ceb4e3a987f7f91a204bba1b75a97a31e0c",
          "url": "https://github.com/planetarium/libplanet/commit/9ab368f1b8a524c29bf8e6d03020c4a2efde28ea"
        },
        "date": 1696525442583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1359649.4845360825,
            "unit": "ns",
            "range": "± 130926.16806470176"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2433444.736842105,
            "unit": "ns",
            "range": "± 81937.21623281407"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2047474.7474747475,
            "unit": "ns",
            "range": "± 132192.34080705215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7932285,
            "unit": "ns",
            "range": "± 278041.79777093284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45983.15789473684,
            "unit": "ns",
            "range": "± 4097.161774016691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7229446.666666667,
            "unit": "ns",
            "range": "± 68216.93198556946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18225560,
            "unit": "ns",
            "range": "± 115788.14274354694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46613000,
            "unit": "ns",
            "range": "± 245522.50719325416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92773746.66666667,
            "unit": "ns",
            "range": "± 433535.13594083476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186459416.66666666,
            "unit": "ns",
            "range": "± 506093.9334983275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4298897.488839285,
            "unit": "ns",
            "range": "± 20629.453598936976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408947.686298077,
            "unit": "ns",
            "range": "± 2226.035749046904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1009501.0817307692,
            "unit": "ns",
            "range": "± 1533.6828938003823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528443.5096153845,
            "unit": "ns",
            "range": "± 4851.07237385015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810017.5211588541,
            "unit": "ns",
            "range": "± 851.1405691958233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732495.4514723558,
            "unit": "ns",
            "range": "± 1010.5952886638839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3186293.3333333335,
            "unit": "ns",
            "range": "± 51140.12216682803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3233753.3333333335,
            "unit": "ns",
            "range": "± 46706.94146433034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4052583.3333333335,
            "unit": "ns",
            "range": "± 71484.2706641185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3935050,
            "unit": "ns",
            "range": "± 81456.1249637966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9601745,
            "unit": "ns",
            "range": "± 211124.2433454887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252187.71929824562,
            "unit": "ns",
            "range": "± 10896.379971863504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244408.51063829788,
            "unit": "ns",
            "range": "± 9442.03896981436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225409.375,
            "unit": "ns",
            "range": "± 12951.61910727767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3908185.714285714,
            "unit": "ns",
            "range": "± 25595.397937996502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565061.5384615385,
            "unit": "ns",
            "range": "± 27593.04074283763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22073.19587628866,
            "unit": "ns",
            "range": "± 2371.3355705838326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92916.32653061225,
            "unit": "ns",
            "range": "± 8073.370939407419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72895.91836734694,
            "unit": "ns",
            "range": "± 6883.210836226638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85004.04040404041,
            "unit": "ns",
            "range": "± 11989.263217068294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5155.102040816327,
            "unit": "ns",
            "range": "± 754.2487829580704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20222.82608695652,
            "unit": "ns",
            "range": "± 1444.7406140720743"
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
          "id": "74915f7dc072851ffb13e51d6ebd40649015bbb7",
          "message": "refactor: Reveal World as public",
          "timestamp": "2023-10-07T01:26:42+09:00",
          "tree_id": "f547fdf6da275153bab9ee016d1debb36f9031cb",
          "url": "https://github.com/planetarium/libplanet/commit/74915f7dc072851ffb13e51d6ebd40649015bbb7"
        },
        "date": 1696610765655,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605170.4081632653,
            "unit": "ns",
            "range": "± 126495.72174761581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978932.2033898304,
            "unit": "ns",
            "range": "± 131736.9537356323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2434653.4246575343,
            "unit": "ns",
            "range": "± 116034.4178851351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10689121.333333334,
            "unit": "ns",
            "range": "± 538003.9862942175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56702.22222222222,
            "unit": "ns",
            "range": "± 3610.782161143339"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9117120.588235294,
            "unit": "ns",
            "range": "± 185664.48490727128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24880750,
            "unit": "ns",
            "range": "± 393291.6391960786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61409761.538461536,
            "unit": "ns",
            "range": "± 657049.859268003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125090413.04347827,
            "unit": "ns",
            "range": "± 3145103.659413867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247177226.66666666,
            "unit": "ns",
            "range": "± 3799053.748438394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5432802.901785715,
            "unit": "ns",
            "range": "± 65738.76693820677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1724689.1276041667,
            "unit": "ns",
            "range": "± 15351.619921601949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1248904.6744791667,
            "unit": "ns",
            "range": "± 13339.450990117082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107960.6305803573,
            "unit": "ns",
            "range": "± 22065.444310344814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001986.8977864584,
            "unit": "ns",
            "range": "± 3981.526324060925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929672.3372395834,
            "unit": "ns",
            "range": "± 15998.38165445333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3826066.0714285714,
            "unit": "ns",
            "range": "± 162994.9293988628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4021000,
            "unit": "ns",
            "range": "± 148429.91451796205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4889519.230769231,
            "unit": "ns",
            "range": "± 198323.10885340374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4819787.096774193,
            "unit": "ns",
            "range": "± 144182.36078414836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12303982.5,
            "unit": "ns",
            "range": "± 369355.7484548828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299407.8125,
            "unit": "ns",
            "range": "± 13467.74282224718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290105.2631578947,
            "unit": "ns",
            "range": "± 12549.351449557515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258339.79591836734,
            "unit": "ns",
            "range": "± 16515.993434643253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4846404.761904762,
            "unit": "ns",
            "range": "± 113670.15648880965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4574197.05882353,
            "unit": "ns",
            "range": "± 87241.89158345218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24563.043478260868,
            "unit": "ns",
            "range": "± 2264.1844657165557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100560.41666666667,
            "unit": "ns",
            "range": "± 8715.436748625869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90418.55670103093,
            "unit": "ns",
            "range": "± 6961.715693361013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100753.60824742269,
            "unit": "ns",
            "range": "± 13621.536729994818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6224.489795918367,
            "unit": "ns",
            "range": "± 883.9124862790194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23078.494623655915,
            "unit": "ns",
            "range": "± 2255.3245916181854"
          }
        ]
      }
    ]
  }
}