window.BENCHMARK_DATA = {
  "lastUpdate": 1700799561032,
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
          "id": "ca03af071a8c73e225c5a6c31934cac1af45e74a",
          "message": "Merge pull request #3481 from greymistcube/chore/bencoded-address\n\n🧹 Use `Address.Bencoded` instead of `Address.ByteArray`",
          "timestamp": "2023-11-07T14:00:29+09:00",
          "tree_id": "ea3cfcea6fe14dec7636971cca2796d673d0f37c",
          "url": "https://github.com/planetarium/libplanet/commit/ca03af071a8c73e225c5a6c31934cac1af45e74a"
        },
        "date": 1699334133414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8015240.357142857,
            "unit": "ns",
            "range": "± 109444.00403972459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19712287.05882353,
            "unit": "ns",
            "range": "± 359389.77646812494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48701834.35714286,
            "unit": "ns",
            "range": "± 656844.8815122952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98979254.18181819,
            "unit": "ns",
            "range": "± 2322836.353027267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199326801.3846154,
            "unit": "ns",
            "range": "± 2859779.172890031"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43295.82584269663,
            "unit": "ns",
            "range": "± 9190.198757341335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273811.7840909091,
            "unit": "ns",
            "range": "± 45953.675300828734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236124.98863636365,
            "unit": "ns",
            "range": "± 16363.081749618466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216594.19072164947,
            "unit": "ns",
            "range": "± 14617.952481709504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3846724.5,
            "unit": "ns",
            "range": "± 58447.84865892964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3553681.3333333335,
            "unit": "ns",
            "range": "± 19643.975420808623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17618.922222222223,
            "unit": "ns",
            "range": "± 2992.5373482046134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74305.5808080808,
            "unit": "ns",
            "range": "± 11266.271202564314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66888.5625,
            "unit": "ns",
            "range": "± 10889.958018199974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74444.05681818182,
            "unit": "ns",
            "range": "± 12087.305641659581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4374.806451612903,
            "unit": "ns",
            "range": "± 961.3948342638568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13562.265957446809,
            "unit": "ns",
            "range": "± 2215.700589102479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1124601.6597938144,
            "unit": "ns",
            "range": "± 100929.34618664834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2417886.043956044,
            "unit": "ns",
            "range": "± 149802.63498468112"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1759289.5494505495,
            "unit": "ns",
            "range": "± 153666.9307968998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7906729,
            "unit": "ns",
            "range": "± 494199.9641198376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2991849.052631579,
            "unit": "ns",
            "range": "± 126528.66333836617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3125613.484375,
            "unit": "ns",
            "range": "± 144746.21749538733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3678001.1153846155,
            "unit": "ns",
            "range": "± 96814.32519429215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3904464.466666667,
            "unit": "ns",
            "range": "± 67330.25669665975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13027628.777108435,
            "unit": "ns",
            "range": "± 2642178.368390815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4430022.728515625,
            "unit": "ns",
            "range": "± 62896.62093552819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1454187.1647135417,
            "unit": "ns",
            "range": "± 82968.8064971512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 914586.2025991586,
            "unit": "ns",
            "range": "± 10369.348937867526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2022658.1024639423,
            "unit": "ns",
            "range": "± 5197.334886951865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642451.1326622596,
            "unit": "ns",
            "range": "± 1958.4523448716395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577071.2416294643,
            "unit": "ns",
            "range": "± 897.38961680736"
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
          "id": "4b75f0ec3db1b6fc2c937a18b699e1878fa8694c",
          "message": "Merge pull request #3486 from greymistcube/refactor/crypto\n\n♻️ Refactor crypto",
          "timestamp": "2023-11-13T23:52:07+09:00",
          "tree_id": "de06c7658cf66089c6b29abf46d9bd761dbc0c8c",
          "url": "https://github.com/planetarium/libplanet/commit/4b75f0ec3db1b6fc2c937a18b699e1878fa8694c"
        },
        "date": 1699888496097,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9490453.5,
            "unit": "ns",
            "range": "± 199506.42902865238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27063620.193181816,
            "unit": "ns",
            "range": "± 4525787.2328800205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65260238.93333333,
            "unit": "ns",
            "range": "± 13956712.497396616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114593195.42857143,
            "unit": "ns",
            "range": "± 1965974.340100973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299191734.92391306,
            "unit": "ns",
            "range": "± 77194461.04237248"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58687.25,
            "unit": "ns",
            "range": "± 12454.91328235083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366072.47872340423,
            "unit": "ns",
            "range": "± 82533.39638949535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361201.8505154639,
            "unit": "ns",
            "range": "± 102891.00885059165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 330479.63265306124,
            "unit": "ns",
            "range": "± 81981.68472383013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5905072.37755102,
            "unit": "ns",
            "range": "± 1164476.0384907734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5117005.958333333,
            "unit": "ns",
            "range": "± 1039220.5012126705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25332.054347826088,
            "unit": "ns",
            "range": "± 6576.873694273021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127068.10204081633,
            "unit": "ns",
            "range": "± 24090.694080670433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111425.25757575757,
            "unit": "ns",
            "range": "± 25000.455795065795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124634.95454545454,
            "unit": "ns",
            "range": "± 24551.50071865547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7315.762886597938,
            "unit": "ns",
            "range": "± 2563.8071900544537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16405.913978494624,
            "unit": "ns",
            "range": "± 4239.210528572902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314442.1559139786,
            "unit": "ns",
            "range": "± 160239.94812661246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2895056.6279069767,
            "unit": "ns",
            "range": "± 319206.83452228334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2792900.946236559,
            "unit": "ns",
            "range": "± 882650.6771955163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14394531.56701031,
            "unit": "ns",
            "range": "± 3540528.271176833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4047298.71875,
            "unit": "ns",
            "range": "± 825360.0528470133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4276608.59375,
            "unit": "ns",
            "range": "± 908818.4291856397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5327818.922680412,
            "unit": "ns",
            "range": "± 1182385.390066463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5948899.868421053,
            "unit": "ns",
            "range": "± 1442060.799649054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17550829.639784947,
            "unit": "ns",
            "range": "± 4076214.76939629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7685122.012040915,
            "unit": "ns",
            "range": "± 1322700.4247465911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1903253.3188671875,
            "unit": "ns",
            "range": "± 347259.9323930222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905498.0279541016,
            "unit": "ns",
            "range": "± 17669.03043545606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2065157.8216911764,
            "unit": "ns",
            "range": "± 65866.56484235001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 637453.9266183035,
            "unit": "ns",
            "range": "± 10928.525702373394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576281.2805989584,
            "unit": "ns",
            "range": "± 6610.500194151378"
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
          "id": "06d73575e43e359f575e7cac611238e04eba1f29",
          "message": "Merge pull request #3485 from greymistcube/refactor/remove-rehearsal\n\n♻️ Remove `Rehearsal` from `IActionContext`",
          "timestamp": "2023-11-14T11:35:13+09:00",
          "tree_id": "ba2912dd11fe2a26c28195cddb7aeebcd4aaf042",
          "url": "https://github.com/planetarium/libplanet/commit/06d73575e43e359f575e7cac611238e04eba1f29"
        },
        "date": 1699930488816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8917804.181818182,
            "unit": "ns",
            "range": "± 811343.3568192761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23960060.152173914,
            "unit": "ns",
            "range": "± 3581594.6706067794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79446262.83146067,
            "unit": "ns",
            "range": "± 24770596.712183356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153638800.86263737,
            "unit": "ns",
            "range": "± 34299180.3183271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267217129.44210526,
            "unit": "ns",
            "range": "± 33442107.250606116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73087.37755102041,
            "unit": "ns",
            "range": "± 21920.756118682326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365089.8163265306,
            "unit": "ns",
            "range": "± 104001.20288733351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344975.16842105263,
            "unit": "ns",
            "range": "± 92213.06011653903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305103.6082474227,
            "unit": "ns",
            "range": "± 85202.56425419815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5438895.45,
            "unit": "ns",
            "range": "± 1134626.3670937365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4413119.708333333,
            "unit": "ns",
            "range": "± 825402.7232281464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25004.05154639175,
            "unit": "ns",
            "range": "± 6825.320879775443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92568.93617021276,
            "unit": "ns",
            "range": "± 19758.87636685923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109793.72448979592,
            "unit": "ns",
            "range": "± 25090.162618079266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94996.09375,
            "unit": "ns",
            "range": "± 19699.073294836206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7247.5368421052635,
            "unit": "ns",
            "range": "± 1810.7900815315124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23682.85789473684,
            "unit": "ns",
            "range": "± 6017.175853631621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1260697.7411764706,
            "unit": "ns",
            "range": "± 165030.16032633846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2653564.8,
            "unit": "ns",
            "range": "± 226810.27252313562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471338.8684210526,
            "unit": "ns",
            "range": "± 624880.3937856453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11810612.127659574,
            "unit": "ns",
            "range": "± 3219421.2445212295"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3366559.1931818184,
            "unit": "ns",
            "range": "± 447674.9539576642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4478337.494623655,
            "unit": "ns",
            "range": "± 1219869.2241107651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5244883.09,
            "unit": "ns",
            "range": "± 1299137.1481956013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4948366.731578947,
            "unit": "ns",
            "range": "± 1019751.3003438158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17057767.17777778,
            "unit": "ns",
            "range": "± 4268559.172959517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4899720.583533654,
            "unit": "ns",
            "range": "± 347756.17114208575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493886.4018627566,
            "unit": "ns",
            "range": "± 70829.151574625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 941190.64453125,
            "unit": "ns",
            "range": "± 19587.2898945495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2151369.268973214,
            "unit": "ns",
            "range": "± 49480.486809014816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643192.2566817434,
            "unit": "ns",
            "range": "± 13433.773017788462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576269.7672293527,
            "unit": "ns",
            "range": "± 3322.566435825017"
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
          "id": "2129953e0062c014183e2943559eaea1a324a6d0",
          "message": "Merge pull request #3480 from greymistcube/refactor/updated-addresses\n\n♻️ Disallow creation of new `Transaction`s with a non-empty `UpdatedAddresses`",
          "timestamp": "2023-11-15T17:22:36+09:00",
          "tree_id": "5b0805250ca7bc9038df196c115713b35ae40f22",
          "url": "https://github.com/planetarium/libplanet/commit/2129953e0062c014183e2943559eaea1a324a6d0"
        },
        "date": 1700038268987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9058987.67857143,
            "unit": "ns",
            "range": "± 247668.3192194087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22474606.14736842,
            "unit": "ns",
            "range": "± 1634926.93716045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67357479.35955057,
            "unit": "ns",
            "range": "± 5571313.110310219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113823660.55376343,
            "unit": "ns",
            "range": "± 11658199.292430528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272611688.56842107,
            "unit": "ns",
            "range": "± 26085971.761363454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60112.76136363636,
            "unit": "ns",
            "range": "± 10776.00363621345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307001.6868131868,
            "unit": "ns",
            "range": "± 33897.94311915042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285378.62790697673,
            "unit": "ns",
            "range": "± 24874.518364262567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290440.03529411764,
            "unit": "ns",
            "range": "± 25504.740191751403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6680251.816326531,
            "unit": "ns",
            "range": "± 1394159.2234400415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5883953.405263158,
            "unit": "ns",
            "range": "± 1215624.2593894857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27619.91,
            "unit": "ns",
            "range": "± 6289.488929302458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125260.36842105263,
            "unit": "ns",
            "range": "± 28099.6894349661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118051.45833333333,
            "unit": "ns",
            "range": "± 22281.473466308835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121131.43684210526,
            "unit": "ns",
            "range": "± 28405.999584973255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8757.983516483517,
            "unit": "ns",
            "range": "± 1218.6750306299175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27332.18556701031,
            "unit": "ns",
            "range": "± 5489.444151296759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649658.355670103,
            "unit": "ns",
            "range": "± 280119.45365612145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4157303.4680851065,
            "unit": "ns",
            "range": "± 1156237.2329426312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505811.776595745,
            "unit": "ns",
            "range": "± 784642.3623393984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10724063.397849463,
            "unit": "ns",
            "range": "± 2173927.194113601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3464252.4431818184,
            "unit": "ns",
            "range": "± 256597.18989916114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3474937.7684210525,
            "unit": "ns",
            "range": "± 417021.4070854144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4202985.08988764,
            "unit": "ns",
            "range": "± 349849.30414824974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4399802.141304348,
            "unit": "ns",
            "range": "± 312128.909173884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13712015.21978022,
            "unit": "ns",
            "range": "± 1628675.9417111857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6143641.849244505,
            "unit": "ns",
            "range": "± 547070.3597875132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1830023.0209635417,
            "unit": "ns",
            "range": "± 33456.22971217549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158080.6439615886,
            "unit": "ns",
            "range": "± 85287.72942239666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2425042.2367578126,
            "unit": "ns",
            "range": "± 373194.5402339119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 709532.399140625,
            "unit": "ns",
            "range": "± 81864.35445738515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 593334.946105957,
            "unit": "ns",
            "range": "± 22080.253000569668"
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
          "id": "e9b0caa717aaa65581eaa006e5d00bd30634b595",
          "message": "Merge pull request #3487 from riemannulus/refactor/use-different-rocksdb-backend",
          "timestamp": "2023-11-15T19:02:18+09:00",
          "tree_id": "e19ea67d6945b5b1ba0d7d8e25d043cb55512b96",
          "url": "https://github.com/planetarium/libplanet/commit/e9b0caa717aaa65581eaa006e5d00bd30634b595"
        },
        "date": 1700043611508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8127757.08,
            "unit": "ns",
            "range": "± 210538.01854552698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19723655.666666668,
            "unit": "ns",
            "range": "± 183955.92289368305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50618437.92,
            "unit": "ns",
            "range": "± 3225035.403327802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102840905.75806452,
            "unit": "ns",
            "range": "± 3098181.867429444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207297007.7857143,
            "unit": "ns",
            "range": "± 932332.5253535993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65141.897849462366,
            "unit": "ns",
            "range": "± 12012.192585886647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301958.07446808513,
            "unit": "ns",
            "range": "± 21280.033055516087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281691.42307692306,
            "unit": "ns",
            "range": "± 18297.50130982113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294578.9375,
            "unit": "ns",
            "range": "± 9094.341792627383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129569.289473684,
            "unit": "ns",
            "range": "± 142145.85657067614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3887980.5172413792,
            "unit": "ns",
            "range": "± 161991.41545602676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24297.372093023256,
            "unit": "ns",
            "range": "± 4572.171038040286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104656.80434782608,
            "unit": "ns",
            "range": "± 14425.492852524056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102037.99462365592,
            "unit": "ns",
            "range": "± 13027.52366657313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102117.86170212766,
            "unit": "ns",
            "range": "± 16405.567274852165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5681.2052631578945,
            "unit": "ns",
            "range": "± 1211.0575023128235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19152.032967032967,
            "unit": "ns",
            "range": "± 2951.7847461815345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1514816.37,
            "unit": "ns",
            "range": "± 124908.95052002171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956060.027777778,
            "unit": "ns",
            "range": "± 145878.8438601398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2485335.73,
            "unit": "ns",
            "range": "± 260672.85489798072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10685432.26923077,
            "unit": "ns",
            "range": "± 492683.75143299234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019354.630769231,
            "unit": "ns",
            "range": "± 113679.0114181936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3291967.247368421,
            "unit": "ns",
            "range": "± 220280.8968414554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4273162.280701755,
            "unit": "ns",
            "range": "± 173202.88895548752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4553316.195876288,
            "unit": "ns",
            "range": "± 369966.3271772919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15682175.978947368,
            "unit": "ns",
            "range": "± 2331847.9867762583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5921895.82398897,
            "unit": "ns",
            "range": "± 187821.9468605332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1808148.0766493056,
            "unit": "ns",
            "range": "± 67346.84217609114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087880.521875,
            "unit": "ns",
            "range": "± 13599.864834553538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2484528.7463727677,
            "unit": "ns",
            "range": "± 27573.13158867544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 889870.4131556919,
            "unit": "ns",
            "range": "± 5807.198528583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737457.7639508928,
            "unit": "ns",
            "range": "± 7989.51425274182"
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
          "id": "754e461e6b508e08f953370d290b29353252da8c",
          "message": "Merge pull request #3493 from greymistcube/refactor/remove-rehearsal\n\n🧹 Remove `DumbAction` rehearsal code",
          "timestamp": "2023-11-15T21:34:11+09:00",
          "tree_id": "949aef8401dbf12e76a0babf2cb44532db090d7f",
          "url": "https://github.com/planetarium/libplanet/commit/754e461e6b508e08f953370d290b29353252da8c"
        },
        "date": 1700052871764,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7898121.796610169,
            "unit": "ns",
            "range": "± 338505.3413053238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19816598.7,
            "unit": "ns",
            "range": "± 592840.4282045915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50868098.825,
            "unit": "ns",
            "range": "± 2648048.4529438703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139311780.25531915,
            "unit": "ns",
            "range": "± 43349245.8721401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224557268.79213482,
            "unit": "ns",
            "range": "± 15706325.468955165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56189.64606741573,
            "unit": "ns",
            "range": "± 10952.084154657257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273940.5543478261,
            "unit": "ns",
            "range": "± 43845.0668873894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258810.44086021505,
            "unit": "ns",
            "range": "± 32574.684083843782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248839.93617021278,
            "unit": "ns",
            "range": "± 34360.49025948591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3981594.5694444445,
            "unit": "ns",
            "range": "± 172983.77856920462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3549286.936170213,
            "unit": "ns",
            "range": "± 137072.09644109447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15277.159574468085,
            "unit": "ns",
            "range": "± 2221.7583480338003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68335.9247311828,
            "unit": "ns",
            "range": "± 9817.379071383033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67539.01612903226,
            "unit": "ns",
            "range": "± 7045.611695622878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78335.0947368421,
            "unit": "ns",
            "range": "± 12963.588203423877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7724.489247311828,
            "unit": "ns",
            "range": "± 1577.4865774570117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26658.639175257733,
            "unit": "ns",
            "range": "± 6389.735894036048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1155640.4213483145,
            "unit": "ns",
            "range": "± 99850.74479637832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2558856.9777777777,
            "unit": "ns",
            "range": "± 346513.19006741454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1930119.8763440861,
            "unit": "ns",
            "range": "± 239562.66282163787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8562365.67857143,
            "unit": "ns",
            "range": "± 794333.5855886367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300092.0465116277,
            "unit": "ns",
            "range": "± 252525.63756348554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3142126.847826087,
            "unit": "ns",
            "range": "± 206648.0479707453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4006170.1741573033,
            "unit": "ns",
            "range": "± 346011.7044132643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3983617.761904762,
            "unit": "ns",
            "range": "± 145228.25715959226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13809815.872340426,
            "unit": "ns",
            "range": "± 2787793.6506509306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4405427.679542824,
            "unit": "ns",
            "range": "± 87291.99825887683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1346521.8780691964,
            "unit": "ns",
            "range": "± 10066.937047607149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 893394.6259765625,
            "unit": "ns",
            "range": "± 6244.201039314709"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002427.8088541667,
            "unit": "ns",
            "range": "± 36348.82903150849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625370.9019252232,
            "unit": "ns",
            "range": "± 4207.482657525615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569339.6487165178,
            "unit": "ns",
            "range": "± 5210.990057214607"
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
          "id": "2b7d10652985bfdfc28b0fc950b95b67ece2aafa",
          "message": "Merge pull request #3511 from greymistcube/port/3.7.1-to-3.8.0\n\n🔀 Port 3.7.1 to 3.8.0",
          "timestamp": "2023-11-21T15:12:57+09:00",
          "tree_id": "3d17b59700923895a777cec17203c71dd9223b48",
          "url": "https://github.com/planetarium/libplanet/commit/2b7d10652985bfdfc28b0fc950b95b67ece2aafa"
        },
        "date": 1700548169733,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8652743.135416666,
            "unit": "ns",
            "range": "± 541516.5009604071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20660943.64285714,
            "unit": "ns",
            "range": "± 251414.75871122637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51054816.266666666,
            "unit": "ns",
            "range": "± 645393.8373835298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100595224.65384616,
            "unit": "ns",
            "range": "± 1050907.6908338845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208408132.23076922,
            "unit": "ns",
            "range": "± 1135747.7440894137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53949.166666666664,
            "unit": "ns",
            "range": "± 4808.842824317379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247061.9835164835,
            "unit": "ns",
            "range": "± 18257.03178465318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254688.71739130435,
            "unit": "ns",
            "range": "± 26706.30574726702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237331.11363636365,
            "unit": "ns",
            "range": "± 8510.940852578451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3966458.0384615385,
            "unit": "ns",
            "range": "± 108151.25639149304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3701668.269230769,
            "unit": "ns",
            "range": "± 39790.85645629711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18872.255102040817,
            "unit": "ns",
            "range": "± 3524.843710247978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82482.03125,
            "unit": "ns",
            "range": "± 10889.037819320498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92123.15934065935,
            "unit": "ns",
            "range": "± 7719.09472559197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90939.03157894737,
            "unit": "ns",
            "range": "± 17983.56313619357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7251.355670103093,
            "unit": "ns",
            "range": "± 1116.3052896879167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20831.846153846152,
            "unit": "ns",
            "range": "± 5579.650598226613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1117425.0824175824,
            "unit": "ns",
            "range": "± 90165.61544046055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2423697.1021505375,
            "unit": "ns",
            "range": "± 148528.70245036818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647959.456521739,
            "unit": "ns",
            "range": "± 122192.14868128694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7136838.325842696,
            "unit": "ns",
            "range": "± 632416.7962497801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3048001.2558139535,
            "unit": "ns",
            "range": "± 110708.33115273429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3148958.543859649,
            "unit": "ns",
            "range": "± 136130.00915433618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3749718.4,
            "unit": "ns",
            "range": "± 113480.17171162547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3616499.6428571427,
            "unit": "ns",
            "range": "± 218861.3106425859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13717317.791666666,
            "unit": "ns",
            "range": "± 2578882.3463235544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4913463.738029234,
            "unit": "ns",
            "range": "± 148277.4413633228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1422586.0287760417,
            "unit": "ns",
            "range": "± 22304.3967525447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 956182.7205161237,
            "unit": "ns",
            "range": "± 53704.49704202952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2271276.6209574854,
            "unit": "ns",
            "range": "± 83604.0564683093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 677737.910531851,
            "unit": "ns",
            "range": "± 27348.749313644686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602777.659125434,
            "unit": "ns",
            "range": "± 12812.936899938115"
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
          "id": "9cc8a432a827fc18443789509cca7b3762c7f007",
          "message": "Merge pull request #3488 from riemannulus/feature/introduce-rocksdb-instance-type\n\n➕  introduce: `RocksDb` instance type",
          "timestamp": "2023-11-24T11:16:28+09:00",
          "tree_id": "22ccaf4463569cdc9bdc0e6d657992818a503cb0",
          "url": "https://github.com/planetarium/libplanet/commit/9cc8a432a827fc18443789509cca7b3762c7f007"
        },
        "date": 1700793248523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8120217.133333334,
            "unit": "ns",
            "range": "± 140829.6028224315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21018186.5625,
            "unit": "ns",
            "range": "± 651053.8152202433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54061092.88235294,
            "unit": "ns",
            "range": "± 889366.8741714441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110236341.5263158,
            "unit": "ns",
            "range": "± 2424048.197878256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225270268.8,
            "unit": "ns",
            "range": "± 4039794.486883411"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68949.83333333333,
            "unit": "ns",
            "range": "± 10034.781906388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339837.97191011236,
            "unit": "ns",
            "range": "± 35502.79777006374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352386.8484848485,
            "unit": "ns",
            "range": "± 56392.349562243624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317850.11363636365,
            "unit": "ns",
            "range": "± 24460.703435544347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4248077.292682927,
            "unit": "ns",
            "range": "± 213765.25382058977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4002264.952631579,
            "unit": "ns",
            "range": "± 249848.45841462642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22162.76923076923,
            "unit": "ns",
            "range": "± 3343.6136574966754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107602.47311827957,
            "unit": "ns",
            "range": "± 14879.459678998546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109072.82142857143,
            "unit": "ns",
            "range": "± 10563.504687412275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 133496.75773195876,
            "unit": "ns",
            "range": "± 28787.450757042247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6845.25,
            "unit": "ns",
            "range": "± 1017.1399981625287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20342.75,
            "unit": "ns",
            "range": "± 3004.019752334161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489739.0206185568,
            "unit": "ns",
            "range": "± 191757.6348518043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2760239.0545454547,
            "unit": "ns",
            "range": "± 109434.22177735578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2268040.8494623657,
            "unit": "ns",
            "range": "± 258319.06496297682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8772331.822580645,
            "unit": "ns",
            "range": "± 265722.72273071756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3336092.1578947366,
            "unit": "ns",
            "range": "± 112623.37718386321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3396115.2967032967,
            "unit": "ns",
            "range": "± 191599.09797308515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4307354.790697674,
            "unit": "ns",
            "range": "± 159443.2545032809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4136605.318681319,
            "unit": "ns",
            "range": "± 263085.9905295385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18199374.833333332,
            "unit": "ns",
            "range": "± 3392200.5351116424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6271633.1015625,
            "unit": "ns",
            "range": "± 106494.0513147936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1790186.472377232,
            "unit": "ns",
            "range": "± 38927.71101087772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159428.2459635416,
            "unit": "ns",
            "range": "± 13051.056333382869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087719.3153545675,
            "unit": "ns",
            "range": "± 83828.70781358794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 947343.1146104601,
            "unit": "ns",
            "range": "± 31568.26082452865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789478.349609375,
            "unit": "ns",
            "range": "± 13347.698150779986"
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
          "id": "115a4231a838e45a141426ede38a5d933c9a432c",
          "message": "Merge pull request #3515 from greymistcube/release/3.8.0\n\n🚀 Release 3.8.0",
          "timestamp": "2023-11-24T11:30:13+09:00",
          "tree_id": "f9a64dcd90f39b126c39cd08c734efccb86d5d65",
          "url": "https://github.com/planetarium/libplanet/commit/115a4231a838e45a141426ede38a5d933c9a432c"
        },
        "date": 1700794369611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12426765.336734693,
            "unit": "ns",
            "range": "± 2681625.2423046627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 52758118.989583336,
            "unit": "ns",
            "range": "± 39137565.58860159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 92110542.57954545,
            "unit": "ns",
            "range": "± 36520460.807500765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 220786009.61340207,
            "unit": "ns",
            "range": "± 72246321.60204457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 357580885.1041667,
            "unit": "ns",
            "range": "± 73722187.35791744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74767.80208333333,
            "unit": "ns",
            "range": "± 23852.80025472891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267786.2413793103,
            "unit": "ns",
            "range": "± 29308.137935648727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318833.0425531915,
            "unit": "ns",
            "range": "± 75314.93209597832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267210.58974358975,
            "unit": "ns",
            "range": "± 16134.106754266728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6878293.23,
            "unit": "ns",
            "range": "± 1705663.7627603796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915789.688888889,
            "unit": "ns",
            "range": "± 340743.68420241436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17410.902173913044,
            "unit": "ns",
            "range": "± 4479.191111384166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102746.51098901099,
            "unit": "ns",
            "range": "± 13187.441378064128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105489.6237113402,
            "unit": "ns",
            "range": "± 19500.030705775902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95047.10869565218,
            "unit": "ns",
            "range": "± 20347.373701500026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5650.673469387755,
            "unit": "ns",
            "range": "± 2035.2736677380365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24665.5,
            "unit": "ns",
            "range": "± 5575.017783308904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1070094.8469387756,
            "unit": "ns",
            "range": "± 103538.70516258338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2307175.3440860217,
            "unit": "ns",
            "range": "± 184782.35794544977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1707084.445054945,
            "unit": "ns",
            "range": "± 169191.34391670692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7661708.909090909,
            "unit": "ns",
            "range": "± 893086.3046192024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4467747.957446809,
            "unit": "ns",
            "range": "± 1167285.5933334876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4783662.833333333,
            "unit": "ns",
            "range": "± 1163971.9183386608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5973656.12371134,
            "unit": "ns",
            "range": "± 1312820.6229060232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5004812.44680851,
            "unit": "ns",
            "range": "± 1115743.974196786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18021189.279569894,
            "unit": "ns",
            "range": "± 5115101.753879587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5048597.1875,
            "unit": "ns",
            "range": "± 379822.2776261828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533706.8578515626,
            "unit": "ns",
            "range": "± 60769.84699046368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 996697.7065429688,
            "unit": "ns",
            "range": "± 37017.996635895724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2476727.6871484374,
            "unit": "ns",
            "range": "± 267058.37678279384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 686063.1181107955,
            "unit": "ns",
            "range": "± 29158.06197434939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 644213.6620096186,
            "unit": "ns",
            "range": "± 37023.16255340608"
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
          "id": "8c75a4827af9db7cdd6ae0f710f48357311b619f",
          "message": "Merge pull request #3516 from greymistcube/prepare/3.8.1\n\n🔧 Prepare 3.8.1",
          "timestamp": "2023-11-24T13:03:45+09:00",
          "tree_id": "45fc17974df334c07b6218760a11d9124b75b336",
          "url": "https://github.com/planetarium/libplanet/commit/8c75a4827af9db7cdd6ae0f710f48357311b619f"
        },
        "date": 1700799488142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7536902.884615385,
            "unit": "ns",
            "range": "± 95394.50602938171"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19030296.714285713,
            "unit": "ns",
            "range": "± 218374.39443531152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46977121.21428572,
            "unit": "ns",
            "range": "± 820290.1434529528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94155684.25,
            "unit": "ns",
            "range": "± 2144258.115693358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191461398.22727272,
            "unit": "ns",
            "range": "± 4689542.026680034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37827.90425531915,
            "unit": "ns",
            "range": "± 6813.43692196964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219774.6739130435,
            "unit": "ns",
            "range": "± 13234.046840728979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213338.85483870967,
            "unit": "ns",
            "range": "± 9600.120946722365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200557.29591836734,
            "unit": "ns",
            "range": "± 20867.274817978872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3843121.46875,
            "unit": "ns",
            "range": "± 116594.40130377654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3565756.846153846,
            "unit": "ns",
            "range": "± 95282.37866833188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16220.331578947369,
            "unit": "ns",
            "range": "± 3036.6148413548995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86966.16315789474,
            "unit": "ns",
            "range": "± 22207.228958449316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70899.59278350516,
            "unit": "ns",
            "range": "± 9893.453541654952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83194.48969072165,
            "unit": "ns",
            "range": "± 14458.029148693677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5721.30412371134,
            "unit": "ns",
            "range": "± 1278.6475165773736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15275.112244897959,
            "unit": "ns",
            "range": "± 2459.1361010647333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1217402.8666666667,
            "unit": "ns",
            "range": "± 21678.58479127226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2274662.5454545454,
            "unit": "ns",
            "range": "± 150070.87443776615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1516083.0106382978,
            "unit": "ns",
            "range": "± 109443.77198267421"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6709763.058139535,
            "unit": "ns",
            "range": "± 449502.9259118632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3176545.2666666666,
            "unit": "ns",
            "range": "± 52689.47600187708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3004401.5094339624,
            "unit": "ns",
            "range": "± 125325.28186139991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3594584.8604651163,
            "unit": "ns",
            "range": "± 112281.94876432007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3442535.475609756,
            "unit": "ns",
            "range": "± 181024.22355627915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12987337.5,
            "unit": "ns",
            "range": "± 2182590.070289713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4670276.812144887,
            "unit": "ns",
            "range": "± 236543.9103983213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1406581.51171875,
            "unit": "ns",
            "range": "± 24564.95431549971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 929054.5637478299,
            "unit": "ns",
            "range": "± 25530.105551567452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2194357.3046875,
            "unit": "ns",
            "range": "± 152496.77858255466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628521.6040736607,
            "unit": "ns",
            "range": "± 7485.323417028953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572335.7379557291,
            "unit": "ns",
            "range": "± 5336.1380135142945"
          }
        ]
      }
    ]
  }
}