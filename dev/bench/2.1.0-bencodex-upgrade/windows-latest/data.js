window.BENCHMARK_DATA = {
  "lastUpdate": 1689232901220,
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
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "c36ff21ec0d4c6950d939d947c0c4b66abf52dde",
          "message": "upgrade bencodex to 0.11.0-dev.20230713023748",
          "timestamp": "2023-07-13T16:04:43+09:00",
          "tree_id": "ed6ad96f66b3a43c2b3855d8a84bec52fa144294",
          "url": "https://github.com/planetarium/libplanet/commit/c36ff21ec0d4c6950d939d947c0c4b66abf52dde"
        },
        "date": 1689232846533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422048,
            "unit": "ns",
            "range": "± 110839.91776294753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2558112.0689655175,
            "unit": "ns",
            "range": "± 111765.62582002809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2347512.5,
            "unit": "ns",
            "range": "± 60655.8238538667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5434552.439024391,
            "unit": "ns",
            "range": "± 287292.11108685733"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47912.63157894737,
            "unit": "ns",
            "range": "± 3553.4892084135154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7086084.615384615,
            "unit": "ns",
            "range": "± 31961.796104981495"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19517420,
            "unit": "ns",
            "range": "± 242372.54441399564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48227050,
            "unit": "ns",
            "range": "± 689617.8058003746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97297123.07692307,
            "unit": "ns",
            "range": "± 1496593.752021484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205864795.23809522,
            "unit": "ns",
            "range": "± 4784948.275318783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5631419.029017857,
            "unit": "ns",
            "range": "± 24210.37732495001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1534312.0572916667,
            "unit": "ns",
            "range": "± 20991.232051134306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179051.646205357,
            "unit": "ns",
            "range": "± 8998.299856656631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627246.065848214,
            "unit": "ns",
            "range": "± 10763.20432523519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865225.0846354166,
            "unit": "ns",
            "range": "± 14308.269396151692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782640.4645647322,
            "unit": "ns",
            "range": "± 10558.004478846016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3019768.75,
            "unit": "ns",
            "range": "± 59283.93507800687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3271525.714285714,
            "unit": "ns",
            "range": "± 106792.13273198255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4007521.621621622,
            "unit": "ns",
            "range": "± 129074.49428556781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4141922.807017544,
            "unit": "ns",
            "range": "± 177099.90725328686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6653912.195121951,
            "unit": "ns",
            "range": "± 236554.54571316307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257706.25,
            "unit": "ns",
            "range": "± 11473.473547191157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243120.96774193548,
            "unit": "ns",
            "range": "± 10633.991078670204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221392.85714285713,
            "unit": "ns",
            "range": "± 10734.669843360938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3951842.1052631577,
            "unit": "ns",
            "range": "± 86742.56494420381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3580592.8571428573,
            "unit": "ns",
            "range": "± 30406.05871522001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17035.869565217392,
            "unit": "ns",
            "range": "± 1379.726165038598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79950,
            "unit": "ns",
            "range": "± 5095.117248917809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70282.35294117648,
            "unit": "ns",
            "range": "± 2134.6308442807444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87271.76470588235,
            "unit": "ns",
            "range": "± 7560.039237815563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5078.350515463918,
            "unit": "ns",
            "range": "± 862.9198017153388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18055.434782608696,
            "unit": "ns",
            "range": "± 1741.6276415622822"
          }
        ]
      }
    ]
  }
}