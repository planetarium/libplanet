window.BENCHMARK_DATA = {
  "lastUpdate": 1680863151339,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680856968483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9704426.333333334,
            "unit": "ns",
            "range": "± 188051.3050260487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25656354.733333334,
            "unit": "ns",
            "range": "± 286819.5529281848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65329077,
            "unit": "ns",
            "range": "± 205815.08761021384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130404914.4,
            "unit": "ns",
            "range": "± 1050365.4940868237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272264957.06666666,
            "unit": "ns",
            "range": "± 1893898.3867179684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57967.891304347824,
            "unit": "ns",
            "range": "± 3715.5232322183538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742687.3058823529,
            "unit": "ns",
            "range": "± 90745.54891498268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3228222.3333333335,
            "unit": "ns",
            "range": "± 107369.0025387748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2805430.5147058824,
            "unit": "ns",
            "range": "± 130427.21185665694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756788.84,
            "unit": "ns",
            "range": "± 158780.37904410608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7127246.609375,
            "unit": "ns",
            "range": "± 25337.908032821444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213419.4401041665,
            "unit": "ns",
            "range": "± 3465.997996675089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609435.03828125,
            "unit": "ns",
            "range": "± 3457.044080052252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102751.29296875,
            "unit": "ns",
            "range": "± 3626.369285268561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998065.9204427083,
            "unit": "ns",
            "range": "± 1264.4320636190216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917800.3602864583,
            "unit": "ns",
            "range": "± 626.1835066460595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412043.5172413793,
            "unit": "ns",
            "range": "± 11963.395249739007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335547.78571428574,
            "unit": "ns",
            "range": "± 12267.1499811602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284687.75757575757,
            "unit": "ns",
            "range": "± 8369.709945057471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6937495,
            "unit": "ns",
            "range": "± 75593.66489329645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5114717.533333333,
            "unit": "ns",
            "range": "± 75524.870779543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25053.744680851065,
            "unit": "ns",
            "range": "± 2115.2572986489213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111717.81914893616,
            "unit": "ns",
            "range": "± 6525.694737393934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97061.97894736842,
            "unit": "ns",
            "range": "± 6753.3987802186275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254800.92307692306,
            "unit": "ns",
            "range": "± 3204.4090578851524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7996.381443298969,
            "unit": "ns",
            "range": "± 1076.3933745315394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24280.907216494845,
            "unit": "ns",
            "range": "± 2004.315890576686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4154660.3076923075,
            "unit": "ns",
            "range": "± 110850.17439905784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470513.857142857,
            "unit": "ns",
            "range": "± 70279.2989488886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5069360.045454546,
            "unit": "ns",
            "range": "± 120462.0876697716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5667090.428571428,
            "unit": "ns",
            "range": "± 89516.51790652881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8623089.5,
            "unit": "ns",
            "range": "± 176917.68279668107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b4d9e6457a2d387590dae0276c7c7a02c45b6bec",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:26:55+09:00",
          "tree_id": "4b1463dc4140dc32c232f7eb6d13b81287913ef6",
          "url": "https://github.com/planetarium/libplanet/commit/b4d9e6457a2d387590dae0276c7c7a02c45b6bec"
        },
        "date": 1680856968483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9704426.333333334,
            "unit": "ns",
            "range": "± 188051.3050260487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25656354.733333334,
            "unit": "ns",
            "range": "± 286819.5529281848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65329077,
            "unit": "ns",
            "range": "± 205815.08761021384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130404914.4,
            "unit": "ns",
            "range": "± 1050365.4940868237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272264957.06666666,
            "unit": "ns",
            "range": "± 1893898.3867179684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57967.891304347824,
            "unit": "ns",
            "range": "± 3715.5232322183538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1742687.3058823529,
            "unit": "ns",
            "range": "± 90745.54891498268"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3228222.3333333335,
            "unit": "ns",
            "range": "± 107369.0025387748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2805430.5147058824,
            "unit": "ns",
            "range": "± 130427.21185665694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756788.84,
            "unit": "ns",
            "range": "± 158780.37904410608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7127246.609375,
            "unit": "ns",
            "range": "± 25337.908032821444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213419.4401041665,
            "unit": "ns",
            "range": "± 3465.997996675089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609435.03828125,
            "unit": "ns",
            "range": "± 3457.044080052252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3102751.29296875,
            "unit": "ns",
            "range": "± 3626.369285268561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998065.9204427083,
            "unit": "ns",
            "range": "± 1264.4320636190216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917800.3602864583,
            "unit": "ns",
            "range": "± 626.1835066460595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412043.5172413793,
            "unit": "ns",
            "range": "± 11963.395249739007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335547.78571428574,
            "unit": "ns",
            "range": "± 12267.1499811602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284687.75757575757,
            "unit": "ns",
            "range": "± 8369.709945057471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6937495,
            "unit": "ns",
            "range": "± 75593.66489329645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5114717.533333333,
            "unit": "ns",
            "range": "± 75524.870779543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25053.744680851065,
            "unit": "ns",
            "range": "± 2115.2572986489213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111717.81914893616,
            "unit": "ns",
            "range": "± 6525.694737393934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97061.97894736842,
            "unit": "ns",
            "range": "± 6753.3987802186275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 254800.92307692306,
            "unit": "ns",
            "range": "± 3204.4090578851524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7996.381443298969,
            "unit": "ns",
            "range": "± 1076.3933745315394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24280.907216494845,
            "unit": "ns",
            "range": "± 2004.315890576686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4154660.3076923075,
            "unit": "ns",
            "range": "± 110850.17439905784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4470513.857142857,
            "unit": "ns",
            "range": "± 70279.2989488886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5069360.045454546,
            "unit": "ns",
            "range": "± 120462.0876697716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5667090.428571428,
            "unit": "ns",
            "range": "± 89516.51790652881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8623089.5,
            "unit": "ns",
            "range": "± 176917.68279668107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "4b1126f45c6003701f589bd833bd06b4d58ebc0e",
          "message": "account: equality methods for Address & PublicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T17:24:14+09:00",
          "tree_id": "96574fd822fde38ca21564581d22e27b6154869f",
          "url": "https://github.com/planetarium/libplanet/commit/4b1126f45c6003701f589bd833bd06b4d58ebc0e"
        },
        "date": 1680857050022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8712678.838709677,
            "unit": "ns",
            "range": "± 797457.5152250961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24402399.2,
            "unit": "ns",
            "range": "± 2263367.188327903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63424084.15151515,
            "unit": "ns",
            "range": "± 4714048.125039421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120997773.6632653,
            "unit": "ns",
            "range": "± 8586802.92374806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257000499.47777778,
            "unit": "ns",
            "range": "± 14290887.737517918"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70767.97894736842,
            "unit": "ns",
            "range": "± 17029.21710758966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700893.663265306,
            "unit": "ns",
            "range": "± 228453.28303403684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3449490.414141414,
            "unit": "ns",
            "range": "± 412843.8163273551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2701397.1578947366,
            "unit": "ns",
            "range": "± 275138.4258391415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7330600.49,
            "unit": "ns",
            "range": "± 715979.9876331046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6749880.961292613,
            "unit": "ns",
            "range": "± 165329.393394564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181914.8102101292,
            "unit": "ns",
            "range": "± 62039.11748155615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1572749.2067307692,
            "unit": "ns",
            "range": "± 42895.3008839669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2981283.9106770833,
            "unit": "ns",
            "range": "± 55749.42060989144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977701.7475818453,
            "unit": "ns",
            "range": "± 23052.2666589643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906179.435438368,
            "unit": "ns",
            "range": "± 19223.933798686427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 426721.42268041236,
            "unit": "ns",
            "range": "± 55916.15742878556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343360.30303030304,
            "unit": "ns",
            "range": "± 53412.243544511926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310679.306122449,
            "unit": "ns",
            "range": "± 53502.75848450914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6419004.020833333,
            "unit": "ns",
            "range": "± 751475.8040881812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4676905.806122449,
            "unit": "ns",
            "range": "± 520874.0752935596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33393.06122448979,
            "unit": "ns",
            "range": "± 11343.971513872606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111575.0612244898,
            "unit": "ns",
            "range": "± 22756.79209941521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102996.40206185567,
            "unit": "ns",
            "range": "± 19667.416156795458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 250601.14285714287,
            "unit": "ns",
            "range": "± 44321.48603778914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5806.246913580247,
            "unit": "ns",
            "range": "± 1122.7736028566067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32442.484536082473,
            "unit": "ns",
            "range": "± 10940.100710910414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3742248.7040816327,
            "unit": "ns",
            "range": "± 436951.05701570085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3813685.9081632653,
            "unit": "ns",
            "range": "± 465947.6605419953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4800657.030927835,
            "unit": "ns",
            "range": "± 522269.55305672565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4994258.948453608,
            "unit": "ns",
            "range": "± 683010.7325676297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8751090.979381444,
            "unit": "ns",
            "range": "± 877886.1679550202"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "399c2a5b09de9147e9d826cfbceccae24c08bfdf",
          "message": "account-web3: support scrypt, reduce ethers dependency\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-07T19:12:03+09:00",
          "tree_id": "1d97dee16e6f78e5deb09cb941f9f803ceeed7de",
          "url": "https://github.com/planetarium/libplanet/commit/399c2a5b09de9147e9d826cfbceccae24c08bfdf"
        },
        "date": 1680863131237,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7543014.857142857,
            "unit": "ns",
            "range": "± 26871.370246064842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20890811.133333333,
            "unit": "ns",
            "range": "± 318997.65150677535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51530207.705882356,
            "unit": "ns",
            "range": "± 996782.4480603056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100692424.35714285,
            "unit": "ns",
            "range": "± 970146.5948933545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200858488.14285713,
            "unit": "ns",
            "range": "± 1777916.2345015826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49162.82716049383,
            "unit": "ns",
            "range": "± 2553.6311929785566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404475.7441860465,
            "unit": "ns",
            "range": "± 74841.03150469487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2610525.227272727,
            "unit": "ns",
            "range": "± 63512.93458436097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2242168.608108108,
            "unit": "ns",
            "range": "± 111835.93253485307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5451633.476190476,
            "unit": "ns",
            "range": "± 129246.5560398493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5782903.583333333,
            "unit": "ns",
            "range": "± 28237.401477800115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819018.5044270833,
            "unit": "ns",
            "range": "± 7605.14247226967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333814.0472935268,
            "unit": "ns",
            "range": "± 4963.438549174013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616865.736197917,
            "unit": "ns",
            "range": "± 6217.448091879844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826516.40625,
            "unit": "ns",
            "range": "± 1045.2020542474008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742021.2263020833,
            "unit": "ns",
            "range": "± 1197.3655781019559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330322.76923076925,
            "unit": "ns",
            "range": "± 5144.678256118098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275757.51515151514,
            "unit": "ns",
            "range": "± 8732.982784826485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234569.2857142857,
            "unit": "ns",
            "range": "± 2200.2122774709865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5646079,
            "unit": "ns",
            "range": "± 59704.71786455166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815148.6428571427,
            "unit": "ns",
            "range": "± 59651.67205549634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19135.23157894737,
            "unit": "ns",
            "range": "± 1323.790202030579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86827.53846153847,
            "unit": "ns",
            "range": "± 4485.95837446833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75018.5,
            "unit": "ns",
            "range": "± 1136.5152080732655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 198921.54081632654,
            "unit": "ns",
            "range": "± 19693.811072521552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5848.102040816327,
            "unit": "ns",
            "range": "± 830.671452287411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16913.968421052632,
            "unit": "ns",
            "range": "± 1094.3310932004779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254052.9375,
            "unit": "ns",
            "range": "± 59964.011104960555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3417564.4615384615,
            "unit": "ns",
            "range": "± 86044.2586185648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4207076.4375,
            "unit": "ns",
            "range": "± 73659.17250414801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4354804.4130434785,
            "unit": "ns",
            "range": "± 166607.6891769106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7265667.78125,
            "unit": "ns",
            "range": "± 208000.17077392715"
          }
        ]
      }
    ]
  }
}