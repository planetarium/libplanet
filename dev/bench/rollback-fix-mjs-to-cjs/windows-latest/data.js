window.BENCHMARK_DATA = {
  "lastUpdate": 1698646622039,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "330ff7bca7b03ca2c22a8f58155b38dfb937453f",
          "message": "Revert \"fix import mjs to require cjs (#3459)\"\n\nThis reverts commit a5937c2b2a851d33743b66c34d0f38cb4551f544.",
          "timestamp": "2023-10-27T10:47:58+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/330ff7bca7b03ca2c22a8f58155b38dfb937453f"
        },
        "date": 1698372402852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613076.5957446808,
            "unit": "ns",
            "range": "± 149225.6589726221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3064572.727272727,
            "unit": "ns",
            "range": "± 92477.57590602463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2395559.090909091,
            "unit": "ns",
            "range": "± 129550.58004489462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10811327.05882353,
            "unit": "ns",
            "range": "± 735299.6432275294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64343.47826086957,
            "unit": "ns",
            "range": "± 6552.464587035735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9379343.75,
            "unit": "ns",
            "range": "± 170554.3587589208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24842671.42857143,
            "unit": "ns",
            "range": "± 243038.0009177781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63121125,
            "unit": "ns",
            "range": "± 213399.40412713945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129176846.15384616,
            "unit": "ns",
            "range": "± 3521064.7075259234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254480750,
            "unit": "ns",
            "range": "± 2486743.099765388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5636751.603618421,
            "unit": "ns",
            "range": "± 109045.93898186208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755228.45703125,
            "unit": "ns",
            "range": "± 18846.559389374423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294542.9236778845,
            "unit": "ns",
            "range": "± 12688.522206775742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3310420.4036458335,
            "unit": "ns",
            "range": "± 44468.78364302781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1033445.8333333334,
            "unit": "ns",
            "range": "± 23669.804407457756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 948492.05078125,
            "unit": "ns",
            "range": "± 14112.180843979997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4153820,
            "unit": "ns",
            "range": "± 123715.47557420503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202703.703703703,
            "unit": "ns",
            "range": "± 110385.22922886391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5096365,
            "unit": "ns",
            "range": "± 106250.31157849051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4916617.647058823,
            "unit": "ns",
            "range": "± 189260.73941087976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12141600,
            "unit": "ns",
            "range": "± 450545.17931573873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316845.1612903226,
            "unit": "ns",
            "range": "± 9429.80518390765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304181.6666666667,
            "unit": "ns",
            "range": "± 11265.704543882575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295158.3333333333,
            "unit": "ns",
            "range": "± 7316.2663718038875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5019253.846153846,
            "unit": "ns",
            "range": "± 47519.357728975665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4676280.769230769,
            "unit": "ns",
            "range": "± 57687.150282296905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29527.36842105263,
            "unit": "ns",
            "range": "± 2694.693055005391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111430.61224489796,
            "unit": "ns",
            "range": "± 8098.767351330851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102862.1052631579,
            "unit": "ns",
            "range": "± 7354.578526873633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109356.98924731182,
            "unit": "ns",
            "range": "± 10506.896263774057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8509.278350515464,
            "unit": "ns",
            "range": "± 1308.7113950233331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28026.80412371134,
            "unit": "ns",
            "range": "± 2802.7336158917215"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "ad29ab2ad6fb597e700de5cc0ca8d74574b1eb54",
          "message": "DONT MERGE",
          "timestamp": "2023-10-27T11:48:49+09:00",
          "tree_id": "ae9d94ee419359e5fe7040c6f1414c48accd2ac4",
          "url": "https://github.com/planetarium/libplanet/commit/ad29ab2ad6fb597e700de5cc0ca8d74574b1eb54"
        },
        "date": 1698375899747,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1281820,
            "unit": "ns",
            "range": "± 95147.86472441808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2443162.5,
            "unit": "ns",
            "range": "± 103874.85225894756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1973886.5979381443,
            "unit": "ns",
            "range": "± 128709.09514358499"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8799459.139784947,
            "unit": "ns",
            "range": "± 638407.3909272641"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53958.241758241755,
            "unit": "ns",
            "range": "± 3665.426030538331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8195678.571428572,
            "unit": "ns",
            "range": "± 77461.42641610457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20570673.333333332,
            "unit": "ns",
            "range": "± 212878.1155855108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50964722.222222224,
            "unit": "ns",
            "range": "± 1045279.3375910437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103606400,
            "unit": "ns",
            "range": "± 2057996.3228830122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206184453.33333334,
            "unit": "ns",
            "range": "± 2436559.6046377323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4518325.46875,
            "unit": "ns",
            "range": "± 27798.45626292908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1438829.380580357,
            "unit": "ns",
            "range": "± 6857.099920276385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1083259.5703125,
            "unit": "ns",
            "range": "± 2602.2442082034536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618178.3203125,
            "unit": "ns",
            "range": "± 6893.937605104796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833773.6027644231,
            "unit": "ns",
            "range": "± 3011.4042134210185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766499.9869791666,
            "unit": "ns",
            "range": "± 2330.5844207104283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230797.3684210526,
            "unit": "ns",
            "range": "± 111239.29280230925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3398470,
            "unit": "ns",
            "range": "± 113832.98201695234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4082642,
            "unit": "ns",
            "range": "± 162797.68976197645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4039944.0677966103,
            "unit": "ns",
            "range": "± 178908.12829319586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9966606.451612903,
            "unit": "ns",
            "range": "± 298200.7678678733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254169.44444444444,
            "unit": "ns",
            "range": "± 6206.992344787769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246240.32258064515,
            "unit": "ns",
            "range": "± 11138.376425782733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217755.73770491802,
            "unit": "ns",
            "range": "± 9813.825699664121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113850,
            "unit": "ns",
            "range": "± 76873.38507788852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3720457.1428571427,
            "unit": "ns",
            "range": "± 65002.42260912238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21915.05376344086,
            "unit": "ns",
            "range": "± 1702.3606523167568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88562.24489795919,
            "unit": "ns",
            "range": "± 7165.891651141645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73626.19047619047,
            "unit": "ns",
            "range": "± 3939.3479690315535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84640.625,
            "unit": "ns",
            "range": "± 8771.875849614644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6625.257731958763,
            "unit": "ns",
            "range": "± 933.7459200976297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20712.5,
            "unit": "ns",
            "range": "± 2482.4966210821335"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "committer": {
            "email": "dev.moreal@gmail.com",
            "name": "Moreal",
            "username": "moreal"
          },
          "distinct": true,
          "id": "4cd5ca276d7cd87bd7bbb5c9e971e40f77513f71",
          "message": "Use Nodejs 18",
          "timestamp": "2023-10-29T01:35:10+09:00",
          "tree_id": "fa91feb02bfadb20459d350cf33181b7117c421b",
          "url": "https://github.com/planetarium/libplanet/commit/4cd5ca276d7cd87bd7bbb5c9e971e40f77513f71"
        },
        "date": 1698511877963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309558.3333333333,
            "unit": "ns",
            "range": "± 43076.28698019364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2390853.06122449,
            "unit": "ns",
            "range": "± 148402.6991821676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1819014.1414141415,
            "unit": "ns",
            "range": "± 150447.33298420892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8563070,
            "unit": "ns",
            "range": "± 668509.4120756326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49071.27659574468,
            "unit": "ns",
            "range": "± 3189.1153032300062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7252246.153846154,
            "unit": "ns",
            "range": "± 36466.002783063006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19261953.333333332,
            "unit": "ns",
            "range": "± 292697.6056973346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48584625,
            "unit": "ns",
            "range": "± 1245519.0684138916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95543180,
            "unit": "ns",
            "range": "± 1708980.4618125812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192703119.04761904,
            "unit": "ns",
            "range": "± 3780824.6484886133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4384558.258928572,
            "unit": "ns",
            "range": "± 22836.132560764516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1408635.7942708333,
            "unit": "ns",
            "range": "± 14644.367504799375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1039591.6276041666,
            "unit": "ns",
            "range": "± 8611.150718336923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627541.5178571427,
            "unit": "ns",
            "range": "± 12208.19763314961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820077.6822916666,
            "unit": "ns",
            "range": "± 4373.332157694208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762259.74609375,
            "unit": "ns",
            "range": "± 3868.2364862216195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2998242.0289855073,
            "unit": "ns",
            "range": "± 136856.0615754389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3337906.6666666665,
            "unit": "ns",
            "range": "± 114124.14572019209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3852209.375,
            "unit": "ns",
            "range": "± 118967.55144311817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3747785.714285714,
            "unit": "ns",
            "range": "± 226112.31848669497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9951867.213114753,
            "unit": "ns",
            "range": "± 443161.7803621726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241996.2962962963,
            "unit": "ns",
            "range": "± 6662.725330666786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227066.03773584907,
            "unit": "ns",
            "range": "± 8270.102394404392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202216.66666666666,
            "unit": "ns",
            "range": "± 4298.73442388092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3863906.25,
            "unit": "ns",
            "range": "± 69856.67678659405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3505078.5714285714,
            "unit": "ns",
            "range": "± 26379.10532603784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18853.061224489797,
            "unit": "ns",
            "range": "± 2044.9184734906248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75257.97101449275,
            "unit": "ns",
            "range": "± 3456.298844867127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65492.857142857145,
            "unit": "ns",
            "range": "± 2194.271128181777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74193.93939393939,
            "unit": "ns",
            "range": "± 10225.97551039247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4812.371134020618,
            "unit": "ns",
            "range": "± 614.9623518216994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16687.5,
            "unit": "ns",
            "range": "± 1223.4126473709214"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "44fba85390f4e4c25acf3d0f98bf7636c0466db5",
          "message": "Merge branch 'rollback-fix-mjs-to-cjs' of https://github.com/planetarium/libplanet into rollback-fix-mjs-to-cjs",
          "timestamp": "2023-10-30T14:54:32+09:00",
          "tree_id": "401324707c4dd3a6101d18bc198da84c8eec3b6b",
          "url": "https://github.com/planetarium/libplanet/commit/44fba85390f4e4c25acf3d0f98bf7636c0466db5"
        },
        "date": 1698646526367,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617162.5,
            "unit": "ns",
            "range": "± 153238.4651793613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3032085.3535353537,
            "unit": "ns",
            "range": "± 299496.8472162533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2355930.2083333335,
            "unit": "ns",
            "range": "± 209232.3345343472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10650788.505747126,
            "unit": "ns",
            "range": "± 1058284.3586767379"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61950,
            "unit": "ns",
            "range": "± 13462.303902884765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8793660.638297873,
            "unit": "ns",
            "range": "± 594719.3183122452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24396594.56521739,
            "unit": "ns",
            "range": "± 1601938.9010562766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64948889.88764045,
            "unit": "ns",
            "range": "± 3592454.4448634703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130071850,
            "unit": "ns",
            "range": "± 2201381.2096919096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262662128.3018868,
            "unit": "ns",
            "range": "± 10919704.072321199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5560657.239583333,
            "unit": "ns",
            "range": "± 83706.76005939423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1731515.497295673,
            "unit": "ns",
            "range": "± 18837.215371456343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334033.0989583333,
            "unit": "ns",
            "range": "± 24274.67572991871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3245996.6681985296,
            "unit": "ns",
            "range": "± 65334.80211159181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054908.2728794643,
            "unit": "ns",
            "range": "± 14291.53525029122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968152.1199544271,
            "unit": "ns",
            "range": "± 24423.160184830464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3469871.1340206186,
            "unit": "ns",
            "range": "± 239190.73759186888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3715315.463917526,
            "unit": "ns",
            "range": "± 312372.8369073453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5113989.47368421,
            "unit": "ns",
            "range": "± 258113.97977325052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4874836.559139785,
            "unit": "ns",
            "range": "± 331229.0826160053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13077424.444444444,
            "unit": "ns",
            "range": "± 904378.8716244419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312494.8453608247,
            "unit": "ns",
            "range": "± 48142.82650599416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297592.55319148937,
            "unit": "ns",
            "range": "± 36268.49172954191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259114.2857142857,
            "unit": "ns",
            "range": "± 32731.132126910587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4741964.444444444,
            "unit": "ns",
            "range": "± 264302.6611654262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4347494.680851064,
            "unit": "ns",
            "range": "± 243192.19240041554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21521.83908045977,
            "unit": "ns",
            "range": "± 2558.9071653306496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101380.43478260869,
            "unit": "ns",
            "range": "± 14693.844409995314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123004.21052631579,
            "unit": "ns",
            "range": "± 12388.506304871686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122990.21739130435,
            "unit": "ns",
            "range": "± 13131.800674820292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9221.348314606741,
            "unit": "ns",
            "range": "± 1195.8709179080593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24283.14606741573,
            "unit": "ns",
            "range": "± 4533.367099906291"
          }
        ]
      }
    ]
  }
}