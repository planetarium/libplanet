window.BENCHMARK_DATA = {
  "lastUpdate": 1724287800978,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "1085c8b269b560d46725f1b537d683c464c9662a",
          "message": "refactor: Rename Node to Swarm and add ValidatorService",
          "timestamp": "2024-08-21T17:45:33+09:00",
          "tree_id": "5f4ca9a4fa40489737e6620682c1b5d4c145ebaf",
          "url": "https://github.com/planetarium/libplanet/commit/1085c8b269b560d46725f1b537d683c464c9662a"
        },
        "date": 1724230525721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198773.58333333334,
            "unit": "ns",
            "range": "± 6501.575059168355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193891.6,
            "unit": "ns",
            "range": "± 6932.5854497569535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161319.08333333334,
            "unit": "ns",
            "range": "± 1708.9083415142456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3034530.6428571427,
            "unit": "ns",
            "range": "± 26648.52533835205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2720726.933333333,
            "unit": "ns",
            "range": "± 32812.89209499973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12775.514925373134,
            "unit": "ns",
            "range": "± 613.4934118965946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60522.29710144927,
            "unit": "ns",
            "range": "± 2899.768026116157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49738.61538461538,
            "unit": "ns",
            "range": "± 600.168662191657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59637.45918367347,
            "unit": "ns",
            "range": "± 6824.6017687804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3287.3061224489797,
            "unit": "ns",
            "range": "± 248.68372693966816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12139.797101449276,
            "unit": "ns",
            "range": "± 593.4050937475954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2356961.9,
            "unit": "ns",
            "range": "± 37927.48009557186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511628.294117647,
            "unit": "ns",
            "range": "± 49535.079920401746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3049353,
            "unit": "ns",
            "range": "± 56483.35705438667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2523099.1153846155,
            "unit": "ns",
            "range": "± 68797.18558332277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3245924.533333333,
            "unit": "ns",
            "range": "± 56547.69836274337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10220293.8,
            "unit": "ns",
            "range": "± 57357.630241195584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26981341.6,
            "unit": "ns",
            "range": "± 159414.20360306668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68030951.33333333,
            "unit": "ns",
            "range": "± 255757.63968750535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134961532.4,
            "unit": "ns",
            "range": "± 372982.35655204154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279057785.6333333,
            "unit": "ns",
            "range": "± 887092.5042541155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017141.4659090909,
            "unit": "ns",
            "range": "± 52918.446089936704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1924865.4047619049,
            "unit": "ns",
            "range": "± 70308.75748346544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1676050.1833333333,
            "unit": "ns",
            "range": "± 74050.86371908223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8207323.625,
            "unit": "ns",
            "range": "± 205607.37342583475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742950.83203125,
            "unit": "ns",
            "range": "± 5261.0891248815715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204350.8355189732,
            "unit": "ns",
            "range": "± 2152.6401820171823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765329.6006510417,
            "unit": "ns",
            "range": "± 1283.4028006377991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1963957.2455357143,
            "unit": "ns",
            "range": "± 1541.7775324274717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631616.6983816965,
            "unit": "ns",
            "range": "± 1133.0099341993978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583461.7178431919,
            "unit": "ns",
            "range": "± 568.9501233457464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32387.804347826088,
            "unit": "ns",
            "range": "± 1030.50422651708"
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
          "id": "56c1363a0ba430da69c0f9422369fc256be62d9b",
          "message": "refactor: Rename Node to Swarm and add ValidatorService",
          "timestamp": "2024-08-22T09:40:32+09:00",
          "tree_id": "7bb994f6079fb3d800013694490bb3abc6c4bca6",
          "url": "https://github.com/planetarium/libplanet/commit/56c1363a0ba430da69c0f9422369fc256be62d9b"
        },
        "date": 1724287775102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201607.11538461538,
            "unit": "ns",
            "range": "± 6739.487522420137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190486.4,
            "unit": "ns",
            "range": "± 6958.5527905431245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166923.95,
            "unit": "ns",
            "range": "± 3753.296158045619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3131885.8,
            "unit": "ns",
            "range": "± 38362.068109005806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2862984.5,
            "unit": "ns",
            "range": "± 36066.91696792822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12742.681318681318,
            "unit": "ns",
            "range": "± 915.7491757404715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60520.26315789474,
            "unit": "ns",
            "range": "± 3961.5974271361865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50695.333333333336,
            "unit": "ns",
            "range": "± 482.51883304429083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52341.97959183674,
            "unit": "ns",
            "range": "± 8151.089051239023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3094.3645833333335,
            "unit": "ns",
            "range": "± 392.5838594904995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11754.067415730337,
            "unit": "ns",
            "range": "± 723.2902692455439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405228.6333333333,
            "unit": "ns",
            "range": "± 43478.741062840396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2510303.470588235,
            "unit": "ns",
            "range": "± 48678.68968567977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3145264.6,
            "unit": "ns",
            "range": "± 52729.293281547296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2614325.3076923075,
            "unit": "ns",
            "range": "± 40472.81601351829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3291409.1,
            "unit": "ns",
            "range": "± 57425.024777406186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10361656.133333333,
            "unit": "ns",
            "range": "± 76285.68998729772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26713211.615384616,
            "unit": "ns",
            "range": "± 87464.97560503715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68644211.71428572,
            "unit": "ns",
            "range": "± 192495.0783792141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137831927.73333332,
            "unit": "ns",
            "range": "± 1410014.6277887875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283346714.4,
            "unit": "ns",
            "range": "± 1859777.5468968938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1053994.975609756,
            "unit": "ns",
            "range": "± 52119.09796789515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1950192.8823529412,
            "unit": "ns",
            "range": "± 79161.65024294202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1664490.4375,
            "unit": "ns",
            "range": "± 70816.27492699481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8358094.166666667,
            "unit": "ns",
            "range": "± 241214.5828207787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3762491.3649553573,
            "unit": "ns",
            "range": "± 6032.723847068433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215836.6058872768,
            "unit": "ns",
            "range": "± 1421.7384504986796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754535.207170759,
            "unit": "ns",
            "range": "± 1107.1175907011657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945903.891826923,
            "unit": "ns",
            "range": "± 1119.9685856715107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620780.5854166667,
            "unit": "ns",
            "range": "± 1216.6781542172046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579468.03515625,
            "unit": "ns",
            "range": "± 523.683878475202"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32238.35714285714,
            "unit": "ns",
            "range": "± 415.1985358546249"
          }
        ]
      }
    ]
  }
}