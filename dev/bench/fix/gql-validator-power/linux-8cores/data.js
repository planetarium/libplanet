window.BENCHMARK_DATA = {
  "lastUpdate": 1733364308776,
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
          "id": "f7c4fb40c8ca05aa3d0e2c4578ae707817b186b4",
          "message": "test: Fix test failures",
          "timestamp": "2024-12-05T10:55:14+09:00",
          "tree_id": "1e361d07c6dc123b08f1535eb27b948225e1e89a",
          "url": "https://github.com/planetarium/libplanet/commit/f7c4fb40c8ca05aa3d0e2c4578ae707817b186b4"
        },
        "date": 1733364282079,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10993982.066666666,
            "unit": "ns",
            "range": "± 117216.63409837522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28153715.833333332,
            "unit": "ns",
            "range": "± 151312.54156577782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70888441.28571428,
            "unit": "ns",
            "range": "± 440026.7505491401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144699685.93333334,
            "unit": "ns",
            "range": "± 562960.9052420282"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297867028.8333333,
            "unit": "ns",
            "range": "± 2629244.1757684895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 126602.72,
            "unit": "ns",
            "range": "± 15311.93724132986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205109.91304347827,
            "unit": "ns",
            "range": "± 7891.424928577959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172777.54666666666,
            "unit": "ns",
            "range": "± 8350.156804310716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2900517,
            "unit": "ns",
            "range": "± 41676.221513792094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2875076,
            "unit": "ns",
            "range": "± 32361.994554391444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15603.741379310344,
            "unit": "ns",
            "range": "± 2521.9565354382967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76826.04,
            "unit": "ns",
            "range": "± 12714.69911616258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61918.818181818184,
            "unit": "ns",
            "range": "± 1423.8075591062034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71518.60204081633,
            "unit": "ns",
            "range": "± 13335.080803499919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3214.223404255319,
            "unit": "ns",
            "range": "± 606.8042350391145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14082.717391304348,
            "unit": "ns",
            "range": "± 1957.965662272777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3759715.736328125,
            "unit": "ns",
            "range": "± 5946.610001957243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221015.990234375,
            "unit": "ns",
            "range": "± 1717.9620611021228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 773027.0249023438,
            "unit": "ns",
            "range": "± 870.7770740021317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1990849.8951322115,
            "unit": "ns",
            "range": "± 2999.712645735011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636548.6151646206,
            "unit": "ns",
            "range": "± 656.2474507908158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580768.3958565848,
            "unit": "ns",
            "range": "± 894.7798389494192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2488289.533333333,
            "unit": "ns",
            "range": "± 29223.847152788145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2534714.722222222,
            "unit": "ns",
            "range": "± 49344.879650399576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3138902.2333333334,
            "unit": "ns",
            "range": "± 56209.991576824366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2601558.724137931,
            "unit": "ns",
            "range": "± 76066.67692646674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3301316.933333333,
            "unit": "ns",
            "range": "± 43597.39290446926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033595.4770114942,
            "unit": "ns",
            "range": "± 70541.76532282085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1959093.4166666667,
            "unit": "ns",
            "range": "± 65153.05991427308"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1602105.3134328357,
            "unit": "ns",
            "range": "± 71830.9297990372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7819207.705128205,
            "unit": "ns",
            "range": "± 250302.25109972223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32495.472972972973,
            "unit": "ns",
            "range": "± 1640.554124336034"
          }
        ]
      }
    ]
  }
}