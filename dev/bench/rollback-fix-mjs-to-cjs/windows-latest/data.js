window.BENCHMARK_DATA = {
  "lastUpdate": 1698375966985,
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
      }
    ]
  }
}