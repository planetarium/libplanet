window.BENCHMARK_DATA = {
  "lastUpdate": 1724288848432,
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
          "id": "1bf693324933e4e9ce07376c78323eb7d9b6f41c",
          "message": "refactor: Rename Node to Swarm and add ValidatorService",
          "timestamp": "2024-08-22T09:52:44+09:00",
          "tree_id": "39e7fb7076aaa3899e336acbc3e00564fe621357",
          "url": "https://github.com/planetarium/libplanet/commit/1bf693324933e4e9ce07376c78323eb7d9b6f41c"
        },
        "date": 1724288482811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203616.2987012987,
            "unit": "ns",
            "range": "± 9642.657389331254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195664.84615384616,
            "unit": "ns",
            "range": "± 7867.96885463052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170055.2857142857,
            "unit": "ns",
            "range": "± 2344.7908690926406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3086894.3571428573,
            "unit": "ns",
            "range": "± 43765.684342182525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2799876.933333333,
            "unit": "ns",
            "range": "± 33396.1660705166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14466.282828282829,
            "unit": "ns",
            "range": "± 2214.745275077392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66793.35869565218,
            "unit": "ns",
            "range": "± 4571.323086375917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50027.307692307695,
            "unit": "ns",
            "range": "± 419.8224594229059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52121.56122448979,
            "unit": "ns",
            "range": "± 8119.410632039548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2965.103092783505,
            "unit": "ns",
            "range": "± 406.8150553521445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11851.08888888889,
            "unit": "ns",
            "range": "± 745.6002467576334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2469108.7333333334,
            "unit": "ns",
            "range": "± 41094.541459675056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2499576.2333333334,
            "unit": "ns",
            "range": "± 31719.40685237772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2988354.6333333333,
            "unit": "ns",
            "range": "± 42594.91364481825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2589506.8421052634,
            "unit": "ns",
            "range": "± 86567.33938831488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3291622.5,
            "unit": "ns",
            "range": "± 46682.39388524482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10352717.642857144,
            "unit": "ns",
            "range": "± 66657.12628254575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26754296.5,
            "unit": "ns",
            "range": "± 132462.93024247605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68526736.8,
            "unit": "ns",
            "range": "± 515099.4316468285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 145689495.2,
            "unit": "ns",
            "range": "± 674048.9241416064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284240770.5,
            "unit": "ns",
            "range": "± 865085.3523853393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012163.7307692308,
            "unit": "ns",
            "range": "± 49690.262850455445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957341.4,
            "unit": "ns",
            "range": "± 67964.81705728905"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1690749.5802469135,
            "unit": "ns",
            "range": "± 86366.86804236103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8310956.884615385,
            "unit": "ns",
            "range": "± 135728.16389481002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729944.8504464286,
            "unit": "ns",
            "range": "± 7312.893065939725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206905.9802083333,
            "unit": "ns",
            "range": "± 2443.8767566536053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778331.2140066965,
            "unit": "ns",
            "range": "± 784.5699369541019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911890.1807391827,
            "unit": "ns",
            "range": "± 1081.7880039010654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629384.6939871652,
            "unit": "ns",
            "range": "± 565.0552357356011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575300.7133091518,
            "unit": "ns",
            "range": "± 1160.5674032596958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32364.14285714286,
            "unit": "ns",
            "range": "± 302.7501780836311"
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
          "id": "a5da9b4caf87761486d612bfed14f044defe0f9f",
          "message": "refactor: Rename Node to Swarm and add ValidatorService",
          "timestamp": "2024-08-22T09:56:07+09:00",
          "tree_id": "c0ec8431e6c30333c5291c1dfc6bb59c02866ebe",
          "url": "https://github.com/planetarium/libplanet/commit/a5da9b4caf87761486d612bfed14f044defe0f9f"
        },
        "date": 1724288822065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 231664.39583333334,
            "unit": "ns",
            "range": "± 18006.546670574047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204935.42105263157,
            "unit": "ns",
            "range": "± 12950.623807023405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173843.9,
            "unit": "ns",
            "range": "± 6158.465396592373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3161475.7,
            "unit": "ns",
            "range": "± 28816.119380850512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2882012.7333333334,
            "unit": "ns",
            "range": "± 44567.17068084127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16966.87373737374,
            "unit": "ns",
            "range": "± 3343.313691613117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69195.27659574468,
            "unit": "ns",
            "range": "± 7214.265360857314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54105.50561797753,
            "unit": "ns",
            "range": "± 3214.1484915193732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72470.67010309278,
            "unit": "ns",
            "range": "± 13231.078396558147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3258.3829787234044,
            "unit": "ns",
            "range": "± 632.4610082993171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21339.956043956045,
            "unit": "ns",
            "range": "± 1321.3100898736652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2479287.9444444445,
            "unit": "ns",
            "range": "± 49557.22811198979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2644324.03125,
            "unit": "ns",
            "range": "± 79511.08705424282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3118390.294117647,
            "unit": "ns",
            "range": "± 60614.67654451014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2738927,
            "unit": "ns",
            "range": "± 50513.13145820882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3336255.923076923,
            "unit": "ns",
            "range": "± 38886.377969372814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10647032.8,
            "unit": "ns",
            "range": "± 92000.06179516557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27405801.666666668,
            "unit": "ns",
            "range": "± 169633.53770098762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70648373.13333334,
            "unit": "ns",
            "range": "± 372100.31857337814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140543483.06666666,
            "unit": "ns",
            "range": "± 499185.6317650159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288556323.1333333,
            "unit": "ns",
            "range": "± 1377864.447669595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033194.323943662,
            "unit": "ns",
            "range": "± 48729.975730630606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2014548.7173913044,
            "unit": "ns",
            "range": "± 76689.38373570883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1807748.4444444445,
            "unit": "ns",
            "range": "± 88350.43685216673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8596403.5,
            "unit": "ns",
            "range": "± 314524.85811569804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3716901.7555803573,
            "unit": "ns",
            "range": "± 4698.453823334548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1204485.9,
            "unit": "ns",
            "range": "± 3486.377626459389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764651.1456580529,
            "unit": "ns",
            "range": "± 534.521352727104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940458.624720982,
            "unit": "ns",
            "range": "± 2944.398519249748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620109.2407924107,
            "unit": "ns",
            "range": "± 293.33080345066617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 600340.2521623884,
            "unit": "ns",
            "range": "± 1035.326347082866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37145.47959183674,
            "unit": "ns",
            "range": "± 5069.193962299555"
          }
        ]
      }
    ]
  }
}