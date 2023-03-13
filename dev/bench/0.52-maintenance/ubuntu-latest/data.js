window.BENCHMARK_DATA = {
  "lastUpdate": 1678704319189,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678704299240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200249.2888888889,
            "unit": "ns",
            "range": "± 7303.999578755783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203477,
            "unit": "ns",
            "range": "± 6320.390746425413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177927.75384615385,
            "unit": "ns",
            "range": "± 8317.88781225207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11766177.266666668,
            "unit": "ns",
            "range": "± 99831.7480159684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9401871.6,
            "unit": "ns",
            "range": "± 55519.834109468095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21903.947916666668,
            "unit": "ns",
            "range": "± 1608.4615884345196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55326.782608695656,
            "unit": "ns",
            "range": "± 4144.635144339513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41135.52830188679,
            "unit": "ns",
            "range": "± 1640.8541233123958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92213.8125,
            "unit": "ns",
            "range": "± 10571.550779344683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5328.0625,
            "unit": "ns",
            "range": "± 626.5511750846853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19713.375,
            "unit": "ns",
            "range": "± 1404.0551889737849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333492.75,
            "unit": "ns",
            "range": "± 89650.29533873594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5209154.4,
            "unit": "ns",
            "range": "± 80539.18744916309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26890617.866666667,
            "unit": "ns",
            "range": "± 266116.40876070614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6333573.166666667,
            "unit": "ns",
            "range": "± 228329.40920573467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27859902.230769232,
            "unit": "ns",
            "range": "± 448639.0280998288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054328.24375,
            "unit": "ns",
            "range": "± 15038.981906286894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1850336.6527622768,
            "unit": "ns",
            "range": "± 5361.210762886596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372123.5981069712,
            "unit": "ns",
            "range": "± 606.5576424474601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2602119.669363839,
            "unit": "ns",
            "range": "± 1259.3677097027391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811387.800405649,
            "unit": "ns",
            "range": "± 659.1589699261108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752983.4857700893,
            "unit": "ns",
            "range": "± 394.88221504446955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8051855.666666667,
            "unit": "ns",
            "range": "± 88213.60882350674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20261761.666666668,
            "unit": "ns",
            "range": "± 171173.85511047224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 51342456.06666667,
            "unit": "ns",
            "range": "± 260227.11623872677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 104052281.13333334,
            "unit": "ns",
            "range": "± 641329.891023318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 207883818.7857143,
            "unit": "ns",
            "range": "± 527969.3738919651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46927.1914893617,
            "unit": "ns",
            "range": "± 3006.439598547048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390758.469387755,
            "unit": "ns",
            "range": "± 116789.35919023646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2591714.966666667,
            "unit": "ns",
            "range": "± 77446.20244134025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177644.1126760566,
            "unit": "ns",
            "range": "± 97426.3876495699"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5085201.590909091,
            "unit": "ns",
            "range": "± 121327.10266668096"
          }
        ]
      }
    ]
  }
}