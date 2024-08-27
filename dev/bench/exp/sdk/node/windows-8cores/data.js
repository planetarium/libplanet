window.BENCHMARK_DATA = {
  "lastUpdate": 1724746426666,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "4396e8a013d6602c32a4d405300212b1f1a46cfa",
          "message": "exp: node",
          "timestamp": "2024-07-25T14:46:14+09:00",
          "tree_id": "c422c889c20f6ff72b431188637e9adee2d887b3",
          "url": "https://github.com/planetarium/libplanet/commit/4396e8a013d6602c32a4d405300212b1f1a46cfa"
        },
        "date": 1721887016843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000319.7802197802,
            "unit": "ns",
            "range": "± 78314.80237517216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793030.6666666667,
            "unit": "ns",
            "range": "± 88553.29739359953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605557,
            "unit": "ns",
            "range": "± 167019.68991466818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6714181.818181818,
            "unit": "ns",
            "range": "± 157724.42102291257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30369.565217391304,
            "unit": "ns",
            "range": "± 912.5957034056188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9463257.142857144,
            "unit": "ns",
            "range": "± 60434.996411092725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23878503.333333332,
            "unit": "ns",
            "range": "± 136681.49036911989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58019141.666666664,
            "unit": "ns",
            "range": "± 290830.1017880725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117835960,
            "unit": "ns",
            "range": "± 1721598.8236852062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240107653.33333334,
            "unit": "ns",
            "range": "± 1993800.1156680915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3312697.0052083335,
            "unit": "ns",
            "range": "± 17449.035986828963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071958.7369791667,
            "unit": "ns",
            "range": "± 4590.115581014561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 724181.9786658654,
            "unit": "ns",
            "range": "± 1507.3834849507098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941739.2578125,
            "unit": "ns",
            "range": "± 2835.0053696802993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612072.6432291666,
            "unit": "ns",
            "range": "± 2254.629897106357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578478.2356770834,
            "unit": "ns",
            "range": "± 1937.1732637983823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2236241.463414634,
            "unit": "ns",
            "range": "± 80148.68051193905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2358674.358974359,
            "unit": "ns",
            "range": "± 77078.00805181831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2829674.358974359,
            "unit": "ns",
            "range": "± 95960.16914365186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2301937.5,
            "unit": "ns",
            "range": "± 44321.82118701051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2892900,
            "unit": "ns",
            "range": "± 50428.9561203146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180464.19753086418,
            "unit": "ns",
            "range": "± 9454.698681634112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178924.70588235295,
            "unit": "ns",
            "range": "± 9424.359342661328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143733.33333333334,
            "unit": "ns",
            "range": "± 1689.7193598794786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2710673.3333333335,
            "unit": "ns",
            "range": "± 48182.66532784626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2474973.3333333335,
            "unit": "ns",
            "range": "± 37366.53328212038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9945.263157894737,
            "unit": "ns",
            "range": "± 1449.9279821478904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51932.47422680412,
            "unit": "ns",
            "range": "± 5334.51829888132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46580,
            "unit": "ns",
            "range": "± 1024.240677534944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50041.48936170213,
            "unit": "ns",
            "range": "± 8750.046507703966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2664.516129032258,
            "unit": "ns",
            "range": "± 438.0403895637942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9708.247422680412,
            "unit": "ns",
            "range": "± 1324.5022731115503"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1ba0a655ecc78782cfecd63ad610cf5d82534cef",
          "message": "exp: node",
          "timestamp": "2024-07-25T15:58:33+09:00",
          "tree_id": "b3640871e27a08181086b648d1815bc201fb3353",
          "url": "https://github.com/planetarium/libplanet/commit/1ba0a655ecc78782cfecd63ad610cf5d82534cef"
        },
        "date": 1721891305972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1058037.3737373736,
            "unit": "ns",
            "range": "± 108169.99620387648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911667.6470588236,
            "unit": "ns",
            "range": "± 60146.1186464704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1622488,
            "unit": "ns",
            "range": "± 127258.99089508907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7001467.647058823,
            "unit": "ns",
            "range": "± 144600.12934439967"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30078.571428571428,
            "unit": "ns",
            "range": "± 529.4097895531638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9759323.333333334,
            "unit": "ns",
            "range": "± 116604.87288682399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24403430,
            "unit": "ns",
            "range": "± 399984.19111617043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60680873.333333336,
            "unit": "ns",
            "range": "± 1125899.3455815455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121215433.33333333,
            "unit": "ns",
            "range": "± 1178584.467950956"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248358380,
            "unit": "ns",
            "range": "± 3805821.006638571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3356730.3385416665,
            "unit": "ns",
            "range": "± 7445.784800573063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1103911.2369791667,
            "unit": "ns",
            "range": "± 3253.607782554902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755538.0924479166,
            "unit": "ns",
            "range": "± 3230.3388605838327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930863.6197916667,
            "unit": "ns",
            "range": "± 4488.989704851861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609333.0729166666,
            "unit": "ns",
            "range": "± 1061.6872892353754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572493.1901041666,
            "unit": "ns",
            "range": "± 1163.9554163931455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2204085.714285714,
            "unit": "ns",
            "range": "± 87583.89549454853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2329552.777777778,
            "unit": "ns",
            "range": "± 114226.86220199389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2764650,
            "unit": "ns",
            "range": "± 97092.68635479061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2383826.6666666665,
            "unit": "ns",
            "range": "± 42056.313721123064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3075026.6666666665,
            "unit": "ns",
            "range": "± 36066.4756618479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190092.85714285713,
            "unit": "ns",
            "range": "± 9226.55778337841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176133.33333333334,
            "unit": "ns",
            "range": "± 7701.522338322705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141517.39130434784,
            "unit": "ns",
            "range": "± 3534.4605058189113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2932300,
            "unit": "ns",
            "range": "± 39213.32191213358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2502046.6666666665,
            "unit": "ns",
            "range": "± 36500.85843739386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13410,
            "unit": "ns",
            "range": "± 1696.6622885383863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59449.48453608248,
            "unit": "ns",
            "range": "± 6311.070361399024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46760.67415730337,
            "unit": "ns",
            "range": "± 3336.6633434645482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65834.375,
            "unit": "ns",
            "range": "± 12730.409743478098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3367.7083333333335,
            "unit": "ns",
            "range": "± 545.8927582490649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11853.125,
            "unit": "ns",
            "range": "± 2205.015962467583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "516f7d1c1e9ebd1a9e6b7c00c720d11e658791e6",
          "message": "refactor: Refactor to minimal, executable version",
          "timestamp": "2024-07-26T10:46:52+09:00",
          "tree_id": "19296bc6afde9a07c03e576a480fd2a29c1db16d",
          "url": "https://github.com/planetarium/libplanet/commit/516f7d1c1e9ebd1a9e6b7c00c720d11e658791e6"
        },
        "date": 1721959038717,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030288.1720430107,
            "unit": "ns",
            "range": "± 93126.5675087946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1801572.7272727273,
            "unit": "ns",
            "range": "± 76468.1958932273"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566326.4367816092,
            "unit": "ns",
            "range": "± 84000.2553425938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6723358.823529412,
            "unit": "ns",
            "range": "± 136176.22341484364"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37646.46464646464,
            "unit": "ns",
            "range": "± 4585.676749541817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9808540,
            "unit": "ns",
            "range": "± 93740.02651711045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23868913.333333332,
            "unit": "ns",
            "range": "± 233562.36202004153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59560828.571428575,
            "unit": "ns",
            "range": "± 395419.7116377083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121959873.33333333,
            "unit": "ns",
            "range": "± 1073790.4361031842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240709707.69230768,
            "unit": "ns",
            "range": "± 1060892.79419234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360935.6305803573,
            "unit": "ns",
            "range": "± 11608.99597774236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1082026.743861607,
            "unit": "ns",
            "range": "± 2457.544019551614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738972.7669270834,
            "unit": "ns",
            "range": "± 1940.297266704746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964176.6145833333,
            "unit": "ns",
            "range": "± 4296.887694955543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636316.4908854166,
            "unit": "ns",
            "range": "± 954.4500711651847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567944.7981770834,
            "unit": "ns",
            "range": "± 1375.7680419756591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159317.6470588236,
            "unit": "ns",
            "range": "± 37793.72030003989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2242393.8775510206,
            "unit": "ns",
            "range": "± 83628.36044110889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2723950,
            "unit": "ns",
            "range": "± 62648.97208816521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299596.9696969697,
            "unit": "ns",
            "range": "± 71734.32095608283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3045595.238095238,
            "unit": "ns",
            "range": "± 62697.20469199944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182968.75,
            "unit": "ns",
            "range": "± 6905.753267492936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169682.35294117648,
            "unit": "ns",
            "range": "± 8015.394538319158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144989.7435897436,
            "unit": "ns",
            "range": "± 4965.395774324692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2806593.3333333335,
            "unit": "ns",
            "range": "± 44010.31480827886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552621.4285714286,
            "unit": "ns",
            "range": "± 33331.422655862385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12133.333333333334,
            "unit": "ns",
            "range": "± 1452.0161421943567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59365.95744680851,
            "unit": "ns",
            "range": "± 4968.060420552047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44980,
            "unit": "ns",
            "range": "± 1033.9500140620664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61762.121212121216,
            "unit": "ns",
            "range": "± 12808.632872667962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2873.9583333333335,
            "unit": "ns",
            "range": "± 514.7804420418204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12104.301075268817,
            "unit": "ns",
            "range": "± 1289.2459861160019"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e26f3a070a2d157c124f2366e0876c7931ebac7",
          "message": "Merge pull request #3900 from s2quake/exp/sdk/net8\n\nBump dotnet to 8 in Libplanet SDK",
          "timestamp": "2024-08-05T16:32:45+09:00",
          "tree_id": "0c2026fc6b7dfaa4fefebb91d4094e458dfdb863",
          "url": "https://github.com/planetarium/libplanet/commit/7e26f3a070a2d157c124f2366e0876c7931ebac7"
        },
        "date": 1722844192953,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039867.0588235294,
            "unit": "ns",
            "range": "± 54068.176513403836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1853508.536585366,
            "unit": "ns",
            "range": "± 97552.39073735056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1521243.3333333333,
            "unit": "ns",
            "range": "± 83398.2055286159"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823916.129032258,
            "unit": "ns",
            "range": "± 186900.47992942517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30954.545454545456,
            "unit": "ns",
            "range": "± 645.6648642160396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9646821.42857143,
            "unit": "ns",
            "range": "± 53590.44373151485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24033930.769230768,
            "unit": "ns",
            "range": "± 196411.38962483557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58443586.666666664,
            "unit": "ns",
            "range": "± 582430.4984492223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118167093.33333333,
            "unit": "ns",
            "range": "± 1007823.7193269938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240382585.7142857,
            "unit": "ns",
            "range": "± 1678226.2315896521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3409743.191964286,
            "unit": "ns",
            "range": "± 7957.720605503499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076038.0598958333,
            "unit": "ns",
            "range": "± 2521.6546521269647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729997.4283854166,
            "unit": "ns",
            "range": "± 1509.965152296267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946385.4213169643,
            "unit": "ns",
            "range": "± 3714.8956778382294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615797.5846354166,
            "unit": "ns",
            "range": "± 2217.8641310286957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561825.5533854166,
            "unit": "ns",
            "range": "± 611.5951582716548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125703.3333333335,
            "unit": "ns",
            "range": "± 61681.201983756124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2207480,
            "unit": "ns",
            "range": "± 29127.9737905481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2708943.75,
            "unit": "ns",
            "range": "± 52099.36619895998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2236726.6666666665,
            "unit": "ns",
            "range": "± 35940.73428510303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2957823.8095238097,
            "unit": "ns",
            "range": "± 66884.36218401058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173572.41379310345,
            "unit": "ns",
            "range": "± 7559.304551309965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166990.9090909091,
            "unit": "ns",
            "range": "± 6762.348724323544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146411.76470588235,
            "unit": "ns",
            "range": "± 4660.261711072273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2795926.6666666665,
            "unit": "ns",
            "range": "± 37268.89677286768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2532629.411764706,
            "unit": "ns",
            "range": "± 50683.8579419755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10671.875,
            "unit": "ns",
            "range": "± 1492.20452422088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53358.163265306124,
            "unit": "ns",
            "range": "± 5686.4629172405685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43391.11111111111,
            "unit": "ns",
            "range": "± 1530.57063366787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54825.77319587629,
            "unit": "ns",
            "range": "± 11415.142340608696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2407.2916666666665,
            "unit": "ns",
            "range": "± 534.9362562451848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10005.747126436781,
            "unit": "ns",
            "range": "± 980.5499550666358"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c67f7fd74595929b3b6f9885e46ba3a8d78f799",
          "message": "Merge pull request #3909 from s2quake/exp/sdk/seed\n\nAdd Seed Service to SDK",
          "timestamp": "2024-08-12T15:08:11+09:00",
          "tree_id": "5035a7c3c10989261e6e785ca4fc495d3d6b3bad",
          "url": "https://github.com/planetarium/libplanet/commit/5c67f7fd74595929b3b6f9885e46ba3a8d78f799"
        },
        "date": 1723443420745,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994614.5833333334,
            "unit": "ns",
            "range": "± 95326.44850768184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1750654.8780487804,
            "unit": "ns",
            "range": "± 54452.57088154568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605823.2323232323,
            "unit": "ns",
            "range": "± 153035.60465292478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6799081.578947368,
            "unit": "ns",
            "range": "± 213487.59677278192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29864.285714285714,
            "unit": "ns",
            "range": "± 305.3551346248467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9657940,
            "unit": "ns",
            "range": "± 88210.80108791342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23393980,
            "unit": "ns",
            "range": "± 222759.5795599244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59075546.15384615,
            "unit": "ns",
            "range": "± 371070.1699485436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120535650,
            "unit": "ns",
            "range": "± 654398.685523882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238951650,
            "unit": "ns",
            "range": "± 1266632.51445187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3328666.1979166665,
            "unit": "ns",
            "range": "± 7286.33722694284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060398.9973958333,
            "unit": "ns",
            "range": "± 6031.462094507926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745737.5260416666,
            "unit": "ns",
            "range": "± 2202.8098234672643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936676.2137276786,
            "unit": "ns",
            "range": "± 3471.0252282944875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622558.5091145834,
            "unit": "ns",
            "range": "± 930.7301321006105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576735.0135216346,
            "unit": "ns",
            "range": "± 706.8210089598423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090979.4117647058,
            "unit": "ns",
            "range": "± 29749.56612275175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2196266.6666666665,
            "unit": "ns",
            "range": "± 17302.05052532654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2668965.625,
            "unit": "ns",
            "range": "± 82940.45516406684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2244500,
            "unit": "ns",
            "range": "± 41778.34367229031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2969180,
            "unit": "ns",
            "range": "± 37473.65169593926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175771.62162162163,
            "unit": "ns",
            "range": "± 8407.376413378815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162824.59016393442,
            "unit": "ns",
            "range": "± 7254.6227960224305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147480,
            "unit": "ns",
            "range": "± 2688.9190605679664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2771400,
            "unit": "ns",
            "range": "± 46908.680281098146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2434364.285714286,
            "unit": "ns",
            "range": "± 22592.32705495921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10591.489361702128,
            "unit": "ns",
            "range": "± 1332.4453689273464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51782.97872340425,
            "unit": "ns",
            "range": "± 4898.422794176732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44641.17647058824,
            "unit": "ns",
            "range": "± 906.9583945318357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53077.31958762887,
            "unit": "ns",
            "range": "± 11279.133621007855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2982.7956989247314,
            "unit": "ns",
            "range": "± 539.6503811676066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10152.68817204301,
            "unit": "ns",
            "range": "± 1102.5258941896009"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e40cc5f8e3e48342b19abdf96f52b3df0f048f92",
          "message": "Merge pull request #3911 from s2quake/exp/sdk/swarm\n\nAdd Node Service(swarm) to SDK",
          "timestamp": "2024-08-14T14:58:53+09:00",
          "tree_id": "e0bf2c513e5ee8a226c11682fb658225dcf6434f",
          "url": "https://github.com/planetarium/libplanet/commit/e40cc5f8e3e48342b19abdf96f52b3df0f048f92"
        },
        "date": 1723615832726,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1121094.7916666667,
            "unit": "ns",
            "range": "± 125327.86002682526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919531.7073170731,
            "unit": "ns",
            "range": "± 67824.94172140656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1616562.2222222222,
            "unit": "ns",
            "range": "± 101459.61235302678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7046427.2727272725,
            "unit": "ns",
            "range": "± 219295.62563000325"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33670.1030927835,
            "unit": "ns",
            "range": "± 4261.801383326989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10459293.333333334,
            "unit": "ns",
            "range": "± 116905.98461197459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25665800,
            "unit": "ns",
            "range": "± 287248.7397040037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63671433.333333336,
            "unit": "ns",
            "range": "± 485675.3246278638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128619406.66666667,
            "unit": "ns",
            "range": "± 807238.7153276345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257979420,
            "unit": "ns",
            "range": "± 2427792.3226079876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3485576.015625,
            "unit": "ns",
            "range": "± 17868.27177404776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076489.2578125,
            "unit": "ns",
            "range": "± 2173.6395854855937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735060.9114583334,
            "unit": "ns",
            "range": "± 1836.5750829208316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981066.25,
            "unit": "ns",
            "range": "± 10235.511286984054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629401.2955729166,
            "unit": "ns",
            "range": "± 1143.8186740830647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573497.4479166666,
            "unit": "ns",
            "range": "± 1226.5860984783692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2227813.0434782607,
            "unit": "ns",
            "range": "± 48019.57275516862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2357370,
            "unit": "ns",
            "range": "± 53419.87704177065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2933411.111111111,
            "unit": "ns",
            "range": "± 62536.78342420365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2449664.814814815,
            "unit": "ns",
            "range": "± 64454.913900539235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3186480,
            "unit": "ns",
            "range": "± 57709.03865823051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199268.35443037975,
            "unit": "ns",
            "range": "± 10095.093302978705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191113.1313131313,
            "unit": "ns",
            "range": "± 13693.62764405435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 156606.52173913043,
            "unit": "ns",
            "range": "± 5918.235554394121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2887540,
            "unit": "ns",
            "range": "± 37704.12633727432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2653228.5714285714,
            "unit": "ns",
            "range": "± 29420.14429111268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16270.408163265307,
            "unit": "ns",
            "range": "± 2029.026945890362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64668.88888888889,
            "unit": "ns",
            "range": "± 5758.777266529166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63203.06122448979,
            "unit": "ns",
            "range": "± 8985.560628622228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78028.42105263157,
            "unit": "ns",
            "range": "± 14064.711107741707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4258.333333333333,
            "unit": "ns",
            "range": "± 812.6197617539106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13108.602150537634,
            "unit": "ns",
            "range": "± 1338.4494528451241"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e95641a8c153e01cd335a22203f0fc5c480eb2bc",
          "message": "Merge pull request #3919 from s2quake/exp/sdk/json-schema\n\nAdd json schema builder for appsettings.json",
          "timestamp": "2024-08-21T09:54:55+09:00",
          "tree_id": "b46abbf451b0b38f56a8f1aba6691e4b53efc694",
          "url": "https://github.com/planetarium/libplanet/commit/e95641a8c153e01cd335a22203f0fc5c480eb2bc"
        },
        "date": 1724202275150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047887,
            "unit": "ns",
            "range": "± 123728.07970740032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1756088.0952380951,
            "unit": "ns",
            "range": "± 55960.91058369728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1503547.191011236,
            "unit": "ns",
            "range": "± 79945.11482301702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7060368.085106383,
            "unit": "ns",
            "range": "± 275169.79272598616"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30208.333333333332,
            "unit": "ns",
            "range": "± 342.3404295390331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9742640,
            "unit": "ns",
            "range": "± 128558.7014335697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23433940,
            "unit": "ns",
            "range": "± 169868.41882553013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59638064.28571428,
            "unit": "ns",
            "range": "± 302904.9066498056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120880366.66666667,
            "unit": "ns",
            "range": "± 680679.0345641902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243725730.76923078,
            "unit": "ns",
            "range": "± 1086841.9391250163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285392.2916666665,
            "unit": "ns",
            "range": "± 4554.783500434265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081104.0364583333,
            "unit": "ns",
            "range": "± 2143.191013968864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723579.0108816965,
            "unit": "ns",
            "range": "± 1694.7693197231763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918248.256138393,
            "unit": "ns",
            "range": "± 2371.6530045738123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615106.0677083334,
            "unit": "ns",
            "range": "± 1447.8034919399802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552151.5885416666,
            "unit": "ns",
            "range": "± 968.3162533626531"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134561.5384615385,
            "unit": "ns",
            "range": "± 17004.04552165643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210900,
            "unit": "ns",
            "range": "± 69960.26997517949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2683015.789473684,
            "unit": "ns",
            "range": "± 58782.52067444969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2235071.4285714286,
            "unit": "ns",
            "range": "± 23804.118214209153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2938638.888888889,
            "unit": "ns",
            "range": "± 95523.18874127678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170581.33333333334,
            "unit": "ns",
            "range": "± 8455.858249683395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161642.59259259258,
            "unit": "ns",
            "range": "± 6290.022103085376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142183.33333333334,
            "unit": "ns",
            "range": "± 3696.963109348544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2663114.285714286,
            "unit": "ns",
            "range": "± 34401.67386676359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2386546.6666666665,
            "unit": "ns",
            "range": "± 30971.96581856997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9906.521739130434,
            "unit": "ns",
            "range": "± 1020.6445224858943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50949.4623655914,
            "unit": "ns",
            "range": "± 3298.0436775627663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43456.25,
            "unit": "ns",
            "range": "± 516.3574343417552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50693.81443298969,
            "unit": "ns",
            "range": "± 9468.124313023824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2673.9583333333335,
            "unit": "ns",
            "range": "± 432.9202653380306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9118.681318681318,
            "unit": "ns",
            "range": "± 991.8458760100996"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b88690046d6c5c70ae5d7bbf9c2582ef7aadc01",
          "message": "Merge pull request #3928 from planetarium/exp/sdk/swarm-service\n\nSplit Node into Swarm and Validator services",
          "timestamp": "2024-08-22T17:03:17+09:00",
          "tree_id": "c0ec8431e6c30333c5291c1dfc6bb59c02866ebe",
          "url": "https://github.com/planetarium/libplanet/commit/9b88690046d6c5c70ae5d7bbf9c2582ef7aadc01"
        },
        "date": 1724314375454,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015812.2448979592,
            "unit": "ns",
            "range": "± 105637.22815479431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1847515.5555555555,
            "unit": "ns",
            "range": "± 65999.00466038572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1668194.680851064,
            "unit": "ns",
            "range": "± 138668.52048519504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6879603.846153846,
            "unit": "ns",
            "range": "± 187632.486485191"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31064.285714285714,
            "unit": "ns",
            "range": "± 414.37096508237244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10471585.714285715,
            "unit": "ns",
            "range": "± 139298.94724403592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24207961.53846154,
            "unit": "ns",
            "range": "± 198596.5404971494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64246921.05263158,
            "unit": "ns",
            "range": "± 1388552.3727084931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124138450,
            "unit": "ns",
            "range": "± 2390781.013811177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244765813.33333334,
            "unit": "ns",
            "range": "± 2601019.6288781683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3302444.6875,
            "unit": "ns",
            "range": "± 14756.277088401934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1076044.2057291667,
            "unit": "ns",
            "range": "± 3239.702383250744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754408.6286272322,
            "unit": "ns",
            "range": "± 1943.4766837597554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989465.7291666667,
            "unit": "ns",
            "range": "± 7551.138491894758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619722.9036458334,
            "unit": "ns",
            "range": "± 1843.2204627695394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566225.0846354166,
            "unit": "ns",
            "range": "± 775.974942736326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2106500,
            "unit": "ns",
            "range": "± 31999.374993896367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2248107.8947368423,
            "unit": "ns",
            "range": "± 77343.20278518146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2852048.1481481483,
            "unit": "ns",
            "range": "± 77308.65893571526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2267437.8378378376,
            "unit": "ns",
            "range": "± 75994.70504709652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3005153.3333333335,
            "unit": "ns",
            "range": "± 54511.92355369429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185311.62790697673,
            "unit": "ns",
            "range": "± 9628.418947905648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171814.2857142857,
            "unit": "ns",
            "range": "± 9191.780545907894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148715,
            "unit": "ns",
            "range": "± 3336.9186858222174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2740316.6666666665,
            "unit": "ns",
            "range": "± 35564.78327677268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2458800,
            "unit": "ns",
            "range": "± 61280.814786273564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12772.043010752688,
            "unit": "ns",
            "range": "± 928.2247656259079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58591.48936170213,
            "unit": "ns",
            "range": "± 5336.356527046949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46260.86956521739,
            "unit": "ns",
            "range": "± 1763.138396391763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67326.76767676767,
            "unit": "ns",
            "range": "± 14769.341026038848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2565.979381443299,
            "unit": "ns",
            "range": "± 525.9686694444008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10548.91304347826,
            "unit": "ns",
            "range": "± 1110.9341248328396"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "Jeesu Choi",
            "username": "s2quake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "895c277eba87e6d5e47d95ad4e55a6c91783338d",
          "message": "Merge pull request #3930 from planetarium/exp/sdk/explicit-services\n\nExplicit Services Configuration",
          "timestamp": "2024-08-27T16:57:33+09:00",
          "tree_id": "5b60d7e195a7d3f9dc5048ba53b4be097cbe97ff",
          "url": "https://github.com/planetarium/libplanet/commit/895c277eba87e6d5e47d95ad4e55a6c91783338d"
        },
        "date": 1724746146761,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057271,
            "unit": "ns",
            "range": "± 105004.94389034327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1926710.1265822784,
            "unit": "ns",
            "range": "± 100158.06558268696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1720423.2323232323,
            "unit": "ns",
            "range": "± 133163.3750501676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6994586.363636363,
            "unit": "ns",
            "range": "± 164138.08732270738"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38691.666666666664,
            "unit": "ns",
            "range": "± 4692.3379127807175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10452403.030303031,
            "unit": "ns",
            "range": "± 323673.1168216328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25701423.333333332,
            "unit": "ns",
            "range": "± 473109.1907593345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63222893.333333336,
            "unit": "ns",
            "range": "± 709107.989425212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127529085.71428572,
            "unit": "ns",
            "range": "± 1917671.2567619584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248362373.33333334,
            "unit": "ns",
            "range": "± 2402091.750795147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3356316.4899553573,
            "unit": "ns",
            "range": "± 12970.32348357791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071642.564174107,
            "unit": "ns",
            "range": "± 2149.818656335606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 755590.7435825893,
            "unit": "ns",
            "range": "± 1168.2053421931116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970640.9765625,
            "unit": "ns",
            "range": "± 4068.76950870179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623272.67578125,
            "unit": "ns",
            "range": "± 1039.341977337656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579003.37890625,
            "unit": "ns",
            "range": "± 2334.973740311886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188776.595744681,
            "unit": "ns",
            "range": "± 81897.09134497885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2271742.8571428573,
            "unit": "ns",
            "range": "± 34565.427687340874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2824586.3636363638,
            "unit": "ns",
            "range": "± 68911.98351420072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2349993.75,
            "unit": "ns",
            "range": "± 36179.08177847157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3111953.3333333335,
            "unit": "ns",
            "range": "± 44185.46733723119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182546.47887323942,
            "unit": "ns",
            "range": "± 8276.970304679562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181366.66666666666,
            "unit": "ns",
            "range": "± 10099.905439539543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153506.94444444444,
            "unit": "ns",
            "range": "± 7518.171908246081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2745093.3333333335,
            "unit": "ns",
            "range": "± 40004.47236902156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2512978.5714285714,
            "unit": "ns",
            "range": "± 40216.47535662331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14497.959183673469,
            "unit": "ns",
            "range": "± 2275.1449298726225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62122.916666666664,
            "unit": "ns",
            "range": "± 5486.144829269393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49145.26315789474,
            "unit": "ns",
            "range": "± 4754.164320620187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70633.33333333333,
            "unit": "ns",
            "range": "± 14746.95805682733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3529.1666666666665,
            "unit": "ns",
            "range": "± 844.2893825007563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12466.304347826086,
            "unit": "ns",
            "range": "± 1638.6993753029417"
          }
        ]
      }
    ]
  }
}