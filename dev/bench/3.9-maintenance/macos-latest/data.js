window.BENCHMARK_DATA = {
  "lastUpdate": 1701752697227,
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
      }
    ]
  }
}