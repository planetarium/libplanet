window.BENCHMARK_DATA = {
  "lastUpdate": 1724400508848,
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
          "id": "7777ff6fef78a7cbd24368cc877213495e2a514f",
          "message": "refactor: Remote BoundPeerUtility",
          "timestamp": "2024-08-23T16:58:37+09:00",
          "tree_id": "9847c174830a5033754c6a123c8bbbd170eb3cef",
          "url": "https://github.com/planetarium/libplanet/commit/7777ff6fef78a7cbd24368cc877213495e2a514f"
        },
        "date": 1724400482404,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203218.94,
            "unit": "ns",
            "range": "± 6171.652057494453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192575.52,
            "unit": "ns",
            "range": "± 6270.654163837213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165980,
            "unit": "ns",
            "range": "± 3345.675976068529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3068454.2,
            "unit": "ns",
            "range": "± 26970.895491251307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2866388.2666666666,
            "unit": "ns",
            "range": "± 30907.34610427631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12889.305084745763,
            "unit": "ns",
            "range": "± 574.8557316536723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60452.08641975309,
            "unit": "ns",
            "range": "± 3165.8486982068916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50424.68421052631,
            "unit": "ns",
            "range": "± 434.7287855192756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50800.762886597935,
            "unit": "ns",
            "range": "± 6928.827688801927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3207.1958762886597,
            "unit": "ns",
            "range": "± 579.3288257252104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11712.413793103447,
            "unit": "ns",
            "range": "± 633.9273773923461"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2395143,
            "unit": "ns",
            "range": "± 35509.75031864217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2575905.7333333334,
            "unit": "ns",
            "range": "± 32386.981018539507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3024882.2666666666,
            "unit": "ns",
            "range": "± 48056.320967421234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2519236.28,
            "unit": "ns",
            "range": "± 64746.10847219571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3202926.8,
            "unit": "ns",
            "range": "± 56415.49904718434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10211928.133333333,
            "unit": "ns",
            "range": "± 73721.51529221948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26701081.076923076,
            "unit": "ns",
            "range": "± 124164.26257211421"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68207976,
            "unit": "ns",
            "range": "± 442789.1679596832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136394114.73333332,
            "unit": "ns",
            "range": "± 682833.8963017566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282781318.8666667,
            "unit": "ns",
            "range": "± 835143.1583034019"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1007052.1333333333,
            "unit": "ns",
            "range": "± 49688.18095731466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1966373.0930232557,
            "unit": "ns",
            "range": "± 70544.58740832063"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683693.619047619,
            "unit": "ns",
            "range": "± 87816.76049235248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8418145.238095239,
            "unit": "ns",
            "range": "± 304611.3259238938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748988.051081731,
            "unit": "ns",
            "range": "± 3490.38939610835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217468.0212239583,
            "unit": "ns",
            "range": "± 3620.546049675725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776577.1033203125,
            "unit": "ns",
            "range": "± 2578.1030181666383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1906868.9592447917,
            "unit": "ns",
            "range": "± 1466.188709233584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 619512.6200520833,
            "unit": "ns",
            "range": "± 538.1105471482056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573721.3725911458,
            "unit": "ns",
            "range": "± 484.5664687171359"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31870.14285714286,
            "unit": "ns",
            "range": "± 231.56120876907127"
          }
        ]
      }
    ]
  }
}