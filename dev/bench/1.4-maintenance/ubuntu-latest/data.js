window.BENCHMARK_DATA = {
  "lastUpdate": 1686129169963,
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
      }
    ]
  }
}