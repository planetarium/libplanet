window.BENCHMARK_DATA = {
  "lastUpdate": 1729569175869,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57a4569717082553221fedeaa74ac656edb9d5c2",
          "message": "Merge pull request #3971 from riemannulus/prepare/5.3.2\n\n🧹  prepare: 5.3.2",
          "timestamp": "2024-10-16T15:08:31+09:00",
          "tree_id": "6dbfc866a79fbd44fcbac641b75e9992b736d867",
          "url": "https://github.com/planetarium/libplanet/commit/57a4569717082553221fedeaa74ac656edb9d5c2"
        },
        "date": 1729569163111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10584548.461538462,
            "unit": "ns",
            "range": "± 124879.40979041567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26112568.785714287,
            "unit": "ns",
            "range": "± 220191.3014079343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66419789.333333336,
            "unit": "ns",
            "range": "± 104817.08227919631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133134102.6923077,
            "unit": "ns",
            "range": "± 212625.52575062754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270519128.1333333,
            "unit": "ns",
            "range": "± 496456.38035766856"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13384.611111111111,
            "unit": "ns",
            "range": "± 440.08539936035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110716.56603773584,
            "unit": "ns",
            "range": "± 4586.740004158451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106781.08196721312,
            "unit": "ns",
            "range": "± 4799.384319177763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93524.36842105263,
            "unit": "ns",
            "range": "± 3189.5857345264662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2995170.6911764704,
            "unit": "ns",
            "range": "± 142571.88977539397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776840.879310345,
            "unit": "ns",
            "range": "± 121420.58537558651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5520.082474226804,
            "unit": "ns",
            "range": "± 959.6630991970469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27538.71505376344,
            "unit": "ns",
            "range": "± 1903.989734681078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23495.582474226805,
            "unit": "ns",
            "range": "± 1863.781453289829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30213.195652173912,
            "unit": "ns",
            "range": "± 4435.998766929571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1239.09375,
            "unit": "ns",
            "range": "± 244.5389035081072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5027.021739130435,
            "unit": "ns",
            "range": "± 680.0263889233321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669888.9651162791,
            "unit": "ns",
            "range": "± 36957.25117497963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1270678.6875,
            "unit": "ns",
            "range": "± 48168.685814286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1049257.2467532468,
            "unit": "ns",
            "range": "± 51709.759700088944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8844906.19,
            "unit": "ns",
            "range": "± 1234775.8030443874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111259.923076923,
            "unit": "ns",
            "range": "± 31398.17594346721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260630.4375,
            "unit": "ns",
            "range": "± 68463.01097010518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2532942.6153846155,
            "unit": "ns",
            "range": "± 28578.99954960653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2234909.7666666666,
            "unit": "ns",
            "range": "± 37419.08001363298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2777182.909090909,
            "unit": "ns",
            "range": "± 85344.57421731758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3035583.0772879464,
            "unit": "ns",
            "range": "± 34270.11312054048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921674.7263020833,
            "unit": "ns",
            "range": "± 5157.487395593251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612769.1107421875,
            "unit": "ns",
            "range": "± 5835.364168506209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1655452.2104492188,
            "unit": "ns",
            "range": "± 4864.807119532161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467908.70657552086,
            "unit": "ns",
            "range": "± 812.5565476705609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421951.1081705729,
            "unit": "ns",
            "range": "± 1333.8789779807976"
          }
        ]
      }
    ]
  }
}