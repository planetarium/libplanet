window.BENCHMARK_DATA = {
  "lastUpdate": 1722307981130,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "985c1f787a192654603dba83f7be5bff42d3aa20",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-07-12T18:16:18+09:00",
          "tree_id": "6512b68e13dce93054d5efa58408c2563d333d72",
          "url": "https://github.com/planetarium/libplanet/commit/985c1f787a192654603dba83f7be5bff42d3aa20"
        },
        "date": 1722307928178,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10731176.5,
            "unit": "ns",
            "range": "± 98237.52942046315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26419479,
            "unit": "ns",
            "range": "± 80401.20389837264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67454130.13333334,
            "unit": "ns",
            "range": "± 107133.47822484054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136455067.06666666,
            "unit": "ns",
            "range": "± 276703.66055828094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274760250.3333333,
            "unit": "ns",
            "range": "± 712419.0979049247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15670.760416666666,
            "unit": "ns",
            "range": "± 1202.9299952925614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112243.90909090909,
            "unit": "ns",
            "range": "± 3719.588285657319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104801.47727272728,
            "unit": "ns",
            "range": "± 3862.592745864064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90941.28571428571,
            "unit": "ns",
            "range": "± 2923.018741476902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3133713.282051282,
            "unit": "ns",
            "range": "± 106794.84849392036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2753048.9081632653,
            "unit": "ns",
            "range": "± 164330.9187677358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4716.086956521739,
            "unit": "ns",
            "range": "± 486.14719093765154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27252.604395604394,
            "unit": "ns",
            "range": "± 1885.7586853932344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22456.512345679013,
            "unit": "ns",
            "range": "± 1185.6838163463642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29152.16129032258,
            "unit": "ns",
            "range": "± 4850.793326623565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1208.2978723404256,
            "unit": "ns",
            "range": "± 222.800049216575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4475.376470588235,
            "unit": "ns",
            "range": "± 440.8700536458341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 682631.0454545454,
            "unit": "ns",
            "range": "± 38285.250149795196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1274315.8529411764,
            "unit": "ns",
            "range": "± 40911.82526326169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1103356.8958333333,
            "unit": "ns",
            "range": "± 63510.55369679317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9495405.75,
            "unit": "ns",
            "range": "± 1293692.875854456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2218050,
            "unit": "ns",
            "range": "± 52785.638549704025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2240385.8333333335,
            "unit": "ns",
            "range": "± 15676.181503004855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2579421.7333333334,
            "unit": "ns",
            "range": "± 46442.64478513358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2292827.5,
            "unit": "ns",
            "range": "± 67816.4018558373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3144271.19,
            "unit": "ns",
            "range": "± 248547.2207039347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3059767.205636161,
            "unit": "ns",
            "range": "± 51318.49159221238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923225.1378255208,
            "unit": "ns",
            "range": "± 6412.128975161664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612785.9752604166,
            "unit": "ns",
            "range": "± 4421.694766754056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1637000.4426618305,
            "unit": "ns",
            "range": "± 14471.50208772797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464693.27415364585,
            "unit": "ns",
            "range": "± 796.605202118771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 428431.96153846156,
            "unit": "ns",
            "range": "± 1048.7758806135796"
          }
        ]
      }
    ]
  }
}