window.BENCHMARK_DATA = {
  "lastUpdate": 1713669208954,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "d3d5e725560f9f0ac6abfdf3cfac3553a23e2448",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T17:08:06+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/d3d5e725560f9f0ac6abfdf3cfac3553a23e2448"
        },
        "date": 1711096104939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570001.07142857,
            "unit": "ns",
            "range": "± 108374.34546459379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25966931.444444444,
            "unit": "ns",
            "range": "± 539100.5195134787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64186225.083333336,
            "unit": "ns",
            "range": "± 791695.5689436392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128269169.13636364,
            "unit": "ns",
            "range": "± 15540667.484537406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222953600.01,
            "unit": "ns",
            "range": "± 26835671.81121731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56606.77368421053,
            "unit": "ns",
            "range": "± 14062.340893807896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302253.2727272727,
            "unit": "ns",
            "range": "± 21342.12391682437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263898.9285714286,
            "unit": "ns",
            "range": "± 27043.54223123094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262266.0208333333,
            "unit": "ns",
            "range": "± 21173.444076548327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5145432.730769231,
            "unit": "ns",
            "range": "± 13943.78060973091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4473458.813559322,
            "unit": "ns",
            "range": "± 197167.74715633897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16521.163157894738,
            "unit": "ns",
            "range": "± 2245.458142185926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82578.3111111111,
            "unit": "ns",
            "range": "± 9988.458089377256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76816.63157894737,
            "unit": "ns",
            "range": "± 14107.086606091214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84989.75,
            "unit": "ns",
            "range": "± 13778.140519258071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6057.336956521739,
            "unit": "ns",
            "range": "± 1199.5579705762673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18299.67525773196,
            "unit": "ns",
            "range": "± 2753.3031791010794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1388528.0204081633,
            "unit": "ns",
            "range": "± 152281.8055003722"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602487.6666666665,
            "unit": "ns",
            "range": "± 246334.5716561188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2083751.0714285714,
            "unit": "ns",
            "range": "± 108127.52643040851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13594880.886597939,
            "unit": "ns",
            "range": "± 5118381.202826762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3603264.0833333335,
            "unit": "ns",
            "range": "± 52506.48676195479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3959828.5384615385,
            "unit": "ns",
            "range": "± 101732.40436408874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4607169.285714285,
            "unit": "ns",
            "range": "± 109742.18879782545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4634227.878378378,
            "unit": "ns",
            "range": "± 232233.33883349333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19863023.48901099,
            "unit": "ns",
            "range": "± 2273749.93265018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4993167.46546875,
            "unit": "ns",
            "range": "± 518107.61589445855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409461.206825658,
            "unit": "ns",
            "range": "± 47473.84821479944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 887387.1805889423,
            "unit": "ns",
            "range": "± 9769.601353867354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2010423.0959472656,
            "unit": "ns",
            "range": "± 61948.75740983375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635263.1117788461,
            "unit": "ns",
            "range": "± 6715.197062425901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 628427.5726171875,
            "unit": "ns",
            "range": "± 51277.23746745705"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "09761e64a58d6c030f3f7fad0f3b491c8d06c680",
          "message": "increase context timeout",
          "timestamp": "2024-03-27T18:06:55+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/09761e64a58d6c030f3f7fad0f3b491c8d06c680"
        },
        "date": 1711531438668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7719836.428571428,
            "unit": "ns",
            "range": "± 135534.35278000374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18828852.214285713,
            "unit": "ns",
            "range": "± 216033.40876254748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47636691.766666666,
            "unit": "ns",
            "range": "± 1387282.4336592122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94497511.73809524,
            "unit": "ns",
            "range": "± 2191150.013088855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194647687.5,
            "unit": "ns",
            "range": "± 5805686.421227665"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48312.81182795699,
            "unit": "ns",
            "range": "± 10945.79162527226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218520.16,
            "unit": "ns",
            "range": "± 10998.978832256767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210555.97826086957,
            "unit": "ns",
            "range": "± 10097.796517948993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210225.09375,
            "unit": "ns",
            "range": "± 24910.963540315093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3983015.2333333334,
            "unit": "ns",
            "range": "± 72075.0879653263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3548916.533333333,
            "unit": "ns",
            "range": "± 61487.12668851524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13363.709677419354,
            "unit": "ns",
            "range": "± 1352.42037924158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61986.05913978495,
            "unit": "ns",
            "range": "± 9256.817127724757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52152.97142857143,
            "unit": "ns",
            "range": "± 2530.8940046829225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63286.395833333336,
            "unit": "ns",
            "range": "± 8978.074770155838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4331.919191919192,
            "unit": "ns",
            "range": "± 1050.5589248718568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14784.421052631578,
            "unit": "ns",
            "range": "± 2806.8454375313167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1284995.9784946237,
            "unit": "ns",
            "range": "± 78672.69700681182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2920246.6875,
            "unit": "ns",
            "range": "± 237541.88477231868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198068.3194444445,
            "unit": "ns",
            "range": "± 101205.3213048486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14497924.29,
            "unit": "ns",
            "range": "± 4805602.130809249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3009489.331578947,
            "unit": "ns",
            "range": "± 212393.53176434783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3094562.95,
            "unit": "ns",
            "range": "± 68423.13343143761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3629570.4285714286,
            "unit": "ns",
            "range": "± 156019.00403063794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3781614.433333333,
            "unit": "ns",
            "range": "± 168791.48185791867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16235000.553763442,
            "unit": "ns",
            "range": "± 2021508.1897598642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368242.88384046,
            "unit": "ns",
            "range": "± 95237.97818807026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1360818.0232077206,
            "unit": "ns",
            "range": "± 24618.87629350351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 974216.0931905111,
            "unit": "ns",
            "range": "± 100422.29435147104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2111399.9099264704,
            "unit": "ns",
            "range": "± 81819.18043829226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663640.7387109376,
            "unit": "ns",
            "range": "± 26322.463276786773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568762.4654947916,
            "unit": "ns",
            "range": "± 8603.797902443"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "225778269c59f0d59172f99e68c7ddffb2bd5d9b",
          "message": "adjust context timeout",
          "timestamp": "2024-04-20T22:49:10-04:00",
          "tree_id": "bc5851537e4d36c6aaf26859b9671e2ff0dc5705",
          "url": "https://github.com/planetarium/libplanet/commit/225778269c59f0d59172f99e68c7ddffb2bd5d9b"
        },
        "date": 1713669114496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11619889.413978495,
            "unit": "ns",
            "range": "± 4052195.0869937134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30152651.257894736,
            "unit": "ns",
            "range": "± 11465948.92474704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 79023506.28571428,
            "unit": "ns",
            "range": "± 28149869.3075371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127224606.92631578,
            "unit": "ns",
            "range": "± 28484408.97720657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220208345.8539326,
            "unit": "ns",
            "range": "± 12889999.015590651"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83134.76136363637,
            "unit": "ns",
            "range": "± 11336.75146003193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331750.297979798,
            "unit": "ns",
            "range": "± 33659.32628831512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303776.97402597405,
            "unit": "ns",
            "range": "± 15459.7460309483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 346851.0578947368,
            "unit": "ns",
            "range": "± 52730.897774659716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4838118.384210526,
            "unit": "ns",
            "range": "± 301558.57987846446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3987590.1379310344,
            "unit": "ns",
            "range": "± 217984.37928109014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23824.891304347828,
            "unit": "ns",
            "range": "± 4024.8690087387904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118052.40625,
            "unit": "ns",
            "range": "± 17576.87521003131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125029.95555555556,
            "unit": "ns",
            "range": "± 15852.276131298822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118439.58947368422,
            "unit": "ns",
            "range": "± 20445.246613194864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8345.370967741936,
            "unit": "ns",
            "range": "± 1448.635709194107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25203.782608695652,
            "unit": "ns",
            "range": "± 3051.2236937243338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1570266.9,
            "unit": "ns",
            "range": "± 149623.95522821855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3172174.8882352943,
            "unit": "ns",
            "range": "± 405993.32606020855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 4049056.032608696,
            "unit": "ns",
            "range": "± 1701797.7243929624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21576248.82474227,
            "unit": "ns",
            "range": "± 8056168.839071494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3338977.2093023257,
            "unit": "ns",
            "range": "± 233559.29312657437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3725238.788888889,
            "unit": "ns",
            "range": "± 514033.6234447469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4434117,
            "unit": "ns",
            "range": "± 192665.77349908312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4831068.119565218,
            "unit": "ns",
            "range": "± 358818.8970635892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24786627.76595745,
            "unit": "ns",
            "range": "± 3659764.294464828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6029273.200300481,
            "unit": "ns",
            "range": "± 278145.98297535564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934647.9757401317,
            "unit": "ns",
            "range": "± 60071.43579374014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157874.15435432,
            "unit": "ns",
            "range": "± 33062.634155943655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854367.0980342743,
            "unit": "ns",
            "range": "± 83545.39507582987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898680.0504807692,
            "unit": "ns",
            "range": "± 11877.082722720786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756771.1215444711,
            "unit": "ns",
            "range": "± 11674.464157684803"
          }
        ]
      }
    ]
  }
}