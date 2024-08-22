window.BENCHMARK_DATA = {
  "lastUpdate": 1724289023955,
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
        "date": 1724288596662,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1030593.4065934066,
            "unit": "ns",
            "range": "± 78087.74381310894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1839748.076923077,
            "unit": "ns",
            "range": "± 71421.18785529006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1625069.7916666667,
            "unit": "ns",
            "range": "± 147735.58821495686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7048380.952380952,
            "unit": "ns",
            "range": "± 321860.66052350466"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31847.222222222223,
            "unit": "ns",
            "range": "± 1587.3595954077387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10308950,
            "unit": "ns",
            "range": "± 69474.88478136984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25333207.14285714,
            "unit": "ns",
            "range": "± 284021.5361939619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63432213.333333336,
            "unit": "ns",
            "range": "± 746278.9959589669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123545600,
            "unit": "ns",
            "range": "± 830099.0543302648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261903235.7142857,
            "unit": "ns",
            "range": "± 2997661.95324524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3321137.03125,
            "unit": "ns",
            "range": "± 7474.338736923085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061053.2877604167,
            "unit": "ns",
            "range": "± 694.4239977668286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739138.037109375,
            "unit": "ns",
            "range": "± 1395.9973629627457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947051.1021205357,
            "unit": "ns",
            "range": "± 4217.035211591939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618700.4045758928,
            "unit": "ns",
            "range": "± 999.9026066648739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572162.5716145834,
            "unit": "ns",
            "range": "± 754.5440469491031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2173313.3333333335,
            "unit": "ns",
            "range": "± 35860.7000701856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226255.5555555555,
            "unit": "ns",
            "range": "± 73495.77031345581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2777516.6666666665,
            "unit": "ns",
            "range": "± 59402.35933123909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2299618.5185185187,
            "unit": "ns",
            "range": "± 62323.560411261664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2962126.6666666665,
            "unit": "ns",
            "range": "± 36331.49886150872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184225.39682539683,
            "unit": "ns",
            "range": "± 7967.53429001535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174647.77777777778,
            "unit": "ns",
            "range": "± 6592.74700950318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149919.04761904763,
            "unit": "ns",
            "range": "± 5466.3600095287065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2781393.3333333335,
            "unit": "ns",
            "range": "± 38444.607027823935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2570373.3333333335,
            "unit": "ns",
            "range": "± 36181.63438357459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12013.829787234043,
            "unit": "ns",
            "range": "± 1274.615781351746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58271.27659574468,
            "unit": "ns",
            "range": "± 6299.507103784323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45841.666666666664,
            "unit": "ns",
            "range": "± 1654.8874530521716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60363.333333333336,
            "unit": "ns",
            "range": "± 9312.338679697667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3174.7368421052633,
            "unit": "ns",
            "range": "± 628.7387613398733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11429.591836734693,
            "unit": "ns",
            "range": "± 1443.1644199554876"
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
        "date": 1724288761779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986361.7021276596,
            "unit": "ns",
            "range": "± 85845.07063256642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1732127.5,
            "unit": "ns",
            "range": "± 61350.631566347736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1523010.989010989,
            "unit": "ns",
            "range": "± 84831.23959505255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6930622.7272727275,
            "unit": "ns",
            "range": "± 254962.10376285276"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30490.322580645163,
            "unit": "ns",
            "range": "± 601.3068205775803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9511250,
            "unit": "ns",
            "range": "± 149349.68146246974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23642400,
            "unit": "ns",
            "range": "± 142358.0947570497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57930446.15384615,
            "unit": "ns",
            "range": "± 147983.34712271183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119491813.33333333,
            "unit": "ns",
            "range": "± 426847.96367704286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234255696.15384614,
            "unit": "ns",
            "range": "± 1407088.4872763478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3251984.988839286,
            "unit": "ns",
            "range": "± 2193.566508122551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088284.4010416667,
            "unit": "ns",
            "range": "± 1948.0317825017873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731875.2799479166,
            "unit": "ns",
            "range": "± 963.9590264084615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1901196.5494791667,
            "unit": "ns",
            "range": "± 2999.3264765280674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611281.4908854166,
            "unit": "ns",
            "range": "± 1504.5845864023331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585705.9505208334,
            "unit": "ns",
            "range": "± 945.8472065981457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2105064.285714286,
            "unit": "ns",
            "range": "± 35206.50305189166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2159188.2352941176,
            "unit": "ns",
            "range": "± 32514.013946930274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2632606.6666666665,
            "unit": "ns",
            "range": "± 38595.585733283515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2218315.789473684,
            "unit": "ns",
            "range": "± 46708.3178787711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2893223.3333333335,
            "unit": "ns",
            "range": "± 48956.56189297766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165109.43396226416,
            "unit": "ns",
            "range": "± 6799.950909068937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161275.92592592593,
            "unit": "ns",
            "range": "± 6054.8105055864835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145120.83333333334,
            "unit": "ns",
            "range": "± 3610.730284638524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2644928.5714285714,
            "unit": "ns",
            "range": "± 41181.33312317849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2431657.1428571427,
            "unit": "ns",
            "range": "± 18005.84154296404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9342.553191489362,
            "unit": "ns",
            "range": "± 1067.8578055336616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49370.666666666664,
            "unit": "ns",
            "range": "± 2465.2598861593283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43296.153846153844,
            "unit": "ns",
            "range": "± 893.6356166719271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48770.1030927835,
            "unit": "ns",
            "range": "± 8490.474625382327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2203.030303030303,
            "unit": "ns",
            "range": "± 435.5279567526894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9289.473684210527,
            "unit": "ns",
            "range": "± 1069.6463607501637"
          }
        ]
      }
    ]
  }
}