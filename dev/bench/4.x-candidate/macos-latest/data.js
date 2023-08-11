window.BENCHMARK_DATA = {
  "lastUpdate": 1691718023508,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3",
          "message": "Merge pull request #3372 from greymistcube/release/3.2.0\n\n🚀 Release 3.2.0",
          "timestamp": "2023-08-11T10:15:50+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/planetarium/libplanet/commit/97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3"
        },
        "date": 1691717937083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8723044.05882353,
            "unit": "ns",
            "range": "± 174834.59403585957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21602736.993670885,
            "unit": "ns",
            "range": "± 1109571.489294598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53375769.44444445,
            "unit": "ns",
            "range": "± 1101009.0684938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103012687.83333333,
            "unit": "ns",
            "range": "± 532735.5471175225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215468456.5,
            "unit": "ns",
            "range": "± 1589329.6107282636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74859.03296703297,
            "unit": "ns",
            "range": "± 8109.497288776838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312163.4680851064,
            "unit": "ns",
            "range": "± 19596.899550393624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297471.3333333333,
            "unit": "ns",
            "range": "± 12722.34577192729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308662.5,
            "unit": "ns",
            "range": "± 5661.88064414744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4095171.2666666666,
            "unit": "ns",
            "range": "± 60753.58898800802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3648732.533333333,
            "unit": "ns",
            "range": "± 22815.55021679815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22721.49,
            "unit": "ns",
            "range": "± 4336.592682142063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104861.32323232324,
            "unit": "ns",
            "range": "± 12605.35721456158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105173.58536585367,
            "unit": "ns",
            "range": "± 5568.387301059258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106260.08762886598,
            "unit": "ns",
            "range": "± 14350.611453111629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7199.073684210526,
            "unit": "ns",
            "range": "± 741.6757225982265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22403.530612244896,
            "unit": "ns",
            "range": "± 3907.72444713331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595026.7783505155,
            "unit": "ns",
            "range": "± 173733.15242532286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2835266.6739130435,
            "unit": "ns",
            "range": "± 164481.951584034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2018593.1836734693,
            "unit": "ns",
            "range": "± 237187.26009295712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5564239.685393258,
            "unit": "ns",
            "range": "± 452025.4901397756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384522.815217391,
            "unit": "ns",
            "range": "± 245830.22297261923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3565019.663043478,
            "unit": "ns",
            "range": "± 263435.31694876484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4392074.1,
            "unit": "ns",
            "range": "± 96840.03887306552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3988422.5,
            "unit": "ns",
            "range": "± 149712.193970049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6716895.267857143,
            "unit": "ns",
            "range": "± 281344.3712894147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878702.14921875,
            "unit": "ns",
            "range": "± 50851.81317955133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1898522.7898848683,
            "unit": "ns",
            "range": "± 108255.89810224566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1044021.9282226562,
            "unit": "ns",
            "range": "± 31039.90684044591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3028306.445415296,
            "unit": "ns",
            "range": "± 104060.38707879806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839897.4032939189,
            "unit": "ns",
            "range": "± 28448.778083297766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763873.1379510788,
            "unit": "ns",
            "range": "± 25955.50581994102"
          }
        ]
      }
    ]
  }
}