window.BENCHMARK_DATA = {
  "lastUpdate": 1725240464304,
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
          "id": "e1eb5cd0c5fe0ec219d47ccea9bf706c46999198",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-08-30T16:54:37+09:00",
          "tree_id": "a89562dce658f987a8d715b4193ee2ef965bdfa9",
          "url": "https://github.com/planetarium/libplanet/commit/e1eb5cd0c5fe0ec219d47ccea9bf706c46999198"
        },
        "date": 1725005074370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986840.4255319149,
            "unit": "ns",
            "range": "± 98686.89280025824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1826088.888888889,
            "unit": "ns",
            "range": "± 69398.14715309645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1557048.4210526317,
            "unit": "ns",
            "range": "± 100257.45779354812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6833026.666666667,
            "unit": "ns",
            "range": "± 177040.10637244832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30277.272727272728,
            "unit": "ns",
            "range": "± 386.599113370523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9885447.05882353,
            "unit": "ns",
            "range": "± 199884.1824583897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24004313.333333332,
            "unit": "ns",
            "range": "± 366592.5372684943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58941884.615384616,
            "unit": "ns",
            "range": "± 203200.9015980402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117636486.66666667,
            "unit": "ns",
            "range": "± 853364.4530969894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234019346.66666666,
            "unit": "ns",
            "range": "± 1049856.1322300083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3340111.495535714,
            "unit": "ns",
            "range": "± 12840.423011854533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1051158.6328125,
            "unit": "ns",
            "range": "± 2217.978005776475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742217.9827008928,
            "unit": "ns",
            "range": "± 2541.8463274498536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953510.703125,
            "unit": "ns",
            "range": "± 5920.010090012955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624011.4408052885,
            "unit": "ns",
            "range": "± 1911.1818723868014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568660.87890625,
            "unit": "ns",
            "range": "± 1258.3674773098426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2117843.5897435895,
            "unit": "ns",
            "range": "± 73220.89791881677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2204254.1666666665,
            "unit": "ns",
            "range": "± 86978.97999512817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2681400,
            "unit": "ns",
            "range": "± 38342.64923032836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2281366.6666666665,
            "unit": "ns",
            "range": "± 62780.907190739985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2928533.3333333335,
            "unit": "ns",
            "range": "± 21148.57972163673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178405.6603773585,
            "unit": "ns",
            "range": "± 7333.364614878085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 169724.64788732395,
            "unit": "ns",
            "range": "± 7989.684748114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147571.42857142858,
            "unit": "ns",
            "range": "± 2146.7071640891427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2726940,
            "unit": "ns",
            "range": "± 43113.41852767949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472940,
            "unit": "ns",
            "range": "± 32639.695376729764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10742.553191489362,
            "unit": "ns",
            "range": "± 1298.3438053632747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52934.04255319149,
            "unit": "ns",
            "range": "± 4690.038704737221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44376.92307692308,
            "unit": "ns",
            "range": "± 1824.1963457074207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54761.95652173913,
            "unit": "ns",
            "range": "± 13317.408605060253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2710.3092783505153,
            "unit": "ns",
            "range": "± 501.141309097393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10021.59090909091,
            "unit": "ns",
            "range": "± 871.1135512817777"
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
          "id": "0011c33781434151b7567d3aa542f2d586c5edc3",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-09-02T09:51:36+09:00",
          "tree_id": "3f3e082b8d11fe969f9b1ffc3c70cb15c5b0818b",
          "url": "https://github.com/planetarium/libplanet/commit/0011c33781434151b7567d3aa542f2d586c5edc3"
        },
        "date": 1725239067292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 990871.2765957447,
            "unit": "ns",
            "range": "± 92299.95033997245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1773380.357142857,
            "unit": "ns",
            "range": "± 75777.69741371582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1540828.5714285714,
            "unit": "ns",
            "range": "± 89436.58248006956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6820780.769230769,
            "unit": "ns",
            "range": "± 156825.9341288443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30913.333333333332,
            "unit": "ns",
            "range": "± 498.3783225431784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9862213.333333334,
            "unit": "ns",
            "range": "± 162718.9464193077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24057566.666666668,
            "unit": "ns",
            "range": "± 312404.5172223865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58565207.692307696,
            "unit": "ns",
            "range": "± 528662.5001856706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123449773.33333333,
            "unit": "ns",
            "range": "± 925235.4337191825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237548853.33333334,
            "unit": "ns",
            "range": "± 1766600.840543648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3399526.6666666665,
            "unit": "ns",
            "range": "± 11222.371973010082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1077866.0757211538,
            "unit": "ns",
            "range": "± 1838.4750432833298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720721.015625,
            "unit": "ns",
            "range": "± 931.6703719525154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002188.9322916667,
            "unit": "ns",
            "range": "± 3276.0049180196243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606594.4986979166,
            "unit": "ns",
            "range": "± 481.25281455077544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561603.22265625,
            "unit": "ns",
            "range": "± 804.0969881289096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2218313.3333333335,
            "unit": "ns",
            "range": "± 40910.45738939524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2165468.4210526315,
            "unit": "ns",
            "range": "± 65520.01594422453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2763334.6153846155,
            "unit": "ns",
            "range": "± 72988.68373827654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2231703.3333333335,
            "unit": "ns",
            "range": "± 65176.36806406896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2935680,
            "unit": "ns",
            "range": "± 51834.450761190536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174784.12698412698,
            "unit": "ns",
            "range": "± 7850.194292833004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165904.2857142857,
            "unit": "ns",
            "range": "± 7298.529447162443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144705.88235294117,
            "unit": "ns",
            "range": "± 2883.025881828694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2768986.6666666665,
            "unit": "ns",
            "range": "± 30389.915307235595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2527807.1428571427,
            "unit": "ns",
            "range": "± 29387.607652146227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11471.42857142857,
            "unit": "ns",
            "range": "± 1408.7256427381226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53291.30434782609,
            "unit": "ns",
            "range": "± 4075.0555089299105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45341.17647058824,
            "unit": "ns",
            "range": "± 782.6707669331752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54816.84210526316,
            "unit": "ns",
            "range": "± 9829.84656740042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2648.453608247423,
            "unit": "ns",
            "range": "± 513.1831629768133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10072.826086956522,
            "unit": "ns",
            "range": "± 961.1237997432336"
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
          "id": "7d98944cb5bde402d2a98fe94ae00258a133889f",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-09-02T09:59:20+09:00",
          "tree_id": "3f3e082b8d11fe969f9b1ffc3c70cb15c5b0818b",
          "url": "https://github.com/planetarium/libplanet/commit/7d98944cb5bde402d2a98fe94ae00258a133889f"
        },
        "date": 1725239513157,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1025577.7777777778,
            "unit": "ns",
            "range": "± 65621.69247357256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1846447.1698113207,
            "unit": "ns",
            "range": "± 66081.85077198867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1590838.6666666667,
            "unit": "ns",
            "range": "± 76580.4009457316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6857440,
            "unit": "ns",
            "range": "± 175838.75900001873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31095.833333333332,
            "unit": "ns",
            "range": "± 780.4564810677016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10090778.57142857,
            "unit": "ns",
            "range": "± 102099.96744195539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25238706.666666668,
            "unit": "ns",
            "range": "± 310850.2199421696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62491103.333333336,
            "unit": "ns",
            "range": "± 360349.815886624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124809113.33333333,
            "unit": "ns",
            "range": "± 1337093.2139034534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253873526.66666666,
            "unit": "ns",
            "range": "± 1693681.952546272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3373230.2864583335,
            "unit": "ns",
            "range": "± 9707.705806257467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047517.2786458334,
            "unit": "ns",
            "range": "± 2505.937967276869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 752690.3125,
            "unit": "ns",
            "range": "± 1027.3774379364272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1975722.2916666667,
            "unit": "ns",
            "range": "± 5559.777482151751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626282.1419270834,
            "unit": "ns",
            "range": "± 3350.5310200711037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574533.2682291666,
            "unit": "ns",
            "range": "± 1414.2763572142967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199937.1428571427,
            "unit": "ns",
            "range": "± 61647.41817843815"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282796.5517241377,
            "unit": "ns",
            "range": "± 62144.620976043916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2781305.5555555555,
            "unit": "ns",
            "range": "± 58126.61101850625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2353971.4285714286,
            "unit": "ns",
            "range": "± 73010.13455609544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3003392.3076923075,
            "unit": "ns",
            "range": "± 44427.27130825655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182037.70491803277,
            "unit": "ns",
            "range": "± 7814.818486576772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174026.66666666666,
            "unit": "ns",
            "range": "± 6818.217537999226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142636.36363636365,
            "unit": "ns",
            "range": "± 2766.3876143628954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2822136.6666666665,
            "unit": "ns",
            "range": "± 37897.73582883786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2614286.6666666665,
            "unit": "ns",
            "range": "± 47182.60676300516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13179.787234042553,
            "unit": "ns",
            "range": "± 1140.7957783965194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58025.53191489362,
            "unit": "ns",
            "range": "± 5494.453433347903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47173.5632183908,
            "unit": "ns",
            "range": "± 2578.5997538827937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68458.16326530612,
            "unit": "ns",
            "range": "± 13784.609103562496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2954.1666666666665,
            "unit": "ns",
            "range": "± 627.5963615114862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11665.95744680851,
            "unit": "ns",
            "range": "± 1346.0058949118677"
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
          "id": "861c70a5ac1598c4831d971565331d95617e987a",
          "message": "feat: Add IStoreService",
          "timestamp": "2024-09-02T10:15:21+09:00",
          "tree_id": "50bdb6ec0160b16ededbad501ad07a07a7dfba44",
          "url": "https://github.com/planetarium/libplanet/commit/861c70a5ac1598c4831d971565331d95617e987a"
        },
        "date": 1725240391998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000544.4444444445,
            "unit": "ns",
            "range": "± 95755.912293858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1770303.3333333333,
            "unit": "ns",
            "range": "± 52276.56878256415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1563710.824742268,
            "unit": "ns",
            "range": "± 107893.0195037939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6774416.666666667,
            "unit": "ns",
            "range": "± 99853.89174674013"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37547.47474747475,
            "unit": "ns",
            "range": "± 4276.617570433854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9630392.857142856,
            "unit": "ns",
            "range": "± 85021.43136414954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23382378.57142857,
            "unit": "ns",
            "range": "± 217745.05621367044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60765820,
            "unit": "ns",
            "range": "± 933699.7163358862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117661633.33333333,
            "unit": "ns",
            "range": "± 721409.3465142347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237321935.7142857,
            "unit": "ns",
            "range": "± 1365060.0801695606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3353664.84375,
            "unit": "ns",
            "range": "± 5064.190932808152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047913.6197916666,
            "unit": "ns",
            "range": "± 2386.7970089637597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746273.7239583334,
            "unit": "ns",
            "range": "± 2518.5156837868753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914621.9270833333,
            "unit": "ns",
            "range": "± 4862.25660443641"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609862.44140625,
            "unit": "ns",
            "range": "± 1090.3438196594996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563518.7360491072,
            "unit": "ns",
            "range": "± 1494.3698098609589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2137464.285714286,
            "unit": "ns",
            "range": "± 22018.514335553464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2200110.638297872,
            "unit": "ns",
            "range": "± 83048.00140003515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2653936.6666666665,
            "unit": "ns",
            "range": "± 37920.120303204785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2256342.5,
            "unit": "ns",
            "range": "± 78497.50571735483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2966353.3333333335,
            "unit": "ns",
            "range": "± 42069.93949988292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178124.1935483871,
            "unit": "ns",
            "range": "± 7671.144259952807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168017.46031746033,
            "unit": "ns",
            "range": "± 7650.944274054688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147006.89655172414,
            "unit": "ns",
            "range": "± 4237.328254798802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2757153.3333333335,
            "unit": "ns",
            "range": "± 35257.11410819234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2556046.6666666665,
            "unit": "ns",
            "range": "± 42617.633283262774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10475.824175824177,
            "unit": "ns",
            "range": "± 1073.968824225841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51578.88888888889,
            "unit": "ns",
            "range": "± 3822.390993718973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45130.61224489796,
            "unit": "ns",
            "range": "± 1748.3568573607256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51484.375,
            "unit": "ns",
            "range": "± 9770.194504609144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2751.5789473684213,
            "unit": "ns",
            "range": "± 342.0411689463702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9703.260869565218,
            "unit": "ns",
            "range": "± 1117.7342748709166"
          }
        ]
      }
    ]
  }
}