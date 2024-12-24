window.BENCHMARK_DATA = {
  "lastUpdate": 1735032343953,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "9f747b2ca24ebd8b4688717d5d9389c4bb0c2b3e",
          "message": "add test and logging",
          "timestamp": "2024-12-24T18:09:53+09:00",
          "tree_id": "8c7b17e56b027e14ae3629d27cf9fffa874531e4",
          "url": "https://github.com/planetarium/libplanet/commit/9f747b2ca24ebd8b4688717d5d9389c4bb0c2b3e"
        },
        "date": 1735032108391,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 975227.2727272727,
            "unit": "ns",
            "range": "± 91290.11929700604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767128.3018867925,
            "unit": "ns",
            "range": "± 65985.2063180088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1549159,
            "unit": "ns",
            "range": "± 149493.7707529628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6727056.862745098,
            "unit": "ns",
            "range": "± 273942.5372262599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 28605.555555555555,
            "unit": "ns",
            "range": "± 1213.0449239089967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9903380,
            "unit": "ns",
            "range": "± 139437.426826516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23885468.75,
            "unit": "ns",
            "range": "± 466137.3813498191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58429230.76923077,
            "unit": "ns",
            "range": "± 350214.3471852045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119059806.66666667,
            "unit": "ns",
            "range": "± 1023963.6373752081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245521286.66666666,
            "unit": "ns",
            "range": "± 3594947.6409591967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3262462.6302083335,
            "unit": "ns",
            "range": "± 9873.993679505747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047500.1041666666,
            "unit": "ns",
            "range": "± 2014.056861010187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739540.9480168269,
            "unit": "ns",
            "range": "± 3962.8721783188626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959165.2064732143,
            "unit": "ns",
            "range": "± 7189.889185148178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625944.8307291666,
            "unit": "ns",
            "range": "± 960.299857733518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562004.6549479166,
            "unit": "ns",
            "range": "± 1505.5879091607126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2295886.6666666665,
            "unit": "ns",
            "range": "± 40530.79722642431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2254153.3333333335,
            "unit": "ns",
            "range": "± 36412.33830657379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2719831.25,
            "unit": "ns",
            "range": "± 53160.77148612499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312755.263157895,
            "unit": "ns",
            "range": "± 73379.31790276346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2967891.304347826,
            "unit": "ns",
            "range": "± 67722.2127722271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91954.44444444444,
            "unit": "ns",
            "range": "± 7073.64408909058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167444.44444444444,
            "unit": "ns",
            "range": "± 7032.9358293623245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147783.87096774194,
            "unit": "ns",
            "range": "± 4315.483501238577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2578870,
            "unit": "ns",
            "range": "± 44987.6522741836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2438390.909090909,
            "unit": "ns",
            "range": "± 49246.18340629636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10389.772727272728,
            "unit": "ns",
            "range": "± 1086.8640719849868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50479.545454545456,
            "unit": "ns",
            "range": "± 3049.294589271921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43874.444444444445,
            "unit": "ns",
            "range": "± 1662.166652233758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51932.608695652176,
            "unit": "ns",
            "range": "± 8883.40975887634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2257.608695652174,
            "unit": "ns",
            "range": "± 307.8581433177806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9937.5,
            "unit": "ns",
            "range": "± 1426.9031612477938"
          }
        ]
      }
    ]
  }
}