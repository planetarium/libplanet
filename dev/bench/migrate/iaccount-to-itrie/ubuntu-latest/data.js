window.BENCHMARK_DATA = {
  "lastUpdate": 1695628493014,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "2dbe34b4f8b633e133ec730a39d49794678ee4b6",
          "message": "Merge pull request #3423 from greymistcube/merge/3.3.1-to-main\n\n🔀 Merge 3.3.1 to main",
          "timestamp": "2023-09-13T12:11:35+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/planetarium/libplanet/commit/2dbe34b4f8b633e133ec730a39d49794678ee4b6"
        },
        "date": 1695085887704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383089.125,
            "unit": "ns",
            "range": "± 24440.952297610675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355808.9655172414,
            "unit": "ns",
            "range": "± 23533.340576400195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327603.23333333334,
            "unit": "ns",
            "range": "± 29009.03781642596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5420409.5,
            "unit": "ns",
            "range": "± 193616.26380792246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5085630.066666666,
            "unit": "ns",
            "range": "± 143296.25754718747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26161.872340425532,
            "unit": "ns",
            "range": "± 5822.231186025491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111538.90721649484,
            "unit": "ns",
            "range": "± 18972.07795852152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116897.78571428571,
            "unit": "ns",
            "range": "± 24696.253548357137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114534.47368421052,
            "unit": "ns",
            "range": "± 24018.3724393419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7217.090909090909,
            "unit": "ns",
            "range": "± 1197.8059409187758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25042.051020408162,
            "unit": "ns",
            "range": "± 8634.994211845611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4551062.765625,
            "unit": "ns",
            "range": "± 210590.15584333186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4763438.340909091,
            "unit": "ns",
            "range": "± 156493.41460488053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5688124.958762887,
            "unit": "ns",
            "range": "± 327516.84356294683"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5076725.551020408,
            "unit": "ns",
            "range": "± 199463.95025606145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8221527.096153846,
            "unit": "ns",
            "range": "± 336229.2230281714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1633410.6701030927,
            "unit": "ns",
            "range": "± 250087.38655833396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3094880.618556701,
            "unit": "ns",
            "range": "± 392998.58491834515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2038658.7789473685,
            "unit": "ns",
            "range": "± 244720.87014880189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5999021.278350515,
            "unit": "ns",
            "range": "± 637742.1273853846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69298.37634408602,
            "unit": "ns",
            "range": "± 14667.128510286544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10808231.470588235,
            "unit": "ns",
            "range": "± 219200.4307717362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27710598.17857143,
            "unit": "ns",
            "range": "± 769763.8591020675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70989307.27272727,
            "unit": "ns",
            "range": "± 1701794.6800166492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141319552.26666668,
            "unit": "ns",
            "range": "± 2195262.556030647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284108329.93333334,
            "unit": "ns",
            "range": "± 3736588.7333750683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5719655.18445122,
            "unit": "ns",
            "range": "± 191685.65270457225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910407.3283361488,
            "unit": "ns",
            "range": "± 64002.173138291175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315152.5919846755,
            "unit": "ns",
            "range": "± 53643.28830447437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101424.511827257,
            "unit": "ns",
            "range": "± 102839.81608786792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034157.1740722656,
            "unit": "ns",
            "range": "± 36214.791325966755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957976.5533088235,
            "unit": "ns",
            "range": "± 19269.205060664044"
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
          "id": "57c96c96e8eb2639b4bbe10305015495d41c202a",
          "message": "Merge pull request #3427 from greymistcube/feature/iactionrendercontext\n\n♻️ Refactor `IActionRenderer`",
          "timestamp": "2023-09-19T10:49:44+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/planetarium/libplanet/commit/57c96c96e8eb2639b4bbe10305015495d41c202a"
        },
        "date": 1695088955654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268136.77142857143,
            "unit": "ns",
            "range": "± 8798.168670025512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250094.35897435897,
            "unit": "ns",
            "range": "± 7783.762672475985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214797.53333333333,
            "unit": "ns",
            "range": "± 3897.0831925330776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4126962.8,
            "unit": "ns",
            "range": "± 26375.026811631604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3767247.2666666666,
            "unit": "ns",
            "range": "± 35105.94528905461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17282.033333333333,
            "unit": "ns",
            "range": "± 1179.9131795331193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81838.24050632911,
            "unit": "ns",
            "range": "± 4248.361313691614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67427.05555555556,
            "unit": "ns",
            "range": "± 1024.1247897435744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74370.61224489796,
            "unit": "ns",
            "range": "± 11918.448943949847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4336.5053763440865,
            "unit": "ns",
            "range": "± 399.1358770398196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16721.532608695652,
            "unit": "ns",
            "range": "± 1149.7221972255384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3235460.0384615385,
            "unit": "ns",
            "range": "± 87704.72590526957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3341318.090909091,
            "unit": "ns",
            "range": "± 70577.96371315981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4125042.0714285714,
            "unit": "ns",
            "range": "± 48464.5901941491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3649228.533333333,
            "unit": "ns",
            "range": "± 67530.31917153602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5908099.53125,
            "unit": "ns",
            "range": "± 179956.18156866182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1314546.888888889,
            "unit": "ns",
            "range": "± 111123.80424295375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2470847.6129032257,
            "unit": "ns",
            "range": "± 75245.16028364767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1603450.1956521738,
            "unit": "ns",
            "range": "± 92274.14948982836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4366616.142857143,
            "unit": "ns",
            "range": "± 141897.88958492465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45557.2,
            "unit": "ns",
            "range": "± 2469.1220041602987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7597657.142857143,
            "unit": "ns",
            "range": "± 11471.698773383683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19084312,
            "unit": "ns",
            "range": "± 105571.43975594373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49433310.266666666,
            "unit": "ns",
            "range": "± 325400.8592851212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97675517.21428572,
            "unit": "ns",
            "range": "± 1035222.9721787683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195243700.2857143,
            "unit": "ns",
            "range": "± 938198.7139334469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5061012.179129465,
            "unit": "ns",
            "range": "± 19033.242361362958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566823.1521935095,
            "unit": "ns",
            "range": "± 2679.845574748353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060291.4041666666,
            "unit": "ns",
            "range": "± 787.0438674720614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509341.3046875,
            "unit": "ns",
            "range": "± 1729.1857835589576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809297.812875601,
            "unit": "ns",
            "range": "± 4064.018962559899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728013.567952474,
            "unit": "ns",
            "range": "± 391.7717998760915"
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
          "id": "a7b56a6a7e866cf8abb80aeb9d53b2b06a0a60a8",
          "message": "Merge pull request #3424 from greymistcube/feature/inverse-keyconversion\n\nInitial implementation of AccountDiff",
          "timestamp": "2023-09-19T11:01:54+09:00",
          "tree_id": "cc068e28f549f9bb67e03f8e667c1fb610b3a3ce",
          "url": "https://github.com/planetarium/libplanet/commit/a7b56a6a7e866cf8abb80aeb9d53b2b06a0a60a8"
        },
        "date": 1695089729841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242558.14736842105,
            "unit": "ns",
            "range": "± 22391.410543962258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231064.3152173913,
            "unit": "ns",
            "range": "± 17009.910189586182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211329.65168539327,
            "unit": "ns",
            "range": "± 15223.758789606347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3679616.5,
            "unit": "ns",
            "range": "± 153557.63013092033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658042.709090909,
            "unit": "ns",
            "range": "± 152989.06578535854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14862.358024691359,
            "unit": "ns",
            "range": "± 3986.4608843830447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79278.42268041238,
            "unit": "ns",
            "range": "± 14371.887143276055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72030,
            "unit": "ns",
            "range": "± 12597.407847615583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64300.044444444444,
            "unit": "ns",
            "range": "± 13208.543117198858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4060.913043478261,
            "unit": "ns",
            "range": "± 372.104902264854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14019.130952380952,
            "unit": "ns",
            "range": "± 1305.3350378190719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2909060.673469388,
            "unit": "ns",
            "range": "± 192336.41279642662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3178083.2604166665,
            "unit": "ns",
            "range": "± 275706.33573321585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3789160.5773195876,
            "unit": "ns",
            "range": "± 267689.62037718995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3256512.988235294,
            "unit": "ns",
            "range": "± 175259.66519204024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5668370.580645162,
            "unit": "ns",
            "range": "± 320109.7891570994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1283597.1666666667,
            "unit": "ns",
            "range": "± 151231.36453378605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2404489.3469387754,
            "unit": "ns",
            "range": "± 199368.00573338044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1489895.0107526882,
            "unit": "ns",
            "range": "± 154593.02071241447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4388982.760416667,
            "unit": "ns",
            "range": "± 379956.88886109844"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48049.50537634409,
            "unit": "ns",
            "range": "± 8799.236951383977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7035705.59375,
            "unit": "ns",
            "range": "± 212410.23151498375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17361882.923076924,
            "unit": "ns",
            "range": "± 209549.044945116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45315891.5,
            "unit": "ns",
            "range": "± 958482.3160959297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89464392.28571428,
            "unit": "ns",
            "range": "± 1327881.063611406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179529648.46666667,
            "unit": "ns",
            "range": "± 3012028.1683985405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4277359.2265625,
            "unit": "ns",
            "range": "± 56006.35723855579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1456943.965234375,
            "unit": "ns",
            "range": "± 26963.906817282717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 968539.8578404018,
            "unit": "ns",
            "range": "± 11367.29834661435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2293475.1838727677,
            "unit": "ns",
            "range": "± 24062.18062070209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 756762.2462439904,
            "unit": "ns",
            "range": "± 10765.669947822318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 698144.4296123798,
            "unit": "ns",
            "range": "± 6541.987236379831"
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
          "id": "48a855a9788df70037f00e522d370b01af67db01",
          "message": "Merge pull request #3428 from greymistcube/refactor/cleanup-txsuccess\n\n♻️ Cleanup `TxSuccess` and `TxFailure`",
          "timestamp": "2023-09-20T10:49:28+09:00",
          "tree_id": "39ff51a5edb05c68e803a2e0d9eec444ab4d1c41",
          "url": "https://github.com/planetarium/libplanet/commit/48a855a9788df70037f00e522d370b01af67db01"
        },
        "date": 1695175616441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334882.76,
            "unit": "ns",
            "range": "± 13317.327924297171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319089.06666666665,
            "unit": "ns",
            "range": "± 5611.60975716119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300469.18518518517,
            "unit": "ns",
            "range": "± 12582.301196483164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5404200.615384615,
            "unit": "ns",
            "range": "± 45236.25080901832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5110155.428571428,
            "unit": "ns",
            "range": "± 35861.50313189787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25818.31914893617,
            "unit": "ns",
            "range": "± 1712.5453496091968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110806.93406593407,
            "unit": "ns",
            "range": "± 6425.544080382431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91181.71428571429,
            "unit": "ns",
            "range": "± 4198.587671250861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98022.73626373627,
            "unit": "ns",
            "range": "± 10891.171872296045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7429.663265306122,
            "unit": "ns",
            "range": "± 1153.0836107047164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26752.32978723404,
            "unit": "ns",
            "range": "± 2350.999807395143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4464544.470588235,
            "unit": "ns",
            "range": "± 140607.34465260585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4599020.016949153,
            "unit": "ns",
            "range": "± 203652.4439331578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5535248.121212121,
            "unit": "ns",
            "range": "± 170168.73510995592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5069035.25,
            "unit": "ns",
            "range": "± 143744.0008968168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7656578.038461538,
            "unit": "ns",
            "range": "± 202099.8455131484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1728005.3255813953,
            "unit": "ns",
            "range": "± 92030.97529974439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3384310.175,
            "unit": "ns",
            "range": "± 118741.00010934971"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157293.883116883,
            "unit": "ns",
            "range": "± 109692.02092341299"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500915.590909091,
            "unit": "ns",
            "range": "± 127853.8224713636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57818.52127659575,
            "unit": "ns",
            "range": "± 3763.5457107290117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10512790.375,
            "unit": "ns",
            "range": "± 197677.94892733148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27235518,
            "unit": "ns",
            "range": "± 421015.9905642936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67351025.53333333,
            "unit": "ns",
            "range": "± 293191.1991190017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136298482.76923078,
            "unit": "ns",
            "range": "± 418941.86946205195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273179021.5,
            "unit": "ns",
            "range": "± 648995.4962397659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6313581.222222222,
            "unit": "ns",
            "range": "± 176944.22104954897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1921628.6357421875,
            "unit": "ns",
            "range": "± 1108.5172551961164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1281088.7250976562,
            "unit": "ns",
            "range": "± 1169.2063538171049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197694.229910714,
            "unit": "ns",
            "range": "± 15137.986295333178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024976.4646809896,
            "unit": "ns",
            "range": "± 4683.528578531775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 901180.9553222656,
            "unit": "ns",
            "range": "± 16584.07707479692"
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
          "id": "c7170b1176182a22224dae5d920fcedff4fd4900",
          "message": "Merge pull request #3429 from greymistcube/refactor/txexecution-itrie\n\n♻️ `TxExecution` overhaul",
          "timestamp": "2023-09-21T17:18:45+09:00",
          "tree_id": "0d2b90731f22301d1c2f7ca0cccf215cf3f3bfbf",
          "url": "https://github.com/planetarium/libplanet/commit/c7170b1176182a22224dae5d920fcedff4fd4900"
        },
        "date": 1695285201474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292789.35294117645,
            "unit": "ns",
            "range": "± 9270.560945018058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273087.77966101695,
            "unit": "ns",
            "range": "± 11247.542634401643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232712.1739130435,
            "unit": "ns",
            "range": "± 5768.567158254165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4505787.866666666,
            "unit": "ns",
            "range": "± 78071.05691599769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4129961.8421052634,
            "unit": "ns",
            "range": "± 89489.27210147293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21514.916666666668,
            "unit": "ns",
            "range": "± 2048.08221291949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91881.32222222222,
            "unit": "ns",
            "range": "± 6257.718451708174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74135.40625,
            "unit": "ns",
            "range": "± 3420.636814000231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90449.46875,
            "unit": "ns",
            "range": "± 14543.322010971311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5960.479166666667,
            "unit": "ns",
            "range": "± 668.3007828841056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22643.104166666668,
            "unit": "ns",
            "range": "± 2712.219275715259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3589542.1333333333,
            "unit": "ns",
            "range": "± 127650.1101022564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3872058.8235294116,
            "unit": "ns",
            "range": "± 77142.77438963037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4516132.791666667,
            "unit": "ns",
            "range": "± 106250.1964339787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4181624.111111111,
            "unit": "ns",
            "range": "± 86657.98118424007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6471421.375,
            "unit": "ns",
            "range": "± 198410.9094593843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444820.8902439023,
            "unit": "ns",
            "range": "± 74272.28699260081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823297.4615384615,
            "unit": "ns",
            "range": "± 98864.25704465645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1983520.2359550563,
            "unit": "ns",
            "range": "± 102083.32506295825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6060067.882352941,
            "unit": "ns",
            "range": "± 191353.97358865468"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48545.88172043011,
            "unit": "ns",
            "range": "± 3211.3404517004174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8697938.541666666,
            "unit": "ns",
            "range": "± 217920.61016282355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22831702.666666668,
            "unit": "ns",
            "range": "± 317956.9848992755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56610620,
            "unit": "ns",
            "range": "± 684006.48445976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111921892.4,
            "unit": "ns",
            "range": "± 1771982.0096789438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223837239.07142857,
            "unit": "ns",
            "range": "± 2635100.377249514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5147690.411658654,
            "unit": "ns",
            "range": "± 23546.612508486454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574989.051595052,
            "unit": "ns",
            "range": "± 1429.5370567134225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1090417.840625,
            "unit": "ns",
            "range": "± 1962.4355315034936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606678.195572917,
            "unit": "ns",
            "range": "± 4516.19195081208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831723.7063151042,
            "unit": "ns",
            "range": "± 652.4067640601061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749853.9743489583,
            "unit": "ns",
            "range": "± 679.7500283451127"
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
          "id": "b4bdf49f452e229086e153945eaff2810b22cf53",
          "message": "Merge pull request #3430 from greymistcube/chore/remove-clutter\n\n🧹 Remove unnecessary clutter",
          "timestamp": "2023-09-22T10:36:21+09:00",
          "tree_id": "e99e29b817674d96659443d5dc38aa9a9006f502",
          "url": "https://github.com/planetarium/libplanet/commit/b4bdf49f452e229086e153945eaff2810b22cf53"
        },
        "date": 1695347382336,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284547.85185185185,
            "unit": "ns",
            "range": "± 7884.89096897304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268027.3823529412,
            "unit": "ns",
            "range": "± 8508.298056548858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229385.6,
            "unit": "ns",
            "range": "± 3803.032282647249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4309880.642857143,
            "unit": "ns",
            "range": "± 66644.66893978398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4000194.6,
            "unit": "ns",
            "range": "± 74222.07480527609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19385.022222222222,
            "unit": "ns",
            "range": "± 1616.1490571050442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84090.62318840579,
            "unit": "ns",
            "range": "± 3838.3220219466048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70971.7,
            "unit": "ns",
            "range": "± 1572.464445251131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82751.11224489796,
            "unit": "ns",
            "range": "± 14080.926356214171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5289.697916666667,
            "unit": "ns",
            "range": "± 622.4216056287803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19579.13440860215,
            "unit": "ns",
            "range": "± 1244.5078631378246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3448166.0857142857,
            "unit": "ns",
            "range": "± 166237.93390762713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3588855.222222222,
            "unit": "ns",
            "range": "± 127798.92256852858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4303208.8,
            "unit": "ns",
            "range": "± 127176.79056266788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3944435.6415094337,
            "unit": "ns",
            "range": "± 163490.36480643772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6192019.785714285,
            "unit": "ns",
            "range": "± 224971.12167961075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365344.5375,
            "unit": "ns",
            "range": "± 71144.60800457867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2709330.4393939395,
            "unit": "ns",
            "range": "± 125920.01517179667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1857804.397260274,
            "unit": "ns",
            "range": "± 91583.4854328036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5865245.94,
            "unit": "ns",
            "range": "± 234020.64013998196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48188.90410958904,
            "unit": "ns",
            "range": "± 2333.6664533898843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8111569.8,
            "unit": "ns",
            "range": "± 134107.708268498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22001744.125,
            "unit": "ns",
            "range": "± 427560.9163890568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54436019.571428575,
            "unit": "ns",
            "range": "± 844993.950944185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108233808.71428572,
            "unit": "ns",
            "range": "± 1781831.158989427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215752665.73333332,
            "unit": "ns",
            "range": "± 3672830.7166505484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5018457.381138393,
            "unit": "ns",
            "range": "± 22700.68632155376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1601435.5143694195,
            "unit": "ns",
            "range": "± 6990.9793164937355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068380.7075520833,
            "unit": "ns",
            "range": "± 3760.264356456712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627005.05390625,
            "unit": "ns",
            "range": "± 8168.736514328294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824809.8994140625,
            "unit": "ns",
            "range": "± 1702.7932085476261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765516.4333333333,
            "unit": "ns",
            "range": "± 1424.9267843776609"
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
          "id": "d5c4ad2909d2dbbdf36a6c80622ea4ceba8ac559",
          "message": "Merge pull request #3431 from greymistcube/refactor/single-trie-commit\n\n♻️ Commit once for `IActionEvaluation`s",
          "timestamp": "2023-09-25T14:57:18+09:00",
          "tree_id": "78f01675d622d3342bb8561bfb371a960019f4fe",
          "url": "https://github.com/planetarium/libplanet/commit/d5c4ad2909d2dbbdf36a6c80622ea4ceba8ac559"
        },
        "date": 1695622516917,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336051.18518518517,
            "unit": "ns",
            "range": "± 15638.69388816655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328346.1904761905,
            "unit": "ns",
            "range": "± 7601.336301066068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305686.3214285714,
            "unit": "ns",
            "range": "± 8484.675851219336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5399103.2,
            "unit": "ns",
            "range": "± 35282.56580643923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4979644.538461538,
            "unit": "ns",
            "range": "± 60162.063568076104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26170.141304347828,
            "unit": "ns",
            "range": "± 2264.982485833466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112285,
            "unit": "ns",
            "range": "± 7827.35196025306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103105.76388888889,
            "unit": "ns",
            "range": "± 5097.221655513734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106379.41379310345,
            "unit": "ns",
            "range": "± 7736.837522530773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7865.5368421052635,
            "unit": "ns",
            "range": "± 1094.3529790598443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28351.83695652174,
            "unit": "ns",
            "range": "± 2518.130430147452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4388159.802816901,
            "unit": "ns",
            "range": "± 206132.35759396505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4662952.928571428,
            "unit": "ns",
            "range": "± 76467.28859248779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5468361.25,
            "unit": "ns",
            "range": "± 63871.86086664598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5410682.359375,
            "unit": "ns",
            "range": "± 249143.7673056457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13678109.4,
            "unit": "ns",
            "range": "± 685862.5439085464"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1708864.3209876544,
            "unit": "ns",
            "range": "± 87109.71254168893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3295728.3333333335,
            "unit": "ns",
            "range": "± 102375.86438757999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2562154.4736842103,
            "unit": "ns",
            "range": "± 129094.92977334923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10757733.088235294,
            "unit": "ns",
            "range": "± 317635.82305139554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59567.94736842105,
            "unit": "ns",
            "range": "± 3829.815637383787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10393782.07142857,
            "unit": "ns",
            "range": "± 149939.41377024166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28100388.759259257,
            "unit": "ns",
            "range": "± 1134627.2825620694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68324849.8,
            "unit": "ns",
            "range": "± 255564.29468564547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140394800.2,
            "unit": "ns",
            "range": "± 3655151.6998672797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271046335.06666666,
            "unit": "ns",
            "range": "± 1321229.6687103086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6162267.784970238,
            "unit": "ns",
            "range": "± 104733.71106811374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893401.4588341345,
            "unit": "ns",
            "range": "± 2537.0292122636574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312684.4078125,
            "unit": "ns",
            "range": "± 888.8116725336035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3237537.6658572634,
            "unit": "ns",
            "range": "± 109079.81240898125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974808.11875,
            "unit": "ns",
            "range": "± 1534.8782182398936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912520.9769810268,
            "unit": "ns",
            "range": "± 25877.808103430085"
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
          "id": "6e8bf54a7739ec8f2a108b843bb48202647527b0",
          "message": "Merge pull request #3433 from greymistcube/chore/docs-fix\n\n🧹 Docs fix",
          "timestamp": "2023-09-25T16:43:20+09:00",
          "tree_id": "3be4ec43e39631347d4fc02318a7d2438c02fade",
          "url": "https://github.com/planetarium/libplanet/commit/6e8bf54a7739ec8f2a108b843bb48202647527b0"
        },
        "date": 1695628463424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264332.21276595746,
            "unit": "ns",
            "range": "± 8511.064976881746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255878.2093023256,
            "unit": "ns",
            "range": "± 7715.522380111837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227545.5806451613,
            "unit": "ns",
            "range": "± 6638.748897064836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4164338.8,
            "unit": "ns",
            "range": "± 45824.3264079556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3859058.769230769,
            "unit": "ns",
            "range": "± 26327.655637351654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18762.541666666668,
            "unit": "ns",
            "range": "± 1316.5805143921862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84211.47422680413,
            "unit": "ns",
            "range": "± 4904.856906451637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71278.71428571429,
            "unit": "ns",
            "range": "± 1226.648305723391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78282.9191919192,
            "unit": "ns",
            "range": "± 11809.919095159787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4610.416666666667,
            "unit": "ns",
            "range": "± 383.1941013354011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17358.77319587629,
            "unit": "ns",
            "range": "± 1448.314879330708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3172525.1578947366,
            "unit": "ns",
            "range": "± 64726.09893428972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316544.1333333333,
            "unit": "ns",
            "range": "± 58335.586444623106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4238271.944444444,
            "unit": "ns",
            "range": "± 89779.82006224169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3931576.5,
            "unit": "ns",
            "range": "± 141150.9494011339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9864604.846153846,
            "unit": "ns",
            "range": "± 269563.33812203654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1265134.224489796,
            "unit": "ns",
            "range": "± 86262.5263383758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442983.8076923075,
            "unit": "ns",
            "range": "± 64273.71768492576"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1915214.646153846,
            "unit": "ns",
            "range": "± 88972.89018526772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8260603.25,
            "unit": "ns",
            "range": "± 188947.95506613964"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51837.5,
            "unit": "ns",
            "range": "± 690.7725144117032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7669530.533333333,
            "unit": "ns",
            "range": "± 40521.36551405702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19692347.533333335,
            "unit": "ns",
            "range": "± 77851.8654165595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49132004.733333334,
            "unit": "ns",
            "range": "± 296166.8431773518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98845986.92857143,
            "unit": "ns",
            "range": "± 834119.1738568356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198302958.6,
            "unit": "ns",
            "range": "± 2114955.9409637083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4965546.695913462,
            "unit": "ns",
            "range": "± 10437.613817636693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1554743.5575520834,
            "unit": "ns",
            "range": "± 2292.8615155118337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1063413.55078125,
            "unit": "ns",
            "range": "± 819.6359961215956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2502307.6868990385,
            "unit": "ns",
            "range": "± 1844.0487079716584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 805576.3923177083,
            "unit": "ns",
            "range": "± 7325.746626657281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731354.7829427083,
            "unit": "ns",
            "range": "± 496.986576806464"
          }
        ]
      }
    ]
  }
}