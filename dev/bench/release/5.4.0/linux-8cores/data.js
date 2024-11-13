window.BENCHMARK_DATA = {
  "lastUpdate": 1731477489878,
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
          "id": "d34708daec7053fbd74005881a1e5c2a12d01283",
          "message": "Release 5.4.0",
          "timestamp": "2024-11-13T14:48:41+09:00",
          "tree_id": "c5e56f2022237909df2680d547693f3494da9ec4",
          "url": "https://github.com/planetarium/libplanet/commit/d34708daec7053fbd74005881a1e5c2a12d01283"
        },
        "date": 1731477463389,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10718116.785714285,
            "unit": "ns",
            "range": "± 35881.97040764574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27388503.46153846,
            "unit": "ns",
            "range": "± 82159.5530321088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70709433.65384616,
            "unit": "ns",
            "range": "± 178517.510069669"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140475644.1153846,
            "unit": "ns",
            "range": "± 618000.7463434731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295031139.9,
            "unit": "ns",
            "range": "± 680914.1576114318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 107344.96774193548,
            "unit": "ns",
            "range": "± 4860.815613163275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191742.54,
            "unit": "ns",
            "range": "± 5883.041050202467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164715.53333333333,
            "unit": "ns",
            "range": "± 2314.115346756777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2905323.214285714,
            "unit": "ns",
            "range": "± 49409.323826081134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2771488.533333333,
            "unit": "ns",
            "range": "± 51089.107761225336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12432.246913580248,
            "unit": "ns",
            "range": "± 669.5437911530544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60075.5,
            "unit": "ns",
            "range": "± 3094.0643960675716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49088.94736842105,
            "unit": "ns",
            "range": "± 1064.122093751162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57616.06565656565,
            "unit": "ns",
            "range": "± 14606.821182739342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2450.2043010752686,
            "unit": "ns",
            "range": "± 340.8046603305753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12120.644444444444,
            "unit": "ns",
            "range": "± 1137.0054332789566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3792415.817801339,
            "unit": "ns",
            "range": "± 5429.165399031733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1212426.74453125,
            "unit": "ns",
            "range": "± 1494.9828799046552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772854.0810546875,
            "unit": "ns",
            "range": "± 1761.7297140600042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958416.8028846155,
            "unit": "ns",
            "range": "± 2712.454980783617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617254.1139090402,
            "unit": "ns",
            "range": "± 568.575434961619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569891.51953125,
            "unit": "ns",
            "range": "± 1070.1400311810173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2373616.2666666666,
            "unit": "ns",
            "range": "± 37281.110480216325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2512663.222222222,
            "unit": "ns",
            "range": "± 50758.794121349994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3055558.4411764704,
            "unit": "ns",
            "range": "± 60685.5870980402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2563102.3333333335,
            "unit": "ns",
            "range": "± 21930.44024071371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3222518.5714285714,
            "unit": "ns",
            "range": "± 32701.296053977585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000735.5813953489,
            "unit": "ns",
            "range": "± 54217.094377243644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900116.894736842,
            "unit": "ns",
            "range": "± 54315.766245165236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1563206.2916666667,
            "unit": "ns",
            "range": "± 77002.3443371744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7517704.523809524,
            "unit": "ns",
            "range": "± 144429.3831242864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30492.08695652174,
            "unit": "ns",
            "range": "± 740.1416887107421"
          }
        ]
      }
    ]
  }
}