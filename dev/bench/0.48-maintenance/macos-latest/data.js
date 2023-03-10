window.BENCHMARK_DATA = {
  "lastUpdate": 1678417906890,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f40550f24d6e65b9022bce3b49fb4398fca7dca5",
          "message": "Merge pull request #2909 from colibrishin/benchmark/fix/0.48-maintenance\n\nci/bench: cherrypick of bench pr update to 0.48-maintenance",
          "timestamp": "2023-03-10T11:50:41+09:00",
          "tree_id": "b8377ad036a6e981a456e455b5c1b38f0ac2e7e7",
          "url": "https://github.com/planetarium/libplanet/commit/f40550f24d6e65b9022bce3b49fb4398fca7dca5"
        },
        "date": 1678417869095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 147758.01612903227,
            "unit": "ns",
            "range": "± 10654.675920451346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 121908.12765957447,
            "unit": "ns",
            "range": "± 16211.524653500512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240935.9793814433,
            "unit": "ns",
            "range": "± 29969.493344267106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241003.41304347827,
            "unit": "ns",
            "range": "± 26229.764723990036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4021148.0104166665,
            "unit": "ns",
            "range": "± 396431.8927584965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12194166.693181818,
            "unit": "ns",
            "range": "± 2333920.5795749985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23978.488764044945,
            "unit": "ns",
            "range": "± 4569.682499649138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67251.43478260869,
            "unit": "ns",
            "range": "± 12062.745789608225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64215.142857142855,
            "unit": "ns",
            "range": "± 10357.777768497801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 143772.4835164835,
            "unit": "ns",
            "range": "± 23059.956986739613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10586.511363636364,
            "unit": "ns",
            "range": "± 1349.0559363531274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27365.876404494382,
            "unit": "ns",
            "range": "± 5837.911867541931"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5377572.406447785,
            "unit": "ns",
            "range": "± 278913.055357549"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6569139.619565218,
            "unit": "ns",
            "range": "± 1127089.5428805067"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27491084.666666668,
            "unit": "ns",
            "range": "± 926170.3713902833"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7334505.777777778,
            "unit": "ns",
            "range": "± 593645.5781754266"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 32254967.684210528,
            "unit": "ns",
            "range": "± 2228842.3145304164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7473755.152260638,
            "unit": "ns",
            "range": "± 502508.3716222506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2174490.7822048613,
            "unit": "ns",
            "range": "± 82258.52798699212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1345693.8981933594,
            "unit": "ns",
            "range": "± 31551.840282615623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3170508.5890213815,
            "unit": "ns",
            "range": "± 253902.78717995205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853334.4245605469,
            "unit": "ns",
            "range": "± 9701.617034853765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 793745.6598815918,
            "unit": "ns",
            "range": "± 23948.72113916975"
          }
        ]
      }
    ]
  }
}