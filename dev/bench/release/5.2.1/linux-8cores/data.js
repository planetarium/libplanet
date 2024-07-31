window.BENCHMARK_DATA = {
  "lastUpdate": 1722386198804,
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
          "id": "5a1ee9e64a733b49b91522d397e23a07fbab8a75",
          "message": "Release 5.2.1",
          "timestamp": "2024-07-31T09:27:46+09:00",
          "tree_id": "26877b6a16528547babb7bfadd8a08aca9060b6f",
          "url": "https://github.com/planetarium/libplanet/commit/5a1ee9e64a733b49b91522d397e23a07fbab8a75"
        },
        "date": 1722386173022,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015503.3428571429,
            "unit": "ns",
            "range": "± 43607.978131794465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1955451.054054054,
            "unit": "ns",
            "range": "± 65500.682588871605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1706099.2692307692,
            "unit": "ns",
            "range": "± 78748.63582940842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8337444.192307692,
            "unit": "ns",
            "range": "± 221265.51901785677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199057.54237288135,
            "unit": "ns",
            "range": "± 8596.94090404583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196243.9642857143,
            "unit": "ns",
            "range": "± 5442.994712758932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169654.86111111112,
            "unit": "ns",
            "range": "± 5225.750445918354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3126952.466666667,
            "unit": "ns",
            "range": "± 50320.76798736378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2772443.533333333,
            "unit": "ns",
            "range": "± 51516.217542033264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12964.04347826087,
            "unit": "ns",
            "range": "± 834.7751544748011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59628.79569892473,
            "unit": "ns",
            "range": "± 3290.427759158704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50890.25,
            "unit": "ns",
            "range": "± 614.065457718993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48375.329268292684,
            "unit": "ns",
            "range": "± 2523.6857870924223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3700.4021739130435,
            "unit": "ns",
            "range": "± 248.2131775987804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12038.978723404256,
            "unit": "ns",
            "range": "± 780.3737177323345"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31936.533333333333,
            "unit": "ns",
            "range": "± 317.9119075347461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10309861,
            "unit": "ns",
            "range": "± 60728.66341991425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27700978.633333333,
            "unit": "ns",
            "range": "± 173051.24112398725"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69601300,
            "unit": "ns",
            "range": "± 467897.88069452567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138380235.86666667,
            "unit": "ns",
            "range": "± 592496.4392171324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287400173.21428573,
            "unit": "ns",
            "range": "± 751613.2522980336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3786044.2037259615,
            "unit": "ns",
            "range": "± 4440.297447606115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1219134.6831054688,
            "unit": "ns",
            "range": "± 1052.4895605618985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778656.7389973958,
            "unit": "ns",
            "range": "± 1206.5442706032288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1973912.12109375,
            "unit": "ns",
            "range": "± 3266.0096758623304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627276.8760463169,
            "unit": "ns",
            "range": "± 649.4826116458194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578817.1628069197,
            "unit": "ns",
            "range": "± 470.48797813660974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2491512,
            "unit": "ns",
            "range": "± 67146.37430747844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2513763.9,
            "unit": "ns",
            "range": "± 40006.10920632712"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3078526.533333333,
            "unit": "ns",
            "range": "± 41490.5324361847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2711543.4,
            "unit": "ns",
            "range": "± 47858.105903657684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3276222.45,
            "unit": "ns",
            "range": "± 72192.59852897518"
          }
        ]
      }
    ]
  }
}