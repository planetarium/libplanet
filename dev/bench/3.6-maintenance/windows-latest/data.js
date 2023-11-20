window.BENCHMARK_DATA = {
  "lastUpdate": 1700471260198,
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
      }
    ]
  }
}