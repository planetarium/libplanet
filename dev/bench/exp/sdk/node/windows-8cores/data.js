window.BENCHMARK_DATA = {
  "lastUpdate": 1736847298338,
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
          "id": "1538d48f96d9a5e781362b6786d39cea23c0e15d",
          "message": "Merge pull request #3939 from planetarium/refactor/option-schema\n\nImprove option schema builder",
          "timestamp": "2024-08-29T15:23:17+09:00",
          "tree_id": "38da343c71b1c956e231e869b7431cef115e8b0e",
          "url": "https://github.com/planetarium/libplanet/commit/1538d48f96d9a5e781362b6786d39cea23c0e15d"
        },
        "date": 1724913281866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1034766,
            "unit": "ns",
            "range": "± 131164.4593553444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1762414.2857142857,
            "unit": "ns",
            "range": "± 54878.11581877437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1534870.5882352942,
            "unit": "ns",
            "range": "± 82336.26439287653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6850970.833333333,
            "unit": "ns",
            "range": "± 171218.5749755752"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30936.986301369863,
            "unit": "ns",
            "range": "± 1441.8840731367056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10110100,
            "unit": "ns",
            "range": "± 128780.6483312434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23876273.333333332,
            "unit": "ns",
            "range": "± 190740.27392042323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59333260,
            "unit": "ns",
            "range": "± 685010.2916849394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115753350,
            "unit": "ns",
            "range": "± 545313.1418664947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237577457.14285713,
            "unit": "ns",
            "range": "± 1247098.1094366391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3356218.3072916665,
            "unit": "ns",
            "range": "± 4565.930352648331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1081368.0598958333,
            "unit": "ns",
            "range": "± 7249.203152717617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751806.2369791666,
            "unit": "ns",
            "range": "± 1200.8181926727948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920375.6556919643,
            "unit": "ns",
            "range": "± 3576.9817501391344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617039.3833705357,
            "unit": "ns",
            "range": "± 1140.5020865993984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565018.6393229166,
            "unit": "ns",
            "range": "± 1321.062975726439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116714.285714286,
            "unit": "ns",
            "range": "± 31343.4291271799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2237275,
            "unit": "ns",
            "range": "± 63948.26974753659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2703600,
            "unit": "ns",
            "range": "± 63032.420229592964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2393453.125,
            "unit": "ns",
            "range": "± 73178.57514933655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2916014.285714286,
            "unit": "ns",
            "range": "± 51309.67605766828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179466.07142857142,
            "unit": "ns",
            "range": "± 7721.876286021642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173450,
            "unit": "ns",
            "range": "± 6231.636436998458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142685.1851851852,
            "unit": "ns",
            "range": "± 3858.8264162231126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2729286.6666666665,
            "unit": "ns",
            "range": "± 26236.93870063641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2337286.6666666665,
            "unit": "ns",
            "range": "± 33584.77262660792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10492.391304347826,
            "unit": "ns",
            "range": "± 1086.2005254381056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51867.03296703297,
            "unit": "ns",
            "range": "± 3633.946582651947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45640,
            "unit": "ns",
            "range": "± 1349.4826594943197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56689.89898989899,
            "unit": "ns",
            "range": "± 10104.348376423977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2598.9473684210525,
            "unit": "ns",
            "range": "± 448.2815264849557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10027.659574468085,
            "unit": "ns",
            "range": "± 1511.917123469629"
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
          "id": "8a8b57a4435d0f60a7fd99aa0ed533e528e02b38",
          "message": "Merge pull request #3933 from planetarium/exp/sdk/bound-peer\n\nRemove BoundPeerUtility",
          "timestamp": "2024-08-29T15:23:34+09:00",
          "tree_id": "7ca027a4d7ee4a87500d867b7753c576a6f0e3d4",
          "url": "https://github.com/planetarium/libplanet/commit/8a8b57a4435d0f60a7fd99aa0ed533e528e02b38"
        },
        "date": 1724913404825,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 984662.7659574468,
            "unit": "ns",
            "range": "± 71754.18197552593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781970,
            "unit": "ns",
            "range": "± 85806.1994821191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1541182.9787234042,
            "unit": "ns",
            "range": "± 105767.21104844962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6900302.702702703,
            "unit": "ns",
            "range": "± 230442.84478958056"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37439.795918367345,
            "unit": "ns",
            "range": "± 4319.4296061945215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9660053.333333334,
            "unit": "ns",
            "range": "± 78883.74689256035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23591313.333333332,
            "unit": "ns",
            "range": "± 168972.15267893224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59967533.333333336,
            "unit": "ns",
            "range": "± 564615.0833806625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119305086.66666667,
            "unit": "ns",
            "range": "± 453445.04922500445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234716006.66666666,
            "unit": "ns",
            "range": "± 1458303.555244276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3319088.0989583335,
            "unit": "ns",
            "range": "± 10628.725539914996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1048092.8034855769,
            "unit": "ns",
            "range": "± 1267.2753415372576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738449.74609375,
            "unit": "ns",
            "range": "± 2796.333098477383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914323.5677083333,
            "unit": "ns",
            "range": "± 3510.1106924680867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619525.5403645834,
            "unit": "ns",
            "range": "± 3339.851773970124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578686.6080729166,
            "unit": "ns",
            "range": "± 1353.8016418676257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124127.272727273,
            "unit": "ns",
            "range": "± 51684.91703921609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262571.4285714286,
            "unit": "ns",
            "range": "± 73638.85072524185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2655930.303030303,
            "unit": "ns",
            "range": "± 73099.85672373306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242380,
            "unit": "ns",
            "range": "± 37213.55743734878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2923820,
            "unit": "ns",
            "range": "± 51649.54985283028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174832.6923076923,
            "unit": "ns",
            "range": "± 7228.557775331966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166981.0344827586,
            "unit": "ns",
            "range": "± 7029.223632520385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147352.1739130435,
            "unit": "ns",
            "range": "± 3653.0024469565246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2683813.3333333335,
            "unit": "ns",
            "range": "± 47480.535360242495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2578482.3529411764,
            "unit": "ns",
            "range": "± 52482.67851508388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10621.27659574468,
            "unit": "ns",
            "range": "± 1216.5412226176604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53401.041666666664,
            "unit": "ns",
            "range": "± 4830.680344187482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45001.35135135135,
            "unit": "ns",
            "range": "± 1525.8188369276097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54535.71428571428,
            "unit": "ns",
            "range": "± 11202.22961975018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2634.375,
            "unit": "ns",
            "range": "± 461.5370487495246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9982.222222222223,
            "unit": "ns",
            "range": "± 1012.3482300209088"
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
          "id": "652ba8fbd7cec41f3bf23b5af4a1e29e4b690686",
          "message": "Merge pull request #3927 from s2quake/exp/sdk/swagger\n\nAdd Swagger and Explorer(GQL) service to sdk",
          "timestamp": "2024-08-29T17:13:51+09:00",
          "tree_id": "6405f21e56c8247b21309d1c6115622eaa5e6fca",
          "url": "https://github.com/planetarium/libplanet/commit/652ba8fbd7cec41f3bf23b5af4a1e29e4b690686"
        },
        "date": 1724919844846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 996690,
            "unit": "ns",
            "range": "± 106115.74821958342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1747710.2040816327,
            "unit": "ns",
            "range": "± 66783.1573230917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528305.5555555555,
            "unit": "ns",
            "range": "± 105511.79215327432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7155087.301587301,
            "unit": "ns",
            "range": "± 326744.36663310975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30064.285714285714,
            "unit": "ns",
            "range": "± 534.8688213802111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9776514.285714285,
            "unit": "ns",
            "range": "± 89193.69464729648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24457285.714285713,
            "unit": "ns",
            "range": "± 107617.26954024016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58772926.666666664,
            "unit": "ns",
            "range": "± 346788.849850961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120018580,
            "unit": "ns",
            "range": "± 1084368.6953377856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241220492.85714287,
            "unit": "ns",
            "range": "± 1263462.03359249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3312209.3489583335,
            "unit": "ns",
            "range": "± 6651.1956513144505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062575.4817708333,
            "unit": "ns",
            "range": "± 1930.245885407493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741867.8971354166,
            "unit": "ns",
            "range": "± 4337.53754570349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1915642.7315848214,
            "unit": "ns",
            "range": "± 2042.6138576757362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620363.3138020834,
            "unit": "ns",
            "range": "± 1475.8667409006714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576759.6354166666,
            "unit": "ns",
            "range": "± 573.423436874564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2115604,
            "unit": "ns",
            "range": "± 44071.89656307823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2187707.1428571427,
            "unit": "ns",
            "range": "± 93191.15419812773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2697300,
            "unit": "ns",
            "range": "± 47714.68776562861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2230569.230769231,
            "unit": "ns",
            "range": "± 16470.447505324228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2894653.846153846,
            "unit": "ns",
            "range": "± 42122.65058502008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170592.3076923077,
            "unit": "ns",
            "range": "± 8650.557661338826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165128.125,
            "unit": "ns",
            "range": "± 7211.619124498006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145765,
            "unit": "ns",
            "range": "± 3281.2505639097258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2602866.6666666665,
            "unit": "ns",
            "range": "± 28603.06343899615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2435986.6666666665,
            "unit": "ns",
            "range": "± 30697.833024188407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10365.263157894737,
            "unit": "ns",
            "range": "± 1482.07505631948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51737.234042553195,
            "unit": "ns",
            "range": "± 4359.515215293673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44711.11111111111,
            "unit": "ns",
            "range": "± 1234.2339054382412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50937.234042553195,
            "unit": "ns",
            "range": "± 8889.089410439386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2231.958762886598,
            "unit": "ns",
            "range": "± 365.5892480390895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9181.720430107527,
            "unit": "ns",
            "range": "± 856.5535385890239"
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
          "id": "8fe6844b92f27c6a11528754e8fb4350345293a2",
          "message": "Merge pull request #3932 from planetarium/exp/sdk/genesis-options\n\nRefactor GenesisOptions",
          "timestamp": "2024-09-04T14:50:05+09:00",
          "tree_id": "b121842e5469bfd00dfcf059eccb9b48217d4db0",
          "url": "https://github.com/planetarium/libplanet/commit/8fe6844b92f27c6a11528754e8fb4350345293a2"
        },
        "date": 1725429647039,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1068409.1836734693,
            "unit": "ns",
            "range": "± 104320.07653562618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1878013.3333333333,
            "unit": "ns",
            "range": "± 74763.8031395341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1606488.3116883116,
            "unit": "ns",
            "range": "± 81814.55759991612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6995211.428571428,
            "unit": "ns",
            "range": "± 206581.75389423143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31907.5,
            "unit": "ns",
            "range": "± 1674.966464806937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10132235.714285715,
            "unit": "ns",
            "range": "± 69106.61336651516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25358486.666666668,
            "unit": "ns",
            "range": "± 196412.99733930422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61851123.07692308,
            "unit": "ns",
            "range": "± 282525.5568199278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121713726.66666667,
            "unit": "ns",
            "range": "± 2112267.2945259106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240210823.07692307,
            "unit": "ns",
            "range": "± 1442092.9582576882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371159.921875,
            "unit": "ns",
            "range": "± 20568.961396589668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1085269.6364182692,
            "unit": "ns",
            "range": "± 2958.5404114386324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741731.1941964285,
            "unit": "ns",
            "range": "± 2526.946507909847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957218.9174107143,
            "unit": "ns",
            "range": "± 4593.587882435137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609360.0306919643,
            "unit": "ns",
            "range": "± 1488.548249955751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570332.12890625,
            "unit": "ns",
            "range": "± 1982.4397667675419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195275.757575758,
            "unit": "ns",
            "range": "± 68120.46787815975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2235427.272727273,
            "unit": "ns",
            "range": "± 67555.35819203792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2808311.7647058824,
            "unit": "ns",
            "range": "± 57662.12884503291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2315740,
            "unit": "ns",
            "range": "± 52688.922235283855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2961944.4444444445,
            "unit": "ns",
            "range": "± 61067.842911867265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182518.8679245283,
            "unit": "ns",
            "range": "± 7571.608319235282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 180440,
            "unit": "ns",
            "range": "± 6729.1628493491835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148485,
            "unit": "ns",
            "range": "± 5028.511019866923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2887353.3333333335,
            "unit": "ns",
            "range": "± 50395.108417196134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2582860,
            "unit": "ns",
            "range": "± 38092.87147410729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13191.954022988506,
            "unit": "ns",
            "range": "± 1323.246394711638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61198.97959183674,
            "unit": "ns",
            "range": "± 7243.347390693037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48436.55913978495,
            "unit": "ns",
            "range": "± 2755.775947944393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64845.91836734694,
            "unit": "ns",
            "range": "± 14938.017425743754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3542.8571428571427,
            "unit": "ns",
            "range": "± 633.920870537556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11994.505494505494,
            "unit": "ns",
            "range": "± 1250.1877758838768"
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
          "id": "2e79a3cdda9d7d60589d383aaa5b46635ce9487f",
          "message": "Merge pull request #3940 from planetarium/exp/sdk/fix-swarm-service\n\nSwarmService instance was created twice",
          "timestamp": "2024-09-05T14:53:31+09:00",
          "tree_id": "c57312d3d883a10575ef8ec7876ba7125e83570d",
          "url": "https://github.com/planetarium/libplanet/commit/2e79a3cdda9d7d60589d383aaa5b46635ce9487f"
        },
        "date": 1725516185435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026832.2916666666,
            "unit": "ns",
            "range": "± 91006.82044398958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1813833.3333333333,
            "unit": "ns",
            "range": "± 60138.4081106351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551900.6666666667,
            "unit": "ns",
            "range": "± 72893.93696904324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6718363.157894737,
            "unit": "ns",
            "range": "± 114942.75488513749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33610.204081632655,
            "unit": "ns",
            "range": "± 4747.771909248717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9717153.333333334,
            "unit": "ns",
            "range": "± 99559.38548472083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23849592.85714286,
            "unit": "ns",
            "range": "± 172031.31854531475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60348169.23076923,
            "unit": "ns",
            "range": "± 535425.1976772221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119527340,
            "unit": "ns",
            "range": "± 967942.1505736501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245674042.85714287,
            "unit": "ns",
            "range": "± 1430270.2685502837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3286480.2083333335,
            "unit": "ns",
            "range": "± 8458.662631420844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1086596.4453125,
            "unit": "ns",
            "range": "± 5691.525294395201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749145.0260416666,
            "unit": "ns",
            "range": "± 2208.142596614779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973326.3392857143,
            "unit": "ns",
            "range": "± 3854.6858913687583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631232.9729352678,
            "unit": "ns",
            "range": "± 928.2040946252963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549654.4075520834,
            "unit": "ns",
            "range": "± 1049.3531017582197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166648,
            "unit": "ns",
            "range": "± 44122.15165499827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2230590,
            "unit": "ns",
            "range": "± 49122.316720610805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2681668.1818181816,
            "unit": "ns",
            "range": "± 98935.63040714501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2284786.6666666665,
            "unit": "ns",
            "range": "± 38464.39664837874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2934628.5714285714,
            "unit": "ns",
            "range": "± 32069.382200555014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177724.59016393442,
            "unit": "ns",
            "range": "± 8012.337481195378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170013.7931034483,
            "unit": "ns",
            "range": "± 7097.205980410366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146221.42857142858,
            "unit": "ns",
            "range": "± 2521.348409521739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2756584.6153846155,
            "unit": "ns",
            "range": "± 35394.204943602614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2557842.8571428573,
            "unit": "ns",
            "range": "± 36206.07076775331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10069.148936170213,
            "unit": "ns",
            "range": "± 1116.4485354991564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52306.18556701031,
            "unit": "ns",
            "range": "± 6495.412073677301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44352.27272727273,
            "unit": "ns",
            "range": "± 1632.872862275315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47486.458333333336,
            "unit": "ns",
            "range": "± 8750.550295978886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2402.0408163265306,
            "unit": "ns",
            "range": "± 383.41374702745856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9674.742268041236,
            "unit": "ns",
            "range": "± 1249.1689677404077"
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
          "id": "cdd701e34705d75e4570bc9b623bdfc14e04fcd6",
          "message": "Merge pull request #3946 from planetarium/exp/sdk/refactor-service\n\nAdd StoreService and Test codes for each service",
          "timestamp": "2024-09-05T16:23:22+09:00",
          "tree_id": "ffba5823c87668b8fbbbe2e531e2475e452e53be",
          "url": "https://github.com/planetarium/libplanet/commit/cdd701e34705d75e4570bc9b623bdfc14e04fcd6"
        },
        "date": 1725521584152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980532.9896907216,
            "unit": "ns",
            "range": "± 91581.1317467212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1731672.972972973,
            "unit": "ns",
            "range": "± 57763.260375858714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1508397.7528089888,
            "unit": "ns",
            "range": "± 82873.49748744672"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6823582.352941177,
            "unit": "ns",
            "range": "± 214800.87815207356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33889,
            "unit": "ns",
            "range": "± 4780.471533312178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9888003.333333334,
            "unit": "ns",
            "range": "± 161506.71311419964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24045421.42857143,
            "unit": "ns",
            "range": "± 274047.4837535429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59241728.571428575,
            "unit": "ns",
            "range": "± 346039.30507868703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122272900,
            "unit": "ns",
            "range": "± 653153.5100512801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240295460,
            "unit": "ns",
            "range": "± 2536320.686911878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3308975.4231770835,
            "unit": "ns",
            "range": "± 8608.284786017757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037455.9495192308,
            "unit": "ns",
            "range": "± 1296.559178430337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 733220.5598958334,
            "unit": "ns",
            "range": "± 1409.2786763233942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910786.3020833333,
            "unit": "ns",
            "range": "± 6163.3519607031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621841.4690290178,
            "unit": "ns",
            "range": "± 1870.168368013546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 545825.8037860577,
            "unit": "ns",
            "range": "± 536.6033529472688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118826.1904761903,
            "unit": "ns",
            "range": "± 49269.98990016037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2210250,
            "unit": "ns",
            "range": "± 58014.95496852514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2680882.6086956523,
            "unit": "ns",
            "range": "± 66820.07491066733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2232892.8571428573,
            "unit": "ns",
            "range": "± 23680.5816029705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2921353.3333333335,
            "unit": "ns",
            "range": "± 52327.41519464134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176593.6507936508,
            "unit": "ns",
            "range": "± 8012.387043456688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171693.2584269663,
            "unit": "ns",
            "range": "± 9744.588215480157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147834.61538461538,
            "unit": "ns",
            "range": "± 6053.35378166791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2759866.6666666665,
            "unit": "ns",
            "range": "± 26921.623456318706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2552776.923076923,
            "unit": "ns",
            "range": "± 33556.672308354064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12878.260869565218,
            "unit": "ns",
            "range": "± 1235.449474372266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58537.755102040814,
            "unit": "ns",
            "range": "± 7852.03716827576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45024,
            "unit": "ns",
            "range": "± 1045.7373793963122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64863.541666666664,
            "unit": "ns",
            "range": "± 11659.03417315848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3084.0425531914893,
            "unit": "ns",
            "range": "± 605.4063225421885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11521.348314606741,
            "unit": "ns",
            "range": "± 1198.6234443682356"
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
          "id": "acd0bcef089c6e312dcac83d080dd92d872d2361",
          "message": "Merge pull request #3935 from planetarium/exp/sdk/action-loader\n\nAction loader from external assembly",
          "timestamp": "2024-09-09T16:47:24+09:00",
          "tree_id": "a784d86d0ac7e276f49798009f515994eac9b12e",
          "url": "https://github.com/planetarium/libplanet/commit/acd0bcef089c6e312dcac83d080dd92d872d2361"
        },
        "date": 1725868702340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987324.7191011236,
            "unit": "ns",
            "range": "± 67702.51989552744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1815062.962962963,
            "unit": "ns",
            "range": "± 76116.8151315607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1589231.5217391304,
            "unit": "ns",
            "range": "± 95999.56035767902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6898930.434782608,
            "unit": "ns",
            "range": "± 173590.257986974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37162.244897959186,
            "unit": "ns",
            "range": "± 4204.72280626809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9670853.333333334,
            "unit": "ns",
            "range": "± 90583.91426632834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24378930,
            "unit": "ns",
            "range": "± 279505.18829838256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59918213.333333336,
            "unit": "ns",
            "range": "± 1071861.172958158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120585700,
            "unit": "ns",
            "range": "± 729901.6225296588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235952807.14285713,
            "unit": "ns",
            "range": "± 1592401.723794927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3346977.4553571427,
            "unit": "ns",
            "range": "± 19497.04571403068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1157013.2393973214,
            "unit": "ns",
            "range": "± 3454.231048576486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731383.3658854166,
            "unit": "ns",
            "range": "± 1021.2443858939137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1892224.135044643,
            "unit": "ns",
            "range": "± 4871.394931524258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621721.6796875,
            "unit": "ns",
            "range": "± 1585.894872319362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568876.8359375,
            "unit": "ns",
            "range": "± 1251.1306102963324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2102713.888888889,
            "unit": "ns",
            "range": "± 48645.29431229868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253291.304347826,
            "unit": "ns",
            "range": "± 55334.11665874103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2728453.846153846,
            "unit": "ns",
            "range": "± 74029.9857126515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2247850,
            "unit": "ns",
            "range": "± 67344.26478921571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2954826.6666666665,
            "unit": "ns",
            "range": "± 45948.82971720774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193483.33333333334,
            "unit": "ns",
            "range": "± 12268.030053904691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193146.5909090909,
            "unit": "ns",
            "range": "± 10641.633148187646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155411.11111111112,
            "unit": "ns",
            "range": "± 13945.527326935467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2699586.6666666665,
            "unit": "ns",
            "range": "± 37316.2903275436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515020,
            "unit": "ns",
            "range": "± 29995.38535937058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11227.659574468085,
            "unit": "ns",
            "range": "± 985.8574408184081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54107.07070707071,
            "unit": "ns",
            "range": "± 7887.347818969219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44778.57142857143,
            "unit": "ns",
            "range": "± 729.7824453783591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49094.897959183676,
            "unit": "ns",
            "range": "± 8603.587988632424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2389.4736842105262,
            "unit": "ns",
            "range": "± 358.0305716800716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8872.727272727272,
            "unit": "ns",
            "range": "± 611.5229289086242"
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
          "id": "ab474bea09689bb927e18f9dde80a281f6570266",
          "message": "Merge pull request #3925 from planetarium/introduce/render-observables\n\n✨  Introduce/render observables",
          "timestamp": "2024-09-13T16:30:22+09:00",
          "tree_id": "70a40f4ef5ae91e872ee3981fa8129fa773c0799",
          "url": "https://github.com/planetarium/libplanet/commit/ab474bea09689bb927e18f9dde80a281f6570266"
        },
        "date": 1726213205731,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014666.6666666666,
            "unit": "ns",
            "range": "± 121268.75617606458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1783930.357142857,
            "unit": "ns",
            "range": "± 75793.44879255812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1508328.2352941176,
            "unit": "ns",
            "range": "± 70524.51213815612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6881029.0322580645,
            "unit": "ns",
            "range": "± 209610.6520727551"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30434.615384615383,
            "unit": "ns",
            "range": "± 508.0127194046652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9867726.666666666,
            "unit": "ns",
            "range": "± 71778.72214229613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23446103.333333332,
            "unit": "ns",
            "range": "± 196975.13935471533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58622440,
            "unit": "ns",
            "range": "± 581397.2600554633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117452493.33333333,
            "unit": "ns",
            "range": "± 682173.8304511402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239005826.66666666,
            "unit": "ns",
            "range": "± 4447225.883219893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3365368.59375,
            "unit": "ns",
            "range": "± 7327.922296969973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042857.1484375,
            "unit": "ns",
            "range": "± 2144.3164702043514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729875.8072916666,
            "unit": "ns",
            "range": "± 1536.2377534501102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916540.0911458333,
            "unit": "ns",
            "range": "± 2696.6706608486666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614602.8059895834,
            "unit": "ns",
            "range": "± 1013.1179292852945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559336.73828125,
            "unit": "ns",
            "range": "± 1684.2666260296196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134880.9523809524,
            "unit": "ns",
            "range": "± 77412.5674806675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2203789.7435897435,
            "unit": "ns",
            "range": "± 75886.45533007917"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2602500,
            "unit": "ns",
            "range": "± 58283.797513816644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2248457.1428571427,
            "unit": "ns",
            "range": "± 28374.757587191263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2889855.882352941,
            "unit": "ns",
            "range": "± 58165.061147008986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174260.8108108108,
            "unit": "ns",
            "range": "± 8739.687740379148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167939.70588235295,
            "unit": "ns",
            "range": "± 7329.029169604942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144165,
            "unit": "ns",
            "range": "± 3079.8624371193832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2727285.714285714,
            "unit": "ns",
            "range": "± 33552.252180347394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2462721.4285714286,
            "unit": "ns",
            "range": "± 32355.315306320666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11400.515463917525,
            "unit": "ns",
            "range": "± 1540.1652854577685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51576.666666666664,
            "unit": "ns",
            "range": "± 3510.851556486744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44882.857142857145,
            "unit": "ns",
            "range": "± 1340.6507889137745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53984.536082474224,
            "unit": "ns",
            "range": "± 11042.864779709807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2506.25,
            "unit": "ns",
            "range": "± 412.13500598456176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10134.408602150537,
            "unit": "ns",
            "range": "± 1241.8862427473778"
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
          "id": "956025f8d5d965529b76f89150fb1ba7629b6150",
          "message": "Merge pull request #4017 from planetarium/node/genesis-config\n\nAdd genesis config option for Node",
          "timestamp": "2025-01-02T15:10:11+09:00",
          "tree_id": "85dde7ffac6607f294047e23d5fecedd543934c1",
          "url": "https://github.com/planetarium/libplanet/commit/956025f8d5d965529b76f89150fb1ba7629b6150"
        },
        "date": 1735798756568,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1004484.2105263158,
            "unit": "ns",
            "range": "± 64930.731201976254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1788216.6666666667,
            "unit": "ns",
            "range": "± 67225.95886601058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1547066.2790697673,
            "unit": "ns",
            "range": "± 82035.47670219572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6644811.764705882,
            "unit": "ns",
            "range": "± 209533.38457471857"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41613.333333333336,
            "unit": "ns",
            "range": "± 405.0867044167682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9742707.142857144,
            "unit": "ns",
            "range": "± 82681.88774114654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25119014.285714287,
            "unit": "ns",
            "range": "± 319439.2077884734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63408323.333333336,
            "unit": "ns",
            "range": "± 682961.7260418737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125958426.66666667,
            "unit": "ns",
            "range": "± 1356554.6097515188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250873800,
            "unit": "ns",
            "range": "± 1397641.9382990436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3372121.0286458335,
            "unit": "ns",
            "range": "± 5306.911738127688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083920.8919270833,
            "unit": "ns",
            "range": "± 1472.2089002702842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 796273.7955729166,
            "unit": "ns",
            "range": "± 732.1816371877366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1884525.1255580357,
            "unit": "ns",
            "range": "± 1128.6003468324334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594410.1492745535,
            "unit": "ns",
            "range": "± 569.1899130344954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 535887.63671875,
            "unit": "ns",
            "range": "± 754.4489141141396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141445.4545454546,
            "unit": "ns",
            "range": "± 50808.78933406182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310188,
            "unit": "ns",
            "range": "± 59831.355491915776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2675711.111111111,
            "unit": "ns",
            "range": "± 55185.10976585333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2331821.7391304346,
            "unit": "ns",
            "range": "± 52697.446518453035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2869781.25,
            "unit": "ns",
            "range": "± 54514.02533599343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185733.33333333334,
            "unit": "ns",
            "range": "± 4998.230456102208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176986.95652173914,
            "unit": "ns",
            "range": "± 8177.352387638142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149917.39130434784,
            "unit": "ns",
            "range": "± 3056.0896247437518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2851340,
            "unit": "ns",
            "range": "± 41475.97927888933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2547070,
            "unit": "ns",
            "range": "± 29116.519611480253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14616.494845360825,
            "unit": "ns",
            "range": "± 1821.3822825656302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61564.948453608245,
            "unit": "ns",
            "range": "± 4675.1346067322265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61382.97872340425,
            "unit": "ns",
            "range": "± 4400.889164748716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72538.38383838384,
            "unit": "ns",
            "range": "± 11972.235798481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4525,
            "unit": "ns",
            "range": "± 722.4228241425552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13861.855670103092,
            "unit": "ns",
            "range": "± 1610.9290344245119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "a664afb074b4aea7b5cda2addede947219b1361d",
          "message": "chore: apply API changes",
          "timestamp": "2025-01-14T18:19:18+09:00",
          "tree_id": "852feeda140f7645b0b7fdaaf028233749576170",
          "url": "https://github.com/planetarium/libplanet/commit/a664afb074b4aea7b5cda2addede947219b1361d"
        },
        "date": 1736847008551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 969978.4946236559,
            "unit": "ns",
            "range": "± 91165.25826816111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1781208.163265306,
            "unit": "ns",
            "range": "± 71135.58016426185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1512878.7234042552,
            "unit": "ns",
            "range": "± 110596.9149974579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6514038.888888889,
            "unit": "ns",
            "range": "± 190706.94987377553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29206.140350877195,
            "unit": "ns",
            "range": "± 1097.8904355723769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9795136.666666666,
            "unit": "ns",
            "range": "± 130843.05138309063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23526571.42857143,
            "unit": "ns",
            "range": "± 231276.62899843362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58411916.666666664,
            "unit": "ns",
            "range": "± 283956.9104101835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116416583.33333333,
            "unit": "ns",
            "range": "± 272933.84424313036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234000220,
            "unit": "ns",
            "range": "± 1746022.820256695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3358799.609375,
            "unit": "ns",
            "range": "± 23630.19295731451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1041472.8385416666,
            "unit": "ns",
            "range": "± 2235.9896720097227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728237.2000558035,
            "unit": "ns",
            "range": "± 1538.7222863570466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989886.171875,
            "unit": "ns",
            "range": "± 7456.414945557418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630175.3125,
            "unit": "ns",
            "range": "± 1604.3455980166932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565545.5533854166,
            "unit": "ns",
            "range": "± 1585.4249107834435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199405.882352941,
            "unit": "ns",
            "range": "± 42397.3977766949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249360.606060606,
            "unit": "ns",
            "range": "± 69436.1349523518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746075,
            "unit": "ns",
            "range": "± 51249.65690942071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2332170.3703703703,
            "unit": "ns",
            "range": "± 94923.15785925712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2951720.588235294,
            "unit": "ns",
            "range": "± 59626.44929796133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 93231.16883116883,
            "unit": "ns",
            "range": "± 4695.245628355844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168233.33333333334,
            "unit": "ns",
            "range": "± 6508.270788195761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146269.5652173913,
            "unit": "ns",
            "range": "± 5605.101627197113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2523850,
            "unit": "ns",
            "range": "± 28068.17935505779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2377005.882352941,
            "unit": "ns",
            "range": "± 46135.96035887076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11167.777777777777,
            "unit": "ns",
            "range": "± 1396.611290277233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52384.444444444445,
            "unit": "ns",
            "range": "± 4280.578326755118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43100,
            "unit": "ns",
            "range": "± 924.1848554584865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57246.739130434784,
            "unit": "ns",
            "range": "± 8108.433421233959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2453.684210526316,
            "unit": "ns",
            "range": "± 440.6983158568956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10421.505376344086,
            "unit": "ns",
            "range": "± 1424.5403120004219"
          }
        ]
      }
    ]
  }
}