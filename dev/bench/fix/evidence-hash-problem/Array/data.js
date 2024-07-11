window.BENCHMARK_DATA = {
  "lastUpdate": 1720685987016,
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
          "id": "64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e",
          "message": "fix: Fix an issue with the evidence hash changing depending on the version.",
          "timestamp": "2024-07-11T17:10:54+09:00",
          "tree_id": "d2bb4fcb759803a572b4d3bbb8e669c9c9e9e90f",
          "url": "https://github.com/planetarium/libplanet/commit/64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e"
        },
        "date": 1720685929060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10624604.583333334,
            "unit": "ns",
            "range": "± 33012.607939882975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26662562.333333332,
            "unit": "ns",
            "range": "± 178856.16351889295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67261011.66666667,
            "unit": "ns",
            "range": "± 129005.96306132888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135261603.7857143,
            "unit": "ns",
            "range": "± 227468.0482533345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275447908.6666667,
            "unit": "ns",
            "range": "± 2784442.725636385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14208.736842105263,
            "unit": "ns",
            "range": "± 313.3059991810036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109196.4827586207,
            "unit": "ns",
            "range": "± 2175.877107557345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106213.296875,
            "unit": "ns",
            "range": "± 4880.7193936299145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89909.38888888889,
            "unit": "ns",
            "range": "± 1870.4113149059233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3026156.21,
            "unit": "ns",
            "range": "± 192947.71130491272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2825355.5789473685,
            "unit": "ns",
            "range": "± 162025.09091978782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4771.888888888889,
            "unit": "ns",
            "range": "± 495.1120051341565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 28406.934065934067,
            "unit": "ns",
            "range": "± 2298.1328740339422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22627.804347826088,
            "unit": "ns",
            "range": "± 1272.169387428639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 28685.58510638298,
            "unit": "ns",
            "range": "± 5068.05220248249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1228.8387096774193,
            "unit": "ns",
            "range": "± 242.96234680199802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5318.3917525773195,
            "unit": "ns",
            "range": "± 1127.0659138213425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 678188.947368421,
            "unit": "ns",
            "range": "± 28767.797895051444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280829.941860465,
            "unit": "ns",
            "range": "± 46482.47451884794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1086408.076923077,
            "unit": "ns",
            "range": "± 59186.97609726705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9651176.72,
            "unit": "ns",
            "range": "± 1649627.37237216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2171684.1923076925,
            "unit": "ns",
            "range": "± 31329.132417992405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2299845.28,
            "unit": "ns",
            "range": "± 91956.97190046916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2589610.5,
            "unit": "ns",
            "range": "± 37503.61421694359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2284233.25,
            "unit": "ns",
            "range": "± 32896.38283825304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2898873.9032258065,
            "unit": "ns",
            "range": "± 88433.43921102652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3047024.978125,
            "unit": "ns",
            "range": "± 32122.231680784163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 931273.9584635417,
            "unit": "ns",
            "range": "± 3488.2597684751254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612309.8149088542,
            "unit": "ns",
            "range": "± 5169.377295954706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1632359.5059895834,
            "unit": "ns",
            "range": "± 10811.776102260246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469304.03958565847,
            "unit": "ns",
            "range": "± 646.8768109629294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420293.90021623886,
            "unit": "ns",
            "range": "± 462.7159655956168"
          }
        ]
      }
    ]
  }
}