window.BENCHMARK_DATA = {
  "lastUpdate": 1720000765998,
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
          "id": "fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8",
          "message": "feat: remove feecollector",
          "timestamp": "2024-07-03T18:42:32+09:00",
          "tree_id": "30e6bcd4736388bfd88c89a2a5761353d1af500c",
          "url": "https://github.com/planetarium/libplanet/commit/fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8"
        },
        "date": 1720000480288,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994491.5789473684,
            "unit": "ns",
            "range": "± 90647.84874183698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1837602.5,
            "unit": "ns",
            "range": "± 95779.04949823218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590192,
            "unit": "ns",
            "range": "± 141351.41871137047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6871455.555555556,
            "unit": "ns",
            "range": "± 228789.19110887637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32837.9746835443,
            "unit": "ns",
            "range": "± 1702.0578643835338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10028928.57142857,
            "unit": "ns",
            "range": "± 54725.02491226799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24229938.888888888,
            "unit": "ns",
            "range": "± 506703.6843094892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58854992.85714286,
            "unit": "ns",
            "range": "± 369555.3366792744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121005913.33333333,
            "unit": "ns",
            "range": "± 673546.2545010409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241863021.42857143,
            "unit": "ns",
            "range": "± 2191586.0965830805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3266759.7098214286,
            "unit": "ns",
            "range": "± 6684.3197831946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1088995.5636160714,
            "unit": "ns",
            "range": "± 2151.958383582355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740746.1356026785,
            "unit": "ns",
            "range": "± 1739.9487893279243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940387.6674107143,
            "unit": "ns",
            "range": "± 3265.358897314168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631720.1106770834,
            "unit": "ns",
            "range": "± 2130.0667780261233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576332.3046875,
            "unit": "ns",
            "range": "± 2117.2513163937497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2234880,
            "unit": "ns",
            "range": "± 40550.67728868938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262884.375,
            "unit": "ns",
            "range": "± 69759.11136870661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2621957.1428571427,
            "unit": "ns",
            "range": "± 45162.55718433768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2289190,
            "unit": "ns",
            "range": "± 42480.31140590729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3103293.75,
            "unit": "ns",
            "range": "± 47255.35551659727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178544.30379746837,
            "unit": "ns",
            "range": "± 9255.251410726485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169772.22222222222,
            "unit": "ns",
            "range": "± 6597.638704717576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151773.91304347827,
            "unit": "ns",
            "range": "± 3754.1755409270436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2748626.6666666665,
            "unit": "ns",
            "range": "± 47003.48720599153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2442580,
            "unit": "ns",
            "range": "± 41491.58606616183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10798.901098901099,
            "unit": "ns",
            "range": "± 1495.7342682512162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53738.46153846154,
            "unit": "ns",
            "range": "± 4218.577149038899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44287.71929824561,
            "unit": "ns",
            "range": "± 1794.7413438231342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65003.06122448979,
            "unit": "ns",
            "range": "± 11203.087332964396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2579.569892473118,
            "unit": "ns",
            "range": "± 311.22448901387037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10555.208333333334,
            "unit": "ns",
            "range": "± 1587.3758412560992"
          }
        ]
      }
    ]
  }
}