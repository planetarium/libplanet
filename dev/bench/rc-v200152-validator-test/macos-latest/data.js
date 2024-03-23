window.BENCHMARK_DATA = {
  "lastUpdate": 1711160068264,
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
      }
    ]
  }
}