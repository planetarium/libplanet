window.BENCHMARK_DATA = {
  "lastUpdate": 1711087463396,
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
      }
    ]
  }
}