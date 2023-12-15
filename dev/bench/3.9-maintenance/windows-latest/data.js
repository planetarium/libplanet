window.BENCHMARK_DATA = {
  "lastUpdate": 1702617312089,
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
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9e49c31a71c533d96c233dc34b6d9d73b8d9f93",
          "message": "Merge pull request #3526 from OnedgeLee/port/3.8.1-to-3.9.0\n\n🔀 Port 3.8.1 to 3.9.0",
          "timestamp": "2023-11-27T15:18:56+09:00",
          "tree_id": "32706cbfdb86b43bfbbc5bdf131a3105cb792706",
          "url": "https://github.com/planetarium/libplanet/commit/f9e49c31a71c533d96c233dc34b6d9d73b8d9f93"
        },
        "date": 1701066638258,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962865.625,
            "unit": "ns",
            "range": "± 104997.82236150374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1723077.7777777778,
            "unit": "ns",
            "range": "± 66923.6869442639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327538.144329897,
            "unit": "ns",
            "range": "± 95567.35238748614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5000043.333333333,
            "unit": "ns",
            "range": "± 220874.41048939907"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33625,
            "unit": "ns",
            "range": "± 1634.5520987048048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5043714.285714285,
            "unit": "ns",
            "range": "± 68155.33002626436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13144457.142857144,
            "unit": "ns",
            "range": "± 131116.6580644047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32544253.333333332,
            "unit": "ns",
            "range": "± 317158.3197860712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66122092.85714286,
            "unit": "ns",
            "range": "± 515318.83254527405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133546966.66666667,
            "unit": "ns",
            "range": "± 1159206.2035638664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3347386.551339286,
            "unit": "ns",
            "range": "± 12418.758721532819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1070801.185825893,
            "unit": "ns",
            "range": "± 2263.0040525638974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733938.7486049107,
            "unit": "ns",
            "range": "± 1822.1676976741708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910582.240513393,
            "unit": "ns",
            "range": "± 3871.087200259802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617835.8049665178,
            "unit": "ns",
            "range": "± 3517.9951713821692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565993.3942522322,
            "unit": "ns",
            "range": "± 686.4718704209007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120244.736842105,
            "unit": "ns",
            "range": "± 63189.45643050691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2250766,
            "unit": "ns",
            "range": "± 79341.269108034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2822630.769230769,
            "unit": "ns",
            "range": "± 43108.39795630283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2588971.621621622,
            "unit": "ns",
            "range": "± 129082.33808524502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5424725,
            "unit": "ns",
            "range": "± 68620.10207724052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175750,
            "unit": "ns",
            "range": "± 9640.658128811876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165258.57142857142,
            "unit": "ns",
            "range": "± 7173.1482558651405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141520.96774193548,
            "unit": "ns",
            "range": "± 3855.748396735027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766100,
            "unit": "ns",
            "range": "± 48098.24766632802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515792.8571428573,
            "unit": "ns",
            "range": "± 31008.571129874454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11784.21052631579,
            "unit": "ns",
            "range": "± 1411.5266964466643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54862.36559139785,
            "unit": "ns",
            "range": "± 5093.2588435596745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43891.666666666664,
            "unit": "ns",
            "range": "± 1732.0303340340736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59870.707070707074,
            "unit": "ns",
            "range": "± 14196.746196089227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2694.8453608247423,
            "unit": "ns",
            "range": "± 540.904168580377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11176.041666666666,
            "unit": "ns",
            "range": "± 1675.1273190679324"
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
          "id": "7e1213d127652079d0c45c22999b238d81fe7000",
          "message": "Merge pull request #3529 from greymistcube/refactor/tx-spec\n\n♻️ Update `TxInvoice` specification",
          "timestamp": "2023-11-28T16:34:22+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/planetarium/libplanet/commit/7e1213d127652079d0c45c22999b238d81fe7000"
        },
        "date": 1701157661157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987635.4166666666,
            "unit": "ns",
            "range": "± 110624.96337594793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1841083.076923077,
            "unit": "ns",
            "range": "± 85748.84395946463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1465637.7551020407,
            "unit": "ns",
            "range": "± 136101.56040774824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5159078.68852459,
            "unit": "ns",
            "range": "± 230130.23495023718"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35252.27272727273,
            "unit": "ns",
            "range": "± 2376.705789012075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5297128.571428572,
            "unit": "ns",
            "range": "± 85599.98587860621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14023607.142857144,
            "unit": "ns",
            "range": "± 145427.72174777152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34951114.28571428,
            "unit": "ns",
            "range": "± 547526.6004878286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68949229.41176471,
            "unit": "ns",
            "range": "± 1367589.1578635313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133579237.5,
            "unit": "ns",
            "range": "± 2470590.956262624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3288985.390625,
            "unit": "ns",
            "range": "± 22441.335152446278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079064.6935096155,
            "unit": "ns",
            "range": "± 2901.1543006281836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763924.35546875,
            "unit": "ns",
            "range": "± 3139.436699807279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974432.5892857143,
            "unit": "ns",
            "range": "± 13725.997462001224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601379.2898995535,
            "unit": "ns",
            "range": "± 1244.4882994564796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561565.8621651785,
            "unit": "ns",
            "range": "± 1088.918648476117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154986.6666666665,
            "unit": "ns",
            "range": "± 88616.32299167558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2385844.736842105,
            "unit": "ns",
            "range": "± 121447.30917259205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2831532.5581395347,
            "unit": "ns",
            "range": "± 102441.49020162037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2788584.8484848486,
            "unit": "ns",
            "range": "± 183181.551162928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5927748.837209302,
            "unit": "ns",
            "range": "± 192626.57727433473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180081.25,
            "unit": "ns",
            "range": "± 8250.019239996805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170755.73770491802,
            "unit": "ns",
            "range": "± 7661.255871595379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144313.23529411765,
            "unit": "ns",
            "range": "± 6914.076155072254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2832326.6666666665,
            "unit": "ns",
            "range": "± 38989.58591116107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2613115.3846153845,
            "unit": "ns",
            "range": "± 35341.426262339926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12852.272727272728,
            "unit": "ns",
            "range": "± 1586.435118287226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61973.958333333336,
            "unit": "ns",
            "range": "± 9199.041652507147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48204.34782608696,
            "unit": "ns",
            "range": "± 5202.1743772497575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69795.91836734694,
            "unit": "ns",
            "range": "± 17634.484248622553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2959.574468085106,
            "unit": "ns",
            "range": "± 784.7085821570989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12156.382978723404,
            "unit": "ns",
            "range": "± 1839.095062102309"
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
          "id": "e5fd96be3cfdbd103299de4bd8efc907cd56d227",
          "message": "Merge pull request #3530 from greymistcube/refactor/context-scoping\n\n♻️ `ActionEvaluator` context scoping",
          "timestamp": "2023-11-29T16:48:16+09:00",
          "tree_id": "4a3d52b03284e22bc5bfc9961f5c6a72e8f83202",
          "url": "https://github.com/planetarium/libplanet/commit/e5fd96be3cfdbd103299de4bd8efc907cd56d227"
        },
        "date": 1701244864663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 970331.5789473684,
            "unit": "ns",
            "range": "± 105384.73612996585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1783155,
            "unit": "ns",
            "range": "± 93185.15514415645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1366735.2631578948,
            "unit": "ns",
            "range": "± 132356.81542340672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5175928.888888889,
            "unit": "ns",
            "range": "± 194007.38929486705"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34561.53846153846,
            "unit": "ns",
            "range": "± 2077.4861534914544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5148714.285714285,
            "unit": "ns",
            "range": "± 39631.20093956387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13340500,
            "unit": "ns",
            "range": "± 189058.47168081548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33017995.23809524,
            "unit": "ns",
            "range": "± 746455.2742637636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65362357.14285714,
            "unit": "ns",
            "range": "± 392886.39327670535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131705792.85714285,
            "unit": "ns",
            "range": "± 1227746.2532024877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3359165.4166666665,
            "unit": "ns",
            "range": "± 9247.143754536924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1059379.0597098214,
            "unit": "ns",
            "range": "± 4456.801864938032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746801.4578683035,
            "unit": "ns",
            "range": "± 1999.593642645039"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942140.7421875,
            "unit": "ns",
            "range": "± 17883.147337157097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617717.6432291666,
            "unit": "ns",
            "range": "± 1523.5601471776256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577984.1871995192,
            "unit": "ns",
            "range": "± 972.7935224018632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145432,
            "unit": "ns",
            "range": "± 40125.539664075965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253630.6818181816,
            "unit": "ns",
            "range": "± 119976.49612535902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2778125,
            "unit": "ns",
            "range": "± 109745.5468300177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2679793.1818181816,
            "unit": "ns",
            "range": "± 146985.98478458074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5814422.580645162,
            "unit": "ns",
            "range": "± 176155.1413000813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178571.9298245614,
            "unit": "ns",
            "range": "± 7701.663882981133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170154.38596491228,
            "unit": "ns",
            "range": "± 7059.949164513423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143590.47619047618,
            "unit": "ns",
            "range": "± 5171.264860313851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748369.230769231,
            "unit": "ns",
            "range": "± 41938.71291570166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493478.5714285714,
            "unit": "ns",
            "range": "± 38540.63147802945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11689.247311827958,
            "unit": "ns",
            "range": "± 1649.1409071544806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56853.1914893617,
            "unit": "ns",
            "range": "± 5823.934710427705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45857.44680851064,
            "unit": "ns",
            "range": "± 3636.086735001253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76422.68041237113,
            "unit": "ns",
            "range": "± 16900.95229784059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2645.918367346939,
            "unit": "ns",
            "range": "± 500.1377887146699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11710.526315789473,
            "unit": "ns",
            "range": "± 1676.2085944057458"
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
          "id": "5ffe61d749e10ec138111a261bf3cfb3760dd9e1",
          "message": "Merge pull request #3533 from greymistcube/revert/context-scoping\n\n⏪ Revert context scoping",
          "timestamp": "2023-12-04T15:48:20+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/planetarium/libplanet/commit/5ffe61d749e10ec138111a261bf3cfb3760dd9e1"
        },
        "date": 1701673198582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 940496.9072164949,
            "unit": "ns",
            "range": "± 110904.774707111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1730134.4086021506,
            "unit": "ns",
            "range": "± 102723.04205190016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1312048.969072165,
            "unit": "ns",
            "range": "± 119363.75993753766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5002246.96969697,
            "unit": "ns",
            "range": "± 234242.1608373542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34256,
            "unit": "ns",
            "range": "± 1734.4864494262395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4980242.857142857,
            "unit": "ns",
            "range": "± 77687.48750143562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12885953.333333334,
            "unit": "ns",
            "range": "± 98995.59778572166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32339928.57142857,
            "unit": "ns",
            "range": "± 463030.2572412295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66031776.47058824,
            "unit": "ns",
            "range": "± 1353464.6017394636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130340300,
            "unit": "ns",
            "range": "± 2012021.991856522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311570.8333333335,
            "unit": "ns",
            "range": "± 18610.567787516124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079969.5731026786,
            "unit": "ns",
            "range": "± 5957.746969032656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740164.2438616072,
            "unit": "ns",
            "range": "± 2767.0543840234727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947170.3543526786,
            "unit": "ns",
            "range": "± 6520.6221817044925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625576.09375,
            "unit": "ns",
            "range": "± 1136.8370371095814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574762.7864583334,
            "unit": "ns",
            "range": "± 1312.286066521444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2120467.6470588236,
            "unit": "ns",
            "range": "± 67408.26637819788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2218934.6153846155,
            "unit": "ns",
            "range": "± 55605.76906982003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2752260.4166666665,
            "unit": "ns",
            "range": "± 108108.36710505145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2785554.761904762,
            "unit": "ns",
            "range": "± 100282.74467329969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5764773.333333333,
            "unit": "ns",
            "range": "± 96445.11738116486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168725,
            "unit": "ns",
            "range": "± 7176.508393869036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169617.07317073172,
            "unit": "ns",
            "range": "± 8472.013547565626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141456.52173913043,
            "unit": "ns",
            "range": "± 3565.2140171583383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2736576.470588235,
            "unit": "ns",
            "range": "± 55670.711884838565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2505537.5,
            "unit": "ns",
            "range": "± 45938.23208033443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11802.020202020201,
            "unit": "ns",
            "range": "± 2228.387345784619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52846.666666666664,
            "unit": "ns",
            "range": "± 2983.294310627133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44836.55913978495,
            "unit": "ns",
            "range": "± 2732.6442420354842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55290.721649484534,
            "unit": "ns",
            "range": "± 13681.397669175856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2325.773195876289,
            "unit": "ns",
            "range": "± 390.3199410194006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9758.241758241758,
            "unit": "ns",
            "range": "± 1455.4927332209859"
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
          "id": "e9cc22e70f944fe75ccb6cfa93f1fd84a131ba38",
          "message": "Merge pull request #3520 from greymistcube/refactor/trie-based-account\n\n♻️ `ITrie` based `IAccount`",
          "timestamp": "2023-12-05T12:18:56+09:00",
          "tree_id": "37805f611374463cf0883181b4383c3a752277f1",
          "url": "https://github.com/planetarium/libplanet/commit/e9cc22e70f944fe75ccb6cfa93f1fd84a131ba38"
        },
        "date": 1701747025383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981160.6060606061,
            "unit": "ns",
            "range": "± 107828.13500004592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755417.1875,
            "unit": "ns",
            "range": "± 76572.4328833724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1350742.857142857,
            "unit": "ns",
            "range": "± 101326.01743641074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5167070,
            "unit": "ns",
            "range": "± 112069.61552596641"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34816.666666666664,
            "unit": "ns",
            "range": "± 1453.3955038343959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5346738.888888889,
            "unit": "ns",
            "range": "± 111971.81966322067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13420492.857142856,
            "unit": "ns",
            "range": "± 126205.04966299709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32852788.46153846,
            "unit": "ns",
            "range": "± 285522.29784047086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66737633.333333336,
            "unit": "ns",
            "range": "± 880281.7784799419"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135952820,
            "unit": "ns",
            "range": "± 1986337.8428656089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3336845.3125,
            "unit": "ns",
            "range": "± 4417.554069733831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079800.46875,
            "unit": "ns",
            "range": "± 3435.0499832917644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737119.7893415178,
            "unit": "ns",
            "range": "± 1010.6005985978554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934102.890625,
            "unit": "ns",
            "range": "± 3766.8800884151788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630429.7014508928,
            "unit": "ns",
            "range": "± 774.7464239450393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563097.2377232143,
            "unit": "ns",
            "range": "± 654.5413303435859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2263932.222222222,
            "unit": "ns",
            "range": "± 141279.87668738954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2431030.303030303,
            "unit": "ns",
            "range": "± 76689.0575834017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2810494.117647059,
            "unit": "ns",
            "range": "± 57058.14436375665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2651705.263157895,
            "unit": "ns",
            "range": "± 134957.602127223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6160295.238095238,
            "unit": "ns",
            "range": "± 114095.56291193132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184815.7894736842,
            "unit": "ns",
            "range": "± 7916.163155073572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171949.0909090909,
            "unit": "ns",
            "range": "± 6554.836289937285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139087.5,
            "unit": "ns",
            "range": "± 3590.3630069589244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2783300,
            "unit": "ns",
            "range": "± 50819.41500230469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2569400,
            "unit": "ns",
            "range": "± 34007.035471185394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11919.78021978022,
            "unit": "ns",
            "range": "± 1511.3069972870635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57649.43820224719,
            "unit": "ns",
            "range": "± 4527.068176171618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45670,
            "unit": "ns",
            "range": "± 2142.2972482827868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65686.8686868687,
            "unit": "ns",
            "range": "± 15452.690449745058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2767.3469387755104,
            "unit": "ns",
            "range": "± 579.5084141787197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11290.217391304348,
            "unit": "ns",
            "range": "± 1272.3656070233812"
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
          "id": "95f57e68db9a49bffafe2de06c19b70e1e370360",
          "message": "Merge pull request #3535 from greymistcube/refactor/remove-iaccount-delta\n\n🧹 Remove `IAccountDelta`",
          "timestamp": "2023-12-05T12:37:01+09:00",
          "tree_id": "7cef5086b6450859deb782f56a7fce91ad1f9bbf",
          "url": "https://github.com/planetarium/libplanet/commit/95f57e68db9a49bffafe2de06c19b70e1e370360"
        },
        "date": 1701748170910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007218.75,
            "unit": "ns",
            "range": "± 19377.41705353597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734609.0909090908,
            "unit": "ns",
            "range": "± 73349.5468761466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1315059.7826086956,
            "unit": "ns",
            "range": "± 91204.0027796431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5474353.93258427,
            "unit": "ns",
            "range": "± 300088.0215779802"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34176.92307692308,
            "unit": "ns",
            "range": "± 1928.849796760115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4910515.384615385,
            "unit": "ns",
            "range": "± 29864.467352631793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13144880,
            "unit": "ns",
            "range": "± 77372.68067144704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32105473.333333332,
            "unit": "ns",
            "range": "± 360751.13595834747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63904038.461538464,
            "unit": "ns",
            "range": "± 198168.97057167126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 125802523.07692307,
            "unit": "ns",
            "range": "± 790709.3852504073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3241501.3541666665,
            "unit": "ns",
            "range": "± 25657.073176078266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062199.497767857,
            "unit": "ns",
            "range": "± 4355.24864814618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742894.31640625,
            "unit": "ns",
            "range": "± 2889.243990822367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958041.4620535714,
            "unit": "ns",
            "range": "± 3962.3371074520824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630236.71875,
            "unit": "ns",
            "range": "± 1798.9303797612963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560383.0147879465,
            "unit": "ns",
            "range": "± 954.2141703759473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159421.4285714286,
            "unit": "ns",
            "range": "± 31778.90395000646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244573.8095238097,
            "unit": "ns",
            "range": "± 78143.99797348423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2735086.9565217393,
            "unit": "ns",
            "range": "± 67894.93423563839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2603778.205128205,
            "unit": "ns",
            "range": "± 109261.48148820028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6386512,
            "unit": "ns",
            "range": "± 320569.67280814995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183788.88888888888,
            "unit": "ns",
            "range": "± 9612.309816063984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169246.2962962963,
            "unit": "ns",
            "range": "± 6945.657336428307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147878.84615384616,
            "unit": "ns",
            "range": "± 6092.1143674477535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2778895.4545454546,
            "unit": "ns",
            "range": "± 67881.60896367909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2513786.6666666665,
            "unit": "ns",
            "range": "± 42956.237974855074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12838.202247191011,
            "unit": "ns",
            "range": "± 1626.1014181986375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58007.36842105263,
            "unit": "ns",
            "range": "± 7310.444904603787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48653.68421052631,
            "unit": "ns",
            "range": "± 3694.2684337928467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69432.82828282828,
            "unit": "ns",
            "range": "± 16785.53215952284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2846.875,
            "unit": "ns",
            "range": "± 473.27595711059246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10426.966292134832,
            "unit": "ns",
            "range": "± 1469.2889471490978"
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
          "id": "480b70825d4bb894ba095b697d26014510cecca8",
          "message": "Merge pull request #3537 from greymistcube/refactor/total-updated-fungible-assets\n\n🧹 Remove internal tracking of amounts for `TotalUpdatedFungibleAssets`",
          "timestamp": "2023-12-05T13:51:27+09:00",
          "tree_id": "c1644d4dc792be582a8456158f5713a5b9e1bed9",
          "url": "https://github.com/planetarium/libplanet/commit/480b70825d4bb894ba095b697d26014510cecca8"
        },
        "date": 1701752587926,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 935395.8333333334,
            "unit": "ns",
            "range": "± 81887.5672288942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1725316.6666666667,
            "unit": "ns",
            "range": "± 108148.47290189187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1353661.7021276595,
            "unit": "ns",
            "range": "± 103008.40043662685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5281852.5,
            "unit": "ns",
            "range": "± 169925.0317164783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34090.32258064516,
            "unit": "ns",
            "range": "± 1494.4388362256448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5118533.333333333,
            "unit": "ns",
            "range": "± 107855.42610910436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13551500,
            "unit": "ns",
            "range": "± 158829.28841099446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33529835.714285713,
            "unit": "ns",
            "range": "± 253890.45368530002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66155878.571428575,
            "unit": "ns",
            "range": "± 725232.3979552734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135052545.45454547,
            "unit": "ns",
            "range": "± 3285171.6667078845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3365450.809151786,
            "unit": "ns",
            "range": "± 6272.29345915528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052758.0891927083,
            "unit": "ns",
            "range": "± 4243.630931527283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744591.6434151785,
            "unit": "ns",
            "range": "± 1174.0114993862592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940110.15625,
            "unit": "ns",
            "range": "± 3580.8095740599997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613845.2073317308,
            "unit": "ns",
            "range": "± 705.0683485559471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565952.1554129465,
            "unit": "ns",
            "range": "± 1100.6293240311136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2063197.2972972973,
            "unit": "ns",
            "range": "± 69236.58107647402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290595.5555555555,
            "unit": "ns",
            "range": "± 86610.17931869303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780720,
            "unit": "ns",
            "range": "± 81492.88693309162"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2602278.378378378,
            "unit": "ns",
            "range": "± 79550.51202829536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6196552.777777778,
            "unit": "ns",
            "range": "± 205629.99292920157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173190,
            "unit": "ns",
            "range": "± 7634.815438480554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169260.9375,
            "unit": "ns",
            "range": "± 7521.010088939949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142228.57142857142,
            "unit": "ns",
            "range": "± 3368.403606627753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2775221.4285714286,
            "unit": "ns",
            "range": "± 30542.383630001732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2479138.4615384615,
            "unit": "ns",
            "range": "± 27764.11168101543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12268.888888888889,
            "unit": "ns",
            "range": "± 1382.3644005218785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54996.55172413793,
            "unit": "ns",
            "range": "± 4080.681893423789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45415.38461538462,
            "unit": "ns",
            "range": "± 2102.3224337348006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61253.53535353536,
            "unit": "ns",
            "range": "± 15583.254442073083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2546.875,
            "unit": "ns",
            "range": "± 442.46989192843154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10290.10989010989,
            "unit": "ns",
            "range": "± 1301.029929201814"
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
          "id": "f5762f93ba0366280c8aa7f7b7b6e3331ad8fe86",
          "message": "Merge pull request #3538 from greymistcube/release/3.9.0\n\n🚀 Release 3.9.0",
          "timestamp": "2023-12-05T14:10:29+09:00",
          "tree_id": "5787cbf94dba3ffe5c78fe22ca49a64303906978",
          "url": "https://github.com/planetarium/libplanet/commit/f5762f93ba0366280c8aa7f7b7b6e3331ad8fe86"
        },
        "date": 1701753805791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996719.587628866,
            "unit": "ns",
            "range": "± 123602.96790461053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771938.961038961,
            "unit": "ns",
            "range": "± 90612.05937495029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1399371.875,
            "unit": "ns",
            "range": "± 109220.50868059244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5305700,
            "unit": "ns",
            "range": "± 190665.5396237086"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35921.42857142857,
            "unit": "ns",
            "range": "± 2939.322889309551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5146341.176470588,
            "unit": "ns",
            "range": "± 98995.9788250483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13468160,
            "unit": "ns",
            "range": "± 224755.555469238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33429506.666666668,
            "unit": "ns",
            "range": "± 595155.524051927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67663620,
            "unit": "ns",
            "range": "± 855349.7289747293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138442120,
            "unit": "ns",
            "range": "± 1414897.9116126061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3758566.378348214,
            "unit": "ns",
            "range": "± 8922.274221953503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068768.0438701923,
            "unit": "ns",
            "range": "± 2185.111037310685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736055.4987980769,
            "unit": "ns",
            "range": "± 1920.7065962693252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949044.0204326923,
            "unit": "ns",
            "range": "± 3550.6727436702768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603546.3216145834,
            "unit": "ns",
            "range": "± 1156.559477326157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554624.3689903846,
            "unit": "ns",
            "range": "± 570.0675969662001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2264733.3333333335,
            "unit": "ns",
            "range": "± 66529.0360946118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2371674.358974359,
            "unit": "ns",
            "range": "± 77139.00207434395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2875236.170212766,
            "unit": "ns",
            "range": "± 111561.15972383453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2747092.592592593,
            "unit": "ns",
            "range": "± 144011.73977993755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6404908.333333333,
            "unit": "ns",
            "range": "± 282976.457840737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181140,
            "unit": "ns",
            "range": "± 8024.100416869171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174535.29411764705,
            "unit": "ns",
            "range": "± 7093.287630694579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139742.85714285713,
            "unit": "ns",
            "range": "± 3943.060342896729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2770669.230769231,
            "unit": "ns",
            "range": "± 39519.28610639335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2546707.1428571427,
            "unit": "ns",
            "range": "± 21139.771641504198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13906.315789473685,
            "unit": "ns",
            "range": "± 1990.5527151979882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60461.85567010309,
            "unit": "ns",
            "range": "± 7305.269834438143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51090.625,
            "unit": "ns",
            "range": "± 6591.526907605264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68980.80808080808,
            "unit": "ns",
            "range": "± 15963.125088955743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3136.082474226804,
            "unit": "ns",
            "range": "± 726.8920092607622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12749.45054945055,
            "unit": "ns",
            "range": "± 1902.534778562164"
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
          "id": "eec1b9883176e13c7492c6dde65f1c555ce8a351",
          "message": "Merge pull request #3539 from greymistcube/prepare/3.9.1\n\n🔧 Prepare 3.9.1",
          "timestamp": "2023-12-08T11:25:23+09:00",
          "tree_id": "23990157ea6683c0744454ad72efa3c105fe0488",
          "url": "https://github.com/planetarium/libplanet/commit/eec1b9883176e13c7492c6dde65f1c555ce8a351"
        },
        "date": 1702003067548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 944937.7551020408,
            "unit": "ns",
            "range": "± 98886.60851380277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1665378.8461538462,
            "unit": "ns",
            "range": "± 68658.19956327128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1338582.6530612244,
            "unit": "ns",
            "range": "± 131406.90956547335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5163043.243243244,
            "unit": "ns",
            "range": "± 172194.12582015383"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34121.42857142857,
            "unit": "ns",
            "range": "± 1582.7780436320586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5036653.846153846,
            "unit": "ns",
            "range": "± 41492.461471625895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13156513.333333334,
            "unit": "ns",
            "range": "± 243225.5181239556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32363850,
            "unit": "ns",
            "range": "± 382968.2086624866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65333493.333333336,
            "unit": "ns",
            "range": "± 464858.5506315207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126363607.14285715,
            "unit": "ns",
            "range": "± 1157954.081369568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3232071.3448660714,
            "unit": "ns",
            "range": "± 9550.30787304036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048695.4799107143,
            "unit": "ns",
            "range": "± 5093.228280746246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736234.2838541666,
            "unit": "ns",
            "range": "± 3380.289186823237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925117.299107143,
            "unit": "ns",
            "range": "± 4767.207731882159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619231.7317708334,
            "unit": "ns",
            "range": "± 3320.4924243994833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555885.80078125,
            "unit": "ns",
            "range": "± 3414.99361882973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2322485.714285714,
            "unit": "ns",
            "range": "± 38012.25727705083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2219170.7317073173,
            "unit": "ns",
            "range": "± 76544.01427904876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2742060.714285714,
            "unit": "ns",
            "range": "± 78213.02505567591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2674074.193548387,
            "unit": "ns",
            "range": "± 79706.0222222551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6366107.05882353,
            "unit": "ns",
            "range": "± 335795.77119073406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171947.0588235294,
            "unit": "ns",
            "range": "± 8810.323871611592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171396.61016949153,
            "unit": "ns",
            "range": "± 7354.9646873597285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141505.26315789475,
            "unit": "ns",
            "range": "± 4818.598392625888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2732711.111111111,
            "unit": "ns",
            "range": "± 58110.70458123963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2500120,
            "unit": "ns",
            "range": "± 24521.279388668587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11405.102040816326,
            "unit": "ns",
            "range": "± 1653.806758241131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57534.73684210526,
            "unit": "ns",
            "range": "± 8482.043215573844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43468.25396825397,
            "unit": "ns",
            "range": "± 2004.4165265431136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55412.121212121216,
            "unit": "ns",
            "range": "± 12937.986096377428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2344.3298969072166,
            "unit": "ns",
            "range": "± 403.36322345296213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10363.440860215054,
            "unit": "ns",
            "range": "± 1142.7260452091095"
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
          "id": "6f396be522b4f0c642971a3269410d93c660b5eb",
          "message": "Merge pull request #3542 from greymistcube/feature/tx-status-included\n\n✨ Added `TxStatus.INCLUDED`",
          "timestamp": "2023-12-08T12:01:59+09:00",
          "tree_id": "d5ed442d625d23764bdc746fa0e52be794b536a5",
          "url": "https://github.com/planetarium/libplanet/commit/6f396be522b4f0c642971a3269410d93c660b5eb"
        },
        "date": 1702005321541,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924378.350515464,
            "unit": "ns",
            "range": "± 94857.05608397051"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1708334.6666666667,
            "unit": "ns",
            "range": "± 64229.00854550643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1339492.9292929294,
            "unit": "ns",
            "range": "± 118923.26993977427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5259182.608695652,
            "unit": "ns",
            "range": "± 200464.46657073146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34598.86363636364,
            "unit": "ns",
            "range": "± 2407.196791910526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4990480,
            "unit": "ns",
            "range": "± 48043.33163182706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13874400,
            "unit": "ns",
            "range": "± 279437.49590498244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32432207.692307692,
            "unit": "ns",
            "range": "± 193100.86510050675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63822828.571428575,
            "unit": "ns",
            "range": "± 680912.0980528436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127963253.33333333,
            "unit": "ns",
            "range": "± 946881.2098271934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3304897.65625,
            "unit": "ns",
            "range": "± 6128.275562229892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057091.8489583333,
            "unit": "ns",
            "range": "± 3588.9431573490697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728385.6166294643,
            "unit": "ns",
            "range": "± 2891.8188311669473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1890605.8872767857,
            "unit": "ns",
            "range": "± 6547.329204966868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604069.3684895834,
            "unit": "ns",
            "range": "± 1150.520202114203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568457.6520647322,
            "unit": "ns",
            "range": "± 1346.5418796234358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2083178.5714285714,
            "unit": "ns",
            "range": "± 26722.395636832953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239910.714285714,
            "unit": "ns",
            "range": "± 96079.71061679875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2736270,
            "unit": "ns",
            "range": "± 81871.08095384917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2617845,
            "unit": "ns",
            "range": "± 80410.84551802125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6216475,
            "unit": "ns",
            "range": "± 171427.01421801554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170750.6329113924,
            "unit": "ns",
            "range": "± 8870.086193575971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170774.59016393442,
            "unit": "ns",
            "range": "± 7703.866036774543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144401.92307692306,
            "unit": "ns",
            "range": "± 5522.662415070249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730468.75,
            "unit": "ns",
            "range": "± 52069.859723900416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2503453.3333333335,
            "unit": "ns",
            "range": "± 45289.95263326966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11775.806451612903,
            "unit": "ns",
            "range": "± 1412.9758318040235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58748.45360824742,
            "unit": "ns",
            "range": "± 5779.275354698853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44507.142857142855,
            "unit": "ns",
            "range": "± 1634.743637266064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60191.48936170213,
            "unit": "ns",
            "range": "± 8856.983874285193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2784.536082474227,
            "unit": "ns",
            "range": "± 587.4273370287253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12681.443298969072,
            "unit": "ns",
            "range": "± 1966.4546088131142"
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
          "id": "d049d46d1b7373a90c74d6d51795f3292fb27c25",
          "message": "Merge pull request #3543 from greymistcube/release/3.9.1\n\n🚀 Release 3.9.1",
          "timestamp": "2023-12-08T12:05:28+09:00",
          "tree_id": "9bee94af45c895ba31e0991f1abcb83f913c2b87",
          "url": "https://github.com/planetarium/libplanet/commit/d049d46d1b7373a90c74d6d51795f3292fb27c25"
        },
        "date": 1702005451588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948231.6326530612,
            "unit": "ns",
            "range": "± 103555.76549076891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1703216.1290322582,
            "unit": "ns",
            "range": "± 73723.56251576469"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1305855.2083333333,
            "unit": "ns",
            "range": "± 95557.90073897787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5452604.651162791,
            "unit": "ns",
            "range": "± 294306.03475932876"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34159.67741935484,
            "unit": "ns",
            "range": "± 1441.1356720945444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5148115.384615385,
            "unit": "ns",
            "range": "± 39853.68753649291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12775653.333333334,
            "unit": "ns",
            "range": "± 59595.875536419306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32339385.714285713,
            "unit": "ns",
            "range": "± 155764.14052190405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65442273.333333336,
            "unit": "ns",
            "range": "± 592163.2345738397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128741500,
            "unit": "ns",
            "range": "± 981242.9959713634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3325232.03125,
            "unit": "ns",
            "range": "± 17181.583857370195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063631.0026041667,
            "unit": "ns",
            "range": "± 2289.7604827732134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737311.3978794643,
            "unit": "ns",
            "range": "± 2051.951331162691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958902.3716517857,
            "unit": "ns",
            "range": "± 4405.413266652653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604490.5794270834,
            "unit": "ns",
            "range": "± 1267.26908518968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565007.9231770834,
            "unit": "ns",
            "range": "± 1821.7814220227945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2156172,
            "unit": "ns",
            "range": "± 46391.068824361726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286182.6086956523,
            "unit": "ns",
            "range": "± 87249.99918331188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2831311.111111111,
            "unit": "ns",
            "range": "± 92890.1018186169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2621682.926829268,
            "unit": "ns",
            "range": "± 82539.47813755255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6281962.121212121,
            "unit": "ns",
            "range": "± 293717.2688226928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169651.92307692306,
            "unit": "ns",
            "range": "± 6917.227439151267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166793.33333333334,
            "unit": "ns",
            "range": "± 8432.35937829293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141466.66666666666,
            "unit": "ns",
            "range": "± 4895.220303334858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2727431.25,
            "unit": "ns",
            "range": "± 38619.52388365242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540826.6666666665,
            "unit": "ns",
            "range": "± 33982.421225994956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11479.166666666666,
            "unit": "ns",
            "range": "± 1482.5239266138187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55236.458333333336,
            "unit": "ns",
            "range": "± 4767.391867604157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45236.84210526316,
            "unit": "ns",
            "range": "± 1822.8344861533024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58592.26804123711,
            "unit": "ns",
            "range": "± 12189.184371225945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2529.381443298969,
            "unit": "ns",
            "range": "± 559.1917799247369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10551.648351648351,
            "unit": "ns",
            "range": "± 1442.4025202851772"
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
          "id": "0a2a1bec0b4f69e6827d6cf29e1dc239591ce3b0",
          "message": "Merge pull request #3544 from greymistcube/prepare/3.9.2\n\n🔧 Prepare 3.9.2",
          "timestamp": "2023-12-08T17:06:51+09:00",
          "tree_id": "b3037719533c28a873c12113bb86fca1a23b8831",
          "url": "https://github.com/planetarium/libplanet/commit/0a2a1bec0b4f69e6827d6cf29e1dc239591ce3b0"
        },
        "date": 1702023543941,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 927010.3092783506,
            "unit": "ns",
            "range": "± 96292.82865792768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1623638.2978723405,
            "unit": "ns",
            "range": "± 56480.50665337899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1286791.9191919193,
            "unit": "ns",
            "range": "± 110265.67885808449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5390085.714285715,
            "unit": "ns",
            "range": "± 318969.11203593"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34033.333333333336,
            "unit": "ns",
            "range": "± 1867.5731464562082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5059826.666666667,
            "unit": "ns",
            "range": "± 49843.461624035175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12978336.666666666,
            "unit": "ns",
            "range": "± 65370.612299266046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31951120,
            "unit": "ns",
            "range": "± 169846.13709388356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64358033.333333336,
            "unit": "ns",
            "range": "± 594648.3122300906"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130002026.66666667,
            "unit": "ns",
            "range": "± 1094954.822594891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3238073.6197916665,
            "unit": "ns",
            "range": "± 4373.457508860736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1030260.9114583334,
            "unit": "ns",
            "range": "± 2178.8447004658547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732590.8428485577,
            "unit": "ns",
            "range": "± 1031.5521677263791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1896878.4104567308,
            "unit": "ns",
            "range": "± 2167.546377269396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616775.3580729166,
            "unit": "ns",
            "range": "± 773.7954351938189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558548.4244791666,
            "unit": "ns",
            "range": "± 2130.2021862407237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2073065.9574468085,
            "unit": "ns",
            "range": "± 80445.6318607568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2188850,
            "unit": "ns",
            "range": "± 58476.93049399908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2734160,
            "unit": "ns",
            "range": "± 59762.11966930575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2587176.1904761903,
            "unit": "ns",
            "range": "± 50084.62742960064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6339682.394366197,
            "unit": "ns",
            "range": "± 307630.3174612801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163297.67441860464,
            "unit": "ns",
            "range": "± 5556.355793233248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159169.38775510204,
            "unit": "ns",
            "range": "± 5540.6529429313305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137257.14285714287,
            "unit": "ns",
            "range": "± 2564.0927106037775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2745260,
            "unit": "ns",
            "range": "± 36059.153781371126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2478420,
            "unit": "ns",
            "range": "± 44024.65542981893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9806.25,
            "unit": "ns",
            "range": "± 1091.0943323586935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49532.608695652176,
            "unit": "ns",
            "range": "± 2949.8038189806803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43246.666666666664,
            "unit": "ns",
            "range": "± 1942.3877204351284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46745.36082474227,
            "unit": "ns",
            "range": "± 9101.76288577471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2052.127659574468,
            "unit": "ns",
            "range": "± 339.74333240682387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8888.04347826087,
            "unit": "ns",
            "range": "± 796.1228011886008"
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
          "id": "b37461e9aa2120125b450d265ab7c0f02dc0bffb",
          "message": "Merge pull request #3549 from greymistcube/feature/new-query-types\n\n✨ New query types",
          "timestamp": "2023-12-14T10:56:10+09:00",
          "tree_id": "0fa6d0e6cbcf60bfa543a2fe18cb6a1cea6ff2c1",
          "url": "https://github.com/planetarium/libplanet/commit/b37461e9aa2120125b450d265ab7c0f02dc0bffb"
        },
        "date": 1702519685584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956987.7551020408,
            "unit": "ns",
            "range": "± 104771.18245614579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758811.2359550563,
            "unit": "ns",
            "range": "± 105433.22901917403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1363196.4646464647,
            "unit": "ns",
            "range": "± 119763.85976044979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5506323.076923077,
            "unit": "ns",
            "range": "± 254247.22206522652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35092.13483146067,
            "unit": "ns",
            "range": "± 2485.559417510981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5146828.571428572,
            "unit": "ns",
            "range": "± 20688.548618886824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12904546.153846154,
            "unit": "ns",
            "range": "± 76158.32866890545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32877900,
            "unit": "ns",
            "range": "± 446109.0505694768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64342328.571428575,
            "unit": "ns",
            "range": "± 766390.2785923627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129535514.28571428,
            "unit": "ns",
            "range": "± 863194.5897537934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310106.1197916665,
            "unit": "ns",
            "range": "± 14635.191266577542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061728.2291666667,
            "unit": "ns",
            "range": "± 6095.4865313575165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728994.8091947115,
            "unit": "ns",
            "range": "± 1690.8085532898115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925572.2935267857,
            "unit": "ns",
            "range": "± 2839.1454584949515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619591.0226004465,
            "unit": "ns",
            "range": "± 1895.2869050308082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564823.7444196428,
            "unit": "ns",
            "range": "± 1747.7066262522046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2075110.7142857143,
            "unit": "ns",
            "range": "± 54854.739754600734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2197610.606060606,
            "unit": "ns",
            "range": "± 60045.581328863926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2780394.117647059,
            "unit": "ns",
            "range": "± 89072.13689145436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599457.8947368423,
            "unit": "ns",
            "range": "± 122924.60048138765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6405309.090909091,
            "unit": "ns",
            "range": "± 299878.38957061997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170027.868852459,
            "unit": "ns",
            "range": "± 7549.616571887188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169843.03797468354,
            "unit": "ns",
            "range": "± 8178.014359091931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140666.66666666666,
            "unit": "ns",
            "range": "± 4083.5526565541645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2743483.3333333335,
            "unit": "ns",
            "range": "± 17531.417685418543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2524260,
            "unit": "ns",
            "range": "± 35669.95133962799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10140.217391304348,
            "unit": "ns",
            "range": "± 1506.3280280356823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51904.34782608696,
            "unit": "ns",
            "range": "± 4605.393709374571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44101.78571428572,
            "unit": "ns",
            "range": "± 1866.108354198756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54638.65979381443,
            "unit": "ns",
            "range": "± 10583.870159829883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2286.1702127659573,
            "unit": "ns",
            "range": "± 343.7932186179596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10315.463917525773,
            "unit": "ns",
            "range": "± 1899.90900035291"
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
          "id": "fda1f3c8a71be27993843f899c00a899507f6674",
          "message": "Merge pull request #3551 from greymistcube/refactor/bencodex-value-type\n\n♻️ Allow to choose output format of `BencodexValueType`",
          "timestamp": "2023-12-14T17:39:43+09:00",
          "tree_id": "ca6b1852c79fbb52005cefb7f809aa6505585af3",
          "url": "https://github.com/planetarium/libplanet/commit/fda1f3c8a71be27993843f899c00a899507f6674"
        },
        "date": 1702544008265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932412.6315789474,
            "unit": "ns",
            "range": "± 85009.24010115366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1742382.2580645161,
            "unit": "ns",
            "range": "± 78139.93232864841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1363145.2631578948,
            "unit": "ns",
            "range": "± 100109.63008539322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5584236.458333333,
            "unit": "ns",
            "range": "± 345909.52425827726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35349.43820224719,
            "unit": "ns",
            "range": "± 2287.2235846657577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4962553.846153846,
            "unit": "ns",
            "range": "± 30166.00225929336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13521340,
            "unit": "ns",
            "range": "± 82470.10540622757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33710293.333333336,
            "unit": "ns",
            "range": "± 298811.14548601874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67494493.33333333,
            "unit": "ns",
            "range": "± 359433.24726309784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135206200,
            "unit": "ns",
            "range": "± 1630159.6660827666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3425541.1551339286,
            "unit": "ns",
            "range": "± 10983.601902247285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065672.9036458333,
            "unit": "ns",
            "range": "± 2433.6243034578574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749595.8984375,
            "unit": "ns",
            "range": "± 1216.7394208213316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2022378.013392857,
            "unit": "ns",
            "range": "± 55084.02870516296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622200.3155048077,
            "unit": "ns",
            "range": "± 757.3967010200458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560488.9518229166,
            "unit": "ns",
            "range": "± 992.0840684196777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2226302.7027027025,
            "unit": "ns",
            "range": "± 75450.50801127292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307254.054054054,
            "unit": "ns",
            "range": "± 46438.79840173513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2927085,
            "unit": "ns",
            "range": "± 66902.03580412813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2718429.3333333335,
            "unit": "ns",
            "range": "± 137377.25014593086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6174300,
            "unit": "ns",
            "range": "± 145129.9745876417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184003.44827586206,
            "unit": "ns",
            "range": "± 12723.467132747563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176576.92307692306,
            "unit": "ns",
            "range": "± 6886.378011089274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141200,
            "unit": "ns",
            "range": "± 4945.60151639559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2849092.8571428573,
            "unit": "ns",
            "range": "± 42499.02649175923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485442.8571428573,
            "unit": "ns",
            "range": "± 37882.24090288451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12151.136363636364,
            "unit": "ns",
            "range": "± 1470.3189362497753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57635.16483516483,
            "unit": "ns",
            "range": "± 4491.235257609442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46429.166666666664,
            "unit": "ns",
            "range": "± 3330.1467224406874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57459.34065934066,
            "unit": "ns",
            "range": "± 10767.027630914858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2684.94623655914,
            "unit": "ns",
            "range": "± 617.6649993531283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11264.21052631579,
            "unit": "ns",
            "range": "± 1711.719043203861"
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
          "id": "ec2bbdc099f4454a97116d141753fab743217793",
          "message": "Merge pull request #3553 from riemannulus/fix/set-compaction-limit\n\nfeat: new argument for `RocksDBKeyValueStore.ctor`",
          "timestamp": "2023-12-15T12:36:48+09:00",
          "tree_id": "bb7d4a1c65526b9d6a6dd9d3feb97ee8ff59ca56",
          "url": "https://github.com/planetarium/libplanet/commit/ec2bbdc099f4454a97116d141753fab743217793"
        },
        "date": 1702612106294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1029487.5,
            "unit": "ns",
            "range": "± 118068.19906977046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815683.5443037974,
            "unit": "ns",
            "range": "± 93674.27667376879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495379.797979798,
            "unit": "ns",
            "range": "± 168168.1507737201"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5616977,
            "unit": "ns",
            "range": "± 338292.98157787503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34829.76190476191,
            "unit": "ns",
            "range": "± 1874.5460341623832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4927693.75,
            "unit": "ns",
            "range": "± 92066.44317194693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12730260,
            "unit": "ns",
            "range": "± 135475.82177537913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31565992.85714286,
            "unit": "ns",
            "range": "± 466466.30922003643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63734166.666666664,
            "unit": "ns",
            "range": "± 911121.2712654561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132900553.33333333,
            "unit": "ns",
            "range": "± 1879312.405363297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3214656.0416666665,
            "unit": "ns",
            "range": "± 8821.422292124285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061697.0145089286,
            "unit": "ns",
            "range": "± 3774.113750871721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734632.5474330357,
            "unit": "ns",
            "range": "± 2281.450822045481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915338.9090401786,
            "unit": "ns",
            "range": "± 1781.1695984579894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616991.8736049107,
            "unit": "ns",
            "range": "± 1165.4280749254106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564117.9478236607,
            "unit": "ns",
            "range": "± 1012.172586029037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2100151.515151515,
            "unit": "ns",
            "range": "± 66233.4513350888"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249894.5945945946,
            "unit": "ns",
            "range": "± 75225.8080195367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2819164.705882353,
            "unit": "ns",
            "range": "± 90797.08272697452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2705341.1764705884,
            "unit": "ns",
            "range": "± 77644.23964525074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6292470.689655173,
            "unit": "ns",
            "range": "± 272924.03994879633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181423.7288135593,
            "unit": "ns",
            "range": "± 8053.213943621619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168447.14285714287,
            "unit": "ns",
            "range": "± 8072.5284983149895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138505.26315789475,
            "unit": "ns",
            "range": "± 3083.3736365312816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766161.111111111,
            "unit": "ns",
            "range": "± 57813.55569606684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2467180,
            "unit": "ns",
            "range": "± 55680.25824199037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11642.105263157895,
            "unit": "ns",
            "range": "± 1455.552753626273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55453.76344086022,
            "unit": "ns",
            "range": "± 4973.485330704803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46173.68421052631,
            "unit": "ns",
            "range": "± 3002.134365793769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60780.208333333336,
            "unit": "ns",
            "range": "± 14040.59242858413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2467.3469387755104,
            "unit": "ns",
            "range": "± 548.6206715748069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10445.744680851063,
            "unit": "ns",
            "range": "± 1304.3900147023792"
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
          "id": "2729ebda0cff75bd15c92165834479e10b0be756",
          "message": "Merge pull request #3555 from greymistcube/chore/error-logging-for-evaluation-failure\n\n♻️ Additional error logging for better debugging",
          "timestamp": "2023-12-15T13:22:22+09:00",
          "tree_id": "b5f8ba557541555efe7169019c7b0391f4389796",
          "url": "https://github.com/planetarium/libplanet/commit/2729ebda0cff75bd15c92165834479e10b0be756"
        },
        "date": 1702614872097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928622.2222222222,
            "unit": "ns",
            "range": "± 109798.66133858841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755056.8421052631,
            "unit": "ns",
            "range": "± 132072.5531206009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1304550,
            "unit": "ns",
            "range": "± 119490.05072482905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5375969.841269841,
            "unit": "ns",
            "range": "± 245182.19139857334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33995.890410958906,
            "unit": "ns",
            "range": "± 1591.5085747111118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5054160,
            "unit": "ns",
            "range": "± 55176.88180492158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12959120,
            "unit": "ns",
            "range": "± 159316.3349171345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33609253.333333336,
            "unit": "ns",
            "range": "± 519856.5844355079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64618713.333333336,
            "unit": "ns",
            "range": "± 814243.0032741776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131362942.85714285,
            "unit": "ns",
            "range": "± 1232518.3042574544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310481.550480769,
            "unit": "ns",
            "range": "± 8883.009608484803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069872.8934151786,
            "unit": "ns",
            "range": "± 2428.8937667975647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725769.9079241072,
            "unit": "ns",
            "range": "± 2066.3860352054635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2013066.127232143,
            "unit": "ns",
            "range": "± 3647.586880785604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611785.0864955357,
            "unit": "ns",
            "range": "± 1660.9174815620909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577395.8984375,
            "unit": "ns",
            "range": "± 2091.12776200002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2119082.6086956523,
            "unit": "ns",
            "range": "± 64601.85516547691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253864.285714286,
            "unit": "ns",
            "range": "± 62651.05133039854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826044.827586207,
            "unit": "ns",
            "range": "± 81818.77441816543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2592497.5308641978,
            "unit": "ns",
            "range": "± 135396.04312470567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6324917.073170732,
            "unit": "ns",
            "range": "± 222764.07576451707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178657.62711864407,
            "unit": "ns",
            "range": "± 7415.6917362797485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169620.1754385965,
            "unit": "ns",
            "range": "± 6607.029938749242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143208,
            "unit": "ns",
            "range": "± 5767.4257689197875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2713738.4615384615,
            "unit": "ns",
            "range": "± 32768.51991524636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2519546.153846154,
            "unit": "ns",
            "range": "± 32296.893952427672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13094.845360824742,
            "unit": "ns",
            "range": "± 2094.604732701207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61295.833333333336,
            "unit": "ns",
            "range": "± 6862.2064376541775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48493.93939393939,
            "unit": "ns",
            "range": "± 4441.658501189324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70505.0505050505,
            "unit": "ns",
            "range": "± 16573.95531067585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2601.0204081632655,
            "unit": "ns",
            "range": "± 724.6036809350156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10774.736842105263,
            "unit": "ns",
            "range": "± 1563.4773315214425"
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
          "id": "fcdc6c6a5a90b58bff35a75bc5ceb515520c4d72",
          "message": "Merge pull request #3556 from greymistcube/revert/all-incompatible-api-changes\n\n⏪ Revert all incompatible api changes",
          "timestamp": "2023-12-15T14:03:35+09:00",
          "tree_id": "0ff2e84ad8519699dbabc9df3474a2991791b687",
          "url": "https://github.com/planetarium/libplanet/commit/fcdc6c6a5a90b58bff35a75bc5ceb515520c4d72"
        },
        "date": 1702617265669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 912804.081632653,
            "unit": "ns",
            "range": "± 90919.1879971171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1627052.6315789474,
            "unit": "ns",
            "range": "± 70422.67569383956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1306424.2424242424,
            "unit": "ns",
            "range": "± 116928.3070866277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5381994.94949495,
            "unit": "ns",
            "range": "± 313655.4233009033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33125,
            "unit": "ns",
            "range": "± 1690.1380614218078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4946500,
            "unit": "ns",
            "range": "± 45105.71709091558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12857336.666666666,
            "unit": "ns",
            "range": "± 88321.85352178593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31411007.14285714,
            "unit": "ns",
            "range": "± 353457.86706651305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64369550,
            "unit": "ns",
            "range": "± 411136.8156147612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129317600,
            "unit": "ns",
            "range": "± 860008.3670689323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3186336.5792410714,
            "unit": "ns",
            "range": "± 3359.4619482512685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045821.7317708334,
            "unit": "ns",
            "range": "± 1518.1665993719346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743163.0231584822,
            "unit": "ns",
            "range": "± 1096.801059500249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1879569.0885416667,
            "unit": "ns",
            "range": "± 3331.437506850297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627016.1458333334,
            "unit": "ns",
            "range": "± 3814.8168330219805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564697.94921875,
            "unit": "ns",
            "range": "± 1706.8056445988773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116694.736842105,
            "unit": "ns",
            "range": "± 91932.19050134692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2173357.5757575757,
            "unit": "ns",
            "range": "± 56256.61644588478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2715019.0476190476,
            "unit": "ns",
            "range": "± 63542.76212951102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2624776,
            "unit": "ns",
            "range": "± 277906.8662103703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6336833.707865168,
            "unit": "ns",
            "range": "± 350938.71646557405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164510.3448275862,
            "unit": "ns",
            "range": "± 3523.8316024693318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 152730.95238095237,
            "unit": "ns",
            "range": "± 5014.831081718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139488.23529411765,
            "unit": "ns",
            "range": "± 2727.8385108316934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2672307.1428571427,
            "unit": "ns",
            "range": "± 36639.54283149694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2615406.6666666665,
            "unit": "ns",
            "range": "± 35900.76534533704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9507.692307692309,
            "unit": "ns",
            "range": "± 941.1849232903488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48701.49253731343,
            "unit": "ns",
            "range": "± 2049.574422736926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44636.73469387755,
            "unit": "ns",
            "range": "± 1778.071740860379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46670.833333333336,
            "unit": "ns",
            "range": "± 8444.330600956218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2065.9574468085107,
            "unit": "ns",
            "range": "± 296.4133961135388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8227.272727272728,
            "unit": "ns",
            "range": "± 571.2915942707633"
          }
        ]
      }
    ]
  }
}