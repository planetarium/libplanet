window.BENCHMARK_DATA = {
  "lastUpdate": 1733363795591,
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
          "id": "3f32c794d9a34501de239bba5a00a36f2ce7dc1b",
          "message": "test: Fix test failures",
          "timestamp": "2024-12-05T10:43:38+09:00",
          "tree_id": "1e361d07c6dc123b08f1535eb27b948225e1e89a",
          "url": "https://github.com/planetarium/libplanet/commit/3f32c794d9a34501de239bba5a00a36f2ce7dc1b"
        },
        "date": 1733363636083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1009478.7878787878,
            "unit": "ns",
            "range": "± 97975.63761396355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1793035.593220339,
            "unit": "ns",
            "range": "± 77556.69953211286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1553570.2127659575,
            "unit": "ns",
            "range": "± 141133.98791233907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6621878.048780488,
            "unit": "ns",
            "range": "± 236487.50761107355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31346.464646464647,
            "unit": "ns",
            "range": "± 4730.714083633074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9869540,
            "unit": "ns",
            "range": "± 184006.41991905763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23810540,
            "unit": "ns",
            "range": "± 299093.67333424394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59460320,
            "unit": "ns",
            "range": "± 398342.31187330757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118228269.23076923,
            "unit": "ns",
            "range": "± 706834.0898973575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234203500,
            "unit": "ns",
            "range": "± 649954.5253323497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3339217.159598214,
            "unit": "ns",
            "range": "± 3314.040521566149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1084859.3880208333,
            "unit": "ns",
            "range": "± 2198.8192219215066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741438.5416666666,
            "unit": "ns",
            "range": "± 1186.228843996842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1924968.8541666667,
            "unit": "ns",
            "range": "± 2870.780418499431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622949.4977678572,
            "unit": "ns",
            "range": "± 1006.0345574329494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565971.26953125,
            "unit": "ns",
            "range": "± 1392.0889106889192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2217694.736842105,
            "unit": "ns",
            "range": "± 47110.042261404786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294188.2352941176,
            "unit": "ns",
            "range": "± 45677.673462438695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2736965.217391304,
            "unit": "ns",
            "range": "± 68696.9868910212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2335735.714285714,
            "unit": "ns",
            "range": "± 61739.069893567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2973000,
            "unit": "ns",
            "range": "± 49191.477194443236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95798.82352941176,
            "unit": "ns",
            "range": "± 5581.676956530074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166122.80701754385,
            "unit": "ns",
            "range": "± 7208.6757636659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145336.73469387754,
            "unit": "ns",
            "range": "± 5750.604818826706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2637180,
            "unit": "ns",
            "range": "± 47012.113940375595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2522627.777777778,
            "unit": "ns",
            "range": "± 50661.55063179867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11935.416666666666,
            "unit": "ns",
            "range": "± 1945.9528401634893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55811.11111111111,
            "unit": "ns",
            "range": "± 6810.194772138834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44246.3768115942,
            "unit": "ns",
            "range": "± 2076.3783310302674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60476.767676767675,
            "unit": "ns",
            "range": "± 13698.583483173552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2717.5257731958764,
            "unit": "ns",
            "range": "± 522.0173826285127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10524.21052631579,
            "unit": "ns",
            "range": "± 1658.1658535141648"
          }
        ]
      }
    ]
  }
}