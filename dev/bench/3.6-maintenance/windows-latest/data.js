window.BENCHMARK_DATA = {
  "lastUpdate": 1700490941533,
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
          "id": "b13ef3155389100c218a045fbdc3051e23e3c669",
          "message": "Merge pull request #3451 from greymistcube/release/3.6.0\n\n🚀 Release 3.6.0",
          "timestamp": "2023-10-06T18:26:22+09:00",
          "tree_id": "45b24eea1bbbdcc0b75e430f611660d011258ba1",
          "url": "https://github.com/planetarium/libplanet/commit/b13ef3155389100c218a045fbdc3051e23e3c669"
        },
        "date": 1696598069868,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1679370,
            "unit": "ns",
            "range": "± 137668.97752848087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249586.3157894737,
            "unit": "ns",
            "range": "± 211153.81436618327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2567938.144329897,
            "unit": "ns",
            "range": "± 206918.49816780668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11359386.666666666,
            "unit": "ns",
            "range": "± 763821.4479278561"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69006.3829787234,
            "unit": "ns",
            "range": "± 9118.429978406646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9832538.461538462,
            "unit": "ns",
            "range": "± 507487.92045780696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26207286.046511628,
            "unit": "ns",
            "range": "± 961740.3445196914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65262426.47058824,
            "unit": "ns",
            "range": "± 1948851.7855407442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130390986.66666667,
            "unit": "ns",
            "range": "± 1551453.9046910007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265845140,
            "unit": "ns",
            "range": "± 3675661.290901077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5739920.833333333,
            "unit": "ns",
            "range": "± 133616.55131795802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1785746.0677083333,
            "unit": "ns",
            "range": "± 20835.064523405552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1265085.7552083333,
            "unit": "ns",
            "range": "± 8032.809184751398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3251465.652901786,
            "unit": "ns",
            "range": "± 25065.999681502024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1051968.7622070312,
            "unit": "ns",
            "range": "± 20537.56012015618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968605.859375,
            "unit": "ns",
            "range": "± 19531.849065490995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4152904.6511627906,
            "unit": "ns",
            "range": "± 151697.85909511737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4261366.666666667,
            "unit": "ns",
            "range": "± 147317.41479456658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5289492.5,
            "unit": "ns",
            "range": "± 187464.14958120693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5179469.696969697,
            "unit": "ns",
            "range": "± 238158.42882720995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13957612.5,
            "unit": "ns",
            "range": "± 872945.7483126465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326842.22222222225,
            "unit": "ns",
            "range": "± 23472.49036627785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317709.8901098901,
            "unit": "ns",
            "range": "± 22872.95858502425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294193.8775510204,
            "unit": "ns",
            "range": "± 28110.87332763932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4992816.666666667,
            "unit": "ns",
            "range": "± 148980.5682384239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4598150,
            "unit": "ns",
            "range": "± 156811.5959411855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32522.916666666668,
            "unit": "ns",
            "range": "± 4649.809937636199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116773.91304347826,
            "unit": "ns",
            "range": "± 13246.147020679424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130787.01298701299,
            "unit": "ns",
            "range": "± 6701.793763207426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127546.73913043478,
            "unit": "ns",
            "range": "± 11612.464420148775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10834.736842105263,
            "unit": "ns",
            "range": "± 1130.7847417341893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29637.63440860215,
            "unit": "ns",
            "range": "± 2421.4581475925434"
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
          "id": "9e8b368b41ed36df78caf7ddb972fdd3405cb944",
          "message": "Merge pull request #3453 from greymistcube/prepare/3.6.1\n\n🔧 Prepare 3.6.1",
          "timestamp": "2023-10-10T14:52:08+09:00",
          "tree_id": "3755ab0ad6784245232eca019359e9709e05e21e",
          "url": "https://github.com/planetarium/libplanet/commit/9e8b368b41ed36df78caf7ddb972fdd3405cb944"
        },
        "date": 1696918130628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1317424.4897959183,
            "unit": "ns",
            "range": "± 90981.53552473182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571424.074074074,
            "unit": "ns",
            "range": "± 101890.82010085402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1993829.4736842106,
            "unit": "ns",
            "range": "± 122318.97512345319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8698942.696629213,
            "unit": "ns",
            "range": "± 561540.8899722508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51888.42105263158,
            "unit": "ns",
            "range": "± 3978.18153576065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7923600,
            "unit": "ns",
            "range": "± 116235.40437736356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21278186.666666668,
            "unit": "ns",
            "range": "± 236197.22348273356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53555950,
            "unit": "ns",
            "range": "± 278927.8366834746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106855113.33333333,
            "unit": "ns",
            "range": "± 764274.6438539587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212023328.57142857,
            "unit": "ns",
            "range": "± 1693645.176911246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4517852.1875,
            "unit": "ns",
            "range": "± 15329.021017048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1425492.4869791667,
            "unit": "ns",
            "range": "± 5010.578439171803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078381.796875,
            "unit": "ns",
            "range": "± 3175.777686085408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679130.1302083335,
            "unit": "ns",
            "range": "± 6169.772542317511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842279.6349158654,
            "unit": "ns",
            "range": "± 966.9913472464235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776817.7669270834,
            "unit": "ns",
            "range": "± 1796.8564294712367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3369206.25,
            "unit": "ns",
            "range": "± 63015.12483787788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3497015.5555555555,
            "unit": "ns",
            "range": "± 126183.80164656554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4307905.555555556,
            "unit": "ns",
            "range": "± 88896.11565802505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4302331.25,
            "unit": "ns",
            "range": "± 78814.2433722061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10243164.864864865,
            "unit": "ns",
            "range": "± 276624.22688169935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264174.358974359,
            "unit": "ns",
            "range": "± 9004.961145733352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251997.56097560975,
            "unit": "ns",
            "range": "± 7621.925209711719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228046.34146341463,
            "unit": "ns",
            "range": "± 12106.892181799438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4201233.333333333,
            "unit": "ns",
            "range": "± 53798.29613163103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3871333.3333333335,
            "unit": "ns",
            "range": "± 66064.28326871883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21234.042553191488,
            "unit": "ns",
            "range": "± 1551.5897633938812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88877.65957446808,
            "unit": "ns",
            "range": "± 5734.8801537162035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75809.67741935483,
            "unit": "ns",
            "range": "± 5515.887419558655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80906.09756097561,
            "unit": "ns",
            "range": "± 4501.01079350004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5858.163265306122,
            "unit": "ns",
            "range": "± 859.0240769746896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21381.91489361702,
            "unit": "ns",
            "range": "± 1767.4605296474988"
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
          "id": "7f06d408370bd41f1c8166ba076a4ee031adc442",
          "message": "Merge pull request #3495 from greymistcube/refactor/hash-node-caching\n\n✨ ♻️ `HashNode` caching",
          "timestamp": "2023-11-20T17:12:44+09:00",
          "tree_id": "3b29e4f3c11f13950463ba44b5d3b76ea6a30ea0",
          "url": "https://github.com/planetarium/libplanet/commit/7f06d408370bd41f1c8166ba076a4ee031adc442"
        },
        "date": 1700468790766,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982469.7916666666,
            "unit": "ns",
            "range": "± 112260.4154068769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719477.049180328,
            "unit": "ns",
            "range": "± 68413.19413057354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1377694,
            "unit": "ns",
            "range": "± 123929.62757104934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4972191.935483871,
            "unit": "ns",
            "range": "± 225269.83550035374"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34267.045454545456,
            "unit": "ns",
            "range": "± 1923.4022532468848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5059235.714285715,
            "unit": "ns",
            "range": "± 36681.573809514455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13995340,
            "unit": "ns",
            "range": "± 206577.60492643644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33638700,
            "unit": "ns",
            "range": "± 672923.8515612298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66594980,
            "unit": "ns",
            "range": "± 861151.4577255602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134991920,
            "unit": "ns",
            "range": "± 1547076.934646201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3238703.7369791665,
            "unit": "ns",
            "range": "± 21412.139530421806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1004727.2739955357,
            "unit": "ns",
            "range": "± 2683.502239150574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 703574.9739583334,
            "unit": "ns",
            "range": "± 1077.2959397317802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952550.2103365385,
            "unit": "ns",
            "range": "± 4260.135123225824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604623.3189174107,
            "unit": "ns",
            "range": "± 1319.4949203800466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581289.0925480769,
            "unit": "ns",
            "range": "± 597.8547639752854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158939.6226415094,
            "unit": "ns",
            "range": "± 88422.93110957535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2263075,
            "unit": "ns",
            "range": "± 107618.1627034302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2868994.285714286,
            "unit": "ns",
            "range": "± 92125.82489967391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2701800,
            "unit": "ns",
            "range": "± 116808.1261442599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5951741.666666667,
            "unit": "ns",
            "range": "± 233418.18452136123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182069.01408450704,
            "unit": "ns",
            "range": "± 8524.34482692777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 172781.57894736843,
            "unit": "ns",
            "range": "± 8792.128457149473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143047.0588235294,
            "unit": "ns",
            "range": "± 5851.063251791984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2849471.4285714286,
            "unit": "ns",
            "range": "± 28532.907548772753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2512064.285714286,
            "unit": "ns",
            "range": "± 31630.647434772138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12317.777777777777,
            "unit": "ns",
            "range": "± 1491.2914076135398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59317.02127659575,
            "unit": "ns",
            "range": "± 6914.8062785959655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48258.241758241755,
            "unit": "ns",
            "range": "± 3909.5628040333763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66850.50505050505,
            "unit": "ns",
            "range": "± 14899.208126727597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2851.5789473684213,
            "unit": "ns",
            "range": "± 534.1254848765645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11815.384615384615,
            "unit": "ns",
            "range": "± 1461.5762478246315"
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
          "id": "06bc830559704f01344052cc9295020489b5a181",
          "message": "Merge pull request #3498 from greymistcube/chore/yarn-build-fix-workaround\n\n🐛 Temporary workaround to `yarn build` fail",
          "timestamp": "2023-11-20T17:54:39+09:00",
          "tree_id": "df46edf8e34f5eb1938dcefa05ebda9b68e761dd",
          "url": "https://github.com/planetarium/libplanet/commit/06bc830559704f01344052cc9295020489b5a181"
        },
        "date": 1700471198834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995025,
            "unit": "ns",
            "range": "± 35358.310596027186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1662713.7931034483,
            "unit": "ns",
            "range": "± 64687.533570194486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1323183.5051546392,
            "unit": "ns",
            "range": "± 118449.83966537303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101847.916666667,
            "unit": "ns",
            "range": "± 294281.2943531076"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34245.16129032258,
            "unit": "ns",
            "range": "± 1548.921086090577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5366561.538461538,
            "unit": "ns",
            "range": "± 20905.84202487981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13288236.666666666,
            "unit": "ns",
            "range": "± 196126.39826203432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32968771.42857143,
            "unit": "ns",
            "range": "± 157998.86284192256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64412153.333333336,
            "unit": "ns",
            "range": "± 304625.2378313549"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126741730.76923077,
            "unit": "ns",
            "range": "± 576538.9541401567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3126104.5833333335,
            "unit": "ns",
            "range": "± 3942.699401680257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1025177.5130208334,
            "unit": "ns",
            "range": "± 4437.904906110185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 690289.1741071428,
            "unit": "ns",
            "range": "± 1142.8330190963054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2033670.2845982143,
            "unit": "ns",
            "range": "± 1991.265697277775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621512.7232142857,
            "unit": "ns",
            "range": "± 1601.782247869124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553309.4275841346,
            "unit": "ns",
            "range": "± 1231.0279081850776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2260393.3333333335,
            "unit": "ns",
            "range": "± 26172.43551816263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2216975.2808988765,
            "unit": "ns",
            "range": "± 121749.83692438104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2715907.8947368423,
            "unit": "ns",
            "range": "± 93160.30178075054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2559000,
            "unit": "ns",
            "range": "± 123574.89162681758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6135498.850574712,
            "unit": "ns",
            "range": "± 333437.1944955782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168866.66666666666,
            "unit": "ns",
            "range": "± 7418.531380478029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158707.01754385966,
            "unit": "ns",
            "range": "± 6792.087298812252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137996.15384615384,
            "unit": "ns",
            "range": "± 3134.897863628832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2698906.6666666665,
            "unit": "ns",
            "range": "± 47969.29772062047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2396086.6666666665,
            "unit": "ns",
            "range": "± 29355.04012861132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9122.727272727272,
            "unit": "ns",
            "range": "± 791.8735636809986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49839.56043956044,
            "unit": "ns",
            "range": "± 4078.2043739556398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43464.705882352944,
            "unit": "ns",
            "range": "± 1679.026328490624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52261.22448979592,
            "unit": "ns",
            "range": "± 8373.493188382545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2278.6516853932585,
            "unit": "ns",
            "range": "± 263.05543406128805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10563.265306122448,
            "unit": "ns",
            "range": "± 1595.443754648795"
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
          "id": "83f829b962629a185c33bb1dabd673e5aa53ecc7",
          "message": "Merge pull request #3497 from greymistcube/release/3.6.1\n\n🚀 Release 3.6.1",
          "timestamp": "2023-11-20T18:45:56+09:00",
          "tree_id": "0f121f06ff347e4e00129374b3f23d10cb7186fd",
          "url": "https://github.com/planetarium/libplanet/commit/83f829b962629a185c33bb1dabd673e5aa53ecc7"
        },
        "date": 1700474295368,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013733.6734693878,
            "unit": "ns",
            "range": "± 133129.6522880056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1759525,
            "unit": "ns",
            "range": "± 78191.00139026676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1440482.105263158,
            "unit": "ns",
            "range": "± 139612.3691244511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4936161.111111111,
            "unit": "ns",
            "range": "± 160304.94026391036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35002.27272727273,
            "unit": "ns",
            "range": "± 2184.268586529189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5125164.705882353,
            "unit": "ns",
            "range": "± 98561.92178762845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13503886.666666666,
            "unit": "ns",
            "range": "± 188235.75213267107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34236592.85714286,
            "unit": "ns",
            "range": "± 451135.92436509335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 69132780,
            "unit": "ns",
            "range": "± 781392.137881395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137262393.33333334,
            "unit": "ns",
            "range": "± 1120173.0239225589"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3110769.8660714286,
            "unit": "ns",
            "range": "± 10957.045467237991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1006215.9244791666,
            "unit": "ns",
            "range": "± 4153.632954161044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 687116.1830357143,
            "unit": "ns",
            "range": "± 2194.885666016162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911695.1432291667,
            "unit": "ns",
            "range": "± 5058.5592361633435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640809.2708333334,
            "unit": "ns",
            "range": "± 2618.4261719997894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559831.4002403846,
            "unit": "ns",
            "range": "± 2114.991154654242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2296893.9393939395,
            "unit": "ns",
            "range": "± 70614.20244625873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2384820,
            "unit": "ns",
            "range": "± 62915.07357349764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2870879.5918367347,
            "unit": "ns",
            "range": "± 108382.29979181685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2715714.606741573,
            "unit": "ns",
            "range": "± 149684.7972715285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5951447.368421053,
            "unit": "ns",
            "range": "± 155119.4600454099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175411.23595505618,
            "unit": "ns",
            "range": "± 10120.51739382392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170637.5,
            "unit": "ns",
            "range": "± 9396.860719373803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146725.67567567568,
            "unit": "ns",
            "range": "± 7376.193858527466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2825900,
            "unit": "ns",
            "range": "± 35936.935502812885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2504920,
            "unit": "ns",
            "range": "± 43875.720588303244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12600,
            "unit": "ns",
            "range": "± 1729.961258943913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61567.36842105263,
            "unit": "ns",
            "range": "± 7881.4007031537885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47691.57894736842,
            "unit": "ns",
            "range": "± 4274.159445992257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63357.77777777778,
            "unit": "ns",
            "range": "± 10547.729696376146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2632.9896907216494,
            "unit": "ns",
            "range": "± 795.78599110729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12460.60606060606,
            "unit": "ns",
            "range": "± 2369.5266978448735"
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
          "id": "1da500876fda9bba8003f4a72e6ed4c21c53ada5",
          "message": "Merge pull request #3499 from greymistcube/prepare/3.6.2\n\n🔧 Prepare 3.6.2",
          "timestamp": "2023-11-20T18:57:08+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/planetarium/libplanet/commit/1da500876fda9bba8003f4a72e6ed4c21c53ada5"
        },
        "date": 1700475013885,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 920763.1578947369,
            "unit": "ns",
            "range": "± 95254.41973621653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1702588.3333333333,
            "unit": "ns",
            "range": "± 68962.9772737755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1265524.4680851065,
            "unit": "ns",
            "range": "± 101933.31542103777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5216894.897959184,
            "unit": "ns",
            "range": "± 318256.85288252716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33527.02702702703,
            "unit": "ns",
            "range": "± 1695.0611010361351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5263180,
            "unit": "ns",
            "range": "± 41281.42439402982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13049550,
            "unit": "ns",
            "range": "± 53239.1664674969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31970253.846153848,
            "unit": "ns",
            "range": "± 302383.0562255559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64832593.333333336,
            "unit": "ns",
            "range": "± 616033.7043964241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129586953.84615384,
            "unit": "ns",
            "range": "± 736767.1235600666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3089192.0833333335,
            "unit": "ns",
            "range": "± 8127.421605971041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1004891.9020432692,
            "unit": "ns",
            "range": "± 2612.345179076011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 698420.64453125,
            "unit": "ns",
            "range": "± 2402.8592240823655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932309.263392857,
            "unit": "ns",
            "range": "± 5320.93237795052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614377.5460379465,
            "unit": "ns",
            "range": "± 1891.7343163823973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571591.4137620192,
            "unit": "ns",
            "range": "± 884.6130243639892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183416.129032258,
            "unit": "ns",
            "range": "± 98681.41352318531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2213262.1621621624,
            "unit": "ns",
            "range": "± 75168.24961877688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731350,
            "unit": "ns",
            "range": "± 55069.42587921783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2519407.6923076925,
            "unit": "ns",
            "range": "± 134600.11658470205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6135051.578947368,
            "unit": "ns",
            "range": "± 384762.30403871764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167255.68181818182,
            "unit": "ns",
            "range": "± 9742.392941132879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 154990.76923076922,
            "unit": "ns",
            "range": "± 7060.956094010106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137912.5,
            "unit": "ns",
            "range": "± 3828.901130999303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2671390,
            "unit": "ns",
            "range": "± 31427.440239383162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2454113.3333333335,
            "unit": "ns",
            "range": "± 40072.64593686013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9181.645569620254,
            "unit": "ns",
            "range": "± 484.7797024918317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49787.6404494382,
            "unit": "ns",
            "range": "± 3279.19821910226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43696.07843137255,
            "unit": "ns",
            "range": "± 1779.2089010921372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44674.1935483871,
            "unit": "ns",
            "range": "± 5983.108527996464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2392.4242424242425,
            "unit": "ns",
            "range": "± 418.717894679312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9812.244897959185,
            "unit": "ns",
            "range": "± 1843.9796332552858"
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
          "id": "a979efb24353156624445e79f7bb50b6ee799f31",
          "message": "Merge pull request #3501 from greymistcube/fix/release\n\n🔧 Fix release",
          "timestamp": "2023-11-20T20:56:40+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/planetarium/libplanet/commit/a979efb24353156624445e79f7bb50b6ee799f31"
        },
        "date": 1700482158487,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 941798.9247311827,
            "unit": "ns",
            "range": "± 105925.27256701514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1687717.2839506173,
            "unit": "ns",
            "range": "± 88846.62597719097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1327189,
            "unit": "ns",
            "range": "± 136167.11056268285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5124123,
            "unit": "ns",
            "range": "± 304735.3426526306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34387.77777777778,
            "unit": "ns",
            "range": "± 2271.999949446994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4936878.571428572,
            "unit": "ns",
            "range": "± 27616.42288904943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13267813.333333334,
            "unit": "ns",
            "range": "± 124207.77446720167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32113578.57142857,
            "unit": "ns",
            "range": "± 272611.4089225271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65120614.28571428,
            "unit": "ns",
            "range": "± 461175.8530891741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128653386.66666667,
            "unit": "ns",
            "range": "± 1100433.2373249747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3113017.4609375,
            "unit": "ns",
            "range": "± 5598.549172610236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046850.9895833334,
            "unit": "ns",
            "range": "± 4141.260629874714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 682966.46484375,
            "unit": "ns",
            "range": "± 1326.0198954557043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929159.6153846155,
            "unit": "ns",
            "range": "± 3510.1004210249407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613286.3216145834,
            "unit": "ns",
            "range": "± 1779.2520192768204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 548628.8992745535,
            "unit": "ns",
            "range": "± 2222.6688644347973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2158265.0793650793,
            "unit": "ns",
            "range": "± 98865.73521493872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2203291.935483871,
            "unit": "ns",
            "range": "± 66989.42590286693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2756455.5555555555,
            "unit": "ns",
            "range": "± 58987.09950910226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2619667.2413793104,
            "unit": "ns",
            "range": "± 109908.81449882536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5986854.411764706,
            "unit": "ns",
            "range": "± 283828.2134608279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170664.89361702127,
            "unit": "ns",
            "range": "± 9864.672576539195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163935.38461538462,
            "unit": "ns",
            "range": "± 5774.091670157707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140676.19047619047,
            "unit": "ns",
            "range": "± 5116.201407380548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2722753.3333333335,
            "unit": "ns",
            "range": "± 47213.64613067265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488271.4285714286,
            "unit": "ns",
            "range": "± 31247.631998193167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10056.741573033707,
            "unit": "ns",
            "range": "± 1456.4743976785007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51993.75,
            "unit": "ns",
            "range": "± 4810.59822300282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44308.88888888889,
            "unit": "ns",
            "range": "± 1448.0115240347275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46511.49425287356,
            "unit": "ns",
            "range": "± 7396.6275358460725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2328.125,
            "unit": "ns",
            "range": "± 418.9468311951065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9080.232558139534,
            "unit": "ns",
            "range": "± 951.3853388230744"
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
          "id": "1a27f4c51533ea4fb42c312f89fa912ad45c8a5d",
          "message": "Merge pull request #3502 from greymistcube/revert/prepare/3.6.1\n\n⏪ Revert \"Prepare 3.6.2\"",
          "timestamp": "2023-11-20T21:07:48+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/planetarium/libplanet/commit/1a27f4c51533ea4fb42c312f89fa912ad45c8a5d"
        },
        "date": 1700482755694,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 945929.2929292929,
            "unit": "ns",
            "range": "± 115067.80898140304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1692438.6363636365,
            "unit": "ns",
            "range": "± 63182.94668330707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1309480.612244898,
            "unit": "ns",
            "range": "± 121203.84266148477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5005909.278350515,
            "unit": "ns",
            "range": "± 306822.5400110767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33338.181818181816,
            "unit": "ns",
            "range": "± 1292.9281881308414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4984314.285714285,
            "unit": "ns",
            "range": "± 31891.037012901317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13328906.666666666,
            "unit": "ns",
            "range": "± 102421.01114424483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32053300,
            "unit": "ns",
            "range": "± 205081.894950197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66575764.28571428,
            "unit": "ns",
            "range": "± 317791.10363484145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130651933.33333333,
            "unit": "ns",
            "range": "± 1523084.011690316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3135916.5865384615,
            "unit": "ns",
            "range": "± 4418.957398450854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1002976.5625,
            "unit": "ns",
            "range": "± 1952.5763829098753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 688703.6551339285,
            "unit": "ns",
            "range": "± 3019.304833992614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1937228.1850961538,
            "unit": "ns",
            "range": "± 4404.033436597038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609709.2494419643,
            "unit": "ns",
            "range": "± 722.1445962182943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564379.7433035715,
            "unit": "ns",
            "range": "± 1818.679928707358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2109519.0476190476,
            "unit": "ns",
            "range": "± 76776.21023212485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260707.594936709,
            "unit": "ns",
            "range": "± 117359.39953632231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2757822.222222222,
            "unit": "ns",
            "range": "± 57606.54124985497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2642376.595744681,
            "unit": "ns",
            "range": "± 100779.66541952874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5703848.484848484,
            "unit": "ns",
            "range": "± 179708.74547655598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171500,
            "unit": "ns",
            "range": "± 8017.188565825304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161779.45205479453,
            "unit": "ns",
            "range": "± 7547.220954764108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140944.11764705883,
            "unit": "ns",
            "range": "± 4461.090448056366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2726935.714285714,
            "unit": "ns",
            "range": "± 34106.408311519524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2478413.3333333335,
            "unit": "ns",
            "range": "± 31447.913096026547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11154.255319148937,
            "unit": "ns",
            "range": "± 2094.265847376482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53025.26315789474,
            "unit": "ns",
            "range": "± 4889.34944158485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43400,
            "unit": "ns",
            "range": "± 900"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53892.708333333336,
            "unit": "ns",
            "range": "± 11734.727990404037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2401.0309278350514,
            "unit": "ns",
            "range": "± 476.20348534021866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9620.430107526881,
            "unit": "ns",
            "range": "± 1253.7386819277551"
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
          "id": "1f66f7ca4ef89f57045b849e6a63e92a61deec7c",
          "message": "Merge pull request #3504 from greymistcube/prepare/3.6.2\n\n🔧 Prepare 3.6.2",
          "timestamp": "2023-11-20T23:22:43+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/planetarium/libplanet/commit/1f66f7ca4ef89f57045b849e6a63e92a61deec7c"
        },
        "date": 1700490885115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924340.8163265307,
            "unit": "ns",
            "range": "± 87737.52307894138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771809.4736842106,
            "unit": "ns",
            "range": "± 116286.92785582384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393199,
            "unit": "ns",
            "range": "± 173035.43894330732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5226836.842105263,
            "unit": "ns",
            "range": "± 326215.8563050166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34583.333333333336,
            "unit": "ns",
            "range": "± 1632.1371862903543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5133573.333333333,
            "unit": "ns",
            "range": "± 66468.49378966448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13907980,
            "unit": "ns",
            "range": "± 166199.05965008173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33085813.333333332,
            "unit": "ns",
            "range": "± 344513.50350202253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66298700,
            "unit": "ns",
            "range": "± 1042511.5244309909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129622338.46153846,
            "unit": "ns",
            "range": "± 1752018.7672788885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3206861.5234375,
            "unit": "ns",
            "range": "± 16965.36007697064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1025284.1517857143,
            "unit": "ns",
            "range": "± 3685.8763038074435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 698914.453125,
            "unit": "ns",
            "range": "± 3458.897266095756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1976309.9051339286,
            "unit": "ns",
            "range": "± 11110.437587808841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620033.7044270834,
            "unit": "ns",
            "range": "± 1730.4564086382131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558670.87890625,
            "unit": "ns",
            "range": "± 2158.06543135518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2072986.3636363635,
            "unit": "ns",
            "range": "± 17904.94200079822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253532.7586206896,
            "unit": "ns",
            "range": "± 65281.50071019637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2769580.85106383,
            "unit": "ns",
            "range": "± 107654.26875822732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2685258.3333333335,
            "unit": "ns",
            "range": "± 35877.37849786113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5935430,
            "unit": "ns",
            "range": "± 173843.4812281359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182874.1379310345,
            "unit": "ns",
            "range": "± 7966.565227530677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175276.13636363635,
            "unit": "ns",
            "range": "± 11187.081982873642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 152337,
            "unit": "ns",
            "range": "± 17745.226445896984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2674633.3333333335,
            "unit": "ns",
            "range": "± 37782.397009844724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431435.714285714,
            "unit": "ns",
            "range": "± 30477.447075169865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9701.111111111111,
            "unit": "ns",
            "range": "± 843.1474532755489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55104.08163265306,
            "unit": "ns",
            "range": "± 6482.123210249482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44476.36363636364,
            "unit": "ns",
            "range": "± 1883.7476079626617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45038.14432989691,
            "unit": "ns",
            "range": "± 7468.439753653495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2718.181818181818,
            "unit": "ns",
            "range": "± 690.0700402729964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10460,
            "unit": "ns",
            "range": "± 1382.5200548735847"
          }
        ]
      }
    ]
  }
}