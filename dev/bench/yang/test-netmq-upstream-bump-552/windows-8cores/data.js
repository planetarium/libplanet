window.BENCHMARK_DATA = {
  "lastUpdate": 1778136608244,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "21497cdd0fbdd9f9707fa163fa0e16719ca6a710",
          "message": "test(5.5.2): bump NetMQ from Planetarium fork to upstream 4.0.4.1\n\nSame change as #PR-on-main-branch but rebased onto release tag 5.5.2,\nwhich is the version NineChronicles.Headless currently consumes\n(LibplanetVersion=5.5.2 in NineChronicles.Headless/Directory.Build.props).\n\nThis branch validates that the *exact* Libplanet.Net code path running\nin production today (5.5.2) builds and passes its tests against the\nupstream NetMQ 4.0.4.1 package, in addition to the parallel main-branch\ntest. If both CI runs are green, swapping the package becomes a low-risk\nchange for Headless.\n\nBranched from tag 5.5.2 (commit c6233b1e4d).",
          "timestamp": "2026-05-07T15:37:23+09:00",
          "tree_id": "b648428123c6acca6549d73c2e476e2eaa729d23",
          "url": "https://github.com/planetarium/libplanet/commit/21497cdd0fbdd9f9707fa163fa0e16719ca6a710"
        },
        "date": 1778136446852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1137073.1958762887,
            "unit": "ns",
            "range": "± 117117.44596367778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1951418.085106383,
            "unit": "ns",
            "range": "± 75053.30600250493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1697590.7216494845,
            "unit": "ns",
            "range": "± 127374.83814388982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6726100,
            "unit": "ns",
            "range": "± 255521.30226087006"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34165.30612244898,
            "unit": "ns",
            "range": "± 1369.8465577708823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10269006.666666666,
            "unit": "ns",
            "range": "± 136821.3510210965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25009720,
            "unit": "ns",
            "range": "± 220007.58818082357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61905553.84615385,
            "unit": "ns",
            "range": "± 289960.4645906766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124470000,
            "unit": "ns",
            "range": "± 812837.665219815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251450084.6153846,
            "unit": "ns",
            "range": "± 920046.3410848335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3649709.6819196427,
            "unit": "ns",
            "range": "± 22423.630296722175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1091689.9088541667,
            "unit": "ns",
            "range": "± 4316.800008721274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 783986.0576923077,
            "unit": "ns",
            "range": "± 2035.4087531993143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2074946.6238839286,
            "unit": "ns",
            "range": "± 3231.553654413241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 567314.9251302084,
            "unit": "ns",
            "range": "± 1761.955064260466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 521681.18024553574,
            "unit": "ns",
            "range": "± 2763.7540699811866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2193129.411764706,
            "unit": "ns",
            "range": "± 41914.09018316338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2310446.6666666665,
            "unit": "ns",
            "range": "± 41263.73133648391"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731106.6666666665,
            "unit": "ns",
            "range": "± 44136.419472013404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2339760,
            "unit": "ns",
            "range": "± 68703.67956817812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2923469.230769231,
            "unit": "ns",
            "range": "± 39860.66115473134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113962.31884057971,
            "unit": "ns",
            "range": "± 5457.377668303043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 187750,
            "unit": "ns",
            "range": "± 10969.219561016078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160319.0909090909,
            "unit": "ns",
            "range": "± 6733.852365234011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2904960,
            "unit": "ns",
            "range": "± 37378.2366013777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2631685.714285714,
            "unit": "ns",
            "range": "± 43193.88947423105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15075.268817204302,
            "unit": "ns",
            "range": "± 2355.0895816977772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67098.93617021276,
            "unit": "ns",
            "range": "± 5434.8436718839885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53778.88888888889,
            "unit": "ns",
            "range": "± 2976.1786238394275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79916.49484536082,
            "unit": "ns",
            "range": "± 14241.65457683589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4011.2244897959185,
            "unit": "ns",
            "range": "± 768.5684447330815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15253.125,
            "unit": "ns",
            "range": "± 1793.0246791385778"
          }
        ]
      }
    ]
  }
}