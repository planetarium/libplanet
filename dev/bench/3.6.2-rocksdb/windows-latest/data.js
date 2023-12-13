window.BENCHMARK_DATA = {
  "lastUpdate": 1702444676477,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "25e457091b6313503c06f75758e1b97a8a33ae13",
          "message": "rocksdb",
          "timestamp": "2023-12-13T14:04:27+09:00",
          "tree_id": "2de6bacda19c9d0d990b4856d215bd1e9899fbbf",
          "url": "https://github.com/planetarium/libplanet/commit/25e457091b6313503c06f75758e1b97a8a33ae13"
        },
        "date": 1702444621195,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002335.3535353536,
            "unit": "ns",
            "range": "± 100844.28217592616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1788088.6075949366,
            "unit": "ns",
            "range": "± 92407.91811358825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1443368.75,
            "unit": "ns",
            "range": "± 149818.21357372092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5102702.631578947,
            "unit": "ns",
            "range": "± 168436.48492042063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36265.555555555555,
            "unit": "ns",
            "range": "± 2665.0109560291316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5222114.285714285,
            "unit": "ns",
            "range": "± 59095.30577664494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13864876.923076924,
            "unit": "ns",
            "range": "± 83050.67884376536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34333082.35294118,
            "unit": "ns",
            "range": "± 687348.2880200675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68869013.33333333,
            "unit": "ns",
            "range": "± 721113.8149385562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 136438314.2857143,
            "unit": "ns",
            "range": "± 937476.5251273416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3249423.5546875,
            "unit": "ns",
            "range": "± 13040.586188845826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1021850.7552083334,
            "unit": "ns",
            "range": "± 3171.8964914036305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 710288.6418269231,
            "unit": "ns",
            "range": "± 3045.155108161171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003645.9585336538,
            "unit": "ns",
            "range": "± 8106.152997044453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617629.0114182692,
            "unit": "ns",
            "range": "± 959.3041554005805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561900.2580915178,
            "unit": "ns",
            "range": "± 645.0727160950586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2190553.3333333335,
            "unit": "ns",
            "range": "± 37853.795179926274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2375116.6666666665,
            "unit": "ns",
            "range": "± 69674.6136093283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2930411.290322581,
            "unit": "ns",
            "range": "± 88963.34330280592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2819296.923076923,
            "unit": "ns",
            "range": "± 130744.85645861797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6134318.461538462,
            "unit": "ns",
            "range": "± 283466.8300107548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182418.8679245283,
            "unit": "ns",
            "range": "± 7532.188787100886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174791.22807017545,
            "unit": "ns",
            "range": "± 7027.377094055444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145533.33333333334,
            "unit": "ns",
            "range": "± 6266.445031541674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2803090,
            "unit": "ns",
            "range": "± 38470.02172378606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2607634.782608696,
            "unit": "ns",
            "range": "± 65696.80086784116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13245.161290322581,
            "unit": "ns",
            "range": "± 1719.170434998296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61444.565217391304,
            "unit": "ns",
            "range": "± 6574.5824942517775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51192.708333333336,
            "unit": "ns",
            "range": "± 4635.37302857441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65789.898989899,
            "unit": "ns",
            "range": "± 16058.232645717226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2889.3617021276596,
            "unit": "ns",
            "range": "± 524.1415070166803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13382.474226804125,
            "unit": "ns",
            "range": "± 1877.8317676954775"
          }
        ]
      }
    ]
  }
}