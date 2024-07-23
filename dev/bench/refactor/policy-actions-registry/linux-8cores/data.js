window.BENCHMARK_DATA = {
  "lastUpdate": 1721714182783,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8053f33d7bb292d213f39e885ef8297124d50d37",
          "message": "Merge pull request #3890 from moreal/typo\n\nfix: correct typo",
          "timestamp": "2024-07-22T19:18:38+09:00",
          "tree_id": "2ab0f141ccb89446592e1f1d7f70c2db6d7b9b69",
          "url": "https://github.com/planetarium/libplanet/commit/8053f33d7bb292d213f39e885ef8297124d50d37"
        },
        "date": 1721714157165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201456.32352941178,
            "unit": "ns",
            "range": "± 6468.988646170132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196855.80487804877,
            "unit": "ns",
            "range": "± 7022.164955409094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167811.8,
            "unit": "ns",
            "range": "± 4340.837812757655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004255.214285714,
            "unit": "ns",
            "range": "± 27381.011924826165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2698609.5,
            "unit": "ns",
            "range": "± 18560.255070155443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13051.662790697674,
            "unit": "ns",
            "range": "± 717.7285675774834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60312.2,
            "unit": "ns",
            "range": "± 3092.65763658748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50755.42857142857,
            "unit": "ns",
            "range": "± 381.19946611588136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52649.58163265306,
            "unit": "ns",
            "range": "± 7643.525943161499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2691.175257731959,
            "unit": "ns",
            "range": "± 317.70019968744634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11940.261904761905,
            "unit": "ns",
            "range": "± 655.2450588947365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014471.6133333333,
            "unit": "ns",
            "range": "± 44481.77237102168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1932099.5609756098,
            "unit": "ns",
            "range": "± 69106.0845870495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714610.96875,
            "unit": "ns",
            "range": "± 72824.19520160118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8207953.555555556,
            "unit": "ns",
            "range": "± 173218.52219479787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795023.0615985575,
            "unit": "ns",
            "range": "± 3879.1544055020754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202831.863002232,
            "unit": "ns",
            "range": "± 2185.409670977902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749060.6612630208,
            "unit": "ns",
            "range": "± 1658.2216474651127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002988.5926339286,
            "unit": "ns",
            "range": "± 3659.589037269389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617950.5685686384,
            "unit": "ns",
            "range": "± 1014.6421421670291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580115.2536057692,
            "unit": "ns",
            "range": "± 259.46801446620583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423665.8666666667,
            "unit": "ns",
            "range": "± 34271.11244779667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2553962.3235294116,
            "unit": "ns",
            "range": "± 52277.86268851675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3065420.111111111,
            "unit": "ns",
            "range": "± 63669.02088871875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2584122.2,
            "unit": "ns",
            "range": "± 23217.185495108697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3266379,
            "unit": "ns",
            "range": "± 60473.638361804275"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32204.533333333333,
            "unit": "ns",
            "range": "± 436.0492872971827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10415976.866666667,
            "unit": "ns",
            "range": "± 49004.933690200545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27110997.866666667,
            "unit": "ns",
            "range": "± 171671.268857025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69566263.64285715,
            "unit": "ns",
            "range": "± 225907.80262126922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138597493.7142857,
            "unit": "ns",
            "range": "± 524981.3315450705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288057051.96666664,
            "unit": "ns",
            "range": "± 1386785.0232467216"
          }
        ]
      }
    ]
  }
}