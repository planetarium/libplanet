window.BENCHMARK_DATA = {
  "lastUpdate": 1721959307308,
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
      }
    ]
  }
}