window.BENCHMARK_DATA = {
  "lastUpdate": 1728889377133,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "7063430cde5bbc731a6c900aa461119b1c8f0ade",
          "message": "Prepare 5.3.1",
          "timestamp": "2024-10-10T17:56:15+09:00",
          "tree_id": "a924950a4d2ac793b68a6139ae388d38e427220c",
          "url": "https://github.com/planetarium/libplanet/commit/7063430cde5bbc731a6c900aa461119b1c8f0ade"
        },
        "date": 1728552501365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10859503.833333334,
            "unit": "ns",
            "range": "± 88721.71473139361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26141446.64285714,
            "unit": "ns",
            "range": "± 163827.79091219636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67739860.93333334,
            "unit": "ns",
            "range": "± 119311.93260253721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135147509.2857143,
            "unit": "ns",
            "range": "± 163947.23444470152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272308500.3333333,
            "unit": "ns",
            "range": "± 213991.48213577725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14117.441176470587,
            "unit": "ns",
            "range": "± 280.66182288214657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111665.80882352941,
            "unit": "ns",
            "range": "± 4994.787331337953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105830.34782608696,
            "unit": "ns",
            "range": "± 3585.5708872423106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93828.38095238095,
            "unit": "ns",
            "range": "± 4206.293657889987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3072110.2525773197,
            "unit": "ns",
            "range": "± 176940.94446906526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2693569.35,
            "unit": "ns",
            "range": "± 174788.56620981928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5024.868131868132,
            "unit": "ns",
            "range": "± 679.3738818253696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27493.444444444445,
            "unit": "ns",
            "range": "± 1935.972422736957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23717.073684210525,
            "unit": "ns",
            "range": "± 1877.380311747838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30910.4375,
            "unit": "ns",
            "range": "± 5032.401891348964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1403.2061855670104,
            "unit": "ns",
            "range": "± 298.9241451349716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4951.833333333333,
            "unit": "ns",
            "range": "± 578.4149641792792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 704380.53125,
            "unit": "ns",
            "range": "± 64961.15325459851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1258978.4347826086,
            "unit": "ns",
            "range": "± 45727.28466737564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1038284.3684210526,
            "unit": "ns",
            "range": "± 49032.845472218476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8816352.86,
            "unit": "ns",
            "range": "± 1222875.2536546066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2166897.511627907,
            "unit": "ns",
            "range": "± 79860.69993711733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282814.875,
            "unit": "ns",
            "range": "± 70244.51431859173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2533280.1428571427,
            "unit": "ns",
            "range": "± 42279.235654355005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2252840.5757575757,
            "unit": "ns",
            "range": "± 70376.55667285019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2806182.125,
            "unit": "ns",
            "range": "± 54333.760197351825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048144.5200520833,
            "unit": "ns",
            "range": "± 48019.48063141411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917702.5277994792,
            "unit": "ns",
            "range": "± 5293.636590088036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612617.9358723959,
            "unit": "ns",
            "range": "± 5332.637571619921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1621387.7470703125,
            "unit": "ns",
            "range": "± 1097.1939959244485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464169.16744559153,
            "unit": "ns",
            "range": "± 262.7003189047743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421844.20296223956,
            "unit": "ns",
            "range": "± 2563.380804096686"
          }
        ]
      },
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
          "id": "4ca328bb06cc3329bf0952effad24aeac5e3a664",
          "message": "Merge pull request #3967 from riemannulus/fix/system.text.json-version\n\n🔧 Patch: CVE-2024-43485 to `5.3-maintenance`",
          "timestamp": "2024-10-14T15:25:19+09:00",
          "tree_id": "62916e6a449a220d3db869842fbd8c7d116fcded",
          "url": "https://github.com/planetarium/libplanet/commit/4ca328bb06cc3329bf0952effad24aeac5e3a664"
        },
        "date": 1728888232103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10610208.07142857,
            "unit": "ns",
            "range": "± 127588.68577368466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26377065.42857143,
            "unit": "ns",
            "range": "± 238569.36864228637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66979743.307692304,
            "unit": "ns",
            "range": "± 75660.15412177515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134958472.53333333,
            "unit": "ns",
            "range": "± 204581.97438570284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272114185.7307692,
            "unit": "ns",
            "range": "± 187022.5577166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13168.045454545454,
            "unit": "ns",
            "range": "± 486.0103814828351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114788,
            "unit": "ns",
            "range": "± 4786.735771499598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105427.43181818182,
            "unit": "ns",
            "range": "± 3166.1967677305392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91482.26315789473,
            "unit": "ns",
            "range": "± 2018.7618824447068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018702.8947368423,
            "unit": "ns",
            "range": "± 174563.7760039429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2732665.97979798,
            "unit": "ns",
            "range": "± 171383.533806607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4931.528089887641,
            "unit": "ns",
            "range": "± 567.5001419680967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27773.445652173912,
            "unit": "ns",
            "range": "± 2220.72976008868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23857.969387755104,
            "unit": "ns",
            "range": "± 2028.2469931033083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30304.184210526317,
            "unit": "ns",
            "range": "± 4911.9014480531205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1338.9787234042553,
            "unit": "ns",
            "range": "± 220.43929643647152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5136.83908045977,
            "unit": "ns",
            "range": "± 537.4834962001314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 676378.0897435897,
            "unit": "ns",
            "range": "± 34692.44581165242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1266377.96875,
            "unit": "ns",
            "range": "± 36036.69832938172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1044360.3783783783,
            "unit": "ns",
            "range": "± 46920.15093283853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8974675.81,
            "unit": "ns",
            "range": "± 1339302.1054999046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124584.8983050846,
            "unit": "ns",
            "range": "± 76762.74713546007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2341220.7333333334,
            "unit": "ns",
            "range": "± 87365.24259431571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2577702,
            "unit": "ns",
            "range": "± 87668.46004215063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2257965.896551724,
            "unit": "ns",
            "range": "± 91828.84014900721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2812602.088235294,
            "unit": "ns",
            "range": "± 81493.76332908815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3035722.7067871094,
            "unit": "ns",
            "range": "± 56191.76906370782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925524.6288411458,
            "unit": "ns",
            "range": "± 5350.881812351324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 619539.52578125,
            "unit": "ns",
            "range": "± 4586.648901195457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1613815.5802083334,
            "unit": "ns",
            "range": "± 20096.197998417087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467942.00166015624,
            "unit": "ns",
            "range": "± 644.8987342211044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414475.3092447917,
            "unit": "ns",
            "range": "± 1525.297445793729"
          }
        ]
      },
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
          "id": "0e380da42ce0f6a81121b41fc301539ed994ffc8",
          "message": "Merge pull request #3968 from riemannulus/bump/bouncycastle\n\n🔧 Patch:  CVE-2024-29857 to `5.3-maintenance`",
          "timestamp": "2024-10-14T15:38:33+09:00",
          "tree_id": "fc020f10caa797606022ceeb9067c6e9edf55986",
          "url": "https://github.com/planetarium/libplanet/commit/0e380da42ce0f6a81121b41fc301539ed994ffc8"
        },
        "date": 1728889328709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10873660,
            "unit": "ns",
            "range": "± 85118.10216078919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26348330.5,
            "unit": "ns",
            "range": "± 141655.48495489926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66332734.64285714,
            "unit": "ns",
            "range": "± 119555.27944692309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135605970.42857143,
            "unit": "ns",
            "range": "± 153985.43816004376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269428095.6923077,
            "unit": "ns",
            "range": "± 245999.10814858138"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13775.510416666666,
            "unit": "ns",
            "range": "± 1442.1452733216704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110533.88888888889,
            "unit": "ns",
            "range": "± 3136.681647654119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 107459.64583333333,
            "unit": "ns",
            "range": "± 4232.587059036435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91723.5,
            "unit": "ns",
            "range": "± 3445.3159169286437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3036989.0677966103,
            "unit": "ns",
            "range": "± 132369.9249941649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2700457.37,
            "unit": "ns",
            "range": "± 179754.53507478652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5087.377777777778,
            "unit": "ns",
            "range": "± 684.7197339841797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27744.11111111111,
            "unit": "ns",
            "range": "± 1809.4047406828286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24971.784210526315,
            "unit": "ns",
            "range": "± 2473.293091454671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31439.701030927834,
            "unit": "ns",
            "range": "± 5747.096198235224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1235.7252747252746,
            "unit": "ns",
            "range": "± 182.74177688956902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5077.387096774193,
            "unit": "ns",
            "range": "± 573.9836960314796"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 687776.5434782609,
            "unit": "ns",
            "range": "± 50654.45294885277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1291988.5,
            "unit": "ns",
            "range": "± 46434.67696970108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1050660.731707317,
            "unit": "ns",
            "range": "± 53209.66830879581"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8698444.01,
            "unit": "ns",
            "range": "± 1305045.8194135171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2105425.923076923,
            "unit": "ns",
            "range": "± 26316.2860837845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278001.0701754387,
            "unit": "ns",
            "range": "± 90538.48063015204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2557263.7333333334,
            "unit": "ns",
            "range": "± 44987.149107061145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2307404.7843137253,
            "unit": "ns",
            "range": "± 93652.75980350259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2735156,
            "unit": "ns",
            "range": "± 40763.60668314547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3057105.233984375,
            "unit": "ns",
            "range": "± 38699.51785840688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 924717.5323567708,
            "unit": "ns",
            "range": "± 5488.467644239591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613850.9524088542,
            "unit": "ns",
            "range": "± 5623.332734286793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1627633.71171875,
            "unit": "ns",
            "range": "± 18806.407737041354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 464247.9410807292,
            "unit": "ns",
            "range": "± 775.5256087897924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422308.211328125,
            "unit": "ns",
            "range": "± 1456.5743095093787"
          }
        ]
      }
    ]
  }
}