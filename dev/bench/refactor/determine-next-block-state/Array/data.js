window.BENCHMARK_DATA = {
  "lastUpdate": 1730106166652,
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
          "id": "de936b06196be9c33f60fc2577bb31097dd42c96",
          "message": "feat: execute states by condition",
          "timestamp": "2024-10-28T17:35:07+09:00",
          "tree_id": "533fa0dd1d522a54577c03fd8e0ff0df08b480e0",
          "url": "https://github.com/planetarium/libplanet/commit/de936b06196be9c33f60fc2577bb31097dd42c96"
        },
        "date": 1730104982233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10650689.95,
            "unit": "ns",
            "range": "± 228390.5919733664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26331033.14285714,
            "unit": "ns",
            "range": "± 190856.53816488895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67389705.2,
            "unit": "ns",
            "range": "± 142041.2768670733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136749695.84615386,
            "unit": "ns",
            "range": "± 155594.37526404252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270825885.6666667,
            "unit": "ns",
            "range": "± 306738.6929804151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13080.75,
            "unit": "ns",
            "range": "± 371.2585826417824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54956.985714285714,
            "unit": "ns",
            "range": "± 2656.65389815376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106351.89090909091,
            "unit": "ns",
            "range": "± 4512.3963153071245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92027.04761904762,
            "unit": "ns",
            "range": "± 2130.572915349073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2859210.5,
            "unit": "ns",
            "range": "± 162945.4539629717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2708385.63,
            "unit": "ns",
            "range": "± 177915.8277136223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5549.969072164949,
            "unit": "ns",
            "range": "± 962.1026609897226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27611.634831460673,
            "unit": "ns",
            "range": "± 1791.1414668699858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23580.340659340658,
            "unit": "ns",
            "range": "± 1665.5864780896597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30682.05154639175,
            "unit": "ns",
            "range": "± 5788.841634218827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1399.3777777777777,
            "unit": "ns",
            "range": "± 286.9652751876881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5040.4631578947365,
            "unit": "ns",
            "range": "± 898.1434493125879"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 692577.4255319149,
            "unit": "ns",
            "range": "± 61989.99946440188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1282105.3333333333,
            "unit": "ns",
            "range": "± 44751.80743447668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1046564.0689655172,
            "unit": "ns",
            "range": "± 57098.88453127714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8785335.9,
            "unit": "ns",
            "range": "± 1336892.4176921712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2103198.6097560977,
            "unit": "ns",
            "range": "± 73069.67463109373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2235871.9166666665,
            "unit": "ns",
            "range": "± 26020.417998383615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2553441.3333333335,
            "unit": "ns",
            "range": "± 26607.383620933404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2259960.9814814813,
            "unit": "ns",
            "range": "± 94312.09872055188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2802778.6666666665,
            "unit": "ns",
            "range": "± 86655.58467601305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048311.433854167,
            "unit": "ns",
            "range": "± 29989.34595173082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 919881.7251953125,
            "unit": "ns",
            "range": "± 8039.237560640707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616653.521484375,
            "unit": "ns",
            "range": "± 6278.860554924251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1644537.780859375,
            "unit": "ns",
            "range": "± 17806.59096435388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 472873.7854942909,
            "unit": "ns",
            "range": "± 776.2363943804576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 429572.68973214284,
            "unit": "ns",
            "range": "± 924.5452115283689"
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
          "id": "89bac0812464be1baa837fd089c9c2a391a9c632",
          "message": "feat: execute states by condition",
          "timestamp": "2024-10-28T17:43:11+09:00",
          "tree_id": "cf6f8daf6f072698a7ea7449249c868667161f81",
          "url": "https://github.com/planetarium/libplanet/commit/89bac0812464be1baa837fd089c9c2a391a9c632"
        },
        "date": 1730106117532,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10585285.692307692,
            "unit": "ns",
            "range": "± 119643.30145087147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26217051,
            "unit": "ns",
            "range": "± 143991.35692491033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66886058.733333334,
            "unit": "ns",
            "range": "± 159886.6355200578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133992118.92857143,
            "unit": "ns",
            "range": "± 189020.0414041262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271328649.93333334,
            "unit": "ns",
            "range": "± 563555.2144818093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13178.25925925926,
            "unit": "ns",
            "range": "± 370.8315595847332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 54508.397260273974,
            "unit": "ns",
            "range": "± 2653.7260845194737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106027.97435897436,
            "unit": "ns",
            "range": "± 3647.238252122596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91302.5625,
            "unit": "ns",
            "range": "± 1368.953905664224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2845763.0204081633,
            "unit": "ns",
            "range": "± 172655.73924002703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2804127.0412371135,
            "unit": "ns",
            "range": "± 164730.00740636923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5549.319587628866,
            "unit": "ns",
            "range": "± 1029.6488534365303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27389.045454545456,
            "unit": "ns",
            "range": "± 1971.5563833232814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22784.850574712644,
            "unit": "ns",
            "range": "± 1382.4026567246726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30995.042553191488,
            "unit": "ns",
            "range": "± 4492.313637843022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1375.3440860215053,
            "unit": "ns",
            "range": "± 206.47757508639464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4986.89247311828,
            "unit": "ns",
            "range": "± 678.1265026008692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678927.2209302326,
            "unit": "ns",
            "range": "± 36596.39516493752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1289920.3363636364,
            "unit": "ns",
            "range": "± 45950.01906853416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1034627.3492063492,
            "unit": "ns",
            "range": "± 44813.50172809699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8957693.02,
            "unit": "ns",
            "range": "± 1366388.731492047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2125984.230769231,
            "unit": "ns",
            "range": "± 20724.306281730504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257008.6,
            "unit": "ns",
            "range": "± 53653.88251484385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2534988.53125,
            "unit": "ns",
            "range": "± 72593.6132199078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2230806.3448275863,
            "unit": "ns",
            "range": "± 65173.88655373948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2880620.703703704,
            "unit": "ns",
            "range": "± 121102.06826235457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3055742.4557291665,
            "unit": "ns",
            "range": "± 56245.47706523407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922043.0044921875,
            "unit": "ns",
            "range": "± 5460.186343838223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 616152.7673177083,
            "unit": "ns",
            "range": "± 6020.421343544854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1615543.8631510416,
            "unit": "ns",
            "range": "± 13199.49599828988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463692.22965494794,
            "unit": "ns",
            "range": "± 1491.4146138717786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420900.26722935267,
            "unit": "ns",
            "range": "± 1097.7773025638896"
          }
        ]
      }
    ]
  }
}