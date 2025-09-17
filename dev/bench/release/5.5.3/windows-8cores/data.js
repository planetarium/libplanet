window.BENCHMARK_DATA = {
  "lastUpdate": 1758099322242,
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
          "id": "1b09bf3129a8e18f75e15d10485fcb9300e79edf",
          "message": "Add pr number",
          "timestamp": "2025-09-17T17:40:07+09:00",
          "tree_id": "23455712f56f25fcb66ee06c9d26ee977d75ea55",
          "url": "https://github.com/planetarium/libplanet/commit/1b09bf3129a8e18f75e15d10485fcb9300e79edf"
        },
        "date": 1758099067263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1022121.875,
            "unit": "ns",
            "range": "± 86828.13054125647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1835713.2075471699,
            "unit": "ns",
            "range": "± 76028.86354166333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1575225.2747252746,
            "unit": "ns",
            "range": "± 96668.93743701471"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6754356.41025641,
            "unit": "ns",
            "range": "± 230770.23409588457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33948.936170212764,
            "unit": "ns",
            "range": "± 3902.0740192615426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10086135.714285715,
            "unit": "ns",
            "range": "± 50713.961924364914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26158807.14285714,
            "unit": "ns",
            "range": "± 256639.48513366043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65836753.84615385,
            "unit": "ns",
            "range": "± 819659.6596712002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132490680,
            "unit": "ns",
            "range": "± 424323.73624728696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261658506.66666666,
            "unit": "ns",
            "range": "± 1605522.328654922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3320324.31640625,
            "unit": "ns",
            "range": "± 3203.7033245109983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075406.5655048077,
            "unit": "ns",
            "range": "± 1508.9674048000397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 795157.9557291666,
            "unit": "ns",
            "range": "± 1588.1694831808493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911954.2818509615,
            "unit": "ns",
            "range": "± 831.6149088446936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 597943.6593191965,
            "unit": "ns",
            "range": "± 1029.3747914070982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 610922.2307477678,
            "unit": "ns",
            "range": "± 585.5525974458029"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2264978.5714285714,
            "unit": "ns",
            "range": "± 32341.76101412082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2328400,
            "unit": "ns",
            "range": "± 64286.05505862061"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2801886.6666666665,
            "unit": "ns",
            "range": "± 40574.44422058698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2403750,
            "unit": "ns",
            "range": "± 27934.69425028924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2979768.75,
            "unit": "ns",
            "range": "± 56915.67117235815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108900,
            "unit": "ns",
            "range": "± 5218.962307544247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181178.0701754386,
            "unit": "ns",
            "range": "± 7793.764778562341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181262.06896551725,
            "unit": "ns",
            "range": "± 5224.6266984284175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809946.153846154,
            "unit": "ns",
            "range": "± 44099.25576440445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2657506.6666666665,
            "unit": "ns",
            "range": "± 39759.26606585235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15412.222222222223,
            "unit": "ns",
            "range": "± 1309.1576996858294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64744.73684210526,
            "unit": "ns",
            "range": "± 4499.63044395191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63703.125,
            "unit": "ns",
            "range": "± 4787.449669929206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78094.89795918367,
            "unit": "ns",
            "range": "± 11610.08602087688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5014.583333333333,
            "unit": "ns",
            "range": "± 665.3814365763075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14554.736842105263,
            "unit": "ns",
            "range": "± 1569.1011399709091"
          }
        ]
      }
    ]
  }
}