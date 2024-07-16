window.BENCHMARK_DATA = {
  "lastUpdate": 1721090220200,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "20de2d8c86ce12c1079fefb7153f47bc58bc2152",
          "message": "add minor adjustments",
          "timestamp": "2024-07-16T09:26:28+09:00",
          "tree_id": "272a3b19eeaa7372178068c34217aabc55588989",
          "url": "https://github.com/planetarium/libplanet/commit/20de2d8c86ce12c1079fefb7153f47bc58bc2152"
        },
        "date": 1721090194600,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199248.29508196723,
            "unit": "ns",
            "range": "± 7321.925034543539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191120.0576923077,
            "unit": "ns",
            "range": "± 7804.250137732172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171105.12,
            "unit": "ns",
            "range": "± 3788.7238212006605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3154923.1428571427,
            "unit": "ns",
            "range": "± 50947.33237767311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853990.1428571427,
            "unit": "ns",
            "range": "± 49826.69745899611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13289.32105263158,
            "unit": "ns",
            "range": "± 1245.2271601612035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62194.89175257732,
            "unit": "ns",
            "range": "± 6172.825908698376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52151.298507462685,
            "unit": "ns",
            "range": "± 2092.11029472654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62568.11224489796,
            "unit": "ns",
            "range": "± 11198.219664172739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3508.5,
            "unit": "ns",
            "range": "± 488.1565884413624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13411.261363636364,
            "unit": "ns",
            "range": "± 1533.165979080417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1026984.3372093023,
            "unit": "ns",
            "range": "± 53179.26129762826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2030496.822580645,
            "unit": "ns",
            "range": "± 92106.79439397281"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1767929.5120481928,
            "unit": "ns",
            "range": "± 93825.59237658414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8242495.038461538,
            "unit": "ns",
            "range": "± 133541.84904716536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3698242.0061383927,
            "unit": "ns",
            "range": "± 7512.909175194448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1168359.6603064905,
            "unit": "ns",
            "range": "± 741.7026104787997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777899.7532552084,
            "unit": "ns",
            "range": "± 1404.0929962981647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982950.9036458333,
            "unit": "ns",
            "range": "± 2290.2571087094943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628514.9042317708,
            "unit": "ns",
            "range": "± 978.9933208188379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574087.080453726,
            "unit": "ns",
            "range": "± 401.1509070150016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2440923.7666666666,
            "unit": "ns",
            "range": "± 43889.07873340094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2540382.625,
            "unit": "ns",
            "range": "± 48684.878702221285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3057030.6666666665,
            "unit": "ns",
            "range": "± 55279.363371962994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2600205.6,
            "unit": "ns",
            "range": "± 43750.43429139549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3276712.913043478,
            "unit": "ns",
            "range": "± 82394.13270588951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33038.54285714286,
            "unit": "ns",
            "range": "± 1092.2306733000494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10590787.07142857,
            "unit": "ns",
            "range": "± 80022.55514297135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26781755.266666666,
            "unit": "ns",
            "range": "± 166361.5566110953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69119002.2,
            "unit": "ns",
            "range": "± 233949.10970740137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148296665.4,
            "unit": "ns",
            "range": "± 707781.7916130447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 291712149.4,
            "unit": "ns",
            "range": "± 1038487.3193905506"
          }
        ]
      }
    ]
  }
}