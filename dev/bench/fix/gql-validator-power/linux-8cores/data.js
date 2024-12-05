window.BENCHMARK_DATA = {
  "lastUpdate": 1733363673699,
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
        "date": 1733363646916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11671812.633333333,
            "unit": "ns",
            "range": "± 201100.62200225846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28313169.833333332,
            "unit": "ns",
            "range": "± 135311.73904974642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72676031.71428572,
            "unit": "ns",
            "range": "± 594010.1064162808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144030726.03333333,
            "unit": "ns",
            "range": "± 751827.2919559638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298894879.28571427,
            "unit": "ns",
            "range": "± 1358957.3642614728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 118779.19318181818,
            "unit": "ns",
            "range": "± 7457.58290532784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199871.02702702704,
            "unit": "ns",
            "range": "± 8917.794195558005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184888.76530612246,
            "unit": "ns",
            "range": "± 16620.138242258206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2948418.433333333,
            "unit": "ns",
            "range": "± 51205.39259055027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2739800.3846153845,
            "unit": "ns",
            "range": "± 32700.220675958906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14695.010869565218,
            "unit": "ns",
            "range": "± 1529.0790771102645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66628.20833333333,
            "unit": "ns",
            "range": "± 6435.652837970457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52605.78461538462,
            "unit": "ns",
            "range": "± 2435.677655270626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64107.102040816324,
            "unit": "ns",
            "range": "± 12713.645077818479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2923.2150537634407,
            "unit": "ns",
            "range": "± 490.8665994611705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15871.39,
            "unit": "ns",
            "range": "± 4381.890759037862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741296.313895089,
            "unit": "ns",
            "range": "± 5947.897156501938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192812.5904947917,
            "unit": "ns",
            "range": "± 1855.3593974228543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756456.2979817708,
            "unit": "ns",
            "range": "± 1666.2796585963335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1991771.809375,
            "unit": "ns",
            "range": "± 2518.754850389399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634001.6374162947,
            "unit": "ns",
            "range": "± 806.554585610918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568510.5182942708,
            "unit": "ns",
            "range": "± 792.539461774971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2588691.9444444445,
            "unit": "ns",
            "range": "± 53170.02120000045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2616927.7352941176,
            "unit": "ns",
            "range": "± 44723.542525902136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3122766.9615384615,
            "unit": "ns",
            "range": "± 42814.51772591353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599061.5303030303,
            "unit": "ns",
            "range": "± 76283.60872940073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3316502.1875,
            "unit": "ns",
            "range": "± 62501.703572749386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013781.3186813187,
            "unit": "ns",
            "range": "± 64717.78781325701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2070436.0849056605,
            "unit": "ns",
            "range": "± 85046.64470214926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1673613.0638297873,
            "unit": "ns",
            "range": "± 131787.81789197004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7657952.043478261,
            "unit": "ns",
            "range": "± 188362.04490542295"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34522.58426966292,
            "unit": "ns",
            "range": "± 3431.613590800679"
          }
        ]
      }
    ]
  }
}