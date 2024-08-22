window.BENCHMARK_DATA = {
  "lastUpdate": 1724287865515,
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
        "date": 1724230528287,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933779.7468354431,
            "unit": "ns",
            "range": "± 47166.65048404226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1777522.7272727273,
            "unit": "ns",
            "range": "± 83005.95677504031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1495911.7647058824,
            "unit": "ns",
            "range": "± 76656.98708837824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6806465.853658536,
            "unit": "ns",
            "range": "± 239759.32162249304"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30440,
            "unit": "ns",
            "range": "± 527.5279274936203"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9519392.857142856,
            "unit": "ns",
            "range": "± 79882.87064182172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24421392.307692308,
            "unit": "ns",
            "range": "± 74500.35191794357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59856046.666666664,
            "unit": "ns",
            "range": "± 1056030.3349719422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120753533.33333333,
            "unit": "ns",
            "range": "± 593431.2364385214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236491393.33333334,
            "unit": "ns",
            "range": "± 1299769.8568079914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3245101.6536458335,
            "unit": "ns",
            "range": "± 3126.0169329823702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049375.0651041667,
            "unit": "ns",
            "range": "± 1898.289401859678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731013.9857700893,
            "unit": "ns",
            "range": "± 1641.6632042210988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945810.44921875,
            "unit": "ns",
            "range": "± 2462.21828882513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615368.671875,
            "unit": "ns",
            "range": "± 1432.2533021909787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557489.0276227678,
            "unit": "ns",
            "range": "± 1314.1155517873208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2084114.2857142857,
            "unit": "ns",
            "range": "± 26685.14012136161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2198495.4545454546,
            "unit": "ns",
            "range": "± 52178.21546230925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2668947.3684210526,
            "unit": "ns",
            "range": "± 55203.36511905625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2279276.923076923,
            "unit": "ns",
            "range": "± 34859.48349794629"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2924453.3333333335,
            "unit": "ns",
            "range": "± 45022.293948453495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170461.01694915254,
            "unit": "ns",
            "range": "± 6632.236241922726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164240.6779661017,
            "unit": "ns",
            "range": "± 7170.031468311356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144875,
            "unit": "ns",
            "range": "± 3251.0524611674846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2603786.6666666665,
            "unit": "ns",
            "range": "± 34035.46189882938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2358885.714285714,
            "unit": "ns",
            "range": "± 31215.426589153914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9930.526315789473,
            "unit": "ns",
            "range": "± 1232.198664920567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51700,
            "unit": "ns",
            "range": "± 4945.994050022416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43784.21052631579,
            "unit": "ns",
            "range": "± 920.3037891519764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48091.48936170213,
            "unit": "ns",
            "range": "± 7633.044454896306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2255.6701030927834,
            "unit": "ns",
            "range": "± 352.6592643062577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9251.08695652174,
            "unit": "ns",
            "range": "± 843.9174176067742"
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
        "date": 1724287795252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012696.875,
            "unit": "ns",
            "range": "± 95262.92640910375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1783888.1355932204,
            "unit": "ns",
            "range": "± 78000.86446193328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579212.8865979381,
            "unit": "ns",
            "range": "± 97110.16759286376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6868994.285714285,
            "unit": "ns",
            "range": "± 194527.36831924214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30360,
            "unit": "ns",
            "range": "± 746.7631300578472"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9641992.857142856,
            "unit": "ns",
            "range": "± 63657.96178720381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24009342.85714286,
            "unit": "ns",
            "range": "± 281379.15964675933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59986035.71428572,
            "unit": "ns",
            "range": "± 492701.47086811543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117616428.57142857,
            "unit": "ns",
            "range": "± 794577.9464388833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233485621.42857143,
            "unit": "ns",
            "range": "± 773866.8978961051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284854.453125,
            "unit": "ns",
            "range": "± 6575.820511610226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054455.7682291667,
            "unit": "ns",
            "range": "± 2233.769584429832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729438.8802083334,
            "unit": "ns",
            "range": "± 1267.9853105959157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918375.0558035714,
            "unit": "ns",
            "range": "± 4819.86901626634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620983.2486979166,
            "unit": "ns",
            "range": "± 921.1954414453497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559410.1692708334,
            "unit": "ns",
            "range": "± 1822.756120477963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2187273.3333333335,
            "unit": "ns",
            "range": "± 33884.05580941039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257500,
            "unit": "ns",
            "range": "± 36955.66990952185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2629957.1428571427,
            "unit": "ns",
            "range": "± 36482.78233075716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2238226.923076923,
            "unit": "ns",
            "range": "± 79387.60241875231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2895414.285714286,
            "unit": "ns",
            "range": "± 30102.97345760068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175744.15584415584,
            "unit": "ns",
            "range": "± 8677.989300015442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170752.43902439025,
            "unit": "ns",
            "range": "± 8373.005207208447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145569.23076923078,
            "unit": "ns",
            "range": "± 3709.6381743527736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2690521.4285714286,
            "unit": "ns",
            "range": "± 22070.034630045975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2426873.3333333335,
            "unit": "ns",
            "range": "± 36122.36083620438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10418.08510638298,
            "unit": "ns",
            "range": "± 1262.184721920256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55463.63636363636,
            "unit": "ns",
            "range": "± 6154.133413446683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44125,
            "unit": "ns",
            "range": "± 591.0314558618533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54523.40425531915,
            "unit": "ns",
            "range": "± 9547.283862264094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2521.875,
            "unit": "ns",
            "range": "± 438.22683984198727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9807.291666666666,
            "unit": "ns",
            "range": "± 1408.787817251089"
          }
        ]
      }
    ]
  }
}