window.BENCHMARK_DATA = {
  "lastUpdate": 1694089602791,
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
          "id": "aa72117b8887ec9e189cac97cefc3fa77966dd81",
          "message": "Merge pull request #3417 from greymistcube/release/3.3.0\n\n🚀 Release 3.3.0",
          "timestamp": "2023-09-07T19:23:55+09:00",
          "tree_id": "b801b394004dbb5681b75d049d42107df46a8d4f",
          "url": "https://github.com/planetarium/libplanet/commit/aa72117b8887ec9e189cac97cefc3fa77966dd81"
        },
        "date": 1694089527799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9253463.51724138,
            "unit": "ns",
            "range": "± 1627854.426295816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20342038.546511628,
            "unit": "ns",
            "range": "± 738001.3614305404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59286008.62222222,
            "unit": "ns",
            "range": "± 13542738.982698716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141333388.61,
            "unit": "ns",
            "range": "± 41953713.972555816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298997026.91,
            "unit": "ns",
            "range": "± 67420580.41991249"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73309.06741573034,
            "unit": "ns",
            "range": "± 10968.704272940431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336205.48780487804,
            "unit": "ns",
            "range": "± 36875.32725897683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351061.1091954023,
            "unit": "ns",
            "range": "± 46992.53239570916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304792.8,
            "unit": "ns",
            "range": "± 23224.92406221182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4505819.126373626,
            "unit": "ns",
            "range": "± 437667.997344122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4155729.835164835,
            "unit": "ns",
            "range": "± 538723.9735755483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28331.29761904762,
            "unit": "ns",
            "range": "± 3556.246812621899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126592.96590909091,
            "unit": "ns",
            "range": "± 16490.668639998403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117274.31764705882,
            "unit": "ns",
            "range": "± 9459.156923083483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121626.90659340659,
            "unit": "ns",
            "range": "± 17972.768967386943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8973.613402061856,
            "unit": "ns",
            "range": "± 1198.121175670202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26407.91304347826,
            "unit": "ns",
            "range": "± 3859.568146576732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653795.231958763,
            "unit": "ns",
            "range": "± 215866.24918045878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198737.554347826,
            "unit": "ns",
            "range": "± 377213.8178172001"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2285904.0268817204,
            "unit": "ns",
            "range": "± 459632.591907611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5868818.714285715,
            "unit": "ns",
            "range": "± 646179.6949258927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3495913.8260869565,
            "unit": "ns",
            "range": "± 412834.6900061379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3907153.2717391304,
            "unit": "ns",
            "range": "± 440261.5068423302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4901408.302197802,
            "unit": "ns",
            "range": "± 591982.1366776238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4110788.811764706,
            "unit": "ns",
            "range": "± 444399.4338171593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8673949.811827958,
            "unit": "ns",
            "range": "± 2382170.7173236655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7801156.560647552,
            "unit": "ns",
            "range": "± 1228178.279444758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862359.7694196429,
            "unit": "ns",
            "range": "± 60491.736011667344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1081525.4985351562,
            "unit": "ns",
            "range": "± 20452.173326523196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190955.81875,
            "unit": "ns",
            "range": "± 58493.670844690554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 921158.1301269531,
            "unit": "ns",
            "range": "± 17369.548816823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1033749.3012695312,
            "unit": "ns",
            "range": "± 157241.6012628967"
          }
        ]
      }
    ]
  }
}