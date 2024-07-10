window.BENCHMARK_DATA = {
  "lastUpdate": 1720598403254,
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
          "id": "7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a",
          "message": "style: Change dotnet option -p to --project",
          "timestamp": "2024-07-10T16:15:17+09:00",
          "tree_id": "ffcdb296cd2d895cadbc7021388037a0b2a930d1",
          "url": "https://github.com/planetarium/libplanet/commit/7dd6c850ae8ca4b9c3bfc996ba86a4544023e63a"
        },
        "date": 1720597368719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10699038.846153846,
            "unit": "ns",
            "range": "± 132011.0679273056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26548571,
            "unit": "ns",
            "range": "± 149717.2813199804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67497574.71428572,
            "unit": "ns",
            "range": "± 86428.52134338755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135854889.7142857,
            "unit": "ns",
            "range": "± 238224.80946122122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273039715.0769231,
            "unit": "ns",
            "range": "± 251298.21648938057"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14134.86,
            "unit": "ns",
            "range": "± 369.3143286325801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109125.72222222222,
            "unit": "ns",
            "range": "± 2884.9818183245957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105359.375,
            "unit": "ns",
            "range": "± 4460.195397523623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92983.68571428572,
            "unit": "ns",
            "range": "± 2972.8646095230474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3086570.7464788733,
            "unit": "ns",
            "range": "± 151019.796013987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825710.4714285713,
            "unit": "ns",
            "range": "± 137194.35995038145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4746.122222222222,
            "unit": "ns",
            "range": "± 591.769785707166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26455.393258426968,
            "unit": "ns",
            "range": "± 1521.4536531194103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22367.536231884056,
            "unit": "ns",
            "range": "± 1068.178267504046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28780.271739130436,
            "unit": "ns",
            "range": "± 5135.243474338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1094.0652173913043,
            "unit": "ns",
            "range": "± 201.43702445387578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4904.425531914893,
            "unit": "ns",
            "range": "± 553.2801598241982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683884.2,
            "unit": "ns",
            "range": "± 34001.34786025289"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262266.7435897435,
            "unit": "ns",
            "range": "± 43676.23992498845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1070886.8,
            "unit": "ns",
            "range": "± 53396.52316951362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9478517.62,
            "unit": "ns",
            "range": "± 1322245.924285224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2188229.2560975607,
            "unit": "ns",
            "range": "± 78637.60617534733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2290647.6078431373,
            "unit": "ns",
            "range": "± 92422.02380040777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2555634.0714285714,
            "unit": "ns",
            "range": "± 41605.52281888748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2334588.388888889,
            "unit": "ns",
            "range": "± 43017.71727356189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2953788.5416666665,
            "unit": "ns",
            "range": "± 115015.35410062365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3034692.257467831,
            "unit": "ns",
            "range": "± 59037.25251236289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922202.8429036458,
            "unit": "ns",
            "range": "± 8813.908274722537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 607766.2702473958,
            "unit": "ns",
            "range": "± 5369.888058122946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1634044.5140904018,
            "unit": "ns",
            "range": "± 12120.378279451754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 462132.06904296874,
            "unit": "ns",
            "range": "± 961.5602287938626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424381.2703776042,
            "unit": "ns",
            "range": "± 1407.0790286680092"
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
          "id": "b8b8b11d9bbe6e4953f6324aee294cf4238120e1",
          "message": "ci: Change dotnet command from `build` to `pack`",
          "timestamp": "2024-07-10T16:26:23+09:00",
          "tree_id": "62a14c74340e3f859883535723f4b7cf84f757c7",
          "url": "https://github.com/planetarium/libplanet/commit/b8b8b11d9bbe6e4953f6324aee294cf4238120e1"
        },
        "date": 1720598390904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10720780.666666666,
            "unit": "ns",
            "range": "± 88299.79857213031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26738580.8,
            "unit": "ns",
            "range": "± 141420.33881467383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67533723.21428572,
            "unit": "ns",
            "range": "± 110487.76738586082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137509189.53333333,
            "unit": "ns",
            "range": "± 228581.84234688294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274020483.23333335,
            "unit": "ns",
            "range": "± 541727.5521793307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14341.785714285714,
            "unit": "ns",
            "range": "± 248.03021793924427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110115.04761904762,
            "unit": "ns",
            "range": "± 3316.0554969199065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106032.53703703704,
            "unit": "ns",
            "range": "± 3914.8803975222877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92365.62790697675,
            "unit": "ns",
            "range": "± 3331.465793677124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3021578.1340206186,
            "unit": "ns",
            "range": "± 190748.0711162648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2739519.91,
            "unit": "ns",
            "range": "± 189389.43338059855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4887.644444444444,
            "unit": "ns",
            "range": "± 476.4535963377451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26661.164705882355,
            "unit": "ns",
            "range": "± 1858.0591182292167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22376.109090909093,
            "unit": "ns",
            "range": "± 856.319269655011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31047.98969072165,
            "unit": "ns",
            "range": "± 5361.26178885555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1188.1157894736841,
            "unit": "ns",
            "range": "± 251.01491280433513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4874.423913043478,
            "unit": "ns",
            "range": "± 560.3305192923673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681957.6329113924,
            "unit": "ns",
            "range": "± 34346.707877614484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1269044.59375,
            "unit": "ns",
            "range": "± 39153.74367455637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1082514.7826086956,
            "unit": "ns",
            "range": "± 50076.09217653305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9330859.93,
            "unit": "ns",
            "range": "± 1261350.011266598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164738.2708333335,
            "unit": "ns",
            "range": "± 78237.48769971711"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278897.140625,
            "unit": "ns",
            "range": "± 105487.8242624745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2539365.714285714,
            "unit": "ns",
            "range": "± 19266.410816710042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2244713.8571428573,
            "unit": "ns",
            "range": "± 27533.262702682823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3206263.81,
            "unit": "ns",
            "range": "± 339248.3054007888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3014659.085477941,
            "unit": "ns",
            "range": "± 58723.975609847876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917672.7016927083,
            "unit": "ns",
            "range": "± 4892.61527797913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613896.9288411458,
            "unit": "ns",
            "range": "± 4716.618717302501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1655203.6937779018,
            "unit": "ns",
            "range": "± 14223.626306640306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469484.8069035457,
            "unit": "ns",
            "range": "± 592.2461936583884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 419737.0984933036,
            "unit": "ns",
            "range": "± 2058.2929445776012"
          }
        ]
      }
    ]
  }
}