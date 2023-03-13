window.BENCHMARK_DATA = {
  "lastUpdate": 1678689898672,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7fd63eb9cf0485d8b189f13caf82cafe8ca51b83",
          "message": "Merge pull request #2913 from colibrishin/benchmark/fix/0.51-maintenance\n\nci/bench: cherrypick of bench pr update to 0.51-maintenance",
          "timestamp": "2023-03-10T12:29:01+09:00",
          "tree_id": "82119e497d3b4c94da39369664c909a5be52b864",
          "url": "https://github.com/planetarium/libplanet/commit/7fd63eb9cf0485d8b189f13caf82cafe8ca51b83"
        },
        "date": 1678419638298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194770.84210526315,
            "unit": "ns",
            "range": "± 4152.411364538788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190048.66666666666,
            "unit": "ns",
            "range": "± 4683.188057788774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157424.6923076923,
            "unit": "ns",
            "range": "± 1168.5357921073266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11193791.642857144,
            "unit": "ns",
            "range": "± 39505.73328130243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8974776.533333333,
            "unit": "ns",
            "range": "± 75772.99236711368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16747.618556701033,
            "unit": "ns",
            "range": "± 1368.2815746653641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49319.52173913043,
            "unit": "ns",
            "range": "± 2919.7169100251917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39167.166666666664,
            "unit": "ns",
            "range": "± 436.64731624948615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82518.36734693877,
            "unit": "ns",
            "range": "± 12489.213759796565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4595.784946236559,
            "unit": "ns",
            "range": "± 469.9671091512305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17430.58762886598,
            "unit": "ns",
            "range": "± 1505.6029505966574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3219735.714285714,
            "unit": "ns",
            "range": "± 46366.6249869593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5112198.047619048,
            "unit": "ns",
            "range": "± 121143.4536021143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22969556.133333333,
            "unit": "ns",
            "range": "± 215660.062434533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6056586.04,
            "unit": "ns",
            "range": "± 153818.24600495223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26579562.92857143,
            "unit": "ns",
            "range": "± 385488.534161217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873819.811941965,
            "unit": "ns",
            "range": "± 21563.972309044846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1949336.4559895834,
            "unit": "ns",
            "range": "± 9004.554999900807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346444.6824776786,
            "unit": "ns",
            "range": "± 1254.5672307078592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578090.270926339,
            "unit": "ns",
            "range": "± 1466.5933574389649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822562.9989483173,
            "unit": "ns",
            "range": "± 839.4535405475823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752934.3077566965,
            "unit": "ns",
            "range": "± 962.4017701670172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7828199.461538462,
            "unit": "ns",
            "range": "± 12814.6038540369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19498130.133333333,
            "unit": "ns",
            "range": "± 77506.21921024575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49763354.666666664,
            "unit": "ns",
            "range": "± 255008.50600677915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99834717.06666666,
            "unit": "ns",
            "range": "± 1255543.8716363101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200098593.8,
            "unit": "ns",
            "range": "± 2315870.9727714662"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45121.3962264151,
            "unit": "ns",
            "range": "± 1760.3833207967327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346959.9591836734,
            "unit": "ns",
            "range": "± 99148.49134743576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2481894.2,
            "unit": "ns",
            "range": "± 65789.31428621216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2109277.2040816327,
            "unit": "ns",
            "range": "± 125762.59521903147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4891258.647058823,
            "unit": "ns",
            "range": "± 93914.6731486494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d23d43a83cc8ab4879ec60a13e6436bb87c8c52",
          "message": "Merge pull request #2917 from OnedgeLee/fix/0.51-maintenance\n\nFix ActionExecutionState total count",
          "timestamp": "2023-03-13T13:14:46+09:00",
          "tree_id": "a307135d2d9e360060cf6e08395ba431cb14e229",
          "url": "https://github.com/planetarium/libplanet/commit/6d23d43a83cc8ab4879ec60a13e6436bb87c8c52"
        },
        "date": 1678681999978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230586.47422680413,
            "unit": "ns",
            "range": "± 35434.59393525062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218540.82105263157,
            "unit": "ns",
            "range": "± 30131.828152438127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173639.16842105263,
            "unit": "ns",
            "range": "± 27251.895566571748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12436772.68292683,
            "unit": "ns",
            "range": "± 654174.1037415207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9496458.111111112,
            "unit": "ns",
            "range": "± 750420.77895697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31492.948979591838,
            "unit": "ns",
            "range": "± 10406.444145828906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67936.71875,
            "unit": "ns",
            "range": "± 14277.542096964453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49195.14141414141,
            "unit": "ns",
            "range": "± 13243.760980875993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111685.02197802198,
            "unit": "ns",
            "range": "± 21545.99901553162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5022.642857142857,
            "unit": "ns",
            "range": "± 577.3572455460392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29118.303030303032,
            "unit": "ns",
            "range": "± 10681.332680223144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3197784.09375,
            "unit": "ns",
            "range": "± 292525.1959668316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5168605.434343434,
            "unit": "ns",
            "range": "± 578034.1709528302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27852177.64285714,
            "unit": "ns",
            "range": "± 2587845.3617976303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6441064.0612244895,
            "unit": "ns",
            "range": "± 607872.0053492646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32522043,
            "unit": "ns",
            "range": "± 3159833.978891264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6444977.9728125,
            "unit": "ns",
            "range": "± 255619.22312134257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2080030.1196289062,
            "unit": "ns",
            "range": "± 38934.60745457858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1476420.9812282985,
            "unit": "ns",
            "range": "± 29669.971026191382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2812584.543294271,
            "unit": "ns",
            "range": "± 72184.09097151716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946717.809765625,
            "unit": "ns",
            "range": "± 21168.65878994394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 849754.388195503,
            "unit": "ns",
            "range": "± 30594.213330192113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7856848.747368421,
            "unit": "ns",
            "range": "± 560473.8826598885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22338341.44897959,
            "unit": "ns",
            "range": "± 2240464.446927242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56560284.48453608,
            "unit": "ns",
            "range": "± 4714033.861300366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107826887.2886598,
            "unit": "ns",
            "range": "± 8333376.838047373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 222361941.26530612,
            "unit": "ns",
            "range": "± 14958581.787479209"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60735.07608695652,
            "unit": "ns",
            "range": "± 11691.8750958896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684981.7216494845,
            "unit": "ns",
            "range": "± 165815.70242439234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3316879.1894736844,
            "unit": "ns",
            "range": "± 289748.99242771947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2680703.15625,
            "unit": "ns",
            "range": "± 306123.7483498369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6836228.5578947365,
            "unit": "ns",
            "range": "± 739124.8824607601"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8af6e82f9f5359a8f8292ff460d3758e05fe6111",
          "message": "Merge pull request #2918 from OnedgeLee/0.51-maintenance\n\n🚀 Release 0.51.1",
          "timestamp": "2023-03-13T14:58:05+09:00",
          "tree_id": "aa71cd77bbf703767f9cc5ff0fcb0046d8d1b908",
          "url": "https://github.com/planetarium/libplanet/commit/8af6e82f9f5359a8f8292ff460d3758e05fe6111"
        },
        "date": 1678687844853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192901.4814814815,
            "unit": "ns",
            "range": "± 8082.775655188225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198612.81632653062,
            "unit": "ns",
            "range": "± 7826.414506532427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163966.16666666666,
            "unit": "ns",
            "range": "± 1346.3374447557771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11443657.8,
            "unit": "ns",
            "range": "± 69536.97611980057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9234926.2,
            "unit": "ns",
            "range": "± 71852.94684800935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18364.872340425532,
            "unit": "ns",
            "range": "± 1850.2682469518668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51177.63333333333,
            "unit": "ns",
            "range": "± 3004.513437959032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38873.333333333336,
            "unit": "ns",
            "range": "± 615.8231038521494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86510.76923076923,
            "unit": "ns",
            "range": "± 11075.285030771014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4288.636363636364,
            "unit": "ns",
            "range": "± 411.45433628337787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17286.13829787234,
            "unit": "ns",
            "range": "± 1939.820802061082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3343349.282051282,
            "unit": "ns",
            "range": "± 116065.78117464903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5124181.5,
            "unit": "ns",
            "range": "± 62497.32746132184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23926484.933333334,
            "unit": "ns",
            "range": "± 388791.6384218942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6425237.068965517,
            "unit": "ns",
            "range": "± 187243.08520418257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27435855,
            "unit": "ns",
            "range": "± 333527.61305753555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093380.027083334,
            "unit": "ns",
            "range": "± 17414.184088843176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1956863.4677083334,
            "unit": "ns",
            "range": "± 18238.912347991594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366351.6940104167,
            "unit": "ns",
            "range": "± 1919.1865740094368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571879.434988839,
            "unit": "ns",
            "range": "± 9542.701905512635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832969.5173688616,
            "unit": "ns",
            "range": "± 513.7559802397775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740683.6302734375,
            "unit": "ns",
            "range": "± 421.8000197866777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7871027.733333333,
            "unit": "ns",
            "range": "± 26222.72575040498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19930271.923076924,
            "unit": "ns",
            "range": "± 111137.69009316142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51933084.46666667,
            "unit": "ns",
            "range": "± 380757.58507966093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 103929590.53846154,
            "unit": "ns",
            "range": "± 490941.98951702623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 203856087.33333334,
            "unit": "ns",
            "range": "± 1492790.2384303058"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46129.0253164557,
            "unit": "ns",
            "range": "± 2341.9207872406428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427750.01010101,
            "unit": "ns",
            "range": "± 110659.10887094718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2544523.9393939395,
            "unit": "ns",
            "range": "± 80347.42284134701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2258305.4516129033,
            "unit": "ns",
            "range": "± 122958.22065631782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5161082.47368421,
            "unit": "ns",
            "range": "± 114191.67172024044"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aafb851c0bfe09ab016c62303d25c8b89d341d6",
          "message": "Merge pull request #2920 from OnedgeLee/0.51-maintenance\n\nFix typo 0.51.1",
          "timestamp": "2023-03-13T15:32:29+09:00",
          "tree_id": "c5804224cca4a1d8c02e7a4eb637cc263479fc46",
          "url": "https://github.com/planetarium/libplanet/commit/7aafb851c0bfe09ab016c62303d25c8b89d341d6"
        },
        "date": 1678689879165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193550.125,
            "unit": "ns",
            "range": "± 6028.180604728578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191053.88888888888,
            "unit": "ns",
            "range": "± 7161.576680840299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161935.58823529413,
            "unit": "ns",
            "range": "± 3196.244613973239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11315700.2,
            "unit": "ns",
            "range": "± 114124.36529706152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9099494.466666667,
            "unit": "ns",
            "range": "± 61001.299550403804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15998.9,
            "unit": "ns",
            "range": "± 1023.7005580658197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50460.279569892475,
            "unit": "ns",
            "range": "± 4445.4826591906785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38125,
            "unit": "ns",
            "range": "± 601.6424887011607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80193.12790697675,
            "unit": "ns",
            "range": "± 7614.508247683207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4368.817204301075,
            "unit": "ns",
            "range": "± 412.83181506138993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15634.095744680852,
            "unit": "ns",
            "range": "± 1064.63446267791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3212707.263157895,
            "unit": "ns",
            "range": "± 70155.03841638658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5137109.966666667,
            "unit": "ns",
            "range": "± 152637.65230711078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23286701.8,
            "unit": "ns",
            "range": "± 286105.6518379181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6089563.933333334,
            "unit": "ns",
            "range": "± 100025.05190520071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26665331,
            "unit": "ns",
            "range": "± 473091.92991199624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5844966.058333334,
            "unit": "ns",
            "range": "± 23099.712788162407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2007979.8777901786,
            "unit": "ns",
            "range": "± 1180.666459739037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383925.9076450893,
            "unit": "ns",
            "range": "± 1284.3005842177154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586037.6442522323,
            "unit": "ns",
            "range": "± 4843.045972607191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798409.0860877404,
            "unit": "ns",
            "range": "± 1048.09319722061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742511.2078683035,
            "unit": "ns",
            "range": "± 448.6108168214441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7790662.142857143,
            "unit": "ns",
            "range": "± 20856.86436664896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20154252.933333334,
            "unit": "ns",
            "range": "± 117801.97781535555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51021779.266666666,
            "unit": "ns",
            "range": "± 289956.6390116353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100038884.06666666,
            "unit": "ns",
            "range": "± 619809.8183063284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200280635.7142857,
            "unit": "ns",
            "range": "± 1686208.5614224973"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44906.706666666665,
            "unit": "ns",
            "range": "± 2020.2683443203935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297441.6375,
            "unit": "ns",
            "range": "± 67163.77251492467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2382506.882352941,
            "unit": "ns",
            "range": "± 48162.1800610738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2098390.8493150687,
            "unit": "ns",
            "range": "± 103906.37761942655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5123445.528301887,
            "unit": "ns",
            "range": "± 212814.5985008117"
          }
        ]
      }
    ]
  }
}