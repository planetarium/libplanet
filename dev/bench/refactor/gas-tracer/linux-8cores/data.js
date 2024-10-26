window.BENCHMARK_DATA = {
  "lastUpdate": 1729940756234,
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
          "id": "129b0cbc78441199ea4837efb2d0d8d17f2c2f2a",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T19:56:42+09:00",
          "tree_id": "ead3a5e3d24d257b130cc5f02db9d2b6c262792c",
          "url": "https://github.com/planetarium/libplanet/commit/129b0cbc78441199ea4837efb2d0d8d17f2c2f2a"
        },
        "date": 1729854318336,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10732632.533333333,
            "unit": "ns",
            "range": "± 46129.09654726252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27889034.35714286,
            "unit": "ns",
            "range": "± 99294.29599049107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69815697.4,
            "unit": "ns",
            "range": "± 286551.72235138086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141750756.13333333,
            "unit": "ns",
            "range": "± 647912.5330915614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293201852.43333334,
            "unit": "ns",
            "range": "± 2887921.0892695426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108777.86813186813,
            "unit": "ns",
            "range": "± 6051.805326987222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197968.81395348837,
            "unit": "ns",
            "range": "± 6188.1999623546735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179084.64285714287,
            "unit": "ns",
            "range": "± 2749.1676182813217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2902859.1428571427,
            "unit": "ns",
            "range": "± 28108.143283800113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2691048.933333333,
            "unit": "ns",
            "range": "± 39985.764610611586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12455,
            "unit": "ns",
            "range": "± 777.5735561952436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60773.739583333336,
            "unit": "ns",
            "range": "± 5074.018649727756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52698.98275862069,
            "unit": "ns",
            "range": "± 1545.414706725527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53178.926315789475,
            "unit": "ns",
            "range": "± 6978.891378828847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2412.6979166666665,
            "unit": "ns",
            "range": "± 323.2301809706991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11966.282608695652,
            "unit": "ns",
            "range": "± 880.385521523046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3714208.0739397323,
            "unit": "ns",
            "range": "± 3314.4488813700486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1200942.5006975445,
            "unit": "ns",
            "range": "± 2104.367104158639"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768330.4716796875,
            "unit": "ns",
            "range": "± 1923.5801078376467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974507.2984375,
            "unit": "ns",
            "range": "± 1893.5512436963315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631825.5866536458,
            "unit": "ns",
            "range": "± 468.74113039405853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 554128.1304408482,
            "unit": "ns",
            "range": "± 252.5409454246719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2469293.3636363638,
            "unit": "ns",
            "range": "± 60574.57404252134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538830.5833333335,
            "unit": "ns",
            "range": "± 32217.484675415086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2995472.1333333333,
            "unit": "ns",
            "range": "± 44010.67954139357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2560341.380952381,
            "unit": "ns",
            "range": "± 59239.912788994036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3249903.533333333,
            "unit": "ns",
            "range": "± 35711.34262961173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991490.467032967,
            "unit": "ns",
            "range": "± 55200.74551679545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917441.6463414633,
            "unit": "ns",
            "range": "± 63259.513230248995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1585868.8666666667,
            "unit": "ns",
            "range": "± 80117.56822697257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7712284.027027027,
            "unit": "ns",
            "range": "± 254286.02057104977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30723,
            "unit": "ns",
            "range": "± 794.289236553252"
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
          "id": "7d041d1c7292aeae445b6efa205ac6c0a2d5641d",
          "message": "chore: Changes",
          "timestamp": "2024-10-25T21:34:03+09:00",
          "tree_id": "d5cab7dceccae85dcc2ab6f675b5d666734f3e90",
          "url": "https://github.com/planetarium/libplanet/commit/7d041d1c7292aeae445b6efa205ac6c0a2d5641d"
        },
        "date": 1729860170583,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10909828.76923077,
            "unit": "ns",
            "range": "± 25743.67432061012"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28215840.666666668,
            "unit": "ns",
            "range": "± 205872.8491956926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71975324.11538461,
            "unit": "ns",
            "range": "± 230863.97925024253"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141108838.46666667,
            "unit": "ns",
            "range": "± 840892.856260863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291816749.14285713,
            "unit": "ns",
            "range": "± 1055160.9076981582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108576.5,
            "unit": "ns",
            "range": "± 5357.471881190463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190456.025,
            "unit": "ns",
            "range": "± 6724.554876079922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163850.75,
            "unit": "ns",
            "range": "± 2283.350613183896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2978379.8333333335,
            "unit": "ns",
            "range": "± 45053.62469113361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880974.714285714,
            "unit": "ns",
            "range": "± 22694.37704054116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12863.521739130434,
            "unit": "ns",
            "range": "± 928.6541541304574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60265.10227272727,
            "unit": "ns",
            "range": "± 3198.9741370711254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60870.92307692308,
            "unit": "ns",
            "range": "± 823.457291094329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51896.62886597938,
            "unit": "ns",
            "range": "± 7762.354223429345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2377.378947368421,
            "unit": "ns",
            "range": "± 320.79386829403455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16165.130434782608,
            "unit": "ns",
            "range": "± 1016.6807576715462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3712445.054387019,
            "unit": "ns",
            "range": "± 4299.91054691581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205220.3481770833,
            "unit": "ns",
            "range": "± 2038.0259254983278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761817.5275530134,
            "unit": "ns",
            "range": "± 797.1356570027119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1965152.400390625,
            "unit": "ns",
            "range": "± 1228.6131490238638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626244.3427083333,
            "unit": "ns",
            "range": "± 326.2395069546796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564178.3724609375,
            "unit": "ns",
            "range": "± 473.15669507347457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465523.7333333334,
            "unit": "ns",
            "range": "± 33011.08479947448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497013.5,
            "unit": "ns",
            "range": "± 37024.38021667036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3047718.0689655175,
            "unit": "ns",
            "range": "± 88641.04157134108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2579839.588235294,
            "unit": "ns",
            "range": "± 49910.138702044824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3253618.466666667,
            "unit": "ns",
            "range": "± 50534.374903011274"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994493.5978260869,
            "unit": "ns",
            "range": "± 57071.95679122397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932750.2702702703,
            "unit": "ns",
            "range": "± 65160.28800182271"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1570467.6455696202,
            "unit": "ns",
            "range": "± 78325.43783554088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7810045.636363637,
            "unit": "ns",
            "range": "± 231724.77938761457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30651.79411764706,
            "unit": "ns",
            "range": "± 622.6924165173648"
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
          "id": "336d46c51893945fc54ad099441eb62ed2c4fe31",
          "message": "chore: Changes",
          "timestamp": "2024-10-26T19:56:29+09:00",
          "tree_id": "85d47dd28947a3eeaa724f61af2a44a9ca4b3e2e",
          "url": "https://github.com/planetarium/libplanet/commit/336d46c51893945fc54ad099441eb62ed2c4fe31"
        },
        "date": 1729940730471,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11183618.42857143,
            "unit": "ns",
            "range": "± 61845.68716722948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29114428.285714287,
            "unit": "ns",
            "range": "± 144671.48566769023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72216929,
            "unit": "ns",
            "range": "± 468971.9132765689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142380284.6,
            "unit": "ns",
            "range": "± 778043.8187400134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 299596200.6,
            "unit": "ns",
            "range": "± 1331238.9003949775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110062.12087912088,
            "unit": "ns",
            "range": "± 7755.187649904152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191922.48113207548,
            "unit": "ns",
            "range": "± 7242.900695191561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166894,
            "unit": "ns",
            "range": "± 1909.595594185673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3294264.0714285714,
            "unit": "ns",
            "range": "± 25655.854978675205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2896938.066666667,
            "unit": "ns",
            "range": "± 42501.16875782303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12731.967391304348,
            "unit": "ns",
            "range": "± 966.128906957583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66069.92783505155,
            "unit": "ns",
            "range": "± 7694.975704216873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50414.9375,
            "unit": "ns",
            "range": "± 967.4232764583109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51750.927083333336,
            "unit": "ns",
            "range": "± 7238.543385377725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2538.7340425531916,
            "unit": "ns",
            "range": "± 300.22670378790923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16649.68085106383,
            "unit": "ns",
            "range": "± 1039.9683510772231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3703483.483816964,
            "unit": "ns",
            "range": "± 4139.610002662031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214011.8973958334,
            "unit": "ns",
            "range": "± 1569.7584502476093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 779092.3092447916,
            "unit": "ns",
            "range": "± 1463.8349490106566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931392.4962332589,
            "unit": "ns",
            "range": "± 2315.611045620699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616063.8452524039,
            "unit": "ns",
            "range": "± 460.50952711056436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583831.9540318081,
            "unit": "ns",
            "range": "± 1312.6284675585296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2477763.033333333,
            "unit": "ns",
            "range": "± 33091.59839611142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2488205.0454545454,
            "unit": "ns",
            "range": "± 61015.328850315316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3005931.3846153845,
            "unit": "ns",
            "range": "± 20194.785616335314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2695693.086956522,
            "unit": "ns",
            "range": "± 66550.37050775425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3227424.8571428573,
            "unit": "ns",
            "range": "± 35765.478387485804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 979429.5136986302,
            "unit": "ns",
            "range": "± 42358.24259597244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1922036.2948717948,
            "unit": "ns",
            "range": "± 66888.96876921819"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566562.1805555555,
            "unit": "ns",
            "range": "± 72166.14532956229"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7741640.942857143,
            "unit": "ns",
            "range": "± 247805.13345498656"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30979.447368421053,
            "unit": "ns",
            "range": "± 1051.3395752850054"
          }
        ]
      }
    ]
  }
}