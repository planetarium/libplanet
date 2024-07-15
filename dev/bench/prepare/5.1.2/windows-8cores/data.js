window.BENCHMARK_DATA = {
  "lastUpdate": 1721033809335,
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
          "id": "9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0",
          "message": "Prepare 5.1.2",
          "timestamp": "2024-07-15T17:45:54+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0"
        },
        "date": 1721033737972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017043.2989690722,
            "unit": "ns",
            "range": "± 98207.11734562198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1805100,
            "unit": "ns",
            "range": "± 67854.16005697098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546954.5454545454,
            "unit": "ns",
            "range": "± 79272.19354765238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6829466.666666667,
            "unit": "ns",
            "range": "± 213553.14278105734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34357.57575757576,
            "unit": "ns",
            "range": "± 5072.597267935984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9795414.285714285,
            "unit": "ns",
            "range": "± 142708.91221775053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23934833.333333332,
            "unit": "ns",
            "range": "± 297555.8595017237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60814153.333333336,
            "unit": "ns",
            "range": "± 665759.135838466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119037593.33333333,
            "unit": "ns",
            "range": "± 1559612.502911571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240948733.33333334,
            "unit": "ns",
            "range": "± 2108735.427984766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360731.0096153845,
            "unit": "ns",
            "range": "± 7380.20840030711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057345.9635416667,
            "unit": "ns",
            "range": "± 2572.0758293594263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749164.404296875,
            "unit": "ns",
            "range": "± 1218.194252174813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935474.4401041667,
            "unit": "ns",
            "range": "± 3319.3713098366234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634741.6145833334,
            "unit": "ns",
            "range": "± 1471.9401174743873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571461.0286458334,
            "unit": "ns",
            "range": "± 947.531745820734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195253.3333333335,
            "unit": "ns",
            "range": "± 29541.444656295203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277113.3333333335,
            "unit": "ns",
            "range": "± 63382.597053098114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746877.272727273,
            "unit": "ns",
            "range": "± 65751.32757535834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2308659.375,
            "unit": "ns",
            "range": "± 71349.06857621582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2935700,
            "unit": "ns",
            "range": "± 44108.415384054635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180085.5421686747,
            "unit": "ns",
            "range": "± 9404.748833281119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167842.5,
            "unit": "ns",
            "range": "± 8648.491124709397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143805.88235294117,
            "unit": "ns",
            "range": "± 2763.256816746159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2693585.714285714,
            "unit": "ns",
            "range": "± 27023.888496116717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488153.3333333335,
            "unit": "ns",
            "range": "± 36894.34464340933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11455.78947368421,
            "unit": "ns",
            "range": "± 1449.3370303513234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53232.02247191011,
            "unit": "ns",
            "range": "± 4482.226562104456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45141.379310344826,
            "unit": "ns",
            "range": "± 2345.532702133198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61582.82828282828,
            "unit": "ns",
            "range": "± 13087.89782471625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2874.742268041237,
            "unit": "ns",
            "range": "± 546.2048852146073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10910.824742268042,
            "unit": "ns",
            "range": "± 1488.0465873245064"
          }
        ]
      },
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
          "id": "9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0",
          "message": "Prepare 5.1.2",
          "timestamp": "2024-07-15T17:45:54+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0"
        },
        "date": 1721033737972,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017043.2989690722,
            "unit": "ns",
            "range": "± 98207.11734562198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1805100,
            "unit": "ns",
            "range": "± 67854.16005697098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1546954.5454545454,
            "unit": "ns",
            "range": "± 79272.19354765238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6829466.666666667,
            "unit": "ns",
            "range": "± 213553.14278105734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34357.57575757576,
            "unit": "ns",
            "range": "± 5072.597267935984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9795414.285714285,
            "unit": "ns",
            "range": "± 142708.91221775053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23934833.333333332,
            "unit": "ns",
            "range": "± 297555.8595017237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60814153.333333336,
            "unit": "ns",
            "range": "± 665759.135838466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119037593.33333333,
            "unit": "ns",
            "range": "± 1559612.502911571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240948733.33333334,
            "unit": "ns",
            "range": "± 2108735.427984766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360731.0096153845,
            "unit": "ns",
            "range": "± 7380.20840030711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1057345.9635416667,
            "unit": "ns",
            "range": "± 2572.0758293594263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749164.404296875,
            "unit": "ns",
            "range": "± 1218.194252174813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1935474.4401041667,
            "unit": "ns",
            "range": "± 3319.3713098366234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634741.6145833334,
            "unit": "ns",
            "range": "± 1471.9401174743873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571461.0286458334,
            "unit": "ns",
            "range": "± 947.531745820734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2195253.3333333335,
            "unit": "ns",
            "range": "± 29541.444656295203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277113.3333333335,
            "unit": "ns",
            "range": "± 63382.597053098114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746877.272727273,
            "unit": "ns",
            "range": "± 65751.32757535834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2308659.375,
            "unit": "ns",
            "range": "± 71349.06857621582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2935700,
            "unit": "ns",
            "range": "± 44108.415384054635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180085.5421686747,
            "unit": "ns",
            "range": "± 9404.748833281119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167842.5,
            "unit": "ns",
            "range": "± 8648.491124709397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143805.88235294117,
            "unit": "ns",
            "range": "± 2763.256816746159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2693585.714285714,
            "unit": "ns",
            "range": "± 27023.888496116717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2488153.3333333335,
            "unit": "ns",
            "range": "± 36894.34464340933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11455.78947368421,
            "unit": "ns",
            "range": "± 1449.3370303513234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53232.02247191011,
            "unit": "ns",
            "range": "± 4482.226562104456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45141.379310344826,
            "unit": "ns",
            "range": "± 2345.532702133198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61582.82828282828,
            "unit": "ns",
            "range": "± 13087.89782471625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2874.742268041237,
            "unit": "ns",
            "range": "± 546.2048852146073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10910.824742268042,
            "unit": "ns",
            "range": "± 1488.0465873245064"
          }
        ]
      }
    ]
  }
}