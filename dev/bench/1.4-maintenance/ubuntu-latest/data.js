window.BENCHMARK_DATA = {
  "lastUpdate": 1686143293104,
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
          "id": "626bf947bc1cc3f3718dbb5196f622beda682598",
          "message": "Merge pull request #3202 from greymistcube/release/1.4.0\n\n🚀 Release 1.4.0",
          "timestamp": "2023-06-07T17:56:29+09:00",
          "tree_id": "1f32bb1e8779c3a4e467e6db02a8d55373fb9578",
          "url": "https://github.com/planetarium/libplanet/commit/626bf947bc1cc3f3718dbb5196f622beda682598"
        },
        "date": 1686129145889,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1346746.6627906978,
            "unit": "ns",
            "range": "± 73083.75355433542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2643235.814814815,
            "unit": "ns",
            "range": "± 72988.50775716841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2159900.1578947366,
            "unit": "ns",
            "range": "± 132169.344164036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5352753.552631579,
            "unit": "ns",
            "range": "± 184345.3291312915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321179.8666666667,
            "unit": "ns",
            "range": "± 40504.188673812605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3447343.214285714,
            "unit": "ns",
            "range": "± 43338.80254136909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4278287,
            "unit": "ns",
            "range": "± 57072.25775528522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4174339.519230769,
            "unit": "ns",
            "range": "± 170593.21743872957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6805237.8,
            "unit": "ns",
            "range": "± 163363.6142204459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7541907.866666666,
            "unit": "ns",
            "range": "± 54450.10132729214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19500878.6,
            "unit": "ns",
            "range": "± 185233.26322072934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50176662.86666667,
            "unit": "ns",
            "range": "± 454732.7162547352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99885160.86666666,
            "unit": "ns",
            "range": "± 670546.3065021649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201421251.26666668,
            "unit": "ns",
            "range": "± 550923.5629598288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5887006.058035715,
            "unit": "ns",
            "range": "± 10042.018109453737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933777.5375279018,
            "unit": "ns",
            "range": "± 2189.655982869912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364202.0089285714,
            "unit": "ns",
            "range": "± 411.72964613572407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2557109.474051339,
            "unit": "ns",
            "range": "± 1878.4869222269422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794871.7067522322,
            "unit": "ns",
            "range": "± 543.8570317949983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724677.0091646635,
            "unit": "ns",
            "range": "± 262.6877110140403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46535.97101449275,
            "unit": "ns",
            "range": "± 2219.727520182008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287198.1875,
            "unit": "ns",
            "range": "± 11258.965417978896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269550.5,
            "unit": "ns",
            "range": "± 10047.273302441488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242075.81818181818,
            "unit": "ns",
            "range": "± 5497.846276466238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276453.571428572,
            "unit": "ns",
            "range": "± 20468.857341803934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3949957.933333333,
            "unit": "ns",
            "range": "± 21509.464297196733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20519.604166666668,
            "unit": "ns",
            "range": "± 1669.4818703271014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94006.61855670103,
            "unit": "ns",
            "range": "± 7066.605155653036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73378.52631578948,
            "unit": "ns",
            "range": "± 3082.4345092409344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94231.38144329897,
            "unit": "ns",
            "range": "± 12379.44731992246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4762.835051546392,
            "unit": "ns",
            "range": "± 608.5076122574455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18521.484536082473,
            "unit": "ns",
            "range": "± 1399.6742263335934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29499207c2eab284a56039e818bb3c5065ce26dc",
          "message": "Merge pull request #3203 from greymistcube/prepare/1.4.1\n\n🔧 Prepare 1.4.1",
          "timestamp": "2023-06-07T21:53:39+09:00",
          "tree_id": "00a0c7681d77723219c692049b0c449a1d5aa778",
          "url": "https://github.com/planetarium/libplanet/commit/29499207c2eab284a56039e818bb3c5065ce26dc"
        },
        "date": 1686143269691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1578945.5061728396,
            "unit": "ns",
            "range": "± 78111.43242719394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133685.3529411764,
            "unit": "ns",
            "range": "± 125381.72249699291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2569854.8170731706,
            "unit": "ns",
            "range": "± 131310.9975181555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5963454.777777778,
            "unit": "ns",
            "range": "± 163269.12670409534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865702.6,
            "unit": "ns",
            "range": "± 65215.41229407136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4115788.1428571427,
            "unit": "ns",
            "range": "± 58617.64535445875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4919144,
            "unit": "ns",
            "range": "± 63138.25816978392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4973568.864864865,
            "unit": "ns",
            "range": "± 162730.1426749482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7565937,
            "unit": "ns",
            "range": "± 133180.6304336869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9376749.8,
            "unit": "ns",
            "range": "± 72299.76074570173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23722509.266666666,
            "unit": "ns",
            "range": "± 146855.56228507883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58485949.35714286,
            "unit": "ns",
            "range": "± 283807.76383796975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116078786.26666667,
            "unit": "ns",
            "range": "± 832624.435816007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233930548.86666667,
            "unit": "ns",
            "range": "± 545481.5262517888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6456933.230208334,
            "unit": "ns",
            "range": "± 62853.49836003842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1940706.0842447917,
            "unit": "ns",
            "range": "± 3468.0728293155667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397004.970703125,
            "unit": "ns",
            "range": "± 3287.5308369096088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2794879.95625,
            "unit": "ns",
            "range": "± 24901.4068558754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830761.421875,
            "unit": "ns",
            "range": "± 1022.3560522824018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763897.9029017857,
            "unit": "ns",
            "range": "± 462.86227049370854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63114,
            "unit": "ns",
            "range": "± 7349.024398994827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326546.44444444444,
            "unit": "ns",
            "range": "± 13772.311363359027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308529.9275362319,
            "unit": "ns",
            "range": "± 14333.803396290019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305778.8,
            "unit": "ns",
            "range": "± 5046.907896354531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4823822.8,
            "unit": "ns",
            "range": "± 22998.85873628143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4198692.642857143,
            "unit": "ns",
            "range": "± 36970.86433022869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29035.802083333332,
            "unit": "ns",
            "range": "± 2454.337053247369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128201.9494949495,
            "unit": "ns",
            "range": "± 11387.964832578098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116532.23711340207,
            "unit": "ns",
            "range": "± 7218.569753555173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126496.75,
            "unit": "ns",
            "range": "± 13621.244002234931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10195.90625,
            "unit": "ns",
            "range": "± 1351.0288405361769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26769.172043010753,
            "unit": "ns",
            "range": "± 2526.169658592336"
          }
        ]
      }
    ]
  }
}