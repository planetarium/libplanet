window.BENCHMARK_DATA = {
  "lastUpdate": 1702617473219,
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
        "date": 1700794476629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7608926.296296297,
            "unit": "ns",
            "range": "± 205567.69586754977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18869540.692307692,
            "unit": "ns",
            "range": "± 253920.80617861435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47568145.84375,
            "unit": "ns",
            "range": "± 1471881.310064164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94996312.64444445,
            "unit": "ns",
            "range": "± 3583841.2504399912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199343499.2948718,
            "unit": "ns",
            "range": "± 10139638.182855273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36189.681818181816,
            "unit": "ns",
            "range": "± 4482.653964367908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222562.19791666666,
            "unit": "ns",
            "range": "± 21826.175183707528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216692.74468085106,
            "unit": "ns",
            "range": "± 15211.571635157577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190735.86666666667,
            "unit": "ns",
            "range": "± 12651.285016626181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3712201.964285714,
            "unit": "ns",
            "range": "± 104366.64234020872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3449361.205882353,
            "unit": "ns",
            "range": "± 65694.40183889787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12717.644444444444,
            "unit": "ns",
            "range": "± 803.6282794213025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57789.23333333333,
            "unit": "ns",
            "range": "± 4306.063411965176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56965.05434782609,
            "unit": "ns",
            "range": "± 9446.33211958469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88753.88144329897,
            "unit": "ns",
            "range": "± 24289.703644001136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5257.375,
            "unit": "ns",
            "range": "± 1398.6007010768412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18445.694736842106,
            "unit": "ns",
            "range": "± 4328.785592252799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054623.14,
            "unit": "ns",
            "range": "± 102431.74363961059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2320695.6157894735,
            "unit": "ns",
            "range": "± 186982.8258169924"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513540.5368421052,
            "unit": "ns",
            "range": "± 91105.00658998893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6611064.295698925,
            "unit": "ns",
            "range": "± 517425.56761141063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2927734.4137931033,
            "unit": "ns",
            "range": "± 123925.07705486346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3001735.5789473685,
            "unit": "ns",
            "range": "± 148941.8383947473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3594790.9545454546,
            "unit": "ns",
            "range": "± 84767.84148342897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3420917.6025641025,
            "unit": "ns",
            "range": "± 174302.60032845772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12483499.122448979,
            "unit": "ns",
            "range": "± 2433437.4314358993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5537455.165178572,
            "unit": "ns",
            "range": "± 543946.8531728353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869563.1249023438,
            "unit": "ns",
            "range": "± 37391.15341275621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220001.2100260416,
            "unit": "ns",
            "range": "± 20236.805883106914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2930422.875892857,
            "unit": "ns",
            "range": "± 96045.64902509647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875793.5485587284,
            "unit": "ns",
            "range": "± 25153.770649935323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768221.6151855469,
            "unit": "ns",
            "range": "± 17182.639919541285"
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
        "date": 1700799388257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7656826.264705882,
            "unit": "ns",
            "range": "± 99097.36618569223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18823789.083333332,
            "unit": "ns",
            "range": "± 139726.53392606726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46493613.15384615,
            "unit": "ns",
            "range": "± 687552.5339523575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92823515.61538461,
            "unit": "ns",
            "range": "± 2163982.022807733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188079469.16666666,
            "unit": "ns",
            "range": "± 2788197.869620618"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34086.806818181816,
            "unit": "ns",
            "range": "± 2855.631294248018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222225.59595959596,
            "unit": "ns",
            "range": "± 18448.33978809818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 211065.64835164836,
            "unit": "ns",
            "range": "± 14645.996963428175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181728.36842105264,
            "unit": "ns",
            "range": "± 6155.867209730948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3737858.3125,
            "unit": "ns",
            "range": "± 68035.57045665524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3375244.2413793104,
            "unit": "ns",
            "range": "± 89911.74460454269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11940.552941176471,
            "unit": "ns",
            "range": "± 691.1998626591704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58686.586956521736,
            "unit": "ns",
            "range": "± 4691.739732511832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51169.35632183908,
            "unit": "ns",
            "range": "± 2843.3874695143054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59234.9375,
            "unit": "ns",
            "range": "± 9881.760894445888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3176.553191489362,
            "unit": "ns",
            "range": "± 296.2889688365414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12173.333333333334,
            "unit": "ns",
            "range": "± 801.8016230319251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030459.9387755102,
            "unit": "ns",
            "range": "± 82344.82596782551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2201752.7682926827,
            "unit": "ns",
            "range": "± 115529.17263019974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1480828.644329897,
            "unit": "ns",
            "range": "± 88692.85526126453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6301664.780487805,
            "unit": "ns",
            "range": "± 224980.0426233972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883883.5,
            "unit": "ns",
            "range": "± 126552.499464909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316565.6153846155,
            "unit": "ns",
            "range": "± 46556.089824602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3542569.8061224488,
            "unit": "ns",
            "range": "± 132639.44629084456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3389037.8983050846,
            "unit": "ns",
            "range": "± 141451.16360739502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12739697.42,
            "unit": "ns",
            "range": "± 2434575.069211754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368264.868229167,
            "unit": "ns",
            "range": "± 46095.16210859367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1321866.52421875,
            "unit": "ns",
            "range": "± 17446.088846068516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 880819.4617838542,
            "unit": "ns",
            "range": "± 6059.833434691062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971842.5398995536,
            "unit": "ns",
            "range": "± 32631.92248374883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621332.2504557292,
            "unit": "ns",
            "range": "± 7138.434313621779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559248.6001953125,
            "unit": "ns",
            "range": "± 4512.02979620212"
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
        "date": 1701066091963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8971666.316091955,
            "unit": "ns",
            "range": "± 635739.7635846292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21274351.73529412,
            "unit": "ns",
            "range": "± 672727.2409644153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52612749.35714286,
            "unit": "ns",
            "range": "± 1784533.599919879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111793841.28571428,
            "unit": "ns",
            "range": "± 8873610.685155975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212198428.07142857,
            "unit": "ns",
            "range": "± 3249134.1632598233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73152.87113402062,
            "unit": "ns",
            "range": "± 22475.66412455906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242175.2789473684,
            "unit": "ns",
            "range": "± 24452.627263090508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251039.4814814815,
            "unit": "ns",
            "range": "± 6960.362967825359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220482.11111111112,
            "unit": "ns",
            "range": "± 23408.036663212573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3801383.782608696,
            "unit": "ns",
            "range": "± 93391.97904431746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539679,
            "unit": "ns",
            "range": "± 52037.246704422425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17414.315217391304,
            "unit": "ns",
            "range": "± 3305.343359429082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87027.61956521739,
            "unit": "ns",
            "range": "± 13223.230281344235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83525.58888888889,
            "unit": "ns",
            "range": "± 12143.088098843704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71102.78571428571,
            "unit": "ns",
            "range": "± 17151.58779476242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3741.887755102041,
            "unit": "ns",
            "range": "± 987.2003095566384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13267.702127659575,
            "unit": "ns",
            "range": "± 2094.4393228223807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511634.948979592,
            "unit": "ns",
            "range": "± 400874.1086450025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2997714.484210526,
            "unit": "ns",
            "range": "± 699988.9590633505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155103.030927835,
            "unit": "ns",
            "range": "± 556825.5460825727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9782664.578947369,
            "unit": "ns",
            "range": "± 2264939.09473024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3054316.969230769,
            "unit": "ns",
            "range": "± 142583.71194417786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3355884.918604651,
            "unit": "ns",
            "range": "± 290139.9692608203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3839610.272727273,
            "unit": "ns",
            "range": "± 165952.18231420623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3755955.5,
            "unit": "ns",
            "range": "± 83670.70321866109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13540909.289473685,
            "unit": "ns",
            "range": "± 2663547.4034761996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4443170.853236607,
            "unit": "ns",
            "range": "± 38663.4720583826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1367819.368861607,
            "unit": "ns",
            "range": "± 8011.5120055740235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 907968.6385967548,
            "unit": "ns",
            "range": "± 8153.686712056793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994854.0736177885,
            "unit": "ns",
            "range": "± 27369.53005312055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636995.1026141827,
            "unit": "ns",
            "range": "± 3645.0737379642947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576890.9145883414,
            "unit": "ns",
            "range": "± 2241.0540736706625"
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
        "date": 1701066810836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7790154.1875,
            "unit": "ns",
            "range": "± 234627.78292881843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18760479.35714286,
            "unit": "ns",
            "range": "± 128891.93754018379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48022776.30434783,
            "unit": "ns",
            "range": "± 1701501.6375138736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105662313.03157894,
            "unit": "ns",
            "range": "± 8144634.661456489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220057433.06756756,
            "unit": "ns",
            "range": "± 7430085.784302059"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40844.68817204301,
            "unit": "ns",
            "range": "± 7770.756451312797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253903.1348314607,
            "unit": "ns",
            "range": "± 52355.15569649603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259787.32222222222,
            "unit": "ns",
            "range": "± 56558.51092086864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230244.9367816092,
            "unit": "ns",
            "range": "± 36598.99550143392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3814837.75,
            "unit": "ns",
            "range": "± 48369.14040377398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3791876.3764044945,
            "unit": "ns",
            "range": "± 403930.4719186274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15062.27894736842,
            "unit": "ns",
            "range": "± 2612.905891014208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71240.07692307692,
            "unit": "ns",
            "range": "± 1131.7821095907743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64318.78125,
            "unit": "ns",
            "range": "± 9304.224625295787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67111.54166666667,
            "unit": "ns",
            "range": "± 10801.760598129282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4506.135416666667,
            "unit": "ns",
            "range": "± 1176.5717605760765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13862.5,
            "unit": "ns",
            "range": "± 1908.840505889132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1045381.76,
            "unit": "ns",
            "range": "± 105422.93772480293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2177237.9795918367,
            "unit": "ns",
            "range": "± 86430.67496976256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1504010.2727272727,
            "unit": "ns",
            "range": "± 113359.30874137695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6915284.094736842,
            "unit": "ns",
            "range": "± 671356.3455183441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3097499.716666667,
            "unit": "ns",
            "range": "± 137104.46301221385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256413.409090909,
            "unit": "ns",
            "range": "± 272855.1461289472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3847159.904761905,
            "unit": "ns",
            "range": "± 203346.48055898526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3721790.445652174,
            "unit": "ns",
            "range": "± 208697.54252018407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14164385.673913043,
            "unit": "ns",
            "range": "± 2565171.7002489413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4317001.815504808,
            "unit": "ns",
            "range": "± 16740.13644302181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391021.8690104166,
            "unit": "ns",
            "range": "± 14454.958327018981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896005.2193509615,
            "unit": "ns",
            "range": "± 3737.3064229791207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2004410.1095252405,
            "unit": "ns",
            "range": "± 22333.864994645268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 647601.3493652344,
            "unit": "ns",
            "range": "± 7125.3730478948655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 685068.5456542969,
            "unit": "ns",
            "range": "± 94040.92800971835"
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
        "date": 1701157821201,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8341239.857142857,
            "unit": "ns",
            "range": "± 57700.704658884955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20058082.285714287,
            "unit": "ns",
            "range": "± 128608.81718991513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49265601.428571425,
            "unit": "ns",
            "range": "± 186711.54047300396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100041742.93333334,
            "unit": "ns",
            "range": "± 513291.4760343242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205704581.5,
            "unit": "ns",
            "range": "± 978623.4351413449"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65657.97916666667,
            "unit": "ns",
            "range": "± 7886.661713870774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304332.9130434783,
            "unit": "ns",
            "range": "± 18994.710819126612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300116.21276595746,
            "unit": "ns",
            "range": "± 19957.853377912263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299960.152173913,
            "unit": "ns",
            "range": "± 7239.952358009344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4189030.4565217393,
            "unit": "ns",
            "range": "± 102156.03782114989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3830715.119047619,
            "unit": "ns",
            "range": "± 139943.61703356358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20903.255319148935,
            "unit": "ns",
            "range": "± 4491.855669260314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97264.23469387754,
            "unit": "ns",
            "range": "± 13729.164338705992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93256.38541666667,
            "unit": "ns",
            "range": "± 9616.690125828432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103880.39130434782,
            "unit": "ns",
            "range": "± 11722.64320038105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6833.134408602151,
            "unit": "ns",
            "range": "± 736.0962511635908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19403.57894736842,
            "unit": "ns",
            "range": "± 2497.2827726071755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1511048.3529411764,
            "unit": "ns",
            "range": "± 30791.75463890694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2723396.2112676054,
            "unit": "ns",
            "range": "± 125412.87521439116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138984.111111111,
            "unit": "ns",
            "range": "± 224302.65820223707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8654795.976190476,
            "unit": "ns",
            "range": "± 309133.57426219713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3054228.8846153845,
            "unit": "ns",
            "range": "± 80403.97579439808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3340259.3673469387,
            "unit": "ns",
            "range": "± 234437.3369486503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4356176.583333333,
            "unit": "ns",
            "range": "± 48110.59423766781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4164511.7126436783,
            "unit": "ns",
            "range": "± 260746.6012598362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17484022.479166668,
            "unit": "ns",
            "range": "± 3471254.9684307547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5997135.15671875,
            "unit": "ns",
            "range": "± 155002.38309707667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1767452.5345052083,
            "unit": "ns",
            "range": "± 14450.604435890296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078727.187220982,
            "unit": "ns",
            "range": "± 13655.952460428822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2490887.1378348214,
            "unit": "ns",
            "range": "± 21756.40819446205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849934.0469501202,
            "unit": "ns",
            "range": "± 5753.518958614642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783450.695452009,
            "unit": "ns",
            "range": "± 7339.322967065061"
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
        "date": 1701245226062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9405166.030303031,
            "unit": "ns",
            "range": "± 578753.4212092021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22763592.85714286,
            "unit": "ns",
            "range": "± 1324645.705659488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57051331.890625,
            "unit": "ns",
            "range": "± 2636736.2482246854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113185648.45652173,
            "unit": "ns",
            "range": "± 2841506.95704324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211909944.19230768,
            "unit": "ns",
            "range": "± 5229069.241555822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67898.82954545454,
            "unit": "ns",
            "range": "± 8900.086215805564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338453.89130434784,
            "unit": "ns",
            "range": "± 26914.591560883004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324351.76923076925,
            "unit": "ns",
            "range": "± 24705.978447455873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293187.2912087912,
            "unit": "ns",
            "range": "± 18764.299369053922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3947193.3076923075,
            "unit": "ns",
            "range": "± 57414.15550103856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3784104.1428571427,
            "unit": "ns",
            "range": "± 136338.7640824871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21332.97311827957,
            "unit": "ns",
            "range": "± 5172.72800071473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106588.06701030929,
            "unit": "ns",
            "range": "± 20010.41559408667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106006.86666666667,
            "unit": "ns",
            "range": "± 13466.530781571446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114318.74157303371,
            "unit": "ns",
            "range": "± 15981.347713483829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8164.563829787234,
            "unit": "ns",
            "range": "± 893.9114700640421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22528.68181818182,
            "unit": "ns",
            "range": "± 2514.3936475496503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379505.7857142857,
            "unit": "ns",
            "range": "± 137555.97024028955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2599483.7192982454,
            "unit": "ns",
            "range": "± 104410.43116449389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107162.0208333335,
            "unit": "ns",
            "range": "± 164611.16928011898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8763937.703703703,
            "unit": "ns",
            "range": "± 367099.8515645856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188020.7266666666,
            "unit": "ns",
            "range": "± 160646.36373460386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3393314.432989691,
            "unit": "ns",
            "range": "± 224850.12236422376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4311003.483333333,
            "unit": "ns",
            "range": "± 192109.63323021357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119354.7164179105,
            "unit": "ns",
            "range": "± 195361.61596187862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17020508.46,
            "unit": "ns",
            "range": "± 2863972.1247425685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6255623.196514423,
            "unit": "ns",
            "range": "± 87284.00562424389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777710.2446831597,
            "unit": "ns",
            "range": "± 87092.31007367249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1116837.269780585,
            "unit": "ns",
            "range": "± 43338.622896419016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2464251.5690104165,
            "unit": "ns",
            "range": "± 42664.836799828045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 902888.9422800165,
            "unit": "ns",
            "range": "± 30734.183433792383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876241.0108723958,
            "unit": "ns",
            "range": "± 12414.005230560875"
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
        "date": 1701673915632,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12275103.136363637,
            "unit": "ns",
            "range": "± 1284936.4665542957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30059865.050561797,
            "unit": "ns",
            "range": "± 2576144.048974531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78247359.39285715,
            "unit": "ns",
            "range": "± 13762614.692100726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 193618226.00515464,
            "unit": "ns",
            "range": "± 47062685.4579396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301521588.8933333,
            "unit": "ns",
            "range": "± 14291614.499539517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55049.36170212766,
            "unit": "ns",
            "range": "± 17659.170082790588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349888.0125,
            "unit": "ns",
            "range": "± 17379.815938701217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346822.17441860464,
            "unit": "ns",
            "range": "± 33254.60574635777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324218.93529411766,
            "unit": "ns",
            "range": "± 19906.618319428493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5477563.692307692,
            "unit": "ns",
            "range": "± 53304.44333321663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5139144.2,
            "unit": "ns",
            "range": "± 78630.15629896712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27192.010869565216,
            "unit": "ns",
            "range": "± 2764.5874421250055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116169.45454545454,
            "unit": "ns",
            "range": "± 10243.254253363993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110860.20454545454,
            "unit": "ns",
            "range": "± 6831.985462512278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111174.32967032967,
            "unit": "ns",
            "range": "± 13335.609425773408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9226.59375,
            "unit": "ns",
            "range": "± 1033.1824374296914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25066.735632183907,
            "unit": "ns",
            "range": "± 2434.589232626843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1085559.5714285714,
            "unit": "ns",
            "range": "± 114530.31767835603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2209544.618556701,
            "unit": "ns",
            "range": "± 138630.62505535496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1568542.2916666667,
            "unit": "ns",
            "range": "± 164281.53109098494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6987568.760416667,
            "unit": "ns",
            "range": "± 773042.5771820586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4452068,
            "unit": "ns",
            "range": "± 106134.44775546317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4447543.121621622,
            "unit": "ns",
            "range": "± 149457.5864942499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5491836.428571428,
            "unit": "ns",
            "range": "± 264683.08606207283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5087815.404761905,
            "unit": "ns",
            "range": "± 456817.19501872297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19657112.294736844,
            "unit": "ns",
            "range": "± 3957968.4919233634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4800588.368600399,
            "unit": "ns",
            "range": "± 437761.32202519604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1716223.294140625,
            "unit": "ns",
            "range": "± 294801.1611790026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 981384.9211154514,
            "unit": "ns",
            "range": "± 67312.49958678366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2154562.8519176138,
            "unit": "ns",
            "range": "± 153705.85074040256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870296.539182079,
            "unit": "ns",
            "range": "± 55712.85000550838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 829305.3551432291,
            "unit": "ns",
            "range": "± 30208.308652849966"
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
        "date": 1701747263761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7531545.866666666,
            "unit": "ns",
            "range": "± 30858.21755769596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18918779.04,
            "unit": "ns",
            "range": "± 469615.61481656466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46189677,
            "unit": "ns",
            "range": "± 614412.4595929651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93783318.5909091,
            "unit": "ns",
            "range": "± 2291457.152276434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193616147.7777778,
            "unit": "ns",
            "range": "± 6463901.92241253"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34781.8,
            "unit": "ns",
            "range": "± 3344.857546218431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215873.66,
            "unit": "ns",
            "range": "± 10882.400797121432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234483.26315789475,
            "unit": "ns",
            "range": "± 26981.064087264513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219796,
            "unit": "ns",
            "range": "± 27140.9759262774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3823961,
            "unit": "ns",
            "range": "± 46672.86062172946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4345594.840659341,
            "unit": "ns",
            "range": "± 291631.5435587714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24406.965909090908,
            "unit": "ns",
            "range": "± 3084.104864448744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88736.97422680413,
            "unit": "ns",
            "range": "± 24847.673696903024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72955.5947368421,
            "unit": "ns",
            "range": "± 11996.70540595677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63117.645833333336,
            "unit": "ns",
            "range": "± 14360.293409243466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3270.4777777777776,
            "unit": "ns",
            "range": "± 365.45800040828493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12113.755813953489,
            "unit": "ns",
            "range": "± 845.8482854653215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1123837.2291666667,
            "unit": "ns",
            "range": "± 116155.95241158185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2210439.5384615385,
            "unit": "ns",
            "range": "± 122884.17718389294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1529028.2708333333,
            "unit": "ns",
            "range": "± 117410.13674380745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6520882.625,
            "unit": "ns",
            "range": "± 201611.42809914675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2901198.5217391304,
            "unit": "ns",
            "range": "± 70845.70617056706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3045668.9468085105,
            "unit": "ns",
            "range": "± 170162.37070783632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3560061.098039216,
            "unit": "ns",
            "range": "± 143794.27082081608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3398613.743243243,
            "unit": "ns",
            "range": "± 115142.82508654811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14442001.7,
            "unit": "ns",
            "range": "± 2683793.9800582794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5140682.680234375,
            "unit": "ns",
            "range": "± 559498.5926209672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1601115.368849734,
            "unit": "ns",
            "range": "± 101108.97481139122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1019276.4044961735,
            "unit": "ns",
            "range": "± 70021.09435148719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2042891.7327769885,
            "unit": "ns",
            "range": "± 95985.89524105779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644295.4848400297,
            "unit": "ns",
            "range": "± 15105.367728475952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566653.9442608173,
            "unit": "ns",
            "range": "± 4078.048973676247"
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
        "date": 1701748505267,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7975100.6,
            "unit": "ns",
            "range": "± 55341.97258320307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19338045.866666667,
            "unit": "ns",
            "range": "± 265300.7021655849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48417752.692307696,
            "unit": "ns",
            "range": "± 665026.5789875601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100814527.43333334,
            "unit": "ns",
            "range": "± 1569961.9282284006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214259368.33333334,
            "unit": "ns",
            "range": "± 7112384.701434089"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62709.255102040814,
            "unit": "ns",
            "range": "± 9121.570263297472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322615.85714285716,
            "unit": "ns",
            "range": "± 35857.93741591685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323189.84210526315,
            "unit": "ns",
            "range": "± 40345.9072585728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319148.64130434784,
            "unit": "ns",
            "range": "± 30574.224367645216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4386750.079710145,
            "unit": "ns",
            "range": "± 210797.5068887484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3628926.5423728814,
            "unit": "ns",
            "range": "± 150964.30812536363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20010.01111111111,
            "unit": "ns",
            "range": "± 2363.2611501736533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96591.95604395604,
            "unit": "ns",
            "range": "± 13280.473654464862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108720.97126436782,
            "unit": "ns",
            "range": "± 12314.859668198436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125270.56382978724,
            "unit": "ns",
            "range": "± 23043.24001533821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8181.397849462365,
            "unit": "ns",
            "range": "± 975.7674364290525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23508.060975609755,
            "unit": "ns",
            "range": "± 3521.6462632756693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443865.15,
            "unit": "ns",
            "range": "± 165045.9711015572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2815233.860759494,
            "unit": "ns",
            "range": "± 140279.3272968793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235607.7653061226,
            "unit": "ns",
            "range": "± 254023.9877626951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9809513.429411765,
            "unit": "ns",
            "range": "± 539431.1457839018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673045.569767442,
            "unit": "ns",
            "range": "± 404751.8451863559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3389362.3695652173,
            "unit": "ns",
            "range": "± 213705.98874841773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333691.301204819,
            "unit": "ns",
            "range": "± 220422.3999460335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4284683.041666667,
            "unit": "ns",
            "range": "± 454386.3699196491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19842945.34,
            "unit": "ns",
            "range": "± 3667838.1480779527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6464990.756770833,
            "unit": "ns",
            "range": "± 106232.77929483184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882245.85625,
            "unit": "ns",
            "range": "± 34123.71038537981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1189654.5421316964,
            "unit": "ns",
            "range": "± 13752.157747796624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2874189.6997070312,
            "unit": "ns",
            "range": "± 83921.06835914512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 897664.4467773438,
            "unit": "ns",
            "range": "± 9875.100806298251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782923.20703125,
            "unit": "ns",
            "range": "± 7618.569593166598"
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
        "date": 1701752647281,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7553117.083333333,
            "unit": "ns",
            "range": "± 22465.80858856139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18635178.416666668,
            "unit": "ns",
            "range": "± 87135.86932899503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47228076.64,
            "unit": "ns",
            "range": "± 1202163.4610398205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93057082.3,
            "unit": "ns",
            "range": "± 2110067.1041471045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190305671.1111111,
            "unit": "ns",
            "range": "± 4016276.9513953375"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33323.681818181816,
            "unit": "ns",
            "range": "± 2596.263294236345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223923.71134020618,
            "unit": "ns",
            "range": "± 20917.97591783538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210031.19696969696,
            "unit": "ns",
            "range": "± 9882.626907425742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203529.11340206186,
            "unit": "ns",
            "range": "± 23865.020786566605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3786367,
            "unit": "ns",
            "range": "± 58788.87296179139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3645410.862745098,
            "unit": "ns",
            "range": "± 139314.582385911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19872.261904761905,
            "unit": "ns",
            "range": "± 2405.169440811436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88856.30107526881,
            "unit": "ns",
            "range": "± 14806.911289330652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88210.38202247191,
            "unit": "ns",
            "range": "± 5842.848963604255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74480,
            "unit": "ns",
            "range": "± 17699.611019216747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4895.408163265306,
            "unit": "ns",
            "range": "± 1974.4644835077952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14457.265957446809,
            "unit": "ns",
            "range": "± 2660.419463957702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052432.574468085,
            "unit": "ns",
            "range": "± 67604.43649885508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2214145.8554216865,
            "unit": "ns",
            "range": "± 117622.2720118207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1513393.0684210525,
            "unit": "ns",
            "range": "± 85985.41389623884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6707670.25,
            "unit": "ns",
            "range": "± 236344.83382036706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2866934.0098039214,
            "unit": "ns",
            "range": "± 116343.94085148956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2980956.2282608696,
            "unit": "ns",
            "range": "± 167852.71278602755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3554343.9565217393,
            "unit": "ns",
            "range": "± 88974.95991236587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3534930.43902439,
            "unit": "ns",
            "range": "± 115229.06021248476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14273821.414141415,
            "unit": "ns",
            "range": "± 2378010.292741783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4416363.110850695,
            "unit": "ns",
            "range": "± 166316.89461164313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1327381.3546316964,
            "unit": "ns",
            "range": "± 11176.588919344742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883029.0793108259,
            "unit": "ns",
            "range": "± 9867.480223203454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1992736.0091145833,
            "unit": "ns",
            "range": "± 30016.363059204148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 641634.1056189904,
            "unit": "ns",
            "range": "± 5797.460959604349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562365.3544224331,
            "unit": "ns",
            "range": "± 6283.336254290878"
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
        "date": 1701754197785,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8313449.18,
            "unit": "ns",
            "range": "± 212114.45619832232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20198750.84375,
            "unit": "ns",
            "range": "± 572367.7550558314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49909552.461538464,
            "unit": "ns",
            "range": "± 524918.6046810203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99810938.6,
            "unit": "ns",
            "range": "± 1162626.9452250795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209826467.42857143,
            "unit": "ns",
            "range": "± 3119007.9882280547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65563.35483870968,
            "unit": "ns",
            "range": "± 8356.016731835864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318977.65555555554,
            "unit": "ns",
            "range": "± 21727.437562097755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338721.0752688172,
            "unit": "ns",
            "range": "± 42443.02163008778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317819.9090909091,
            "unit": "ns",
            "range": "± 28933.2740917754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4279722.872340426,
            "unit": "ns",
            "range": "± 243377.48514081453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833392.730769231,
            "unit": "ns",
            "range": "± 179061.77853753165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20041.217391304348,
            "unit": "ns",
            "range": "± 3338.6170685245816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94032.11458333333,
            "unit": "ns",
            "range": "± 12383.498554948703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112047.43617021276,
            "unit": "ns",
            "range": "± 17918.073653067233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120344.4052631579,
            "unit": "ns",
            "range": "± 18983.743848117247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8524.505376344086,
            "unit": "ns",
            "range": "± 1620.325971120679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24271.035294117646,
            "unit": "ns",
            "range": "± 3578.496420242988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381666.581632653,
            "unit": "ns",
            "range": "± 145942.43463656452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2679566.2151898732,
            "unit": "ns",
            "range": "± 133147.75438025378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2140219.326530612,
            "unit": "ns",
            "range": "± 208384.56713845173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10348552.765306123,
            "unit": "ns",
            "range": "± 1551522.7280407068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3054085.870967742,
            "unit": "ns",
            "range": "± 86032.60904863998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3429995.762886598,
            "unit": "ns",
            "range": "± 264943.8095040851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4459745.201030928,
            "unit": "ns",
            "range": "± 274053.09245747153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4248130.510416667,
            "unit": "ns",
            "range": "± 337151.87053320935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19213415.181818184,
            "unit": "ns",
            "range": "± 3511714.052824566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5540072.300967262,
            "unit": "ns",
            "range": "± 95023.87006651673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847503.7600260417,
            "unit": "ns",
            "range": "± 53693.59336006879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157903.3763020833,
            "unit": "ns",
            "range": "± 17375.894615370096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2732797.209753788,
            "unit": "ns",
            "range": "± 200996.2663689985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825754.762890625,
            "unit": "ns",
            "range": "± 14092.292854026904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778408.8933454241,
            "unit": "ns",
            "range": "± 9193.588807365286"
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
        "date": 1702003887373,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8810187.82022472,
            "unit": "ns",
            "range": "± 709584.723117805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24187618.85106383,
            "unit": "ns",
            "range": "± 2987102.68401731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50023261.28888889,
            "unit": "ns",
            "range": "± 3837341.4032966676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103438623.33333333,
            "unit": "ns",
            "range": "± 9300278.996877875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243923612.1352941,
            "unit": "ns",
            "range": "± 31108646.6953017"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49433.28723404255,
            "unit": "ns",
            "range": "± 9056.872491385291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284714.8734939759,
            "unit": "ns",
            "range": "± 42247.41268761704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358691.08510638296,
            "unit": "ns",
            "range": "± 90232.17286148276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341956.9784946237,
            "unit": "ns",
            "range": "± 77254.02184267883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5641240.604166667,
            "unit": "ns",
            "range": "± 1228099.332367194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5124619.173469388,
            "unit": "ns",
            "range": "± 1261349.163186645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21058.59793814433,
            "unit": "ns",
            "range": "± 6833.069022316817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79665.31914893616,
            "unit": "ns",
            "range": "± 21104.36849555024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78386.1559139785,
            "unit": "ns",
            "range": "± 19164.223958864997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110767.63917525773,
            "unit": "ns",
            "range": "± 23398.858052257583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7733.395833333333,
            "unit": "ns",
            "range": "± 1474.332416127928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17482.785714285714,
            "unit": "ns",
            "range": "± 4904.894260974462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672828.0360824743,
            "unit": "ns",
            "range": "± 445487.7812896514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2903735.186813187,
            "unit": "ns",
            "range": "± 523748.27319146605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1811076.8595505618,
            "unit": "ns",
            "range": "± 259932.48067803576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7879935.261363637,
            "unit": "ns",
            "range": "± 884403.8413837434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4215974.597826087,
            "unit": "ns",
            "range": "± 954323.1027514444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4491265.9,
            "unit": "ns",
            "range": "± 1227078.3964366415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5533126.164948453,
            "unit": "ns",
            "range": "± 1292779.6414449988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3879770.8295454546,
            "unit": "ns",
            "range": "± 284687.03461872844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25861841.25,
            "unit": "ns",
            "range": "± 10775664.620837376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5203975.015302835,
            "unit": "ns",
            "range": "± 418507.72025401116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2088471.1964962122,
            "unit": "ns",
            "range": "± 513469.13172334904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 980566.6806640625,
            "unit": "ns",
            "range": "± 10926.791990981172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2479636.5091441763,
            "unit": "ns",
            "range": "± 224944.38892932926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 710232.913671875,
            "unit": "ns",
            "range": "± 11936.076233540369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574646.3033621652,
            "unit": "ns",
            "range": "± 4997.385782233887"
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
        "date": 1702005550222,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9834500.302325582,
            "unit": "ns",
            "range": "± 1373133.600125107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20093449.375,
            "unit": "ns",
            "range": "± 520095.30545959953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52099891.43939394,
            "unit": "ns",
            "range": "± 1623583.4419738015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104091970.5,
            "unit": "ns",
            "range": "± 1857589.6762190822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203913357.16666666,
            "unit": "ns",
            "range": "± 2706886.687388579"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65424.38888888889,
            "unit": "ns",
            "range": "± 9405.937778805024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322306.72826086957,
            "unit": "ns",
            "range": "± 34506.82143236185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308106.40425531915,
            "unit": "ns",
            "range": "± 32318.952314981474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287440.7727272727,
            "unit": "ns",
            "range": "± 12107.636475251269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039787.5,
            "unit": "ns",
            "range": "± 75002.34170944264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3652325.923076923,
            "unit": "ns",
            "range": "± 54759.41621228496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21925.366666666665,
            "unit": "ns",
            "range": "± 3202.277508344559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108082.70430107527,
            "unit": "ns",
            "range": "± 20224.801204783817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105705.80526315789,
            "unit": "ns",
            "range": "± 22028.121542301757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126511.4797979798,
            "unit": "ns",
            "range": "± 27909.77050446371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7889.806451612903,
            "unit": "ns",
            "range": "± 1040.070871937858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23444.657303370786,
            "unit": "ns",
            "range": "± 2262.7980612249858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1460376.7959183673,
            "unit": "ns",
            "range": "± 194237.57870243522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2762598.7921348317,
            "unit": "ns",
            "range": "± 188149.61543121393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2207084.4895833335,
            "unit": "ns",
            "range": "± 201764.03123111778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9018954.58974359,
            "unit": "ns",
            "range": "± 307276.4801476555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3261438.5625,
            "unit": "ns",
            "range": "± 237519.6611366293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3435045.0306122447,
            "unit": "ns",
            "range": "± 259113.7346144339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4352549.489583333,
            "unit": "ns",
            "range": "± 291988.92773203773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4325787.8655913975,
            "unit": "ns",
            "range": "± 339692.60313006217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20155182.760416668,
            "unit": "ns",
            "range": "± 3624749.070616702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6340587.2776692705,
            "unit": "ns",
            "range": "± 162783.20980800246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1882694.689670139,
            "unit": "ns",
            "range": "± 37217.65204658267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176348.6645833333,
            "unit": "ns",
            "range": "± 15854.905551673208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3137055.594907407,
            "unit": "ns",
            "range": "± 86269.69926040541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921692.6574358259,
            "unit": "ns",
            "range": "± 15547.327734795175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796161.0075683594,
            "unit": "ns",
            "range": "± 13971.944250453633"
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
        "date": 1702005929250,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7634441,
            "unit": "ns",
            "range": "± 102747.10581082078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18925883.20588235,
            "unit": "ns",
            "range": "± 572902.4112658006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55934883.666666664,
            "unit": "ns",
            "range": "± 5523452.654487285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113656800.45744681,
            "unit": "ns",
            "range": "± 9786300.432123346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258501275.92307693,
            "unit": "ns",
            "range": "± 3155076.477137928"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53641.11111111111,
            "unit": "ns",
            "range": "± 12723.507837012825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275820.5224719101,
            "unit": "ns",
            "range": "± 22800.814500492146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249830.72340425532,
            "unit": "ns",
            "range": "± 22332.480184388678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243330.36263736265,
            "unit": "ns",
            "range": "± 14878.698815208929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4135051.5918367347,
            "unit": "ns",
            "range": "± 414320.0896897873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3497763.9677419355,
            "unit": "ns",
            "range": "± 216973.22062694098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12338.696629213484,
            "unit": "ns",
            "range": "± 772.477807926227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58601.36363636364,
            "unit": "ns",
            "range": "± 5584.788992982077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53789.69892473118,
            "unit": "ns",
            "range": "± 8421.578645754562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58456,
            "unit": "ns",
            "range": "± 11513.088334586859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3249.4444444444443,
            "unit": "ns",
            "range": "± 331.19342802438246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11814.964285714286,
            "unit": "ns",
            "range": "± 929.4627343862351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1250653.5568181819,
            "unit": "ns",
            "range": "± 104932.40449860472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2707917.3296703296,
            "unit": "ns",
            "range": "± 188377.95324040885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1720254.4948453608,
            "unit": "ns",
            "range": "± 185208.4307980878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8287061.578651685,
            "unit": "ns",
            "range": "± 1045610.6788586321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530031.3720930233,
            "unit": "ns",
            "range": "± 187934.68324926376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3634773.5555555555,
            "unit": "ns",
            "range": "± 109857.71044750686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4234356.09375,
            "unit": "ns",
            "range": "± 275585.7183770626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4205337.746268657,
            "unit": "ns",
            "range": "± 198953.05964894601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16690563.574468086,
            "unit": "ns",
            "range": "± 2962517.140092869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4291088.88362069,
            "unit": "ns",
            "range": "± 125102.78566416443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1305696.5206298828,
            "unit": "ns",
            "range": "± 16099.963141581075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863019.0358323317,
            "unit": "ns",
            "range": "± 12318.298230234059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934222.3481770833,
            "unit": "ns",
            "range": "± 30578.167527052203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624775.0618489584,
            "unit": "ns",
            "range": "± 10708.028513168749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561924.2903103299,
            "unit": "ns",
            "range": "± 11914.949294266105"
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
        "date": 1702023759935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7900553.74,
            "unit": "ns",
            "range": "± 189498.3340822288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20097607.842105262,
            "unit": "ns",
            "range": "± 439785.2371585304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49470176,
            "unit": "ns",
            "range": "± 732694.7876574529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97605045.07692307,
            "unit": "ns",
            "range": "± 1416318.4363764776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200198493.07692307,
            "unit": "ns",
            "range": "± 2054502.0538541474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40256.94736842105,
            "unit": "ns",
            "range": "± 8521.505054320947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 223213.8775510204,
            "unit": "ns",
            "range": "± 15754.253061836924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 219722.9347826087,
            "unit": "ns",
            "range": "± 14625.75000260011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214567.53191489363,
            "unit": "ns",
            "range": "± 17136.51168217672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3808561.8,
            "unit": "ns",
            "range": "± 87491.72398762249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3574543.8536585364,
            "unit": "ns",
            "range": "± 128719.75772168019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16734.47,
            "unit": "ns",
            "range": "± 3911.3936198746296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80762.92708333333,
            "unit": "ns",
            "range": "± 16714.916409095447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75430.21,
            "unit": "ns",
            "range": "± 22243.091780720493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85649.94318181818,
            "unit": "ns",
            "range": "± 14342.958073008891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5219.515151515152,
            "unit": "ns",
            "range": "± 1790.0413651795322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16035.632653061224,
            "unit": "ns",
            "range": "± 4081.6012508428053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046930.0842105263,
            "unit": "ns",
            "range": "± 88447.5637403872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2270539.230769231,
            "unit": "ns",
            "range": "± 140658.51500054047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557702.9270833333,
            "unit": "ns",
            "range": "± 112137.47137441285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6457810.233333333,
            "unit": "ns",
            "range": "± 115697.32778027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3036045.22,
            "unit": "ns",
            "range": "± 113519.61950020367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3115552.882352941,
            "unit": "ns",
            "range": "± 63073.707070460776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3689566.25,
            "unit": "ns",
            "range": "± 105264.13361762172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3543723.160714286,
            "unit": "ns",
            "range": "± 147392.73654476844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14630103.711340206,
            "unit": "ns",
            "range": "± 2622100.3647923563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4763361.815305898,
            "unit": "ns",
            "range": "± 231747.28061457092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533596.241437089,
            "unit": "ns",
            "range": "± 100032.97588105555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 917513.3034855769,
            "unit": "ns",
            "range": "± 24200.878149733886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2096543.0817307692,
            "unit": "ns",
            "range": "± 34134.39917561412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 704423.230625898,
            "unit": "ns",
            "range": "± 85343.41732218885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568088.8680889423,
            "unit": "ns",
            "range": "± 1883.418803354038"
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
        "date": 1702520486423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 15052635.338709677,
            "unit": "ns",
            "range": "± 2384102.4869797863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32415264.114583332,
            "unit": "ns",
            "range": "± 6308734.015935568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 88263747.96,
            "unit": "ns",
            "range": "± 9484291.419275645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 158067841.62244898,
            "unit": "ns",
            "range": "± 23670479.521885004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 329903364.9285714,
            "unit": "ns",
            "range": "± 57216741.86782162"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 89224.08333333333,
            "unit": "ns",
            "range": "± 29125.667776457267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286670.45360824745,
            "unit": "ns",
            "range": "± 25226.874381971364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286512.5051546392,
            "unit": "ns",
            "range": "± 28416.356364675677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 360658.1595744681,
            "unit": "ns",
            "range": "± 122553.86484592473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5084027.8678160915,
            "unit": "ns",
            "range": "± 632618.4418400392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4384748.285714285,
            "unit": "ns",
            "range": "± 67356.47455507904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27122.489583333332,
            "unit": "ns",
            "range": "± 3556.208464361394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105968.66304347826,
            "unit": "ns",
            "range": "± 9046.95996451285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102233.6,
            "unit": "ns",
            "range": "± 6618.363358570411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108029.81521739131,
            "unit": "ns",
            "range": "± 16270.611371919298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8213.25,
            "unit": "ns",
            "range": "± 1128.0522416493438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26262.054945054944,
            "unit": "ns",
            "range": "± 7592.555434784839"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1434034.7472527472,
            "unit": "ns",
            "range": "± 118903.49831220214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3877742.1979166665,
            "unit": "ns",
            "range": "± 898046.193048549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2692728.7083333335,
            "unit": "ns",
            "range": "± 686156.6841700672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11758930.96875,
            "unit": "ns",
            "range": "± 2442135.7697212985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3846174.7527472526,
            "unit": "ns",
            "range": "± 210634.71691066364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3805884.4183673467,
            "unit": "ns",
            "range": "± 334399.17948491446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4914927.873626374,
            "unit": "ns",
            "range": "± 334444.917901809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4681229.115789474,
            "unit": "ns",
            "range": "± 270627.72097079817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15477211.237113401,
            "unit": "ns",
            "range": "± 2522211.585078505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7560689.253671875,
            "unit": "ns",
            "range": "± 1180517.3185401666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1943956.022649397,
            "unit": "ns",
            "range": "± 78941.37547622572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210039.2273284313,
            "unit": "ns",
            "range": "± 47208.06281413777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675282.4669724368,
            "unit": "ns",
            "range": "± 233004.34283953736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 711821.6259321733,
            "unit": "ns",
            "range": "± 26728.442683391197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781162.083203125,
            "unit": "ns",
            "range": "± 15539.914288141608"
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
        "date": 1702544448938,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10287450.215789475,
            "unit": "ns",
            "range": "± 1244794.5904200645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26597563.68,
            "unit": "ns",
            "range": "± 1033823.875942549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67377452.38461539,
            "unit": "ns",
            "range": "± 899176.0108254241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135512968.42857143,
            "unit": "ns",
            "range": "± 2282633.039653666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 264513650.86666667,
            "unit": "ns",
            "range": "± 19247769.51798939"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62335.34523809524,
            "unit": "ns",
            "range": "± 10415.078053249445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311449.75,
            "unit": "ns",
            "range": "± 13729.104922803353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274119.6382978723,
            "unit": "ns",
            "range": "± 36395.51705433941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 271983.1649484536,
            "unit": "ns",
            "range": "± 27108.95937911195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5178331.307692308,
            "unit": "ns",
            "range": "± 85469.94625732936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4732196.5,
            "unit": "ns",
            "range": "± 50854.755193918034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18159.459595959597,
            "unit": "ns",
            "range": "± 4298.647582573754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68022.88541666667,
            "unit": "ns",
            "range": "± 14429.908762792711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65045.13265306123,
            "unit": "ns",
            "range": "± 17519.311718955545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78261.38775510204,
            "unit": "ns",
            "range": "± 16311.524051546456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7875.505494505494,
            "unit": "ns",
            "range": "± 1263.3647434408938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19579.683673469386,
            "unit": "ns",
            "range": "± 4341.862086511662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1286223.4842105263,
            "unit": "ns",
            "range": "± 158755.12490751705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2681724.3958333335,
            "unit": "ns",
            "range": "± 261902.16924121155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1802844.8111111112,
            "unit": "ns",
            "range": "± 165766.79754645264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9392614.735955056,
            "unit": "ns",
            "range": "± 1646004.4391664225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105507.610526316,
            "unit": "ns",
            "range": "± 264658.7412581066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3750717.9789473685,
            "unit": "ns",
            "range": "± 490548.97793394915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4733926.162790698,
            "unit": "ns",
            "range": "± 253809.82993894833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4008879.63,
            "unit": "ns",
            "range": "± 332956.17036476865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19260668.170212764,
            "unit": "ns",
            "range": "± 3459902.52896999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4524529.961567541,
            "unit": "ns",
            "range": "± 115960.84330715249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1433821.2525592672,
            "unit": "ns",
            "range": "± 61764.88070961385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 913050.4103190104,
            "unit": "ns",
            "range": "± 27489.208908012606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2075691.0001627605,
            "unit": "ns",
            "range": "± 52589.484881276905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642272.706624349,
            "unit": "ns",
            "range": "± 18341.622078323646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720792.7583618164,
            "unit": "ns",
            "range": "± 32928.58000053041"
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
        "date": 1702612620832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10392316.961538462,
            "unit": "ns",
            "range": "± 67379.21313310135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25121134.5,
            "unit": "ns",
            "range": "± 494715.0189216262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63839808.769662924,
            "unit": "ns",
            "range": "± 3443009.397878131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112384928.95918368,
            "unit": "ns",
            "range": "± 14350499.74114694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248632988.01075268,
            "unit": "ns",
            "range": "± 25276659.025292203"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59099.10227272727,
            "unit": "ns",
            "range": "± 10960.19890020016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266086.0257731959,
            "unit": "ns",
            "range": "± 28253.57697085037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298215.0961538461,
            "unit": "ns",
            "range": "± 10034.97247817013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274631.13402061857,
            "unit": "ns",
            "range": "± 23372.29544675921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4992973.269230769,
            "unit": "ns",
            "range": "± 70334.32238027398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4056821.680412371,
            "unit": "ns",
            "range": "± 442061.8995932948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22006.063829787236,
            "unit": "ns",
            "range": "± 3379.6288363000403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94042.38144329897,
            "unit": "ns",
            "range": "± 18926.053298211315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75857.39795918367,
            "unit": "ns",
            "range": "± 21099.690457244677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80900.03608247422,
            "unit": "ns",
            "range": "± 21391.028967605915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6497.739130434783,
            "unit": "ns",
            "range": "± 2042.7987581658822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17196.67,
            "unit": "ns",
            "range": "± 3171.2550651090487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1313768.7921348314,
            "unit": "ns",
            "range": "± 155010.43005473728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2739754.063218391,
            "unit": "ns",
            "range": "± 173679.9302426336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1927736.465116279,
            "unit": "ns",
            "range": "± 150459.00033512726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9507068.56521739,
            "unit": "ns",
            "range": "± 1715692.9924226806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783524.836956522,
            "unit": "ns",
            "range": "± 212276.9805469683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3359508.673469388,
            "unit": "ns",
            "range": "± 288999.3722501931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4705769.3,
            "unit": "ns",
            "range": "± 87845.75458658041"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4670708.8367346935,
            "unit": "ns",
            "range": "± 185361.89937202877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17303347.81,
            "unit": "ns",
            "range": "± 3395166.4021636317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5992317.406922043,
            "unit": "ns",
            "range": "± 526359.4037029628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1663769.5361938477,
            "unit": "ns",
            "range": "± 50654.76496581746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1077052.212890625,
            "unit": "ns",
            "range": "± 56837.76040554746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2019189.56171875,
            "unit": "ns",
            "range": "± 36997.7714873138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643759.5128348215,
            "unit": "ns",
            "range": "± 18046.46427264657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581746.0852355957,
            "unit": "ns",
            "range": "± 16643.70217980483"
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
        "date": 1702615377044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10403151.327586208,
            "unit": "ns",
            "range": "± 289523.96652671444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26930924.785714287,
            "unit": "ns",
            "range": "± 421900.9340982656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67789920.73684211,
            "unit": "ns",
            "range": "± 1429882.7920877852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135314105.9375,
            "unit": "ns",
            "range": "± 2518364.265072415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266392900.86885247,
            "unit": "ns",
            "range": "± 11794770.559543783"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57816.51648351648,
            "unit": "ns",
            "range": "± 10527.214497421684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307755.9375,
            "unit": "ns",
            "range": "± 19119.854590292976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310770.6388888889,
            "unit": "ns",
            "range": "± 15278.11439521893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279922.6529411765,
            "unit": "ns",
            "range": "± 41139.06530482799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5851409.269230769,
            "unit": "ns",
            "range": "± 886514.7466466781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4630383.032967033,
            "unit": "ns",
            "range": "± 401802.88780217286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18245.586021505376,
            "unit": "ns",
            "range": "± 3519.2042074010756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109484.72222222222,
            "unit": "ns",
            "range": "± 12468.24842926554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84805.44210526315,
            "unit": "ns",
            "range": "± 9954.60637489295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85962.78865979382,
            "unit": "ns",
            "range": "± 20214.68483396763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7181.21875,
            "unit": "ns",
            "range": "± 1753.5107863827145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20117.878787878788,
            "unit": "ns",
            "range": "± 4151.991851159691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1407543.680851064,
            "unit": "ns",
            "range": "± 125561.690840456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2983263.6720430106,
            "unit": "ns",
            "range": "± 263781.5755772033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1951424.9857142856,
            "unit": "ns",
            "range": "± 93806.28033755474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8540715.333333334,
            "unit": "ns",
            "range": "± 642101.9393921641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3906355.1627906975,
            "unit": "ns",
            "range": "± 135046.80233109492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4208399.488636363,
            "unit": "ns",
            "range": "± 439302.98666385305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4046364.963917526,
            "unit": "ns",
            "range": "± 568351.3407209977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4332705.206521739,
            "unit": "ns",
            "range": "± 442804.3204214497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18125496.944444444,
            "unit": "ns",
            "range": "± 3799036.0523639848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5659679.156750801,
            "unit": "ns",
            "range": "± 195088.9781974849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1730551.7169074293,
            "unit": "ns",
            "range": "± 70933.8794820239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068646.5306054687,
            "unit": "ns",
            "range": "± 131895.93326515102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2568500.191929768,
            "unit": "ns",
            "range": "± 324256.73399258824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 688950.924609375,
            "unit": "ns",
            "range": "± 67374.80588053512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 592081.2718877378,
            "unit": "ns",
            "range": "± 33111.91337842597"
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
        "date": 1702617421329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7759674.130434782,
            "unit": "ns",
            "range": "± 194815.95476787465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18997967,
            "unit": "ns",
            "range": "± 503441.37278423493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47339243.3,
            "unit": "ns",
            "range": "± 1315852.6987891868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93527896.78947368,
            "unit": "ns",
            "range": "± 1992296.2015541424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191158950.26086956,
            "unit": "ns",
            "range": "± 4773141.75167227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35314.683908045976,
            "unit": "ns",
            "range": "± 2757.216284625338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214408.05681818182,
            "unit": "ns",
            "range": "± 11439.376311627895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216395.1326530612,
            "unit": "ns",
            "range": "± 20259.11404909866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185776.2027027027,
            "unit": "ns",
            "range": "± 8117.940733093584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3679352.2666666666,
            "unit": "ns",
            "range": "± 58719.743436169105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3448954.4285714286,
            "unit": "ns",
            "range": "± 38614.987990345224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12079.666666666666,
            "unit": "ns",
            "range": "± 1147.1556715770798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57004.75903614458,
            "unit": "ns",
            "range": "± 3045.2588323264863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51003.70238095238,
            "unit": "ns",
            "range": "± 3671.279822740529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62470.93434343435,
            "unit": "ns",
            "range": "± 13995.830255984056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3106,
            "unit": "ns",
            "range": "± 271.3785793560968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12162.303370786516,
            "unit": "ns",
            "range": "± 1073.4661721868174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1053417.313131313,
            "unit": "ns",
            "range": "± 93977.81613184651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2229117.2282608696,
            "unit": "ns",
            "range": "± 124771.57903436001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1491270.4042553192,
            "unit": "ns",
            "range": "± 94736.61541245779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6971092.195652174,
            "unit": "ns",
            "range": "± 422482.4822149692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2882245.407407407,
            "unit": "ns",
            "range": "± 144641.25607125185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2987984.602040816,
            "unit": "ns",
            "range": "± 110821.8272179577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3545525.4827586208,
            "unit": "ns",
            "range": "± 103393.22145424812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3456084.184615385,
            "unit": "ns",
            "range": "± 155652.50235810663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14076696.153061224,
            "unit": "ns",
            "range": "± 2408372.7162691313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4326239.458533654,
            "unit": "ns",
            "range": "± 44683.008405390785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1328429.2280970982,
            "unit": "ns",
            "range": "± 16518.374385454725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 879342.3142700195,
            "unit": "ns",
            "range": "± 17108.043419335452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1993771.5140625,
            "unit": "ns",
            "range": "± 29321.21965245739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 707653.4164988725,
            "unit": "ns",
            "range": "± 51205.498155492016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561026.8695591518,
            "unit": "ns",
            "range": "± 6375.335443687179"
          }
        ]
      }
    ]
  }
}