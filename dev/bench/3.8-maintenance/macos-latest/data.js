window.BENCHMARK_DATA = {
  "lastUpdate": 1698997161344,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "630d3e5a289c2ac575750f4fd85df62a6da710f1",
          "message": "Merge pull request #3466 from planetarium/use-nodejs-18\n\nUse Nodejs 18",
          "timestamp": "2023-10-30T14:38:44+09:00",
          "tree_id": "4a0fa5d771fc7399d64d5ea9217d27380f5eed9d",
          "url": "https://github.com/planetarium/libplanet/commit/630d3e5a289c2ac575750f4fd85df62a6da710f1"
        },
        "date": 1698993362930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7522349.55,
            "unit": "ns",
            "range": "± 93490.25623390696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18650068.29411765,
            "unit": "ns",
            "range": "± 306152.8834219851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47724346.44444445,
            "unit": "ns",
            "range": "± 1588344.7136625051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95109802.71428572,
            "unit": "ns",
            "range": "± 2019757.9832710933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197117205.33333334,
            "unit": "ns",
            "range": "± 5698658.682554818"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40419.684782608696,
            "unit": "ns",
            "range": "± 7154.874972113704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222727.04166666666,
            "unit": "ns",
            "range": "± 20408.42012602521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216417.65625,
            "unit": "ns",
            "range": "± 20727.040834735733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196440.04255319148,
            "unit": "ns",
            "range": "± 18215.378830953778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3748232.9,
            "unit": "ns",
            "range": "± 65695.71568092224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3497179.88,
            "unit": "ns",
            "range": "± 85788.45102261726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13505.631578947368,
            "unit": "ns",
            "range": "± 1891.555433648887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62712.645161290326,
            "unit": "ns",
            "range": "± 7980.190014416898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54689.767441860466,
            "unit": "ns",
            "range": "± 5328.587623099121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64627.11578947368,
            "unit": "ns",
            "range": "± 11599.665792015312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3689.223404255319,
            "unit": "ns",
            "range": "± 860.901657918976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12975.483870967742,
            "unit": "ns",
            "range": "± 2165.4651855538386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1232033.2021276595,
            "unit": "ns",
            "range": "± 120183.11587380368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2808081.5212765955,
            "unit": "ns",
            "range": "± 190390.24148475466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1983447.257894737,
            "unit": "ns",
            "range": "± 219245.20120184272"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10515425.226804124,
            "unit": "ns",
            "range": "± 2236928.8575403467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2885458.43902439,
            "unit": "ns",
            "range": "± 102575.7423485321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042737.8969072164,
            "unit": "ns",
            "range": "± 197814.5022062696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3584223.84,
            "unit": "ns",
            "range": "± 95430.75935492007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3520798.625,
            "unit": "ns",
            "range": "± 172699.35664718138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11317292.576086957,
            "unit": "ns",
            "range": "± 1109116.2678031395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4404642.676897322,
            "unit": "ns",
            "range": "± 25820.968959036356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1374223.0631009615,
            "unit": "ns",
            "range": "± 11552.257596285848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1006070.1293261718,
            "unit": "ns",
            "range": "± 93173.26503703263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2042142.6856770834,
            "unit": "ns",
            "range": "± 30932.39890410085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 655715.4069824219,
            "unit": "ns",
            "range": "± 10097.459324265454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586380.1841517857,
            "unit": "ns",
            "range": "± 15853.493838810495"
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
          "id": "e96f2e6fbed9f95412b2b05e7a210528e095f61b",
          "message": "Merge pull request #3479 from greymistcube/prepare/3.8.0\n\n🔧 Prepare 3.8.0",
          "timestamp": "2023-11-03T16:21:19+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/planetarium/libplanet/commit/e96f2e6fbed9f95412b2b05e7a210528e095f61b"
        },
        "date": 1698997109274,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8488507.97826087,
            "unit": "ns",
            "range": "± 208071.81409396077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21090024.548387095,
            "unit": "ns",
            "range": "± 632122.9923926113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51653676.47058824,
            "unit": "ns",
            "range": "± 1034401.7319398394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103329592.45,
            "unit": "ns",
            "range": "± 1906783.521724849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209610609.3125,
            "unit": "ns",
            "range": "± 4006922.4512839974"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65394.488764044945,
            "unit": "ns",
            "range": "± 6104.74188363287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304000.9516129032,
            "unit": "ns",
            "range": "± 20029.336775425047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310790.375,
            "unit": "ns",
            "range": "± 27115.16275661145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287903.4871794872,
            "unit": "ns",
            "range": "± 9036.805737683022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3971234,
            "unit": "ns",
            "range": "± 33748.18558509056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3741616.9,
            "unit": "ns",
            "range": "± 56453.24708970627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18156.478021978022,
            "unit": "ns",
            "range": "± 2008.5563913640508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86593.41052631578,
            "unit": "ns",
            "range": "± 8012.568486771714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86111.75789473685,
            "unit": "ns",
            "range": "± 7746.770374033008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99955.64130434782,
            "unit": "ns",
            "range": "± 12646.9829678309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6758.381443298969,
            "unit": "ns",
            "range": "± 1826.4802526723527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17938.23076923077,
            "unit": "ns",
            "range": "± 1918.0074329419356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463558.8917525774,
            "unit": "ns",
            "range": "± 157144.4298626106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2764940.4081632653,
            "unit": "ns",
            "range": "± 105077.47834334719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2245866.9368421054,
            "unit": "ns",
            "range": "± 153003.8416714062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10953439.0375,
            "unit": "ns",
            "range": "± 793236.1162728084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3360329.69,
            "unit": "ns",
            "range": "± 309801.4621945036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3377585.4736842103,
            "unit": "ns",
            "range": "± 72766.7781304448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353337.375,
            "unit": "ns",
            "range": "± 201283.96841889896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4317584.047368421,
            "unit": "ns",
            "range": "± 325673.94672957895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15602942.545454545,
            "unit": "ns",
            "range": "± 1807049.0881850985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5777423.53125,
            "unit": "ns",
            "range": "± 70607.81701871402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1797611.2336774555,
            "unit": "ns",
            "range": "± 16977.637717238256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062407.073467548,
            "unit": "ns",
            "range": "± 7922.767962914216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583854.8722098214,
            "unit": "ns",
            "range": "± 58420.72373084647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851469.7617885044,
            "unit": "ns",
            "range": "± 3255.7617865111993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 718188.9259314904,
            "unit": "ns",
            "range": "± 2864.317218064086"
          }
        ]
      }
    ]
  }
}