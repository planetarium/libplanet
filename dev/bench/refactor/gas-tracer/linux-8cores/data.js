window.BENCHMARK_DATA = {
  "lastUpdate": 1729840842205,
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
          "id": "a50194312c8ae642100951cc0400ea684485dfb4",
          "message": "refactor: Refactor GasTracer",
          "timestamp": "2024-10-25T15:01:52+09:00",
          "tree_id": "c0767e988107193ca2cff5208a057ccbec773e0f",
          "url": "https://github.com/planetarium/libplanet/commit/a50194312c8ae642100951cc0400ea684485dfb4"
        },
        "date": 1729838097030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10874765.733333332,
            "unit": "ns",
            "range": "± 76341.26872936763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28091479.14285714,
            "unit": "ns",
            "range": "± 86818.91730834593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71526650.16666667,
            "unit": "ns",
            "range": "± 266576.7929669119"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143565384.64285713,
            "unit": "ns",
            "range": "± 513453.53175884555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289434500.6666667,
            "unit": "ns",
            "range": "± 1528434.0356313651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109596.1551724138,
            "unit": "ns",
            "range": "± 4808.064061486571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193878.92156862744,
            "unit": "ns",
            "range": "± 6485.432151655392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172705.0625,
            "unit": "ns",
            "range": "± 3375.310108592493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2893889.4285714286,
            "unit": "ns",
            "range": "± 26189.480606105626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2869493.6666666665,
            "unit": "ns",
            "range": "± 51651.789496958336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15281.714285714286,
            "unit": "ns",
            "range": "± 2216.948157720567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60393.529411764706,
            "unit": "ns",
            "range": "± 3248.3092803291174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49566.88461538462,
            "unit": "ns",
            "range": "± 600.2508556791817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50738.845360824744,
            "unit": "ns",
            "range": "± 7168.873975010833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2454.255319148936,
            "unit": "ns",
            "range": "± 291.48764470284704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12001.9875,
            "unit": "ns",
            "range": "± 641.8659111863145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3745699.224051339,
            "unit": "ns",
            "range": "± 4316.227023912873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223849.948828125,
            "unit": "ns",
            "range": "± 1617.8487153697936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771226.4954427084,
            "unit": "ns",
            "range": "± 1003.2580660024687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2019904.0653645834,
            "unit": "ns",
            "range": "± 1950.6711811264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631828.4543108259,
            "unit": "ns",
            "range": "± 996.3089173410385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586072.7016276042,
            "unit": "ns",
            "range": "± 479.5564188000344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405811.076923077,
            "unit": "ns",
            "range": "± 27528.99264248978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2552999.111111111,
            "unit": "ns",
            "range": "± 52353.692919791916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2987938.3571428573,
            "unit": "ns",
            "range": "± 32980.27002643374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2658083.066666667,
            "unit": "ns",
            "range": "± 34400.93291398332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3218136.6333333333,
            "unit": "ns",
            "range": "± 58086.371616347154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 995717.8101265823,
            "unit": "ns",
            "range": "± 51454.41871161957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1930281.4782608696,
            "unit": "ns",
            "range": "± 48260.791927222745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1584211.1375,
            "unit": "ns",
            "range": "± 82678.73129698826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7722055.136363637,
            "unit": "ns",
            "range": "± 244413.20886523533"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30550.85,
            "unit": "ns",
            "range": "± 684.7550676202251"
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
          "id": "680df7e0f9b05df884b769d4084e1af840ce65b5",
          "message": "test: Remove test code for GasTracer",
          "timestamp": "2024-10-25T15:55:40+09:00",
          "tree_id": "5a70baf4dd1ff61cc4e5cca3cd162c6123893c7c",
          "url": "https://github.com/planetarium/libplanet/commit/680df7e0f9b05df884b769d4084e1af840ce65b5"
        },
        "date": 1729839924681,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10749075.6,
            "unit": "ns",
            "range": "± 124013.54842331889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28640517.214285713,
            "unit": "ns",
            "range": "± 100122.90230928769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71037555.66666667,
            "unit": "ns",
            "range": "± 536794.0064196835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141235868.14285713,
            "unit": "ns",
            "range": "± 508764.5390062928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297104261.1333333,
            "unit": "ns",
            "range": "± 780695.9230949805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108368,
            "unit": "ns",
            "range": "± 5379.068159848199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192991.9375,
            "unit": "ns",
            "range": "± 6341.727957376628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164790.7105263158,
            "unit": "ns",
            "range": "± 3488.926746451588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2891605.9285714286,
            "unit": "ns",
            "range": "± 29519.86657181198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2773857.5714285714,
            "unit": "ns",
            "range": "± 64641.10671977347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12880.776470588235,
            "unit": "ns",
            "range": "± 674.8041228398656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60093.98863636364,
            "unit": "ns",
            "range": "± 3605.443663595874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49200.692307692305,
            "unit": "ns",
            "range": "± 675.7812003668279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51639.0918367347,
            "unit": "ns",
            "range": "± 7499.080761655364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2512.6649484536083,
            "unit": "ns",
            "range": "± 314.44394308353975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12149.91489361702,
            "unit": "ns",
            "range": "± 811.8570992904282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3833269.494698661,
            "unit": "ns",
            "range": "± 7012.194991443064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200246.2216796875,
            "unit": "ns",
            "range": "± 1225.242485375696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 775169.1831054688,
            "unit": "ns",
            "range": "± 1078.01553508022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2071525.2916666667,
            "unit": "ns",
            "range": "± 3089.9219999829625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627733.8071614583,
            "unit": "ns",
            "range": "± 433.678026542992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569308.2525390625,
            "unit": "ns",
            "range": "± 384.87035980082277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2392884.966666667,
            "unit": "ns",
            "range": "± 44231.670629711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2602647.6923076925,
            "unit": "ns",
            "range": "± 36269.420281610546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2991383.285714286,
            "unit": "ns",
            "range": "± 51036.93596486096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2608981.346153846,
            "unit": "ns",
            "range": "± 41957.46910036034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3279596.382352941,
            "unit": "ns",
            "range": "± 66575.9987832349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015326.1521739131,
            "unit": "ns",
            "range": "± 85181.47827483671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907920.95,
            "unit": "ns",
            "range": "± 66308.01726749304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1579794.8493150685,
            "unit": "ns",
            "range": "± 75015.64787275149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7786606.261904762,
            "unit": "ns",
            "range": "± 284755.0500463178"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31001.0223880597,
            "unit": "ns",
            "range": "± 822.569428923949"
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
          "id": "efd4aa4a416ab1b5d56f368569b20f7f8ef1bed1",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T16:07:57+09:00",
          "tree_id": "508f630c27766e3fe2c0aaaff482bb711bac9420",
          "url": "https://github.com/planetarium/libplanet/commit/efd4aa4a416ab1b5d56f368569b20f7f8ef1bed1"
        },
        "date": 1729840563569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10744368.866666667,
            "unit": "ns",
            "range": "± 72411.75671500023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27769003.14285714,
            "unit": "ns",
            "range": "± 161097.18927971454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72022716.3,
            "unit": "ns",
            "range": "± 308957.9684737993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142659002.35714287,
            "unit": "ns",
            "range": "± 418823.1297770543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292391556.3,
            "unit": "ns",
            "range": "± 1448064.8018989344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108550.45348837209,
            "unit": "ns",
            "range": "± 5853.265119284683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189838.3064516129,
            "unit": "ns",
            "range": "± 7835.156909072962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164677.68421052632,
            "unit": "ns",
            "range": "± 3071.2600934149987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2869364.6666666665,
            "unit": "ns",
            "range": "± 48950.37680384182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2748780.0714285714,
            "unit": "ns",
            "range": "± 36242.52650964331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12495.306818181818,
            "unit": "ns",
            "range": "± 740.8148256683243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59811.086956521736,
            "unit": "ns",
            "range": "± 3445.015281396988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49474.07142857143,
            "unit": "ns",
            "range": "± 802.9613904201711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55978.45918367347,
            "unit": "ns",
            "range": "± 11964.3404229422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2365.842105263158,
            "unit": "ns",
            "range": "± 223.40671411220913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11766.191011235955,
            "unit": "ns",
            "range": "± 779.4875921282649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729258.8030133927,
            "unit": "ns",
            "range": "± 4387.0383496504555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1250559.3569010417,
            "unit": "ns",
            "range": "± 1327.9841725265674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759175.3774088542,
            "unit": "ns",
            "range": "± 1132.5853188095512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2041941.3119791667,
            "unit": "ns",
            "range": "± 2022.1823766164282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 645601.9227864583,
            "unit": "ns",
            "range": "± 2743.0057113365947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572725.4656808035,
            "unit": "ns",
            "range": "± 412.93326344974446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450428.3571428573,
            "unit": "ns",
            "range": "± 25142.924007965532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2461143.590909091,
            "unit": "ns",
            "range": "± 60253.084286128804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2976211.4,
            "unit": "ns",
            "range": "± 37179.35784007034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2626534.95,
            "unit": "ns",
            "range": "± 59674.10217565952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3241888,
            "unit": "ns",
            "range": "± 43319.7753771966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982242.524691358,
            "unit": "ns",
            "range": "± 48688.829922779856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918190.0882352942,
            "unit": "ns",
            "range": "± 60697.577178628926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1595390.8055555555,
            "unit": "ns",
            "range": "± 77907.96452236445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7762057.814814814,
            "unit": "ns",
            "range": "± 208449.3177782878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31081.416666666668,
            "unit": "ns",
            "range": "± 783.0001897199318"
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
          "id": "7b8b6ad6d76eb3652d03a0d895253c358a074612",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T16:11:34+09:00",
          "tree_id": "071485a386c218869c7e5b9a66d87d7e907bbd39",
          "url": "https://github.com/planetarium/libplanet/commit/7b8b6ad6d76eb3652d03a0d895253c358a074612"
        },
        "date": 1729840815440,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10669229.285714285,
            "unit": "ns",
            "range": "± 77094.31457255514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27828277,
            "unit": "ns",
            "range": "± 220863.61190659853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70371504.16666667,
            "unit": "ns",
            "range": "± 842119.8203102578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140491435.4,
            "unit": "ns",
            "range": "± 1435917.2409067512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 294001470.06666666,
            "unit": "ns",
            "range": "± 1451908.9343286485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111396.9574468085,
            "unit": "ns",
            "range": "± 8972.251468996003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191197.4153846154,
            "unit": "ns",
            "range": "± 8414.386073661857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167286.3076923077,
            "unit": "ns",
            "range": "± 2677.022393898844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2945073.6666666665,
            "unit": "ns",
            "range": "± 41817.5992319479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2739610.566666667,
            "unit": "ns",
            "range": "± 33431.15587392495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12486.413580246914,
            "unit": "ns",
            "range": "± 668.3136650841964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59254.49333333333,
            "unit": "ns",
            "range": "± 2868.090844302386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49042.38461538462,
            "unit": "ns",
            "range": "± 691.5701384604865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56400,
            "unit": "ns",
            "range": "± 6124.595542201587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2713.918367346939,
            "unit": "ns",
            "range": "± 701.9167670789644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12089.733333333334,
            "unit": "ns",
            "range": "± 756.536965983075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3700978.306640625,
            "unit": "ns",
            "range": "± 4858.973067287662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1199317.7186104911,
            "unit": "ns",
            "range": "± 1153.7112201481048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 754147.6705228365,
            "unit": "ns",
            "range": "± 762.7654040900045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990744.5559895833,
            "unit": "ns",
            "range": "± 2923.4226233558447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634107.0516276042,
            "unit": "ns",
            "range": "± 703.3603213346254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575313.2767578125,
            "unit": "ns",
            "range": "± 686.3265846941263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2458012.966666667,
            "unit": "ns",
            "range": "± 33554.94641813349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2476773.125,
            "unit": "ns",
            "range": "± 47997.3628954411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3026695.1428571427,
            "unit": "ns",
            "range": "± 36882.662157498555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2642293,
            "unit": "ns",
            "range": "± 42470.94582589554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3387675.6,
            "unit": "ns",
            "range": "± 48825.707376632774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975664.7101449275,
            "unit": "ns",
            "range": "± 43227.88548056255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898053.1666666667,
            "unit": "ns",
            "range": "± 65141.1926443077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1571325.1791044776,
            "unit": "ns",
            "range": "± 74611.51360535843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7868275.444444444,
            "unit": "ns",
            "range": "± 298571.8723935933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31244.21875,
            "unit": "ns",
            "range": "± 964.4085513052263"
          }
        ]
      }
    ]
  }
}