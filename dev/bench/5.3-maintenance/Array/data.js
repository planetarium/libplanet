window.BENCHMARK_DATA = {
  "lastUpdate": 1729572354523,
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
          "id": "866c901166f62fbf6e3294afb4ca779f76656073",
          "message": "Merge pull request #3969 from riemannulus/release/5.3.1\n\n🚀 release: 5.3.1",
          "timestamp": "2024-10-14T15:48:36+09:00",
          "tree_id": "3760144b41867ff68c42b61e7d6b211a9db2f29c",
          "url": "https://github.com/planetarium/libplanet/commit/866c901166f62fbf6e3294afb4ca779f76656073"
        },
        "date": 1728890352396,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10644701.25,
            "unit": "ns",
            "range": "± 86376.26597743471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26392273.92857143,
            "unit": "ns",
            "range": "± 164986.27574039853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66572646.86666667,
            "unit": "ns",
            "range": "± 158162.5837010162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134329585.7857143,
            "unit": "ns",
            "range": "± 223305.7033744681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269832608.73333335,
            "unit": "ns",
            "range": "± 547533.4422602444"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13663.72,
            "unit": "ns",
            "range": "± 363.5878527490525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111055.6724137931,
            "unit": "ns",
            "range": "± 4877.647903061802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105320.09615384616,
            "unit": "ns",
            "range": "± 3538.5740911299695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92690,
            "unit": "ns",
            "range": "± 3797.9340255914267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2959957.673469388,
            "unit": "ns",
            "range": "± 175440.91984928257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2697475.3,
            "unit": "ns",
            "range": "± 179636.64480241408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5402.382978723404,
            "unit": "ns",
            "range": "± 800.9220372887037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27333.58064516129,
            "unit": "ns",
            "range": "± 2021.1217415012745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23759.416666666668,
            "unit": "ns",
            "range": "± 1866.6855155689957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30879.757894736842,
            "unit": "ns",
            "range": "± 5394.397773095575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1438.7395833333333,
            "unit": "ns",
            "range": "± 231.16670880291557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5538.591836734694,
            "unit": "ns",
            "range": "± 855.6157586969821"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 684688.4659090909,
            "unit": "ns",
            "range": "± 41608.877819950954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1283493.8035714286,
            "unit": "ns",
            "range": "± 50528.67521190126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1037453.4027777778,
            "unit": "ns",
            "range": "± 48326.165354283694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8896432.83,
            "unit": "ns",
            "range": "± 1345945.765106922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2104546.3157894737,
            "unit": "ns",
            "range": "± 20773.59510707077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2266175.8181818184,
            "unit": "ns",
            "range": "± 70573.69738988037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2566558.8,
            "unit": "ns",
            "range": "± 84290.95866656999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2246401.6315789474,
            "unit": "ns",
            "range": "± 23364.889443137934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2781980.242424242,
            "unit": "ns",
            "range": "± 78014.15771233062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3044945.5049479166,
            "unit": "ns",
            "range": "± 52686.190027957506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928810.9914550781,
            "unit": "ns",
            "range": "± 1925.2547925045224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 615222.7729166667,
            "unit": "ns",
            "range": "± 4835.878911267098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1649811.6216145833,
            "unit": "ns",
            "range": "± 12699.069494181489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463532.18450520834,
            "unit": "ns",
            "range": "± 1323.8997266891256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421906.19199916295,
            "unit": "ns",
            "range": "± 894.0920520414937"
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
          "id": "57a4569717082553221fedeaa74ac656edb9d5c2",
          "message": "Merge pull request #3971 from riemannulus/prepare/5.3.2\n\n🧹  prepare: 5.3.2",
          "timestamp": "2024-10-16T15:08:31+09:00",
          "tree_id": "6dbfc866a79fbd44fcbac641b75e9992b736d867",
          "url": "https://github.com/planetarium/libplanet/commit/57a4569717082553221fedeaa74ac656edb9d5c2"
        },
        "date": 1729059417533,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10630981.23076923,
            "unit": "ns",
            "range": "± 96770.39412371418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26409955.785714287,
            "unit": "ns",
            "range": "± 334497.8289167621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67272795,
            "unit": "ns",
            "range": "± 143375.07803713254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133984387.35714285,
            "unit": "ns",
            "range": "± 256831.24855306096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269337288.5714286,
            "unit": "ns",
            "range": "± 490881.0711912995"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13491.470588235294,
            "unit": "ns",
            "range": "± 545.4587923185829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111113.93939393939,
            "unit": "ns",
            "range": "± 3396.4188395591204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 108043.71818181819,
            "unit": "ns",
            "range": "± 4324.101108433937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91069.79166666667,
            "unit": "ns",
            "range": "± 2355.070791498849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2963689.57,
            "unit": "ns",
            "range": "± 195424.9880538401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2686508.69,
            "unit": "ns",
            "range": "± 169796.9012801986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5508.923913043478,
            "unit": "ns",
            "range": "± 740.964195627631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27004.98888888889,
            "unit": "ns",
            "range": "± 1579.3576385470626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22801.372340425532,
            "unit": "ns",
            "range": "± 1539.223117715051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30338.531914893618,
            "unit": "ns",
            "range": "± 5001.35387627637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1390.09375,
            "unit": "ns",
            "range": "± 298.4955285965022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5267.2967032967035,
            "unit": "ns",
            "range": "± 635.7830953417559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686571.2857142857,
            "unit": "ns",
            "range": "± 48705.96080113711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1280872.9722222222,
            "unit": "ns",
            "range": "± 41713.01630596933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1070931.9239130435,
            "unit": "ns",
            "range": "± 77023.64320218177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8841657.12,
            "unit": "ns",
            "range": "± 1341368.577581952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116088.8163265307,
            "unit": "ns",
            "range": "± 73710.35484744592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2262672.0606060605,
            "unit": "ns",
            "range": "± 70399.10921264354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2537987.9285714286,
            "unit": "ns",
            "range": "± 39056.75808056445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2285393.31372549,
            "unit": "ns",
            "range": "± 90986.33506290715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2829716.3421052634,
            "unit": "ns",
            "range": "± 96172.94994120393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3035242.263541667,
            "unit": "ns",
            "range": "± 36713.299780168694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 926040.185546875,
            "unit": "ns",
            "range": "± 7097.235076504954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613837.1250651042,
            "unit": "ns",
            "range": "± 5337.198767411305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1638687.5209635417,
            "unit": "ns",
            "range": "± 18582.25305925958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463129.88720703125,
            "unit": "ns",
            "range": "± 608.9400782350269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 417379.7941545759,
            "unit": "ns",
            "range": "± 1126.531393304275"
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
          "id": "46cff67d3e5e0be88e23aa0924e4b5f88e20c672",
          "message": "Merge pull request #3973 from riemannulus/fix/unvalidate-action-scheme\n\nfix: do not check action is valid when append block",
          "timestamp": "2024-10-22T13:30:46+09:00",
          "tree_id": "357b3e893c3e15f3f21891a6b538d3b86f3d8891",
          "url": "https://github.com/planetarium/libplanet/commit/46cff67d3e5e0be88e23aa0924e4b5f88e20c672"
        },
        "date": 1729572303970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10662743.92857143,
            "unit": "ns",
            "range": "± 173633.41979915142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26420887.285714287,
            "unit": "ns",
            "range": "± 280333.59613871813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66896669.6,
            "unit": "ns",
            "range": "± 106261.79969893763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134225774,
            "unit": "ns",
            "range": "± 118114.6185305417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275061467.21428573,
            "unit": "ns",
            "range": "± 480668.8350585333"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13403.111111111111,
            "unit": "ns",
            "range": "± 278.6114496378084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114312.17142857143,
            "unit": "ns",
            "range": "± 3342.1714980965703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105850.80434782608,
            "unit": "ns",
            "range": "± 4035.3265907734035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93208.76470588235,
            "unit": "ns",
            "range": "± 1640.8220321462259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004819.553846154,
            "unit": "ns",
            "range": "± 140109.29755674573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2709705.74,
            "unit": "ns",
            "range": "± 179142.93209256014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5449.709677419355,
            "unit": "ns",
            "range": "± 720.7488041680522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27666.536842105263,
            "unit": "ns",
            "range": "± 1915.6827726245149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23502.294736842105,
            "unit": "ns",
            "range": "± 2144.2886231662214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31013.052631578947,
            "unit": "ns",
            "range": "± 5399.694570496304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1194.3333333333333,
            "unit": "ns",
            "range": "± 212.5825329920907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4939.870967741936,
            "unit": "ns",
            "range": "± 541.1166840695278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 677206.286516854,
            "unit": "ns",
            "range": "± 42315.52318687442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1272255.2647058824,
            "unit": "ns",
            "range": "± 40991.07592037108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1036649.7,
            "unit": "ns",
            "range": "± 51641.939375774215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8841694.89,
            "unit": "ns",
            "range": "± 1461270.7791456892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2115455.4615384615,
            "unit": "ns",
            "range": "± 35263.65006068663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284857.703703704,
            "unit": "ns",
            "range": "± 95290.7265890696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2539094.066666667,
            "unit": "ns",
            "range": "± 46952.60731002618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2257255.216666667,
            "unit": "ns",
            "range": "± 92108.73461113297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2805353.033333333,
            "unit": "ns",
            "range": "± 80951.4679892807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3042958.171316964,
            "unit": "ns",
            "range": "± 32581.888104593723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 922150.0464192708,
            "unit": "ns",
            "range": "± 4490.836447891242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617641.1299479167,
            "unit": "ns",
            "range": "± 5322.56686444575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1620182.4170572916,
            "unit": "ns",
            "range": "± 5140.410913237038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470687.2704031808,
            "unit": "ns",
            "range": "± 648.0059205771829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423900.6741536458,
            "unit": "ns",
            "range": "± 1580.4701545718644"
          }
        ]
      }
    ]
  }
}