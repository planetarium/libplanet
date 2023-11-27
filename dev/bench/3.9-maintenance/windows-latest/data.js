window.BENCHMARK_DATA = {
  "lastUpdate": 1701065817910,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700793960079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 908035.3535353536,
            "unit": "ns",
            "range": "± 66226.30698879212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1698526.9841269841,
            "unit": "ns",
            "range": "± 75572.11724752681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1318523.9130434783,
            "unit": "ns",
            "range": "± 124149.38172347868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4955527.5,
            "unit": "ns",
            "range": "± 172425.43834498883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34302.27272727273,
            "unit": "ns",
            "range": "± 2103.6354559812503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5222950,
            "unit": "ns",
            "range": "± 29624.02221690519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12994635.714285715,
            "unit": "ns",
            "range": "± 219561.985665667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33589820,
            "unit": "ns",
            "range": "± 220091.6211814655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65845360,
            "unit": "ns",
            "range": "± 605304.0862716383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131987796.15384616,
            "unit": "ns",
            "range": "± 1015791.3873883296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3267969.765625,
            "unit": "ns",
            "range": "± 6823.266283626486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059194.3638392857,
            "unit": "ns",
            "range": "± 1800.7996109388348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744682.2591145834,
            "unit": "ns",
            "range": "± 1270.113459318819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931072.2395833333,
            "unit": "ns",
            "range": "± 3600.8392210071356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633699.3489583334,
            "unit": "ns",
            "range": "± 1299.70844461266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580412.40234375,
            "unit": "ns",
            "range": "± 810.1788056646815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2094440,
            "unit": "ns",
            "range": "± 40041.46808830399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278943.75,
            "unit": "ns",
            "range": "± 89900.47548273188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2789695.652173913,
            "unit": "ns",
            "range": "± 62782.41269554331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2630696.7213114756,
            "unit": "ns",
            "range": "± 117918.42797348385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5832553.846153846,
            "unit": "ns",
            "range": "± 188298.4652733301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169196.66666666666,
            "unit": "ns",
            "range": "± 7215.190347552338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163098.24561403508,
            "unit": "ns",
            "range": "± 7086.921839055529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139916.12903225806,
            "unit": "ns",
            "range": "± 3762.5431801901887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2884423.3333333335,
            "unit": "ns",
            "range": "± 43488.856810298734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503550,
            "unit": "ns",
            "range": "± 40065.5296566346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10711.95652173913,
            "unit": "ns",
            "range": "± 1201.4498925226612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53810.86956521739,
            "unit": "ns",
            "range": "± 4813.68142962086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45091.57894736842,
            "unit": "ns",
            "range": "± 2598.0624187010912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59595.9595959596,
            "unit": "ns",
            "range": "± 14133.300661564785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2822.4489795918366,
            "unit": "ns",
            "range": "± 594.5683025878919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10290.90909090909,
            "unit": "ns",
            "range": "± 1192.7594166986491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca5f07bd78696bd410b3135c9c5f55a7c6722619",
          "message": "Merge pull request #3517 from greymistcube/prepare/3.9.0\n\n🔧 Prepare 3.9.0",
          "timestamp": "2023-11-24T13:03:38+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/planetarium/libplanet/commit/ca5f07bd78696bd410b3135c9c5f55a7c6722619"
        },
        "date": 1700799367725,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979922.9166666666,
            "unit": "ns",
            "range": "± 121619.93645361955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1763791.5789473683,
            "unit": "ns",
            "range": "± 116683.85151736814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1373427.8350515463,
            "unit": "ns",
            "range": "± 124938.84982784915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4831720,
            "unit": "ns",
            "range": "± 165554.41511369112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35175.294117647056,
            "unit": "ns",
            "range": "± 2040.944335721238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5136880,
            "unit": "ns",
            "range": "± 53493.17980560032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13552826.923076924,
            "unit": "ns",
            "range": "± 90326.66783999576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32948033.333333332,
            "unit": "ns",
            "range": "± 587029.9160868655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68690470,
            "unit": "ns",
            "range": "± 900598.2933583652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136575066.66666666,
            "unit": "ns",
            "range": "± 1442022.1365779904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281111.328125,
            "unit": "ns",
            "range": "± 4957.328740713299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054985.4557291667,
            "unit": "ns",
            "range": "± 4863.91109923514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731270.3822544643,
            "unit": "ns",
            "range": "± 3011.910608125757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919340.0111607143,
            "unit": "ns",
            "range": "± 2508.6373874772444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626773.5576923077,
            "unit": "ns",
            "range": "± 1378.216022737284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569799.00390625,
            "unit": "ns",
            "range": "± 1213.0817210032064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2148604,
            "unit": "ns",
            "range": "± 54368.89797178775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306781.8181818184,
            "unit": "ns",
            "range": "± 40790.2023292433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2865200,
            "unit": "ns",
            "range": "± 66347.07227903881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2818232,
            "unit": "ns",
            "range": "± 72981.16035434534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5736564.285714285,
            "unit": "ns",
            "range": "± 132606.76184008978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180380,
            "unit": "ns",
            "range": "± 7671.24018173893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172762,
            "unit": "ns",
            "range": "± 6182.691112109282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140805.12820512822,
            "unit": "ns",
            "range": "± 4445.041514100658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766130.769230769,
            "unit": "ns",
            "range": "± 33942.85355847837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2568373.3333333335,
            "unit": "ns",
            "range": "± 35375.586146919115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11834.831460674157,
            "unit": "ns",
            "range": "± 1576.61181043945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58394.62365591398,
            "unit": "ns",
            "range": "± 4884.277472964918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46937.89473684211,
            "unit": "ns",
            "range": "± 4267.995168080587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67816.32653061225,
            "unit": "ns",
            "range": "± 15753.420141680976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2985.5670103092784,
            "unit": "ns",
            "range": "± 685.411933730617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11278.72340425532,
            "unit": "ns",
            "range": "± 1380.888940776259"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99b9e98b2b48adb520cdbc522f1d6cfe221c7fd1",
          "message": "Merge pull request #3523 from greymistcube/refactor/fix-random-seed-generation\n\n♻️ Refactor random seed generation",
          "timestamp": "2023-11-27T15:03:58+09:00",
          "tree_id": "f8b7d238cc9a39cea5dff593eae21973aea26ca1",
          "url": "https://github.com/planetarium/libplanet/commit/99b9e98b2b48adb520cdbc522f1d6cfe221c7fd1"
        },
        "date": 1701065767344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947343,
            "unit": "ns",
            "range": "± 119462.16869153535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1666766.1764705882,
            "unit": "ns",
            "range": "± 76615.6420066281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1310986.7346938776,
            "unit": "ns",
            "range": "± 141315.9300654345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4841334.693877551,
            "unit": "ns",
            "range": "± 193157.0718256479"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34012.64367816092,
            "unit": "ns",
            "range": "± 2040.166693924854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4978446.666666667,
            "unit": "ns",
            "range": "± 34122.31918651876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13528566.666666666,
            "unit": "ns",
            "range": "± 239678.15821181855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32699340,
            "unit": "ns",
            "range": "± 594320.6767874924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63715584.615384616,
            "unit": "ns",
            "range": "± 427089.53754092724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127762620,
            "unit": "ns",
            "range": "± 854245.8170807745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3224508.515625,
            "unit": "ns",
            "range": "± 18865.501084143816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054630.7291666667,
            "unit": "ns",
            "range": "± 2522.1265407525834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722068.9127604166,
            "unit": "ns",
            "range": "± 1160.802131989591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949561.7057291667,
            "unit": "ns",
            "range": "± 4321.0125248649365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605633.5481770834,
            "unit": "ns",
            "range": "± 1222.9340071727977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557772.4958147322,
            "unit": "ns",
            "range": "± 694.8324128810377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2096603.2258064516,
            "unit": "ns",
            "range": "± 63418.43309254793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2214148.888888889,
            "unit": "ns",
            "range": "± 74506.94788292085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2832933.3333333335,
            "unit": "ns",
            "range": "± 52183.681996067186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2712850,
            "unit": "ns",
            "range": "± 75376.5145081274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5863014.634146341,
            "unit": "ns",
            "range": "± 310104.6140176726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166466.66666666666,
            "unit": "ns",
            "range": "± 5420.7094470272905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160470.14925373133,
            "unit": "ns",
            "range": "± 7565.051521492788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146500,
            "unit": "ns",
            "range": "± 4426.887544690212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714533.3333333335,
            "unit": "ns",
            "range": "± 38079.77841071983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2527813.3333333335,
            "unit": "ns",
            "range": "± 40989.36912118045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11103.191489361701,
            "unit": "ns",
            "range": "± 1500.713244596527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50233.72093023256,
            "unit": "ns",
            "range": "± 4107.055921792791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44695.890410958906,
            "unit": "ns",
            "range": "± 2111.636960864748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50887.62886597938,
            "unit": "ns",
            "range": "± 11816.075364836304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2387.0967741935483,
            "unit": "ns",
            "range": "± 428.4009211341772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9445.360824742267,
            "unit": "ns",
            "range": "± 1433.528616921422"
          }
        ]
      }
    ]
  }
}