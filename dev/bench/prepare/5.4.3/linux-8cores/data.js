window.BENCHMARK_DATA = {
  "lastUpdate": 1734065824142,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "49ce9b0d402217257847c1d1dc92c53c57d40547",
          "message": "prepare: 5.4.3",
          "timestamp": "2024-12-13T13:46:36+09:00",
          "tree_id": "860f31b64bf519864f79ee30dfa27ae1bd55a521",
          "url": "https://github.com/planetarium/libplanet/commit/49ce9b0d402217257847c1d1dc92c53c57d40547"
        },
        "date": 1734065796555,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10584767.153846154,
            "unit": "ns",
            "range": "± 39593.84109060009"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27999314.533333335,
            "unit": "ns",
            "range": "± 105148.45807229393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70170268.11538461,
            "unit": "ns",
            "range": "± 199729.46798713272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142938677.13333333,
            "unit": "ns",
            "range": "± 539730.4247546529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 295942876.4,
            "unit": "ns",
            "range": "± 987527.6703438166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111544.60126582278,
            "unit": "ns",
            "range": "± 5475.9361232132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191083.83333333334,
            "unit": "ns",
            "range": "± 6238.979457144146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166911.64285714287,
            "unit": "ns",
            "range": "± 2771.488814203072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2864966.8571428573,
            "unit": "ns",
            "range": "± 33489.341075487435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2767887.785714286,
            "unit": "ns",
            "range": "± 39216.25291828057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13129.510869565218,
            "unit": "ns",
            "range": "± 798.1608047318689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60656.36507936508,
            "unit": "ns",
            "range": "± 2616.438969419383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50583.57692307692,
            "unit": "ns",
            "range": "± 613.2061183564167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49010.642857142855,
            "unit": "ns",
            "range": "± 6570.377175776041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2353.547368421053,
            "unit": "ns",
            "range": "± 238.55276272703958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16845.373626373625,
            "unit": "ns",
            "range": "± 958.2504155241774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3719360.036658654,
            "unit": "ns",
            "range": "± 4146.207119173349"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1230142.6205729167,
            "unit": "ns",
            "range": "± 2077.642370137268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 757383.6242487981,
            "unit": "ns",
            "range": "± 2413.8444459939883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964629.4708333334,
            "unit": "ns",
            "range": "± 2010.2520959769183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622543.3777204241,
            "unit": "ns",
            "range": "± 722.8293687804102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567070.5864955357,
            "unit": "ns",
            "range": "± 487.8412469620575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2409521.4166666665,
            "unit": "ns",
            "range": "± 37245.67410014541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523717.8571428573,
            "unit": "ns",
            "range": "± 91412.73126669847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3139269.9,
            "unit": "ns",
            "range": "± 24373.309121718725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2590623.769230769,
            "unit": "ns",
            "range": "± 29152.783989852054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3249847.9,
            "unit": "ns",
            "range": "± 58007.81392536699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 985318.3766233766,
            "unit": "ns",
            "range": "± 41738.76154665342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1919487.261904762,
            "unit": "ns",
            "range": "± 69807.05715453184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1552357.8333333333,
            "unit": "ns",
            "range": "± 69590.5835640102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7628686.545454546,
            "unit": "ns",
            "range": "± 238316.4784972247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34311.1,
            "unit": "ns",
            "range": "± 5870.004420695942"
          }
        ]
      }
    ]
  }
}