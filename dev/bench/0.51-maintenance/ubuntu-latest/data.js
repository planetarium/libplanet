window.BENCHMARK_DATA = {
  "lastUpdate": 1678682019278,
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
      }
    ]
  }
}