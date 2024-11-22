window.BENCHMARK_DATA = {
  "lastUpdate": 1732248818986,
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
          "id": "debacb02bcf55b6ea5fcbcf1700790695a77d335",
          "message": "Prepare 5.4.2",
          "timestamp": "2024-11-22T10:30:16+09:00",
          "tree_id": "aa9bcb4db8fdd915feab73d8f0255ce4140d0672",
          "url": "https://github.com/planetarium/libplanet/commit/debacb02bcf55b6ea5fcbcf1700790695a77d335"
        },
        "date": 1732248748024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000551.0204081633,
            "unit": "ns",
            "range": "± 118981.44899577246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1761392.857142857,
            "unit": "ns",
            "range": "± 75620.99000852958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1486157.142857143,
            "unit": "ns",
            "range": "± 83330.94463587375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6768166.666666667,
            "unit": "ns",
            "range": "± 302750.76770279673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29175.29411764706,
            "unit": "ns",
            "range": "± 1694.3818849329084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9811535.714285715,
            "unit": "ns",
            "range": "± 118529.0218089604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23977253.846153848,
            "unit": "ns",
            "range": "± 192936.37818110152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58790161.538461536,
            "unit": "ns",
            "range": "± 250761.59175088175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118135300,
            "unit": "ns",
            "range": "± 912585.1474950551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241656540,
            "unit": "ns",
            "range": "± 2054356.7400596642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3314475.6009615385,
            "unit": "ns",
            "range": "± 6711.289719485933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083550.5989583333,
            "unit": "ns",
            "range": "± 2283.5766018239374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729942.4739583334,
            "unit": "ns",
            "range": "± 3136.376870530506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1913989.2317708333,
            "unit": "ns",
            "range": "± 2672.965219202047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619931.8777901785,
            "unit": "ns",
            "range": "± 961.4388787148564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557468.7848772322,
            "unit": "ns",
            "range": "± 1001.3360778558658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2274697.0588235296,
            "unit": "ns",
            "range": "± 71435.65227062583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2270264.285714286,
            "unit": "ns",
            "range": "± 29689.129249683217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2821936.8421052634,
            "unit": "ns",
            "range": "± 60853.38674521388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2393333.3333333335,
            "unit": "ns",
            "range": "± 43207.285540861325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3001235.714285714,
            "unit": "ns",
            "range": "± 38391.016720518935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94345.33333333333,
            "unit": "ns",
            "range": "± 4744.364888812643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169331.25,
            "unit": "ns",
            "range": "± 5561.74839531293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143000,
            "unit": "ns",
            "range": "± 2956.724914871558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2591421.4285714286,
            "unit": "ns",
            "range": "± 23523.545604398114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491911.111111111,
            "unit": "ns",
            "range": "± 52653.807067417365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10430.76923076923,
            "unit": "ns",
            "range": "± 1479.7666713740389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52156.666666666664,
            "unit": "ns",
            "range": "± 2900.29250752635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43642.857142857145,
            "unit": "ns",
            "range": "± 1863.413987366116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55921.42857142857,
            "unit": "ns",
            "range": "± 11661.49934658101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2404.1666666666665,
            "unit": "ns",
            "range": "± 362.13305686887094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9871.91011235955,
            "unit": "ns",
            "range": "± 1026.798728179984"
          }
        ]
      }
    ]
  }
}