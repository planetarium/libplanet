window.BENCHMARK_DATA = {
  "lastUpdate": 1711337154671,
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
          "id": "e1940cdbab6abe40cbabf296f61b5da7ce7faea1",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T14:49:36+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/e1940cdbab6abe40cbabf296f61b5da7ce7faea1"
        },
        "date": 1711087392721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7667495.857142857,
            "unit": "ns",
            "range": "± 23942.69196550265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18844982.277777776,
            "unit": "ns",
            "range": "± 345732.8499410059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46142510,
            "unit": "ns",
            "range": "± 340831.11263137124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93244664.6764706,
            "unit": "ns",
            "range": "± 1796970.331365415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190733507.83333334,
            "unit": "ns",
            "range": "± 3919800.309007789"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33606.056818181816,
            "unit": "ns",
            "range": "± 2664.981209560266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225569.62765957447,
            "unit": "ns",
            "range": "± 19345.208673692025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212317.28260869565,
            "unit": "ns",
            "range": "± 18560.270358682454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197208.15625,
            "unit": "ns",
            "range": "± 21209.568399205866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3838825.3571428573,
            "unit": "ns",
            "range": "± 63146.689667310035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3384290.2666666666,
            "unit": "ns",
            "range": "± 59080.01991423722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12677.837209302326,
            "unit": "ns",
            "range": "± 1082.875375594887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63320.28888888889,
            "unit": "ns",
            "range": "± 8103.010909732626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90135.17368421053,
            "unit": "ns",
            "range": "± 19758.291463651356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88612.44318181818,
            "unit": "ns",
            "range": "± 12645.963381996784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5274.8917525773195,
            "unit": "ns",
            "range": "± 2306.23317318478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12196.82584269663,
            "unit": "ns",
            "range": "± 1628.396302384656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1056418.5483870967,
            "unit": "ns",
            "range": "± 88618.78206378002"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2225601.2564102565,
            "unit": "ns",
            "range": "± 113597.28867013563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1750009.2525773195,
            "unit": "ns",
            "range": "± 128140.50378734915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8802047.068181818,
            "unit": "ns",
            "range": "± 328773.76754069387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2873406.388888889,
            "unit": "ns",
            "range": "± 95103.98336415862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2956665.59375,
            "unit": "ns",
            "range": "± 136813.73162723414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3552787.586956522,
            "unit": "ns",
            "range": "± 87581.65286328422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3716138.867647059,
            "unit": "ns",
            "range": "± 178013.26361558505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16736528.193548387,
            "unit": "ns",
            "range": "± 2553204.7814292577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4552938.095020708,
            "unit": "ns",
            "range": "± 240840.52511692254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1347426.8270733173,
            "unit": "ns",
            "range": "± 5255.017898345591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 905035.9299479167,
            "unit": "ns",
            "range": "± 13322.870673710335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2157000.3450317383,
            "unit": "ns",
            "range": "± 99402.14537999182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629709.5459681919,
            "unit": "ns",
            "range": "± 2908.8169580983695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578059.1255580357,
            "unit": "ns",
            "range": "± 6336.197807365052"
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
          "id": "f7dd8105fd12ce3e1087ffad6082c4a982d00246",
          "message": "increase context timeout",
          "timestamp": "2024-03-23T10:50:31+09:00",
          "tree_id": "384d510b58e6353a80c50d262356495c857f2b4f",
          "url": "https://github.com/planetarium/libplanet/commit/f7dd8105fd12ce3e1087ffad6082c4a982d00246"
        },
        "date": 1711159976365,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10101722.043478262,
            "unit": "ns",
            "range": "± 754624.304266931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23719810.71276596,
            "unit": "ns",
            "range": "± 1638717.4979099052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62266208.86170213,
            "unit": "ns",
            "range": "± 4004223.3405054086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126550118.67708333,
            "unit": "ns",
            "range": "± 7334991.646231637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247545079.09876543,
            "unit": "ns",
            "range": "± 12572587.41090791"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76977.35714285714,
            "unit": "ns",
            "range": "± 13240.201066425125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355990.95652173914,
            "unit": "ns",
            "range": "± 30037.144415464194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368935.67346938775,
            "unit": "ns",
            "range": "± 48031.69683818348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 354684.8404255319,
            "unit": "ns",
            "range": "± 43981.492636365234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4709948.895833333,
            "unit": "ns",
            "range": "± 319183.1306916052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4074229.6428571427,
            "unit": "ns",
            "range": "± 263771.6003577794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21420.905263157896,
            "unit": "ns",
            "range": "± 3650.9532828986157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112071.27659574468,
            "unit": "ns",
            "range": "± 20207.478847153496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123233.17894736842,
            "unit": "ns",
            "range": "± 18532.676363987957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130328.39247311828,
            "unit": "ns",
            "range": "± 18328.81843926707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9182.978494623656,
            "unit": "ns",
            "range": "± 1447.9374008995678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25467.081395348836,
            "unit": "ns",
            "range": "± 4112.642217001323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525887.918367347,
            "unit": "ns",
            "range": "± 179786.44056388803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729303.5789473685,
            "unit": "ns",
            "range": "± 117700.3208833087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2522083.3279569894,
            "unit": "ns",
            "range": "± 150573.47319733718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16725014.02020202,
            "unit": "ns",
            "range": "± 5535427.4561354155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673336.425531915,
            "unit": "ns",
            "range": "± 408353.95312930143"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3991982.8958333335,
            "unit": "ns",
            "range": "± 422652.38560237485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4875686.236842105,
            "unit": "ns",
            "range": "± 490631.7107324812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5371682.02,
            "unit": "ns",
            "range": "± 662267.7563583393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26728240.205263156,
            "unit": "ns",
            "range": "± 3836293.6446383134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6509632.716435186,
            "unit": "ns",
            "range": "± 178599.0144200514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902655.3471779337,
            "unit": "ns",
            "range": "± 70841.0899024023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1179647.9739200368,
            "unit": "ns",
            "range": "± 18851.303528441127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2892466.815995066,
            "unit": "ns",
            "range": "± 147193.15146638214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 894597.8641288326,
            "unit": "ns",
            "range": "± 36954.32528412293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795483.1593143857,
            "unit": "ns",
            "range": "± 21072.819068643556"
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
          "id": "c763fb4efba51247f6c4eb516c9d8d13c92447c1",
          "message": "update context timeout",
          "timestamp": "2024-03-25T12:03:07+09:00",
          "tree_id": "bc5851537e4d36c6aaf26859b9671e2ff0dc5705",
          "url": "https://github.com/planetarium/libplanet/commit/c763fb4efba51247f6c4eb516c9d8d13c92447c1"
        },
        "date": 1711337063980,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8392438.142857144,
            "unit": "ns",
            "range": "± 139347.4813008872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21377202.3625,
            "unit": "ns",
            "range": "± 1091689.5321182497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50820220.733333334,
            "unit": "ns",
            "range": "± 1514050.5156953337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115480217.53,
            "unit": "ns",
            "range": "± 10687709.880433885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227599387.29896906,
            "unit": "ns",
            "range": "± 13598398.94357766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73553.94943820225,
            "unit": "ns",
            "range": "± 10391.754715563542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306045.34065934067,
            "unit": "ns",
            "range": "± 19236.053583033303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 306887.72826086957,
            "unit": "ns",
            "range": "± 26831.1338224845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331772.3494623656,
            "unit": "ns",
            "range": "± 48336.2682593305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4411344.103174604,
            "unit": "ns",
            "range": "± 202128.93437123165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3965114.3703703703,
            "unit": "ns",
            "range": "± 204557.1062972663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23620.05617977528,
            "unit": "ns",
            "range": "± 4807.602382400453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115078.13043478261,
            "unit": "ns",
            "range": "± 15600.962832513931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113516.37078651685,
            "unit": "ns",
            "range": "± 19480.155675585494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99902.65789473684,
            "unit": "ns",
            "range": "± 18820.339417607564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6539.585106382979,
            "unit": "ns",
            "range": "± 1407.771606442191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20012.273684210526,
            "unit": "ns",
            "range": "± 4980.566308572485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1506519.4270833333,
            "unit": "ns",
            "range": "± 195167.43670037435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2842253.6967213117,
            "unit": "ns",
            "range": "± 126879.10920423683"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586693.6082474226,
            "unit": "ns",
            "range": "± 213609.77311816736"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12750958.567567568,
            "unit": "ns",
            "range": "± 350584.2570748896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3387836.6739130435,
            "unit": "ns",
            "range": "± 268244.5829644704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3585255.776595745,
            "unit": "ns",
            "range": "± 341041.12537439284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4433882.825,
            "unit": "ns",
            "range": "± 229523.6712934963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4445834.230769231,
            "unit": "ns",
            "range": "± 295534.0756058457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25133730.297872342,
            "unit": "ns",
            "range": "± 6286551.663100161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6256751.074375,
            "unit": "ns",
            "range": "± 239083.52220009404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1910476.2484095981,
            "unit": "ns",
            "range": "± 91794.38612165736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137440.717430321,
            "unit": "ns",
            "range": "± 38289.50517430599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2704757.500966495,
            "unit": "ns",
            "range": "± 173128.69769066563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820225.2370605469,
            "unit": "ns",
            "range": "± 15860.143922645058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805565.3751541941,
            "unit": "ns",
            "range": "± 17012.195111474546"
          }
        ]
      }
    ]
  }
}