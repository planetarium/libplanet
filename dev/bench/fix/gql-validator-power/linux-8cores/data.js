window.BENCHMARK_DATA = {
  "lastUpdate": 1733372548751,
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
          "id": "a1686d21a9ebc600ff4f9f40ffa760133576e6fb",
          "message": "chore: Changes",
          "timestamp": "2024-12-05T11:03:36+09:00",
          "tree_id": "ef4903aa61c1d279ae3528979417cb5d7e89f5b0",
          "url": "https://github.com/planetarium/libplanet/commit/a1686d21a9ebc600ff4f9f40ffa760133576e6fb"
        },
        "date": 1733364765939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11045012.307692308,
            "unit": "ns",
            "range": "± 63985.776504606365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28289717.833333332,
            "unit": "ns",
            "range": "± 139027.1211365747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72191292.73333333,
            "unit": "ns",
            "range": "± 430213.1050905331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 142926010.57142857,
            "unit": "ns",
            "range": "± 646466.697459079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300307650.14285713,
            "unit": "ns",
            "range": "± 1014071.8254686521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115509.33516483517,
            "unit": "ns",
            "range": "± 8194.431083585889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201176.94545454546,
            "unit": "ns",
            "range": "± 8576.757300592457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169106.7,
            "unit": "ns",
            "range": "± 3831.268885589239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2929017.8571428573,
            "unit": "ns",
            "range": "± 33482.14641728919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830166.3846153845,
            "unit": "ns",
            "range": "± 22354.918539844355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14032.159574468085,
            "unit": "ns",
            "range": "± 1575.7001195453722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62032.243589743586,
            "unit": "ns",
            "range": "± 3209.533231370267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52172.769230769234,
            "unit": "ns",
            "range": "± 1421.075545006452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64276.697916666664,
            "unit": "ns",
            "range": "± 10801.941997544305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3391.1958762886597,
            "unit": "ns",
            "range": "± 657.3632246707177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12583.10465116279,
            "unit": "ns",
            "range": "± 823.9478607015027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3827605.546875,
            "unit": "ns",
            "range": "± 5164.19903419048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207434.332421875,
            "unit": "ns",
            "range": "± 1826.0128100861937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 756970.9382161458,
            "unit": "ns",
            "range": "± 1799.3704646098086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936124.3055989584,
            "unit": "ns",
            "range": "± 2022.0240867802927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 639694.6845703125,
            "unit": "ns",
            "range": "± 1010.9244806129312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577887.167829241,
            "unit": "ns",
            "range": "± 1064.9517409904602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2474308.119047619,
            "unit": "ns",
            "range": "± 56252.01037338682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2573873.6785714286,
            "unit": "ns",
            "range": "± 72653.95050769324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3044511.3333333335,
            "unit": "ns",
            "range": "± 33958.07819874943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2603231.1304347827,
            "unit": "ns",
            "range": "± 62452.56735337362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3338235.6666666665,
            "unit": "ns",
            "range": "± 67414.97879049974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1001251.4746835442,
            "unit": "ns",
            "range": "± 48504.972057584404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1958153.075,
            "unit": "ns",
            "range": "± 68901.77434204007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1612453.975609756,
            "unit": "ns",
            "range": "± 84870.78366159188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7821176.932432433,
            "unit": "ns",
            "range": "± 262579.8202983598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31321.090909090908,
            "unit": "ns",
            "range": "± 1000.5095377992519"
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
          "id": "62e3c800cf2602ad9b50ef88d4d6c70197d2e931",
          "message": "chore: Changes",
          "timestamp": "2024-12-05T13:12:32+09:00",
          "tree_id": "728eda738ebffb6d400d115e7e10522c0fc3a29d",
          "url": "https://github.com/planetarium/libplanet/commit/62e3c800cf2602ad9b50ef88d4d6c70197d2e931"
        },
        "date": 1733372521610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10830349.92857143,
            "unit": "ns",
            "range": "± 54393.15237794083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27719688.714285713,
            "unit": "ns",
            "range": "± 63567.257717474175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71978352.4,
            "unit": "ns",
            "range": "± 436404.4131958665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140827004,
            "unit": "ns",
            "range": "± 619761.946284908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292912541.0769231,
            "unit": "ns",
            "range": "± 1179975.3726866127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113805.88764044944,
            "unit": "ns",
            "range": "± 7808.93865655105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189411.06382978722,
            "unit": "ns",
            "range": "± 6177.152060844359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170688.34615384616,
            "unit": "ns",
            "range": "± 4586.975621843288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2840120.714285714,
            "unit": "ns",
            "range": "± 24760.193559509902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2728017.285714286,
            "unit": "ns",
            "range": "± 41070.684389473965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12748.133333333333,
            "unit": "ns",
            "range": "± 760.762634067459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60232.35135135135,
            "unit": "ns",
            "range": "± 2839.351752576838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49789.32352941176,
            "unit": "ns",
            "range": "± 1014.1918109567661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54125.642857142855,
            "unit": "ns",
            "range": "± 6493.756816572628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2463.59375,
            "unit": "ns",
            "range": "± 425.72096317522596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12055.686813186812,
            "unit": "ns",
            "range": "± 688.6308140407298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3778248.229073661,
            "unit": "ns",
            "range": "± 6627.626421350402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189123.912388393,
            "unit": "ns",
            "range": "± 600.3976946295734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 817979.0322265625,
            "unit": "ns",
            "range": "± 521.5932806284608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950420.3759014423,
            "unit": "ns",
            "range": "± 2244.4873269377767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609245.3842447917,
            "unit": "ns",
            "range": "± 655.5718510386989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567748.8050362723,
            "unit": "ns",
            "range": "± 257.2707992565843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2426974.882352941,
            "unit": "ns",
            "range": "± 42875.447939179525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2523445.9285714286,
            "unit": "ns",
            "range": "± 66632.1518790422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3034142.433333333,
            "unit": "ns",
            "range": "± 52336.390265919814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2603607.052631579,
            "unit": "ns",
            "range": "± 45742.76456746853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3266400.1304347827,
            "unit": "ns",
            "range": "± 79669.76494728061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012890,
            "unit": "ns",
            "range": "± 70288.09383767164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917873,
            "unit": "ns",
            "range": "± 75621.03067241501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1566031.0789473683,
            "unit": "ns",
            "range": "± 79156.5974547101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7788810.095238095,
            "unit": "ns",
            "range": "± 267822.59195194225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30490.4,
            "unit": "ns",
            "range": "± 780.0818103053234"
          }
        ]
      }
    ]
  }
}