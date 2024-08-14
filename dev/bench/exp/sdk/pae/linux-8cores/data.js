window.BENCHMARK_DATA = {
  "lastUpdate": 1723617647611,
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
          "id": "55ea7ecf677b8a31b7b0626cce857079688b2994",
          "message": "feat: Add a feature that allows you to optionally set whether to start or not for all services.",
          "timestamp": "2024-08-14T15:17:07+09:00",
          "tree_id": "4806c0c503abd755893653acad477caaecd9ba9e",
          "url": "https://github.com/planetarium/libplanet/commit/55ea7ecf677b8a31b7b0626cce857079688b2994"
        },
        "date": 1723617622070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203181.74285714285,
            "unit": "ns",
            "range": "± 6468.480430440491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198878.44444444444,
            "unit": "ns",
            "range": "± 8286.480477524974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164723.83333333334,
            "unit": "ns",
            "range": "± 2165.1591305504685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115280.1666666665,
            "unit": "ns",
            "range": "± 17969.40085918546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2983799.6428571427,
            "unit": "ns",
            "range": "± 24344.993194327824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15549.01,
            "unit": "ns",
            "range": "± 3430.123505433187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69578.20491803279,
            "unit": "ns",
            "range": "± 3134.5080865757463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61929.555555555555,
            "unit": "ns",
            "range": "± 1294.3880894630445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62462.163265306124,
            "unit": "ns",
            "range": "± 12411.488526239998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3065.953608247423,
            "unit": "ns",
            "range": "± 318.9092419423118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12494.685393258427,
            "unit": "ns",
            "range": "± 703.4945337305501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2434180.5714285714,
            "unit": "ns",
            "range": "± 36032.52050677872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551343.566666667,
            "unit": "ns",
            "range": "± 43778.58811674079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3042563.2666666666,
            "unit": "ns",
            "range": "± 43424.87280097608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2576212.782608696,
            "unit": "ns",
            "range": "± 64245.77379801054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3264760.5714285714,
            "unit": "ns",
            "range": "± 22991.837630121914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10419969.4,
            "unit": "ns",
            "range": "± 80228.7944611267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26665277.1,
            "unit": "ns",
            "range": "± 221440.01366213316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68429538.4,
            "unit": "ns",
            "range": "± 353123.43904055504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139109638.16666666,
            "unit": "ns",
            "range": "± 949254.2323986812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285612388.73333335,
            "unit": "ns",
            "range": "± 1349244.6510005656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027178.6395348837,
            "unit": "ns",
            "range": "± 55718.64768088133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2033413.78125,
            "unit": "ns",
            "range": "± 94214.83738344764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1745978.2386363635,
            "unit": "ns",
            "range": "± 95223.06059723988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8398408.153846154,
            "unit": "ns",
            "range": "± 182126.28452405048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3820651.3203125,
            "unit": "ns",
            "range": "± 7920.969880242132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223610.47265625,
            "unit": "ns",
            "range": "± 3382.0782119590367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767736.0892578125,
            "unit": "ns",
            "range": "± 1094.9549969240304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943969.8367745536,
            "unit": "ns",
            "range": "± 3049.7174932427874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617777.1731770834,
            "unit": "ns",
            "range": "± 928.6648887644578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572830.7861328125,
            "unit": "ns",
            "range": "± 441.1381870780207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32354.428571428572,
            "unit": "ns",
            "range": "± 345.49222729444887"
          }
        ]
      }
    ]
  }
}