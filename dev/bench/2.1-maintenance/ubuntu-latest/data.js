window.BENCHMARK_DATA = {
  "lastUpdate": 1687249551812,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "278c0421ae8276ff3ea9dac2efaba18de37a6531",
          "message": "Merge pull request #3224 from greymistcube/release/2.1.0\n\n🚀 Release 2.1.0",
          "timestamp": "2023-06-20T17:11:44+09:00",
          "tree_id": "3c8b47900f776e7c6b705a66d3eb009253049fe9",
          "url": "https://github.com/planetarium/libplanet/commit/278c0421ae8276ff3ea9dac2efaba18de37a6531"
        },
        "date": 1687249526834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335368.8125,
            "unit": "ns",
            "range": "± 32093.139701435157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564544.9310344825,
            "unit": "ns",
            "range": "± 104327.90690514863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4430412.888888889,
            "unit": "ns",
            "range": "± 90683.91966858026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4417189.7272727275,
            "unit": "ns",
            "range": "± 139549.64155213564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6980479.391304348,
            "unit": "ns",
            "range": "± 171157.23495098652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6238341.665736607,
            "unit": "ns",
            "range": "± 14282.697819166582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1867142.9788161058,
            "unit": "ns",
            "range": "± 2598.151967349285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359604.6775948661,
            "unit": "ns",
            "range": "± 535.1988138524239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2563067.2770647323,
            "unit": "ns",
            "range": "± 1692.1345942705893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814879.0559430803,
            "unit": "ns",
            "range": "± 422.86451461808366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745860.2063151042,
            "unit": "ns",
            "range": "± 589.0142434010958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 295560.6595744681,
            "unit": "ns",
            "range": "± 11428.229408063624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279628.5714285714,
            "unit": "ns",
            "range": "± 7822.562672966371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247601.85185185185,
            "unit": "ns",
            "range": "± 6896.340744881714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4245686.266666667,
            "unit": "ns",
            "range": "± 24311.313029318757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934534.785714286,
            "unit": "ns",
            "range": "± 20218.991590842244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19146.774193548386,
            "unit": "ns",
            "range": "± 1372.830431666416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88739.32584269663,
            "unit": "ns",
            "range": "± 4770.449235028464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74751.80357142857,
            "unit": "ns",
            "range": "± 3162.375455942993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96096.94897959183,
            "unit": "ns",
            "range": "± 12268.776432134542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5548.958333333333,
            "unit": "ns",
            "range": "± 809.6776215736685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19336.956521739132,
            "unit": "ns",
            "range": "± 1801.8133351688139"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1430677.5918367347,
            "unit": "ns",
            "range": "± 112591.7312399311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670038.722222222,
            "unit": "ns",
            "range": "± 88290.38890376336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209716.5921052634,
            "unit": "ns",
            "range": "± 112037.77640994459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5502243.864864865,
            "unit": "ns",
            "range": "± 170921.36073761494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47359.743902439026,
            "unit": "ns",
            "range": "± 2411.138800716456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8012774.6,
            "unit": "ns",
            "range": "± 62592.52006293221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19949288.57142857,
            "unit": "ns",
            "range": "± 47994.79994863913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51630084.2,
            "unit": "ns",
            "range": "± 334704.35772936774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102788420,
            "unit": "ns",
            "range": "± 487843.73744278285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206227342.7857143,
            "unit": "ns",
            "range": "± 384882.74281040224"
          }
        ]
      }
    ]
  }
}