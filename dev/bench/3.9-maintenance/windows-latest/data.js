window.BENCHMARK_DATA = {
  "lastUpdate": 1705552294784,
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
          "id": "81408bf2f1fdce9f3674009438e2a038322ec2b6",
          "message": "Merge pull request #3557 from greymistcube/release/3.9.2\n\n🚀 Release 3.9.2",
          "timestamp": "2023-12-15T14:16:05+09:00",
          "tree_id": "1dc3d85314af7613e4e013cb5bf0ffe3c279cd5b",
          "url": "https://github.com/planetarium/libplanet/commit/81408bf2f1fdce9f3674009438e2a038322ec2b6"
        },
        "date": 1702618077454,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 946271.4285714285,
            "unit": "ns",
            "range": "± 105754.79126871111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1748178.082191781,
            "unit": "ns",
            "range": "± 86758.70632996269"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1380717.7083333333,
            "unit": "ns",
            "range": "± 103886.53729180913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5301973.333333333,
            "unit": "ns",
            "range": "± 198172.97471928637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34760.56338028169,
            "unit": "ns",
            "range": "± 1686.7956835575583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5070353.333333333,
            "unit": "ns",
            "range": "± 79211.06404200531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13463507.142857144,
            "unit": "ns",
            "range": "± 116839.84083604961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32528261.53846154,
            "unit": "ns",
            "range": "± 330046.9576147752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65444550,
            "unit": "ns",
            "range": "± 1005164.9039987266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131540740,
            "unit": "ns",
            "range": "± 1585283.685203197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3297797.293526786,
            "unit": "ns",
            "range": "± 9442.695882650953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055151.7159598214,
            "unit": "ns",
            "range": "± 3385.0428666954394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744547.7213541666,
            "unit": "ns",
            "range": "± 1903.1186075004034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941955.1692708333,
            "unit": "ns",
            "range": "± 2628.4412066069194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614644.8660714285,
            "unit": "ns",
            "range": "± 1174.5741918387566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563671.640625,
            "unit": "ns",
            "range": "± 1128.5451524341754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2306388.4615384615,
            "unit": "ns",
            "range": "± 62096.27574612234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2234670.1754385964,
            "unit": "ns",
            "range": "± 96294.53323177704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2813076.6666666665,
            "unit": "ns",
            "range": "± 78975.11909950887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2705786.4583333335,
            "unit": "ns",
            "range": "± 261040.52019392324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6293740.625,
            "unit": "ns",
            "range": "± 169757.16025446847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175849.35064935064,
            "unit": "ns",
            "range": "± 8541.056007935458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164262.06896551725,
            "unit": "ns",
            "range": "± 7065.180932516548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139574.1935483871,
            "unit": "ns",
            "range": "± 4210.3022648368515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2772373.3333333335,
            "unit": "ns",
            "range": "± 49199.455087961906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2512573.3333333335,
            "unit": "ns",
            "range": "± 32918.806319850206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12023.711340206186,
            "unit": "ns",
            "range": "± 1935.2418666601409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56553.06122448979,
            "unit": "ns",
            "range": "± 6315.032043272079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46965.95744680851,
            "unit": "ns",
            "range": "± 2781.024534328193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62455.102040816324,
            "unit": "ns",
            "range": "± 14135.107440717044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2821.505376344086,
            "unit": "ns",
            "range": "± 458.22186157723047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10460.63829787234,
            "unit": "ns",
            "range": "± 1303.1366695756706"
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
          "id": "4719f6e54611e13a98b8589e3be2ef822dfd9006",
          "message": "Merge pull request #3558 from greymistcube/prepare/3.9.3\n\n🔧 Prepare 3.9.3",
          "timestamp": "2023-12-15T14:32:00+09:00",
          "tree_id": "10171e9d05502bea7fd706aa57892745ff0e2867",
          "url": "https://github.com/planetarium/libplanet/commit/4719f6e54611e13a98b8589e3be2ef822dfd9006"
        },
        "date": 1702619054894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017518,
            "unit": "ns",
            "range": "± 123203.29703380507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1808323.3333333333,
            "unit": "ns",
            "range": "± 80137.07930930592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1438843.1578947369,
            "unit": "ns",
            "range": "± 112734.19750809402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384450,
            "unit": "ns",
            "range": "± 211221.0760760474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36106.666666666664,
            "unit": "ns",
            "range": "± 2781.875529328039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5433193.333333333,
            "unit": "ns",
            "range": "± 52749.90137657221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13498257.142857144,
            "unit": "ns",
            "range": "± 94053.5421513129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35454953.333333336,
            "unit": "ns",
            "range": "± 310594.87362770416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69311721.42857143,
            "unit": "ns",
            "range": "± 407733.0181882246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137562173.33333334,
            "unit": "ns",
            "range": "± 1796136.2012731133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283915.3180803573,
            "unit": "ns",
            "range": "± 25983.874253901176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065332.3617788462,
            "unit": "ns",
            "range": "± 3248.906436126562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743045.2669270834,
            "unit": "ns",
            "range": "± 3111.1684635021716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958826.841517857,
            "unit": "ns",
            "range": "± 2875.3252537841213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628784.4275841346,
            "unit": "ns",
            "range": "± 1370.6677225376786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568217.4654447115,
            "unit": "ns",
            "range": "± 825.3692492718951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2408356,
            "unit": "ns",
            "range": "± 56187.795827919785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2367269.230769231,
            "unit": "ns",
            "range": "± 30591.34912071779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2892006.25,
            "unit": "ns",
            "range": "± 108685.37533251755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2738023.4567901236,
            "unit": "ns",
            "range": "± 132335.57842810542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6101408.333333333,
            "unit": "ns",
            "range": "± 90893.07862771643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183740.74074074073,
            "unit": "ns",
            "range": "± 6551.9554482358435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176219.40298507462,
            "unit": "ns",
            "range": "± 8344.045941177206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148549.01960784313,
            "unit": "ns",
            "range": "± 6073.956619832566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2812614.285714286,
            "unit": "ns",
            "range": "± 38172.031790160334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2666086.6666666665,
            "unit": "ns",
            "range": "± 38537.900948596165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13186.206896551725,
            "unit": "ns",
            "range": "± 1427.7297325664301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64442.857142857145,
            "unit": "ns",
            "range": "± 8652.810758396288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49530.85106382979,
            "unit": "ns",
            "range": "± 4860.970888369884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72305.0505050505,
            "unit": "ns",
            "range": "± 15135.357804319334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3771.4285714285716,
            "unit": "ns",
            "range": "± 1004.8336786003365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15161.052631578947,
            "unit": "ns",
            "range": "± 2156.153723689285"
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
          "id": "e16b80ca83f7181506f460b09bd550937bce4d54",
          "message": "Merge pull request #3559 from greymistcube/feature/new-query-types\n\n✨ New Query Types",
          "timestamp": "2023-12-17T16:00:40+09:00",
          "tree_id": "971b4e69b096d781d447d43150eecda2f505b388",
          "url": "https://github.com/planetarium/libplanet/commit/e16b80ca83f7181506f460b09bd550937bce4d54"
        },
        "date": 1702797058501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 915305.1020408163,
            "unit": "ns",
            "range": "± 94625.04667495232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1634438.6363636365,
            "unit": "ns",
            "range": "± 50338.926709687585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1277057.142857143,
            "unit": "ns",
            "range": "± 90521.60988222703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5191119.565217392,
            "unit": "ns",
            "range": "± 198440.0873698717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33709.43396226415,
            "unit": "ns",
            "range": "± 1413.705462597577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5062257.142857143,
            "unit": "ns",
            "range": "± 42007.393383797316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12988236.666666666,
            "unit": "ns",
            "range": "± 118747.09540307362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31950842.85714286,
            "unit": "ns",
            "range": "± 194796.77265643454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65260100,
            "unit": "ns",
            "range": "± 434922.58917125536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126327785.71428572,
            "unit": "ns",
            "range": "± 691535.0937834362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3240996.6145833335,
            "unit": "ns",
            "range": "± 6976.383355529374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1096315.7161458333,
            "unit": "ns",
            "range": "± 2124.833299354545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732768.7434895834,
            "unit": "ns",
            "range": "± 1725.5193917474874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910905.7241586538,
            "unit": "ns",
            "range": "± 1320.6201135788767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 607127.8669084822,
            "unit": "ns",
            "range": "± 915.5480198844296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548004.1224888393,
            "unit": "ns",
            "range": "± 948.3019190747488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2099056.25,
            "unit": "ns",
            "range": "± 64683.72651452954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2196400,
            "unit": "ns",
            "range": "± 132317.71149091702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2796409.090909091,
            "unit": "ns",
            "range": "± 68591.5509797006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2586718.5185185187,
            "unit": "ns",
            "range": "± 108838.70500514861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6113289.743589744,
            "unit": "ns",
            "range": "± 212446.42147445303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165813.58024691357,
            "unit": "ns",
            "range": "± 8685.645529930687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159376.4705882353,
            "unit": "ns",
            "range": "± 6455.1247311045545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141922.85714285713,
            "unit": "ns",
            "range": "± 4217.685852405301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724657.1428571427,
            "unit": "ns",
            "range": "± 39067.80524413173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2486221.4285714286,
            "unit": "ns",
            "range": "± 30425.044809307212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10294.565217391304,
            "unit": "ns",
            "range": "± 1271.873596804888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49508.88888888889,
            "unit": "ns",
            "range": "± 3220.044121564016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43465.09433962264,
            "unit": "ns",
            "range": "± 1707.1564556319393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46932.96703296703,
            "unit": "ns",
            "range": "± 7181.009754825647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2249.4845360824743,
            "unit": "ns",
            "range": "± 480.69474707192626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9283.908045977012,
            "unit": "ns",
            "range": "± 740.1875254565468"
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
          "id": "ffc6fb26115058977fc138bdc6785f5635858c59",
          "message": "Merge pull request #3560 from greymistcube/refactor/bencodex-value-type\n\n♻️ Allow to choose output format of `BencodexValueType`",
          "timestamp": "2023-12-17T17:17:36+09:00",
          "tree_id": "3c00699ed21dbef772b741b88a672b59f77cf114",
          "url": "https://github.com/planetarium/libplanet/commit/ffc6fb26115058977fc138bdc6785f5635858c59"
        },
        "date": 1702801789459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 931092.8571428572,
            "unit": "ns",
            "range": "± 95244.55689726684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1722767.9487179487,
            "unit": "ns",
            "range": "± 83673.14965005784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1320259.5959595959,
            "unit": "ns",
            "range": "± 107644.18609397855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5244370.731707317,
            "unit": "ns",
            "range": "± 184431.52963078525"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34515.49295774648,
            "unit": "ns",
            "range": "± 1692.9811312191237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5012380,
            "unit": "ns",
            "range": "± 46240.86319016362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12799458.333333334,
            "unit": "ns",
            "range": "± 77664.58720717317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32349892.307692308,
            "unit": "ns",
            "range": "± 250523.38035114427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64844660,
            "unit": "ns",
            "range": "± 1136201.386701696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129451560,
            "unit": "ns",
            "range": "± 1105907.9720173052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3379267.1614583335,
            "unit": "ns",
            "range": "± 11487.455295638041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043947.4909855769,
            "unit": "ns",
            "range": "± 2033.0439494729942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723314.2926897322,
            "unit": "ns",
            "range": "± 2374.8031530332382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912484.8074776786,
            "unit": "ns",
            "range": "± 5947.440676983255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626087.0963541666,
            "unit": "ns",
            "range": "± 2416.6813940091183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569053.90625,
            "unit": "ns",
            "range": "± 1352.9714871691767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2037435.4838709678,
            "unit": "ns",
            "range": "± 53921.2422482216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262973.6842105263,
            "unit": "ns",
            "range": "± 77332.5975259709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2771533.3333333335,
            "unit": "ns",
            "range": "± 54410.29620699866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2558686.111111111,
            "unit": "ns",
            "range": "± 74462.83887292957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6133572.7272727275,
            "unit": "ns",
            "range": "± 226840.66364027662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172810.66666666666,
            "unit": "ns",
            "range": "± 8448.677704526013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162930,
            "unit": "ns",
            "range": "± 9510.059133312534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140012.90322580645,
            "unit": "ns",
            "range": "± 4180.64922673372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2722846.6666666665,
            "unit": "ns",
            "range": "± 39408.553579624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498326.3157894737,
            "unit": "ns",
            "range": "± 54388.16090642913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10821.111111111111,
            "unit": "ns",
            "range": "± 1374.8539815782885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53486.73469387755,
            "unit": "ns",
            "range": "± 6603.180079779774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44173.61111111111,
            "unit": "ns",
            "range": "± 2114.3369123745947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57729.8969072165,
            "unit": "ns",
            "range": "± 12813.226930178875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2383.157894736842,
            "unit": "ns",
            "range": "± 481.94036701362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9855.913978494624,
            "unit": "ns",
            "range": "± 1223.5428214811811"
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
          "id": "62ef2cbdb6d3a5cb1c6b832ef310b76e8f885f39",
          "message": "Merge pull request #3554 from greymistcube/chore/remove-unnecessary-generic-type-parameter\n\n🧹 Removed `IBlockPolicy` as generic type parameter for `StateQuery`",
          "timestamp": "2023-12-17T20:01:27+09:00",
          "tree_id": "22049ab28f9daf3e161ccde365e95779a0bddef9",
          "url": "https://github.com/planetarium/libplanet/commit/62ef2cbdb6d3a5cb1c6b832ef310b76e8f885f39"
        },
        "date": 1702811591630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 921719.191919192,
            "unit": "ns",
            "range": "± 89013.11492084619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1653913.7931034483,
            "unit": "ns",
            "range": "± 72403.98711585041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1322512.3711340206,
            "unit": "ns",
            "range": "± 111836.09310218605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5284400,
            "unit": "ns",
            "range": "± 221059.87748563118"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34052.409638554214,
            "unit": "ns",
            "range": "± 1836.0864998762768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4876186.666666667,
            "unit": "ns",
            "range": "± 40773.67614854794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13037314.285714285,
            "unit": "ns",
            "range": "± 149058.24291269432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31272553.333333332,
            "unit": "ns",
            "range": "± 240787.336124837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65065860,
            "unit": "ns",
            "range": "± 884219.8311021336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129474385.71428572,
            "unit": "ns",
            "range": "± 704750.4172041692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3269644.6814903845,
            "unit": "ns",
            "range": "± 3983.7977891314026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1027261.0546875,
            "unit": "ns",
            "range": "± 2603.4142564461104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731569.4986979166,
            "unit": "ns",
            "range": "± 1826.289266000864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1889300.013950893,
            "unit": "ns",
            "range": "± 4853.93511276803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630136.8294270834,
            "unit": "ns",
            "range": "± 2357.479498842031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564746.97265625,
            "unit": "ns",
            "range": "± 628.7898012546801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2105841.8181818184,
            "unit": "ns",
            "range": "± 57740.0582781688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2227530.5555555555,
            "unit": "ns",
            "range": "± 66800.23447112163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2726388.4615384615,
            "unit": "ns",
            "range": "± 72918.75658250393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2590208.108108108,
            "unit": "ns",
            "range": "± 128758.55684479875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6161785.294117647,
            "unit": "ns",
            "range": "± 198255.92907539295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170459.0909090909,
            "unit": "ns",
            "range": "± 8006.727503461405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162082,
            "unit": "ns",
            "range": "± 6524.574894276286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140496.66666666666,
            "unit": "ns",
            "range": "± 4075.4719069535763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2733340.909090909,
            "unit": "ns",
            "range": "± 65158.13481421588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2482292.8571428573,
            "unit": "ns",
            "range": "± 29533.617462809405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10445.161290322581,
            "unit": "ns",
            "range": "± 932.2152355769538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52124.41860465116,
            "unit": "ns",
            "range": "± 3080.6773909993403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44338.46153846154,
            "unit": "ns",
            "range": "± 1981.767858795234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51174.15730337079,
            "unit": "ns",
            "range": "± 7042.783671149557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2403.191489361702,
            "unit": "ns",
            "range": "± 392.52480988900965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10325.555555555555,
            "unit": "ns",
            "range": "± 1969.2901311067417"
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
          "id": "baa4f279cf948220fcf52a5223fa564ac459d28e",
          "message": "Merge pull request #3561 from greymistcube/feature/helper-queries\n\n✨ QoL GraphQL queries",
          "timestamp": "2023-12-18T15:43:59+09:00",
          "tree_id": "bb91dfc788764d68cf62ade0d144340ff6a81ded",
          "url": "https://github.com/planetarium/libplanet/commit/baa4f279cf948220fcf52a5223fa564ac459d28e"
        },
        "date": 1702882463734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 998716.1616161616,
            "unit": "ns",
            "range": "± 111751.27786063038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1718876.3157894737,
            "unit": "ns",
            "range": "± 86625.01004278313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1403024.4897959183,
            "unit": "ns",
            "range": "± 142863.68173547593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5265361.538461538,
            "unit": "ns",
            "range": "± 139378.5667222133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33694.366197183095,
            "unit": "ns",
            "range": "± 1506.8308582626237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4897861.538461538,
            "unit": "ns",
            "range": "± 16389.098941142678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12998214.285714285,
            "unit": "ns",
            "range": "± 154685.97896355082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32705914.285714287,
            "unit": "ns",
            "range": "± 286758.60353840597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66014950,
            "unit": "ns",
            "range": "± 495076.4515275826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129717650,
            "unit": "ns",
            "range": "± 698065.2053419444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3286492.8292410714,
            "unit": "ns",
            "range": "± 10235.550435755717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083617.6983173077,
            "unit": "ns",
            "range": "± 2709.880916304541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 706939.1796875,
            "unit": "ns",
            "range": "± 1798.3460855421185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1892621.107700893,
            "unit": "ns",
            "range": "± 1788.341902150685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605073.0078125,
            "unit": "ns",
            "range": "± 2231.496148363968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563452.5251116072,
            "unit": "ns",
            "range": "± 569.0903070145566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114506.4516129033,
            "unit": "ns",
            "range": "± 64077.91057498609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2244338.888888889,
            "unit": "ns",
            "range": "± 74777.61230199385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2773378.5714285714,
            "unit": "ns",
            "range": "± 46154.359383593335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2634505.882352941,
            "unit": "ns",
            "range": "± 54027.86862569441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6289725,
            "unit": "ns",
            "range": "± 279287.88174539636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170762.16216216216,
            "unit": "ns",
            "range": "± 8052.255749681247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164351.51515151514,
            "unit": "ns",
            "range": "± 7746.368725940461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140476.4705882353,
            "unit": "ns",
            "range": "± 2646.8210677538978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2751593.3333333335,
            "unit": "ns",
            "range": "± 45506.20784443538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2487907.1428571427,
            "unit": "ns",
            "range": "± 25529.544401783543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10328.125,
            "unit": "ns",
            "range": "± 1637.3086469151617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49972.5,
            "unit": "ns",
            "range": "± 2601.4589382873096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44400,
            "unit": "ns",
            "range": "± 1883.6528735805193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51558.333333333336,
            "unit": "ns",
            "range": "± 10373.1502261384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2310,
            "unit": "ns",
            "range": "± 382.49623630372736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9473.333333333334,
            "unit": "ns",
            "range": "± 1044.9235228184527"
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
          "id": "ad5153274c4bedbf9c74cbc09ad47d009724faba",
          "message": "Merge pull request #3562 from greymistcube/refactor/irichstore\n\n♻️ Removed updated addresses from `IRichStore`",
          "timestamp": "2023-12-19T13:44:10+09:00",
          "tree_id": "36bf7b00a2e4e18bcec64a1ecbbbb17332996df9",
          "url": "https://github.com/planetarium/libplanet/commit/ad5153274c4bedbf9c74cbc09ad47d009724faba"
        },
        "date": 1702961791861,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 932165.625,
            "unit": "ns",
            "range": "± 72287.47118368147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1675198.3870967743,
            "unit": "ns",
            "range": "± 72549.40598537872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1334197.9591836734,
            "unit": "ns",
            "range": "± 147853.43326331957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5195814.583333333,
            "unit": "ns",
            "range": "± 202839.7627618153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34000,
            "unit": "ns",
            "range": "± 1441.4639023639065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4965886.666666667,
            "unit": "ns",
            "range": "± 35069.41823352784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12627146.666666666,
            "unit": "ns",
            "range": "± 134992.59697514985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31952356.25,
            "unit": "ns",
            "range": "± 618071.5632446349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64587907.14285714,
            "unit": "ns",
            "range": "± 731860.4159309297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127895315.38461539,
            "unit": "ns",
            "range": "± 609831.5298044122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254619.8697916665,
            "unit": "ns",
            "range": "± 10654.255775530699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055171.3588169643,
            "unit": "ns",
            "range": "± 2591.3231676006108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737569.43359375,
            "unit": "ns",
            "range": "± 2525.3252396659786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903365.8333333333,
            "unit": "ns",
            "range": "± 3906.514826727936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602797.9036458334,
            "unit": "ns",
            "range": "± 1368.278981696902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552305.0153459822,
            "unit": "ns",
            "range": "± 1584.9932400602286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2092360.975609756,
            "unit": "ns",
            "range": "± 67821.47107682338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2272070,
            "unit": "ns",
            "range": "± 66200.5268757031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2702853.5714285714,
            "unit": "ns",
            "range": "± 56501.90742203348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2575229.7297297297,
            "unit": "ns",
            "range": "± 79195.75207766607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6344176.388888889,
            "unit": "ns",
            "range": "± 310976.0456754818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171147.0588235294,
            "unit": "ns",
            "range": "± 8112.3357438144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162483.87096774194,
            "unit": "ns",
            "range": "± 6862.948597977955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145408,
            "unit": "ns",
            "range": "± 3834.809860562407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2746630.769230769,
            "unit": "ns",
            "range": "± 42275.80838208744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2498773.3333333335,
            "unit": "ns",
            "range": "± 44448.24384553771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10366.304347826086,
            "unit": "ns",
            "range": "± 1305.9691507987588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51203.76344086022,
            "unit": "ns",
            "range": "± 4605.893180145386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43400,
            "unit": "ns",
            "range": "± 1674.8783213428812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55632.32323232323,
            "unit": "ns",
            "range": "± 12771.8027133023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2243.75,
            "unit": "ns",
            "range": "± 311.4693530585904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9868.421052631578,
            "unit": "ns",
            "range": "± 1343.8799938424354"
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
          "id": "b8c41801dd5dc3558abe0defe9edca543997980d",
          "message": "Merge pull request #3563 from greymistcube/chore/cleanup\n\n🧹 Remove unnecessary usings",
          "timestamp": "2023-12-19T15:24:44+09:00",
          "tree_id": "bb928fd783d48f64083e075008c91e6889ce7a17",
          "url": "https://github.com/planetarium/libplanet/commit/b8c41801dd5dc3558abe0defe9edca543997980d"
        },
        "date": 1702967780922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031082.4742268041,
            "unit": "ns",
            "range": "± 126603.94116619922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781346.511627907,
            "unit": "ns",
            "range": "± 98826.10002682301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1388420,
            "unit": "ns",
            "range": "± 106968.03221006553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5557487.640449438,
            "unit": "ns",
            "range": "± 306867.151379071"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34687.951807228914,
            "unit": "ns",
            "range": "± 1865.2402964505113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5135238.461538462,
            "unit": "ns",
            "range": "± 79197.33306180559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13472806.666666666,
            "unit": "ns",
            "range": "± 209754.18084260533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32499621.42857143,
            "unit": "ns",
            "range": "± 531436.8551803271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65228110,
            "unit": "ns",
            "range": "± 601346.6005557859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134358106.66666666,
            "unit": "ns",
            "range": "± 1926896.278796058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3311996.153846154,
            "unit": "ns",
            "range": "± 9458.266576472997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060665.5436197917,
            "unit": "ns",
            "range": "± 2734.7028243754626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740690.8203125,
            "unit": "ns",
            "range": "± 1759.9933974435644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925943.3143028845,
            "unit": "ns",
            "range": "± 2885.144601735998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619379.3526785715,
            "unit": "ns",
            "range": "± 768.130849521744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564419.19921875,
            "unit": "ns",
            "range": "± 939.4701304334069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2184833.3333333335,
            "unit": "ns",
            "range": "± 64462.42601559526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2329622.4137931033,
            "unit": "ns",
            "range": "± 95917.90905916326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821259.2592592593,
            "unit": "ns",
            "range": "± 78657.64796919358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2627802.6315789474,
            "unit": "ns",
            "range": "± 123011.95386214486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6197809.677419355,
            "unit": "ns",
            "range": "± 181791.49293414643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176531.16883116882,
            "unit": "ns",
            "range": "± 8387.667321105555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168250,
            "unit": "ns",
            "range": "± 7416.883356920124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141533.33333333334,
            "unit": "ns",
            "range": "± 5756.862571459099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2766846.6666666665,
            "unit": "ns",
            "range": "± 51589.00584242271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540658.3333333335,
            "unit": "ns",
            "range": "± 26646.727867800317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11753.763440860215,
            "unit": "ns",
            "range": "± 1582.894922202942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55145.882352941175,
            "unit": "ns",
            "range": "± 4142.076570915575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45719.58762886598,
            "unit": "ns",
            "range": "± 2841.897809829204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64025.25252525252,
            "unit": "ns",
            "range": "± 15887.79754733072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2796.875,
            "unit": "ns",
            "range": "± 680.0082236344839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11870.786516853932,
            "unit": "ns",
            "range": "± 1575.5375884260623"
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
          "id": "799a291b6fd45b2a79bc99ff176024670b8fbf3d",
          "message": "Merge pull request #3564 from greymistcube/remove/irichstore\n\n🧹 Remove `IRichStore`",
          "timestamp": "2023-12-19T16:42:47+09:00",
          "tree_id": "77bd1dbc57562835aab336666e502ff4af90e801",
          "url": "https://github.com/planetarium/libplanet/commit/799a291b6fd45b2a79bc99ff176024670b8fbf3d"
        },
        "date": 1702972480050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 952090.404040404,
            "unit": "ns",
            "range": "± 79851.57777592422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1730938.2978723405,
            "unit": "ns",
            "range": "± 99091.64011740664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1329806.1224489796,
            "unit": "ns",
            "range": "± 113451.83256626863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5222327.9069767445,
            "unit": "ns",
            "range": "± 193368.74879923495"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34253.42465753425,
            "unit": "ns",
            "range": "± 1672.3305587463544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4976071.428571428,
            "unit": "ns",
            "range": "± 40787.072397087715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13254818.75,
            "unit": "ns",
            "range": "± 255368.46377669007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33838226.666666664,
            "unit": "ns",
            "range": "± 370884.0856013924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65419073.333333336,
            "unit": "ns",
            "range": "± 808342.5842573243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130363030,
            "unit": "ns",
            "range": "± 1013195.2119056679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284924.9348958335,
            "unit": "ns",
            "range": "± 11722.975249877982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050973.618861607,
            "unit": "ns",
            "range": "± 2796.5920002216403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732129.5619419643,
            "unit": "ns",
            "range": "± 4240.193932640301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976512.1651785714,
            "unit": "ns",
            "range": "± 4669.912096124362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618283.6983816965,
            "unit": "ns",
            "range": "± 1677.821653588855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569942.6006610577,
            "unit": "ns",
            "range": "± 1329.044853548257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124624,
            "unit": "ns",
            "range": "± 56148.25820985011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211459.649122807,
            "unit": "ns",
            "range": "± 94953.53724632364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2757841.6666666665,
            "unit": "ns",
            "range": "± 121341.44748819784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2668931.914893617,
            "unit": "ns",
            "range": "± 103284.63227239942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6384563.265306123,
            "unit": "ns",
            "range": "± 253464.70883033995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184484.375,
            "unit": "ns",
            "range": "± 8453.8376511349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165249.4623655914,
            "unit": "ns",
            "range": "± 9797.511037702094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141563.63636363635,
            "unit": "ns",
            "range": "± 5286.142080690944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2702233.3333333335,
            "unit": "ns",
            "range": "± 30707.087750147166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2501226.6666666665,
            "unit": "ns",
            "range": "± 37229.06826405308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11472.340425531915,
            "unit": "ns",
            "range": "± 1457.4542730848023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55710.98901098901,
            "unit": "ns",
            "range": "± 5273.359682813448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44993.42105263158,
            "unit": "ns",
            "range": "± 2295.7546632173503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55554.545454545456,
            "unit": "ns",
            "range": "± 13911.031246909937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2615.3061224489797,
            "unit": "ns",
            "range": "± 655.2487590608538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10715.053763440861,
            "unit": "ns",
            "range": "± 1557.0977906627343"
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
          "id": "75b92cb5b230ae83b7a4df2ad95bb9e09385a2a4",
          "message": "Merge pull request #3565 from greymistcube/chore/remove-execute-records\n\n🧹 Remove ExecuteRecord",
          "timestamp": "2023-12-19T18:18:26+09:00",
          "tree_id": "aef18ca1a5f3a2a0a1e649adcc6097661f51a3c9",
          "url": "https://github.com/planetarium/libplanet/commit/75b92cb5b230ae83b7a4df2ad95bb9e09385a2a4"
        },
        "date": 1702978240168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021107.1428571428,
            "unit": "ns",
            "range": "± 126678.47297573458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1789570,
            "unit": "ns",
            "range": "± 102122.87867228678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1314430.2083333333,
            "unit": "ns",
            "range": "± 86200.99232520978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5144144.444444444,
            "unit": "ns",
            "range": "± 171872.23733999033"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36248.913043478264,
            "unit": "ns",
            "range": "± 3363.1975420187828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5400928.571428572,
            "unit": "ns",
            "range": "± 29945.910946531287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14457246.666666666,
            "unit": "ns",
            "range": "± 255588.5473252069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34596856.666666664,
            "unit": "ns",
            "range": "± 466278.1794880248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70157066.66666667,
            "unit": "ns",
            "range": "± 482839.75997169473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135572393.33333334,
            "unit": "ns",
            "range": "± 802968.4902790099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3322318.359375,
            "unit": "ns",
            "range": "± 13393.18930949691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052215.638950893,
            "unit": "ns",
            "range": "± 5806.250051783751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742292.4734933035,
            "unit": "ns",
            "range": "± 1763.9239482326311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2027444.5963541667,
            "unit": "ns",
            "range": "± 5168.740175042035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621481.3346354166,
            "unit": "ns",
            "range": "± 2209.8026720741827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587009.1866629465,
            "unit": "ns",
            "range": "± 1071.1877073937503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2235853.5714285714,
            "unit": "ns",
            "range": "± 58999.63265512043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2403713.6363636362,
            "unit": "ns",
            "range": "± 87864.41614031613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2963785.714285714,
            "unit": "ns",
            "range": "± 104722.09348610014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2802689.393939394,
            "unit": "ns",
            "range": "± 131106.39382259548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6365752.380952381,
            "unit": "ns",
            "range": "± 132984.4826250327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183629.85074626867,
            "unit": "ns",
            "range": "± 7910.15869521253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180254.34782608695,
            "unit": "ns",
            "range": "± 8434.635087169358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157338.29787234042,
            "unit": "ns",
            "range": "± 8992.806042191089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2856936.8421052634,
            "unit": "ns",
            "range": "± 60590.567752619674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2530683.3333333335,
            "unit": "ns",
            "range": "± 43532.347031779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12073.863636363636,
            "unit": "ns",
            "range": "± 1344.763733312511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58729.032258064515,
            "unit": "ns",
            "range": "± 6208.822275866491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44873.333333333336,
            "unit": "ns",
            "range": "± 2531.367263894969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63170.707070707074,
            "unit": "ns",
            "range": "± 14011.243681235062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3135.0515463917527,
            "unit": "ns",
            "range": "± 795.6969216135577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12022.727272727272,
            "unit": "ns",
            "range": "± 2728.340236346819"
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
          "id": "74c991ab6ece3ff9bd2f5b7740f7e3bbc7f1fc81",
          "message": "Merge pull request #3567 from greymistcube/refactor/tx-gas-policy\n\n♻️ Refactor tx gas policy",
          "timestamp": "2023-12-20T18:41:39+09:00",
          "tree_id": "e408a49df40a47b9b59e91767314eab8ddb4f697",
          "url": "https://github.com/planetarium/libplanet/commit/74c991ab6ece3ff9bd2f5b7740f7e3bbc7f1fc81"
        },
        "date": 1703066088098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961598.947368421,
            "unit": "ns",
            "range": "± 100313.11988048609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1710750,
            "unit": "ns",
            "range": "± 83032.0991710653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1345745.918367347,
            "unit": "ns",
            "range": "± 112989.83547785551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5360778.461538462,
            "unit": "ns",
            "range": "± 242778.22215727286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33484.21052631579,
            "unit": "ns",
            "range": "± 1697.374649791373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4973385.714285715,
            "unit": "ns",
            "range": "± 60321.58507842468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13067271.42857143,
            "unit": "ns",
            "range": "± 167104.1047167508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31872964.285714287,
            "unit": "ns",
            "range": "± 233249.4129175326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66171546.666666664,
            "unit": "ns",
            "range": "± 719919.1610041731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128643953.33333333,
            "unit": "ns",
            "range": "± 1290488.0482463473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281497.5725446427,
            "unit": "ns",
            "range": "± 7039.226602238525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042628.8671875,
            "unit": "ns",
            "range": "± 1921.5679838115896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 785126.7787388393,
            "unit": "ns",
            "range": "± 858.8179931346826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1902603.6197916667,
            "unit": "ns",
            "range": "± 2432.0805704399313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614935.4143415178,
            "unit": "ns",
            "range": "± 1080.8888543236992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559058.33984375,
            "unit": "ns",
            "range": "± 1234.590425259608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2102734.285714286,
            "unit": "ns",
            "range": "± 66300.86035666215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210252.727272727,
            "unit": "ns",
            "range": "± 93456.13321241594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2758496.296296296,
            "unit": "ns",
            "range": "± 75361.44944650456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2551657.4468085105,
            "unit": "ns",
            "range": "± 90216.3432236302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6204994,
            "unit": "ns",
            "range": "± 249450.6326440777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173787.80487804877,
            "unit": "ns",
            "range": "± 5585.346682254882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166985.24590163934,
            "unit": "ns",
            "range": "± 7053.529519930045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142909.61538461538,
            "unit": "ns",
            "range": "± 5890.5460852542155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2712073.3333333335,
            "unit": "ns",
            "range": "± 26300.691643992577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2489106.6666666665,
            "unit": "ns",
            "range": "± 44427.15493071884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12301.098901098901,
            "unit": "ns",
            "range": "± 1443.2597752999213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54855.494505494506,
            "unit": "ns",
            "range": "± 4536.453892570045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44531.57894736842,
            "unit": "ns",
            "range": "± 1788.5706478655004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56611.36363636364,
            "unit": "ns",
            "range": "± 8607.447080613336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2526.8041237113403,
            "unit": "ns",
            "range": "± 474.45483274612263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10496.703296703297,
            "unit": "ns",
            "range": "± 1338.0292763323023"
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
          "id": "7d27880ed049d2ad57c92287ef8d7a385f787e3e",
          "message": "Merge pull request #3572 from greymistcube/refactor/shortnode\n\n♻️ Refactor `ShortNode`",
          "timestamp": "2023-12-27T13:22:20+09:00",
          "tree_id": "9a6c9abd10c9c5f186ad70cb60d91371c7b633dd",
          "url": "https://github.com/planetarium/libplanet/commit/7d27880ed049d2ad57c92287ef8d7a385f787e3e"
        },
        "date": 1703651659950,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933802.1276595745,
            "unit": "ns",
            "range": "± 87991.07845627025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1691525.8064516129,
            "unit": "ns",
            "range": "± 76403.4887528133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1337878.5714285714,
            "unit": "ns",
            "range": "± 151338.82600883345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5197058.490566038,
            "unit": "ns",
            "range": "± 216039.16172230858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34405.37634408602,
            "unit": "ns",
            "range": "± 2128.2961950306967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5092638.461538462,
            "unit": "ns",
            "range": "± 33447.68398712479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13045614.285714285,
            "unit": "ns",
            "range": "± 54638.3755973042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32790100,
            "unit": "ns",
            "range": "± 264078.4207535563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65286213.333333336,
            "unit": "ns",
            "range": "± 477148.47624293255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130780634.61538461,
            "unit": "ns",
            "range": "± 917151.8775046238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266838.2291666665,
            "unit": "ns",
            "range": "± 13732.35375404918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051982.1223958333,
            "unit": "ns",
            "range": "± 4286.558942217424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736598.9908854166,
            "unit": "ns",
            "range": "± 3619.801754055624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916896.2565104167,
            "unit": "ns",
            "range": "± 7331.286963395984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615045.7552083334,
            "unit": "ns",
            "range": "± 1814.8867476778496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557207.080078125,
            "unit": "ns",
            "range": "± 1774.8586380360146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2098954.1666666665,
            "unit": "ns",
            "range": "± 53381.40841615884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2243979.6296296297,
            "unit": "ns",
            "range": "± 86461.07288478751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2770047.3684210526,
            "unit": "ns",
            "range": "± 94058.36166068932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2705881.1764705884,
            "unit": "ns",
            "range": "± 140711.71177955574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6198212.5,
            "unit": "ns",
            "range": "± 243514.09642888122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178081.33333333334,
            "unit": "ns",
            "range": "± 8938.206684718067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164079.71014492755,
            "unit": "ns",
            "range": "± 7905.983953164192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144085.7142857143,
            "unit": "ns",
            "range": "± 4658.398036761947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2686895.4545454546,
            "unit": "ns",
            "range": "± 61932.00170750043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2447666.6666666665,
            "unit": "ns",
            "range": "± 36966.774013326896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10927.083333333334,
            "unit": "ns",
            "range": "± 1637.0370646009187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51748.31460674157,
            "unit": "ns",
            "range": "± 3476.45039579789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44984.04255319149,
            "unit": "ns",
            "range": "± 2491.072368791571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55687.5,
            "unit": "ns",
            "range": "± 13018.879004212144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2717.8947368421054,
            "unit": "ns",
            "range": "± 524.0957658486807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11507.52688172043,
            "unit": "ns",
            "range": "± 1876.00619721442"
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
          "id": "faa7b7fcbfbfb94934f96934ac29597cb4599176",
          "message": "Merge pull request #3573 from greymistcube/chore/fullnode-optimization\n\n⚡ ♻️ Slightly optimized `FullNode`",
          "timestamp": "2023-12-27T16:12:58+09:00",
          "tree_id": "d889867351d6c3596bc4fa674fbb5420ac7897dc",
          "url": "https://github.com/planetarium/libplanet/commit/faa7b7fcbfbfb94934f96934ac29597cb4599176"
        },
        "date": 1703661879485,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961445.4545454546,
            "unit": "ns",
            "range": "± 105547.5898783483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733430.4347826086,
            "unit": "ns",
            "range": "± 78712.34917751774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1348485.8585858585,
            "unit": "ns",
            "range": "± 132641.06084644224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5127139.393939394,
            "unit": "ns",
            "range": "± 161401.95928835936"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34814.28571428572,
            "unit": "ns",
            "range": "± 1866.8730932496412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4956857.142857143,
            "unit": "ns",
            "range": "± 40102.82388456558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13394200,
            "unit": "ns",
            "range": "± 200242.38389435018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33073546.666666668,
            "unit": "ns",
            "range": "± 414343.76319095003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66327253.333333336,
            "unit": "ns",
            "range": "± 878637.4694187966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131878180,
            "unit": "ns",
            "range": "± 703314.9042722104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3411052.9166666665,
            "unit": "ns",
            "range": "± 9348.455738817886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079670.6770833333,
            "unit": "ns",
            "range": "± 2795.824146294912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731465.4752604166,
            "unit": "ns",
            "range": "± 1554.6947575436498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906760.463169643,
            "unit": "ns",
            "range": "± 4231.238040334101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611122.7994791666,
            "unit": "ns",
            "range": "± 1774.7868372937437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567806.0546875,
            "unit": "ns",
            "range": "± 1190.3903262190272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2136130.3571428573,
            "unit": "ns",
            "range": "± 88515.80633298903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2223624.3902439023,
            "unit": "ns",
            "range": "± 79805.19651152988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879266.6666666665,
            "unit": "ns",
            "range": "± 53701.9242361637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2693662.5,
            "unit": "ns",
            "range": "± 69960.76423688278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6109968.571428572,
            "unit": "ns",
            "range": "± 200143.73037075807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174950.79365079364,
            "unit": "ns",
            "range": "± 8019.027231968714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167775.43859649124,
            "unit": "ns",
            "range": "± 7295.235252785457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138639.13043478262,
            "unit": "ns",
            "range": "± 3027.8614010604283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752550,
            "unit": "ns",
            "range": "± 46018.88826257189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2501246.6666666665,
            "unit": "ns",
            "range": "± 41549.24559512254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11693.814432989691,
            "unit": "ns",
            "range": "± 2107.9618134285197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56495.833333333336,
            "unit": "ns",
            "range": "± 5638.437944691806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45597.46835443038,
            "unit": "ns",
            "range": "± 2360.7351464486705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62996.93877551021,
            "unit": "ns",
            "range": "± 15597.425468773521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2576.842105263158,
            "unit": "ns",
            "range": "± 563.5096388722235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10474.725274725275,
            "unit": "ns",
            "range": "± 1243.2567810743776"
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
          "id": "9bc0a5956080f82a859025405eb3ddbc8779660b",
          "message": "Merge pull request #3574 from greymistcube/refactor/fullnode\n\n♻️ Changed `FullNode` to no longer inherit `BaseNode`",
          "timestamp": "2023-12-27T16:28:54+09:00",
          "tree_id": "58b8e3af75d02d34e4efe5417c31029d7f1e7d65",
          "url": "https://github.com/planetarium/libplanet/commit/9bc0a5956080f82a859025405eb3ddbc8779660b"
        },
        "date": 1703662820560,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 910752.0408163265,
            "unit": "ns",
            "range": "± 82848.40612742036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1662592.5925925926,
            "unit": "ns",
            "range": "± 69440.11632634117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1292878.3505154639,
            "unit": "ns",
            "range": "± 107864.87421268114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5051050,
            "unit": "ns",
            "range": "± 193297.05291769624"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33751.470588235294,
            "unit": "ns",
            "range": "± 1627.0560033164213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4869576.923076923,
            "unit": "ns",
            "range": "± 23369.46561385012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12863042.857142856,
            "unit": "ns",
            "range": "± 100524.13957534099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31251030.769230768,
            "unit": "ns",
            "range": "± 258681.4172704055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63762278.571428575,
            "unit": "ns",
            "range": "± 297584.87393985974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127640992.85714285,
            "unit": "ns",
            "range": "± 665234.8289419028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3224463.0108173075,
            "unit": "ns",
            "range": "± 4174.505961792373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1039579.9107142857,
            "unit": "ns",
            "range": "± 2815.3640659846565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 722765.9737723215,
            "unit": "ns",
            "range": "± 1998.7176164700656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906434.291294643,
            "unit": "ns",
            "range": "± 2547.2197008330804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 602523.5491071428,
            "unit": "ns",
            "range": "± 1074.6542754141747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554044.8958333334,
            "unit": "ns",
            "range": "± 1169.3697682559011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118730.434782609,
            "unit": "ns",
            "range": "± 51702.74684792437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237770,
            "unit": "ns",
            "range": "± 64871.300439328756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2713947.619047619,
            "unit": "ns",
            "range": "± 62307.40420726592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2671107.6923076925,
            "unit": "ns",
            "range": "± 32577.17661028095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6236498.75,
            "unit": "ns",
            "range": "± 325981.67397964204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168074.62686567163,
            "unit": "ns",
            "range": "± 7958.4592555530235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160320.54794520547,
            "unit": "ns",
            "range": "± 7136.641734817684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140010.7142857143,
            "unit": "ns",
            "range": "± 3087.890240530926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2636766.6666666665,
            "unit": "ns",
            "range": "± 42313.045382290904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2445821.4285714286,
            "unit": "ns",
            "range": "± 36871.81910288729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10018.279569892473,
            "unit": "ns",
            "range": "± 814.2676406172203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49262.96296296296,
            "unit": "ns",
            "range": "± 2261.8822054013135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43216.41791044776,
            "unit": "ns",
            "range": "± 1631.2847711306692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51358.333333333336,
            "unit": "ns",
            "range": "± 10186.985160815082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2509.4736842105262,
            "unit": "ns",
            "range": "± 353.4250903839143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9805.494505494506,
            "unit": "ns",
            "range": "± 818.9916072508025"
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
          "id": "1b348254dea706c8d825ff0ca8ffe11a62b7910d",
          "message": "Merge pull request #3575 from greymistcube/refactor/merkletrie-split\n\n♻️ 🧹 Minor code cleanup.",
          "timestamp": "2023-12-27T17:02:55+09:00",
          "tree_id": "e7541ac8b2d46dab6ea0d2bb84a32e1f2d35b86d",
          "url": "https://github.com/planetarium/libplanet/commit/1b348254dea706c8d825ff0ca8ffe11a62b7910d"
        },
        "date": 1703664908600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987829.2929292929,
            "unit": "ns",
            "range": "± 100422.04942501144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777754.21686747,
            "unit": "ns",
            "range": "± 92881.29626257274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1398238,
            "unit": "ns",
            "range": "± 143963.24711957603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5251188.636363637,
            "unit": "ns",
            "range": "± 183147.86276477965"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36397.82608695652,
            "unit": "ns",
            "range": "± 3347.8541023021007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5008460,
            "unit": "ns",
            "range": "± 59018.98968007791"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13407117.647058824,
            "unit": "ns",
            "range": "± 274827.4827853241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33179592.307692308,
            "unit": "ns",
            "range": "± 200306.97051250472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66439170,
            "unit": "ns",
            "range": "± 694913.5405625241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134298860,
            "unit": "ns",
            "range": "± 1422888.4304219258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3267586.9698660714,
            "unit": "ns",
            "range": "± 11466.422827773435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063045.928485577,
            "unit": "ns",
            "range": "± 2255.9793239075434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744990.2553013393,
            "unit": "ns",
            "range": "± 2545.2051791523086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1969050.083705357,
            "unit": "ns",
            "range": "± 8383.163449121475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609248.8978794643,
            "unit": "ns",
            "range": "± 1479.6191705929411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567709.8714192709,
            "unit": "ns",
            "range": "± 563.9145229147895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158866.6666666665,
            "unit": "ns",
            "range": "± 50013.86244614196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2207739.0625,
            "unit": "ns",
            "range": "± 96497.51475899624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2816856.6666666665,
            "unit": "ns",
            "range": "± 83818.61238179258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2702687.671232877,
            "unit": "ns",
            "range": "± 133901.23531212338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6192116.216216216,
            "unit": "ns",
            "range": "± 209647.27190836187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192963.7931034483,
            "unit": "ns",
            "range": "± 8474.247847922657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171918.18181818182,
            "unit": "ns",
            "range": "± 8110.712936336999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143309.43396226416,
            "unit": "ns",
            "range": "± 5911.340605172641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2749661.111111111,
            "unit": "ns",
            "range": "± 56660.2271427611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2452388.2352941176,
            "unit": "ns",
            "range": "± 47473.83334997477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13305.208333333334,
            "unit": "ns",
            "range": "± 2164.2730536781155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58054.63917525773,
            "unit": "ns",
            "range": "± 7841.476537969915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45030.645161290326,
            "unit": "ns",
            "range": "± 2059.411718458391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57833.75,
            "unit": "ns",
            "range": "± 5952.256114121877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2934.020618556701,
            "unit": "ns",
            "range": "± 581.1064514387874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10954.444444444445,
            "unit": "ns",
            "range": "± 1308.1560150839234"
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
          "id": "e9afc27a5551a529f0ad11e42fcd5b97f605c58e",
          "message": "Merge pull request #3576 from greymistcube/refactor/trie-remove\n\n✨ Add `Trie.Remove()`",
          "timestamp": "2024-01-02T15:51:24+09:00",
          "tree_id": "7b0e2f7cd1989e4fb18e3fc2bf2748324a095a4c",
          "url": "https://github.com/planetarium/libplanet/commit/e9afc27a5551a529f0ad11e42fcd5b97f605c58e"
        },
        "date": 1704178993308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941537.7551020408,
            "unit": "ns",
            "range": "± 96623.37902541974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702382.02247191,
            "unit": "ns",
            "range": "± 105297.19257437467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1285288.2978723405,
            "unit": "ns",
            "range": "± 92690.70879002026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4964582.75862069,
            "unit": "ns",
            "range": "± 142967.39905348432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34701.20481927711,
            "unit": "ns",
            "range": "± 1861.057526266733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4748300,
            "unit": "ns",
            "range": "± 26457.658481197694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12884192.857142856,
            "unit": "ns",
            "range": "± 145676.95274283973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 30829292.307692308,
            "unit": "ns",
            "range": "± 161454.5212618632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62843750,
            "unit": "ns",
            "range": "± 900857.791859429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126802585.71428572,
            "unit": "ns",
            "range": "± 574524.0784364889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3262181.219951923,
            "unit": "ns",
            "range": "± 5012.372416790974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1043562.9045758928,
            "unit": "ns",
            "range": "± 3476.894035570956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727632.8049879808,
            "unit": "ns",
            "range": "± 2996.0922912200303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1897542.48046875,
            "unit": "ns",
            "range": "± 3804.183941139709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 595473.1375558035,
            "unit": "ns",
            "range": "± 1400.351563769999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559710.8323317308,
            "unit": "ns",
            "range": "± 1351.898151952249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2097356.6666666665,
            "unit": "ns",
            "range": "± 90224.78964600952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2184000,
            "unit": "ns",
            "range": "± 82715.12890045936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2774386.3636363638,
            "unit": "ns",
            "range": "± 65690.37253121681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2555666.25,
            "unit": "ns",
            "range": "± 131708.43705253958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5713555.555555556,
            "unit": "ns",
            "range": "± 117072.66331954708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165141.93548387097,
            "unit": "ns",
            "range": "± 6819.031910212089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157918.57142857142,
            "unit": "ns",
            "range": "± 7077.097023316321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138117.85714285713,
            "unit": "ns",
            "range": "± 3586.60610971478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2655914.285714286,
            "unit": "ns",
            "range": "± 33259.882444467235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2443164.285714286,
            "unit": "ns",
            "range": "± 31145.03558768623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9794.505494505494,
            "unit": "ns",
            "range": "± 959.6715453578244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49823.75,
            "unit": "ns",
            "range": "± 2561.0640465698843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43754.23728813559,
            "unit": "ns",
            "range": "± 1743.9869140898554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49730.52631578947,
            "unit": "ns",
            "range": "± 9426.209202686452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2331.5789473684213,
            "unit": "ns",
            "range": "± 301.15492510296724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9167.977528089888,
            "unit": "ns",
            "range": "± 918.5662986109496"
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
          "id": "ddfbe7b7656eebb084c27acbe218c2ac6b22a615",
          "message": "Merge pull request #3577 from greymistcube/refactor/account-remove\n\n✨ Add `IAccount.RemoveState()`",
          "timestamp": "2024-01-02T18:09:26+09:00",
          "tree_id": "d4d6c707870978d1a24f8ab3bd97551a6094c158",
          "url": "https://github.com/planetarium/libplanet/commit/ddfbe7b7656eebb084c27acbe218c2ac6b22a615"
        },
        "date": 1704187308186,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 978549,
            "unit": "ns",
            "range": "± 83897.65469687674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1729910.5263157894,
            "unit": "ns",
            "range": "± 66965.58200249088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1371056.701030928,
            "unit": "ns",
            "range": "± 106147.41607313596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5176154.054054054,
            "unit": "ns",
            "range": "± 171142.96751643153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36928.260869565216,
            "unit": "ns",
            "range": "± 3955.0031212934578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5374660,
            "unit": "ns",
            "range": "± 84346.29977488215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13794546.153846154,
            "unit": "ns",
            "range": "± 215128.5337319088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33871707.14285714,
            "unit": "ns",
            "range": "± 282063.6411120062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67504828.57142857,
            "unit": "ns",
            "range": "± 510407.78784233873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137349566.66666666,
            "unit": "ns",
            "range": "± 1094648.7666740196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283879.7526041665,
            "unit": "ns",
            "range": "± 12537.578413254061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1050780.1041666667,
            "unit": "ns",
            "range": "± 3116.5481442655087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736170.8919270834,
            "unit": "ns",
            "range": "± 2107.4975952029563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953205.7896205357,
            "unit": "ns",
            "range": "± 4634.798739563766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616306.9056919643,
            "unit": "ns",
            "range": "± 1358.0620687812445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563014.0345982143,
            "unit": "ns",
            "range": "± 1445.3733163472102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2224980.701754386,
            "unit": "ns",
            "range": "± 94946.4274483934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2485992.8571428573,
            "unit": "ns",
            "range": "± 39064.49232281869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2861976.086956522,
            "unit": "ns",
            "range": "± 109154.4337874506"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2674837.5,
            "unit": "ns",
            "range": "± 165628.6856988118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6186755.555555556,
            "unit": "ns",
            "range": "± 234804.1036070432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192260.27397260274,
            "unit": "ns",
            "range": "± 9027.392568763316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178851.28205128206,
            "unit": "ns",
            "range": "± 8827.315098119689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153545.36082474227,
            "unit": "ns",
            "range": "± 9497.51086489855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2724000,
            "unit": "ns",
            "range": "± 51692.95245324389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555997.3684210526,
            "unit": "ns",
            "range": "± 54344.31758520084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12405.555555555555,
            "unit": "ns",
            "range": "± 1350.1860971284295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58590.86021505376,
            "unit": "ns",
            "range": "± 5558.918344878829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51225.53191489362,
            "unit": "ns",
            "range": "± 6293.757551941956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70988.14432989691,
            "unit": "ns",
            "range": "± 12090.401179749382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3329.896907216495,
            "unit": "ns",
            "range": "± 1065.7709404907334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12509.278350515464,
            "unit": "ns",
            "range": "± 1499.7973803586217"
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
          "id": "5b49b75e5eb4bb8f17ef35f410ea142cd69dccfc",
          "message": "Merge pull request #3579 from greymistcube/refactor/roll-back-changes-for-old-queries\n\n♻️ ⏪ Revert changes for old queries",
          "timestamp": "2024-01-03T11:54:44+09:00",
          "tree_id": "3c8dd8c8e28d5b04d48efc66c1ae418f28de7ad8",
          "url": "https://github.com/planetarium/libplanet/commit/5b49b75e5eb4bb8f17ef35f410ea142cd69dccfc"
        },
        "date": 1704251193405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 930450.505050505,
            "unit": "ns",
            "range": "± 90610.85484117476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1667605.6603773586,
            "unit": "ns",
            "range": "± 69213.86703848369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1276465.6565656567,
            "unit": "ns",
            "range": "± 89134.15612482643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5071081.395348838,
            "unit": "ns",
            "range": "± 186578.87679122016"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33705.08474576271,
            "unit": "ns",
            "range": "± 1495.9051842548502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4958350,
            "unit": "ns",
            "range": "± 29112.462186243447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12708891.666666666,
            "unit": "ns",
            "range": "± 45656.234431063654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32385665.384615384,
            "unit": "ns",
            "range": "± 283089.72030716646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63174085.71428572,
            "unit": "ns",
            "range": "± 717886.3386113676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127684013.33333333,
            "unit": "ns",
            "range": "± 1137211.1261871338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284124.4270833335,
            "unit": "ns",
            "range": "± 19977.82576434598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066508.8942307692,
            "unit": "ns",
            "range": "± 1865.7130927034925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731472.9622395834,
            "unit": "ns",
            "range": "± 2540.5804444993655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928080.6790865385,
            "unit": "ns",
            "range": "± 3320.567737261555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626611.3606770834,
            "unit": "ns",
            "range": "± 1303.144046251768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562418.8932291666,
            "unit": "ns",
            "range": "± 890.2612356238837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2069096.6666666667,
            "unit": "ns",
            "range": "± 28952.988167191375"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2171904.1666666665,
            "unit": "ns",
            "range": "± 77518.3848017327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2710893.75,
            "unit": "ns",
            "range": "± 51632.579750257166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2579671.951219512,
            "unit": "ns",
            "range": "± 136376.18272960576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6123179.518072289,
            "unit": "ns",
            "range": "± 324546.4515435672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169750.94339622642,
            "unit": "ns",
            "range": "± 7072.390049761478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169075,
            "unit": "ns",
            "range": "± 7230.4721334590095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143105.88235294117,
            "unit": "ns",
            "range": "± 4626.549940222856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2681793.3333333335,
            "unit": "ns",
            "range": "± 35365.87270775249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2467558.3333333335,
            "unit": "ns",
            "range": "± 15201.582353840868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9909.278350515464,
            "unit": "ns",
            "range": "± 1178.9898990791162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51441.20879120879,
            "unit": "ns",
            "range": "± 3058.7088180635365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42681.818181818184,
            "unit": "ns",
            "range": "± 1774.5203743328952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50335.71428571428,
            "unit": "ns",
            "range": "± 9753.944483627674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2491.7525773195875,
            "unit": "ns",
            "range": "± 461.3544604144734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11114.583333333334,
            "unit": "ns",
            "range": "± 1722.9704562128904"
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
          "id": "2c8158d5b5a6cbefbf019cdffa73478a2de00469",
          "message": "Merge pull request #3570 from greymistcube/feature/account-query\n\n✨ New state querying scheme",
          "timestamp": "2024-01-03T22:07:16+09:00",
          "tree_id": "bef4aab36a2e388c93e6a686c04250c020bfd275",
          "url": "https://github.com/planetarium/libplanet/commit/2c8158d5b5a6cbefbf019cdffa73478a2de00469"
        },
        "date": 1704287939958,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 971243.75,
            "unit": "ns",
            "range": "± 107342.17085906565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1715465.4545454546,
            "unit": "ns",
            "range": "± 66551.65973994498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1373215,
            "unit": "ns",
            "range": "± 133609.223185385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5387758.461538462,
            "unit": "ns",
            "range": "± 249948.58089484356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34211.11111111111,
            "unit": "ns",
            "range": "± 1570.7108634269564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5084540,
            "unit": "ns",
            "range": "± 35308.63512351779"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13394260,
            "unit": "ns",
            "range": "± 162479.40440912152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32859453.333333332,
            "unit": "ns",
            "range": "± 437409.25894352514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65470821.428571425,
            "unit": "ns",
            "range": "± 439315.4800868688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134889686.66666666,
            "unit": "ns",
            "range": "± 1744963.2447486706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3270988.4375,
            "unit": "ns",
            "range": "± 9969.584402093218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1045330.1106770834,
            "unit": "ns",
            "range": "± 1685.8619606014217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750045.8333333334,
            "unit": "ns",
            "range": "± 2125.8871235614424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922827.7794471155,
            "unit": "ns",
            "range": "± 3351.177119939268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630359.4466145834,
            "unit": "ns",
            "range": "± 1353.6659110881906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563768.3528645834,
            "unit": "ns",
            "range": "± 897.0977775898006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112076.923076923,
            "unit": "ns",
            "range": "± 33340.26979110382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270966.6666666665,
            "unit": "ns",
            "range": "± 67682.5658074937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2844087.0967741935,
            "unit": "ns",
            "range": "± 84718.76904179492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2670248.8372093025,
            "unit": "ns",
            "range": "± 87785.88771521911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6077677.2727272725,
            "unit": "ns",
            "range": "± 142535.13579137227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180750.84745762713,
            "unit": "ns",
            "range": "± 8012.9286238866525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172789.47368421053,
            "unit": "ns",
            "range": "± 5848.760066039603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145663.88888888888,
            "unit": "ns",
            "range": "± 4847.924609136679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2741053.3333333335,
            "unit": "ns",
            "range": "± 28502.60305572775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2534640,
            "unit": "ns",
            "range": "± 45937.64096188285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12746.774193548386,
            "unit": "ns",
            "range": "± 1493.0601499941997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54789.53488372093,
            "unit": "ns",
            "range": "± 3747.282280133711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45671.42857142857,
            "unit": "ns",
            "range": "± 2456.1980331335294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64016.32653061225,
            "unit": "ns",
            "range": "± 14231.54398153848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2805.1546391752577,
            "unit": "ns",
            "range": "± 598.8480493867335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11243.333333333334,
            "unit": "ns",
            "range": "± 1441.6010138544116"
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
          "id": "3e14d03cb4f0fc4af1f6bd66f7392a1338eea893",
          "message": "Merge pull request #3584 from greymistcube/release/3.9.3\n\n🚀 Release 3.9.3",
          "timestamp": "2024-01-04T11:04:42+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/planetarium/libplanet/commit/3e14d03cb4f0fc4af1f6bd66f7392a1338eea893"
        },
        "date": 1704334643995,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1042289.7959183673,
            "unit": "ns",
            "range": "± 108065.59146995742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1850552.2388059702,
            "unit": "ns",
            "range": "± 86829.57420736909"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1427639.7959183673,
            "unit": "ns",
            "range": "± 165914.2734423916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5435503.092783505,
            "unit": "ns",
            "range": "± 372996.24340534804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38409.47368421053,
            "unit": "ns",
            "range": "± 5368.348406508449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5213214.285714285,
            "unit": "ns",
            "range": "± 88200.10341126728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13996429.411764706,
            "unit": "ns",
            "range": "± 285434.7052407649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34375285.71428572,
            "unit": "ns",
            "range": "± 344172.6508983153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65425207.14285714,
            "unit": "ns",
            "range": "± 574345.2616331396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135416772.97297296,
            "unit": "ns",
            "range": "± 4556493.748404496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3203241.045673077,
            "unit": "ns",
            "range": "± 4444.181058015825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062792.8013392857,
            "unit": "ns",
            "range": "± 1980.4152062955118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725750.7877604166,
            "unit": "ns",
            "range": "± 3009.5212351028913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927561.342075893,
            "unit": "ns",
            "range": "± 4991.136145955898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608369.3429129465,
            "unit": "ns",
            "range": "± 1594.609606911764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556174.3489583334,
            "unit": "ns",
            "range": "± 902.2901481918213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195909.090909091,
            "unit": "ns",
            "range": "± 93124.80727840317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2387779.5454545454,
            "unit": "ns",
            "range": "± 86190.64207432227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2901209.302325581,
            "unit": "ns",
            "range": "± 106843.42753133914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2730593.5064935065,
            "unit": "ns",
            "range": "± 139136.25973508498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6119966.666666667,
            "unit": "ns",
            "range": "± 153156.4862334022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185084.26966292135,
            "unit": "ns",
            "range": "± 10685.928500905084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 160907.54716981133,
            "unit": "ns",
            "range": "± 6564.878845229356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142469.23076923078,
            "unit": "ns",
            "range": "± 3749.962051090036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2735876.6666666665,
            "unit": "ns",
            "range": "± 30128.97197683572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2385317.3913043477,
            "unit": "ns",
            "range": "± 51487.87723315348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10057.142857142857,
            "unit": "ns",
            "range": "± 1362.525665988054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52928.72340425532,
            "unit": "ns",
            "range": "± 5995.475396872221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42890.16393442623,
            "unit": "ns",
            "range": "± 1732.9844121277015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53740.816326530614,
            "unit": "ns",
            "range": "± 13413.555512677818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2208.5106382978724,
            "unit": "ns",
            "range": "± 389.2809954698493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9083.14606741573,
            "unit": "ns",
            "range": "± 821.8930414620124"
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
          "id": "6f037c9592b939be9dced8fc37128b8e8e94977a",
          "message": "Merge pull request #3585 from greymistcube/prepare/3.9.4\n\n🔧 Prepare 3.9.4",
          "timestamp": "2024-01-04T13:49:56+09:00",
          "tree_id": "a44ae183ac56aae248479c66c087363ee5222613",
          "url": "https://github.com/planetarium/libplanet/commit/6f037c9592b939be9dced8fc37128b8e8e94977a"
        },
        "date": 1704344465206,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 972010.2040816327,
            "unit": "ns",
            "range": "± 121517.58643228993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754844,
            "unit": "ns",
            "range": "± 111574.15328295385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1360700,
            "unit": "ns",
            "range": "± 104236.91583913981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5551157.142857143,
            "unit": "ns",
            "range": "± 293449.6118559585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34562.19512195122,
            "unit": "ns",
            "range": "± 1707.7629757113477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4994757.142857143,
            "unit": "ns",
            "range": "± 20915.313281668285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13236906.666666666,
            "unit": "ns",
            "range": "± 154817.70601335654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34880240,
            "unit": "ns",
            "range": "± 615659.8803606698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67523763.63636364,
            "unit": "ns",
            "range": "± 1635474.799137767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133276764.28571428,
            "unit": "ns",
            "range": "± 2019822.5682192761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3361930.46875,
            "unit": "ns",
            "range": "± 14985.519761593578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068403.2301682692,
            "unit": "ns",
            "range": "± 2345.882534889361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767353.5381610577,
            "unit": "ns",
            "range": "± 2405.7080535129076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950731.9010416667,
            "unit": "ns",
            "range": "± 16647.370353536913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610141.03515625,
            "unit": "ns",
            "range": "± 2756.1528262453166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577831.494140625,
            "unit": "ns",
            "range": "± 2502.513401359404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2244530,
            "unit": "ns",
            "range": "± 64847.58868778923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2430911.111111111,
            "unit": "ns",
            "range": "± 46007.0185040716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2808353.5714285714,
            "unit": "ns",
            "range": "± 111962.5651144747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2611939.6825396824,
            "unit": "ns",
            "range": "± 113212.52999683688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6643118.888888889,
            "unit": "ns",
            "range": "± 388499.82745341834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182727.27272727274,
            "unit": "ns",
            "range": "± 8852.454853756615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172048.71794871794,
            "unit": "ns",
            "range": "± 8822.370379564616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146839.13043478262,
            "unit": "ns",
            "range": "± 5623.42237672515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2848445,
            "unit": "ns",
            "range": "± 61991.735230126484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2510920,
            "unit": "ns",
            "range": "± 32903.62984752377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11869.565217391304,
            "unit": "ns",
            "range": "± 1480.5507685039152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59349.48453608248,
            "unit": "ns",
            "range": "± 8179.154445287271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46753.68421052631,
            "unit": "ns",
            "range": "± 3043.227937929535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62561.22448979592,
            "unit": "ns",
            "range": "± 14405.680671130029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2936.4583333333335,
            "unit": "ns",
            "range": "± 640.4964836859256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12388.04347826087,
            "unit": "ns",
            "range": "± 1661.7111788890727"
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
          "id": "715ee5197229671fbe3acdef31779f7544914b0c",
          "message": "Merge pull request #3600 from greymistcube/revert/graphql-api-changes\n\n⏪ Roll back some internal name changes",
          "timestamp": "2024-01-11T12:12:18+09:00",
          "tree_id": "a9e887058197498f932b05ae76e541545ce4c948",
          "url": "https://github.com/planetarium/libplanet/commit/715ee5197229671fbe3acdef31779f7544914b0c"
        },
        "date": 1704943447986,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925598.9583333334,
            "unit": "ns",
            "range": "± 92912.52648513477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1682584.375,
            "unit": "ns",
            "range": "± 76947.9420370042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1302940.206185567,
            "unit": "ns",
            "range": "± 109391.24894519841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5538776.842105263,
            "unit": "ns",
            "range": "± 322294.35879848385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34698,
            "unit": "ns",
            "range": "± 1410.2380751388855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5044864.285714285,
            "unit": "ns",
            "range": "± 26883.297850090923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12967307.692307692,
            "unit": "ns",
            "range": "± 105879.66803198856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33475213.333333332,
            "unit": "ns",
            "range": "± 266749.67362857703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67179080,
            "unit": "ns",
            "range": "± 1167651.9718771393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131789373.33333333,
            "unit": "ns",
            "range": "± 1779916.9990546776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3312603.6272321427,
            "unit": "ns",
            "range": "± 5900.556102797453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1053454.2057291667,
            "unit": "ns",
            "range": "± 2642.2083446499764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741604.7154017857,
            "unit": "ns",
            "range": "± 2544.463136220521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929242.396763393,
            "unit": "ns",
            "range": "± 5722.857066319484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628174.5267427885,
            "unit": "ns",
            "range": "± 1153.7753646931744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561426.3392857143,
            "unit": "ns",
            "range": "± 1525.9871908349692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165127.777777778,
            "unit": "ns",
            "range": "± 45077.49935070066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2387400,
            "unit": "ns",
            "range": "± 39705.394259890345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2914851.2195121953,
            "unit": "ns",
            "range": "± 103567.83313836208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2745994.520547945,
            "unit": "ns",
            "range": "± 130898.72027471696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5933715.384615385,
            "unit": "ns",
            "range": "± 91671.97723544753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181527.02702702704,
            "unit": "ns",
            "range": "± 9051.141565741593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159004.4776119403,
            "unit": "ns",
            "range": "± 6619.88356658161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143962.06896551725,
            "unit": "ns",
            "range": "± 4077.32526060752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2714206.6666666665,
            "unit": "ns",
            "range": "± 50310.61328908454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2473573.3333333335,
            "unit": "ns",
            "range": "± 32709.750985353123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10217.708333333334,
            "unit": "ns",
            "range": "± 1257.1056809124907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50355.681818181816,
            "unit": "ns",
            "range": "± 3906.0182846634743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44244.444444444445,
            "unit": "ns",
            "range": "± 1871.0724063182417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50163.978494623654,
            "unit": "ns",
            "range": "± 9698.650638976733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2407.1428571428573,
            "unit": "ns",
            "range": "± 473.90677233605703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9305.494505494506,
            "unit": "ns",
            "range": "± 1167.4628366545442"
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
          "id": "5c29929772c5b52821d5bc14894307d53beeab02",
          "message": "Merge pull request #3601 from greymistcube/release/3.9.4\n\n🚀 Release 3.9.4",
          "timestamp": "2024-01-11T12:22:56+09:00",
          "tree_id": "9e36bd32c16585a301e61095347f3be5f9981035",
          "url": "https://github.com/planetarium/libplanet/commit/5c29929772c5b52821d5bc14894307d53beeab02"
        },
        "date": 1704944087911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933415.9574468085,
            "unit": "ns",
            "range": "± 92859.98397771912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733764.2857142857,
            "unit": "ns",
            "range": "± 84315.64923550158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1337256.3829787234,
            "unit": "ns",
            "range": "± 118788.87620209699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5394861.627906977,
            "unit": "ns",
            "range": "± 292178.5160071532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34324.59016393442,
            "unit": "ns",
            "range": "± 1561.1593702229675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5182950,
            "unit": "ns",
            "range": "± 81818.91590579772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13038392.857142856,
            "unit": "ns",
            "range": "± 124766.93789305238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32309171.42857143,
            "unit": "ns",
            "range": "± 389974.19328536524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65572471.428571425,
            "unit": "ns",
            "range": "± 660520.1882765425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130914060,
            "unit": "ns",
            "range": "± 2283627.055115862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3395492.7734375,
            "unit": "ns",
            "range": "± 8185.175785385293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048761.42578125,
            "unit": "ns",
            "range": "± 2990.6032407232883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738226.7996651785,
            "unit": "ns",
            "range": "± 1603.6024993386227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960352.4832589286,
            "unit": "ns",
            "range": "± 5210.97769445728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629580.0856370192,
            "unit": "ns",
            "range": "± 938.9875837722717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582894.189453125,
            "unit": "ns",
            "range": "± 843.4759048023344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2099658.8235294116,
            "unit": "ns",
            "range": "± 66707.87567717813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2198278.125,
            "unit": "ns",
            "range": "± 67971.0267230849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2745707.6923076925,
            "unit": "ns",
            "range": "± 31143.443974038946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2602980.9523809524,
            "unit": "ns",
            "range": "± 118565.08197439274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6111021.212121212,
            "unit": "ns",
            "range": "± 192086.57513862036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172655.07246376813,
            "unit": "ns",
            "range": "± 8252.816564341641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163351.13636363635,
            "unit": "ns",
            "range": "± 9354.364576221593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143705.55555555556,
            "unit": "ns",
            "range": "± 6907.678701208072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2686135.714285714,
            "unit": "ns",
            "range": "± 42155.419528269376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2531842.1052631577,
            "unit": "ns",
            "range": "± 53552.44901329572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11053.260869565218,
            "unit": "ns",
            "range": "± 1493.9034412032108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55556.12244897959,
            "unit": "ns",
            "range": "± 6736.224068905454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44969.565217391304,
            "unit": "ns",
            "range": "± 1708.6537345351933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60794.9494949495,
            "unit": "ns",
            "range": "± 17181.048967390558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2462.8865979381444,
            "unit": "ns",
            "range": "± 505.8655098831578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9919.78021978022,
            "unit": "ns",
            "range": "± 1370.094869401368"
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
          "id": "b4bde808d293caf9a886c55c957221bcbf166858",
          "message": "Merge pull request #3602 from greymistcube/prepare/3.9.5\n\n🔧 Prepare 3.9.5",
          "timestamp": "2024-01-11T13:54:12+09:00",
          "tree_id": "203f0a8333f2a961fa901363c5537652e1d0075f",
          "url": "https://github.com/planetarium/libplanet/commit/b4bde808d293caf9a886c55c957221bcbf166858"
        },
        "date": 1704949535800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012389.898989899,
            "unit": "ns",
            "range": "± 111056.36966814306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1792688.2352941176,
            "unit": "ns",
            "range": "± 72873.5607667385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1398818.2795698924,
            "unit": "ns",
            "range": "± 105945.28319746262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5112030,
            "unit": "ns",
            "range": "± 151678.39650232738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36346.153846153844,
            "unit": "ns",
            "range": "± 2568.584032424077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5109864.285714285,
            "unit": "ns",
            "range": "± 51488.857751240444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13883550,
            "unit": "ns",
            "range": "± 160180.08495248284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34169166.666666664,
            "unit": "ns",
            "range": "± 443426.8141687076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67840184.61538461,
            "unit": "ns",
            "range": "± 413719.66927327705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137040600,
            "unit": "ns",
            "range": "± 1283615.9271111174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3348496.2890625,
            "unit": "ns",
            "range": "± 7376.669107600305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083103.0208333333,
            "unit": "ns",
            "range": "± 2900.2671112795033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 753611.2095424107,
            "unit": "ns",
            "range": "± 1699.9451292592428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959066.3504464286,
            "unit": "ns",
            "range": "± 7570.547121543413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617417.0748197115,
            "unit": "ns",
            "range": "± 530.1991872434363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564923.4114583334,
            "unit": "ns",
            "range": "± 970.7498561849246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2215250,
            "unit": "ns",
            "range": "± 114255.22634430318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2378314.705882353,
            "unit": "ns",
            "range": "± 76514.96638053175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2900280,
            "unit": "ns",
            "range": "± 94306.00317739119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2795341.6666666665,
            "unit": "ns",
            "range": "± 43633.899630559004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6251000,
            "unit": "ns",
            "range": "± 204450.65283447847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185340.9090909091,
            "unit": "ns",
            "range": "± 6522.744399650445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173885.91549295775,
            "unit": "ns",
            "range": "± 7972.583301982004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142760.52631578947,
            "unit": "ns",
            "range": "± 4862.684136647401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806420,
            "unit": "ns",
            "range": "± 28733.48469742476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2540155,
            "unit": "ns",
            "range": "± 55431.98274034869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12374.157303370786,
            "unit": "ns",
            "range": "± 1283.6850443766502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59210.63829787234,
            "unit": "ns",
            "range": "± 5589.534538974463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49065.26315789474,
            "unit": "ns",
            "range": "± 5502.683454094797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58831.395348837206,
            "unit": "ns",
            "range": "± 9389.47172137849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3183.505154639175,
            "unit": "ns",
            "range": "± 727.5358542669813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11813.636363636364,
            "unit": "ns",
            "range": "± 1601.9515266807862"
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
          "id": "ccef9c5873b8b86d3dc5d89e1917bf4b1169b030",
          "message": "Merge pull request #3610 from greymistcube/fix/state-store-commit\n\n🐛 Fixed `IStateStore.Commit()`",
          "timestamp": "2024-01-18T13:19:51+09:00",
          "tree_id": "3346d90600647c3f8c3ed1ca8491013d2dfb717d",
          "url": "https://github.com/planetarium/libplanet/commit/ccef9c5873b8b86d3dc5d89e1917bf4b1169b030"
        },
        "date": 1705552230761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974041.5789473684,
            "unit": "ns",
            "range": "± 94967.37700015155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1770372.463768116,
            "unit": "ns",
            "range": "± 77101.88233770334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1469003,
            "unit": "ns",
            "range": "± 118840.31426220394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5398457.575757576,
            "unit": "ns",
            "range": "± 167831.88394622577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36200,
            "unit": "ns",
            "range": "± 604.1522986797286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5107233.333333333,
            "unit": "ns",
            "range": "± 28519.19077435828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13640069.56521739,
            "unit": "ns",
            "range": "± 293011.1903460074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32428053.846153848,
            "unit": "ns",
            "range": "± 359950.80824881385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64559080,
            "unit": "ns",
            "range": "± 577968.6783406668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137681466.66666666,
            "unit": "ns",
            "range": "± 2450622.1663857023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3345823.6197916665,
            "unit": "ns",
            "range": "± 16684.259643346428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064760.7421875,
            "unit": "ns",
            "range": "± 1523.378258229813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756786.8512834822,
            "unit": "ns",
            "range": "± 1053.0596757334138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933478.5677083333,
            "unit": "ns",
            "range": "± 7986.982974512004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614657.03125,
            "unit": "ns",
            "range": "± 1445.6340968710651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569213.2962740385,
            "unit": "ns",
            "range": "± 1336.4656922473446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2194939.344262295,
            "unit": "ns",
            "range": "± 98746.82657970757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2225641.6666666665,
            "unit": "ns",
            "range": "± 73465.97803453942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2903771.4285714286,
            "unit": "ns",
            "range": "± 66994.31425768266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2708782.6923076925,
            "unit": "ns",
            "range": "± 111687.85058850376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6254942.372881356,
            "unit": "ns",
            "range": "± 275966.61792337394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167711.36363636365,
            "unit": "ns",
            "range": "± 8948.555804859547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162547.0588235294,
            "unit": "ns",
            "range": "± 7749.269981760829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142116.66666666666,
            "unit": "ns",
            "range": "± 5545.990820799937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2672966.6666666665,
            "unit": "ns",
            "range": "± 28646.183158037118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2443760,
            "unit": "ns",
            "range": "± 37612.266236276846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10221.739130434782,
            "unit": "ns",
            "range": "± 1063.565027895273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51025,
            "unit": "ns",
            "range": "± 4855.214145184988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43710.81081081081,
            "unit": "ns",
            "range": "± 1487.5004731621627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51039.17525773196,
            "unit": "ns",
            "range": "± 9386.94302276917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2347.872340425532,
            "unit": "ns",
            "range": "± 328.8064840569669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9522.340425531915,
            "unit": "ns",
            "range": "± 1289.9240833974877"
          }
        ]
      }
    ]
  }
}